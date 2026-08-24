const CACHE='tc-antalya-075-field-test-refine';
const CORE=[
'./','./index.html','./app.css','./app.js','./manifest.webmanifest','./apple-touch-icon.png','./icon-192.png','./icon-512.png','./assets/logo-tr.png','./assets/app-icon-day.png','./assets/offline-map.svg',
'./assets/photos/hadrian.jpg','./assets/photos/konyaalti.jpg','./assets/photos/duden.png','./assets/photos/perge.jpg','./assets/photos/kursunlu.jpg','./assets/photos/phaselis.jpg',
'./assets/placeholders/historic.svg','./assets/placeholders/museum.svg','./assets/placeholders/beach.svg','./assets/placeholders/park.svg','./assets/placeholders/waterfall.svg','./assets/placeholders/ancient.svg','./assets/placeholders/food.svg','./assets/placeholders/coffee.svg','./assets/placeholders/bar.svg','./assets/placeholders/shop.svg','./assets/placeholders/wc.svg','./assets/placeholders/hotel.svg','./assets/placeholders/attraction.svg','./assets/placeholders/marina.svg'
];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET') return;
 const u=new URL(e.request.url);
 const dynamic=u.hostname.includes('basemaps.cartocdn.com')||u.hostname.includes('unpkg.com')||u.hostname.includes('wikipedia.org')||u.hostname.includes('wikimedia.org')||u.hostname.includes('routing.openstreetmap.de');
 if(dynamic){
   e.respondWith(caches.open(CACHE).then(async c=>{
     const hit=await c.match(e.request); if(hit) return hit;
     try{const r=await fetch(e.request); if(r&&(r.ok||r.type==='opaque')) c.put(e.request,r.clone()).catch(()=>{}); return r;}catch(err){return hit||Response.error();}
   })); return;
 }
 e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{});return r}).catch(()=>caches.match('./index.html'))));
});
