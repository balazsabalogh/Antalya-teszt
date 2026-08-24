const APP_VERSION='0.7.4-blue-country-skin';
const dayColors=['#d43b43','#2e8b68','#e1a12f','#3e81d5','#9c6b45','#6d58a8','#2e9aa0','#c95b88'];
const CAT={historic:{icon:'⌂',color:'#edcf85',label:'Látnivaló'},museum:{icon:'▣',color:'#edcf85',label:'Látnivaló'},beach:{icon:'≈',color:'#68aee5',label:'Strand'},park:{icon:'♧',color:'#81bc88',label:'Park'},waterfall:{icon:'≋',color:'#68b7d7',label:'Természet'},ancient:{icon:'⌘',color:'#edcf85',label:'Látnivaló'},food:{icon:'⋔',color:'#e69250',label:'Étterem'},coffee:{icon:'◒',color:'#82b89b',label:'Kávézó'},bar:{icon:'▽',color:'#aa83cb',label:'Bár'},shop:{icon:'▤',color:'#83a2c3',label:'Bolt'},wc:{icon:'WC',color:'#8ab0c6',label:'WC'},hotel:{icon:'⌂',color:'#9c8dc0',label:'Szállás'},attraction:{icon:'◇',color:'#efbf58',label:'Program'},marina:{icon:'≈',color:'#6bb6c6',label:'Kikötő'}};
const IMG={hadrian:'./assets/photos/hadrian.jpg',konyaalti:'./assets/photos/konyaalti.jpg',duden:'./assets/photos/duden.png',perge:'./assets/photos/perge.jpg',kursunlu:'./assets/photos/kursunlu.jpg',phaselis:'./assets/photos/phaselis.jpg'};
const POIS={
'hotel':{name:'Suite Laguna Otel',lat:36.8917,lon:30.6907,type:'hotel',image:IMG.konyaalti,sub:'Szállás · Muratpaşa',hours:'24 órás recepció',duration:'—',why:'A hét antalyai bázisa.',practical:'Érkezés után innen indul minden napi útvonal.',intel:'A recepciótól érdemes rákérdezni az aznapi helyi közlekedési változásokra.'},
'konyaalti':{name:'Konyaaltı Beach',lat:36.8663,lon:30.6432,type:'beach',image:IMG.konyaalti,sub:'Strand · Konyaaltı',hours:'Szabadon látogatható',duration:'2–5 óra',why:'Hosszú városi partszakasz hegyes panorámával; laza első teljes napra jó.',practical:'Kavicsos részek miatt strandcipő hasznos lehet. Árnyék és víz legyen tervben.',intel:'A beach cluboknál rendelés előtt nézzétek meg az árlistát.'},
'beachpark':{name:'Beach Park',lat:36.8788,lon:30.6649,type:'park',image:IMG.konyaalti,sub:'Park · Konyaaltı',hours:'Szabadon',duration:'45–90 perc',why:'Strand után kényelmes séta és ebéd/kávé megálló.',practical:'A parti útvonalhoz könnyen hozzáfűzhető.',intel:'A közvetlen vízparti helyek árai változóak; ár nélkül ne rendeljetek.'},
'ataturk':{name:'Atatürk Parkı',lat:36.8891,lon:30.6929,type:'park',image:IMG.konyaalti,sub:'Park · kilátás',hours:'Szabadon',duration:'30–60 perc',why:'Jó naplementés pihenőpont a sziklák fölött.',practical:'Estére, vacsora előtt érdemes időzíteni.',intel:'Sötétedés után is forgalmasabb részeken maradjatok.'},
'museum':{name:'Antalya Archaeology Museum',lat:36.8919,lon:30.6808,type:'museum',image:IMG.perge,sub:'Múzeum · régészet',hours:'Nyitvatartás ellenőrzendő',duration:'1.5–2.5 óra',why:'A környék antik helyszíneit sokkal érthetőbbé teszi.',practical:'Perge előtt vagy Kaleiçi nap elején jó.',intel:'Indulás előtt ellenőrizzétek az aktuális jegyet és zárórát.'},
'hadrian':{name:'Hadrianus Kapısı',lat:36.8841,lon:30.7080,type:'historic',image:IMG.hadrian,sub:'Római diadalív · Kaleiçi',hours:'Szabadon megtekinthető',duration:'20–30 perc',why:'Hadrianus császár látogatásának emlékére emelt római kapu, Antalya egyik ikonikus történelmi pontja.',practical:'A reggeli vagy késő délutáni fény jobb fotóhoz és kevésbé forró.',intel:'Forgalmas, turistás rész: táskára és telefonra érdemes figyelni.'},
'kaleici':{name:'Kaleiçi Óváros',lat:36.8847,lon:30.7056,type:'historic',image:IMG.hadrian,sub:'Óváros · történelmi negyed',hours:'Szabadon',duration:'2–4 óra',why:'Szűk utcák, oszmán házak, római és szeldzsuk rétegek, esti hangulat.',practical:'Kényelmes cipő; sok a lejtő és a lépcső.',intel:'Ár nélküli turistás étlapnál előre kérdezzetek rá a végösszegre.'},
'marina':{name:'Old City Marina',lat:36.8820,lon:30.7042,type:'marina',image:IMG.konyaalti,sub:'Kikötő · Kaleiçi',hours:'Szabadon',duration:'30–60 perc',why:'Fotós és pihenős pont az óvárosi kör közepén.',practical:'Naplemente előtt különösen jó.',intel:'Hajókirándulásnál indulás előtt tisztázd az időtartamot és teljes árat.'},
'karaali':{name:'Karaalioğlu Park',lat:36.8789,lon:30.7058,type:'park',image:IMG.konyaalti,sub:'Park · tengerparti kilátó',hours:'Szabadon',duration:'45–90 perc',why:'Zöld, szellősebb lezárása az óvárosi napnak.',practical:'Rövid pihenő és naplemente is működik.',intel:'Hőségben itt érdemes hosszabb szünetet tartani.'},
'hidirlik':{name:'Hıdırlık Tower',lat:36.8792,lon:30.7047,type:'historic',image:IMG.hadrian,sub:'Történelmi torony',hours:'Kívülről bármikor',duration:'15–25 perc',why:'Gyors kilátós megálló Karaalioğlu Park mellett.',practical:'Kaleiçi körbe automatikusan beleillik.',intel:'Nem igényel külön nagy kitérőt.'},
'lara':{name:'Lara Beach',lat:36.8450,lon:30.7950,type:'beach',image:IMG.duden,sub:'Strand · Lara',hours:'Szabadon',duration:'2–5 óra',why:'Homokosabb strandnaphoz jó alternatíva.',practical:'Erős napsütés; korábbi kezdés kényelmesebb.',intel:'Beach clubnál mindig legyen előre tiszta, mi tartozik az árba.'},
'duden':{name:'Lower Düden Waterfall',lat:36.8510,lon:30.7822,type:'waterfall',image:IMG.duden,sub:'Vízesés · Lara',hours:'Park nyitvatartás ellenőrzendő',duration:'45–90 perc',why:'A vízesés közvetlenül a Földközi-tengerbe zuhan; Antalya egyik legerősebb klasszikus látványa.',practical:'Késő délután kellemesebb és jó a fény.',intel:'A hajós ajánlat nem szükséges ahhoz, hogy élvezhető legyen a hely.'},
'sandland':{name:'Sandland',lat:36.8437,lon:30.7962,type:'attraction',image:IMG.duden,sub:'Program · Lara',hours:'Esti nyitvatartás ellenőrzendő',duration:'60–90 perc',why:'Laza esti program a strandnap végére.',practical:'Sötétedés után hangulatosabb.',intel:'Jegyárat indulás előtt ellenőrizd.'},
'perge':{name:'Perge Ancient City',lat:36.9610,lon:30.8536,type:'ancient',image:IMG.perge,sub:'Antik város · Aksu',hours:'Nyitvatartás ellenőrzendő',duration:'2–3 óra',why:'Pamphylia egyik legfontosabb antik városa.',practical:'Korán induljatok: kevés árnyék és augusztusban nagyon meleg lehet.',intel:'Jegy és nyitvatartás előző este legyen ellenőrizve.'},
'kursunlu':{name:'Kurşunlu Waterfall',lat:37.0020,lon:30.8215,type:'waterfall',image:IMG.kursunlu,sub:'Vízesés · természet',hours:'Nyitvatartás ellenőrzendő',duration:'1–2 óra',why:'Zöld, hűvösebb levezetés az antik helyszín után.',practical:'Nyáron vízhozam változhat.',intel:'A csúszós részek miatt stabil cipő jobb.'},
'phaselis':{name:'Phaselis Ancient City',lat:36.5256,lon:30.5516,type:'ancient',image:IMG.phaselis,sub:'Romok + tenger · Kemer',hours:'Nyitvatartás ellenőrzendő',duration:'3–5 óra',why:'Az egyik legerősebb kombináció: antik romok és fürdés egy helyen.',practical:'Úszócucc, víz, naptej; korai indulás.',intel:'Az aznapi belépési és parkolási szabályt indulás előtt ellenőrizzétek.'},
'sisci':{name:'Şişçi Volkan',lat:36.8887,lon:30.6988,type:'food',image:IMG.hadrian,sub:'Helyi étel · köfte + piyaz',hours:'Nyitvatartás online ellenőrizhető',duration:'45–75 perc',why:'Helyi jellegű étkezési opció, jól illik belvárosi naphoz.',practical:'Sonar ajánlásként vagy vacsorára használható.',intel:'A friss árakat helyben ellenőrizzétek.'},
'firinci':{name:'Fırıncı Dede',lat:36.8928,lon:30.6971,type:'coffee',image:IMG.hadrian,sub:'Reggeli · pékség',hours:'Reggeli időszak',duration:'20–40 perc',why:'Korai indulós naphoz gyors reggeli pont.',practical:'Kávé + péksüti indulás előtt.',intel:'Kisebb helyi opcióként kezeljük.'},
'migros':{name:'Migros',lat:36.8916,lon:30.6942,type:'shop',image:IMG.konyaalti,sub:'Bolt · alapbevásárlás',hours:'Nyitvatartás változhat',duration:'10–25 perc',why:'Víz, snack, naptej és gyors bevásárlás.',practical:'Első este vagy indulás előtt hasznos.',intel:'Kártyás fizetésnél TRY-t válassz.'},
'wc1':{name:'Nyilvános WC · Karaalioğlu',lat:36.8796,lon:30.7040,type:'wc',image:IMG.konyaalti,sub:'WC · praktikus',hours:'Helyszínen ellenőrzendő',duration:'5–10 perc',why:'Praktikus megálló a városi séta közben.',practical:'Offline POI-ként is elérhető.',intel:'Előfordulhat kis díj; legyen aprópénz.'}
};

const WIKI_PHOTO={
 konyaalti:'Konyaaltı',museum:'Antalya Museum',hadrian:"Hadrian's Gate",kaleici:'Kaleiçi',hidirlik:'Hıdırlık Tower',lara:'Lara Beach',duden:'Düden Waterfalls',sandland:'Sandland',perge:'Perga',kursunlu:'Kurşunlu Waterfall Nature Park',phaselis:'Phaselis'
};
const LOCAL_REAL={konyaalti:'./assets/photos/konyaalti.jpg',hadrian:'./assets/photos/hadrian.jpg',duden:'./assets/photos/duden.png',perge:'./assets/photos/perge.jpg',kursunlu:'./assets/photos/kursunlu.jpg',phaselis:'./assets/photos/phaselis.jpg'};
Object.entries(POIS).forEach(([id,p])=>{p.id=id});
function placeholderFor(p){return `./assets/placeholders/${CAT[p.type]?p.type:'historic'}.svg`}
function offlinePhoto(p){return LOCAL_REAL[p.id]||placeholderFor(p)}
function wikiUrl(id){const t=WIKI_PHOTO[id];return t?`https://en.wikipedia.org/wiki/${encodeURIComponent(t.replace(/ /g,'_'))}`:''}
async function fetchWikiPhoto(id){
 const title=WIKI_PHOTO[id]; if(!title||!navigator.onLine)return null;
 const key='tc_wiki_photo_'+id; const cached=localStorage.getItem(key); if(cached)return cached;
 try{const r=await fetch('https://en.wikipedia.org/api/rest_v1/page/summary/'+encodeURIComponent(title));if(!r.ok)return null;const d=await r.json();const u=d.thumbnail?.source||d.originalimage?.source;if(u){localStorage.setItem(key,u);return u}}catch(e){}return null
}
async function hydrateOnlineImages(root=document){
 const imgs=[...root.querySelectorAll('img[data-poi-img]')];
 await Promise.all(imgs.map(async img=>{const id=img.dataset.poiImg;if(!id||!WIKI_PHOTO[id])return;const url=await fetchWikiPhoto(id);if(!url)return;img.src=url;img.dataset.online='1';const badge=img.closest('.photo-wrap')?.querySelector('.photo-badge');if(badge){badge.hidden=false;badge.textContent='Wikipedia'}}));
}
const SVGICON={
 route:'<svg viewBox="0 0 24 24"><path d="M5 18c0-5 4-5 4-9 0-2-1-3-3-3-2 0-3 1-3 3s1 3 3 3h7c3 0 5-2 5-5"/><circle cx="18" cy="7" r="2"/></svg>',
 days:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18M7 14h2M12 14h2M17 14h1M7 18h2M12 18h2"/></svg>',
 sonar:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/><path d="M7.8 7.8a6 6 0 0 0 0 8.4M16.2 7.8a6 6 0 0 1 0 8.4M4.9 4.9a10 10 0 0 0 0 14.2M19.1 4.9a10 10 0 0 1 0 14.2"/></svg>',
 nav:'<svg viewBox="0 0 24 24"><path d="M21 3 10 14"/><path d="m21 3-7 18-4-7-7-4 18-7Z"/></svg>',
 settings:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1A7 7 0 0 0 15 6l-.3-2.6h-4L10.4 6A7 7 0 0 0 8 7.1l-2.4-1-2 3.4L5.6 11a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.4-1A7 7 0 0 0 10.4 18l.3 2.6h4L15 18a7 7 0 0 0 1.5-1.1l2.4 1 2-3.4-2-1.5c.1-.3.1-.7.1-1Z"/></svg>',
 bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg>',
 heart:'<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>'
};
function uiIcon(n){return SVGICON[n]||''}

const DAYS=[
{id:1,date:'08.25.',title:'Érkezés · laza este',color:dayColors[0],hero:'hotel',summary:'20:25-ös érkezés után szállás, víz/bolt és könnyű vacsora.',route:['hotel','migros'],optional:['sisci'],transport:'Autó / transzfer',pace:1},
{id:2,date:'08.26.',title:'Konyaaltı · strand',color:dayColors[1],hero:'konyaalti',summary:'Laza strandnap, Beach Park és naplemente.',route:['firinci','konyaalti','beachpark','ataturk'],optional:['museum'],transport:'Gyalog + tömegközlekedés',pace:2},
{id:3,date:'08.27.',title:'Kaleiçi · történelmi Antalya',color:dayColors[2],hero:'kaleici',summary:'Óváros, kapu, kikötő és tengerparti park.',route:['museum','hadrian','kaleici','marina','hidirlik','karaali'],optional:['sisci','wc1'],transport:'Gyalog',pace:3},
{id:4,date:'08.28.',title:'Lara · strand + Düden',color:dayColors[3],hero:'duden',summary:'Lara Beach, Alsó-Düden, este Sandland.',route:['lara','duden','sandland'],optional:[],transport:'Autó',pace:2},
{id:5,date:'08.29.',title:'Perge + Kurşunlu',color:dayColors[4],hero:'perge',summary:'Korai régészeti nap, utána hűsítő vízesés.',route:['perge','kursunlu'],optional:[],transport:'Autó',pace:4},
{id:6,date:'08.30.',title:'Flex nap',color:dayColors[5],hero:'ataturk',summary:'Pihenés, újrázás vagy spontán Sonar-tippek.',route:['ataturk'],optional:['konyaalti','kaleici'],transport:'Vegyes',pace:2},
{id:7,date:'08.31.',title:'Phaselis · Companion Pick',color:dayColors[6],hero:'phaselis',summary:'Romok és tenger egy helyen, egész napos kiruccanás.',route:['phaselis'],optional:[],transport:'Autó',pace:3},
{id:8,date:'09.01.',title:'Utolsó fél nap · haza',color:dayColors[7],hero:'kaleici',summary:'Checkout, könnyű városi program, majd reptér.',route:['hotel','kaleici'],optional:['ataturk','migros'],transport:'Autó',pace:1}
];
let state={day:0,selected:null,sheet:'closed',view:'poi',sonar:false,sonarPins:[],favorites:new Set(JSON.parse(localStorage.getItem('tc_favs')||'[]')),done:new Set(JSON.parse(localStorage.getItem('tc_done')||'[]')),skipped:new Set(JSON.parse(localStorage.getItem('tc_skipped')||'[]')),theme:localStorage.getItem('tc_theme')||'dark',pace:+(localStorage.getItem('tc_pace')||3),transport:localStorage.getItem('tc_transport')||'Vegyes',notifications:[
{id:'n1',priority:'useful',title:'Van még időtök',text:'Van egy érdekes hely a közelben, ami még beleférhet a mai napba.',action:'fit'},
{id:'n2',priority:'info',title:'Antalya offline adatok',text:'A helyek, útiterv és Guide a csomagban elérhetők.',action:'settings'}
],nav:false,userPos:null,adding:false};
const $=s=>document.querySelector(s);const $$=s=>[...document.querySelectorAll(s)];
const sheet=$('#sheet'),sheetBody=$('#sheetBody'),expandedNav=$('#expandedNav'),mainNav=$('#mainNav'),logo=$('#companionLogo');
const overlay=$('#fullOverlay'),overlayBody=$('#overlayBody');
function esc(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function catMeta(p){return CAT[p.type]||CAT.historic}
function currentDay(){return DAYS[state.day]}
function save(){localStorage.setItem('tc_favs',JSON.stringify([...state.favorites]));localStorage.setItem('tc_done',JSON.stringify([...state.done]));localStorage.setItem('tc_skipped',JSON.stringify([...state.skipped]));}
function toast(t){const el=$('#toast');el.textContent=t;el.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>el.classList.remove('show'),1800)}
function km(a,b){const R=6371,rad=Math.PI/180;const dlat=(b.lat-a.lat)*rad,dlon=(b.lon-a.lon)*rad;const x=Math.sin(dlat/2)**2+Math.cos(a.lat*rad)*Math.cos(b.lat*rad)*Math.sin(dlon/2)**2;return R*2*Math.atan2(Math.sqrt(x),Math.sqrt(1-x))}
function distText(k){return k<1?Math.round(k*1000)+' m':k.toFixed(1).replace('.',',')+' km'}
function walkText(k){return Math.max(1,Math.round(k/4.5*60))+' perc'}
function gpsInTrip(){return !!state.userPos&&km(state.userPos,POIS.hotel)<80}
function effectiveOrigin(){return gpsInTrip()?state.userPos:{lat:POIS.hotel.lat,lon:POIS.hotel.lon}}
function updateTestBadge(){const b=$('#tripTestBadge');if(b)b.classList.toggle('show',!!state.userPos&&!gpsInTrip())}
function iconButton(icon,label,cls=''){return `<button class="action ${cls}" data-act="${label}"><span>${icon}</span><br>${label}</button>`}

let map,tileDark,tileLight,routeLayer,markerLayer,sonarLayer,userMarker;
function initMap(){
  map=L.map('map',{zoomControl:false,attributionControl:true,preferCanvas:true}).setView([36.8848,30.706],13);
  tileDark=L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',{maxZoom:19,subdomains:'abcd',attribution:'© OpenStreetMap © CARTO'});
  tileLight=L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',{maxZoom:19,subdomains:'abcd',attribution:'© OpenStreetMap © CARTO'});
  (state.theme==='light'?tileLight:tileDark).addTo(map);
  markerLayer=L.layerGroup().addTo(map);sonarLayer=L.layerGroup().addTo(map);
  map.on('click',()=>{closeNotifications();closeCompactIfOpen();const navTarget=state.nav?state.selected:null;const wasSonar=state.selected&&state.sonarPins.includes(state.selected);if(!state.nav)state.selected=null;if(wasSonar)scheduleSonarExpiry();if(state.sheet!=='closed'&&!state.adding)setSheet('closed');if(state.nav&&navTarget){state.selected=navTarget;renderNavBanner(navTarget);drawNavigationRoute(navTarget)}else renderDayMap(false)});
  renderDayMap(true);
}
function switchTiles(){[tileDark,tileLight].forEach(t=>{if(map.hasLayer(t))map.removeLayer(t)});(document.body.classList.contains('theme-light')?tileLight:tileDark).addTo(map)}
function markerHTML(p,num,next=false,dayColor=currentDay().color){const c=catMeta(p);const sel=state.selected===p.id?' selected':'';return `<div class="tc-marker ${next?'next':''}${sel}" style="--mday:${dayColor};--cat:${c.color}"><div class="body"><div class="num">${num||''}</div></div><div class="cat">${c.icon}</div><div class="tip"></div></div>`}
function sonarHTML(p){const c=catMeta(p);const sel=state.selected===p.id?' selected':'';return `<div class="sonar-marker${sel}" style="--cat:${c.color}"><i></i><b>${c.icon}</b></div>`}
async function roadRoute(coords){
  if(!navigator.onLine||coords.length<2)return coords;
  try{
    const q=coords.map(c=>`${c[1]},${c[0]}`).join(';');
    const t=(state.transport||currentDay().transport||'').toLowerCase();
    const srv=t.includes('gyalog')?'routed-foot':t.includes('autó')?'routed-car':'routed-car';
    const r=await fetch(`https://routing.openstreetmap.de/${srv}/route/v1/driving/${q}?overview=full&geometries=geojson&steps=true`);
    if(!r.ok)return coords; const j=await r.json();
    return j.routes?.[0]?.geometry?.coordinates?.map(c=>[c[1],c[0]])||coords;
  }catch(e){return coords}
}
function renderDayMap(fit=false){
  markerLayer.clearLayers();sonarLayer.clearLayers();if(routeLayer)map.removeLayer(routeLayer);const d=currentDay();document.documentElement.style.setProperty('--day',d.color);
  const coords=[];d.route.forEach((id,i)=>{const p=POIS[id];coords.push([p.lat,p.lon]);const next=!state.done.has(id)&&d.route.findIndex(x=>!state.done.has(x)&&!state.skipped.has(x))===i;const m=L.marker([p.lat,p.lon],{icon:L.divIcon({className:'',html:markerHTML(p,i+1,next,d.color),iconSize:[52,66],iconAnchor:[26,63]})}).addTo(markerLayer);m.on('click',e=>{L.DomEvent.stopPropagation(e);selectPoi(id)});});
  routeLayer=L.polyline(coords,{color:d.color,weight:4,opacity:.72,dashArray:'9 8',lineCap:'round'}).addTo(map);roadRoute(coords).then(rc=>{if(routeLayer&&rc.length>coords.length){routeLayer.setLatLngs(rc);routeLayer.setStyle({dashArray:null,opacity:.82})}});
  if(state.sonar)renderSonarPins();
  if(fit&&coords.length){map.fitBounds(L.latLngBounds(coords).pad(.25),{animate:false,maxZoom:14})}
}
function selectPoi(id){state.selected=id;if(state.sonarPins.includes(id))pauseSonarExpiry();state.view='poi';setSheet('mini');renderDayMap(false);const p=POIS[id];setTimeout(()=>map.panTo([p.lat,p.lon],{animate:true}),80)}
function fitRoute(){const pts=currentDay().route.map(id=>[POIS[id].lat,POIS[id].lon]);if(pts.length)map.fitBounds(L.latLngBounds(pts).pad(.25),{maxZoom:14})}
function locate(){if(!navigator.geolocation){toast('A GPS nem elérhető');return}navigator.geolocation.getCurrentPosition(pos=>{state.userPos={lat:pos.coords.latitude,lon:pos.coords.longitude};updateTestBadge();if(userMarker)map.removeLayer(userMarker);const o=effectiveOrigin();userMarker=L.circleMarker([o.lat,o.lon],{radius:8,color:'#fff',weight:3,fillColor:'#357ee9',fillOpacity:1}).addTo(map);map.setView([o.lat,o.lon],15);if(!gpsInTrip())toast('Béta teszt: Antalya pozíciót használunk a trip funkciókhoz');else checkArrival()},()=>toast('A helyzethez engedélyezd a GPS-t'),{enableHighAccuracy:true,timeout:8000})}
function checkArrival(){if(!state.userPos||!gpsInTrip())return;const id=currentDay().route.find(x=>!state.done.has(x)&&!state.skipped.has(x));if(!id)return;const d=km(state.userPos,POIS[id]);if(d<.1&&!state.notifications.some(n=>n.id==='arrive-'+id)){state.notifications.unshift({id:'arrive-'+id,priority:'important',title:'Megérkeztetek',text:POIS[id].name+' · Megnéztük?',action:'arrival',poi:id});renderNotifications()}}

const sheetHeights={closed:0,mini:126,one:()=>Math.round(innerHeight*.37),two:()=>Math.round(innerHeight*.66),full:()=>innerHeight-4};
function heightFor(s){const v=sheetHeights[s];return typeof v==='function'?v():v}
function setSheet(s,view){if(s!=='closed'&&typeof closeCompactIfOpen==='function')closeCompactIfOpen();state.sheet=s;if(view)state.view=view;const h=heightFor(s);document.documentElement.style.setProperty('--sheet-h',h+'px');sheet.className='sheet state-'+s+(s==='closed'?'':' open');const navCompact=(state.view==='navigation'&&s!=='closed');const expanded=(s!=='closed'&&!navCompact);expandedNav.classList.toggle('hidden',!expanded);mainNav.classList.toggle('hide',expanded);mainNav.classList.remove('above-mini');logo.classList.toggle('hide',expanded);const ctr=$('#mapControls');const large=['two','full'].includes(s);ctr.classList.toggle('hidden-by-sheet',large);ctr.style.bottom=`calc(${s==='closed'||navCompact?62:h+12}px + var(--safe-bottom) + 14px)`;renderExpandedNav();renderSheet();if(map&&s!=='closed'&&state.selected){const p=POIS[state.selected];setTimeout(()=>map.panTo([p.lat,p.lon],{animate:true}),60)}}
const PANEL_NAV_ITEMS=[['route','Útiterv','route'],['days','Napok','days'],['sonar','Sonar','sonar'],['settings','Beáll.','settings'],['bell','Értes.','notifications'],['heart','Kedvenc','favorites']];function navMarkup(){return PANEL_NAV_ITEMS.map(([i,l,a])=>`<button class="exp-tab ${a==='settings'?'settings':''}" data-exp="${a}"><span>${uiIcon(i)}${a==='notifications'&&unread()?`<sup>${unread()}</sup>`:''}</span><small>${l}</small></button>`).join('')}function bindPanelNav(root=document){root.querySelectorAll('[data-exp]').forEach(b=>b.onclick=()=>{if(b.dataset.exp==='notifications'&&$('#notifDrawer').classList.contains('open')){closeNotifications();return}openFunction(b.dataset.exp)})}function renderExpandedNav(){if(!expandedNav.classList.contains('hidden')){expandedNav.innerHTML=navMarkup();bindPanelNav(expandedNav)}const on=$('#overlayNav');if(on&&!on.classList.contains('hidden')){on.innerHTML=navMarkup();bindPanelNav(on)}}
function renderSheet(){if(state.sheet==='closed'){sheetBody.innerHTML='';return}if(state.view==='route'){renderRouteSheet();return}if(state.view==='sonar'){renderSonarSheet();return}if(state.view==='navigation'){renderNavSheet();return}if(state.view==='add'){renderAddSheet();return}renderPoiSheet()}
function imgTag(p,cls=''){const src=offlinePhoto(p);return `<span class="photo-wrap ${cls}"><img data-poi-img="${p.id}" src="${src}" alt="${esc(p.name)}"><span class="photo-badge" hidden>Wikipedia</span></span>`}
function miniPoi(p){return `<div class="sheet-card mini-card">${imgTag(p)}<div><div class="title">${esc(p.name)}</div><div class="sub">${esc(p.sub)}</div><div class="sub">${distanceLine(p)}</div></div><button class="expand" data-more>⌃</button></div>`}
function distanceLine(p){const origin=effectiveOrigin();const k=km(origin,p);const prefix=state.userPos&&!gpsInTrip()?'Teszt · ':'';return `${prefix}${distText(k)} · ${walkText(k)} séta · ${p.hours}`}
function renderPoiSheet(){const id=state.selected||currentDay().route[0],p=POIS[id];if(!p)return;
 if(state.sheet==='mini'){sheetBody.innerHTML=miniPoi(p);$('[data-more]').onclick=()=>setSheet('one');hydrateOnlineImages(sheetBody);return}
 if(state.sheet==='one'){
  const inRoute=currentDay().route.includes(id);sheetBody.innerHTML=`${miniPoi(p)}<div class="actions">${iconButton('➤','Navigáció ide','primary')}${inRoute?iconButton('+','Következő','green'):iconButton('+','Útitervhez','green')}${iconButton(state.favorites.has(id)?'♥':'♡','Kedvenc')}${iconButton('•••','Több')}</div><div class="section-title">Környék szűrők</div><div class="filters">${filterHTML()}</div>`;bindPoiActions(id);hydrateOnlineImages(sheetBody);return}
 if(state.sheet==='two'){
  sheetBody.innerHTML=`${imgTag(p,'poi-detail-hero')}<div class="poi-detail-head"><div><h2>${esc(p.name)}</h2><p>${esc(p.sub)}</p><span class="tag good">${p.hours}</span> <span class="tag">${p.duration}</span></div></div><div class="actions">${iconButton('➤','Navigáció ide','primary')}${iconButton('✓','Megnéztem','green')}${iconButton(state.favorites.has(id)?'♥':'♡','Kedvenc')}${iconButton('•••','Több')}</div><div class="guide-block"><h3>Miért érdemes?</h3><p>${esc(p.why)}</p><button class="choice" data-guide style="margin-top:8px">Bővebben / Guide</button></div><div class="section-title">Az útvonalban</div><div class="route-context">${routeRows(id)}</div>`;bindPoiActions(id);$('[data-guide]').onclick=()=>openGuide(id);bindRouteRows();hydrateOnlineImages(sheetBody);return}
 // full means planner focused on selected
 state.view='route';renderRouteSheet();
}
function filterHTML(){return [['⌂','Látnivaló'],['⋔','Étterem'],['◒','Kávé'],['▽','Bár'],['▤','Bolt'],['WC','WC']].map((x,i)=>`<button class="filter ${i===0?'active':''}"><i>${x[0]}</i>${x[1]}</button>`).join('')}
function bindPoiActions(id){$$('[data-act]').forEach(b=>b.onclick=()=>{const a=b.dataset.act;if(a==='Navigáció ide')startNavigation(id);else if(a==='Megnéztem'){state.done.add(id);save();toast('✓ Megnézve');renderDayMap();renderSheet()}else if(a==='Kedvenc'){toggleFav(id);renderSheet()}else if(a==='Következő'||a==='Útitervhez'){addAsNext(id)}else toast(a)})}
function toggleFav(id){if(state.favorites.has(id)){state.favorites.delete(id);toast('Eltávolítva a mentettekből')}else{state.favorites.add(id);toast('♥ Mentve')}save()}
function routeRows(selected){return currentDay().route.map((id,i)=>{const p=POIS[id];return `<div class="route-row ${id===selected?'selected':''} ${state.done.has(id)?'done':''}" data-route-id="${id}"><div class="route-num">${state.done.has(id)?'✓':i+1}</div>${imgTag(p)}<div><b>${esc(p.name)}</b><small>${i===currentDay().route.length-1?'utolsó pont':walkText(km(p,POIS[currentDay().route[i+1]]))+' a következőig'}</small></div><span class="drag">≡</span></div>`}).join('')}
function bindRouteRows(){$$('.route-row').forEach(r=>{r.onclick=()=>{state.selected=r.dataset.routeId;renderSheet()};let t;r.addEventListener('pointerdown',()=>{t=setTimeout(()=>{state.view='route';setSheet('full');toast('Átrendezés mód')},480)});['pointerup','pointercancel','pointerleave'].forEach(e=>r.addEventListener(e,()=>clearTimeout(t)))})}
function renderRouteSheet(){const d=currentDay();if(state.sheet==='one'||state.sheet==='two'){
  const next=d.route.find(id=>!state.done.has(id)&&!state.skipped.has(id))||d.route[0];sheetBody.innerHTML=`<div class="planner-head"><div><h2>${d.id}. nap · ${esc(d.title)}</h2><small>${[...state.done].filter(x=>d.route.includes(x)).length}/${d.route.length} kész</small></div><span class="tag">${esc(d.transport)}</span></div><div class="route-context">${routeRows(next)}</div><button class="add-stop" data-fullplan>Teljes útiterv megnyitása</button>`;$('[data-fullplan]').onclick=()=>setSheet('full','route');bindRouteRows();hydrateOnlineImages(sheetBody);return}
  sheetBody.innerHTML=`<div class="planner-head"><div><h2>${d.id}. nap · ${esc(d.title)}</h2><small>${d.date} · teljes útvonaltervező</small></div><button class="choice" data-close-plan>⌄</button></div><div class="full-planner">${plannerCards()}</div><button class="add-stop" id="addStop">＋ Állomás hozzáadása</button>`;$('[data-close-plan]').onclick=()=>setSheet('two','route');$('#addStop').onclick=()=>enterAddMode();bindPlannerGestures();hydrateOnlineImages(sheetBody);}
function plannerCards(){const r=currentDay().route;return r.map((id,i)=>{const p=POIS[id],done=state.done.has(id),skip=state.skipped.has(id);return `${i?`<div class="transfer">↳ ${walkText(km(POIS[r[i-1]],p))} · ${distText(km(POIS[r[i-1]],p))}</div>`:''}<div class="planner-card ${id===state.selected?'active':''} ${done||skip?'done':''}" data-plan="${id}" data-index="${i}"><div class="swipe-reveal"><span>← Kihagyás</span><span>Megnéztem →</span></div><div class="route-num">${done?'✓':skip?'—':i+1}</div>${imgTag(p)}<div><b>${esc(p.name)}</b><small>${done?'Megnézve':skip?'Kihagyva':p.duration+' · '+p.sub}</small></div><span class="drag">≡</span></div>`}).join('')}
function bindPlannerGestures(){$$('.planner-card').forEach(card=>{let sx=0,dx=0,drag=false;card.addEventListener('pointerdown',e=>{sx=e.clientX;dx=0;drag=true;card.setPointerCapture?.(e.pointerId)});card.addEventListener('pointermove',e=>{if(!drag)return;dx=e.clientX-sx;if(Math.abs(dx)>8)card.style.transform=`translateX(${Math.max(-105,Math.min(105,dx))}px)`});card.addEventListener('pointerup',()=>{if(!drag)return;drag=false;const id=card.dataset.plan;if(dx>72){state.done.add(id);state.skipped.delete(id);toast('✓ Megnézve')}else if(dx<-72){state.skipped.add(id);toast('Kihagyva · húzd még tovább törléshez')}card.style.transform='';save();renderSheet();renderDayMap()});card.onclick=()=>{state.selected=card.dataset.plan;setSheet('two','poi')}})}
function addAsNext(id){const r=currentDay().route;if(r.includes(id)){toast('Már benne van a napi tervben');return}const nextIndex=r.findIndex(x=>!state.done.has(x));r.splice(Math.max(0,nextIndex+1),0,id);toast('✓ Hozzáadva következő állomásként');renderDayMap()}

let sonarExpiryTimer=null;function pauseSonarExpiry(){if(sonarExpiryTimer){clearTimeout(sonarExpiryTimer);sonarExpiryTimer=null}}function scheduleSonarExpiry(){pauseSonarExpiry();if(!state.sonarPins.length)return;sonarExpiryTimer=setTimeout(()=>{if(state.selected&&state.sonarPins.includes(state.selected))return;state.sonarPins=[];state.sonar=false;renderDayMap(false);toast('Sonar találatok elhalványultak')},60000)}
function runSonar(){
  closeCompactIfOpen();state.sonar=true;pauseSonarExpiry();
  $('#sonarPulse').classList.add('on');
  setTimeout(()=>$('#sonarPulse').classList.remove('on'),1650);
  const origin=effectiveOrigin();
  const candidates=Object.keys(POIS).filter(id=>!currentDay().route.includes(id)).sort((a,b)=>km(origin,POIS[a])-km(origin,POIS[b])).slice(0,5);
  state.sonarPins=candidates;renderSonarPins();
  const names=candidates.slice(0,3).map(id=>POIS[id].name).join(' · ');
  state.notifications=state.notifications.filter(n=>n.id!=='sonar-latest');
  state.notifications.unshift({id:'sonar-latest',priority:'useful',title:`${candidates.length} hely van a közelben`,text:names,action:'sonarHistory',pins:[...candidates]});
  renderNotifications();scheduleSonarExpiry();
}
function renderSonarPins(){sonarLayer.clearLayers();state.sonarPins.forEach(id=>{const p=POIS[id];const m=L.marker([p.lat,p.lon],{icon:L.divIcon({className:'',html:sonarHTML(p),iconSize:[34,42],iconAnchor:[16,39]})}).addTo(sonarLayer);m.on('click',e=>{L.DomEvent.stopPropagation(e);selectPoi(id)})})}
function openSonarMode(){
  state.sonar=true;pauseSonarExpiry();
  const origin=effectiveOrigin();
  if(!state.sonarPins.length)state.sonarPins=Object.keys(POIS).filter(id=>!currentDay().route.includes(id)&&km(origin,POIS[id])<2).sort((a,b)=>km(origin,POIS[a])-km(origin,POIS[b]));
  renderDayMap();state.view='sonar';setSheet('two');
}
function sonarListHTML(){
  const origin=effectiveOrigin();
  return state.sonarPins.map(id=>{const p=POIS[id],c=catMeta(p),d=distText(km(origin,p));return `<div class="sonar-result" data-sonar-result="${id}"><div class="sonar-action left">♡ Mentés</div><div class="sonar-action right">＋ Következő</div><div class="sonar-result-card">${imgTag(p)}<div><b>${esc(p.name)}</b><small>${esc(c.label)} · ${d}</small><span>${esc(p.why)}</span></div><i>›</i></div></div>`}).join('')||'<div class="setting-card">Nincs eltárolt találat ezen a környéken.</div>';
}
function renderSonarSheet(){
  sheetBody.innerHTML=`<div class="planner-head"><div><h2>Sonar · Körülötted</h2><small>${state.sonarPins.length} találat · húzd a kártyát jobbra/balra</small></div></div><div class="choice-row sonar-radius">${['250 m','500 m','1 km','2 km'].map((x,i)=>`<button class="choice ${i===2?'active':''}">${x}</button>`).join('')}</div><div class="filters sonar-filters">${filterHTML()}<button class="filter"><i>◇</i>Hidden</button></div><div class="sonar-results">${sonarListHTML()}</div>`;
  bindSonarSwipes();hydrateOnlineImages(sheetBody);
}
function bindSonarSwipes(){
  $$('.sonar-result').forEach(w=>{const card=w.querySelector('.sonar-result-card');let sx=0,dx=0,moved=false;
    card.onpointerdown=e=>{sx=e.clientX;dx=0;moved=false;card.setPointerCapture?.(e.pointerId)};
    card.onpointermove=e=>{if(!sx)return;dx=e.clientX-sx;if(Math.abs(dx)>6)moved=true;card.style.transform=`translateX(${Math.max(-96,Math.min(96,dx))}px)`;w.classList.toggle('to-left',dx<0);w.classList.toggle('to-right',dx>0)};
    card.onpointerup=()=>{const id=w.dataset.sonarResult;card.style.transform='';w.classList.remove('to-left','to-right');if(dx>70){addAsNext(id);toast('Következő állomásként hozzáadva')}else if(dx<-70){toggleFav(id)}sx=0;dx=0};
    card.onclick=e=>{if(moved){e.preventDefault();return}const id=w.dataset.sonarResult;state.selected=id;pauseSonarExpiry();state.view='poi';setSheet('two');renderDayMap(false)};
  })
}

function enterAddMode(){state.adding=true;state.view='add';setSheet('one');state.sonar=true;state.sonarPins=Object.keys(POIS).filter(id=>!currentDay().route.includes(id));renderDayMap();toast('Új állomás hozzáadása')}
function renderAddSheet(){sheetBody.innerHTML=`<div class="planner-head"><div><h2>Új állomás hozzáadása</h2><small>${currentDay().id}. nap · ${esc(currentDay().title)}</small></div><button class="choice" data-add-cancel>×</button></div><div class="actions" style="grid-template-columns:repeat(4,1fr)">${iconButton('×','Mégse')}${iconButton('⌕','Keresés')}${iconButton('◉','Sonar')}${iconButton('✓','Kész','green')}</div><div class="section-title">Koppints egy kiemelt POI-ra</div><p style="font-size:12px;color:var(--muted)">A napi útvonal háttérben marad, a választható helyek erősebben látszanak.</p>`;$('[data-add-cancel]').onclick=exitAddMode;$$('[data-act]').forEach(b=>b.onclick=()=>{if(b.dataset.act==='Mégse'||b.dataset.act==='Kész')exitAddMode();else if(b.dataset.act==='Sonar')runSonar();else toast('Offline keresés: POI névre a következő buildben')})}
function exitAddMode(){pauseSonarExpiry();state.adding=false;state.sonar=false;state.sonarPins=[];renderDayMap();setSheet('full','route')}

function suspendNavBanner(){if(state.nav)$('#navBanner')?.classList.add('hidden')}
function startNavigation(id){
  state.nav=true;state.selected=id;state.view='navigation';setSheet('closed');
  const p=POIS[id],o=effectiveOrigin();map.fitBounds(L.latLngBounds([[o.lat,o.lon],[p.lat,p.lon]]).pad(.30),{maxZoom:16});
  renderNavBanner(id);drawNavigationRoute(id);if(!state.userPos)locate();
}
async function drawNavigationRoute(id){
  const o=effectiveOrigin(),p=POIS[id];const rc=await roadRoute([[o.lat,o.lon],[p.lat,p.lon]]);
  if(routeLayer)map.removeLayer(routeLayer);routeLayer=L.polyline(rc,{color:'#2f7fe2',weight:5,opacity:.92,lineCap:'round'}).addTo(map);
}
function renderNavBanner(id){
  let el=$('#navBanner');if(!el){el=document.createElement('div');el.id='navBanner';el.className='nav-banner';document.body.appendChild(el)}
  const p=POIS[id],origin=effectiveOrigin(),k=km(origin,p),test=state.userPos&&!gpsInTrip();
  const mode=(state.transport||currentDay().transport||'Vegyes');
  const transit=mode.toLowerCase().includes('tömeg')?'<span class="nav-legs">🚶 4 perc · 🚌 busz / villamos szakasz · 🚶 cél</span>':'';
  el.innerHTML=`<div class="nav-arrow">↑</div><div><b>${distText(k)} · ${esc(p.name)}</b><small>${test?'Béta teszt · Antalya-szimuláció':`Haladj a cél felé · ${walkText(k)}`} · ${esc(mode)}</small>${transit}</div>`;
  el.classList.remove('hidden');
}
function endNavigation(){state.nav=false;$('#navBanner')?.remove();state.view='poi';setSheet('closed');renderDayMap(false);toast('Navigáció befejezve')}
function renderNavSheet(){}
function navigationMain(){
  closeCompactIfOpen();closeNotifications();if(state.nav&&state.selected){renderNavBanner(state.selected);setSheet('closed');return}
  const next=currentDay().route.find(id=>!state.done.has(id)&&!state.skipped.has(id));if(next)startNavigation(next);else toast('A mai útvonal minden pontja kész')
}

function showDays(){suspendNavBanner();setSheet('closed');logo.classList.add('hide');mainNav.classList.add('hide');$('#mapControls').classList.add('hidden-by-sheet');const on=$('#overlayNav');on.classList.remove('hidden');renderExpandedNav();$('#overlayTitle').textContent='';$('#overlaySubtitle').textContent='';overlayBody.innerHTML=`<div class="day-carousel-wrap"><div id="daysHandle" class="days-handle"></div><div class="day-carousel">${DAYS.map((d,i)=>dayCard(d,i)).join('')}</div><div class="day-indicator">${DAYS.map((_,i)=>`<i class="${i===state.day?'active':''}" data-daydot="${i}"></i>`).join('')}</div></div>`;overlay.classList.add('days-mode');overlay.classList.remove('hidden');hydrateOnlineImages(overlayBody);const car=$('.day-carousel');const updateDots=()=>{const cards=[...$$('[data-daycard]')];let best=state.day,bestD=1e9;cards.forEach((c,i)=>{const d=Math.abs(c.getBoundingClientRect().left-innerWidth*.08);if(d<bestD){bestD=d;best=i}});$$('[data-daydot]').forEach((d,i)=>d.classList.toggle('active',i===best))};car.addEventListener('scroll',()=>requestAnimationFrame(updateDots));$$('[data-daychoose]').forEach(b=>b.onclick=()=>{state.day=+b.dataset.daychoose;renderDayMap(true);closeOverlay();toast((state.day+1)+'. nap aktív')});requestAnimationFrame(()=>{const c=$(`[data-daycard="${state.day}"]`);c?.scrollIntoView({inline:'center'});updateDots()});const dh=$('#daysHandle');if(dh){let sy=0;dh.onpointerdown=e=>{sy=e.clientY;dh.setPointerCapture?.(e.pointerId)};dh.onpointerup=e=>{if(sy-e.clientY>18){car.querySelector(`[data-daycard="${state.day}"]`)?.scrollIntoView({inline:'center',behavior:'smooth'})}sy=0}}}
function dayCard(d,i){const hero=POIS[d.hero];return `<article class="day-card" data-daycard="${i}" style="--day:${d.color}"><div class="hero">${imgTag(hero)}<div class="hero-copy"><b>${d.id}. nap · ${esc(d.title)}</b><small>${d.date} · ${d.route.length} állomás · ${esc(d.transport)}</small></div></div><div class="day-content"><div class="day-meta"><span class="tag">Tempó ${d.pace}/5</span><span class="tag">${d.route.length} állomás</span>${i===state.day?'<span class="tag good">Aktív nap</span>':''}</div><div class="day-route-mini">${d.route.map((id,j)=>`<div class="row"><span>${state.done.has(id)?'✓':j+1}</span><div><b>${esc(POIS[id].name)}</b><small>${esc(POIS[id].sub)}</small></div><small>${POIS[id].duration}</small></div>`).join('')}</div>${d.optional.length?`<div class="section-title">Még belefér</div>${d.optional.map(id=>`<span class="tag">＋ ${esc(POIS[id].name)}</span>`).join(' ')}`:''}<button class="day-choose" data-daychoose="${i}">Ezt a napot mutasd</button></div></article>`}
function closeCompactIfOpen(){if(!overlay.classList.contains('hidden')&&overlay.classList.contains('days-compact'))closeOverlay()}
function showDaysCompact(){
  if(!overlay.classList.contains('hidden')&&overlay.classList.contains('days-compact')){closeOverlay();return}
  suspendNavBanner();setSheet('closed');
  $('#overlayTitle').textContent='';$('#overlaySubtitle').textContent='';
  overlayBody.innerHTML=`<div class="days-compact-wrap"><div class="days-compact-track">${DAYS.map((d,i)=>{const p=POIS[d.hero];return `<button class="day-compact-card ${i===state.day?'active':''}" data-daycompact="${i}">${imgTag(p)}<span><b>${d.id}. nap</b><small>${esc(d.title)}</small></span></button>`}).join('')}</div><div class="day-indicator">${DAYS.map((_,i)=>`<i class="${i===state.day?'active':''}"></i>`).join('')}</div></div>`;
  overlay.classList.add('days-compact');overlay.classList.remove('hidden');mainNav.classList.remove('hide');logo.classList.remove('hide');hydrateOnlineImages(overlayBody);
  $$('[data-daycompact]').forEach(b=>b.onclick=()=>{state.day=+b.dataset.daycompact;renderDayMap(true);closeOverlay();toast((state.day+1)+'. nap aktív')});
}
function showDayQuickMenu(){showDays()}

function openFunction(name){if(name==='notifications'){toggleNotifications();return}closeNotifications();if(!overlay.classList.contains('hidden'))closeOverlay();if(name!=='navigation')suspendNavBanner();if(name==='route'){state.view='route';setSheet('two')}else if(name==='days')showDays();else if(name==='sonar')openSonarMode();else if(name==='settings')showSettings();else if(name==='favorites')showFavorites()}
function showSettings(){openOverlay('Beállítások','Antalya · utazás + Companion',settingsHTML());bindSettings()}
function settingsHTML(){return `<div class="settings-section"><h2>🇹🇷 Antalya · Utazás beállításai</h2><div class="setting-card"><b>Tempó</b><input id="paceSlider" class="pace" type="range" min="1" max="5" value="${state.pace}"><div class="setting-row"><small>Nagyon laza</small><b id="paceLabel">${paceName(state.pace)}</b><small>Veretős</small></div></div><div class="setting-card"><b>Közlekedés</b><div class="choice-row" style="margin-top:10px">${['Gyalog','Tömegközlekedés','Autó','Vegyes'].map(x=>`<button class="choice ${state.transport===x?'active':''}" data-transport="${x}">${x}</button>`).join('')}</div></div><div class="setting-card"><div class="setting-row"><div><b>Sonar Hidden Gem prioritás</b><small>Helyiek tippjei előrébb</small></div><button class="toggle on"></button></div><div class="setting-row"><div><b>Útvonalhoz közeli találatok</b><small>Kevesebb felesleges kitérő</small></div><button class="toggle on"></button></div></div><div class="setting-card"><div><b>Offline Antalya</b><small style="display:block;color:var(--muted);margin-top:4px">POI, Guide, útiterv és fotók a csomagban. A megnyitott térképcsempéket az app gyorsítótárazza.</small></div><div class="setting-row"><span>Offline használatra kész</span><b style="color:#63cf8b">✓</b></div></div></div><div class="settings-section"><h2>Companion · Általános</h2><div class="setting-card"><b>Téma</b><div class="choice-row" style="margin-top:10px">${['dark','light','auto'].map(x=>`<button class="choice ${state.theme===x?'active':''}" data-theme="${x}">${x==='dark'?'Sötét':x==='light'?'Világos':'Automatikus'}</button>`).join('')}</div></div><div class="setting-card"><div class="setting-row"><div><b>Térkép forgatása navigációnál</b><small>Haladási irány lehet felfelé</small></div><button class="toggle on"></button></div><div class="setting-row"><div><b>Újratervezés letérésnél</b><small>Online routing bekötésekor aktív</small></div><button class="toggle on"></button></div><div class="setting-row"><div><b>Megérkezés érzékelése</b><small>GPS alapján, nem jelöl automatikusan késznek</small></div><button class="toggle on"></button></div></div><div class="setting-card"><div class="setting-row"><div><b>Utazás előtt / Közelgő</b><small>2 háttér-információ vár</small></div><button class="choice" data-upcoming>Megnyitás</button></div></div></div>`}
function paceName(x){return ['','Nagyon laza','Laza','Kiegyensúlyozott','Aktív','Veretős'][x]}
function bindSettings(){$('#paceSlider').oninput=e=>{state.pace=+e.target.value;$('#paceLabel').textContent=paceName(state.pace);localStorage.setItem('tc_pace',state.pace)};$$('[data-transport]').forEach(b=>b.onclick=()=>{state.transport=b.dataset.transport;localStorage.setItem('tc_transport',state.transport);showSettings()});$$('[data-theme]').forEach(b=>b.onclick=()=>{state.theme=b.dataset.theme;localStorage.setItem('tc_theme',state.theme);applyTheme();showSettings()});$$('.toggle').forEach(b=>b.onclick=()=>b.classList.toggle('on'));$('[data-upcoming]').onclick=showUpcoming}
function applyTheme(){let resolved=state.theme;if(resolved==='auto'){const h=new Date().getHours();resolved=(h>=20||h<7)?'dark':'light'}document.body.classList.toggle('theme-light',resolved==='light');document.body.classList.toggle('theme-dark',resolved!=='light');if(map)switchTiles()}
function showUpcoming(){openOverlay('Közelgő','Antalya · utazási teendők',`<div class="setting-card"><b>MA / indulás előtt</b><p style="color:var(--muted);font-size:13px">✓ Szállás rögzítve<br>✓ Napi útvonalak készen<br>● Jegyek és nyitvatartások ellenőrzése<br>✓ Offline POI + Guide csomag</p></div><div class="setting-card"><b>HOLNAP / következő nap</b><p style="color:var(--muted);font-size:13px">Naptej · víz · kényelmes cipő · indulási idő ellenőrzése.</p></div>`)}

function openGuide(id){const p=POIS[id];const credit=WIKI_PHOTO[id]?`<div class="photo-credit">Online fotó, ha elérhető: <a href="${wikiUrl(id)}" target="_blank" rel="noopener">Wikipedia / Wikimedia</a>. Offline: helyi fotó vagy kategória-placeholder.</div>`:'';openOverlay(p.name,'Guide · offline is olvasható',`<div class="guide-page"><div class="guide-hero photo-wrap">${imgTag(p)}</div>${credit}<h1>${esc(p.name)}</h1><p style="color:var(--muted);margin-top:0">${esc(p.sub)} · ${p.hours}</p>${accordion('Miért érdemes?',p.why,true)}${accordion('Praktikus infók',p.practical)}${accordion('Traveler Intel · Mire figyelj',p.intel)}${accordion('Közlekedés',distanceLine(p))}${accordion('Közelben','Sonar használatával mutatjuk a letöltött WC, bolt, kávé és étel POI-kat.')}</div>`);hydrateOnlineImages(overlayBody);$$('.accordion button').forEach(b=>b.onclick=()=>b.parentElement.classList.toggle('open'))}
function accordion(t,c,o=false){return `<div class="accordion ${o?'open':''}"><button>${esc(t)} <span>⌄</span></button><div class="acc-body">${esc(c)}</div></div>`}
function showFavorites(){const ids=[...state.favorites];openOverlay('Mentett helyek','Utazás · Közelben · Összes',`<div class="choice-row" style="margin-bottom:12px"><button class="choice active">Utazás</button><button class="choice">Közelben</button><button class="choice">Összes</button></div><div class="favorites">${ids.length?ids.map(id=>{const p=POIS[id];return `<div class="fav-card" data-fav="${id}">${imgTag(p)}<div><b>${esc(p.name)}</b><small>${esc(p.sub)}</small></div><button class="iconbtn">›</button></div>`}).join(''):'<div class="setting-card">Még nincs mentett hely. A POI-knál a ♡ gombbal ments.</div>'}</div>`);$$('[data-fav]').forEach(x=>x.onclick=()=>{closeOverlay();selectPoi(x.dataset.fav)})}

function unread(){return state.notifications.length}
function renderNotifications(){const n=state.notifications;$('#logoBadge').classList.add('hidden');const mb=$('#mainNotifBadge');if(mb){mb.classList.toggle('hidden',!n.length);mb.textContent=n.length}$('#notifStrip').classList.toggle('hidden',!n.length);if(n.length){$('#notifStripTitle').textContent=n[0].title;$('#notifStripText').textContent=n[0].text}$('#notifCountText').textContent=n.length?n.length+' aktív':'Nincs új';$('#notifList').innerHTML=n.map(x=>`<div class="notif-card" data-notif="${x.id}" style="--ncolor:${x.priority==='important'?'#df404a':x.priority==='useful'?'#e0ad45':'#87949e'}"><span class="swipe-hint"><span>Eltüntetés</span><span>Megnyitás</span></span><b>${esc(x.title)}</b><p>${esc(x.text)}</p><small>${x.priority==='important'?'Fontos':x.priority==='useful'?'Hasznos':'Háttér'}</small></div>`).join('');bindNotificationSwipes();renderExpandedNav()}
function openNotifications(){suspendNavBanner();$('#notifDrawer').classList.add('open')}function toggleNotifications(){const d=$('#notifDrawer');if(d.classList.contains('open'))closeNotifications();else openNotifications()}
function closeNotifications(){$('#notifDrawer').classList.remove('open')}
function handleNotification(id){const n=state.notifications.find(x=>x.id===id);if(!n)return;closeNotifications();if(n.action==='settings')showSettings();else if(n.action==='fit')openSonarMode();else if(n.action==='sonarHistory'){state.sonar=true;state.sonarPins=[...(n.pins||[])];renderDayMap(false);openSonarMode();setSheet('two','sonar')}else if(n.action==='arrival'&&n.poi){state.selected=n.poi;state.view='poi';setSheet('two');renderDayMap(false)}}
function dismissNotification(id){state.notifications=state.notifications.filter(x=>x.id!==id);renderNotifications()}
function bindNotificationSwipes(){$$('[data-notif]').forEach(c=>{let sx=0,dx=0,moved=false;c.onpointerdown=e=>{sx=e.clientX;dx=0;moved=false;c.classList.add('swiping');c.setPointerCapture?.(e.pointerId)};c.onpointermove=e=>{if(!sx)return;dx=e.clientX-sx;if(Math.abs(dx)>5)moved=true;c.style.transform=`translateX(${Math.max(-110,Math.min(110,dx))}px)`};c.onpointerup=()=>{c.classList.remove('swiping');c.style.transform='';const id=c.dataset.notif;if(dx<-70)dismissNotification(id);else if(dx>70)handleNotification(id);sx=0;dx=0};c.onclick=e=>{if(moved){e.preventDefault();e.stopPropagation()}}})}

function openOverlay(title,sub,html){suspendNavBanner();$('#overlayTitle').textContent=title;$('#overlaySubtitle').textContent=sub||'';overlayBody.innerHTML=html;overlay.classList.remove('hidden');hydrateOnlineImages(overlayBody)}
function closeOverlay(){overlay.classList.add('hidden');overlay.classList.remove('days-mode','days-compact');overlayBody.innerHTML='';const on=$('#overlayNav');if(on)on.classList.add('hidden');if(state.sheet==='closed'){mainNav.classList.remove('hide');logo.classList.remove('hide');$('#mapControls').classList.remove('hidden-by-sheet')}else{setSheet(state.sheet,state.view)}}
function showHold(items,wide=false){const el=$('#holdMenu');el.classList.toggle('wide',wide);el.innerHTML=items.map((x,i)=>`<button data-hold="${i}">${x.icon?`<span>${x.icon}</span>`:''}<b>${esc(x.label)}</b></button>`).join('');el.classList.remove('hidden');$$('[data-hold]').forEach(b=>b.onpointerup=()=>{items[+b.dataset.hold].act();el.classList.add('hidden');el.classList.remove('wide')});setTimeout(()=>document.addEventListener('pointerup',()=>{el.classList.add('hidden');el.classList.remove('wide')},{once:true}),20)}
function longPress(el,onTap,onHold){let t,held=false;el.addEventListener('pointerdown',e=>{held=false;t=setTimeout(()=>{held=true;onHold(e)},520)});['pointerup','pointercancel','pointerleave'].forEach(ev=>el.addEventListener(ev,e=>{clearTimeout(t);if(ev==='pointerup'&&!held)onTap(e)}))}

function applyMainIcons(){const mapI={mainItinerary:'route',mainDays:'days',mainNotifications:'bell',mainNavigation:'nav'};Object.entries(mapI).forEach(([id,n])=>{const el=$('#'+id+' .ico');if(el)el.innerHTML=uiIcon(n)})}
function bindUI(){
 applyMainIcons();
 $('#locateBtn').onclick=locate;$('#fitRouteBtn').onclick=fitRoute;$('#notifStrip').onclick=toggleNotifications;$('#notifClose').onclick=closeNotifications;$('#overlayClose').onclick=closeOverlay;$('#overlayBack').onclick=closeOverlay;
 $('#mainNotifications').onclick=()=>{closeCompactIfOpen();toggleNotifications()};
 longPress($('#mainDays'),showDaysCompact,showDays);
 longPress($('#mainItinerary'),()=>{closeCompactIfOpen();state.view='route';setSheet('one')},()=>showHold([{label:'Következő',icon:'➜',act:()=>{const n=currentDay().route.find(x=>!state.done.has(x));if(n)selectPoi(n)}},{label:'+ Állomás',icon:'＋',act:enterAddMode},{label:'Teljes terv',icon:'≡',act:()=>setSheet('full','route')},{label:'Mai állapot',icon:'✓',act:()=>toast(`${[...state.done].filter(x=>currentDay().route.includes(x)).length}/${currentDay().route.length} kész`)}],true));
 longPress($('#mainNavigation'),navigationMain,()=>showHold([
   {label:'Következő',icon:'➜',act:navigationMain},{label:'Szállás',icon:'⌂',act:()=>startNavigation('hotel')},{label:'Mai útvonal',icon:'⌁',act:fitRoute},
   {label:'Saját pozíció',icon:'◎',act:locate},{label:'Útvonal középre',icon:'⌖',act:fitRoute},{label:'Navigáció vége',icon:'×',act:endNavigation}
 ],true));
 longPress(logo,runSonar,()=>openSonarMode());
 let sy=0,sh=0,dragging=false;$('#sheetDrag').addEventListener('pointerdown',e=>{if(state.sheet==='closed')return;dragging=true;sy=e.clientY;sh=heightFor(state.sheet);sheet.classList.add('dragging');sheet.setPointerCapture?.(e.pointerId)});window.addEventListener('pointermove',e=>{if(!dragging)return;const h=Math.max(110,Math.min(innerHeight-4,sh+(sy-e.clientY)));document.documentElement.style.setProperty('--sheet-h',h+'px')});window.addEventListener('pointerup',()=>{if(!dragging)return;dragging=false;sheet.classList.remove('dragging');const h=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sheet-h'));const snaps=[['mini',164],['one',heightFor('one')],['two',heightFor('two')],['full',heightFor('full')]];let best=snaps.reduce((a,b)=>Math.abs(b[1]-h)<Math.abs(a[1]-h)?b:a);if(best[0]==='full'){state.view='route'}setSheet(best[0])});
 window.addEventListener('online',()=>toast('Online kapcsolat helyreállt'));window.addEventListener('offline',()=>toast('Offline mód · GPS + letöltött tartalom'));
}
function init(){applyTheme();initMap();bindUI();renderNotifications();setSheet('closed');if('serviceWorker'in navigator)navigator.serviceWorker.register('./service-worker.js').catch(()=>{});}
init();
