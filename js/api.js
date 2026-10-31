/* api.js – the ONLY place the app talks to "back-end" systems.
   Today every call goes to MockAdapter (mock-data.json + IndexedDB, fake latency).
   Later: implement BcAdapter / HandilAdapter / SamleikinAdapter with the same method names and set API.use(...).
   Nothing here talks to a real system. All data is "Dømi / Example data". */
class OfflineError extends Error{constructor(){super('offline');this.offline=true}}
const NET={sim:false,get online(){return navigator.onLine&&!this.sim}};
const wait=ms=>new Promise(r=>setTimeout(r,ms));
const MockAdapter={
 name:'mock',
 crm:{ // BC: contacts / customers + opportunities  (real: GET /api/v2.0/companies({id})/contacts, /customers, CRM opportunities)
  listContacts:async()=>MOCK.crm.contacts,
  getContact:async id=>MOCK.crm.contacts.find(c=>c.id===id)},
 bc:{ // BC: items, BOMs (assembly BOM / stykliste), quotes
  getItems:async()=>MOCK.items,                       // real: GET items?$filter=… (unitPrice)
  getBOM:async code=>Object.values(MOCK.packages).find(p=>p.bom===code), // real: GET assemblyBOM / custom API page
  listPackages:async()=>MOCK.packages,
  async createSalesQuote(q){ // real: POST /salesQuotes + POST /salesQuotes({id})/salesQuoteLines
   if(!NET.online)throw new OfflineError();await wait(400);
   const meta=(await DB.get('meta','quoteSeq'))||{k:'quoteSeq',n:1042};meta.n++;await DB.put('meta',meta);
   const rec={no:'SQ-DØMI-'+meta.n,status:'Open',created:Date.now(),...q};await DB.put('quotes',rec);return rec},
  async acceptQuote(no,info){ // real: PATCH salesQuotes({id}) + flag "ready for project" (Projects/Jobs created from quote in BC)
   if(!NET.online)throw new OfflineError();await wait(400);
   const r=(await DB.get('quotes',no))||{no};Object.assign(r,{status:'Accepted',readyForProject:true,acceptedAt:Date.now(),acceptedBy:info&&info.name});await DB.put('quotes',r);return r},
  getQuote:async no=>DB.get('quotes',no)},
 handil:{searchUrl:q=>MOCK.handil.searchUrl+encodeURIComponent(q)}, // real: handil.mp.fo product/search URLs
 samleikin:{ // real: OIDC/SAML login + signing via Samleikin – integration to be set up
  async sign({name}){await wait(1600);return {name,method:'samleiki',ref:'SML-DØMI-'+Math.random().toString(36).slice(2,8).toUpperCase(),at:Date.now()}}}};
const API={adapter:MockAdapter,use(a){this.adapter=a},get crm(){return this.adapter.crm},get bc(){return this.adapter.bc},get handil(){return this.adapter.handil},get samleikin(){return this.adapter.samleikin}};
