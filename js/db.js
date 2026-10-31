/* db.js – tiny IndexedDB wrapper (visits, offers, quotes, outbox, meta). Everything stays on this device. */
const DB=(()=>{const NAME='mp-heatpump-proto',VER=1;let dbp=null;
 function open(){if(dbp)return dbp;dbp=new Promise((res,rej)=>{const r=indexedDB.open(NAME,VER);
  r.onupgradeneeded=()=>{const d=r.result;for(const [s,k] of [['visits','id'],['offers','token'],['quotes','no'],['outbox','id'],['meta','k']])if(!d.objectStoreNames.contains(s))d.createObjectStore(s,{keyPath:k,autoIncrement:s==='outbox'});};
  r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)});return dbp}
 const tx=async(store,mode,fn)=>{const d=await open();return new Promise((res,rej)=>{const t=d.transaction(store,mode),s=t.objectStore(store);let out;const q=fn(s);if(q)q.onsuccess=()=>{out=q.result};t.oncomplete=()=>res(out);t.onerror=()=>rej(t.error);t.onabort=()=>rej(t.error)})};
 return {open,
  get:(s,k)=>tx(s,'readonly',o=>o.get(k)),
  all:(s)=>tx(s,'readonly',o=>o.getAll()),
  put:(s,v)=>tx(s,'readwrite',o=>o.put(v)),
  del:(s,k)=>tx(s,'readwrite',o=>o.delete(k)),
  clear:async(...ss)=>{for(const s of ss)await tx(s,'readwrite',o=>o.clear())}};})();
