/* boot.js – register service worker, load mock data + IndexedDB, then start the app */
(async function(){const mode=document.documentElement.dataset.mode||'sales';
 if('serviceWorker' in navigator&&/^https?:$/.test(location.protocol))navigator.serviceWorker.register('sw.js').catch(e=>console.warn('SW',e&&e.message));
 try{const r=await fetch('mock-data.json');window.MOCK=await r.json()}catch(e){document.body.insertAdjacentHTML('afterbegin','<p style="padding:20px">Kundi ikki heinta mock-data.json (offline uttan cache?)</p>');return}
 await DB.open();
 const s=document.createElement('script');s.src='js/app.js';s.onload=()=>PROTO.start(mode);document.body.appendChild(s);})();
