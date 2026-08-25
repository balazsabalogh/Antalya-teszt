from pathlib import Path
import re, json, subprocess, sys, zipfile
root=Path(__file__).resolve().parent
app=(root/'app.js').read_text()
html=(root/'index.html').read_text()
css=(root/'app.css').read_text()
sw=(root/'service-worker.js').read_text()
manifest=json.loads((root/'manifest.webmanifest').read_text())
checks=[]
def check(name, cond, detail=''):
    checks.append((name,bool(cond),detail))

def cmd_ok(args):
    return subprocess.run(args,capture_output=True,text=True).returncode==0
check('app.js syntax', cmd_ok(['node','--check',str(root/'app.js')]))
check('service-worker syntax', cmd_ok(['node','--check',str(root/'service-worker.js')]))
check('CSS brace balance', css.count('{')==css.count('}'), f"{css.count('{')} / {css.count('}')}")
# Navigation DOM exact
ids=['mainItinerary','mainDays','mainFavorites','mainSettings','mainNotifications','mainNavigation','companionLogo']
for i in ids: check(f'nav element {i}', html.count(f'id="{i}"')==1)
check('no duplicate Sonar tab', 'mainSonar' not in html and 'data-main="sonar"' not in html)
check('logo launches Sonar', "logo.onclick" in app and "openSonarMode(false)" in app)
# route behavior
check('route short tap', "longPress($('#mainItinerary'),()=>openFunction('route')" in app)
check('route long press full', "setSheet('full','route')" in app)
check('route day swipe', 'function bindRouteDaySwipe' in app and 'Math.abs(dx)>55' in app)
check('route reorder', 'function bindPlannerReorder' in app)
check('route swipe actions', 'planner-action-layer' in app and "dx>78" in app and "dx<-78" in app)
check('route persistence', "tc_routes" in app and "tc_day" in app and "function save()" in app)
check('museum absent from default live routes', not re.search(r"route:\[[^\]]*'museum'", app))
check('museum migration', "id!=='museum'" in app)
# Sheet/overlay
check('handle pointer drag', "sheetDrag.addEventListener('pointerdown'" in app and "window.addEventListener('pointermove'" in app)
check('overlay hard close clears return', "state.overlayReturn=null" in re.search(r'function hardCloseOverlay\(\).*?\}', app).group(0))
check('transient add cleanup', 'const wasAdding=state.adding' in app and 'state.sonarPins=[]' in app)
check('full overlay opaque CSS', '.full-overlay.standard-full,.full-overlay.days-mode' in css and 'background:#071827!important' in css)
# Sonar
check('Sonar distances all one row', 'grid-template-columns:repeat(4,minmax(0,1fr))' in css)
check('Sonar expiry scheduled', 'scheduleSonarExpiry();syncActiveMenus()' in app and 'openSonarMode(refresh=true)' in app)
check('Sonar history no refresh', "openSonarMode(false)" in app)
# Navigation/transit
check('continuous GPS', 'navigator.geolocation.watchPosition' in app and 'startGpsWatch()' in app)
check('Apple transit URL', 'maps.apple.com' in app and 'dirflg=r' in app)
check('Google transit URL', 'travelmode=transit' in app)
check('no fake fixed transit legs', '🚶 4 perc · 🚌' not in app)
# Settings
check('test badge absent map DOM', 'tripTestBadge' not in html)
check('test environment in settings', 'Tesztkörnyezet' in app)
for fake in ['Hidden Gem prioritás','Útvonalhoz közeli találatok','Térkép forgatása','Automatikus újratervezés']:
    check(f'fake setting removed: {fake}', fake not in app)
check('arrival setting functional', 'data-arrival-toggle' in app and 'tc_arrival_detect' in app)
# offline/pwa
check('offline fallback css', '.is-offline .offline-map' in css)
check('Leaflet prewarm', 'OPTIONAL_REMOTE' in sw and 'unpkg.com/leaflet@1.9.4' in sw)
check('maskable icons exist', (root/'icon-maskable-192.png').exists() and (root/'icon-maskable-512.png').exists())
purposes=[x.get('purpose') for x in manifest['icons']]
check('manifest separate maskable', purposes.count('maskable')==2 and purposes.count('any')==2, str(purposes))
# local refs in HTML/SW/manifest
refs=set()
for text in (html,sw):
    refs.update(re.findall(r"['\"](\./[^'\"?#]+)",text))
for icon in manifest['icons']: refs.add(icon['src'])
missing=[]
for r in refs:
    if r in ('./',): continue
    q=root/r[2:]
    if not q.exists(): missing.append(r)
check('all packaged local refs exist', not missing, ', '.join(missing))
# version consistency
ver=json.loads((root/'version.json').read_text()).get('version')
check('version rc4', ver=='0.7.9-rc4', str(ver))
check('service worker rc4 cache', "tc-antalya-079-rc4" in sw)
# Storage hardening
check('safe localStorage JSON parsing', 'function readJSON' in app)
check('route schema migration', 'ROUTE_SCHEMA' in app and 'tc_route_schema' in app)

check('readNumber null uses fallback', "if(raw===null||raw==='')return fallback" in app)
check('renderDayMap offline guard', "if(!map||!markerLayer||!sonarLayer||!filterLayer)return" in app)
check('internal navigation offline guard', "function startNavigation(id){if(!map)" in app)
check('map add offline guard', "function enterAddMode(){if(!map)" in app)
check('full days handle tap reacts', "Math.abs(dy)<7){closeOverlay();showDaysCompact()" in app)
check('hold outside listener singleton', 'holdOutsideHandler' in app and 'clearHoldOutside' in app)
check('fallback avoids wrong-place photos', "function offlinePhoto(p){return LOCAL_REAL[p.id]||GENERIC_PHOTO[p.type]||placeholderFor(p)}" in app and 'const GENERIC_PHOTO={};' in app)
# Output
fails=[x for x in checks if not x[1]]
for n,ok,d in checks:
    print(('PASS' if ok else 'FAIL'), n, (f'— {d}' if d else ''))
print(f'\n{len(checks)-len(fails)}/{len(checks)} checks passed')
if fails:
    sys.exit(1)
