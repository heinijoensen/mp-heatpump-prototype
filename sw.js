/* sw.js – offline cache for the MP heat pump prototype (Dømi / Example data). Generated. */
const VERSION='2026.10.31-2-23426cd05c',CACHE='mp-hp-'+VERSION,FILES=["./", "index.html", "tilbod.html", "css/app.css", "css/fonts.css", "js/assets.js", "js/db.js", "js/api.js", "js/boot.js", "js/app.js", "mock-data.json", "manifest.webmanifest", "icons/icon.svg"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES.map(f=>new Request(f,{cache:'reload'})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('mp-hp-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==location.origin)return;
 // mock-data.json: network first (so edits show up), fall back to cache offline. Everything else: cache first.
 if(u.pathname.endsWith('/mock-data.json')){e.respondWith(fetch(r).then(res=>{const c=res.clone();caches.open(CACHE).then(ca=>ca.put(r,c));return res}).catch(()=>caches.match(r,{ignoreSearch:true})));return}
 e.respondWith(caches.match(r,{ignoreSearch:true}).then(hit=>hit||fetch(r).then(res=>{if(res.ok&&res.type==='basic'){const c=res.clone();caches.open(CACHE).then(ca=>ca.put(r,c))}return res}).catch(()=>r.mode==='navigate'?caches.match(u.pathname.endsWith('tilbod.html')?'tilbod.html':'index.html'):Response.error())))});
