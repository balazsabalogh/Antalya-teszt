from pathlib import Path
import re, sys, json, hashlib
root=Path(__file__).resolve().parent
app=(root/'app.js').read_text(); html=(root/'index.html').read_text(); css=(root/'app.css').read_text(); sw=(root/'service-worker.js').read_text()
results=[]
def ok(name, cond, note=''):
    results.append((name,bool(cond),note))
# duplicate DOM ids
ids=re.findall(r'id="([^"]+)"',html)
dups=sorted({x for x in ids if ids.count(x)>1})
ok('HTML IDs unique',not dups,','.join(dups))
# key JS functions unique: accidental appended duplicate definitions create hard-to-debug override regressions
keys=['save','renderDayMap','setSheet','renderRouteSheet','renderSonarSheet','showDays','showSettings','openFunction','openExternalTransit','startNavigation','endNavigation','hardCloseSheet','hardCloseOverlay','clearTransientPanels','bindUI']
for fn in keys:
    c=len(re.findall(rf'function\s+{re.escape(fn)}\s*\(',app))
    ok(f'single definition: {fn}',c==1,str(c))
# Extract POI IDs from top POIS object and every literal route/optional list
poi_block=app[app.index('const POIS={'):app.index('};\n\nconst DAY_COVER')]
poi_ids=set(re.findall(r"^'([^']+)':\{name:",poi_block,re.M))
refs=[]
for m in re.finditer(r'(?:route|optional):\[([^\]]*)\]',app): refs += re.findall(r"'([^']+)'",m.group(1))
missing=sorted(set(refs)-poi_ids)
ok('all itinerary POI refs valid',not missing,','.join(missing))
# Each POI type has a packaged placeholder file or a local exact photo.
types=dict(re.findall(r"^'([^']+)':\{name:.*?type:'([^']+)'",poi_block,re.M))
missing_ph=[]
for pid,t in types.items():
    if not (root/f'assets/placeholders/{t}.svg').exists() and pid not in {'konyaalti','hadrian','duden','perge','kursunlu','phaselis'}:
        missing_ph.append(f'{pid}:{t}')
ok('every POI has offline visual fallback',not missing_ph,','.join(missing_ph))
# User-facing broken image markers should never be emitted by fallback logic.
ok('no question-mark image placeholder markup','?"' not in app and "'>?</" not in app)
# Sheet state contract
ok('sheet stops at dock top','bottom:var(--dock-top)!important' in css)
ok('dock above sheet in z-index','z-index:3000!important' in css and 'z-index:2200!important' in css)
ok('logo above dock','z-index:3100!important' in css)
ok('full sheet opaque','background:#071827!important' in css and '.sheet.fullscreen' in css)
ok('standard overlay opaque','.full-overlay.standard-full' in css and 'background:#071827!important' in css)
# Route controls protected from list overflow
ok('route editor flex/scroll isolation','.route-editor .full-planner{flex:1 1 auto!important' in css)
ok('route actions fixed outside scroll','.route-editor .route-add-row{position:static!important;flex:0 0 auto!important' in css)
# user interactions
ok('sheet handle tap has state logic',"if(!moved){" in app and "state.view==='route'" in app and "state.view==='poi'" in app)
ok('day full handle has tap logic','showDaysCompact()' in app[app.index("const dh=$('#daysHandle')"):app.index('function dayCard')])
ok('POI full closes to mini',"if(state.view==='guide'){state.view='poi';setSheet('mini')}" in app)
ok('route reload persistence save is called after reorder','currentDay().route=[...order];save()' in app)
ok('route reload persistence save is called after add','r.splice(insertAt,0,id);save()' in app)
ok('route reload persistence save is called after remove','currentDay().route=r.filter(x=>x!==id);save()' in app)
# no false transit claims
ok('transit handoff is external','travelmode=transit' in app and 'dirflg=r' in app)
ok('no fabricated transit timing','🚶 4 perc · 🚌' not in app and 'közösségi közlekedés · 🚶 cél' not in app)
# active nav logic exact desired menu map
ok('favorites in main active map',"favorites:'favorites'" in app)
ok('sonar active belongs to logo',"logo.classList.toggle('active',a==='sonar')" in app)
# stable notification layout: no handle element
ok('notification drawer has no drag handle element','class="drawer-handle"' not in html and "drawer-handle" not in app)
# settings truthfulness
ok('settings contain build only','Tesztkörnyezet' in app and 'tripTestBadge' not in html)
ok('arrival switch persists',"tc_arrival_detect" in app)
# PWA icon hashes differ for maskable vs any (so maskable is genuinely distinct)
for size in (192,512):
    a=(root/f'icon-{size}.png').read_bytes(); m=(root/f'icon-maskable-{size}.png').read_bytes()
    ok(f'maskable {size} distinct',hashlib.sha256(a).digest()!=hashlib.sha256(m).digest())
# Cache includes all icon variants
ok('SW caches maskable icons','icon-maskable-192.png' in sw and 'icon-maskable-512.png' in sw)
# Museum closure safety in routes + restore
ok('closed museum not restorable into route',"snap.routes[i].filter(id=>POIS[id]&&id!=='museum')" in app)
# localStorage corrupted state hardened
ok('localStorage arrays hardened','function readJSON' in app and 'safeIds' in app)
# report
fails=[r for r in results if not r[1]]
for n,b,note in results: print(('PASS' if b else 'FAIL'),n,(f'— {note}' if note else ''))
print(f'\nIndependent pass 2: {len(results)-len(fails)}/{len(results)} passed')
if fails: sys.exit(1)
