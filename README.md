# MP Hitapumpa – prototypa (Dømi / Example data)

Prototype of the heat pump **site-visit → offer** tool for P/F Maria Poulsen.
**100 % mock data.** No connection to Business Central, handil.mp.fo, Samleikin or any other system. Nothing is sent.

* `index.html` – sales app (visits, measurements, photos, BOM, add-ons, service tiers, savings, send, follow-up, job sheet, dashboard)
* `tilbod.html#t=<token>&d=<snapshot>` – customer offer page (accept / sign with Samleikin – simulated)
* `mock-data.json` – **the one data file to edit**: CRM contacts, items + prices, BOMs (styklister), add-ons, service tiers, handil search URL. Bump `meta.version` after edits.
* `js/api.js` – the only "back-end" layer. `MockAdapter` today; swap for real adapters later (same method names).
* `js/db.js` – IndexedDB (visits, offers, quotes, outbox). Data stays on the device. "Nullstilla dømisdátur / Reset demo data" on the home screen.
* `sw.js` – service worker: works offline after the first load.

## Connecting real systems later
| Mock call | Real target |
|---|---|
| `API.crm.listContacts / getContact` | BC API v2.0 `contacts`, `customers` (+ CRM opportunities) |
| `API.bc.listPackages / getBOM / getItems` | BC assembly BOMs (styklister) / custom API page, `items` (unitPrice) |
| `API.bc.createSalesQuote` | `POST salesQuotes` + `salesQuoteLines` |
| `API.bc.acceptQuote` | update quote status → "ready for project" (Projects/Jobs created from the quote in BC; no sales order) |
| `API.handil.searchUrl` | handil.mp.fo product/search links |
| `API.samleikin.sign` | Samleikin login/sign integration (to be set up) |

A small backend (e.g. Azure Function / Cloudflare Worker) is needed for: Entra ID OAuth to BC (no secrets in the browser), storing offers so the customer link works across devices and status flows back to the salesperson, and the Samleikin callback.

`noindex` meta + `robots.txt` keep the prototype out of search engines.
