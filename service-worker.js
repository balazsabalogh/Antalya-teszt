const CACHE = 'tc-antalyabeta-v062';
const CORE = ['./','./index.html','./manifest.webmanifest','./logo-tr.png','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./ANTALYA_CONTENT.json'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(Promise.all([
  self.clients.claim(),
  caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
])));
self.addEventListener('fetch', e => {
  if(e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(resp => {
    if(resp && resp.ok){ const copy=resp.clone(); caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{}); }
    return resp;
  }).catch(()=>{
    if(e.request.mode === 'navigate') return caches.match('./index.html');
    return caches.match(e.request);
  })));
});
