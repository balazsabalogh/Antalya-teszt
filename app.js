const APP_VERSION='0.7.8-rc1';
const dayColors=['#d43b43','#2e8b68','#e1a12f','#3e81d5','#9c6b45','#6d58a8','#2e9aa0','#c95b88'];
const CAT={historic:{icon:'⌂',color:'#edcf85',label:'Látnivaló'},museum:{icon:'▣',color:'#edcf85',label:'Látnivaló'},beach:{icon:'≈',color:'#68aee5',label:'Strand'},park:{icon:'♧',color:'#81bc88',label:'Park'},waterfall:{icon:'≋',color:'#68b7d7',label:'Természet'},ancient:{icon:'⌘',color:'#edcf85',label:'Látnivaló'},food:{icon:'⋔',color:'#e69250',label:'Étterem'},coffee:{icon:'◒',color:'#82b89b',label:'Kávézó'},bar:{icon:'▽',color:'#aa83cb',label:'Bár'},shop:{icon:'▤',color:'#83a2c3',label:'Bolt'},wc:{icon:'WC',color:'#8ab0c6',label:'WC'},hotel:{icon:'⌂',color:'#9c8dc0',label:'Szállás'},attraction:{icon:'◇',color:'#efbf58',label:'Program'},marina:{icon:'≈',color:'#6bb6c6',label:'Kikötő'}};
const IMG={hadrian:'./assets/photos/hadrian.jpg',konyaalti:'./assets/photos/konyaalti.jpg',duden:'./assets/photos/duden.png',perge:'./assets/photos/perge.jpg',kursunlu:'./assets/photos/kursunlu.jpg',phaselis:'./assets/photos/phaselis.jpg'};
const POIS={
'hotel':{name:'Suite Laguna Otel',lat:36.8917,lon:30.6907,type:'hotel',image:IMG.konyaalti,sub:'Szállás · Muratpaşa',hours:'24 órás recepció',duration:'—',why:'A hét antalyai bázisa.',practical:'Érkezés után innen indul minden napi útvonal.',intel:'A recepciótól érdemes rákérdezni az aznapi helyi közlekedési változásokra.'},
'konyaalti':{name:'Konyaaltı Beach',lat:36.8663,lon:30.6432,type:'beach',image:IMG.konyaalti,sub:'Strand · Konyaaltı',hours:'Szabadon látogatható',duration:'2–5 óra',why:'Hosszú városi partszakasz hegyes panorámával; laza első teljes napra jó.',practical:'Kavicsos részek miatt strandcipő hasznos lehet. Árnyék és víz legyen tervben.',intel:'A beach cluboknál rendelés előtt nézzétek meg az árlistát.'},
'beachpark':{name:'Beach Park',lat:36.8788,lon:30.6649,type:'park',image:IMG.konyaalti,sub:'Park · Konyaaltı',hours:'Szabadon',duration:'45–90 perc',why:'Strand után kényelmes séta és ebéd/kávé megálló.',practical:'A parti útvonalhoz könnyen hozzáfűzhető.',intel:'A közvetlen vízparti helyek árai változóak; ár nélkül ne rendeljetek.'},
'ataturk':{name:'Atatürk Parkı',lat:36.8891,lon:30.6929,type:'park',image:IMG.konyaalti,sub:'Park · kilátás',hours:'Szabadon',duration:'30–60 perc',why:'Jó naplementés pihenőpont a sziklák fölött.',practical:'Estére, vacsora előtt érdemes időzíteni.',intel:'Sötétedés után is forgalmasabb részeken maradjatok.'},
'museum':{name:'Antalya Archaeology Museum',lat:36.8919,lon:30.6808,type:'museum',image:IMG.perge,sub:'Múzeum · régészet',hours:'Jelenleg zárva · ellenőrizd',duration:'1.5–2.5 óra',why:'A környék antik helyszíneit sokkal érthetőbbé teszi.',practical:'A hivatalos múzeumi oldal jelenleg zártként jelöli; indulás előtt ellenőrizd az újranyitást.',intel:'Ne tervezz rá fix időpontot addig, amíg a hivatalos státusz újra nyitott nem lesz.'},
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
'wc1':{name:'Nyilvános WC · Karaalioğlu',lat:36.8796,lon:30.7040,type:'wc',image:IMG.konyaalti,sub:'WC · praktikus',hours:'Helyszínen ellenőrzendő',duration:'5–10 perc',why:'Praktikus megálló a városi séta közben.',practical:'Offline POI-ként is elérhető.',intel:'Előfordulhat kis díj; legyen aprópénz.'},
'yivli':{name:'Yivli Minare',lat:36.88639,lon:30.70444,type:'historic',image:IMG.hadrian,sub:'Szeldzsuk emlék · Kaleiçi',hours:'Kívülről szabadon',duration:'20–35 perc',why:'Antalya egyik legismertebb városi jelképe, a 13. századi szeldzsuk városkép meghatározó eleme.',practical:'Kaleiçi és Cumhuriyet Meydanı között könnyen útba ejthető.',intel:'Aktív vallási hely környezetében visszafogott öltözet és viselkedés ajánlott.'},
'clocktower':{name:'Antalya Saat Kulesi',lat:36.88684,lon:30.70585,type:'historic',image:IMG.hadrian,sub:'Óratorony · Kalekapısı',hours:'Kívülről szabadon',duration:'10–20 perc',why:'Gyors, karakteres városi megálló közvetlenül Kaleiçi északi kapujánál.',practical:'Yivli Minare és Hadrianus kapuja közé jól beilleszthető.',intel:'Forgalmas csomópont; fotózásnál figyelj a közlekedésre.'},
'kesik':{name:'Kesik Minare · Şehzade Korkut Camii',lat:36.88257,lon:30.70606,type:'historic',image:IMG.hadrian,sub:'Történelmi rétegek · Kaleiçi',hours:'Helyszínen ellenőrzendő',duration:'15–25 perc',why:'Római, bizánci, szeldzsuk és oszmán korszakok egymásra rétegződését mutatja egyetlen helyen.',practical:'A Kaleiçi sétában kis kerülővel elérhető.',intel:'Ma ismét működő mecset; belépésnél a helyi szabályokat kövesd.'},
'cumhuriyet':{name:'Cumhuriyet Meydanı',lat:36.88656,lon:30.70293,type:'attraction',image:IMG.hadrian,sub:'Tér · panoráma · belváros',hours:'Szabadon',duration:'20–40 perc',why:'Nyitott városi tér, ahonnan jó rálátás nyílik a történelmi központra és a kikötő irányára.',practical:'Jó találkozó- és tájékozódási pont Kaleiçi előtt.',intel:'Napközben kevés az árnyék; rövid megállónak a legjobb.'},
'tophane':{name:'Tophane Parkı',lat:36.886494,lon:30.701937,type:'park',image:IMG.konyaalti,sub:'Park · kikötő feletti kilátás',hours:'Szabadon',duration:'20–45 perc',why:'Rövid pihenő panorámával az óvárosi kikötő fölött.',practical:'Cumhuriyet Meydanı és a marina között természetes átmenet.',intel:'Naplemente körül népszerűbb; korábban nyugodtabb.'},
'toymuseum':{name:'Antalya Oyuncak Müzesi',lat:36.885678,lon:30.701992,type:'museum',image:IMG.hadrian,sub:'Játékmúzeum · Yat Limanı',hours:'Nyitvatartás ellenőrzendő',duration:'45–75 perc',why:'Kisebb, különleges múzeum a kikötő közelében, több ezer történeti játékkal.',practical:'Esős vagy nagyon forró időben jó beltéri tartalék.',intel:'A nyitvatartást aznap ellenőrizd, mert változhat.'},
'mermerli':{name:'Mermerli Plajı',lat:36.88323,lon:30.70276,type:'beach',image:IMG.konyaalti,sub:'Kis városi strand · Kaleiçi',hours:'Szezonális · ellenőrizd',duration:'60–120 perc',why:'Apró öböl közvetlenül az óváros alatt; különleges kombinációja a történelmi környezetnek és a fürdésnek.',practical:'Kevés a hely és lépcsőn közelíthető meg; reggel jobb eséllyel kényelmes.',intel:'Belépési feltételek és ár változhatnak; helyben ellenőrizd.'},
'aquarium':{name:'Antalya Aquarium',lat:36.87905,lon:30.66034,type:'attraction',image:IMG.konyaalti,sub:'Aquarium · Konyaaltı',hours:'Nyitvatartás ellenőrzendő',duration:'2–3 óra',why:'Nagy beltéri program a Konyaaltı/Beach Park környékén, erős tartalék extrém hőségre.',practical:'A strandnaphoz opcionálisan kapcsolható, de külön időblokkot kér.',intel:'Jegyárat és csomagokat előre ellenőrizd; turistás árképzés lehet.'},
'migros5m':{name:'5M Migros Antalya',lat:36.88260,lon:30.65973,type:'shop',image:IMG.konyaalti,sub:'Bevásárlóközpont · Konyaaltı',hours:'Nyitvatartás ellenőrzendő',duration:'20–60 perc',why:'Nagyobb bevásárláshoz és praktikus dolgokhoz kézenfekvő megálló a Beach Park közelében.',practical:'Strandnapon víz, snack vagy egyéb felszerelés miatt hasznos.',intel:'Kártyás fizetésnél TRY terhelést válassz.'}
};

const DAY_COVER={0:IMG.konyaalti,1:IMG.konyaalti,2:IMG.hadrian,3:IMG.duden,4:IMG.perge,5:IMG.konyaalti,6:IMG.phaselis,7:IMG.hadrian};
function dayCoverTag(i,d){const src=DAY_COVER[i]||offlinePhoto(POIS[d.hero]);return `<span class="photo-wrap"><img src="${src}" alt="${esc(d.title)}"></span>`}
const WIKI_PHOTO={
 konyaalti:'Konyaaltı',beachpark:'Konyaaltı',museum:'Antalya Museum',hadrian:"Hadrian's Gate",kaleici:'Kaleiçi',marina:'Kaleiçi',karaali:'Karaalioğlu Park',hidirlik:'Hidirlik Tower',lara:'Lara Beach',duden:'Düden Waterfalls',sandland:'Sandland',perge:'Perga',kursunlu:'Kurşunlu Waterfall Nature Park',phaselis:'Phaselis',
 yivli:'Yivli Minaret Mosque',clocktower:'Clock towers in Turkey',kesik:'Kesik Minare',cumhuriyet:'Kaleiçi',tophane:'Kaleiçi',toymuseum:'Antalya Toy Museum',mermerli:'Kaleiçi',aquarium:'Antalya Aquarium'
};
const PHOTO_QUERY={
 konyaalti:'Konyaaltı Beach Antalya',beachpark:'Beach Park Konyaaltı Antalya',ataturk:'Atatürk Parkı Antalya',museum:'Antalya Museum',hadrian:'Hadrian Gate Antalya',kaleici:'Kaleiçi Antalya',marina:'Antalya Old City Marina',karaali:'Karaalioğlu Park Antalya',hidirlik:'Hıdırlık Tower Antalya',lara:'Lara Beach Antalya',duden:'Lower Düden Waterfall Antalya',sandland:'Sandland Antalya',perge:'Perge Antalya',kursunlu:'Kurşunlu Waterfall Antalya',phaselis:'Phaselis Antalya',
 yivli:'Yivli Minaret Antalya',clocktower:'Antalya Saat Kulesi clock tower',kesik:'Kesik Minare Antalya',cumhuriyet:'Cumhuriyet Meydanı Antalya',tophane:'Tophane Parkı Antalya',toymuseum:'Antalya Toy Museum',mermerli:'Mermerli Beach Antalya',aquarium:'Antalya Aquarium',
 migros5m:'5M Migros Antalya'
};
const LOCAL_REAL={konyaalti:'./assets/photos/konyaalti.jpg',hadrian:'./assets/photos/hadrian.jpg',duden:'./assets/photos/duden.png',perge:'./assets/photos/perge.jpg',kursunlu:'./assets/photos/kursunlu.jpg',phaselis:'./assets/photos/phaselis.jpg'};
const GENERIC_PHOTO={historic:IMG.hadrian,museum:IMG.perge,beach:IMG.konyaalti,park:IMG.konyaalti,waterfall:IMG.duden,ancient:IMG.perge,food:IMG.hadrian,coffee:IMG.hadrian,bar:IMG.hadrian,shop:IMG.konyaalti,wc:IMG.konyaalti,hotel:IMG.konyaalti,attraction:IMG.hadrian,marina:IMG.konyaalti};
Object.entries(POIS).forEach(([id,p])=>{p.id=id});
function placeholderFor(p){return `./assets/placeholders/${CAT[p.type]?p.type:'historic'}.svg`}
function offlinePhoto(p){return LOCAL_REAL[p.id]||p.image||GENERIC_PHOTO[p.type]||placeholderFor(p)}
function wikiUrl(id){const t=WIKI_PHOTO[id];return t?`https://en.wikipedia.org/wiki/${encodeURIComponent(t.replace(/ /g,'_'))}`:''}
async function fetchWikiPhoto(id){
 if(!navigator.onLine)return null;
 const title=WIKI_PHOTO[id],query=PHOTO_QUERY[id]||title;
 if(!title&&!query)return null;
 const key='tc_wiki_photo_'+id;const cached=localStorage.getItem(key);if(cached)return cached;
 if(title){
  try{const r=await fetch('https://en.wikipedia.org/api/rest_v1/page/summary/'+encodeURIComponent(title));if(r.ok){const d=await r.json();const u=d.thumbnail?.source||d.originalimage?.source;if(u){localStorage.setItem(key,u);return u}}}catch(e){}
 }
 if(query){
  try{
   const api='https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrlimit=8&prop=imageinfo&iiprop=url&iiurlwidth=720&format=json&origin=*&gsrsearch='+encodeURIComponent(query);
   const r=await fetch(api);if(r.ok){const d=await r.json();const pages=Object.values(d.query?.pages||{});const best=pages.find(x=>x.imageinfo?.[0]?.thumburl)||pages.find(x=>x.imageinfo?.[0]?.url);const u=best?.imageinfo?.[0]?.thumburl||best?.imageinfo?.[0]?.url;if(u){localStorage.setItem(key,u);return u}}
  }catch(e){}
 }
 return null
}
async function hydrateOnlineImages(root=document){
 const imgs=[...root.querySelectorAll('img[data-poi-img]')];
 await Promise.all(imgs.map(async img=>{
  const id=img.dataset.poiImg,p=POIS[id];if(!id||!p)return;
  const fallback=img.dataset.fallback||offlinePhoto(p);
  img.onerror=()=>{img.onerror=null;img.src=fallback;img.dataset.online='0';localStorage.removeItem('tc_wiki_photo_'+id);const badge=img.closest('.photo-wrap')?.querySelector('.photo-badge');if(badge)badge.hidden=true};
  if(!WIKI_PHOTO[id]&&!PHOTO_QUERY[id])return;
  const url=await fetchWikiPhoto(id);if(!url)return;
  img.src=url;img.dataset.online='1';const badge=img.closest('.photo-wrap')?.querySelector('.photo-badge');if(badge){badge.hidden=false;badge.textContent='Wikimedia'}
 }));
}
async function prewarmPoiPhotos(){
 if(!navigator.onLine)return;
 const ids=[...new Set([...Object.keys(WIKI_PHOTO),...Object.keys(PHOTO_QUERY)])];
 for(const id of ids){try{const u=await fetchWikiPhoto(id);if(u)await fetch(u).catch(()=>{})}catch(e){}}
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
],nav:false,navVisible:false,userPos:null,adding:false,notifStripDismissed:false,filters:new Set(JSON.parse(localStorage.getItem('tc_filters')||'["historic","food","coffee","bar","park","beach","shop","wc"]')),sonarRadius:+(localStorage.getItem('tc_sonar_radius')||0.5),activeMenu:null,planSnapshots:JSON.parse(localStorage.getItem('tc_plan_snapshots')||'[]')};
const $=s=>document.querySelector(s);const $$=s=>[...document.querySelectorAll(s)];
const sheet=$('#sheet'),sheetBody=$('#sheetBody'),expandedNav=$('#expandedNav'),mainNav=$('#mainNav'),logo=$('#companionLogo');
const overlay=$('#fullOverlay'),overlayBody=$('#overlayBody');
function esc(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function catMeta(p){return CAT[p.type]||CAT.historic}
function currentDay(){return DAYS[state.day]}
function save(){localStorage.setItem('tc_favs',JSON.stringify([...state.favorites]));localStorage.setItem('tc_done',JSON.stringify([...state.done]));localStorage.setItem('tc_skipped',JSON.stringify([...state.skipped]));}
function toast(t){const el=$('#toast');el.textContent=t;el.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>el.classList.remove('show'),1800)}
function activeMenuKey(){
 if($('#notifDrawer')?.classList.contains('open'))return 'notifications';
 if(!overlay.classList.contains('hidden')){
   if(overlay.classList.contains('days-mode')||overlay.classList.contains('days-compact'))return 'days';
   return state.activeMenu;
 }
 if(state.nav)return 'navigation';
 if(state.sheet!=='closed'&&state.view==='route')return 'route';
 if(state.sheet!=='closed'&&state.view==='sonar')return 'sonar';
 return state.activeMenu;
}
function syncActiveMenus(){
 const a=activeMenuKey();
 const mainMap={itinerary:'route',days:'days',settings:'settings',notifications:'notifications',navigation:'navigation'};
 $$('.main-tab[data-main]').forEach(b=>b.classList.toggle('active',mainMap[b.dataset.main]===a));
 $$('.exp-tab[data-exp]').forEach(b=>b.classList.toggle('active',b.dataset.exp===a));
 logo.classList.toggle('active',a==='sonar');
 logo.classList.remove('settings-active');
}
function km(a,b){const R=6371,rad=Math.PI/180;const dlat=(b.lat-a.lat)*rad,dlon=(b.lon-a.lon)*rad;const x=Math.sin(dlat/2)**2+Math.cos(a.lat*rad)*Math.cos(b.lat*rad)*Math.sin(dlon/2)**2;return R*2*Math.atan2(Math.sqrt(x),Math.sqrt(1-x))}
function distText(k){return k<1?Math.round(k*1000)+' m':k.toFixed(1).replace('.',',')+' km'}
function walkText(k){return Math.max(1,Math.round(k/4.5*60))+' perc'}
function gpsInTrip(){return !!state.userPos&&km(state.userPos,POIS.hotel)<80}
function effectiveOrigin(){return gpsInTrip()?state.userPos:{lat:POIS.hotel.lat,lon:POIS.hotel.lon}}
function updateTestBadge(){const b=$('#tripTestBadge');if(b)b.classList.remove('show')}
function iconButton(icon,label,cls=''){return `<button class="action ${cls}" data-act="${label}"><span>${icon}</span><br>${label}</button>`}

let map,tileDark,tileLight,routeLayer,markerLayer,sonarLayer,filterLayer,userMarker;
function initMap(){
  map=L.map('map',{zoomControl:false,attributionControl:true,preferCanvas:true}).setView([36.8848,30.706],13);
  tileDark=L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',{maxZoom:19,subdomains:'abcd',attribution:'© OpenStreetMap © CARTO'});
  tileLight=L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',{maxZoom:19,subdomains:'abcd',attribution:'© OpenStreetMap © CARTO'});
  (state.theme==='light'?tileLight:tileDark).addTo(map);
  markerLayer=L.layerGroup().addTo(map);sonarLayer=L.layerGroup().addTo(map);filterLayer=L.layerGroup().addTo(map);
  map.on('click',()=>{closeNotifications(true);hideHold();closeCompactIfOpen();const navTarget=state.nav?state.selected:null;const wasSonar=state.selected&&state.sonarPins.includes(state.selected);if(!state.nav)state.selected=null;if(wasSonar)scheduleSonarExpiry();if(state.sheet!=='closed'&&!state.adding)setSheet('closed');if(state.nav&&navTarget){state.selected=navTarget;renderNavBanner(navTarget);drawNavigationRoute(navTarget)}else renderDayMap(false)});
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
  renderFilterPins();if(state.sonar)renderSonarPins();
  if(fit&&coords.length){map.fitBounds(L.latLngBounds(coords).pad(.25),{animate:false,maxZoom:14})}
}
function selectPoi(id){if(state.adding&&!currentDay().route.includes(id)){addAsNext(id);exitAddMode();return}state.selected=id;if(state.sonarPins.includes(id))pauseSonarExpiry();state.view='poi';setSheet('mini');renderDayMap(false);const p=POIS[id];setTimeout(()=>map.panTo([p.lat,p.lon],{animate:true}),80)}
function fitRoute(){const pts=currentDay().route.map(id=>[POIS[id].lat,POIS[id].lon]);if(pts.length)map.fitBounds(L.latLngBounds(pts).pad(.25),{maxZoom:14})}
function locate(){if(!navigator.geolocation){toast('A GPS nem elérhető');return}navigator.geolocation.getCurrentPosition(pos=>{state.userPos={lat:pos.coords.latitude,lon:pos.coords.longitude};updateTestBadge();if(userMarker)map.removeLayer(userMarker);const o=effectiveOrigin();userMarker=L.circleMarker([o.lat,o.lon],{radius:8,color:'#fff',weight:3,fillColor:'#357ee9',fillOpacity:1}).addTo(map);map.setView([o.lat,o.lon],15);if(!gpsInTrip())toast('Antalya-szimuláció aktív a trip funkciókhoz');else checkArrival()},()=>toast('A helyzethez engedélyezd a GPS-t'),{enableHighAccuracy:true,timeout:8000})}
function checkArrival(){if(!state.userPos||!gpsInTrip())return;const id=currentDay().route.find(x=>!state.done.has(x)&&!state.skipped.has(x));if(!id)return;const d=km(state.userPos,POIS[id]);if(d<.1&&!state.notifications.some(n=>n.id==='arrive-'+id)){state.notifStripDismissed=false;state.notifications.unshift({id:'arrive-'+id,priority:'important',title:'Megérkeztetek',text:POIS[id].name+' · Megnéztük?',action:'arrival',poi:id});renderNotifications()}}

const sheetHeights={closed:0,mini:198,one:()=>Math.round(innerHeight*.50),two:()=>Math.round(innerHeight*.52),full:()=>innerHeight};
function heightFor(s){
 if(s==='two'&&state.view==='sonar')return Math.round(innerHeight*.49);
 if(s==='two'&&state.view==='route')return Math.round(innerHeight*.52);
 if(s==='two'&&state.view==='poi')return Math.round(innerHeight*.52);
 const v=sheetHeights[s];return typeof v==='function'?v():v
}
function setSheet(s,view){
 if(view)state.view=view;
 if(state.view==='route'&&(s==='one'||s==='full'))s='two';
 if(state.view==='poi'&&s==='one')s='two';
 if(s!=='closed'&&typeof closeCompactIfOpen==='function')closeCompactIfOpen();
 state.sheet=s;
 if(s!=='closed'&&state.view==='route')state.activeMenu='route';
 else if(s!=='closed'&&state.view==='sonar')state.activeMenu='sonar';
 const h=s==='mini'?198:heightFor(s);document.documentElement.style.setProperty('--sheet-h',h+'px');
 sheet.className='sheet state-'+s+(s==='closed'?'':' open')+(s==='full'?' fullscreen':'')+' view-'+state.view;
 expandedNav.classList.add('hidden');
 mainNav.classList.remove('hide');logo.classList.remove('hide');
 const ctr=$('#mapControls');const large=['two','full'].includes(s);ctr.classList.toggle('hidden-by-sheet',large);ctr.style.bottom=`calc(${s==='closed'?60:h+2}px + var(--safe-bottom) + 8px)`;
 renderSheet();
 sheet.querySelectorAll('.sheet-close-all,.guide-close').forEach(x=>x.remove());
 if(s==='full'){
   const x=document.createElement('button');x.className='sheet-close-all';x.textContent='×';x.setAttribute('aria-label','Panel bezárása');
   x.onclick=()=>{if(state.view==='guide'){state.view='poi';setSheet('mini')}else setSheet('closed')};sheet.appendChild(x)
 }
 if(map&&s!=='closed'&&state.selected&&state.view!=='guide'){const p=POIS[state.selected];setTimeout(()=>map.panTo([p.lat,p.lon],{animate:true}),60)}
 syncActiveMenus();
}
const PANEL_NAV_ITEMS=[['route','Útiterv','route'],['days','Napok','days'],['sonar','Sonar','sonar'],['settings','Beáll.','settings'],['bell','Értes.','notifications'],['nav','Navigáció','navigation']];
function navMarkup(){return PANEL_NAV_ITEMS.map(([i,l,a])=>`<button class="exp-tab" data-exp="${a}"><span>${uiIcon(i)}${a==='notifications'&&unread()?`<sup>${unread()}</sup>`:''}</span><small>${l}</small></button>`).join('')}
function bindPanelNav(root=document){root.querySelectorAll('[data-exp]').forEach(b=>b.onclick=()=>openFunction(b.dataset.exp))}
function renderExpandedNav(){expandedNav.classList.add('hidden');const on=$('#overlayNav');if(on)on.classList.add('hidden');syncActiveMenus()}
function renderSheet(){if(state.sheet==='closed'){sheetBody.innerHTML='';return}if(state.view==='route'){renderRouteSheet();return}if(state.view==='sonar'){renderSonarSheet();return}if(state.view==='navigation'){renderNavSheet();return}if(state.view==='add'){renderAddSheet();return}if(state.view==='savedadd'){renderSavedAddSheet();return}if(state.view==='guide'){renderGuideSheet();return}renderPoiSheet()}
function imgTag(p,cls=''){const src=offlinePhoto(p);return `<span class="photo-wrap ${cls}"><img data-poi-img="${p.id}" data-fallback="${src}" src="${src}" alt="${esc(p.name)}"><span class="photo-badge" hidden>Wikimedia</span></span>`}
function miniPoi(p){return `<div class="sheet-card mini-card">${imgTag(p)}<div><div class="title">${esc(p.name)}</div><div class="sub">${esc(p.sub)}</div><div class="sub">${distanceLine(p)}</div></div><button class="expand" data-more aria-label="Tovább nyitás">⌃</button></div>`}
function distanceLine(p){const origin=effectiveOrigin();const k=km(origin,p);const prefix=state.userPos&&!gpsInTrip()?'Teszt · ':'';return `${prefix}${distText(k)} · ${walkText(k)} séta · ${p.hours}`}
function poiActions(id){const inRoute=currentDay().route.includes(id);return `<div class="actions action-carousel">${iconButton('ⓘ','Guide','guide')}${iconButton('➤','Navigáció','primary')}${iconButton('✓','Megnéztem','green')}${iconButton(state.favorites.has(id)?'♥':'♡','Kedvenc')}${inRoute?iconButton('−','Kivétel','danger subtle'):iconButton('+','Útitervhez','add')}${iconButton('↗','Megosztás')}</div>`}
function renderPoiSheet(){const id=state.selected||currentDay().route[0],p=POIS[id];if(!p)return;
 if(state.sheet==='mini'){sheetBody.innerHTML=miniPoi(p);$('[data-more]').onclick=()=>setSheet('two','poi');hydrateOnlineImages(sheetBody);return}
 if(state.sheet==='one'){setSheet('two','poi');return}
 if(state.sheet==='two'){
   sheetBody.innerHTML=`<div class="poi-half-summary">${imgTag(p,'poi-half-photo')}<div class="poi-half-copy"><h2>${esc(p.name)}</h2><p>${esc(p.sub)}</p><small>${distanceLine(p)}</small><span>${esc(p.why)}</span></div><button class="expand detail-expand" data-full-guide aria-label="Guide megnyitása">⌃</button></div>${poiActions(id)}<div class="section-title">Környék szűrők</div><div class="filters">${filterHTML()}</div>`;
   bindPoiActions(id);$('[data-full-guide]').onclick=()=>{state.view='guide';setSheet('full')};bindFilters();hydrateOnlineImages(sheetBody);return
 }
 state.view='guide';renderGuideSheet();
}
const FILTER_TYPES={historic:'Látnivaló',museum:'Látnivaló',ancient:'Látnivaló',attraction:'Látnivaló',food:'Étterem',coffee:'Kávé',bar:'Bár',shop:'Bolt',wc:'WC',park:'Park',beach:'Strand',waterfall:'Természet',marina:'Kikötő'};
function filterHTML(){const defs=[['historic','Látnivaló'],['food','Étterem'],['coffee','Kávé'],['bar','Bár'],['park','Park'],['beach','Strand'],['shop','Bolt'],['wc','WC']];return defs.map(([t,l])=>{const c=CAT[t]||CAT.historic;return `<button class="filter ${state.filters.has(t)?'active':''}" style="--filter-color:${c.color}" data-filter="${t}"><i>${c.icon}</i><span>${l}</span></button>`}).join('')}
function bindFilters(){$$('[data-filter]').forEach(b=>b.onclick=()=>{const t=b.dataset.filter;if(state.filters.has(t))state.filters.delete(t);else state.filters.add(t);localStorage.setItem('tc_filters',JSON.stringify([...state.filters]));if(state.view==='sonar'){refreshSonarPins();renderSonarSheet()}else renderFilterPins();$$(`[data-filter="${t}"]`).forEach(x=>x.classList.toggle('active',state.filters.has(t)))})}
function renderFilterPins(){if(!filterLayer)return;filterLayer.clearLayers();if(!state.filters.size)return;const origin=effectiveOrigin();Object.values(POIS).filter(p=>!currentDay().route.includes(p.id)&&km(origin,p)<4).forEach(p=>{const match=[...state.filters].some(t=>t==='historic'?['historic','museum','ancient','attraction'].includes(p.type):p.type===t);if(!match)return;const m=L.marker([p.lat,p.lon],{icon:L.divIcon({className:'',html:sonarHTML(p),iconSize:[34,42],iconAnchor:[16,39]})}).addTo(filterLayer);m.on('click',e=>{L.DomEvent.stopPropagation(e);selectPoi(p.id)})})}
function bindPoiActions(id){$$('[data-act]').forEach(b=>b.onclick=()=>{const a=b.dataset.act;if(a==='Guide'){state.view='guide';setSheet('full')}else if(a==='Navigáció')startNavigation(id);else if(a==='Megnéztem'){state.done.add(id);save();toast('✓ Megnézve');renderDayMap();renderSheet()}else if(a==='Kedvenc'){toggleFav(id);renderSheet()}else if(a==='Útitervhez'){addAsNext(id)}else if(a==='Kivétel'){removeFromRoute(id)}else if(a==='Megosztás'){navigator.share?.({title:POIS[id].name,text:POIS[id].why}).catch(()=>{});toast('Megosztás')}else toast(a)})}
function toggleFav(id){if(state.favorites.has(id)){state.favorites.delete(id);toast('Eltávolítva a mentettekből')}else{state.favorites.add(id);toast('♥ Mentve')}save()}
function routeRows(selected){return currentDay().route.map((id,i)=>{const p=POIS[id];return `<div class="route-row ${id===selected?'selected':''} ${state.done.has(id)?'done':''}" data-route-id="${id}"><div class="route-num">${state.done.has(id)?'✓':i+1}</div>${imgTag(p)}<div><b>${esc(p.name)}</b><small>${i===currentDay().route.length-1?'utolsó pont':walkText(km(p,POIS[currentDay().route[i+1]]))+' a következőig'}</small></div><span class="drag">≡</span></div>`}).join('')}
function bindRouteRows(){$$('.route-row').forEach(r=>{r.onclick=()=>{state.selected=r.dataset.routeId;renderSheet()};let t;r.addEventListener('pointerdown',()=>{t=setTimeout(()=>{state.view='route';setSheet('full');toast('Átrendezés mód')},480)});['pointerup','pointercancel','pointerleave'].forEach(e=>r.addEventListener(e,()=>clearTimeout(t)))})}
function renderRouteSheet(){const d=currentDay();
 const full=state.sheet==='full';
 sheetBody.innerHTML=`<div class="route-editor ${full?'route-editor-full':'route-editor-half'}"><div class="planner-head route-day-switch"><div><h2>${d.id}. nap · ${esc(d.title)}</h2><small>${d.date} · húzd jobbra/balra a napváltáshoz · ${[...state.done].filter(x=>d.route.includes(x)).length}/${d.route.length} kész</small></div><div class="head-actions"><button class="choice" data-route-favs>♥</button><button class="choice" data-save-plan>Mentés</button><button class="choice" data-restore-plan>↶</button></div></div><div class="full-planner">${plannerCards()}</div><div class="route-add-row"><button class="add-stop" id="addStopMap">＋ Térképről</button><button class="add-stop secondary" id="addStopSaved">♥ Mentettekből</button></div></div>`;
 $('[data-route-favs]').onclick=()=>showFavorites('route');$('[data-save-plan]').onclick=()=>{snapshotPlan('Kézi mentés');toast('✓ Tervállapot elmentve')};$('[data-restore-plan]').onclick=restoreLatestSnapshot;$('#addStopMap').onclick=()=>enterAddMode();$('#addStopSaved').onclick=showSavedAddSheet;
 bindPlannerGestures();bindPlannerReorder();bindRouteDaySwipe();hydrateOnlineImages(sheetBody);
}
function plannerCards(){const r=currentDay().route;return r.map((id,i)=>{const p=POIS[id],done=state.done.has(id),skip=state.skipped.has(id),prev=i?POIS[r[i-1]]:null;return `<div class="planner-swipe" data-plan-wrap="${id}"><div class="planner-action-layer"><span class="done">✓ Megnéztem</span><span class="skip">× Kihagyás</span></div><div class="planner-card ${id===state.selected?'active':''} ${done||skip?'done':''}" data-plan="${id}" data-index="${i}"><div class="route-num">${done?'✓':skip?'—':i+1}</div>${imgTag(p)}<div><b>${esc(p.name)}</b><small>${done?'Megnézve':skip?'Kihagyva':p.duration+' · '+p.sub}</small>${prev?`<small class="planner-transfer">↳ ${walkText(km(prev,p))} · ${distText(km(prev,p))}</small>`:''}</div><button class="drag" aria-label="Átrendezés">≡</button></div></div>`}).join('')}
function bindPlannerGestures(){$$('.planner-swipe').forEach(wrap=>{const card=wrap.querySelector('.planner-card');let sx=0,dx=0,drag=false,moved=false;card.addEventListener('pointerdown',e=>{if(e.target.closest('.drag'))return;sx=e.clientX;dx=0;drag=true;moved=false;card.setPointerCapture?.(e.pointerId)});card.addEventListener('pointermove',e=>{if(!drag)return;dx=e.clientX-sx;if(Math.abs(dx)>7){moved=true;const x=Math.max(-118,Math.min(118,dx));card.style.transform=`translateX(${x}px)`;wrap.classList.toggle('swipe-right',x>0);wrap.classList.toggle('swipe-left',x<0)}});card.addEventListener('pointerup',()=>{if(!drag)return;drag=false;const id=card.dataset.plan;const acted=Math.abs(dx)>78;if(dx>78){snapshotPlan('Megnéztem előtt');state.done.add(id);state.skipped.delete(id);toast('✓ Megnézve')}else if(dx<-78){snapshotPlan('Kihagyás előtt');state.skipped.add(id);state.done.delete(id);toast('Kihagyva')}card.style.transform='';wrap.classList.remove('swipe-left','swipe-right');if(acted){save();renderSheet();renderDayMap()}dx=0});card.onclick=e=>{if(e.target.closest('.drag')||moved){moved=false;return}state.selected=card.dataset.plan;state.activeMenu='route';setSheet('mini','poi')}})}
function bindPlannerReorder(){
 $$('.planner-card .drag').forEach(handle=>{let wrap=null,parent=null,startOrder=null,moved=false;
  handle.onpointerdown=e=>{e.preventDefault();e.stopPropagation();wrap=handle.closest('.planner-swipe');parent=wrap.parentElement;startOrder=[...currentDay().route];moved=false;wrap.classList.add('reordering');handle.setPointerCapture?.(e.pointerId)};
  handle.onpointermove=e=>{if(!wrap)return;const over=document.elementFromPoint(e.clientX,e.clientY)?.closest('.planner-swipe');if(!over||over===wrap||over.parentElement!==parent)return;moved=true;const r=over.getBoundingClientRect();parent.insertBefore(wrap,e.clientY<r.top+r.height/2?over:over.nextSibling)};
  handle.onpointerup=()=>{if(!wrap)return;wrap.classList.remove('reordering');const order=[...parent.querySelectorAll('.planner-swipe')].map(x=>x.dataset.planWrap);if(moved&&order.join('|')!==startOrder.join('|')){snapshotPlan('Átrendezés előtt');currentDay().route=[...order];save();renderDayMap(false);toast('✓ Sorrend frissítve');renderRouteSheet()}wrap=null;parent=null}
 })
}
function bindRouteDaySwipe(){const el=$('.route-day-switch');if(!el)return;let sx=0,sy=0;el.onpointerdown=e=>{if(e.target.closest('button'))return;sx=e.clientX;sy=e.clientY;el.setPointerCapture?.(e.pointerId)};el.onpointerup=e=>{if(!sx)return;const dx=e.clientX-sx,dy=e.clientY-sy;sx=0;if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.25){state.day=(state.day+(dx<0?1:-1)+DAYS.length)%DAYS.length;state.selected=null;renderDayMap(true);renderRouteSheet();toast(`${state.day+1}. nap`)}}}
function snapshotPlan(label='Automatikus mentés'){const snap={id:Date.now(),label,at:new Date().toISOString(),day:state.day,routes:DAYS.map(d=>[...d.route]),done:[...state.done],skipped:[...state.skipped]};state.planSnapshots=[snap,...state.planSnapshots].slice(0,10);localStorage.setItem('tc_plan_snapshots',JSON.stringify(state.planSnapshots));return snap}
function restoreLatestSnapshot(){const snap=state.planSnapshots[0];if(!snap){toast('Nincs korábbi mentés');return}DAYS.forEach((d,i)=>d.route=[...(snap.routes[i]||d.route)]);state.done=new Set(snap.done||[]);state.skipped=new Set(snap.skipped||[]);save();renderDayMap(true);renderSheet();toast('↶ Előző terv visszaállítva')}
function removeFromRoute(id){const r=currentDay().route;if(!r.includes(id))return;snapshotPlan('Kivétel előtt');currentDay().route=r.filter(x=>x!==id);toast('Kivéve az útitervből · mentés készült');renderDayMap(false);renderSheet()}
function addAsNext(id){const r=currentDay().route;if(r.includes(id)){toast('Már benne van a napi tervben');return}snapshotPlan('Hozzáadás előtt');const nextIndex=r.findIndex(x=>!state.done.has(x));r.splice(Math.max(0,nextIndex+1),0,id);toast('✓ Hozzáadva következő állomásként');renderDayMap()}

let sonarExpiryTimer=null;function pauseSonarExpiry(){if(sonarExpiryTimer){clearTimeout(sonarExpiryTimer);sonarExpiryTimer=null}}function scheduleSonarExpiry(){pauseSonarExpiry();if(!state.sonarPins.length)return;sonarExpiryTimer=setTimeout(()=>{if(state.selected&&state.sonarPins.includes(state.selected))return;state.sonarPins=[];state.sonar=false;renderDayMap(false);toast('Sonar találatok elhalványultak')},60000)}
function sonarTypeAllowed(p){if(!state.filters.size)return false;return [...state.filters].some(t=>t==='historic'?['historic','museum','ancient','attraction'].includes(p.type):p.type===t)}
function refreshSonarPins(limit=30){const origin=effectiveOrigin(),radius=state.sonarRadius||.5;state.sonarPins=Object.keys(POIS).filter(id=>!currentDay().route.includes(id)&&km(origin,POIS[id])<=radius&&sonarTypeAllowed(POIS[id])).sort((a,b)=>km(origin,POIS[a])-km(origin,POIS[b])).slice(0,limit);state.sonar=true;renderSonarPins();renderFilterPins()}
function runSonar(){
 closeCompactIfOpen();state.activeMenu='sonar';state.sonar=true;pauseSonarExpiry();
 $('#sonarPulse').classList.add('on');setTimeout(()=>$('#sonarPulse').classList.remove('on'),1650);
 refreshSonarPins(8);const names=state.sonarPins.slice(0,3).map(id=>POIS[id].name).join(' · ');
 state.notifications=state.notifications.filter(n=>n.id!=='sonar-latest');state.notifStripDismissed=false;state.notifications.unshift({id:'sonar-latest',priority:'useful',title:`${state.sonarPins.length} hely van a közelben`,text:names||'A jelenlegi szűrőkkel nincs közeli találat.',action:'sonarHistory',pins:[...state.sonarPins]});renderNotifications();scheduleSonarExpiry();syncActiveMenus()
}
function renderSonarPins(){sonarLayer.clearLayers();state.sonarPins.forEach(id=>{const p=POIS[id];const m=L.marker([p.lat,p.lon],{icon:L.divIcon({className:'',html:sonarHTML(p),iconSize:[34,42],iconAnchor:[16,39]})}).addTo(sonarLayer);m.on('click',e=>{L.DomEvent.stopPropagation(e);selectPoi(id)})})}
function openSonarMode(){state.activeMenu='sonar';state.sonar=true;pauseSonarExpiry();refreshSonarPins();renderDayMap();state.view='sonar';setSheet('two');syncActiveMenus()}
function sonarListHTML(){const origin=effectiveOrigin();return state.sonarPins.map(id=>{const p=POIS[id],c=catMeta(p),d=distText(km(origin,p));return `<div class="sonar-result" data-sonar-result="${id}"><div class="sonar-action left">✕ Elvetés</div><div class="sonar-action right">＋ Hozzáadás</div><div class="sonar-result-card">${imgTag(p)}<div><b>${esc(p.name)}</b><small>${esc(c.label)} · ${d}</small><span>${esc(p.why)}</span></div><i>›</i></div></div>`}).join('')||'<div class="setting-card sonar-empty">A jelenlegi távolsággal és szűrőkkel nincs találat.</div>'}
function renderSonarSheet(){const labels=[[.25,'250 m'],[.5,'500 m'],[1,'1 km'],[2,'2 km']];sheetBody.innerHTML=`<div class="sonar-heading-row"><div><h2>Sonar · Körülötted</h2><small>${state.sonarPins.length} találat</small></div><div class="sonar-head-tools"><button class="sonar-saved" data-sonar-saved aria-label="Mentett helyek">♥</button><div class="choice-row sonar-radius">${labels.map(([v,l])=>`<button class="choice ${Math.abs(state.sonarRadius-v)<.01?'active':''}" data-radius="${v}">${l}</button>`).join('')}</div></div></div><div class="filters sonar-filters">${filterHTML()}</div><div class="sonar-results">${sonarListHTML()}</div>`;$('[data-sonar-saved]').onclick=()=>showFavorites('sonar');$$('[data-radius]').forEach(b=>b.onclick=()=>{state.sonarRadius=+b.dataset.radius;localStorage.setItem('tc_sonar_radius',state.sonarRadius);refreshSonarPins();renderSonarSheet();renderDayMap(false)});bindFilters();bindSonarSwipes();$('[data-open-favs]')?.addEventListener('click',showFavorites);hydrateOnlineImages(sheetBody)}
function bindSonarSwipes(){$$('.sonar-result').forEach(w=>{const card=w.querySelector('.sonar-result-card');let sx=0,dx=0,moved=false;card.onpointerdown=e=>{sx=e.clientX;dx=0;moved=false;card.setPointerCapture?.(e.pointerId)};card.onpointermove=e=>{if(!sx)return;dx=e.clientX-sx;if(Math.abs(dx)>6)moved=true;card.style.transform=`translateX(${Math.max(-96,Math.min(96,dx))}px)`;w.classList.toggle('to-left',dx<0);w.classList.toggle('to-right',dx>0)};card.onpointerup=()=>{const id=w.dataset.sonarResult;card.style.transform='';w.classList.remove('to-left','to-right');if(dx>70){addAsNext(id);toast('Következő állomásként hozzáadva')}else if(dx<-70){state.sonarPins=state.sonarPins.filter(x=>x!==id);toast('Elvetve');renderSonarSheet();renderDayMap(false)}sx=0;dx=0};card.onclick=e=>{if(moved){e.preventDefault();return}const id=w.dataset.sonarResult;state.selected=id;pauseSonarExpiry();state.view='poi';setSheet('mini');renderDayMap(false)}})}

function enterAddMode(){state.adding=true;state.view='add';setSheet('two');state.sonar=true;state.sonarPins=Object.keys(POIS).filter(id=>!currentDay().route.includes(id));renderDayMap();toast('Koppints a térképen egy helyre')}
function renderAddSheet(){sheetBody.innerHTML=`<div class="planner-head"><div><h2>Állomás hozzáadása · térképről</h2><small>${currentDay().id}. nap · koppints egy színes markerre</small></div><button class="choice" data-add-cancel>×</button></div><p class="add-help">A választható helyek a térképen látszanak. Koppintásra azonnal bekerülnek a napi útitervbe.</p><div class="filters">${filterHTML()}</div>`;$('[data-add-cancel]').onclick=exitAddMode;bindFilters()}
function showSavedAddSheet(){state.adding=false;state.view='savedadd';setSheet('two')}
function renderSavedAddSheet(){const ids=[...state.favorites].filter(id=>POIS[id]&&!currentDay().route.includes(id));sheetBody.innerHTML=`<div class="planner-head"><div><h2>Mentett hely hozzáadása</h2><small>${currentDay().id}. nap</small></div><button class="choice" data-saved-cancel>×</button></div><div class="saved-add-list">${ids.length?ids.map(id=>{const p=POIS[id];return `<button class="saved-add-card" data-saved-add="${id}">${imgTag(p)}<span><b>${esc(p.name)}</b><small>${esc(p.sub)}</small></span><i>＋</i></button>`}).join(''):'<div class="setting-card">Nincs olyan mentett hely, ami még nincs benne ebben a napban.</div>'}</div>`;$('[data-saved-cancel]').onclick=()=>{state.view='route';setSheet('two')};$$('[data-saved-add]').forEach(b=>b.onclick=()=>{addAsNext(b.dataset.savedAdd);state.view='route';setSheet('two')});hydrateOnlineImages(sheetBody)}
function exitAddMode(){pauseSonarExpiry();state.adding=false;state.sonar=false;state.sonarPins=[];state.view='route';renderDayMap();setSheet('two','route')}

function suspendNavBanner(){if(state.nav)hideNavigationUI()}
function startNavigation(id){state.nav=true;state.navVisible=true;state.activeMenu='navigation';state.selected=id;state.view='navigation';setSheet('closed');updateTestBadge();const p=POIS[id],o=effectiveOrigin();map.fitBounds(L.latLngBounds([[o.lat,o.lon],[p.lat,p.lon]]).pad(.30),{maxZoom:16});renderNavBanner(id);drawNavigationRoute(id);syncActiveMenus();if(!state.userPos)locate()}
async function drawNavigationRoute(id){const o=effectiveOrigin(),p=POIS[id];const rc=await roadRoute([[o.lat,o.lon],[p.lat,p.lon]]);if(routeLayer)map.removeLayer(routeLayer);routeLayer=L.polyline(rc,{color:'#2f7fe2',weight:5,opacity:.92,lineCap:'round'}).addTo(map)}
function renderNavBanner(id){let el=$('#navBanner');if(!el){el=document.createElement('div');el.id='navBanner';el.className='nav-banner';document.body.appendChild(el)}const p=POIS[id],origin=effectiveOrigin(),k=km(origin,p),test=state.userPos&&!gpsInTrip();const mode=(state.transport||currentDay().transport||'Vegyes');const transit=mode.toLowerCase().includes('tömeg')?'<span class="nav-legs">🚶 4 perc · 🚌 közösségi közlekedés · 🚶 cél</span>':'';el.classList.toggle('top-slot',unread()===0||state.notifStripDismissed);el.innerHTML=`<div class="nav-swipe-action nav-dismiss">✕ Navigáció vége</div><div class="nav-swipe-action nav-next">➜ Következő</div><div class="nav-banner-card"><div class="nav-arrow"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20V4M5 11l7-7 7 7"/></svg></div><div><b>${distText(k)} · ${esc(p.name)}</b><small>${test?'Szimulált pozíció':`Haladj a cél felé · ${walkText(k)}`} · ${esc(mode)}</small>${transit}</div></div>`;state.navVisible=true;el.classList.remove('hidden');bindNavBannerSwipe(el)}
function bindNavBannerSwipe(el){const card=el.querySelector('.nav-banner-card');let sx=0,dx=0,moved=false;card.onpointerdown=e=>{sx=e.clientX;dx=0;moved=false;card.setPointerCapture?.(e.pointerId)};card.onpointermove=e=>{if(!sx)return;dx=e.clientX-sx;if(Math.abs(dx)>5)moved=true;card.style.transform=`translateX(${Math.max(-145,Math.min(145,dx))}px)`;el.classList.toggle('swipe-left',dx<0);el.classList.toggle('swipe-right',dx>0)};card.onpointerup=()=>{card.style.transform='';const action=dx>78?'next':dx<-78?'end':null;el.classList.remove('swipe-left','swipe-right');sx=0;dx=0;if(action==='next')nextNavigationTarget();else if(action==='end')endNavigation()};card.onclick=e=>{if(moved)e.preventDefault()}}
function nextNavigationTarget(){const r=currentDay().route;let i=Math.max(-1,r.indexOf(state.selected));let next=r.slice(i+1).find(id=>!state.done.has(id)&&!state.skipped.has(id))||r.find(id=>!state.done.has(id)&&!state.skipped.has(id));if(next&&next!==state.selected){state.selected=next;renderNavBanner(next);drawNavigationRoute(next);toast('Következő úti cél: '+POIS[next].name)}else toast('Nincs további úti cél')}
function hideNavigationUI(){state.navVisible=false;$('#navBanner')?.classList.add('hidden');renderDayMap(false);syncActiveMenus()}
function endNavigation(){state.nav=false;state.navVisible=false;state.activeMenu=null;$('#navBanner')?.remove();state.view='poi';setSheet('closed');renderDayMap(false);updateTestBadge();syncActiveMenus();toast('Navigáció befejezve')}
function renderNavSheet(){}
function navigationMain(){closeCompactIfOpen();closeNotifications(true);if(state.nav){endNavigation();return}const next=currentDay().route.find(id=>!state.done.has(id)&&!state.skipped.has(id));if(next)startNavigation(next);else toast('A mai útvonal minden pontja kész')}

function showDays(){
 suspendNavBanner();setSheet('closed');state.activeMenu='days';mainNav.classList.remove('hide');logo.classList.remove('hide');$('#mapControls').classList.add('hidden-by-sheet');
 const on=$('#overlayNav');on.classList.add('hidden');$('#overlayTitle').textContent='';$('#overlaySubtitle').textContent='';
 overlayBody.innerHTML=`<div class="day-carousel-wrap"><div id="daysHandle" class="days-handle-zone" aria-label="Napválasztó bezárása"><span class="days-handle"></span></div><div class="day-carousel">${DAYS.map((d,i)=>dayCard(d,i)).join('')}</div><div class="day-indicator">${DAYS.map((_,i)=>`<i class="${i===state.day?'active':''}" data-daydot="${i}"></i>`).join('')}</div></div>`;
 overlay.classList.add('days-mode');overlay.classList.remove('days-compact');overlay.classList.remove('hidden');mainNav.classList.remove('joined-panel');hydrateOnlineImages(overlayBody);syncActiveMenus();
 const car=$('.day-carousel');
 const updateDots=()=>{const cards=[...$$('[data-daycard]')];let best=state.day,bestD=1e9;const cx=innerWidth/2;cards.forEach((c,i)=>{const r=c.getBoundingClientRect();const d=Math.abs((r.left+r.right)/2-cx);if(d<bestD){bestD=d;best=i}});$$('[data-daydot]').forEach((d,i)=>d.classList.toggle('active',i===best))};
 car.addEventListener('scroll',()=>requestAnimationFrame(updateDots),{passive:true});
 $$('[data-daychoose]').forEach(b=>b.onclick=()=>{state.day=+b.dataset.daychoose;renderDayMap(true);closeOverlay();toast((state.day+1)+'. nap aktív')});
 requestAnimationFrame(()=>{const c=$(`[data-daycard="${state.day}"]`);c?.scrollIntoView({inline:'center',block:'nearest'});updateDots()});
 const dh=$('#daysHandle');if(dh){let sy=0;dh.onpointerdown=e=>{sy=e.clientY;dh.setPointerCapture?.(e.pointerId)};dh.onpointerup=e=>{const dy=e.clientY-sy;sy=0;if(dy>34)closeOverlay()}}
}
function dayCard(d,i){return `<article class="day-card" data-daycard="${i}" style="--day:${d.color}"><div class="hero">${dayCoverTag(i,d)}<div class="hero-copy"><b>${d.id}. nap · ${esc(d.title)}</b><small>${d.date} · ${d.route.length} állomás · ${esc(d.transport)}</small></div></div><div class="day-content"><div class="day-meta"><span class="tag">Tempó ${d.pace}/5</span><span class="tag">${d.route.length} állomás</span>${i===state.day?'<span class="tag good">Aktív nap</span>':''}</div><div class="day-route-mini">${d.route.map((id,j)=>`<div class="row"><span>${state.done.has(id)?'✓':j+1}</span><div><b>${esc(POIS[id].name)}</b><small>${esc(POIS[id].sub)}</small></div><small>${POIS[id].duration}</small></div>`).join('')}</div>${d.optional.length?`<div class="section-title">Még belefér</div>${d.optional.map(id=>`<span class="tag">＋ ${esc(POIS[id].name)}</span>`).join(' ')}`:''}<button class="day-choose" data-daychoose="${i}">Ezt a napot mutasd</button></div></article>`}
function closeCompactIfOpen(){if(!overlay.classList.contains('hidden')&&overlay.classList.contains('days-compact'))closeOverlay()}
function showDaysCompact(){
 if(!overlay.classList.contains('hidden')&&overlay.classList.contains('days-compact')){closeOverlay();return}
 suspendNavBanner();setSheet('closed');state.activeMenu='days';$('#overlayTitle').textContent='';$('#overlaySubtitle').textContent='';
 overlayBody.innerHTML=`<div class="days-compact-panel"><div id="daysCompactHandle" class="days-compact-handle"><span></span></div><div class="days-compact-track">${DAYS.map((d,i)=>`<button class="day-compact-card ${i===state.day?'active':''}" data-daycompact="${i}">${dayCoverTag(i,d)}<span><b>${d.id}. nap</b><small>${esc(d.title)}</small></span></button>`).join('')}</div><div class="day-indicator">${DAYS.map((_,i)=>`<i class="${i===state.day?'active':''}" data-compact-dot="${i}"></i>`).join('')}</div></div>`;
 overlay.classList.add('days-compact');overlay.classList.remove('days-mode','standard-full');overlay.classList.remove('hidden');mainNav.classList.remove('hide');mainNav.classList.add('joined-panel');logo.classList.remove('hide');hydrateOnlineImages(overlayBody);syncActiveMenus();
 const track=$('.days-compact-track');const update=()=>{const cards=[...$$('[data-daycompact]')];let best=0,bestD=1e9;const cx=innerWidth/2;cards.forEach((c,i)=>{const r=c.getBoundingClientRect();const d=Math.abs((r.left+r.right)/2-cx);if(d<bestD){bestD=d;best=i}});$$('[data-compact-dot]').forEach((d,i)=>d.classList.toggle('active',i===best))};track.addEventListener('scroll',()=>requestAnimationFrame(update),{passive:true});
 $$('[data-daycompact]').forEach(b=>{let sx=0,sy=0;b.onpointerdown=e=>{sx=e.clientX;sy=e.clientY};b.onpointerup=e=>{if(Math.abs(e.clientX-sx)>9||Math.abs(e.clientY-sy)>9)return;state.day=+b.dataset.daycompact;renderDayMap(true);closeOverlay();toast((state.day+1)+'. nap aktív')};b.onclick=e=>e.preventDefault()});
 requestAnimationFrame(()=>{const c=$(`[data-daycompact="${state.day}"]`);c?.scrollIntoView({inline:'center',block:'nearest'});update()});
 const h=$('#daysCompactHandle');let sy=0;h.onpointerdown=e=>{sy=e.clientY;h.setPointerCapture?.(e.pointerId)};h.onpointerup=e=>{const dy=sy-e.clientY;sy=0;if(dy>24){closeOverlay();showDays()}}
}
function showDayQuickMenu(){showDays()}

function hardCloseSheet(){state.sheet='closed';document.documentElement.style.setProperty('--sheet-h','0px');sheet.className='sheet state-closed view-'+state.view;sheetBody.innerHTML='';expandedNav.classList.add('hidden');$('#mapControls').classList.remove('hidden-by-sheet')}
function hardCloseOverlay(){overlay.classList.add('hidden');overlay.classList.remove('days-mode','days-compact','standard-full');overlayBody.innerHTML='';$('#overlayNav')?.classList.add('hidden')}
function clearTransientPanels(){hardCloseSheet();hardCloseOverlay();const hm=$('#holdMenu');hm.classList.add('hidden');hm.classList.remove('wide','quick');mainNav.classList.remove('joined-panel');$('#notifDrawer').classList.remove('open');mainNav.classList.remove('hide');logo.classList.remove('hide')}
function returnHome(){clearTransientPanels();state.activeMenu=state.nav?'navigation':null;if(state.nav&&state.selected){state.navVisible=true;renderNavBanner(state.selected)}syncActiveMenus()}
function openFunction(name){
 const current=activeMenuKey();
 if(name==='notifications'){
   const wasOpen=$('#notifDrawer').classList.contains('open');clearTransientPanels();if(wasOpen){state.activeMenu=null;syncActiveMenus();return}state.activeMenu='notifications';openNotifications();return
 }
 if(current===name&&name!=='settings'){returnHome();return}
 clearTransientPanels();closeNotifications(true);if(name!=='navigation')suspendNavBanner();state.activeMenu=name;syncActiveMenus();
 if(name==='route'){state.view='route';setSheet('two')}
 else if(name==='days')showDaysCompact();
 else if(name==='sonar')openSonarMode();
 else if(name==='settings')showSettings();
 else if(name==='navigation')showNavigationMenu();
}
function showSettings(){clearTransientPanels();state.overlayReturn=null;state.activeMenu='settings';openOverlay('Beállítások','Antalya · utazás + Companion',settingsHTML());bindSettings();syncActiveMenus()}
function settingsHTML(){return `<div class="settings-section"><h2>🇹🇷 Antalya · Utazás beállításai</h2><div class="setting-card"><b>Tempó</b><input id="paceSlider" class="pace" type="range" min="1" max="5" value="${state.pace}"><div class="setting-row"><small>Nagyon laza</small><b id="paceLabel">${paceName(state.pace)}</b><small>Veretős</small></div></div><div class="setting-card"><b>Közlekedés</b><div class="choice-row" style="margin-top:10px">${['Gyalog','Tömegközlekedés','Autó','Vegyes'].map(x=>`<button class="choice ${state.transport===x?'active':''}" data-transport="${x}">${x}</button>`).join('')}</div></div><div class="setting-card"><div class="setting-row"><div><b>Sonar Hidden Gem prioritás</b><small>Helyiek tippjei előrébb</small></div><button class="toggle on"></button></div><div class="setting-row"><div><b>Útvonalhoz közeli találatok</b><small>Kevesebb felesleges kitérő</small></div><button class="toggle on"></button></div></div><div class="setting-card test-environment"><div><b>Tesztkörnyezet</b><small style="display:block;color:var(--muted);margin-top:4px">Antalya-szimuláció · Build ${APP_VERSION}. A térképen nincs külön béta jelvény.</small></div></div><div class="setting-card"><div><b>Offline Antalya</b><small style="display:block;color:var(--muted);margin-top:4px">POI, Guide, útiterv és fotók a csomagban. A megnyitott térképcsempéket az app gyorsítótárazza.</small></div><div class="setting-row"><span>Offline használatra kész</span><b style="color:#63cf8b">✓</b></div></div></div><div class="settings-section"><h2>Companion · Általános</h2><div class="setting-card"><b>Téma</b><div class="choice-row" style="margin-top:10px">${['dark','light','auto'].map(x=>`<button class="choice ${state.theme===x?'active':''}" data-theme="${x}">${x==='dark'?'Sötét':x==='light'?'Világos':'Automatikus'}</button>`).join('')}</div></div><div class="setting-card"><div class="setting-row"><div><b>Térkép forgatása navigációnál</b><small>Haladási irány lehet felfelé</small></div><button class="toggle on"></button></div><div class="setting-row"><div><b>Újratervezés letérésnél</b><small>Online routing bekötésekor aktív</small></div><button class="toggle on"></button></div><div class="setting-row"><div><b>Megérkezés érzékelése</b><small>GPS alapján, nem jelöl automatikusan késznek</small></div><button class="toggle on"></button></div></div><div class="setting-card"><div class="setting-row"><div><b>Utazás előtt / Közelgő</b><small>2 háttér-információ vár</small></div><button class="choice" data-upcoming>Megnyitás</button></div></div></div>`}
function paceName(x){return ['','Nagyon laza','Laza','Kiegyensúlyozott','Aktív','Veretős'][x]}
function bindSettings(){$('#paceSlider').oninput=e=>{state.pace=+e.target.value;$('#paceLabel').textContent=paceName(state.pace);localStorage.setItem('tc_pace',state.pace)};$$('[data-transport]').forEach(b=>b.onclick=()=>{state.transport=b.dataset.transport;localStorage.setItem('tc_transport',state.transport);showSettings()});$$('[data-theme]').forEach(b=>b.onclick=()=>{state.theme=b.dataset.theme;localStorage.setItem('tc_theme',state.theme);applyTheme();showSettings()});$$('.toggle').forEach(b=>b.onclick=()=>b.classList.toggle('on'));$('[data-upcoming]').onclick=showUpcoming}
function applyTheme(){let resolved=state.theme;if(resolved==='auto'){const h=new Date().getHours();resolved=(h>=20||h<7)?'dark':'light'}document.body.classList.toggle('theme-light',resolved==='light');document.body.classList.toggle('theme-dark',resolved!=='light');if(map)switchTiles()}
function showUpcoming(){openOverlay('Közelgő','Antalya · utazási teendők',`<div class="setting-card"><b>MA / indulás előtt</b><p style="color:var(--muted);font-size:13px">✓ Szállás rögzítve<br>✓ Napi útvonalak készen<br>● Jegyek és nyitvatartások ellenőrzése<br>✓ Offline POI + Guide csomag</p></div><div class="setting-card"><b>HOLNAP / következő nap</b><p style="color:var(--muted);font-size:13px">Naptej · víz · kényelmes cipő · indulási idő ellenőrzése.</p></div>`)}

function guideGallery(id){const order={hadrian:['hadrian','kaleici','yivli'],kaleici:['kaleici','hadrian','yivli'],marina:['marina','kaleici','mermerli'],museum:['museum','perge','kaleici'],konyaalti:['konyaalti','beachpark','aquarium'],duden:['duden','lara','kursunlu'],perge:['perge','museum','phaselis'],phaselis:['phaselis','konyaalti','perge'],hidirlik:['hidirlik','karaali','kaleici'],yivli:['yivli','clocktower','kaleici'],kesik:['kesik','kaleici','hadrian'],toymuseum:['toymuseum','marina','kaleici'],mermerli:['mermerli','marina','kaleici'],aquarium:['aquarium','konyaalti','beachpark']}[id]||[id,'kaleici','konyaalti'];return order.filter(x=>POIS[x]).slice(0,3).map(x=>{const p=POIS[x];return `<span class="photo-wrap"><img data-poi-img="${x}" src="${offlinePhoto(p)}" alt="${esc(p.name)}"><span class="photo-badge" hidden>Wikipedia</span></span>`}).join('')}
function renderGuideSheet(){const id=state.selected||currentDay().route[0],p=POIS[id];if(!p)return;sheetBody.innerHTML=`<div class="guide-full"><div class="guide-hero photo-wrap">${imgTag(p)}</div><div class="guide-title"><h1>${esc(p.name)}</h1><p>${esc(p.sub)} · ${p.hours}</p></div><div class="guide-story"><h2>Miért érdemes?</h2><p>${esc(p.why)}</p><h2>Sztori és érdekességek</h2><p>${esc(p.practical)} ${esc(p.intel)}</p></div><div class="guide-gallery">${guideGallery(id)}</div>${accordion('Praktikus infók',p.practical,true)}${accordion('Traveler Intel · Mire figyelj',p.intel)}${accordion('Közlekedés',distanceLine(p))}${accordion('Közelben','A letöltött POI-kból Sonar mutat WC-t, boltot, kávét és ételt a közelben.')}</div>`;hydrateOnlineImages(sheetBody);$$('.accordion button').forEach(b=>b.onclick=()=>b.parentElement.classList.toggle('open'))}
function openGuide(id){state.selected=id;state.view='guide';setSheet('full')}

function accordion(t,c,o=false){return `<div class="accordion ${o?'open':''}"><button>${esc(t)} <span>⌄</span></button><div class="acc-body">${esc(c)}</div></div>`}
function showFavorites(source=state.activeMenu){const ids=[...state.favorites];state.overlayReturn={menu:source,view:source==='route'?'route':'sonar',sheet:'two'};state.activeMenu=source;openOverlay('Mentett helyek','Útitervhez vagy Sonarhoz',`<div class="favorites favorites-stable">${ids.length?ids.map(id=>{const p=POIS[id];return `<button class="fav-card" data-fav="${id}">${imgTag(p)}<span><b>${esc(p.name)}</b><small>${esc(p.sub)}</small></span><i>›</i></button>`}).join(''):'<div class="setting-card">Még nincs mentett hely. Egy POI adatlapján a ♡ gombbal tudsz menteni.</div>'}</div>`);$$('[data-fav]').forEach(x=>x.onclick=()=>{const id=x.dataset.fav;state.overlayReturn=null;hardCloseOverlay();state.selected=id;state.activeMenu=source;state.view='poi';setSheet('mini');renderDayMap(false)})}
function unread(){return state.notifications.length}
function notificationActionLabel(n){return n.action==='sonarHistory'?'＋ Megnyitás':n.action==='arrival'?'✓ Részletek':n.action==='settings'?'⚙ Megnyitás':'＋ Megnyitás'}
function renderNotifications(){const n=state.notifications;$('#logoBadge').classList.add('hidden');const mb=$('#mainNotifBadge');if(mb){mb.classList.toggle('hidden',!n.length);mb.textContent=n.length}$('#notifStrip').classList.toggle('hidden',!n.length||state.notifStripDismissed);if(n.length){$('#notifStripTitle').textContent=n[0].title;$('#notifStripText').textContent=n[0].text}$('#notifCountText').textContent=n.length?n.length+' aktív':'Nincs új';$('#notifList').innerHTML=n.map(x=>`<div class="notif-swipe" data-notif="${x.id}"><div class="notif-action dismiss">✕ Elvetés</div><div class="notif-action context">${notificationActionLabel(x)}</div><div class="notif-card" style="--ncolor:${x.priority==='important'?'#df404a':x.priority==='useful'?'#e0ad45':'#87949e'}"><b>${esc(x.title)}</b><p>${esc(x.text)}</p><small>${x.priority==='important'?'Fontos':x.priority==='useful'?'Hasznos':'Háttér'}</small></div></div>`).join('');bindNotificationSwipes();renderExpandedNav();if(state.nav&&state.navVisible&&state.selected)renderNavBanner(state.selected)}
function openNotifications(){state.activeMenu='notifications';state.notifStripDismissed=true;$('#notifDrawer').classList.add('open');renderNotifications();syncActiveMenus()}
function toggleNotifications(){const d=$('#notifDrawer');if(d.classList.contains('open'))closeNotifications(true);else openNotifications()}
function closeNotifications(hideStrip=false){$('#notifDrawer').classList.remove('open');if(hideStrip){state.notifStripDismissed=true;$('#notifStrip').classList.add('hidden')}if(state.activeMenu==='notifications')state.activeMenu=state.nav?'navigation':null;if(state.nav&&state.navVisible&&state.selected)renderNavBanner(state.selected);syncActiveMenus()}
function handleNotification(id){const n=state.notifications.find(x=>x.id===id);if(!n)return;closeNotifications(true);if(n.action==='settings')showSettings();else if(n.action==='fit')openSonarMode();else if(n.action==='sonarHistory'){state.sonar=true;state.sonarPins=[...(n.pins||[])];renderDayMap(false);openSonarMode();setSheet('two','sonar')}else if(n.action==='arrival'&&n.poi){state.selected=n.poi;state.view='poi';setSheet('two');renderDayMap(false)}}
function dismissNotification(id){state.notifications=state.notifications.filter(x=>x.id!==id);renderNotifications()}
function bindNotificationSwipes(){$$('[data-notif]').forEach(w=>{const c=w.querySelector('.notif-card');let sx=0,dx=0,moved=false;c.onpointerdown=e=>{sx=e.clientX;dx=0;moved=false;c.setPointerCapture?.(e.pointerId)};c.onpointermove=e=>{if(!sx)return;dx=e.clientX-sx;if(Math.abs(dx)>5)moved=true;c.style.transform=`translateX(${Math.max(-120,Math.min(120,dx))}px)`;w.classList.toggle('to-left',dx<0);w.classList.toggle('to-right',dx>0)};c.onpointerup=()=>{c.style.transform='';w.classList.remove('to-left','to-right');const id=w.dataset.notif;if(dx<-75)dismissNotification(id);else if(dx>75)handleNotification(id);sx=0;dx=0};c.onclick=e=>{if(moved){e.preventDefault();e.stopPropagation()}}})}

function openOverlay(title,sub,html){suspendNavBanner();$('#overlayTitle').textContent=title;$('#overlaySubtitle').textContent=sub||'';overlayBody.innerHTML=html;overlay.classList.remove('hidden');overlay.classList.add('standard-full');mainNav.classList.remove('hide','joined-panel');logo.classList.remove('hide');$('#overlayNav')?.classList.add('hidden');hydrateOnlineImages(overlayBody);syncActiveMenus()}
function closeOverlay(){const ret=state.overlayReturn;state.overlayReturn=null;hardCloseOverlay();mainNav.classList.remove('hide','joined-panel');logo.classList.remove('hide');if(ret&&['route','sonar'].includes(ret.menu)){state.activeMenu=ret.menu;state.view=ret.view;setSheet(ret.sheet,ret.view)}else{state.activeMenu=state.nav?'navigation':null;$('#mapControls').classList.remove('hidden-by-sheet')}syncActiveMenus()}
function hideHold(){const el=$('#holdMenu');if(!el)return;el.classList.add('hidden');el.classList.remove('wide','quick');mainNav.classList.remove('joined-panel')}
function showNavigationMenu(){clearTransientPanels();state.activeMenu='navigation';syncActiveMenus();showHold([
 {label:'Következő',icon:'➜',act:navigationMain},{label:'Szállás',icon:'⌂',act:()=>startNavigation('hotel')},{label:'Mai útvonal',icon:'⌁',act:fitRoute},
 {label:'Saját pozíció',icon:'◎',act:locate},{label:'Útvonal középre',icon:'⌖',act:fitRoute},{label:'Navigáció vége',icon:'×',act:()=>{if(state.nav)endNavigation();else returnHome()}}
],'wide')}
function showHold(items,mode='wide'){const el=$('#holdMenu');hideHold();mainNav.classList.add('joined-panel');el.classList.add(mode);el.innerHTML=items.map((x,i)=>`<button data-hold="${i}">${x.icon?`<span>${x.icon}</span>`:''}<b>${esc(x.label)}</b></button>`).join('');el.classList.remove('hidden');$$('[data-hold]').forEach(b=>b.onclick=e=>{e.stopPropagation();items[+b.dataset.hold].act();hideHold()});setTimeout(()=>document.addEventListener('pointerdown',function outside(e){if(!el.contains(e.target)&&!e.target.closest('.main-tab')){hideHold();document.removeEventListener('pointerdown',outside)}},true),30)}
function longPress(el,onTap,onHold){let t,held=false;el.addEventListener('pointerdown',e=>{held=false;t=setTimeout(()=>{held=true;onHold(e)},520)});['pointerup','pointercancel','pointerleave'].forEach(ev=>el.addEventListener(ev,e=>{clearTimeout(t);if(ev==='pointerup'&&!held)onTap(e)}))}

function applyMainIcons(){const mapI={mainItinerary:'route',mainDays:'days',mainSonar:'sonar',mainSettings:'settings',mainNotifications:'bell',mainNavigation:'nav'};Object.entries(mapI).forEach(([id,n])=>{const el=$('#'+id+' .ico');if(el)el.innerHTML=uiIcon(n)});logo.querySelector('.logo-dual-hint')?.remove()}
function bindUI(){
 applyMainIcons();
 $('#locateBtn').onclick=locate;$('#fitRouteBtn').onclick=fitRoute;$('#notifStrip').onclick=toggleNotifications;$('#notifClose').onclick=()=>closeNotifications(true);$('#overlayClose').onclick=closeOverlay;$('#overlayBack').onclick=closeOverlay;
 $('#mainItinerary').onclick=()=>openFunction('route');
 longPress($('#mainDays'),()=>openFunction('days'),()=>{clearTransientPanels();showDays()});
 $('#mainSonar').onclick=()=>{if(activeMenuKey()==='sonar'){runSonar();openSonarMode()}else openFunction('sonar')};
 $('#mainSettings').onclick=()=>openFunction('settings');
 $('#mainNotifications').onclick=()=>openFunction('notifications');
 $('#mainNavigation').onclick=()=>{if(!$('#holdMenu').classList.contains('hidden')&&state.activeMenu==='navigation'){returnHome()}else showNavigationMenu()};
 logo.onclick=()=>{const a=activeMenuKey();if(a==='sonar'){runSonar();openSonarMode();return}if(a){returnHome();return}runSonar();openSonarMode()};
 let sy=0,sh=0,dragging=false;$('#sheetDrag').addEventListener('pointerdown',e=>{if(state.sheet==='closed')return;dragging=true;sy=e.clientY;sh=heightFor(state.sheet);sheet.classList.add('dragging');sheet.setPointerCapture?.(e.pointerId)});window.addEventListener('pointermove',e=>{if(!dragging)return;const h=Math.max(120,Math.min(innerHeight,sh+(sy-e.clientY)));document.documentElement.style.setProperty('--sheet-h',h+'px')});window.addEventListener('pointerup',()=>{if(!dragging)return;dragging=false;sheet.classList.remove('dragging');const h=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sheet-h'));let snaps=state.view==='route'?[['closed',0],['two',heightFor('two')]]:state.view==='sonar'?[['closed',0],['two',heightFor('two')]]:[['closed',0],['mini',heightFor('mini')],['two',heightFor('two')],['full',heightFor('full')]];let best=snaps.reduce((a,b)=>Math.abs(b[1]-h)<Math.abs(a[1]-h)?b:a);if(best[0]==='full'&&state.view==='poi')state.view='guide';setSheet(best[0])});
 window.addEventListener('online',()=>toast('Online kapcsolat helyreállt'));window.addEventListener('offline',()=>toast('Offline mód · GPS + letöltött tartalom'));
}
function init(){applyTheme();initMap();bindUI();renderNotifications();updateTestBadge();setSheet('closed');syncActiveMenus();if('serviceWorker'in navigator)navigator.serviceWorker.register('./service-worker.js').catch(()=>{});setTimeout(()=>prewarmPoiPhotos(),1400);}
init();
