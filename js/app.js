/* app.js – generated from the v3.2 mockup + proto layer. Dømi / Example data only. */
const T={
hudsub:["Lobby · Partur 1 · Frá staðarvitjan til tilboðs","Lobby · Module 1 · Site visit to offer"],
vSales:["Søluapp","Sales app"],vOffer:["Tilboð til kundan","Customer offer"],vDash:["Yvirlit","Dashboard"],
demo:["Dømi / Example data","Dømi / Example data"],demoS:["Dømi","Example"],
sideK:["Hugskot · Hitapumpa","Concept · Heat pump"],
sideH:["Frá staðarvitjan til tilboðs – í einum samanhangi","From site visit to offer – in one go"],
sideP:["Seljari verður leiddur stig fyri stig gjøgnum vitjanina. Mátingarnar, sum verða gjørdar á staðnum, stýra beinleiðis nøgdunum í vørulistanum í Business Central (BC), so tilboðið er klárt, áðrenn seljarin fer av staðnum.","The salesperson is guided step by step through the visit. Measurements on site drive the quantities in the BC BOM directly, so the offer is ready before they leave."],
bcH:["Úr Business Central","From Business Central"],
liveH:["Tilboð í verandi løtu (dømi)","Live offer (example)"],
next:["Næsta","Next"],prev:["Aftur","Back"],toSummary:["Til samandrátt","To summary"],
s0:["Kundi","Customer"],s1:["Hús","House"],s2:["Tøknirúm","Utility room"],s3:["Útieind","Outdoor unit"],s4:["Fjarstøða","Distance"],s5:["El og frárenning","Electrical & drain"],s6:["Myndir","Photos"],s7:["Pakki","Package"],s8:["Samandráttur","Summary"],
stepOf:["Stig {a} av {b}","Step {a} of {b}"],
k0:["Kundi og arbeiði","Customer and job"],h0:["Hvønn skulu vit vitja í dag?","Who are we visiting today?"],p0:["Vel ein kontakt ella ein sølumøguleika úr BC CRM. Upplýsingarnar verða bert lisnar – einki verður broytt í BC.","Pick a contact or opportunity from BC CRM. Data is read only – nothing is changed in BC."],
search:["Leita eftir kontaktum í BC…","Search BC contacts…"],opp:["Sølumøguleiki","Opportunity"],contact:["Kontaktpersónur","Contact"],
jobType:["Slag av arbeiði","Job type"],jNew:["Nýggj hitapumpa","New heat pump"],jRep:["Útskifting","Replacement"],jOil:["Oljufýr skal takast burtur","Oil boiler out"],
visitDate:["Vitjanardagur","Visit date"],
k1:["Grundupplýsingar um húsið","House basics"],h1:["Stødd, hiting og einangran","Size, heating and insulation"],p1:["Hetta gevur eina meting av hitatørvinum, sum verður nýtt til at velja rætta stødd á hitapumpuni og rokna út møguligu sparingina.","This gives the heat demand, which drives the heat pump size and the saving calculation."],
hType:["Húsaslag","House type"],hDet:["Einsamalt hús","Detached"],hRow:["Raðhús","Terraced"],hOld:["Eldri hús","Older house"],
area:["Upphitað gólvvídd","Heated area"],year:["Byggiár","Year built"],people:["Tal av fólkum í húsinum","Occupants"],
curHeat:["Núverandi hiting","Current heating"],hOilB:["Oljufýr","Oil boiler"],hEl:["Elhiti","Electric heating"],hHp:["Hitapumpa (eldri)","Old heat pump"],
oilUse:["Árlig oljunýtsla (l)","Oil use per year (l)"],
emit:["Hitaskipan","Heat emitters"],eRad:["Radiatorar","Radiators"],eFloor:["Gólvhiti","Underfloor"],eMix:["Blandað hitaskipan","Mixed"],
ins:["Einangran","Insulation"],iGood:["Góð","Good"],iMid:["Miðalgóð","Average"],iPoor:["Vánalig","Poor"],
demandL:["Mettur hitatørvur","Estimated heat demand"],
k2:["Innieind","Indoor unit"],h2:["Pláss til innieindina í tøknirúminum","Space in the tøknirúm (utility room)"],p2:["Máta plássið, har innieindin skal standa. Krøvini eru treytað av valda hitapumpupakkanum (dømi).","Measure the spot where the indoor unit will stand. Requirements come from the chosen package (example)."],
wMm:["Breidd (mm)","Width (mm)"],dMm:["Dýpd (mm)","Depth (mm)"],hMm:["Lofthædd (mm)","Ceiling height (mm)"],front:["Frítt pláss framman fyri (mm)","Free space in front (mm)"],
need:["Krav","Required"],floorOk:["Gólvið tolir tyngdina av eindini (≈ 200–300 kg, tá ið hon er full av vatni)","Floor can carry the unit (≈ 200–300 kg filled)"],
access:["Atkomuviðurskifti: hurðar og trappur eru nóg breiðar","Access: doors and stairs wide enough"],
existing:["Gamla fýrið/goymslutangin kann takast burtur","Old boiler/tank can be removed"],
k3:["Útieind","Outdoor unit"],h3:["Hvar skal útieindin standa?","Where will the outdoor unit go?"],p3:["Tað skal takast hædd fyri ljóði, festing og neyðugum fríplássi. Ljóðstøðið við grannahúsini verður mett beinleiðis.","Noise, mounting and clearances. Noise at the neighbour is estimated live."],
mount:["Festing","Mounting"],mGround:["Á jørðini (stativ)","Ground stand"],mWall:["Á vegginum (veggfesting)","Wall bracket"],
neigh:["Frástøða til nærmasta grannavindeyga","To nearest neighbour window"],
behind:["Aftanfyri (mm)","Behind (mm)"],sideC:["Til síðuna (mm)","To side (mm)"],aboveC:["Omanfyri (mm)","Above (mm)"],
wind:["Lívd fyri vindi og sjóroki","Sheltered from wind and sea spray"],snow:["Fríhædd oman fyri kava og vatn á jørðini","Above snow/standing water"],
noiseL:["Mett ljóðstøði við grannahúsini","Estimated noise at neighbour"],noiseLim:["Markvirði (dømi)","Limit (example)"],
eaNote:["Valdi pakkin er ein útsúgvingarhitapumpa (Qvantum QE, dømi) – eingin útieind er neyðug. Í staðin verður skrásett, hvar luftin verður leidd út (gjøgnum tak ella vegg).","The chosen package is an exhaust air heat pump (Qvantum QE, example) – no outdoor unit. Instead, record where the exhaust goes out (roof or wall)."],
exOut:["Útblástur","Exhaust outlet"],exRoof:["Gjøgnum tak","Through roof"],exWall:["Gjøgnum vegg","Through wall"],
k4:["Fjarstøða","Distance"],h4:["Innieind → útieind","Indoor → outdoor"],h4e:["Innieind → útlop","Indoor → exhaust outlet"],p4:["Máta røraleiðingina. Neyðuga tilhoyrið í styklistanum verður dagført beinanvegin.","Measure the pipe route. Accessories in the BOM update instantly."],p4e:["Máta luftleiðingina. Neyðuga tilhoyrið í styklistanum verður dagført beinanvegin.","Measure the duct route. Accessories in the BOM update instantly."],
run:["Røraleiðing","Pipe run"],rune:["Luftleiðing","Duct run"],pen:["Gjøgnumbrot","Penetrations"],hdiff:["Hæddarmunur","Height difference"],
accH:["Tilhoyr, ið verður tillagað eftir tørvi","Scaling accessories"],
maxRun:["Longri enn viðmælt (dømi: í mesta lagi 15 m) – kanna rørstødd og trýstfall.","Longer than recommended (example: max 15 m) – check pipe size and pressure drop."],
k5:["El og frárenning","Electrical & drain"],h5:["El-tavla og kondensvatn","Panel and condensate"],p5:["Kanna, um el-veitingin er nóg mikið til, og hvar kondensvatnið skal leiðast burtur.","Check that the supply can take it and where condensate will drain."],
mainF:["Høvuðstrygging (A)","Main fuse (A)"],spare:["Leyst pláss í el-tavluni","Free space in the panel"],rcd:["HFI/RCD-trygdarskifti er til staðar","RCD present"],three:["3-fasa el-veiting","3-phase supply"],
cableRoute:["Kabulleiðing frá el-tavluni","Cable route from panel"],
drain:["Frárenning av kondensvatni","Condensate drain"],dGully:["Brunnur ella rist í nánd","Gully/drain nearby"],dSoak:["Í sand ella jørð","Soakaway"],dPipe:["Leiðast inn í húsið","Led indoors"],
drainHeat:["Hitikabulur neyðugur (frostverja) – verður lagdur afturat styklistanum","Heat trace cable needed (frost protection) – added to the BOM"],
elWarn:["Høvuðstryggingin kann vera ov lítil – mælt verður til at fáa ein elektrikara at kanna el-veitingina (dømi: ≥ 25 A).","Main fuse may be too small – recommend an electrical check (example: ≥ 25 A)."],
k6:["Myndir","Photos"],h6:["Myndir við viðmerkingum","Photos with notes"],p6:["Tak myndir av øllum viðurskiftum, sum montørurin skal kenna til. Myndirnar verða lagdar við sum skjøl í BC.","Take photos of everything the installer needs to know. They follow to BC as attachments."],
ph1:["Tøknirúm","Utility room"],ph2:["Staðseting av útieind","Outdoor spot"],ph3:["El-tavla","Electrical panel"],ph4:["Gjøgnumbrot","Penetration"],ph5:["Frárenning","Drain"],ph6:["Gamla fýrið","Old boiler"],
tap:["Trýst fyri at taka mynd","Tap to take photo"],taken:["Tikin","Taken"],notes:["Boð til montørin","Notes for the installer"],
notesPh:["T.d. rørini verða løgd undir kjallaraloftinum, smøl trappa…","E.g. pipes go via basement ceiling, narrow stairs…"],
k7:["Pakki","Package"],h7:["Vel ein pakka úr styklistanum í BC","Pick a package from a BC BOM"],p7:["Styklistarnir í BC eru grundskabelónir. Tilhoyrið verður lagt afturat eftir mátingunum.","BOMs are templates in BC. Accessories are added from the measurements."],
rec:["Viðmælt","Recommended"],awT:["Luft/vatn","Air/water"],eaT:["Útsúgvingarluft","Exhaust air"],
bomL:["Grundvørur í styklistanum","Base lines in the BOM"],
k8:["Samandráttur","Summary"],h8:["Klárt at senda","Ready to send"],p8:["Kanna samandráttin. Sølutilboðið verður bert stovnað í BC, tá ið tú hevur váttað.","Review the summary. A sales quote is only created in BC when you confirm."],
checks:["Eftirkanningar","Checks"],allOk:["Allar eftirkanningar eru í lagi","All checks OK"],
exVat:["Tilsamans uttan MVG","Total excl. VAT"],vat:["MVG 25%","VAT 25%"],incVat:["Tilsamans við MVG","Total incl. VAT"],
send:["Send tilboðið til BC / kundan","Send offer to BC / customer"],preview:["Forsýning av kundatilboðnum","Preview customer offer"],
mH:["Send tilboð (roynd)","Send offer (mock)"],mP:["Hetta er ein royndarútgáva. Í veruligu loysnini verður hetta bert gjørt, tá ið tú váttar:","This is a mockup. In the real solution, this happens only when you confirm:"],
m1:["Eitt sølutilboð verður stovnað í BC við øllum vørulinjum og nøgdum","A sales quote is created in BC with all lines and quantities"],
m2:["Myndir og viðmerkingar verða knýttar at tilboðnum","Photos and notes are attached to the quote"],
m3:["Eitt persónligt kundaleinki verður gjørt (trygt og við avmarkaðari gildistíð)","A personal customer link is generated (secure, time-limited)"],
m4:["Kundin fær ein teldupost/SMS frá tær","The customer gets an email/SMS from you"],
mConf:["Eg havi kannað tilboðið og vátti tað","I have reviewed the offer and confirm"],mGo:["Vátta og send (roynd)","Confirm and send (mock)"],mCancel:["Avlýs","Cancel"],
mDone:["Roynd: Einki er sent, og einki er skrivað í BC. Tilboðsnummar í døminum: §QNO§.","Mock: nothing was sent and nothing was written to BC. Example quote no.: §QNO§."],mClose:["Lat aftur","Close"],
lpLines:["linjur","lines"],lpTot:["Tilsamans við MVG","Total incl. VAT"],lpSave:["Mett árlig sparing","Est. saving/yr"],lpPay:["Afturgjaldstíð","Payback"],yrs:["ár","yrs"],lpRun:["Mátað leið","Measured run"],
oK:["Títt persónliga tilboð","Your personal offer"],
oHi:["Eitt heitari og grønari heim, {n}","A warmer, greener home, {n}"],
oSolT:["Valda loysnin","Chosen solution"],oFrom:["Tilsamans við MVG","Total incl. VAT"],oValid:["Galdandi í 30 dagar · Tilboðsnr. §QNO§","Valid for 30 days · Quote no. §QNO§"],
nav1:["Soleiðis virkar tað","How it works"],nav2:["Tilboðið","The offer"],nav3:["Útrokningar","Calculations"],nav4:["Tøknibløð","Datasheets"],nav5:["Gott at vita","Good to know"],nav6:["Næstu stig","Next steps"],nav7:["Samband","Contact"],
howK:["Soleiðis virkar tað","How it works"],
howHaw:["Útieindin tekur hita úr útiloftini – eisini tá ið kalt er úti","The outdoor unit takes heat from the outside air – even when it is cold"],
howHea:["Hitapumpan endurnýtir hitan í luftini, sum annars hevði farið út úr húsinum","The heat pump reuses the heat in the air that would otherwise leave the house"],
howPaw:["Ein luft/vatn-hitapumpa flytur orku úr útiluftini inn í hitaskipanina og hitavatnskipanina. Fyri hvønn kWh av ravmagni fært tú fleiri kWh av hita.","An air/water heat pump moves energy from outdoor air into your heating system and hot water. For every kWh of electricity you get several kWh of heat."],
howPea:["Ein útsúgvingarhitapumpa tekur heitu luftina úr køki og baðirúmum, endurvinnur orkuna við einum hitavekslara og einum kompressara og brúkar hana til upphiting og heitt vatn. Qvantum QE (Dømi) brúkar natúrliga kølievnið R290 og fæst í 5 og 7 kW.","An exhaust air heat pump takes warm air from kitchen and bathrooms, recovers the energy via a hitavekslari (heat exchanger) and compressor, and uses it for heating and hot water. Qvantum QE (example) uses the natural refrigerant R290 and comes in 5 and 7 kW."],
how1aw:["Utieind","Outdoor unit"],how1awd:["Viftan dregur luft gjøgnum ein hitavekslara, har kølievnið tekur ímóti orkuni.","The fan draws air through a hitavekslari (heat exchanger) where the refrigerant picks up the energy."],
how2aw:["Rørleiðing inn","Pipes in"],how2awd:["Heitt vatn fer gjøgnum {m} m av einangraðum rørum inn í tøknirúmið.","Warm water travels through {m} m of insulated pipe into the tøknirúm."],
how3aw:["Innieind","Indoor unit"],how3awd:["Stýrir hitanum til radiatorar og gólvhita og syrgir fyri, at heitt vatn altíð er tøkt.","Controls heat to radiators/underfloor and keeps hot water ready."],
how1ea:["Útsúgvingarluft","Exhaust air"],how1ead:["Heit luft verður sogin úr vátrúmum og køki.","Warm air is extracted from wet rooms and kitchen."],
how2ea:["Hitavekslari og kompressorur","Heat exchanger + compressor"],how2ead:["Orkan verður tikin úr luftini og hitin verður hækkaður.","Energy is recovered from the air and raised in temperature."],
how3ea:["Hiti og heitt vatn","Heat and hot water"],how3ead:["Kølda luftin fer út gjøgnum {m} m av kanali; hitin verður verandi inni.","Cooled air leaves via {m} m of duct; the heat stays inside."],
offK:["Tilboðið","The offer"],offH:["Allir prísir, lið fyri lið","Every price, line by line"],offP:["Prísirnir koma beinleiðis úr sølutilboðnum í Business Central. Øll tølini her eru Dømi.","Prices come straight from the sales quote in Business Central. All figures here are examples."],
thItem:["Vøra","Item"],thQty:["Nøgd","Qty"],thPrice:["Prísur","Price"],thTot:["Upphædd","Amount"],
gMain:["Hitapumpa","Heat pump"],gAcc:["Tilhoyr, grundað á mátingarnar","Accessories from measurement"],gLab:["Arbeiðsløn","Labour"],
calcK:["Útrokningar","Calculations"],calcH:["Hví loysir hetta seg?","Why it pays off"],calcP:["Útrokningin er grundað á mátingarnar frá staðarvitjanini og fortreytirnar niðanfyri. Tølini eru Dømi og ikki nøkur trygd fyri úrslitinum.","Based on the site visit measurements and the assumptions below. Figures are examples, not a guarantee."],
kRun:["Mátað rørleiðing","Measured pipe run"],kRunE:["Mátað luftkanal","Measured duct run"],kRunD:["{p} gjøgnumbrot · {h} m hæddarmunur","{p} penetrations · {h} m height difference"],
kSave:["Mett árlig sparing","Est. saving per year"],kSaveD:["samanborið við tína núverandi hitaskipan","compared with your current heating"],
kPay:["Mett afturgjaldstíð","Est. payback"],kPayD:["Tilboð við MVG ÷ árlig sparing","Offer incl. VAT ÷ annual saving"],
costNow:["Nú","Now"],costHp:["Hitapumpa","Heat pump"],perYr:["kr./ár","DKK/yr"],
assH:["Fortreytir (Dømi)","Assumptions (example)"],
a1:["Hitatørvur: {m2} m² × {s} kWh/m² + heitt vatn {hw} kWh = {d} kWh/ár","Heat demand: {m2} m² × {s} kWh/m² + hot water {hw} kWh = {d} kWh/yr"],
a2:["Oljuprísur {op} kr./l, 10 kWh/l, ketilsnýtsla 85 %","Oil price {op} DKK/l, 10 kWh/l, boiler efficiency 85%"],
a3:["Ravmagnsprísur {ep} kr./kWh","Electricity price {ep} DKK/kWh"],
a4:["Árlig nýtsluvirði (SCOP) {sc}","Seasonal efficiency (SCOP) {sc}"],
a5:["Stuðul og rentur eru ikki íroknað","No subsidies or interest included"],
a6:["Veruliga sparingin veldst um veðrið, nýtsluvanar og hitaskipanina","Real savings depend on weather, habits and heating system"],
docK:["Dátubløð og brúkaravegleiðingar","Datasheets and manuals"],docH:["Alt um vørurnar á einum stað","Everything about the products in one place"],
dSheet:["Dátublað","Datasheet"],dMan:["Brúkaravegleiðing","Manual"],dShop:["Á handil.mp.fo","On handil.mp.fo"],
gK:["Gott at vita","Good to know"],gH:["Spurningar, vit ofta fáa","Questions we often get"],
q1:["Hvat er ein luft/vatn-hitapumpa?","What is an air/water heat pump?"],q1a:["Ein hitapumpa, sum flytur orku úr útiluftini inn í eina vatnborna hitaskipan og veitir heitt vatn. Hon riggar eisini væl í føroyska veðurlagnum, tí útiluftin sjáldan er av álvara køld.","A heat pump that moves energy from outdoor air into a water-based heating system and hot water. It works in Faroese weather too, as the air is rarely truly cold."],
q2:["Hvat er ein útsúgvingarhitapumpa?","What is an exhaust air heat pump?"],q2a:["Hon endurnýtir hitan í luftini, sum verður sogin út úr húsinum. Hóskar væl til hús við miðal ella lítlum hitatørvi.","It reuses the heat in the air extracted from the house. Suits homes with average or low heat demand."],
q3:["Hvat hendir, tá ið hitapumpan verður sett upp?","What happens on install day?"],q3a:["Montørarnir koma um morgunin, verja gólvini, taka gamla oljufýrið burtur, seta innieind og útieind upp, leggja rør og kaðalar, fylla skipanina og royna hana. Arbeiðið tekur vanliga 1–2 dagar. Heitt vatn verður ikki tøkt í nakrar tímar.","Our installers arrive in the morning, protect floors, remove the old boiler, mount indoor and outdoor units, run pipes and cable, fill and test the system. Usually 1–2 days. No hot water for a few hours."],
q4:["Ljóðar hon nógv?","Is it noisy?"],q4a:["Nútímans útieindir eru lágoyðandi. Vit velja staðsetingina soleiðis, at hon órógvar minst møguligt – til dømis ikki beint undir einum sovikamari.","Modern outdoor units are quiet. We place the unit so it disturbs as little as possible – e.g. not right under a bedroom."],
q5:["Hvussu skal eg halda hana við líka?","How do I maintain it?"],q5a:["Syrg fyri, at útieindin er frí fyri bløðum og kava, og reinsa filturinum nakrar ferðir um árið. Vit bjóða eisini árliga tænastueftirkanning.","Keep the outdoor unit free of leaves and snow, and clean the filter a few times a year. We offer an annual service."],
tlK:["Næstu stig","Next steps"],tlH:["Hvat hendir víðari?","What happens next"],
t1:["Staðarvitjan","Site visit"],t1d:["Gjørd {d}","Done {d}"],t2:["Tilboð","Offer"],t2d:["Tú lesur tað nú","You are reading it now"],t3:["Góðkenning","Acceptance"],t3d:["Tú góðkennir tilboðið á netinum","You accept online"],
t4:["Íseting","Installation"],t4d:["Dømi: um 3–5 vikur","Example: in 3–5 weeks"],t5:["Tilbúgvin at brúka","Up and running"],t5d:["Handan og uppfylging","Handover and follow-up"],
cK:["Samband","Contact"],cH:["Hevur tú spurningar? Set teg í samband við sølufólkið","Questions? Contact your salesperson"],
cRole:["Sølufólk, hitapumpur","Sales, heat pumps"],photoPh:["Mynd<br>(plássheldari)","Photo<br>(placeholder)"],
call:["Ring","Call"],chat:["Chat","Chat"],mail:["Teldupostur","Email"],
accB:["Tilbúgvin at fara í gongd?","Ready to go ahead?"],accP:["Góðkenn tilboðið við einum klikki. Vit seta okkum í samband við teg fyri at avtala ein dag fyri ísetingina.","Accept the offer with one click. We will contact you to agree an installation date."],
accBtn:["Góðkenn og undirskriva tilboðið","Accept and sign offer"],
accMH:["Góðkenn tilboðið (roynd)","Accept offer (mock)"],accMP:["Í veruligu loysnini verður undirskrivað við t.d. Samleikanum, og BC-tilboðið verður merkt sum góðkent og klárt at flyta yvir í eina verkætlan (Projects/Jobs). Í hesi royndarútgávuni hendir einki.","In the real solution, signing would use e.g. an e-ID, and the BC quote is marked accepted and ready to transfer into a Project (Projects/Jobs). In this mockup nothing happens."],
chatFab:["Spyr sølufólkið","Ask your salesperson"],
chatMH:["Samskifta við sølufólkið (roynd)","Chat with your salesperson (mock)"],chatMP:["Boðini her verða send beinleiðis til sølufólkið (t.d. við Teams, SMS ella telduposti) og skrásett á sølumøguleikanum í BC CRM. Hetta er ein royndarútgáva – einki verður sent.","Messages here go straight to the salesperson (e.g. Teams/SMS/email) and are logged on the opportunity in BC CRM. Mock – nothing is sent."],
footN:["Hetta er ein royndarútgáva av hugskotinum. Allir kundar, prísir, vørur og sparingar eru Dømi og ikki verulig dáta.","Concept mockup. All customers, prices, products and savings are EXAMPLES, not real data."],
pcs:["stk","pcs"],m:["m","m"],hrs:["t","hrs"],set:["sett","set"]
};

T.vHome=['Vitjanir','Visits'];

let S={lang:'fo',view:'sales',sid:'sol',sols:['aw','gs'],choice:'gs',pk:{aw:'ctc8',ea:'qe5',gs:'gsi612'},cust:0,job:'oil',date:new Date().toISOString().slice(0,10),
 house:{type:'det',m2:145,year:1978,people:4,emit:'rad',ins:'mid'},
 base:{type:'oil',mode:'use',oil:2200,kwh:21000,cost:24000,eff:85,hh:5000,scopOld:2.2},
 indoor:{w:800,d:800,h:2350,front:700,floor:true,access:true,old:true},
 outdoor:{mount:'ground',neigh:9,behind:300,side:400,above:1000,wind:true,snow:true,ex:'roof'},
 ground:{kind:'bore',rock:'basalt',soilD:4,soil:'normal'},
 run:{aw:{len:8,pen:1,h:1.5},ea:{len:6,pen:1,h:3},gs:{len:12,pen:1,h:.5}},runTab:'gs',
 el:{fuse:25,spare:true,rcd:true,three:true,cable:6,drain:'gully'},
 photos:{ph1:true,ph2:true,ph3:false,ph4:false,ph5:false,ph6:true},notes:'',
 eco:{oilP:11,elP:2.1,co2Oil:2.65,co2El:0.35,scop:{aw:3.6,ea:3.2,gs:5.0},cov:{aw:95,ea:80}},
 addons:{therm:true,myup:true,filt:true},svc:2};
const FO=()=>S.lang==='fo';
const L=(f,e)=>FO()?f:e;const LL=L;
const t=(k,v)=>{let s=(T[k]||[k,k])[FO()?0:1];if(v)for(const x in v)s=s.split('{'+x+'}').join(v[x]);return s.split('§QNO§').join(QNO())};
const nf=(n,d=0)=>Number(n).toLocaleString(FO()?'da-DK':'en-GB',{minimumFractionDigits:d,maximumFractionDigits:d});
const kr=n=>nf(n)+' kr.';
const SRC=MOCK.sources;
const CUST=MOCK.crm.contacts;
const SELLER=MOCK.seller;
const SOLS=MOCK.solutions;
const solName=ty=>FO()?SOLS[ty].fo:SOLS[ty].en;
const PK=Object.fromEntries(Object.entries(MOCK.packages).map(([k,p])=>[k,Object.assign({},p,{lines:p.lines.map(l=>{const it=MOCK.items[l.item];return [l.item,it.fo,it.en,l.qty,it.unit,it.price]})})]));
const ADD=MOCK.addons;
const SVC=[null,...MOCK.serviceTiers];
const addOn=()=>[...ADD.filter(a=>S.addons[a.id]),...(S.svc?[SVC[S.svc]]:[])];
const addonSum=()=>addOn().reduce((s,a)=>s+a.pr,0);
const pkOf=ty=>PK[S.pk[ty]];
const pk=()=>pkOf(S.choice);
const pkName=p=>FO()?p.name:p.nameEn;
const ROCK=MOCK.rock;
const SOIL=MOCK.soil;
const SPEC={good:85,mid:120,poor:165};
const DHW=5000,FLH=2400;
function demand(){const b=S.base,e=S.eco,h=S.house;let Q,cons,unit,cost,co2,heatEl=0;
 if(b.type==='oil'){cons=b.mode==='cost'?b.cost/e.oilP:b.oil;unit='l';Q=cons*10*b.eff/100;cost=cons*e.oilP;co2=cons*e.co2Oil;}
 else{cons=b.mode==='cost'?b.cost/e.elP:b.kwh;unit='kWh';heatEl=Math.max(0,cons-b.hh);
  Q=b.type==='el'?heatEl*b.eff/100:heatEl*b.scopOld;cost=heatEl*e.elP;co2=heatEl*e.co2El;}
 const est=Math.round(h.m2*SPEC[h.ins]+DHW);Q=Math.round(Q);const dhw=Math.min(DHW,Q*.4);
 const Pd=(Q-dhw)/FLH+dhw/8760;return {Q,cons,unit,cost,co2,est,dhw,Pd,heatEl};}
function cover(ty){const d=demand();if(ty==='gs'){const p=pkOf('gs'),pc=Math.min(1,p.pmax/d.Pd);return {pc,cov:1-Math.pow(1-pc,2.5)}}return {pc:null,cov:S.eco.cov[ty]/100}}
function alt(ty){const d=demand(),e=S.eco,c=cover(ty).cov,sc=e.scop[ty];const Qhp=d.Q*c,E=Qhp/sc+(d.Q-Qhp)/0.95,cost=E*e.elP,save=d.cost-cost,co2=E*e.co2El;
 const pr=price(ty);return {cov:c,Qhp,E,cost,save,pay:save>0?pr.inc/save:0,co2,co2save:d.co2-co2,pr};}
function ground(){const d=demand(),p=pkOf('gs'),g=S.ground,sc=S.eco.scop.gs,r=S.run.gs,{pc,cov}=cover('gs');
 const Qhp=d.Q*cov,Qg=Qhp*(1-1/sc),Pu=Math.min(d.Pd,p.pmax),Pg=Pu*(1-1/p.cop),tr=2*Math.ceil(r.len+r.h);let o={pc,cov,Qhp,Qg,Pu,Pg,tr,kind:g.kind};
 if(g.kind==='bore'){const k=ROCK[g.rock];o.k=k;o.Hp=Pg*1000/k.w;o.He=Qg/k.e;o.Ha=Math.max(o.Hp,o.He);o.Hoff=Math.max(100,Math.ceil((o.Ha+10)/5)*5);o.holes=Math.ceil(o.Hoff/200);o.per=Math.ceil(o.Hoff/o.holes);o.drill=o.Hoff+o.holes*g.soilD;o.col=2*o.Hoff+tr;o.loops=o.holes;}
 else{const k=SOIL[g.soil];o.k=k;o.Lp=Pg*1000/k.w;o.Le=Qg/k.e;o.Lc=Math.ceil(Math.max(o.Lp,o.Le)/10)*10;o.area=o.Lc*1.5;o.loops=Math.ceil(o.Lc/400);o.col=o.Lc+tr;}
 o.vol=o.col*1;o.anti=o.col*.3;o.qc=Pg/(3.9*3);o.q=Math.max(o.qc,p.qN);o.v=o.q/o.loops/1000/(Math.PI*.0176*.0176);o.trans=o.q>0.5?'PE 50':'PE 40';return o;}
function acc(ty){const r=S.run[ty],L=r.len,o=[],c=Math.ceil;const A=(no,fo,en,q,u,pr,rule)=>{const it=MOCK.items[no];if(it){fo=it.fo;en=it.en;u=it.unit;pr=it.price}o.push({no,d:FO()?fo:en,q,u,pr,rule})};const pen=LL('= gjøgnumbrot','= penetrations');
 if(ty==='aw'){
  A('VNR-DØMI-3001','Forisolerað tvíbólkarør, per m (dømi)','Pre-insulated twin pipe, per m (example)',c(L*1.1+r.h),'m',420,'⌈L×1,1 + H⌉');
  A('VNR-DØMI-3002','UV-føst einangran, uttanpartur (dømi)','UV-resistant insulation, outdoor part (example)',Math.max(1,c(L*.4)),'m',85,'⌈L×0,4⌉');
  A('VNR-DØMI-3003','Murhylki / veggjagjøgnumføring (dømi)','Wall sleeve / penetration (example)',r.pen,'pcs',390,pen);
  A('VNR-DØMI-3004','Røraklemmur (dømi)','Pipe clamps (example)',c(L/.8)+2,'pcs',28,'⌈L÷0,8⌉ + 2');
  if(S.outdoor.mount==='ground')A('VNR-DØMI-3005','Jarðstativ við vibratiónsdempurum (dømi)','Ground stand with anti-vibration feet (example)',1,'pcs',1890,LL('festing','mount'));
  else A('VNR-DØMI-3006','Veggkonsoll við vibratiónsdempurum (dømi)','Wall bracket with anti-vibration mounts (example)',1,'pcs',1450,LL('festing','mount'));
  A('VNR-DØMI-3007','El-kabul 5G2,5, per m (dømi)','Power cable 5G2.5, per m (example)',c(L+S.el.cable+2),'m',38,'L + E + 2');
  A('VNR-DØMI-3008','Samskiftiskabul, per m (dømi)','Communication cable, per m (example)',c(L+3),'m',14,'L + 3');
  if(S.el.drain!=='gully')A('VNR-DØMI-3009','Hitakabul til kondensfrárenning (dømi)','Heat trace cable for condensate (example)',c(2+L*.3),'m',95,'2 + L×0,3');
 }else if(ty==='ea'){
  A('VNR-DØMI-4001','Ventilatiónskanalur Ø160, per m (dømi)','Ventilation duct Ø160, per m (example)',c(L*1.1+r.h),'m',165,'⌈L×1,1 + H⌉');
  A('VNR-DØMI-4002','Kanaleinangran 50 mm, per m (dømi)','Duct insulation 50 mm, per m (example)',c(L),'m',120,'⌈L⌉');
  const roof=S.outdoor.ex==='roof';
  A('VNR-DØMI-4003',roof?'Takhetta til útblástur (dømi)':'Veggrist til útblástur (dømi)',roof?'Roof cowl for exhaust (example)':'Wall grille for exhaust (example)',1,'pcs',roof?2450:890,LL('útlop','outlet'));
  A('VNR-DØMI-4004','Gjøgnumføring, tak/veggur (dømi)','Roof/wall penetration kit (example)',r.pen,'pcs',540,pen);
  A('VNR-DØMI-4005','Upphongingarbeslag (dømi)','Hangers (example)',c(L/1.2)+1,'pcs',35,'⌈L÷1,2⌉ + 1');
  A('VNR-DØMI-4006','Bendir/T-stykki Ø160 (dømi)','Bends/tees Ø160 (example)',2+r.pen,'pcs',145,'2 + P');
 }else{const g=ground();
  if(g.kind==='bore'){
   A('VNR-DØMI-6001','Boring í berg, aktiv dýpd, per m (undirveitari, dømi)','Rock drilling, active depth, per m (subcontractor, example)',g.Hoff,'m',320,LL('H boðið','H offered'));
   A('VNR-DØMI-6002','Fóðurrør gjøgnum jarðlag, per m (dømi)','Casing through soil, per m (example)',g.holes*S.ground.soilD,'m',450,'n × '+LL('jarðlag','soil'));
   A('VNR-DØMI-6003','Kollektorslanga PE 40, U-rør, per m (dømi)','Collector hose PE 40, U-loop, per m (example)',2*g.Hoff,'m',32,'2 × H');
   A('VNR-DØMI-6004','Borholutekja (dømi)','Borehole cap (example)',g.holes,'pcs',1200,'n');
  }else{
   A('VNR-DØMI-6011','Kollektorslanga PE 40, jarðslanga, per m (dømi)','Collector hose PE 40, ground loop, per m (example)',g.Lc,'m',32,'L_kollektor');
   A('VNR-DØMI-6012','Grøft til jarðslangu, per m (dømi)','Trenching for ground loop, per m (example)',g.Lc,'m',60,'L_kollektor');
   if(g.loops>1)A('VNR-DØMI-6013','Fordeilari til '+g.loops+' slingur (dømi)','Manifold for '+g.loops+' loops (example)',1,'pcs',2400,LL('slangulykkjur > 1','loops > 1'));
  }
  A('VNR-DØMI-6020','Transportleiðing '+g.trans+' í grøft, per m (dømi)','Transport line '+g.trans+' in trench, per m (example)',g.tr,'m',48,'2 × ⌈L + H⌉');
  A('VNR-DØMI-6021','Grøft hús → borihol/kollektor, per m (dømi)','Trench house → borehole/collector, per m (example)',c(L),'m',350,'⌈L⌉');
  A('VNR-DØMI-6022','Frostvarnarvæska (~30 %), per l (dømi)','Antifreeze (~30%), per l (example)',c(g.anti),'l',38,'0,3 l/m × '+LL('slanga','hose'));
  A('VNR-DØMI-6023','Fyllisett við skitfiltri (dømi)','Filler kit with dirt filter (example)',1,'set',1890,'CTC');
  A('VNR-DØMI-6024','Nivå-/ekspansiónsílat til brine (dømi)','Brine level/expansion vessel (example)',1,'pcs',950,'CTC');
  A('VNR-DØMI-6025','Kondenseinangran til brinerør innandura, per m (dømi)','Condensation insulation for indoor brine pipes, per m (example)',c(4+r.h),'m',95,'4 + H');
  A('VNR-DØMI-3003','Murhylki / veggjagjøgnumføring (dømi)','Wall sleeve / penetration (example)',r.pen,'pcs',390,pen);
 }
 return o;}
function labour(ty){const r=S.run[ty];let h,rule;
 if(ty==='aw'){h=16+r.len*.5+r.pen*1.5+r.h;rule='16 + L×0,5 + P×1,5 + H'}else if(ty==='ea'){h=12+r.len*.6+r.pen*2+r.h;rule='12 + L×0,6 + P×2 + H'}else{const g=ground();h=18+r.len*.5+r.pen*1.5+g.loops*3;rule='18 + L×0,5 + P×1,5 + n×3'}
 return [{no:'ARB-DØMI-01',d:L('Íseting, tímar hjá montørum (Dømi)','Installation, installer hours (example)'),q:Math.ceil(h),u:'hrs',pr:MOCK.items['ARB-DØMI-01'].price,rule},
 {no:'ARB-DØMI-02',d:L('Ferðing og ígongdseting (Dømi)','Travel and commissioning (example)'),q:1,u:'set',pr:MOCK.items['ARB-DØMI-02'].price,rule:''}];}
function baseLines(ty){return pkOf(ty).lines.map(l=>({no:l[0],d:FO()?l[1]:l[2],q:l[3],u:l[4],pr:l[5]}));}
function price(ty){const all=[...baseLines(ty),...acc(ty),...labour(ty)];const ex=all.reduce((s,l)=>s+l.q*l.pr,0);return {ex,vat:ex*.25,inc:ex*1.25,n:all.length};}
function totalWithAdd(ty){const p=price(ty),a=addonSum();const ex=p.ex+a;return {ex,vat:ex*.25,inc:ex*1.25,n:p.n+addOn().length,add:a};}
const noiseQ=()=>S.outdoor.q||({ground:2,wall:4,corner:8})[S.outdoor.mount]||2;
function noiseRaw(){const p=pkOf('aw');const r=Math.max(1,S.outdoor.neigh);return p.lw+10*Math.log10(noiseQ()/(4*Math.PI*r*r));}
function noise(){return Math.round(noiseRaw());}
const noiseLim=()=>(S.v3&&S.v3.lim)||35;
const has=ty=>S.sols.includes(ty);
function checks(){const i=S.indoor,o=S.outdoor,c=[];
 S.sols.forEach(ty=>{const p=pkOf(ty),hreq=p.ceil||p.dims[2]+(ty==='ea'?250:150),ok=i.w>=p.dims[0]+100&&i.d>=p.dims[1]&&i.h>=hreq;
  c.push({k:L('Tøknirúm','Utility room')+' · '+solName(ty),ok,v:`${i.w}×${i.d}×${i.h} / ≥${p.dims[0]+100}×${p.dims[1]}×${hreq}`});});
 c.push({k:t('front'),ok:i.front>=600,v:`${i.front} / ≥600`});
 if(has('aw')){c.push({k:t('s3')+' · '+L('frípláss','clearance'),ok:o.behind>=250&&o.side>=300,v:`${o.behind}/${o.side} mm`});if(S.noiseOn){const n=noise();c.push({k:t('noiseL'),ok:n<=noiseLim(),warn:n<=noiseLim()+3,v:`${n} dB(A) / ≤${noiseLim()}`});}}
 if(has('gs')){const g=ground();c.push(g.kind==='bore'?{k:L('Borihol','Borehole'),ok:g.per<=200,warn:true,v:`${g.holes} × ${g.per} m`}:{k:L('Jarðslanga','Ground loop'),ok:true,v:`${nf(g.Lc)} m · ${nf(g.area)} m²`});
  c.push({k:L('Bergur/jarðlag váttað av boraranum','Rock/soil confirmed by driller'),ok:false,warn:true,v:L('fortreyt','assumption')});}
 c.push({k:t('mainF'),ok:S.el.fuse>=25,warn:S.el.fuse>=20,v:`${S.el.fuse} A`});
 const np=Object.values(S.photos).filter(Boolean).length;c.push({k:t('s6'),ok:np>=4,warn:true,v:`${np} / 6`});
 S.sols.forEach(ty=>{if(S.run[ty].len>(ty==='gs'?40:15))c.push({k:L('Leið','Run')+' · '+solName(ty),ok:false,warn:true,v:`${nf(S.run[ty].len,1)} m`})});
 return c;}
const icon=c=>c.ok?'<span class="ic ok">✓</span>':c.warn?'<span class="ic wa">!</span>':'<span class="ic ba">✕</span>';
function steps(){const a=['sol','cust','house','indoor'];if(has('aw')||has('ea'))a.push('outdoor');if(has('gs'))a.push('ground');a.push('dist','el','photos','pkg','save','sum','follow');return a;}
const STL={sol:['Loysn','Solution'],cust:['Kundi','Customer'],house:['Hús og verandi hitaskipan','House & current heating'],indoor:['Tøknirúm','Utility room'],outdoor:['Útieind','Outdoor unit'],ground:['Jarðhiti','Ground source'],dist:['Fjarstøða','Distance'],el:['El og frárenning','Electrical & drain'],photos:['Myndir','Photos'],pkg:['Pakki og eykaútgerð','Package & add-ons'],save:['Sparing','Savings'],sum:['Samandráttur','Summary'],follow:['Eftirfylging','Follow-up']};
const stl=id=>FO()?STL[id][0]:STL[id][1];
function get(p){return p.split('.').reduce((o,k)=>o[k],S)}
function setv(p,v,re){const ks=p.split('.');let o=S;ks.slice(0,-1).forEach(k=>o=o[k]);o[ks[ks.length-1]]=v;if(re)render();else live();}
const chip=(path,val,label)=>`<button class="chip ${get(path)===val?'on':''}" onclick="setv('${path}','${val}',1)">${label}</button>`;
const sw=(path,label)=>`<div class="toggle"><span>${label}</span><button class="sw ${get(path)?'on':''}" onclick="setv('${path}',${!get(path)},1)"></button></div>`;
const num=(path,label,step=1)=>`<div class="fld"><label>${label}</label><input type="number" inputmode="${step<1?'decimal':'numeric'}" autocomplete="off" enterkeyhint="next" step="${step}" value="${get(path)}" oninput="setv('${path}',+this.value)"></div>`;
function stepper(path,label,unit,st,min,max){const v=get(path),d=st<1?1:0;return `<div class="card"><div class="metric"><label>${label}</label><div class="stepper"><button onclick="bump('${path}',-${st},${min},${max})">−</button><div class="val">${nf(v,d)} <small>${unit}</small></div><button onclick="bump('${path}',${st},${min},${max})">+</button></div></div><input type="range" min="${min}" max="${max}" step="${st}" value="${v}" oninput="setv('${path}',+this.value);this.closest('.card').querySelector('.val').innerHTML=nf(+this.value,${d})+' <small>${unit}</small>'"></div>`}
function mini(path,label,unit,st,min,max){const v=get(path),d=st<1?1:0;return `<div class="card" style="margin:0;padding:12px"><div style="font-size:12px;font-weight:600;margin-bottom:8px">${label}</div><div class="stepper" style="justify-content:space-between"><button onclick="bump('${path}',-${st},${min},${max})">−</button><div class="val" style="min-width:0;font-size:22px">${nf(v,d)} <small>${unit}</small></div><button onclick="bump('${path}',${st},${min},${max})">+</button></div></div>`}
function bump(p,d,mi,ma){let v=Math.round((get(p)+d)*10)/10;v=Math.min(ma,Math.max(mi,v));setv(p,v,1)}
function toggleSol(ty){const i=S.sols.indexOf(ty);if(i>=0){if(S.sols.length>1)S.sols.splice(i,1)}else S.sols.push(ty);S.sols.sort((a,b)=>['aw','ea','gs'].indexOf(a)-['aw','ea','gs'].indexOf(b));if(!has(S.choice))S.choice=S.sols[0];if(!has(S.runTab))S.runTab=S.sols[0];render()}
function setBase(ty){S.base.type=ty;S.base.eff=ty==='oil'?85:95;render()}
function togAdd(id){S.addons[id]=!S.addons[id];render()}
/* geothermal formula rows */
function gRows(){const g=ground(),d=demand(),p=pkOf('gs'),b=S.base,sc=S.eco.scop.gs,fo=FO(),R=[];
 const r=(k,f,i,v,src,url)=>R.push({k,f,i,v,src,url});
 r(L('Nettohitatørvur','Net heat demand'),'Q = '+L('nýtsla × orkuinnihald × nyttuvirði','use × energy content × efficiency'),b.type==='oil'?`${nf(d.cons)} l × 10 kWh/l × ${b.eff} %`:(b.type==='el'?`(${nf(d.cons)} − ${nf(b.hh)}) kWh × ${b.eff} %`:`(${nf(d.cons)} − ${nf(b.hh)}) kWh × SCOP ${nf(b.scopOld,1)}`),nf(d.Q)+' kWh/'+L('ár','yr'),'ctc',SRC.tedap);
 r(L('Heitt vatn (partur av Q)','Hot water (part of Q)'),'Q_hv','5 000 kWh/'+L('ár (vanligt CTC-virði)','yr (CTC default)'),nf(d.dhw)+' kWh','ctc',SRC.tedap);
 r(L('Dimensjónerandi effekt','Design power'),'P_d = (Q − Q_hv) / 2 400 h + Q_hv / 8 760 h',L('2 400 h kalibrerað eftir Tedap-døminum (21 750 kWh → 7,6 kW)','2 400 h calibrated to the Tedap example (21 750 kWh → 7.6 kW)'),nf(d.Pd,1)+' kW','ass',SRC.tedap);
 r(L('Effektdekningur','Power coverage'),'pc = P_max / P_d',`P_max ${p.pmax} kW (${L('fortreyt: mesta úttak','assumption: max output')})`,nf(g.pc*100)+' %','ass','');
 r(L('Orkudekningur','Energy coverage'),'E = 1 − (1 − pc)^2,5',L('Vanlig norðurlendsk kurva; CTC-forritið roknar hana sjálvt (Tedap-dømi 95,4 %)','Typical Nordic curve; CTC software computes it itself (Tedap example 95.4%)'),nf(g.cov*100,1)+' %','ass',SRC.tedap);
 r(L('Hitapumpan veitir','Heat pump delivers'),'Q_hp = Q × E',`${nf(d.Q)} × ${nf(g.cov,3)}`,nf(g.Qhp)+' kWh','calc','');
 r(L('Orka úr jørðini','Energy from the ground'),'Q_j = Q_hp × (1 − 1/SCOP)',`SCOP ${nf(sc,1)} (${L('fortreyt; CTC upplýsir SCOP 5,5 fyri GSi','assumption; CTC states GSi SCOP 5.5')})`,nf(g.Qg)+' kWh','ass',SRC.hor);
 r(L('Effekt úr jørðini','Power from the ground'),'P_j = min(P_d, P_max) × (1 − 1/COP)',`COP B0/W35 ${nf(p.cop,2)} (CTC ${p.name.split(' ').slice(0,3).join(' ')})`,nf(g.Pg,2)+' kW','ctc',SRC.gsi);
 if(g.kind==='bore'){
  r(L('Aktiv boridýpd','Active borehole depth'),'H = max(P_j / q_W ; Q_j / q_E)',`${fo?g.k.fo:g.k.en}: q_W ${g.k.w} W/m, q_E ${g.k.e} kWh/m·${L('ár','yr')}, λ≈${nf(g.k.lam,1)}`,`${nf(g.Hp)} / ${nf(g.He)} → ${nf(g.Ha)} m`,'ass','');
  r(L('Tilboðin boridýpd','Offered depth'),'H_tilb = max(100 ; H + 10 m)',L('CTC: Tilboðið skal fevna um ≥ 10 m meira enn útroknaða longdin; boridýpdin skal altíð vera > 100 m','CTC: offer ≥ 10 m more than calculated; drilling always > 100 m'),nf(g.Hoff)+' m','ctc',SRC.tedap);
  r(L('Tal av boriholum','Number of boreholes'),'n = ⌈H_tilb / 200⌉',L('CTC: Virkin dýpd er vanliga 100–200 m, stundum krevjast tvey borihol','CTC: active depth usually 100–200 m, sometimes two holes'),`${g.holes} × ${g.per} m`,'ctc',SRC.install);
  r(L('Samanløgd boridýpd','Total drilling'),'H_tilb + n × '+L('jarðlag','soil depth'),L('CTC: Virkin dýpd er í bergi undir støðugum grundvatni','CTC: active depth = in rock below stable groundwater')+` · ${S.ground.soilD} m`,nf(g.drill)+' m','ctc',SRC.tedap);
 }else{
  r(L('Kollektorlongd','Collector length'),'L = max(P_j / q_W ; Q_j / q_E)',`${fo?g.k.fo:g.k.en}: q_W ${g.k.w} W/m, q_E ${g.k.e} kWh/m·${L('ár','yr')}`,`${nf(g.Lp)} / ${nf(g.Le)} → ${nf(g.Lc)} m`,'ass','');
  r(L('Øki','Area'),'A = L × 1,5 m',L('CTC: 1,5 m millum slangurnar; slangan liggur vanliga á umleið 1 m dýpi og er 200–500 m long','CTC: 1.5 m spacing; hose ≈ 1 m deep, usually 200–500 m'),nf(g.area)+' m²','ctc',SRC.hor);
  r(L('Slangulykkjur','Loops'),'n = ⌈L / 400 m⌉',L('Fortreyt grundað á Tedap (eldri modell hava 400–750 m í hvørjari slangulykkju)','Assumption based on Tedap (older models 400–750 m per single loop)'),g.loops+'','ass',SRC.tedap);
 }
 r(L('Samanløgd slongd (íroknað flutning)','Hose total (incl. transport)'),L('kollektor + 2 × (L + H)','collector + 2 × (L + H)'),`L ${nf(S.run.gs.len,1)} m, H ${nf(S.run.gs.h,1)} m`,nf(g.col)+' m','calc','');
 r(L('Nøgd av kølivæsku / frostverjuvætu','Brine / antifreeze volume'),'V = 1 l/m · A = 0,3 l/m',L('CTC: ~1 l kølivæska og ~0,3 l frostvarnarvæska per m av 40 mm slangu','CTC: ~1 l brine and ~0.3 l antifreeze per m of 40 mm hose'),`${nf(g.vol)} l / ${nf(g.anti)} l`,'ctc',SRC.gsi);
 r(L('Flæði av kølivæsku','Brine flow'),'q = P_j / (ρc_p × ΔT)',`ΔT 3 K (CTC) · ρc_p 3,9 kJ/l·K (${L('fortreyt','assumption')}) · ${L('nominelt','nominal')} ${nf(p.qN,2)} l/s (CTC)`,`${nf(g.qc,2)} → ${nf(g.q,2)} l/s`,'ctc',SRC.gsi);
 r(L('Flæði í slangu','Velocity in hose'),'v = q / (n × A_PE40)',L('PE 40×2,4, innara Ø 35,2 mm (fortreyt)','PE 40×2.4, inner Ø 35.2 mm (assumption)'),nf(g.v,2)+' m/s','ass','');
 r(L('Rørstødd','Pipe size'),L('kollektor 40 mm · tilknýting ≥ Ø28 mm','collector 40 mm · connection ≥ Ø28 mm'),L('CTC: Rørið millum hitapumpuna og kollektarin skal hava innara diametur, ið ikki er minni enn Ø28 mm; flutningur ','CTC: pipe between heat pump and collector not less than Ø28 mm internal; transport ')+g.trans,g.trans,'ctc',SRC.gsi);
 return R;}
function srcTag(s){return s==='ctc'?'<span class="src c">CTC</span>':s==='ass'?`<span class="src a">${L('Fortreyt','Assumption')}</span>`:`<span class="src k">${L('Útrokning','Calc')}</span>`}
function gTable(){return `<table class="ftbl"><thead><tr><th>${L('Nøgd','Quantity')}</th><th>${L('Formil og ísetingar','Formula and inputs')}</th><th class="n">${L('Virði','Value')}</th><th>${L('Kelda','Source')}</th></tr></thead><tbody>${gRows().map(x=>`<tr><td><b>${x.k}</b></td><td><code>${x.f}</code><div class="fi">${x.i}</div></td><td class="n"><b>${x.v}</b></td><td>${srcTag(x.src)}${x.url?` <a href="${x.url}" target="_blank" rel="noopener">↗</a>`:''}</td></tr>`).join('')}</tbody></table>
 <div class="warnbox" style="margin-top:10px">🇫🇴 ${L('Føroysk viðurskifti: Undirgrundin er fyri tað mesta basalt (λ ≈ 1,7 W/m·K er ein fortreyt, ikki eitt CTC-virði). Hetta er ikki staðfest. Kanna tí við boraran og ger helst eina TRT-roynd, áðrenn tilboðið verður endaligt.','Faroese conditions: the bedrock is mostly basalt (λ ≈ 1.7 W/m·K is an assumption, not CTC). Not verified – check with the driller and ideally a TRT test before the offer is final.')}</div>`}

const EST=()=>`<div class="estbar">⚠️ ${L('Metingar / Estimates only','Metingar / Estimates only')} · ${L('ikki ein lovan','not a guarantee')}</div>`;
function solTabs(key,list){return `<div class="seg sm" style="display:inline-flex;margin-bottom:12px">${list.map(ty=>`<button class="${S[key]===ty?'on':''}" onclick="S.${key}='${ty}';render()">${solName(ty)}</button>`).join('')}</div>`}
function addonCards(compact){return ADD.filter(a=>a.for.some(has)).map(a=>`<div class="addon ${S.addons[a.id]?'on':''}"><div class="aic">${a.ic}</div><div style="flex:1;min-width:0"><div class="an">${FO()?a.fo:a.en}</div><div class="am">${kr(a.pr)} ${L('uttan MVG','excl. VAT')} · <a href="${MOCK.handil.searchUrl}${encodeURIComponent(a.q)}" target="_blank" rel="noopener">${L('Sí í handlinum','See in the shop')} ↗</a> <span class="demo inl">${t('demoS')}</span></div></div><button class="sw ${S.addons[a.id]?'on':''}" onclick="togAdd('${a.id}')" aria-label="add"></button></div>`).join('')}
function saveTable(){const d=demand(),fo=FO();const rows=S.sols.map(ty=>{const a=alt(ty);return `<tr class="${ty===S.choice?'hl':''}"><td><b>${solName(ty)}</b><div class="fi">${pkName(pkOf(ty))}</div></td><td class="n">${kr(a.cost)}</td><td class="n" style="color:var(--acc)"><b>${kr(a.save)}</b></td><td class="n">${nf(a.pay,1)} ${t('yrs')}</td><td class="n">${nf(a.co2/1000,1)} t<div class="fi">−${nf(a.co2save/1000,1)} t</div></td></tr>`}).join('');
 return `<table class="ftbl stbl"><thead><tr><th>${L('Loysn','Solution')}</th><th class="n">${L('Kostnaður/ár','Cost/yr')}</th><th class="n">${L('Sparing/ár','Saving/yr')}</th><th class="n">${L('Afturgjaldstíð','Payback')}</th><th class="n">CO₂/${L('ár','yr')}</th></tr></thead><tbody>
 <tr class="bl"><td><b>${L('Núverandi','Current')}: ${baseName()}</b><div class="fi">${nf(d.cons)} ${d.unit}/${L('ár','yr')} · Q ${nf(d.Q)} kWh</div></td><td class="n">${kr(d.cost)}</td><td class="n">—</td><td class="n">—</td><td class="n">${nf(d.co2/1000,1)} t</td></tr>${rows}</tbody></table>`}
const baseName=()=>({oil:L('Oljufýr','Oil boiler'),el:L('Beinleiðis elhiti','Direct electric'),hp:L('Hitapumpa (eldri)','Old heat pump')})[S.base.type];
function stepHTML(){const id=S.sid,ST=steps(),idx=ST.indexOf(id),h=S.house,b=S.base,fo=FO();let x=`<div class="stepin"><div class="st-k">${t('stepOf',{a:idx+1,b:ST.length})} · ${stl(id)}</div>`;
 const H=s=>`<div class="st-h">${s}</div>`,P=s=>`<p class="st-p">${s}</p>`;
 if(id==='sol'){x+=H(L('Hvørja loysn ynskir kundin?','Which solution does the customer want?'))+P(L('Vel eina ella fleiri loysnir. Velur kundin fleiri, verða tær vístar lið um lið í tilboðnum, so kundin kann velja. Hini stigini verða tillagað eftir valinum.','Pick one or more solutions. With more than one, the customer gets them side by side in the offer and can choose. The remaining steps adapt to the choice.'))+
  ['aw','ea','gs'].map(ty=>`<button class="pick sol ${has(ty)?'on':''}" onclick="toggleSol('${ty}')"><img src="${IMG[SOLS[ty].img]}"><div style="flex:1"><div class="n">${solName(ty)}</div><div class="m">${fo?SOLS[ty].dfo:SOLS[ty].den}</div><div class="m" style="margin-top:4px">${ty==='gs'?`<span class="tag">+ ${L('Stig fyri jarðhita','Ground source step')}</span>`:ty==='aw'?`<span class="tag">+ ${L('Stig fyri útieind','Outdoor unit step')}</span>`:`<span class="tag">+ ${L('Útblástur','Exhaust outlet')}</span>`}</div></div><span class="cbx">${has(ty)?'✓':''}</span></button>`).join('')+
  `<div class="okbox">${S.sols.length>1?L(`${S.sols.length} alternativ verða samanborin í tilboðnum.`,`${S.sols.length} alternatives will be compared in the offer.`):L('Ein møguleiki.','One alternative.')} ${L('Stig','Steps')}: ${ST.map(stl).join(' → ')}</div>`;}
 if(id==='cust'){x+=H(t('h0'))+P(t('p0'))+`<div class="fld"><input type="search" enterkeyhint="search" autocomplete="off" placeholder="🔍  ${t('search')}"></div>`+
  CUST.map((c,i)=>`<button class="pick ${S.cust===i?'on':''}" onclick="setv('cust',${i},1)"><div class="av">${c.ini}</div><div style="flex:1"><div class="n">${c.n} <span class="demo inl">${t('demoS')}</span></div><div class="m">${c.addr}</div><div class="m" style="margin-top:3px"><span class="tag">${c.opp?t('opp')+' '+c.opp:t('contact')+' '+c.id}</span> ${fo?c.src[0]:c.src[1]}</div></div></button>`).join('')+
  `<div class="card" style="margin-top:6px"><h4>${t('jobType')}</h4><div class="chips">${chip('job','new',t('jNew'))}${chip('job','rep',t('jRep'))}${chip('job','oil',t('jOil'))}</div><div class="fld" style="margin-top:12px"><label>${t('visitDate')}</label><input type="date" value="${S.date}" oninput="setv('date',this.value)"></div></div>`;}
 if(id==='house'){x+=H(L('Húsið og verandi hitaskipan','House and current heating'))+P(L('Verandi hitaskipan er grundarlagið undir allari útrokning av sparing. CTC-hátturin: hitatørvur = verulig nýtsla × virknisgrad.','The current heating is the baseline for all savings. CTC method: heat demand = actual consumption × efficiency.'))+
  `<div class="card"><h4>${L('Núverandi hiting','Current heating')}</h4><div class="chips">${['oil','el','hp'].map(ty=>`<button class="chip ${b.type===ty?'on':''}" onclick="setBase('${ty}')">${({oil:L('Oljufýr','Oil boiler'),el:L('Beinleiðis elhiti','Direct electric'),hp:L('Hitapumpa (eldri)','Old heat pump')})[ty]}</button>`).join('')}</div>
  <div class="chips" style="margin-top:10px">${chip('base.mode','use',L('Nýtsla','Consumption'))}${chip('base.mode','cost',L('Kostnaður','Cost'))}</div><div class="g2" style="margin-top:12px">
  ${b.mode==='cost'?num('base.cost',L('Árligur kostnaður (kr.)','Annual cost (DKK)'),500):(b.type==='oil'?num('base.oil',L('Oljunýtsla um árið (l)','Oil per year (l)'),50):num('base.kwh',L('El-nýtsla um árið (kWh)','Electricity per year (kWh)'),500))}
  ${b.type==='hp'?num('base.scopOld',L('SCOP hjá verandi pumpu','Old pump SCOP'),.1):num('base.eff',L('Virknisgrad (%)','Efficiency (%)'),1)}
  ${b.type!=='oil'?num('base.hh',L('Húsarhaldsel (kWh) verður drigið frá','Household el (kWh) deducted'),500):''}</div>
  <p class="hint">${L('CTC Tedap 445: oljufýr 85–90 % (nýtt), 75–80 % (gamalt); elhiti 95 %; drag 5 000 kWh fyri húsarhaldsel frá.','CTC Tedap 445: oil boiler 85–90% (new), 75–80% (old); electric 95%; deduct 5,000 kWh household electricity.')} <a href="${SRC.tedap}" target="_blank" rel="noopener">↗</a></p></div>`+
  stepper('house.m2',t('area'),'m²',5,40,400)+
  `<div class="card"><div class="g2">${num('house.year',t('year'))}${num('house.people',t('people'))}</div></div>`+
  `<div class="card"><h4>${t('emit')}</h4><div class="chips">${chip('house.emit','rad',t('eRad'))}${chip('house.emit','floor',t('eFloor'))}${chip('house.emit','mix',t('eMix'))}</div></div>`+
  `<div class="card"><h4>${t('ins')} <span class="demo inl">kWh/m² · ${t('demoS')}</span></h4><div class="chips">${chip('house.ins','good',t('iGood')+' · 85')}${chip('house.ins','mid',t('iMid')+' · 120')}${chip('house.ins','poor',t('iPoor')+' · 165')}</div></div>`+
  `<div class="okbox" id="demandBox"></div>`;}
 if(id==='indoor'){x+=H(t('h2'))+P(t('p2'))+`<div class="card" style="padding:0;overflow:hidden"><img src="${IMG.room}" style="width:100%;height:140px;object-fit:cover"><div style="padding:8px 14px;font-size:11px;color:var(--mut)">${L('Myndadømi: tøknirúm við innieind','Image example: utility room with indoor unit')}</div></div>`+
  `<div class="card"><h4>${L('Mát','Measurements')} <span class="tag">${S.sols.map(ty=>solName(ty).split(' ')[0]+' '+pkOf(ty).dims.join('×')).join(' · ')}</span></h4><div class="g2">${num('indoor.w',t('wMm'),10)}${num('indoor.d',t('dMm'),10)}${num('indoor.h',t('hMm'),10)}${num('indoor.front',t('front'),10)}</div></div>`+
  `<div class="card" id="chkIndoor"></div><div class="card">${sw('indoor.floor',t('floorOk'))}${sw('indoor.access',t('access'))}${sw('indoor.old',t('existing'))}</div>`;}
 if(id==='outdoor'){x+=H(has('aw')?t('h3'):t('exOut'));if(has('aw')){x+=(S.noiseOn?P(t('p3')):P(L('Festing og frástøður kring útieindina.','Mounting and clearances around the outdoor unit.')))+`<div class="card"><h4>${t('mount')}</h4><div class="chips">${chip('outdoor.mount','ground',t('mGround'))}${chip('outdoor.mount','wall',t('mWall'))}</div></div>`+
  (S.noiseOn?stepper('outdoor.neigh',t('neigh'),'m',.5,1,30)+`<div class="card" id="noiseCard"></div>`:'')+
  `<div class="card"><h4>${L('Frástøður','Clearances')}</h4><div class="g3">${num('outdoor.behind',t('behind'),10)}${num('outdoor.side',t('sideC'),10)}${num('outdoor.above',t('aboveC'),10)}</div></div><div class="card">${sw('outdoor.wind',t('wind'))}${sw('outdoor.snow',t('snow'))}</div>`;}
  if(has('ea'))x+=`<div class="okbox" style="margin-top:6px">${t('eaNote')}</div><div class="card"><h4>${t('exOut')} · QE</h4><div class="chips">${chip('outdoor.ex','roof',t('exRoof'))}${chip('outdoor.ex','wall',t('exWall'))}</div></div>`;}
 if(id==='ground'){const g=ground(),p=pkOf('gs');x+=H(L('Jarðhiti: borihol ella jarðslanga','Ground source: borehole or ground loop'))+P(L('Dimensjónering eftir CTC-háttinum (Tedap 445 / GSi 600-handbók). Hvør formil vísir ísetingarnar og kelduna.','Sizing in line with the CTC method (Tedap 445 / GSi 600 manual). Each formula shows its inputs and source.'))+
  `<div class="card"><h4>${L('Kelda','Source')}</h4><div class="chips">${chip('ground.kind','bore',L('Borihol í bergi','Borehole in rock'))}${chip('ground.kind','hor',L('Jarðslanga (vatnrøtt)','Ground loop (horizontal)'))}</div>
  <div class="chips" style="margin-top:10px">${S.ground.kind==='bore'?Object.entries(ROCK).map(([k,v])=>chip('ground.rock',k,fo?v.fo:v.en)).join(''):Object.entries(SOIL).map(([k,v])=>chip('ground.soil',k,fo?v.fo:v.en)).join('')}</div></div>`+
  (S.ground.kind==='bore'?`<div class="g2" style="margin-bottom:12px">${mini('ground.soilD',L('Frástøða frá jarðlagi til berg','Soil to bedrock'),'m',1,0,30)}${mini('run.gs.len',L('Hús → borihol (L)','House → borehole (L)'),'m',1,1,60)}</div>`:`<div style="margin-bottom:12px">${mini('run.gs.len',L('Hús → kollektor (L)','House → collector (L)'),'m',1,1,60)}</div>`)+
  `<div class="kgrid">${g.kind==='bore'?`<div class="kk"><span>${L('Tilboðin boridýpd','Offered depth')}</span><b>${nf(g.Hoff)} m</b><i>${g.holes} × ${g.per} m</i></div>`:`<div class="kk"><span>${L('Kollektor','Collector')}</span><b>${nf(g.Lc)} m</b><i>${nf(g.area)} m² · ${g.loops} ${L('slingur','loops')}</i></div>`}
  <div class="kk"><span>${L('Úr jørðini','From ground')}</span><b>${nf(g.Qg)} kWh</b><i>${nf(g.Pg,1)} kW</i></div><div class="kk"><span>${L('Kølivæska','Brine')}</span><b>${nf(g.q,2)} l/s</b><i>${nf(g.vol)} l · ${g.trans}</i></div></div>`+
  `<div class="card"><h4>${L('Útrokning','Calculation')} · ${pkName(p)} <span class="demo inl">${t('demoS')}</span></h4>${gTable()}</div>`;}
 if(id==='dist'){const ty=S.runTab,ea=ty==='ea',gs=ty==='gs';x+=H(gs?L('Hús → borihol/kollektor','House → borehole/collector'):ea?t('h4e'):t('h4'))+P(L('Mát leiðina fyri hvørja loysn. Eykaútgerðin í vørulistanum verður dagførd beinanvegin.','Measure the route for each solution. Accessories in the BOM update instantly.'))+
  (S.sols.length>1?solTabs('runTab',S.sols):'')+`<div class="runviz" id="runviz"></div>`+
  stepper(`run.${ty}.len`,(gs?L('Flutningsleið','Transport line'):ea?t('rune'):t('run'))+' (L)','m',.5,1,gs?60:30)+
  `<div class="g2" style="margin-bottom:12px">${mini(`run.${ty}.pen`,t('pen')+' (P)',t('pcs'),1,0,4)}${mini(`run.${ty}.h`,t('hdiff')+' (H)','m',.5,0,6)}</div>`+
  `<div id="runWarn"></div><div class="card"><h4>${t('accH')} · ${pkOf(ty).bom} <span class="demo inl">${t('demoS')}</span></h4><div id="accTbl"></div></div>`;}
 if(id==='el'){x+=H(t('h5'))+P(t('p5'))+`<div class="card"><h4>${t('mainF')}</h4><div class="chips">${[16,20,25,35,50].map(a=>`<button class="chip ${S.el.fuse===a?'on':''}" onclick="setv('el.fuse',${a},1)">${a} A</button>`).join('')}</div>${S.el.fuse<25?`<div class="warnbox" style="margin:10px 0 0">${t('elWarn')}</div>`:''}</div>`+
  `<div class="card">${sw('el.spare',t('spare'))}${sw('el.rcd',t('rcd'))}${sw('el.three',t('three'))}</div>`+stepper('el.cable',t('cableRoute')+' (E)','m',1,1,40)+
  (has('aw')?`<div class="card"><h4>${t('drain')}</h4><div class="chips">${chip('el.drain','gully',t('dGully'))}${chip('el.drain','soak',t('dSoak'))}${chip('el.drain','pipe',t('dPipe'))}</div>${S.el.drain!=='gully'?`<p class="hint">→ ${t('drainHeat')}</p>`:''}</div>`:'');}
 if(id==='photos'){x+=H(t('h6'))+P(t('p6'))+`<div class="photos">`+['ph1','ph2','ph3','ph4','ph5','ph6'].map((k,i)=>`<button class="ph ${S.photos[k]?'on':''}" onclick="S.photos.${k}=!S.photos.${k};render()">${S.photos[k]?`<span class="bad2">✓ ${t('taken')}</span>`:''}<span class="cam">📷</span>${t(k)}<span style="font-weight:500;font-size:10.5px">${S.photos[k]?'IMG_'+(2041+i*7)+'.jpg · '+t('demoS'):t('tap')}</span></button>`).join('')+
  `</div><div class="card" style="margin-top:12px"><div class="fld"><label>${t('notes')}</label><textarea rows="4" placeholder="${t('notesPh')}" oninput="S.notes=this.value">${S.notes}</textarea></div></div>`;}
 if(id==='pkg'){x+=H(L('Pakki úr vørulista í BC','Package from a BC BOM'))+P(t('p7'))+S.sols.map(ty=>`<div class="card"><h4>${solName(ty)}</h4>${Object.entries(PK).filter(([k,q])=>q.type===ty).map(([k,q])=>`<button class="pick ${S.pk[ty]===k?'on':''}" onclick="S.pk.${ty}='${k}';render()"><img src="${IMG[q.img]}"><div style="flex:1"><div class="n">${pkName(q)}</div><div class="m" style="margin-top:4px;display:flex;flex-wrap:wrap;gap:4px"><span class="tag">BC ${q.bom}</span><span class="tag">${q.kw} kW</span>${q.cop?`<span class="tag">COP B0/W35 ${nf(q.cop,2)} (CTC)</span>`:''}</div></div></button>`).join('')}<div class="tot"><span>${L('Pakki + eykaútgerð + arbeiðsløn','Package + accessories + labour')}</span><b>${kr(price(ty).inc)}</b></div></div>`).join('')+
  `<div class="card"><h4>${L('Mælt eykaútgerð (handil.mp.fo)','Suggested add-ons (handil.mp.fo)')} <span class="demo inl">${t('demoS')}</span></h4>${addonCards()}<div class="tot g"><span>${L('Samanlagdur kostnaður fyri eykaútgerð uttan MVG','Add-ons total excl. VAT')}</span><b>${kr(addonSum())}</b></div></div>`;}
 if(id==='save'){x+=H(L('Mett sparing','Estimated savings'))+EST()+P(L('Samanbering við kundans núverandi hiting ('+baseName()+'). Øll fortreytir kunnu broytast her.','Compared with the customer\'s current heating ('+baseName()+'). All assumptions can be edited here.'))+
  `<div class="card" id="saveTbl"></div><div class="card"><h4>${L('Fortreytir','Assumptions')} <span class="demo inl">${t('demoS')}</span></h4><div class="g2">${b.type==='oil'?num('eco.oilP',L('Oljuprísur (kr./l)','Oil price (DKK/l)'),.1):''}${num('eco.elP',L('Elprísur (kr./kWh)','Electricity price (DKK/kWh)'),.05)}
  ${b.mode==='cost'?num('base.cost',L('Verandi kostnaður (kr./ár)','Current cost (DKK/yr)'),500):(b.type==='oil'?num('base.oil',L('Verandi oljunýtsla (l/ár)','Current oil (l/yr)'),50):num('base.kwh',L('Verandi elnýtsla (kWh/ár)','Current el (kWh/yr)'),500))}
  ${S.sols.map(ty=>num('eco.scop.'+ty,'SCOP · '+solName(ty),.1)).join('')}${S.sols.filter(ty=>ty!=='gs').map(ty=>num('eco.cov.'+ty,L('Orkudekningur %','Energy coverage %')+' · '+solName(ty),1)).join('')}
  ${num('eco.co2El',L('CO₂-útlát frá el (kg/kWh)','CO₂ electricity (kg/kWh)'),.01)}${b.type==='oil'?num('eco.co2Oil',L('CO₂-útlát frá olju (kg/l)','CO₂ oil (kg/l)'),.05):''}</div>
  <p class="hint">${L('Øll virðini eru fortreytir (ikki CTC). Jarðhiti: Orkudekningurin verður roknaður út frá effektdekninginum (sí jarðhitastigið). Afturhiting við 95 % (CTC Tedap).','All values are assumptions (not CTC). Ground source: energy coverage from power coverage (see ground step). Back-up heat at 95% (CTC Tedap).')}</p></div>`;}
 if(id==='sum'){const c=checks(),bad=c.filter(z=>!z.ok);x+=H(t('h8'))+P(t('p8'))+
  S.sols.map(ty=>{const a=alt(ty),tt=totalWithAdd(ty);return `<div class="pick ${ty===S.choice?'on':''}" style="cursor:default"><img src="${IMG[pkOf(ty).img]}"><div style="flex:1"><div class="n">${pkName(pkOf(ty))}</div><div class="m">${kr(tt.inc)} ${L('við MVG og afturat','incl. VAT and add-ons')} · ${L('sparing','saving')} ${kr(a.save)}/${L('ár','yr')}*</div></div></div>`}).join('')+
  `<p class="hint" style="margin:-2px 0 10px">* ${L('Metingar / Estimates only','Metingar / Estimates only')}</p>`+
  `<div class="card"><h4>${t('checks')} <span>${c.length-bad.length}/${c.length} ✓</span></h4>${c.map(z=>`<div class="chk">${icon(z)}<span>${z.k}</span><span class="v">${z.v}</span></div>`).join('')}</div>`+
  `<div class="card"><h4>${L('Eykaútgerð','Add-ons')} (${addOn().length})</h4>${addOn().map(a=>`<div class="tot"><span>${a.ic} ${FO()?a.fo:a.en}</span><b>${kr(a.pr)}</b></div>`).join('')||`<p class="hint">${L('Einki valt','None selected')}</p>`}</div>`+
  `<button class="btn p big" style="width:100%;margin-bottom:10px" onclick="openSend()">${t('send')}</button><button class="btn s" style="width:100%" onclick="go('offer')">${t('preview')} →</button>`;}
 return x+'</div>';}
function runViz(ty){ty=ty||S.runTab;const r=S.run[ty],Ln=r.len,pen=r.pen,h=r.h,fo=FO();const W=440,x0=70,x1=Math.min(390,150+Ln*(ty==='gs'?4:8));
 const wallX=x0+40,yIn=130,yOut=ty==='gs'?130:130-Math.min(60,h*12);
 const end=ty==='ea'?`<path d="M${x1-14} ${yOut} h28 l-14 -16z" fill="#295135"/><text x="${x1}" y="${yOut-22}" font-size="9" text-anchor="middle" fill="#295135" font-weight="800">${S.outdoor.ex==='roof'?L('TAK','ROOF'):L('ÚTBLÁSTUR','OUTLET')}</text>`:
 ty==='gs'?(S.ground.kind==='bore'?`<rect x="${x1-8}" y="${yIn}" width="16" height="20" fill="#8a7d6a"/><path d="M${x1-3} ${yIn} v55 M${x1+3} ${yIn} v55" stroke="#295135" stroke-width="2.5"/><text x="${x1}" y="${yIn-8}" font-size="9" text-anchor="middle" fill="#295135" font-weight="800">${L('BORIHOL','BOREHOLE')} ${nf(ground().Hoff)} m ↓</text>`:`<path d="M${x1-30} 158 q8 -8 16 0 t16 0 t16 0 t16 0" stroke="#295135" stroke-width="2.5" fill="none"/><text x="${x1}" y="${yIn-8}" font-size="9" text-anchor="middle" fill="#295135" font-weight="800">${L('JARÐSLANGA','GROUND LOOP')} ${nf(ground().Lc)} m</text>`):
 `<g transform="translate(${x1-26},${yOut-50})"><rect width="52" height="46" rx="5" fill="#5d6a61"/><g transform="translate(26,23)"><circle r="16" fill="#3c4840"/><g style="animation:spin 1.6s linear infinite"><path d="M0-14 L3 0 L0 14 L-3 0z M-14 0 L0 -3 L14 0 L0 3z" fill="#a0b9a8"/></g></g></g>`;
 const yp=ty==='gs'?yIn+10:yIn;
 return `<svg viewBox="0 0 ${W} 190"><defs><linearGradient id="pg${ty}" x1="0" x2="1"><stop offset="0" stop-color="#295135"/><stop offset="1" stop-color="#2cbc61"/></linearGradient></defs>
 <rect x="0" y="${ty==='gs'?yIn-6:150}" width="${W}" height="${ty==='gs'?196-yIn:40}" fill="#dfe6dc"/>${ty==='gs'?`<rect x="0" y="176" width="${W}" height="14" fill="#9aa39a"/>`:''}<rect x="${wallX}" y="20" width="12" height="${ty==='gs'?yIn-26:130}" fill="#c8d2c6"/><text x="${wallX-4}" y="16" font-size="9" fill="#5d6a61" font-weight="700">${L('VEGGUR','WALL')}</text>
 ${Array.from({length:pen},(_,i)=>`<circle cx="${wallX+6}" cy="${(ty==='gs'?yIn-14:yIn)-i*16}" r="6" fill="#fff" stroke="#b7791f" stroke-width="2"/>`).join('')}
 <rect x="${x0-52}" y="40" width="40" height="${ty==='gs'?yIn-46:108}" rx="6" fill="#fff" stroke="#295135" stroke-width="1.5"/><text x="${x0-32}" y="80" font-size="9" text-anchor="middle" fill="#295135" font-weight="800">${L('INNI','IN')}</text>
 <path d="M${x0-12} ${ty==='gs'?yIn-14:yIn} L${wallX+18} ${ty==='gs'?yIn-14:yIn} L${wallX+18} ${yp} L${x1} ${yp} L${x1} ${ty==='gs'?yp:yOut}" fill="none" stroke="url(#pg${ty})" stroke-width="8" stroke-linecap="round" opacity=".22"/>
 <path class="flow" d="M${x0-12} ${ty==='gs'?yIn-14:yIn} L${wallX+18} ${ty==='gs'?yIn-14:yIn} L${wallX+18} ${yp} L${x1} ${yp} L${x1} ${ty==='gs'?yp:yOut}" fill="none" stroke="url(#pg${ty})" stroke-width="3" stroke-linecap="round"/>${end}
 <text x="${(x0+x1)/2}" y="${ty==='gs'?yp+16:179}" font-size="12" text-anchor="middle" fill="#152019" font-weight="800">L = ${nf(Ln,1)} m</text>
 ${h>0&&ty!=='gs'?`<text x="${Math.min(x1+30,W-30)}" y="${(yIn+yOut)/2+3}" font-size="10" text-anchor="middle" fill="#5d6a61" font-weight="700">↕ ${nf(h,1)} m</text>`:''}
 <text x="${wallX+18}" y="34" font-size="9.5" fill="#b7791f" font-weight="700">P = ${pen} ${L('gjøgnumbrot','penetration(s)')}</text></svg>`;}
let prevQ={};
function accTable(ty){const all=[...acc(ty),...labour(ty)];const rows=all.map(l=>{const k=ty+l.no;const fl=prevQ[k]!==undefined&&prevQ[k]!==l.q;prevQ[k]=l.q;return `<tr class="${fl?'fl':''}"><td>${l.d}</td><td class="r">${l.rule||''}</td><td class="q">${nf(l.q)} ${t(l.u)}</td></tr>`}).join('');
 const sum=all.reduce((s,l)=>s+l.q*l.pr,0),r=S.run[ty];return `<table class="acc-l">${rows}<tr class="sum"><td colspan="2">${L('Eykaútgerð + arbeiðsløn uttan MVG','Accessories + labour excl. VAT')}</td><td class="q">${kr(sum)}</td></tr></table><p class="hint">L = ${nf(r.len,1)} m · P = ${r.pen} · H = ${nf(r.h,1)} m${ty==='aw'?' · E = '+S.el.cable+' m':''}</p>`;}
function live(){const fo=FO(),c=CUST[S.cust],d=demand();
 document.getElementById('livePanel').innerHTML=S.sols.map(ty=>{const a=alt(ty),tt=totalWithAdd(ty),p=pkOf(ty);return `<div class="bcrow" style="gap:12px;align-items:center"><img src="${IMG[p.img]}" style="width:52px;height:52px;object-fit:contain;background:#fff;border-radius:12px"><div style="flex:1;min-width:0"><b>${solName(ty)}</b><div style="color:var(--mut);font-size:11.5px">${pkName(p)}</div><div style="display:flex;justify-content:space-between;margin-top:4px"><span>${L('Íroknað MVG','Incl. VAT')}</span><b style="color:var(--acc)">${kr(tt.inc)}</b></div><div style="display:flex;justify-content:space-between;font-size:12px"><span>${L('Sparing*','Saving*')}</span><b>${kr(a.save)}/${L('ár','yr')} · ${nf(a.pay,1)} ${t('yrs')}</b></div></div></div>`}).join('')+
 `<div class="bcrow"><span style="flex:1">${L('Núverandi','Current')}: ${baseName()}</span><b>${kr(d.cost)}/${L('ár','yr')}</b></div><div class="bcrow"><span style="flex:1">${L('Eykaútgerð','Add-ons')} (${addOn().length})</span><b>${kr(addonSum())}</b></div>
 <div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap"><span class="demo">${t('demo')}</span><span class="demo">* ${L('Metingar','Estimates')}</span></div>`;
 document.getElementById('bcPanel').innerHTML=`<h3 style="font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--mut);margin-bottom:6px">${t('bcH')} <span class="demo inl">${t('demoS')}</span></h3>
 <div class="bcrow"><span class="tag">GET</span><span>${L('Kontaktpersónur','Contact')} <b>${c.id}</b> · ${c.n}</span></div>
 <div class="bcrow"><span class="tag">GET</span><span>${L('Sølumøguleiki','Opportunity')} <b>${c.opp||'—'}</b></span></div>
 <div class="bcrow"><span class="tag">GET</span><span>${L('Vørulistar','BOMs')} <b>${S.sols.map(ty=>pkOf(ty).bom).join(', ')}</b></span></div>
 <div class="bcrow"><span class="tag">GET</span><span>${L('Vørur og prísir','Items and prices')} · ${S.sols.reduce((s,ty)=>s+price(ty).n,0)+addOn().length} ${t('lpLines')}</span></div>
 <div class="bcrow"><span class="tag w">POST</span><span>${L(`${S.sols.length} sølutilboð (eitt per alternativ) – <b>bert tá ið seljarin váttar</b>`,`${S.sols.length} sales quote(s) (one per alternative) – <b>only when the salesperson confirms</b>`)}</span></div>`;
 const el=id=>document.getElementById(id);
 if(el('runviz'))el('runviz').innerHTML=runViz();
 if(el('accTbl'))el('accTbl').innerHTML=accTable(S.runTab);
 if(el('runWarn'))el('runWarn').innerHTML=S.run[S.runTab].len>(S.runTab==='gs'?40:15)?`<div class="warnbox">${t('maxRun')}</div>`:'';
 if(el('demandBox'))el('demandBox').innerHTML=`<b>${L('Nettohitatørvur (grundaður á nýtslu)','Net heat demand (from consumption)')}:</b> ${nf(d.Q)} kWh/${L('ár','yr')} · P_d ≈ ${nf(d.Pd,1)} kW<br>${L('Til samanberingar: mett út frá m²','For comparison, estimated from m²')}: ${nf(d.est)} kWh/${L('ár','yr')} ${Math.abs(d.est-d.Q)/d.Q>.25?'⚠️':'✓'}<br>${L('Verandi kostnaður','Current cost')}: <b>${kr(d.cost)}/${L('ár','yr')}</b>`;
 if(el('chkIndoor'))el('chkIndoor').innerHTML=`<h4>${t('checks')}</h4>`+checks().slice(0,S.sols.length+1).map(z=>`<div class="chk">${icon(z)}<span>${z.k}</span><span class="v">${z.v}</span></div>`).join('');
 if(el('noiseCard')){const n=noise(),z={ok:n<=35,warn:n<=40};el('noiseCard').innerHTML=`<h4>${t('noiseL')} <span class="demo inl">${t('demoS')}</span></h4><div class="chk">${icon(z)}<span style="font-size:28px;font-weight:800;letter-spacing:-.03em">${n} dB(A)</span><span class="v">${t('noiseLim')}: ≤35</span></div><p class="hint">Lp ≈ Lw ${pkOf('aw').lw} − 20·log(r) − 8${S.outdoor.mount==='wall'?' + 3 ('+L('veggur','wall')+')':''}</p>`;}
 if(el('saveTbl'))el('saveTbl').innerHTML=saveTable();
}
function renderSales(){const c=CUST[S.cust],ST=steps();if(!ST.includes(S.sid))S.sid=ST[Math.min(ST.length-1,3)];const idx=ST.indexOf(S.sid);
 document.getElementById('headAv').textContent=c.ini;document.getElementById('headT').textContent=c.n;document.getElementById('headS').textContent=(c.opp||c.id)+' · '+c.addr;
 document.getElementById('progBar').style.width=((idx+1)/ST.length*100)+'%';
 document.getElementById('dots').innerHTML=ST.map((s,i)=>`<button class="${i===idx?'on':i<idx?'done':''}" onclick="gostep(${i})"><i>${i<idx?'✓':i+1}</i>${stl(s)}</button>`).join('');
 document.getElementById('body').innerHTML=stepHTML();
 const pb=document.getElementById('prevBtn');pb.textContent='← '+t('prev');pb.style.visibility=idx?'visible':'hidden';
 document.getElementById('nextBtn').textContent=idx===ST.length-1?t('preview')+' →':(ST[idx+1]==='sum'?t('toSummary'):t('next'))+' →';
 live();
 const on=document.querySelector('.dots .on'),d=document.getElementById('dots');if(on)d.scrollLeft=on.offsetLeft-d.clientWidth/2+on.clientWidth/2;}
function gostep(i){const ST=steps();S.sid=ST[Math.max(0,Math.min(ST.length-1,i))];history.replaceState(null,'','#sales/'+S.sid);render();document.getElementById('body').scrollTop=0}
document.getElementById('prevBtn').onclick=()=>gostep(steps().indexOf(S.sid)-1);
document.getElementById('nextBtn').onclick=()=>{const ST=steps(),i=ST.indexOf(S.sid);i===ST.length-1?go('offer'):gostep(i+1)};

function chooseAlt(ty){S.choice=ty;const y=window.scrollY;renderOffer();window.scrollTo(0,y)}
function togAddO(id){S.addons[id]=!S.addons[id];const y=window.scrollY;renderOffer();window.scrollTo(0,y)}
function renderOffer(){const c=CUST[S.cust],ty=S.choice,p=pkOf(ty),tt=totalWithAdd(ty),d=demand(),A=alt(ty),ea=ty==='ea',gs=ty==='gs',fo=FO();
 const row=l=>`<tr><td>${l.d}<div class="itm">${l.no}</div></td><td class="n">${nf(l.q)} ${t(l.u)}</td><td class="n">${kr(l.pr)}</td><td class="n">${kr(l.q*l.pr)}</td></tr>`;
 const maker=ty==='ea'?'https://www.qvantum.com/':'https://www.ctc-heating.com/';
 const docs=gs?[{img:IMG.gs,n:pkName(p),sheet:SRC.gsi,man:SRC.gsi,q:'ctc gsi'},{img:IMG.gsRoom,n:L('Jarðhiti – soleiðis fer boringin fram (CTC)','Ground source – how drilling works (CTC)'),sheet:SRC.install,man:SRC.guide,q:'jarðhiti'}]:
  p.lines.slice(0,ea?1:2).map((l,i)=>({img:ea?IMG.qe:(i?IMG.awIn:IMG.aw),n:fo?l[1]:l[2],sheet:maker,man:maker,q:ea?'qvantum':'ctc'}));
 docs.push({img:IMG.icon,ic:1,n:L('Eykaútgerð: rør, kaðalar, slangur o.a. (Dømi)','Accessories: pipes, cable, hoses etc. (example)'),sheet:null,q:gs?'brine':'hitapumpa'});
 const best=S.sols.reduce((m,x)=>alt(x).save>alt(m).save?x:m,S.sols[0]);
 const g=gs?ground():null;
 const faq=gs?[6,3,5,1]:ea?[2,3,5,1]:[1,3,4,5,2];
 document.getElementById('offer').innerHTML=`
 <section class="hero"><div class="bgimg" style="background-image:url(${IMG.hero})"></div><div class="in">
  <div><div class="k">${t('oK')} &nbsp;<span class="demo inl">${t('demo')}</span></div><h1>${t('oHi',{n:c.first})}</h1><div class="addr">${c.n} · ${c.addr}</div>
  <div class="addr" style="margin-top:10px">${S.sols.length>1?L(`Vit hava gjørt ${S.sols.length} alternativ til tykkara hús – samanber og vel tað, ið hóskar best.`,`We have prepared ${S.sols.length} alternatives for your home – compare and pick the one that suits you best.`):''}</div></div>
  <div class="sol"><img src="${IMG[p.img]}" alt=""><div><div style="font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#bfe6cc;font-weight:700">${L('Valt nú','Selected now')} · ${solName(ty)}</div><div class="t">${pkName(p)}</div><div class="p">${fo?SOLS[ty].dfo:SOLS[ty].den}</div><div class="price">${kr(tt.inc)}</div><div class="p">${t('oFrom')} · ${t('oValid')}</div></div></div>
 </div></section>
 <nav class="onav">${[['cmp',L('Møguleikar','Alternatives')],['how',t('nav1')],['tbl',t('nav2')],['add',L('Eykaútgerð','Add-ons')],['calc',t('nav3')],['docs',t('nav4')],['faq',t('nav5')],['next',t('nav6')],['contact',t('nav7')]].map(([id,l])=>`<a href="javascript:void(0)" onclick="document.getElementById('o-${id}').scrollIntoView({behavior:'smooth'})">${l}</a>`).join('')}</nav>
 <section class="sec" id="o-cmp"><span class="kicker rv">${L('Møguleikar','Alternatives')}</span><div class="h2 rv">${S.sols.length>1?L('Tykkara møguleikar, lið um lið','Your options, side by side'):L('Tykkara loysn','Your solution')}</div><div class="estbar rv" style="margin-top:14px">⚠️ ${L('Sparing, afturgjald og CO₂ eru metingar / Estimates only – ikki ein lovan. Samanborið við tykkara núverandi hiting','Saving, payback and CO₂ are Metingar / Estimates only – not a guarantee. Compared with your current heating')}: <b>${baseName()}</b>, ${kr(d.cost)}/${L('ár','yr')}.</div>
  <div class="cmp" style="grid-template-columns:repeat(${S.sols.length+1},1fr)"><div class="cc base rv"><div class="ch">${L('Í dag','Today')}</div><div class="cimg"><span style="font-size:46px">${S.base.type==='oil'?'🛢️':S.base.type==='el'?'🔌':'♨️'}</span></div><b class="cn">${baseName()}</b>
   <div class="cl"><span>${L('Kostnaður/ár','Cost/yr')}</span><b>${kr(d.cost)}</b></div><div class="cl"><span>CO₂/${L('ár','yr')}</span><b>${nf(d.co2/1000,1)} t</b></div><div class="cl"><span>${L('Nýtsla','Use')}</span><b>${nf(d.cons)} ${d.unit}</b></div></div>
  ${S.sols.map(x=>{const a=alt(x),q=pkOf(x),T2=totalWithAdd(x);return `<div class="cc rv ${x===ty?'on':''}">${x===best&&S.sols.length>1?`<span class="ribbon">${L('Størsta sparing*','Biggest saving*')}</span>`:''}<div class="ch">${solName(x)}</div><div class="cimg"><img src="${IMG[q.img]}" alt=""></div><b class="cn">${pkName(q)}</b>
   <div class="cl big"><span>${L('Prísur íroknað MVG','Price incl. VAT')}</span><b>${kr(T2.inc)}</b></div><div class="cl"><span>${L('Kostnaður/ár*','Cost/yr*')}</span><b>${kr(a.cost)}</b></div><div class="cl"><span>${L('Sparing/ár*','Saving/yr*')}</span><b style="color:var(--acc)">${kr(a.save)}</b></div>
   <div class="cl"><span>${L('Afturgjaldstíð*','Payback*')}</span><b>${nf(a.pay,1)} ${t('yrs')}</b></div><div class="cl"><span>CO₂ ${L('spart','saved')}*</span><b>${nf(a.co2save/1000,1)} t/${L('ár','yr')}</b></div>
   <button class="pill ${x===ty?'':'o'}" style="margin-top:12px;width:100%" onclick="chooseAlt('${x}')">${x===ty?'✓ '+L('Valt','Selected'):L('Vel hesa loysn','Choose this')}</button></div>`}).join('')}</div>
  <p class="hint">* ${L('Metingar / Estimates only. Afturgjald roknað á pakkaprís uttan afturat.','Metingar / Estimates only. Payback uses the package price without add-ons.')}</p></section>
 <section class="sec" id="o-how"><span class="kicker rv">${t('howK')} · ${solName(ty)}</span><div class="h2 rv">${gs?L('Hitin kemur úr berginum undir húsum tykkara','The heat comes from the rock beneath your home'):t(ea?'howHea':'howHaw')}</div><p class="lead rv">${gs?L('Ein jarðhitapumpa tekur ímóti sólarorku, sum er goymd í bergi og jørð. Kølivæskan (vatn og frostverja) ferðast í eini slangu í boriholinum og tekur orkuna upp. Hitapumpan hækkar hitastigið og veitir hitan til hitaskipanina og heita vatnið.','A ground source heat pump extracts solar energy stored in rock and soil. Brine (water and antifreeze) circulates in a hose in the borehole and picks up the energy. The heat pump raises the temperature and delivers it to your heating and hot water.'):t(ea?'howPea':'howPaw')}</p>
  <div class="how"><div class="steps3">${gs?[[L('Borihol/jarðslanga','Borehole/ground loop'),g.kind==='bore'?L(`${g.holes} × ${g.per} m borihol í berg.`,`${g.holes} × ${g.per} m borehole in rock.`):L(`${nf(g.Lc)} m slanga í ${nf(g.area)} m² av jørð.`,`${nf(g.Lc)} m hose in ${nf(g.area)} m² of ground.`)],[L('Kølivæskukringrás','Brine circuit'),L(`${nf(g.q,2)} l/s gjøgnum ${nf(S.run.gs.len,1)} m av transportleiðing inn í tøknirúmið.`,`${nf(g.q,2)} l/s through ${nf(S.run.gs.len,1)} m of transport line into the tøknirúm.`)],[L('Hitapumpa','Heat pump'),L('Kompressorurin og hitavekslarin hækka hitastigið og veita hita til radiatorarnar og heita vatnið.','Compressor and hitavekslari (heat exchanger) raise the heat for radiators and hot water.')]].map((s,i)=>`<div class="s3 rv"><div class="n">${i+1}</div><div><b>${s[0]}</b><span>${s[1]}</span></div></div>`).join(''):
   [1,2,3].map(i=>`<div class="s3 rv"><div class="n">${i}</div><div><b>${t('how'+i+(ea?'ea':'aw'))}</b><span>${t('how'+i+(ea?'ead':'awd'),{m:nf(S.run[ty].len,1)})}</span></div></div>`).join('')}</div>
  <div class="howsvg rv">${gs?gsSvg(g):howSvg(ea)}</div></div></section>
 <section class="sec" id="o-tbl"><span class="kicker rv">${t('offK')} · ${solName(ty)}</span><div class="h2 rv">${t('offH')}</div><p class="lead rv">${t('offP')} <span class="demo inl">${t('demo')}</span></p>
  ${S.sols.length>1?`<div class="seg rv" style="display:inline-flex;margin-top:16px">${S.sols.map(x=>`<button class="${x===ty?'on':''}" onclick="chooseAlt('${x}')">${solName(x)}</button>`).join('')}</div>`:''}
  <table class="tbl rv"><thead><tr><th>${t('thItem')}</th><th class="n">${t('thQty')}</th><th class="n">${t('thPrice')}</th><th class="n">${t('thTot')}</th></tr></thead><tbody>
  <tr class="grp"><td colspan="4">${t('gMain')} · BC ${p.bom}</td></tr>${baseLines(ty).map(row).join('')}
  <tr class="grp"><td colspan="4">${t('gAcc')} · L = ${nf(S.run[ty].len,1)} m${gs?(g.kind==='bore'?` · H = ${nf(g.Hoff)} m`:` · ${nf(g.Lc)} m`):''}</td></tr>${acc(ty).map(row).join('')}
  <tr class="grp"><td colspan="4">${t('gLab')}</td></tr>${labour(ty).map(row).join('')}
  ${addOn().length?`<tr class="grp"><td colspan="4">${L('Vald eykaútgerð','Add-ons (selected)')}</td></tr>${addOn().map(a=>`<tr><td>${a.ic} ${fo?a.fo:a.en}<div class="itm">${L('Dømi','Example')}</div></td><td class="n">1</td><td class="n">${kr(a.pr)}</td><td class="n">${kr(a.pr)}</td></tr>`).join('')}`:''}</tbody>
  <tfoot><tr><td colspan="3">${t('exVat')}</td><td class="n">${kr(tt.ex)}</td></tr><tr><td colspan="3">${t('vat')}</td><td class="n">${kr(tt.vat)}</td></tr><tr class="gt"><td colspan="3">${t('incVat')}</td><td class="n">${kr(tt.inc)}</td></tr></tfoot></table></section>
 <section class="sec" id="o-add"><span class="kicker rv">${L('Eykaútgerð','Add-ons')}</span><div class="h2 rv">${L('Ger loysnina enn betri','Make it even better')}</div><p class="lead rv">${L('Vel eykaútgerð – samlaði tilboðs­prísurin verður dagførdur beinanvegin. Sí vørurnar á handil.mp.fo.','Pick add-ons – the offer total updates instantly. See the products on handil.mp.fo.')} <span class="demo inl">${t('demo')}</span></p>
  <div class="adds">${ADD.filter(a=>a.for.includes(ty)).map(a=>`<div class="addc rv ${S.addons[a.id]?'on':''}"><div class="aic">${a.ic}</div><b>${fo?a.fo:a.en}</b><div class="am">${kr(a.pr*1.25)} ${L('við MVG','incl. VAT')}</div><div style="display:flex;gap:8px;align-items:center;margin-top:auto;padding-top:10px"><button class="pill ${S.addons[a.id]?'':'o'}" onclick="togAddO('${a.id}')">${S.addons[a.id]?'✓ '+L('Við í tilboðnum','In the offer'):'+ '+L('Legg afturat tilboðnum','Add to offer')}</button><a class="lnk" href="${MOCK.handil.searchUrl}${encodeURIComponent(a.q)}" target="_blank" rel="noopener">${L('Sí í handlinum','See in the shop')} ↗</a></div></div>`).join('')}</div>
  <div class="tot g rv" style="max-width:520px;margin-top:20px"><span>${L('Nýggjur samlaður prísur íroknað MVG','New total incl. VAT')}</span><b>${kr(tt.inc)}</b></div></section>
 <section class="sec" id="o-calc"><span class="kicker rv">${t('calcK')}</span><div class="h2 rv">${t('calcH')}</div><div class="estbar rv" style="margin-top:14px">⚠️ ${L('Metingar / Estimates only','Metingar / Estimates only')} – ${t('calcP')}</div>
  <div class="calc"><div class="kpi rv"><div class="l">${gs?L('Máld flutningsleið','Measured transport line'):t(ea?'kRunE':'kRun')}</div><div class="v"><span data-count="${S.run[ty].len}" data-dec="1">0</span><small> m</small></div><div class="d">${t('kRunD',{p:S.run[ty].pen,h:nf(S.run[ty].h,1)})}</div><div style="margin-top:10px;border-radius:12px;overflow:hidden;border:1px solid var(--line);background:#f3f7f1">${runViz(ty)}</div></div>
  <div class="kpi rv"><div class="l">${t('kSave')}*</div><div class="v"><span data-count="${Math.round(A.save)}">0</span><small> ${t('perYr')}</small></div><div class="d">${L('samanborið við','compared with')} ${baseName().toLowerCase()}</div>
   <div class="bars">${(()=>{const mx=Math.max(d.cost,...S.sols.map(x=>alt(x).cost),1);return `<div class="bar"><span>${t('costNow')}</span><div class="tr"><i style="width:${d.cost/mx*100}%;background:#b9a27a"></i></div><b>${kr(d.cost)}</b></div>`+S.sols.map(x=>`<div class="bar"><span>${solName(x).split(' ')[0]}</span><div class="tr"><i style="width:${alt(x).cost/mx*100}%;background:linear-gradient(90deg,var(--acc),var(--acc2))"></i></div><b>${kr(alt(x).cost)}</b></div>`).join('')})()}</div></div>
  <div class="kpi rv"><div class="l">${t('kPay')}*</div><div class="v"><span data-count="${A.pay.toFixed(1)}" data-dec="1">0</span><small> ${t('yrs')}</small></div><div class="d">${t('kPayD')}</div><div class="d" style="margin-top:12px;font-weight:700">${kr(A.pr.inc)} ÷ ${kr(A.save)}</div><div class="d" style="margin-top:12px">CO₂: −${nf(A.co2save/1000,1)} t/${L('ár','yr')}*</div></div></div>
  ${gs?`<details class="gdet rv" open><summary>${L('Jarðhitaútrokning eftir CTC-háttinum','Ground source calculation in line with the CTC method')} – ${g.kind==='bore'?`${g.holes} × ${g.per} m`:`${nf(g.Lc)} m`}</summary>${gTable()}</details>`:''}
  <div class="assum rv"><h4>${t('assH')} · <span class="demo inl">${t('demo')}</span></h4><ul>
   <li>${L('Núverandi','Current')}: ${baseName()}, ${nf(d.cons)} ${d.unit}/${L('ár','yr')}, ${S.base.type==='hp'?'SCOP '+nf(S.base.scopOld,1):L('virkisføri ','efficiency ')+S.base.eff+' %'} → Q = ${nf(d.Q)} kWh/${L('ár','yr')} (${L('CTC-hátturin','CTC method')})</li>
   ${S.base.type==='oil'?`<li>${t('a2',{op:nf(S.eco.oilP,2)})}</li>`:''}<li>${t('a3',{ep:nf(S.eco.elP,2)})}</li><li>SCOP: ${S.sols.map(x=>solName(x).split(' ')[0]+' '+nf(S.eco.scop[x],1)).join(' · ')} (${L('fortreyt','assumption')})</li>
   <li>CO₂: el ${nf(S.eco.co2El,2)} kg/kWh${S.base.type==='oil'?`, ${L('olja','oil')} ${nf(S.eco.co2Oil,2)} kg/l`:''} (${L('fortreyt','assumption')})</li><li>${t('a5')}</li><li>${t('a6')}</li></ul></div></section>
 <section class="sec" id="o-docs"><span class="kicker rv">${t('docK')}</span><div class="h2 rv">${t('docH')}</div>
  <div class="docs">${docs.map(x=>`<div class="doc rv"><div class="im ${x.ic?'ic':''}"><img src="${x.img}" alt=""></div><div class="b"><b>${x.n}</b><span class="demo inl" style="align-self:flex-start">${t('demo')}</span><div class="lk">
   ${x.sheet?`<a href="${x.sheet}" target="_blank" rel="noopener">📄 ${t('dSheet')} ↗</a><a href="${x.man}" target="_blank" rel="noopener">📘 ${t('dMan')} ↗</a>`:''}<a href="${MOCK.handil.searchUrl}${encodeURIComponent(x.q)}" target="_blank" rel="noopener">🛒 ${t('dShop')} ↗</a></div></div></div>`).join('')}
   <div class="doc ar rv"><div class="im ic" style="position:relative"><div class="arph"><span>📱</span><i></i></div><span class="soon">${L('Verður tøkt seinni','Coming later')}</span></div><div class="b"><b>${L('Síggj, hvussu tað sær út heima hjá tær','See it in your home')} / See it in AR (later)</b><span style="font-size:13px;color:var(--mut)">${L('Set hitapumpuna í tøknirúmið ella uttanfyri húsið við telefonini, áðrenn tú tekur avgerð.','Place the heat pump in your utility room or outside your house with your phone before you decide.')}</span><div class="lk"><a aria-disabled="true" style="opacity:.45;pointer-events:none">🔒 ${L('Ikki tøkt enn','Not available yet')}</a></div></div></div></div></section>
 <section class="sec" id="o-faq"><span class="kicker rv">${t('gK')}</span><div class="h2 rv">${t('gH')}</div><div class="acc">
  ${faq.map((i,j)=>`<details class="rv" ${j<2?'open':''}><summary>${i===6?L('Hvat er jarðhiti, og hví skal borast so djúpt?','What is ground source heating, and why drill so deep?'):t('q'+i)}</summary><p>${i===6?L('Orkan í berginum er nærum tann sama alt árið. CTC upplýsir, at virkaða boridýpdin vanliga er 100–200 m. Í Føroyum er bergið fyri tað mesta basalt, sum leiðir hita verri enn granitt. Tí verður boriholið helst djúpari – hetta verður kannað saman við boraranum.','The energy in the rock is almost constant all year. CTC says the active drilling depth is usually 100–200 m. In the Faroes the bedrock is mostly basalt, which conducts heat less well than granite, so the hole is likely deeper – this will be checked with the driller.'):t('q'+i+'a',{db:has('aw')?noise():0})}</p></details>`).join('')}</div></section>
 <section class="sec" id="o-next"><span class="kicker rv">${t('tlK')}</span><div class="h2 rv">${t('tlH')}</div><div class="tl">
  ${[1,2,3,4,5].map(i=>`<div class="e rv ${i<=2?'dn':i===3?'nx':''}"><div class="o">${i<=2?'✓':i}</div><b>${i===4&&gs?L('Boring og innlegging','Drilling + installation'):t('t'+i)}</b><span>${t('t'+i+'d',{d:new Date(S.date).toLocaleDateString(fo?'da-DK':'en-GB',{day:'numeric',month:'short'})})}</span></div>`).join('')}</div></section>
 <section class="sec" id="o-contact"><span class="kicker rv">${t('cK')}</span><div class="h2 rv">${t('cH')}</div><div class="contact">
  <div class="pcard rv"><div class="photo">${t('photoPh')}</div><div><div class="nm">${SELLER.n} <span class="demo inl">${t('demoS')}</span></div><div class="rl">${t('cRole')} · Maria Poulsen</div><div class="ln">📞 ${SELLER.ph}<br>✉️ ${SELLER.mail}</div>
   <div class="btns"><a class="pill" href="javascript:void(0)" onclick="openChat()">💬 ${t('chat')}</a><a class="pill o" href="javascript:void(0)" onclick="openChat()">📞 ${t('call')}</a><a class="pill o" href="javascript:void(0)" onclick="openChat()">✉️ ${t('mail')}</a></div></div></div>
  <div class="accept rv"><b>${t('accB')}</b><p>${L('Tú hevur valt','You have chosen')}: <b style="font-size:inherit">${pkName(p)}</b> · ${kr(tt.inc)}. ${t('accP')}</p><button onclick="openAccept()">✍️ ${t('accBtn')}</button></div></div></section>
 <footer class="ofoot"><div class="brand">${document.querySelector('.hud .brand').innerHTML}</div><div>${t('footN')}</div><span class="demo">${t('demo')}</span></footer>`;
 observe();}
function gsSvg(g){const fo=FO(),bore=g.kind==='bore';return `<svg viewBox="0 0 520 300"><rect x="0" y="150" width="520" height="150" fill="#dfe6dc"/><rect x="0" y="185" width="520" height="115" fill="#a9b0a6"/><text x="500" y="200" font-size="10" text-anchor="end" fill="#3c4840" font-weight="700">${bore?L('BASALT (fortreyt)','BASALT (assumption)'):L('JØRÐ','SOIL')}</text>
 <rect x="240" y="50" width="240" height="100" fill="#fefff4" stroke="#295135" stroke-width="2"/><path d="M225 58 L360 10 L495 58" fill="none" stroke="#295135" stroke-width="2"/>
 <rect x="270" y="72" width="44" height="74" rx="5" fill="#fff" stroke="#295135" stroke-width="1.5"/><text x="292" y="114" font-size="9" text-anchor="middle" font-weight="800" fill="#295135">GSi</text>
 <path class="flow" d="M314 100 H370 V80 H420" stroke="#d68a3a" stroke-width="3" fill="none"/><rect x="420" y="66" width="34" height="34" rx="4" fill="none" stroke="#d68a3a" stroke-width="2"/>
 ${bore?`<path class="flow" d="M270 135 H110 V292" stroke="#2cbc61" stroke-width="3" fill="none"/><path class="flow" d="M118 292 V143 H270" stroke="#295135" stroke-width="3" fill="none" opacity=".7"/><rect x="104" y="150" width="20" height="35" fill="#8a7d6a" opacity=".7"/>
 <text x="134" y="250" font-size="12" fill="#152019" font-weight="800">${g.holes} × ${g.per} m</text><text x="134" y="168" font-size="10" fill="#3c4840" font-weight="700">${L('fóðurrør','casing')} ${S.ground.soilD} m</text>`:
 `<path class="flow" d="M270 135 H200 V168" stroke="#2cbc61" stroke-width="3" fill="none"/><path class="flow" d="M200 168 ${Array.from({length:7},(_,i)=>`h-20 v${i%2?-12:12}`).join(' ')}" stroke="#295135" stroke-width="3" fill="none"/><text x="30" y="205" font-size="12" fill="#152019" font-weight="800">${nf(g.Lc)} m · ${nf(g.area)} m²</text>`}
 <text x="140" y="128" font-size="11" fill="#1d7a43" font-weight="700">brine ${nf(g.q,2)} l/s</text></svg>`}
function howSvg(ea){const fo=FO();if(ea)return `<svg viewBox="0 0 520 300"><rect x="60" y="70" width="400" height="200" fill="#fefff4" stroke="#295135" stroke-width="2"/><path d="M40 80 L260 10 L480 80" fill="none" stroke="#295135" stroke-width="2"/>
 <rect x="230" y="150" width="56" height="116" rx="6" fill="#fff" stroke="#295135" stroke-width="1.5"/><text x="258" y="215" font-size="11" text-anchor="middle" font-weight="800" fill="#295135">QE</text>
 <path class="flow" d="M110 120 H200 V170 H230" stroke="#c98a2e" stroke-width="3" fill="none"/><path class="flow" d="M410 120 H320 V170 H286" stroke="#c98a2e" stroke-width="3" fill="none"/>
 <path class="flow" d="M258 150 V40" stroke="#5d6a61" stroke-width="3" fill="none"/><path class="flow" d="M286 240 H420" stroke="#2cbc61" stroke-width="4" fill="none"/>
 <text x="90" y="108" font-size="12" fill="#7a4f0e" font-weight="700">${fo?'Køkur':'Kitchen'}</text><text x="370" y="108" font-size="12" fill="#7a4f0e" font-weight="700">${fo?'Baðirúm':'Bathroom'}</text>
 <text x="268" y="44" font-size="12" fill="#5d6a61" font-weight="700">${fo?'Køld luft út':'Cooled air out'} · ${nf(S.run[ea?'ea':'aw'].len,1)} m</text><text x="300" y="232" font-size="12" fill="#1d7a43" font-weight="700">${fo?'Hiti og heitt vatn':'Heat + hot water'}</text></svg>`;
 return `<svg viewBox="0 0 520 300"><rect x="180" y="70" width="300" height="200" fill="#fefff4" stroke="#295135" stroke-width="2"/><path d="M160 80 L330 15 L500 80" fill="none" stroke="#295135" stroke-width="2"/>
 <g transform="translate(30,190)"><rect width="100" height="76" rx="8" fill="#5d6a61"/><g transform="translate(50,38)"><circle r="27" fill="#3c4840"/><g style="animation:spin 1.6s linear infinite"><path d="M0-24 L5 0 L0 24 L-5 0z M-24 0 L0 -5 L24 0 L0 5z" fill="#a0b9a8"/></g></g></g>
 <path class="flow" d="M10 150 Q40 160 60 185" stroke="#a0b9a8" stroke-width="2.5" fill="none"/><text x="6" y="140" font-size="12" fill="#5d6a61" font-weight="700">${fo?'Útiluft':'Outdoor air'}</text>
 <path class="flow" d="M130 215 H250" stroke="#2cbc61" stroke-width="4" fill="none"/><path class="flow" d="M250 240 H130" stroke="#295135" stroke-width="3" fill="none" opacity=".6"/>
 <text x="140" y="205" font-size="12" fill="#1d7a43" font-weight="800">${nf(S.run[ea?'ea':'aw'].len,1)} m</text>
 <rect x="250" y="150" width="58" height="116" rx="6" fill="#fff" stroke="#295135" stroke-width="1.5"/><text x="279" y="212" font-size="9" text-anchor="middle" font-weight="800" fill="#295135">${fo?'INNI':'INDOOR'}</text>
 <path class="flow" d="M308 170 H360 V122 H420" stroke="#d68a3a" stroke-width="3" fill="none"/><rect x="420" y="100" width="40" height="44" rx="4" fill="none" stroke="#d68a3a" stroke-width="2"/>
 <path d="M426 108 v28 M434 108 v28 M442 108 v28 M450 108 v28" stroke="#d68a3a" stroke-width="2"/><text x="398" y="164" font-size="12" fill="#9a5a1e" font-weight="700">${fo?'Radiatorar':'Radiators'}</text>
 <text x="318" y="252" font-size="12" fill="#295135" font-weight="700">${fo?'Heitt vatn':'Hot water'}</text></svg>`;}
function observe(){const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');en.target.querySelectorAll('[data-count]').forEach(countUp);io.unobserve(en.target)}}),{threshold:.1});
 document.querySelectorAll('#offer .rv').forEach(el=>io.observe(el));}
function countUp(el){const to=+el.dataset.count,dec=+(el.dataset.dec||0),t0=performance.now(),D=1400;(function f(n){const k=Math.min(1,Math.max(0,(n-t0)/D)),e=1-Math.pow(1-k,4);el.textContent=nf(to*e,dec);if(k<1)requestAnimationFrame(f)})(t0)}
function modal(h){document.getElementById('mbox').innerHTML=h;document.getElementById('modal').classList.add('on')}
function closeM(){document.getElementById('modal').classList.remove('on')}
document.getElementById('modal').onclick=e=>{if(e.target.id==='modal')closeM()};
function openSend(){modal(`<h3>${t('mH')}</h3><span class="demo">${t('demo')}</span><p style="margin-top:12px;font-size:14px;color:var(--ink2)">${t('mP')}</p><ol><li>${t('m1')}</li><li>${t('m2')}</li><li>${t('m3')}</li><li>${t('m4')}</li></ol>
 <label style="display:flex;gap:8px;font-size:13.5px;font-weight:600;align-items:center;margin-bottom:16px"><input type="checkbox" onchange="const b=document.getElementById('goB');b.disabled=!this.checked;b.style.opacity=this.checked?1:.45"> ${t('mConf')}</label>
 <div style="display:flex;gap:10px"><button class="btn s" onclick="closeM()">${t('mCancel')}</button><button class="btn p" id="goB" disabled style="opacity:.45" onclick="sent()">${t('mGo')}</button></div>`)}
function sent(){modal(`<h3>✓ ${t('mH')}</h3><div class="okbox" style="margin-top:12px">${t('mDone')}</div><div style="display:flex;gap:10px"><button class="btn s" onclick="closeM()">${t('mClose')}</button><button class="btn p" onclick="closeM();go('offer')">${t('preview')} →</button></div>`)}
function openAccept(){modal(`<h3>${t('accMH')}</h3><span class="demo">${t('demo')}</span><p style="margin:12px 0 18px;font-size:14px;color:var(--ink2)">${t('accMP')}</p><button class="btn p" style="width:100%" onclick="closeM()">${t('mClose')}</button>`)}
function openChat(){modal(`<h3>${t('chatMH')}</h3><span class="demo">${t('demo')}</span><p style="margin:12px 0;font-size:14px;color:var(--ink2)">${t('chatMP')}</p><div class="fld"><textarea rows="3" placeholder="${FO()?'Skriva spurningin hjá tær…':'Type your question…'}"></textarea></div><div style="display:flex;gap:10px;margin-top:12px"><button class="btn s" onclick="closeM()">${t('mCancel')}</button><button class="btn p" onclick="closeM()">${FO()?'Send (mock)':'Send (mock)'}</button></div>`)}
document.getElementById('chatFab').onclick=openChat;
function go(v){S.view=v;history.replaceState(null,'',v==='offer'?'#offer':'#sales/'+S.sid);render();window.scrollTo(0,0)}
function render(){document.documentElement.lang=S.lang;
 document.querySelectorAll('[data-t]').forEach(el=>el.textContent=t(el.dataset.t));
 document.querySelectorAll('#viewSeg button').forEach(b=>b.classList.toggle('on',b.dataset.v===S.view));
 document.querySelectorAll('#langSeg button').forEach(b=>b.classList.toggle('on',b.dataset.l===S.lang));
 document.getElementById('sales').style.display=S.view==='sales'?'':'none';document.getElementById('offer').style.display=S.view==='offer'?'block':'none';
 document.body.classList.toggle('offer',S.view==='offer');
 if(S.view==='sales')renderSales();else renderOffer();}
document.querySelectorAll('#viewSeg button').forEach(b=>b.onclick=()=>go(b.dataset.v));
document.querySelectorAll('#langSeg button').forEach(b=>b.onclick=()=>{S.lang=b.dataset.l;render()});

/* ===== v3: offline queue, capture & annotation, noise check, service tiers, follow-up, public approval ===== */
document.head.insertAdjacentHTML('beforeend',`<style>
.v3b{font-size:10px;font-weight:800;background:var(--acc);color:#fff;border-radius:99px;padding:3px 8px;letter-spacing:.08em}
.net{font:inherit;font-size:11px;font-weight:800;border:0;border-radius:99px;padding:3px 9px;cursor:pointer;background:#e3f6e9;color:#1d7a43}
.net.off{background:#fdeacc;color:#8a5a00}.net.sync{background:#e2ecf8;color:#24507f}
#qbar .q{margin-top:8px;display:flex;gap:8px;align-items:center;font-size:11.5px;font-weight:600;background:#fff7e8;border:1px solid #f1d6a4;color:#6d4a07;border-radius:12px;padding:7px 10px}
#qbar .q.s{background:#eaf2fb;border-color:#bfd3ea;color:#24507f}#qbar .q.ok{background:#e9f7ee;border-color:#b9e3c7;color:#1d6b3b}
#qbar .q b{font-weight:800}#qbar .q button{margin-left:auto;font:inherit;font-size:11px;font-weight:700;border:1px solid currentColor;background:none;color:inherit;border-radius:99px;padding:2px 8px;cursor:pointer}
.cap{border:1.5px dashed #c9d2c6;background:#fbfcf7}.cap h4{display:flex;justify-content:space-between;align-items:center}
.thumbs{display:flex;gap:8px;flex-wrap:wrap;margin:8px 0}.thumbs figure{margin:0;width:86px}.thumbs img{width:86px;height:64px;object-fit:cover;border-radius:10px;border:1px solid var(--line);display:block;cursor:pointer}
.thumbs figcaption{font-size:9.5px;color:var(--mut);line-height:1.25;margin-top:3px}
.capb{display:flex;gap:6px;flex-wrap:wrap}.capb label,.capb button{font:inherit;font-size:11.5px;font-weight:700;border:1px solid var(--line);background:#fff;border-radius:99px;padding:6px 10px;cursor:pointer;color:var(--ink)}
.capb .hi{background:var(--acc);color:#fff;border-color:var(--acc)}
.annw{position:relative;border-radius:14px;overflow:hidden;border:1px solid var(--line);touch-action:none}.annw canvas{display:block;width:100%;cursor:crosshair}
.anntb{display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin:10px 0}.anntb button{font:inherit;font-size:12px;font-weight:700;border:1px solid var(--line);background:#fff;border-radius:99px;padding:6px 12px;cursor:pointer}.anntb button.on{background:var(--acc);color:#fff;border-color:var(--acc)}
.anntb input{width:80px;font:inherit;font-weight:700;padding:6px 8px;border:1px solid var(--line);border-radius:10px}
.mbox.wide{max-width:760px;width:94vw}
.nz{display:grid;grid-template-columns:1fr auto;gap:4px 12px;font-size:12px;margin-top:8px}.nz span{color:var(--mut)}.nz b{text-align:right}
.tiers{display:grid;gap:10px}.tier{position:relative;display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;border:1.5px solid var(--line);border-radius:16px;padding:12px 14px;background:#fff;cursor:pointer;text-align:left;font:inherit;color:var(--ink)}
.tier.on{border-color:var(--acc);box-shadow:0 0 0 3px rgba(41,81,53,.12);background:#f3f8f1}.tier .tn{font-weight:800;font-size:14px;display:flex;justify-content:space-between;gap:8px}.tier .tp{color:var(--acc);font-weight:800}
.tier ul{margin:6px 0 0 16px;padding:0;font-size:11.5px;color:var(--ink2);line-height:1.45}.tier .tbd{display:inline-block;font-size:10px;font-weight:800;background:#fdeacc;color:#8a5a00;border-radius:99px;padding:1px 7px;margin-left:4px}
.tier .rb{position:absolute;top:12px;right:12px;width:18px;height:18px;border-radius:50%;border:2px solid #b8c2b5}.tier.on .rb{border:6px solid var(--acc)}
.tier .tn{padding-right:26px}
.otiers{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}.otiers .tier{padding:20px;border-radius:22px}.otiers .tier .tn{font-size:17px}.otiers .tier ul{font-size:13px}
.otiers .tier.vip{background:linear-gradient(160deg,#fff,#f4f7ea)}.otiers .tier.vip.on{background:linear-gradient(160deg,#f3f8f1,#e6f1df)}
.tlx{position:relative;margin:6px 0 4px}.tlx .e{display:flex;gap:10px;align-items:flex-start;padding:7px 0;font-size:12.5px}.tlx .o{flex:none;width:22px;height:22px;border-radius:50%;display:grid;place-items:center;font-size:11px;font-weight:800;background:#e7ebe3;color:var(--mut)}
.tlx .e.dn .o{background:var(--acc);color:#fff}.tlx .e.nx .o{background:#fdeacc;color:#8a5a00}.tlx .e b{display:block}.tlx .e span{color:var(--mut);font-size:11.5px}
.nudge{background:#fff4e0;border:1px solid #f0cf94;border-radius:16px;padding:12px 14px;margin-bottom:12px}.nudge b{display:block;font-size:13.5px;margin-bottom:4px}.nudge p{font-size:12px;margin:0 0 8px;color:#5b4310}
.lockc{position:relative;border:1.5px dashed #c3cbbf;background:repeating-linear-gradient(135deg,#f7f8f3 0 10px,#f1f3ec 10px 20px)}.lockc .lk{display:flex;align-items:center;gap:8px;font-weight:800;font-size:13px;color:#4d5a50;margin-bottom:6px}
.lockc li{opacity:.6}
.appr{border:1px solid var(--line);border-radius:14px;padding:10px 12px;margin-top:8px;background:#fff}.appr .an{font-weight:800;font-size:12.5px}.appr .aa{font-size:11px;color:var(--mut);margin:2px 0 8px}
.pipe{display:flex;gap:3px;margin-bottom:8px}.pipe i{flex:1;height:6px;border-radius:3px;background:#e4e8e0}.pipe i.on{background:linear-gradient(90deg,var(--acc),var(--acc2))}
.pipel{display:flex;justify-content:space-between;font-size:9.5px;color:var(--mut);margin:-4px 0 8px}
.tbc{display:inline-block;font-size:9.5px;font-weight:800;background:#fdeacc;color:#8a5a00;border-radius:99px;padding:1px 7px;vertical-align:middle}
.formv{display:grid;grid-template-columns:auto 1fr;gap:6px 14px;font-size:13px;margin:12px 0}.formv span{color:var(--mut)}
.toast{position:fixed;left:50%;bottom:26px;transform:translateX(-50%) translateY(30px);opacity:0;background:var(--acc);color:#fff;font-weight:700;font-size:13px;border-radius:99px;padding:10px 18px;z-index:200;transition:.5s var(--ease,cubic-bezier(.16,1,.3,1));pointer-events:none}
.toast.on{opacity:1;transform:translateX(-50%) translateY(0)}
.sigpad{border:1.5px solid var(--line);border-radius:14px;background:#fff;touch-action:none;display:block;width:100%;height:150px;cursor:crosshair}
.signed{display:flex;gap:16px;align-items:center;background:#eaf6ee;border:1px solid #b8e0c5;border-radius:18px;padding:16px 18px}.signed img{height:64px;background:#fff;border-radius:10px;border:1px solid var(--line)}
.bcok{font-family:ui-monospace,Menlo,monospace;font-size:12px;background:#0f1e14;color:#bfe8cb;border-radius:12px;padding:12px 14px;margin:12px 0;line-height:1.6}
@media (max-width:1100px){.otiers{grid-template-columns:1fr 1fr}}@media (max-width:640px){.otiers{grid-template-columns:1fr}}
</style>`);
S.noiseOn=false;S.v3={method:null,online:true,queue:[],syncing:false,lim:35,days:3,opened:true,signed:false,signer:'',sig:null,signedAt:null,
 appr:{},att:{},snooze:false,nudged:false,period:'m'};
const v3c=()=>S.v3;
function toast(m){let e=document.getElementById('toast');if(!e){e=document.createElement('div');e.id='toast';e.className='toast';document.body.appendChild(e)}e.textContent=m;e.classList.add('on');clearTimeout(e._t);e._t=setTimeout(()=>e.classList.remove('on'),2600)}
/* ---------- 1. offline mode & sync queue ---------- */
function qPush(what){const v=v3c();if(v.online)return;const tm=new Date();v.queue.push({at:String(tm.getHours()).padStart(2,'0')+':'+String(tm.getMinutes()).padStart(2,'0'),step:S.sid,what});}
function toggleNet(){const v=v3c();if(v.online){v.online=false;render();toast(L('Ónettøkt – alt verður goymt á telefonini','Offline – everything is saved on the phone'));return}
 v.online=true;if(!v.queue.length){render();return}v.syncing=true;render();setTimeout(()=>{const n=v.queue.length;v.queue=[];v.syncing=false;v.lastSync=n;render();toast(L(`✓ ${n} broytingar synkroniseraðar til BC (simulerað)`,`✓ ${n} changes synced to BC (simulated)`))},1600)}
const _setv=setv;setv=function(p,val,re){qPush(p+' = '+val);_setv(p,val,re)};
const _togAdd=togAdd;togAdd=function(id){qPush('addon '+id);_togAdd(id)};
const _toggleSol=toggleSol;toggleSol=function(ty){qPush('sol '+ty);_toggleSol(ty)};
const _bump=bump;bump=function(p,d,mi,ma){_bump(p,d,mi,ma)};
function netUI(){const v=v3c(),b=document.getElementById('netBtn');if(b){b.className='net '+(v.syncing?'sync':v.online?'':'off');b.textContent=v.syncing?L('⟳ Synkroniserar…','⟳ Syncing…'):v.online?'● Online':'⚠ Offline'}
 const q=document.getElementById('qbar');if(!q)return;const n=v.queue.length;
 q.innerHTML=v.syncing?`<div class="q s">⟳ ${L(`Sendi ${n} broytingar til BC…`,`Sending ${n} changes to BC…`)} <span class="demo inl">${t('demoS')}</span></div>`:
  !v.online?`<div class="q">💾 <span><b>${n}</b> ${L('broytingar goymdar á telefonini · verða synkroniseraðar við BC, tá ið sambandið er aftur','changes saved on phone · syncs to BC when online')}</span><button onclick="showQueue()">${L('Bíðirøð','Queue')}</button></div>`:
  v.lastSync?`<div class="q ok">✓ ${L(`${v.lastSync} broytingar synkroniseraðar til BC`,`${v.lastSync} changes synced to BC`)} <span class="demo inl">${t('demoS')}</span><button onclick="S.v3.lastSync=0;render()">OK</button></div>`:'';}
function showQueue(){const v=v3c();modal(`<h3>💾 ${L('Goymt á telefonini','Saved on the phone')}</h3><span class="demo">${t('demo')}</span><p style="font-size:13.5px;color:var(--ink2);margin:10px 0">${L('Í kjallarum og úti á bygd er ofta einki samband. Appin goymir allar mátingar, myndir og broytingar á eindini (IndexedDB) og sendir tær til BC í røð, tá ið sambandið er aftur. Ongar dátur fara fyri skeyti.<br><small>Prototypa: ein veruligur service worker ger, at appin virkar uttan net, eftir at hon er opnað eina ferð. Synkroniseringin við BC er simulerað – einki verður sent til nakra veruliga skipan.</small>','In basements and out in the villages there is often no signal. The app stores every measurement, photo and change on the device (IndexedDB) and sends them to BC in order when the connection is back. No data is lost.<br><small>Prototype: a real service worker makes the app work offline after the first load. The BC sync is simulated – nothing is sent to a real system.</small>')}</p>
 <table class="stbl" style="width:100%;font-size:12px"><thead><tr><th>${L('Tíð','Time')}</th><th>${L('Stig','Step')}</th><th>${L('Broyting','Change')}</th></tr></thead><tbody>${v.queue.slice(-12).map(q=>`<tr><td>${q.at}</td><td>${STL[q.step]?stl(q.step):q.step}</td><td><code>${q.what}</code></td></tr>`).join('')||`<tr><td colspan="3">${L('Enn ongar broytingar – broyt eitt virði','No changes yet – edit a value')}</td></tr>`}</tbody></table>
 <div style="display:flex;gap:10px;margin-top:14px"><button class="btn s" onclick="closeM()">${t('mClose')}</button><button class="btn p" onclick="closeM();toggleNet()">${L('Fá samband og synkronisera','Go online and sync')}</button></div>`)}
/* ---------- 2. photo & measurement capture per step ---------- */
function drawScene(ctx,W,H,kind){ctx.save();const g=ctx.createLinearGradient(0,0,0,H*.62);g.addColorStop(0,'#b9c7cf');g.addColorStop(1,'#dfe5e3');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
 ctx.fillStyle='#7d8f75';ctx.beginPath();ctx.moveTo(0,H*.42);ctx.bezierCurveTo(W*.3,H*.3,W*.6,H*.46,W,H*.34);ctx.lineTo(W,H*.62);ctx.lineTo(0,H*.62);ctx.fill();
 ctx.fillStyle='#8c9a84';ctx.fillRect(0,H*.78,W,H*.22);ctx.fillStyle='#a3a79c';ctx.fillRect(0,H*.74,W,H*.05);
 // house wall (cladding)
 const x0=W*.08,x1=W*.7,y0=H*.12,y1=H*.76;ctx.fillStyle='#e9e1cf';ctx.fillRect(x0,y0,x1-x0,y1-y0);ctx.strokeStyle='rgba(0,0,0,.08)';for(let y=y0;y<y1;y+=11){ctx.beginPath();ctx.moveTo(x0,y);ctx.lineTo(x1,y);ctx.stroke()}
 ctx.fillStyle='#7a2f25';ctx.beginPath();ctx.moveTo(x0-18,y0+6);ctx.lineTo((x0+x1)/2,y0-H*.1);ctx.lineTo(x1+18,y0+6);ctx.fill();
 ctx.fillStyle='#5c6b63';ctx.fillRect(x0,y1-H*.06,x1-x0,H*.06);
 // windows
 ctx.fillStyle='#fff';[[.16,.28],[.42,.28]].forEach(([a,b])=>{ctx.fillRect(W*a,H*b,W*.12,H*.17);ctx.fillStyle='#8fa6b1';ctx.fillRect(W*a+5,H*b+5,W*.12-10,H*.17-10);ctx.fillStyle='#fff'});
 // utility room basement window + door
 ctx.fillStyle='#3d4a43';ctx.fillRect(W*.2,H*.6,W*.08,H*.08);ctx.fillStyle='#8fa6b1';ctx.fillRect(W*.2+4,H*.6+4,W*.08-8,H*.08-8);
 ctx.fillStyle='#2f5340';ctx.fillRect(W*.52,H*.47,W*.09,H*.29);ctx.fillStyle='#c9b779';ctx.fillRect(W*.59,H*.61,6,6);
 // drain pipe
 ctx.fillStyle='#6b6f6c';ctx.fillRect(x1-14,y0,8,y1-y0);
 if(kind!=='room'){ // outdoor unit placeholder spot
  ctx.fillStyle='rgba(255,255,255,.9)';ctx.strokeStyle='#2c3a32';ctx.lineWidth=2;ctx.fillRect(W*.76,H*.6,W*.16,H*.17);ctx.strokeRect(W*.76,H*.6,W*.16,H*.17);
  ctx.beginPath();ctx.arc(W*.84,H*.685,H*.06,0,7);ctx.stroke();ctx.fillStyle='#2c3a32';ctx.font=`700 ${Math.round(W/60)}px Montserrat,sans-serif`;ctx.fillText(L('ÚTIEIND?','OUTDOOR UNIT?'),W*.765,H*.59);}
 ctx.fillStyle='rgba(0,0,0,.55)';ctx.fillRect(8,H-24,W*.44,18);ctx.fillStyle='#fff';ctx.font=`600 ${Math.max(9,Math.round(W/70))}px Montserrat,sans-serif`;ctx.fillText(L('DØMISMYND · ikki eitt veruligt hús','SAMPLE PHOTO · not a real house'),14,H-11);ctx.restore();}
function sampleURL(kind){const c=document.createElement('canvas');c.width=480;c.height=320;drawScene(c.getContext('2d'),480,320,kind);return c.toDataURL('image/jpeg',.8)}
const CAPSTEPS=['house','indoor','outdoor','ground','dist','el','photos'];
function att(id){return v3c().att[id]||(v3c().att[id]=[])}
function seedAtt(){if(v3c()._seed)return;v3c()._seed=1;att('indoor').push({src:sampleURL('room'),lb:L('Tøknirúm – Dømi','Utility room – sample'),k:'demo'});att('outdoor').push({src:sampleURL(),lb:L('Útveggur – Dømi','Outside wall – sample'),k:'demo'})}
function capBar(id){if(!CAPSTEPS.includes(id))return '';const a=att(id),meas=['outdoor','dist','ground'].includes(id);
 return `<div class="card cap"><h4><span>📷 ${L('Myndir og mátingar til hetta stigið','Photos & measurements for this step')} (${a.length})</span><span class="demo inl">${t('demoS')}</span></h4>
 <div class="thumbs">${a.map((p,i)=>`<figure><img src="${p.src}" onclick="viewAtt('${id}',${i})" alt=""><figcaption>${p.lb}</figcaption></figure>`).join('')||`<span class="hint">${L('Enn ongar myndir','No photos yet')}</span>`}</div>
 <div class="capb"><label>📷 ${L('Tak mynd','Take photo')}<input type="file" accept="image/*" capture="environment" hidden onchange="addFile('${id}',this)"></label><button onclick="addSample('${id}')">＋ ${L('Dømis mynd','Sample photo')}</button>${meas?`<button class="hi" onclick="openAnn('${id}')">✏️ ${L('Tekna frástøðu á myndina','Draw distance on photo')}</button>`:''}</div>
 <p class="hint" style="margin-top:8px">${L('Myndirnar verða knýttar at stiginum og tiknar við í arbeiðsseðilin hjá montørinum.','Photos are linked to the step and go into the installer job sheet.')}${v3c().online?'':' · 💾 '+L('goymt á telefonini','saved on phone')}</p></div>`}
function addSample(id){att(id).push({src:sampleURL(id==='indoor'?'room':''),lb:L('Dømis mynd','Sample photo')+' '+(att(id).length+1),k:'demo'});qPush('photo '+id);render()}
function addFile(id,inp){const f=inp.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{att(id).push({src:r.result,lb:f.name.slice(0,22),k:'file'});qPush('photo '+id);render()};r.readAsDataURL(f)}
function viewAtt(id,i){const p=att(id)[i];modal(`<img src="${p.src}" style="width:100%;border-radius:14px"><p style="font-size:13px;margin:10px 0">${p.lb}</p><div style="display:flex;gap:10px"><button class="btn s" onclick="att('${id}').splice(${i},1);closeM();render()">${L('Strika','Delete')}</button><button class="btn p" onclick="closeM()">${t('mClose')}</button></div>`);document.getElementById('mbox').classList.add('wide')}
/* annotation */
let AN=null;
function openAnn(id){const ty=id==='ground'?'gs':(S.runTab&&has(S.runTab)?S.runTab:S.sols[0]);
 AN={id,ty,tool:'line',shapes:[{k:'line',pre:1,a:[.25,.64],b:[.84,.69],lb:nf(S.run[ty].len,1)+' m'}],cur:null,len:S.run[ty].len};
 modal(`<h3>✏️ ${L('Tekna frástøðuna á myndina','Draw the distance on the photo')}</h3><span class="demo">${t('demo')} · ${L('dømis mynd','sample photo')}</span>
 <div class="anntb"><button id="anLine" class="on" onclick="anTool('line')">📏 ${L('Mátistrika','Measure line')}</button><button id="anPen" onclick="anTool('pen')">🖊️ ${L('Fríhondstekning','Freehand')}</button><button onclick="AN.shapes.pop();anDraw()">↶ ${L('Angra','Undo')}</button><button onclick="AN.shapes=[];anDraw()">✕ ${L('Tøm','Clear')}</button>
 <span style="margin-left:auto;font-size:12px;font-weight:700">${L('Longd','Length')}</span><input id="anLen" type="number" inputmode="decimal" autocomplete="off" step="0.5" value="${AN.len}" oninput="anSetLen(+this.value)"> m</div>
 <div class="annw"><canvas id="anC" width="960" height="640"></canvas></div>
 <p class="hint" style="margin:8px 0 0">${L('Drag eina linju frá gjøgnumfør­ingini í vegginum til útieindina/boriholið. Skriva mátaðu longdina (við lasermátara ella málibandi) – myndin er bert ein skitsa, ikki ein máting.','Drag a line from the wall penetration to the outdoor unit/borehole. Type the measured length (laser/tape) – the photo is a sketch, not a measurement.')}</p>
 <div style="display:flex;gap:10px;margin-top:12px"><button class="btn s" onclick="closeM()">${t('mCancel')}</button><button class="btn p" onclick="anSave()">✓ ${L('Goym á stigið og brúka sum L','Save to step + use as L')}</button></div>`);
 document.getElementById('mbox').classList.add('wide');const c=document.getElementById('anC');AN.c=c;AN.ctx=c.getContext('2d');anDraw();
 const pos=e=>{const r=c.getBoundingClientRect();return [(e.clientX-r.left)/r.width,(e.clientY-r.top)/r.height]};
 c.onpointerdown=e=>{c.setPointerCapture(e.pointerId);const p=pos(e);AN.cur=AN.tool==='line'?{k:'line',a:p,b:p,lb:nf(AN.len,1)+' m'}:{k:'pen',pts:[p]};};
 c.onpointermove=e=>{if(!AN.cur)return;const p=pos(e);if(AN.cur.k==='line')AN.cur.b=p;else AN.cur.pts.push(p);anDraw()};
 c.onpointerup=()=>{if(AN.cur){if(AN.cur.k==='line')AN.shapes=AN.shapes.filter(z=>!z.pre);AN.shapes.push(AN.cur);AN.cur=null;anDraw()}};}
function anTool(k){AN.tool=k;document.getElementById('anLine').classList.toggle('on',k==='line');document.getElementById('anPen').classList.toggle('on',k==='pen')}
function anSetLen(v){AN.len=v;for(let i=AN.shapes.length-1;i>=0;i--)if(AN.shapes[i].k==='line'){AN.shapes[i].lb=nf(v,1)+' m';break}anDraw()}
function anDraw(){const {ctx,c}=AN,W=c.width,H=c.height;ctx.clearRect(0,0,W,H);drawScene(ctx,W,H,AN.id==='indoor'?'room':'');
 [...AN.shapes,...(AN.cur?[AN.cur]:[])].forEach(s=>{ctx.save();ctx.lineCap='round';ctx.lineJoin='round';
  if(s.k==='pen'){ctx.strokeStyle='#e8542f';ctx.lineWidth=5;ctx.beginPath();s.pts.forEach((p,i)=>i?ctx.lineTo(p[0]*W,p[1]*H):ctx.moveTo(p[0]*W,p[1]*H));ctx.stroke()}
  else{const ax=s.a[0]*W,ay=s.a[1]*H,bx=s.b[0]*W,by=s.b[1]*H;ctx.strokeStyle='#2cbc61';ctx.lineWidth=6;ctx.setLineDash([16,10]);ctx.beginPath();ctx.moveTo(ax,ay);ctx.lineTo(bx,by);ctx.stroke();ctx.setLineDash([]);
   [[ax,ay],[bx,by]].forEach(([x,y])=>{ctx.fillStyle='#fff';ctx.strokeStyle='#295135';ctx.lineWidth=4;ctx.beginPath();ctx.arc(x,y,10,0,7);ctx.fill();ctx.stroke()});
   const mx=(ax+bx)/2,my=(ay+by)/2-26;ctx.font='800 26px Montserrat,sans-serif';const tw=ctx.measureText(s.lb).width;ctx.fillStyle='#295135';ctx.beginPath();ctx.roundRect(mx-tw/2-14,my-24,tw+28,38,19);ctx.fill();ctx.fillStyle='#fff';ctx.fillText(s.lb,mx-tw/2,my+4)}
  ctx.restore()});}
function anSave(){const src=AN.c.toDataURL('image/jpeg',.82);att(AN.id).push({src,lb:L('Viðmerkingar gjørdar','Annotated')+': L = '+nf(AN.len,1)+' m',k:'ann'});
 if(AN.id!=='ground'||true){S.run[AN.ty].len=AN.len}qPush('annotation '+AN.id+' L='+AN.len);closeM();render();toast(L('✓ Mynd við viðmerkingum er goymd á stiginum','✓ Annotated photo saved to the step'))}
/* ---------- 4. noise & placement ---------- */
function noiseCardHTML(){const p=pkOf('aw'),r=Math.max(1,S.outdoor.neigh),Q=noiseQ(),Lp=noiseRaw(),lim=noiseLim(),n=Math.round(Lp),z={ok:n<=lim,warn:n<=lim+3};
 const rmin=Math.sqrt(Q/(4*Math.PI)*Math.pow(10,(p.lw-lim)/10));
 const qc=(q,lb)=>`<button class="chip ${Q===q?'on':''}" onclick="S.outdoor.q=${q};render()">${lb} · Q=${q}</button>`;
 const lc=v=>`<button class="chip ${lim===v?'on':''}" onclick="S.v3.lim=${v};render()">${v} dB(A)</button>`;
 return `<h4>🔊 ${L('Ljóð og staðseting','Noise & placement')} <span class="tbc">${L('Lagt til viks – ikki lógarásett','Shelved – not legislated')}</span></h4>
 <div class="chk">${icon(z)}<span style="font-size:28px;font-weight:800;letter-spacing:-.03em">${nf(Lp,1)} dB(A)</span><span class="v">${z.ok?L('Markið er hildið','Passes'):z.warn?L('Ávaring','Warning'):L('Ov høgt','Too high')} · ≤${lim}</span></div>
 <div style="font-size:11.5px;font-weight:700;margin:10px 0 6px">${L('Endurkastandi fløtur','Reflecting surfaces')}</div><div class="chips">${qc(1,L('Frítt øki','Free field'))}${qc(2,L('Á jørðini','On ground'))}${qc(4,L('Við ein vegg','By a wall'))}${qc(8,L('Í einum horni','In a corner'))}</div>
 <div style="font-size:11.5px;font-weight:700;margin:10px 0 6px">${L('Markvirði við markið','Limit at the boundary')} <span class="tbc">${L('Fortreyt – skal váttast','Assumption – to confirm')}</span></div><div class="chips">${lc(35)}${lc(40)}${lc(45)}</div>
 <div class="nz"><span>L<sub>W</sub> ${L('ljóðorka (dátublað, Dømi)','sound power (datasheet, example)')}</span><b>${p.lw} dB(A)</b><span>r ${L('til markið hjá grannanum','to neighbour boundary')}</span><b>${nf(r,1)} m</b><span>Q ${L('ljóðspjaðing','directivity')}</span><b>${Q}</b><span>${L('Minsta frástøða fyri','Min. distance for')} ≤${lim}</span><b>${nf(rmin,1)} m</b></div>
 <p class="hint" style="margin-top:8px"><code>L<sub>p</sub> = L<sub>W</sub> + 10·log₁₀(Q / 4πr²)</code> = ${p.lw} + 10·log₁₀(${Q} / (4π·${nf(r,1)}²)) = <b>${nf(Lp,1)} dB(A)</b>. ${L('Vanlig útrokning fyri punktljóðkeldu (hálvkúla Q=2 á jørðini, Q=4 við ein vegg og Q=8 í einum horni). Útrokningin tekur ikki hædd fyri skermum, tónalagi ella dag- og náttarmørkum.','Standard point-source formula (hemispherical Q=2 on ground, Q=4 by a wall, Q=8 in a corner). Ignores screens, tonality and day/night limits.')}</p>`}
/* ---------- 10. service tiers ---------- */
function tierInfo(n){const vipTBD=`<span class="tbc">${L('Avmarkingarnar skulu avgerast','Limitations to be decided')}</span>`;
 const base=[L('Kravt eftirlit og viðlíkahald (lóg/framleiðari) – innihaldið skal váttast','Mandatory inspections and service (law/manufacturer) – scope to confirm'),L('Árligt eftirlit: trýst, síur, kølivæsku-/kølimiðlakringrás og alarmbók','Annual check: pressure, filters, brine/refrigerant circuit, alarm log')];
 return [null,{n:'Essential',fo:'Bert tað, sum er kravt',en:'Only what is mandatory',li:base},
  {n:'Plus',fo:'Essential + 2 ára eyka garanti',en:'Essential + 2 extra years of warranty',li:['Essential',L('+ 2 ár afturat garantiini frá framleiðaranum/MP','+ 2 years on top of the manufacturer/MP warranty')]},
  {n:'VIP',fo:'Plus + VIP',en:'Plus + VIP',li:['Plus (Essential + 2 ár)',L('VIP-atgongd: framíhjárættur, um okkurt fer galið','VIP access: priority when something fails'),L('Neteftirlit (myUplink) – vit síggja alarmarnar fyrst','Online monitoring (myUplink) – we see alarms first'),L('Ókeypis vitjanir','Free call-outs')+' '+vipTBD]}][n]}
function tierCards(cls,onc){return `<div class="${cls}">${[1,2,3].map(n=>{const s=SVC[n],ti=tierInfo(n);return `<button class="tier ${n===3?'vip':''} ${S.svc===n?'on':''}" onclick="${onc}(${n})"><span class="rb"></span><div class="tn"><span>${s.ic} ${ti.n}</span></div><div style="font-size:12px;color:var(--mut);margin:2px 0">${FO()?ti.fo:ti.en}</div><div class="tp">${kr(s.pr)}/${L('ár','yr')} <small style="color:var(--mut);font-weight:600">(DKK) ${L('uttan MVG','excl. VAT')}</small>${n>1?` <span class="tbc">${L('Uppskot','Proposed')}</span>`:''}</div><ul>${ti.li.map(x=>`<li>${x}</li>`).join('')}</ul></button>`}).join('')}
 <button class="tier ${!S.svc?'on':''}" onclick="${onc}(0)"><span class="rb"></span><div class="tn"><span>— ${L('Einki','None')}</span></div><div style="font-size:12px;color:var(--mut);margin-top:2px">${L('Eingin tænastuavtala. Kundin syrgir sjálvur fyri kravda eftirlitinum.','No service agreement. The customer arranges mandatory inspections themselves.')}</div></button></div>`}
function setTier(n){S.svc=n;qPush('svc tier '+n);render()}
/* ---------- 6 + 9. follow-up and public approvals ---------- */
const dfmt=(base,add)=>{const d=new Date(base);d.setDate(d.getDate()+add);return d.toLocaleDateString(FO()?'da-DK':'en-GB',{day:'numeric',month:'short'})};
const sentDate=()=>new Date(S.v3.sentAt||Date.now());
function APPS(){const ty=S.choice,g=ty==='gs'?ground():null;
 if(ty==='gs'&&g.kind==='bore')return [{id:'bore',fo:'Boreloyvi – kommunan',en:'Drilling permit – municipality',auth:L('Kommunan, har holið verður borað · MP tekur sær av umsóknini vegna kundan','The municipality where the hole is drilled · MP handles the application for the customer'),why:L('Neyv krøv til umsóknarblaðið og fylgiskjølini skulu váttast','Exact form requirements and attachments: to be confirmed')}];
 return []}
const noAppTxt=()=>S.choice==='gs'?L('Eingin boring (jarðslanga) – eingin umsókn er neyðug (skal váttast)','No drilling (ground loop) – no application needed (to be confirmed)'):L('Eingin umsókn er neyðug fyri','No application needed for')+' '+solName(S.choice).toLowerCase()+' '+L('(skal váttast)','(to be confirmed)');
const APST=[['Fyrireikað','Prepared'],['Sent','Sent'],['Móttikið','Received'],['Góðkent','Approved']];
function apprState(id){const a=v3c().appr;return a[id]===undefined?0:a[id]}
function apprNext(id){const a=v3c().appr;a[id]=Math.min(3,apprState(id)+1);qPush('approval '+id+' → '+APST[a[id]][1]);render()}
function apprForm(id){const ap=APPS().find(x=>x.id===id),c=CUST[S.cust],ty=S.choice,p=pkOf(ty),g=ty==='gs'?ground():null,fo=FO();
 const rows=[[L('Umsøkjari','Applicant'),c.n],[L('Bústaður','Address'),c.addr],[L('Matrikulsnummar','Land reg. no.'),'DØMI-12a'],[L('Myndugleiki','Authority'),ap.auth],[L('Hitapumpa','Heat pump'),pkName(p)],[L('Hitatørvur','Heat demand'),nf(demand().Q)+' kWh/'+L('ár','yr')+' · P_d '+nf(demand().Pd,1)+' kW'],
  
  ...(g?[[g.kind==='bore'?L('Borihol','Borehole'):L('Jarðslanga','Ground loop'),g.kind==='bore'?`${g.holes} × ${g.per} m · Ø110 mm`:`${nf(g.Lc)} m · ${nf(g.area)} m²`],[L('Brine','Brine'),L('Etanol/glykol, frostmark ≈ −15 °C (CTC)','Ethanol/glycol, freezing point ≈ −15 °C (CTC)')],[L('Frástøða til hús/mark/brunn','Distance to house/boundary/well'),L('skal mátast á staðnum','to measure on site')]]:[]),
  [L('Leið frá húsinum til eindina','Run house → unit'),nf(S.run[ty].len,1)+' m'],[L('Viðheft','Attached'),`${Object.values(v3c().att).reduce((s,a)=>s+a.length,0)} ${L('myndir','photos')} · ${L('støðuskitsa','site sketch')} · ${L('dátublað','datasheet')}`]];
 modal(`<h3>📝 ${fo?ap.fo:ap.en}</h3><span class="demo">${t('demo')}</span> <span class="tbc">${L('Krøv til umsóknarblaðið skulu váttast','Form requirements: to be confirmed')}</span>
 <p style="font-size:13px;color:var(--ink2);margin:10px 0 0">${L('Umsóknin er útfylt við upplýsingum frá staðarvitjanini. MP kannar hana og sendir hana til kommununa vegna kundan – einki verður sent í hesi royndarútgávuni.','Prefilled from the site visit. MP reviews and sends it to the municipality on the customer\'s behalf – nothing is sent in this mockup.')}</p>
 <div class="formv">${rows.map(r=>`<span>${r[0]}</span><b>${r[1]}</b>`).join('')}</div><p class="hint">${ap.why}</p>
 <div style="display:flex;gap:10px;margin-top:12px"><button class="btn s" onclick="closeM()">${t('mClose')}</button><button class="btn p" onclick="closeM();apprNext('${id}')">${apprState(id)===0?L('Markera sum sent (simulerað)','Mark as sent (sim.)'):L('Næsta støða (simulerað)','Next status (sim.)')}</button></div>`);document.getElementById('mbox').classList.add('wide')}
function apprHTML(customer){const v=v3c(),list=APPS(),fo=FO();
 const H=`🏛️ ${L('Boreloyvi – kommunan','Drilling permit – municipality')}`;
 if(!list.length)return `<div class="card"><h4>${H}</h4><div class="chk"><span class="ic ok">✓</span><span>${noAppTxt()}</span></div><p class="hint" style="margin-top:6px">${L('Boreloyvi frá kommununi er bert neyðugt til jarðhita við boriholi.','A drilling permit from the municipality only applies to ground source with a borehole.')}</p></div>`;
 if(!v.signed)return `<div class="card lockc"><div class="lk">🔒 ${H}</div><div style="font-size:12.5px;font-weight:700;color:#8a5a00;margin-bottom:6px">${L('Arbeiðið byrjar, tá ið kundin góðtekur tilboðið','Starts when the customer accepts the offer')}</div>
  <ul style="margin:0 0 0 16px;font-size:12px;line-height:1.6"><li>${L('MP tekur sær av umsóknini til kommununa, har holið verður borað','MP handles the application to the municipality where the hole is drilled')}</li><li>${L('Umsóknin verður sjálvvirkandi útfylt við upplýsingum frá vitjanini','Prefilled automatically from the visit data')}</li><li>${L('Krøv til umsóknarblaðið','Form requirements')} · <span class="tbc">${L('skal váttast','TBC')}</span></li></ul></div>`;
 return `<div class="card"><h4>${H}</h4><p class="hint" style="margin:0 0 4px">${L('Opnað, tá ið kundin hevur góðtikið','Unlocked when the customer accepted')} ${v.signedAt||''}. ${L('MP tekur sær av umsóknini vegna kundan.','MP handles the application for the customer.')}</p>
 ${list.map(a=>{const st=apprState(a.id);return `<div class="appr"><div class="an">${fo?a.fo:a.en}</div><div class="aa">${a.auth}</div><div class="pipe">${APST.map((x,i)=>`<i class="${i<=st?'on':''}"></i>`).join('')}</div><div class="pipel">${APST.map((x,i)=>`<span style="${i===st?'color:var(--acc);font-weight:800':''}">${fo?x[0]:x[1]}</span>`).join('')}</div>
  <p class="hint" style="margin:0 0 8px">${a.why}</p>${customer?'':`<div class="capb"><button onclick="apprForm('${a.id}')">📝 ${L('Vís útfylta umsókn','View prefilled form')}</button>${st<3?`<button onclick="apprNext('${a.id}')">→ ${L('Næsta støða','Next status')} (sim.)</button>`:''}</div>`}</div>`}).join('')}</div>`}
function followHTML(){const v=v3c(),fo=FO(),c=CUST[S.cust],sd=new Date(S.v3.sentAt||Date.now()).toISOString().slice(0,10),due=v.days>=7&&!v.signed&&!v.snooze;
 const ev=[[L('Tilboð sent','Offer sent'),dfmt(sd,0)+' · '+L('teldupostur + SMS-leinki','email + SMS link'),1],[L('Kundin hevur opnað','Opened by customer'),v.opened?fmtD(v.openedAt||Date.now()):L('Enn ikki opnað','Not opened yet'),v.opened],
  [L('Undirskrivað','Signed'),v.signed?(v.signedAt||'')+' · '+v.signer:L('Bíðar','Waiting'),v.signed],[L('Góðtikið tilboð → BC','Accepted quote → BC'),v.signed?L('Merkt sum góðtikið · klárt at flyta yvir í eina verkætlan (simulerað)','Marked accepted · ready to transfer into a project (simulated)'):'—',v.signed],
  [L('Boreloyvi – kommunan','Drilling permit – municipality'),!APPS().length?noAppTxt():v.signed?L('Umsókn fyrireikað av MP','Application prepared by MP'):L('Læst, til tilboðið er góðtikið','Locked until accepted'),!APPS().length||(v.signed&&Object.values(v.appr).some(x=>x>=1))],[L('Arbeiðsseðil til montørin','Installer job sheet'),v.signed?L('Klárt','Ready'):L('Uppskot','Draft'),v.signed]];
 let x=`<div class="st-h">${L('Eftirfylging og støða','Follow-up and status')}</div><p class="st-p">${L('Seljarin sær, hvat hendir við tilboðnum. Um tað ikki er opnað ella undirskrivað innan 7 dagar, kemur ein áminning.','The salesperson sees what happens with the offer. If it is not opened or signed after 7 days, a reminder appears.')}</p>`;
 if(due)x+=`<div class="nudge"><b>⏰ ${L('Áminning','Reminder')}: ${v.opened?L('tilboðið er opnað, men ikki undirskrivað','the offer is opened but not signed'):L('tilboðið er ikki opnað','the offer has not been opened')} ${L('eftir','after')} ${v.days} ${L('dagar','days')}</b><p>${L(`Ring til ${c.n} ella send eina vinaliga áminning. Uppskot: “Hevur tú spurningar til tilboðið? Eg kann koma umaftur og vísa tær alternativini.”`,`Call ${c.n} or send a friendly reminder. Suggested: “Any questions about the offer? I can come back and walk you through the alternatives.”`)}</p>
  <div class="capb"><button class="hi" onclick="toast(L('📞 Ringir (royndarútgáva)','📞 Calling (mock)'))">📞 ${L('Ring','Call')}</button><button onclick="S.v3.nudged=true;toast(L('✉️ Áminning løgd í bíðirøð (royndarútgáva) – einki er sent','✉️ Reminder queued (mock) – nothing sent'))">✉️ ${L('Send áminning (royndarútgáva)','Send reminder (mock)')}</button><button onclick="S.v3.snooze=true;render()">💤 ${L('Útset í 3 dagar','Snooze 3 days')}</button></div></div>`;
 x+=`<div class="card"><h4>${L('Støða','Status')} · ${QNO()} <span class="demo inl">${t('demoS')}</span></h4><div class="tlx">${ev.map((e,i)=>{const nx=!e[2]&&(i===0||ev[i-1][2]);return `<div class="e ${e[2]?'dn':nx?'nx':''}"><div class="o">${e[2]?'✓':i+1}</div><div><b>${e[0]}</b><span>${e[1]}</span></div></div>`}).join('')}</div>
  <p class="hint">🐙 ${L('Octopus kann skráseta, um tilboðið er opnað og undirskrivað, og senda áminningar – hetta krevur, at integratiónin verður sett upp.','Octopus can track opened/signed and send the reminders – integration to be confirmed.')}</p></div>`;
 x+=`<div class="card"><h4>${L('Simulering','Simulation')} <span class="demo inl">mock</span></h4>${mini('v3.days',L('Dagar síðani tilboðið varð sent','Days since sent'),L('dagar','days'),1,0,21)}<div style="height:8px"></div>${sw('v3.opened',L('Kundin hevur opnað tilboðið','Customer has opened'))}
  <div class="toggle"><span>${L('Kundin hevur undirskrivað tilboðið','Customer has signed')}</span><button class="sw ${v.signed?'on':''}" onclick="simSign()"></button></div></div>`;
 x+=apprHTML(false);
 x+=`<div class="card"><h4>🧰 ${L('Arbeiðsseðil til montørin','Installer job sheet')} ${v.signed?'':`<span class="tbc">${L('Uppskot','Draft')}</span>`}</h4><p class="hint" style="margin:0 0 10px">${L('Stykkjalisti, rørleiðing, myndir, frástøður og viðmerkingar – klárt at prenta.','BOM, pipe route, photos, distances and notes – ready to print.')}</p><button class="btn p" style="width:100%" onclick="go('job')">${L('Opna arbeiðsseðil','Open job sheet')} →</button></div>`;
 return `<div class="stepin"><div class="st-k">${t('stepOf',{a:steps().length,b:steps().length})} · ${stl('follow')}</div>${x}</div>`}
function simSign(){const v=v3c();if(v.signed){v.signed=false;render();return}v.signed=true;v.method='samleiki';v.opened=true;v.signer=v.signer||CUST[S.cust].n.split(' ')[0];v.signedAt=fmtD(Date.now());render()}
/* ---------- wrappers into existing renderers ---------- */
const _stepHTML=stepHTML;stepHTML=function(){if(S.sid==='follow')return followHTML();let h=_stepHTML();const id=S.sid;
 const tail=h.lastIndexOf('</div>');let extra='';
 if(id==='pkg')extra=`<div class="card"><h4>🛠️ ${L('Tænastuavtala – vel eitt støði','Service agreement – pick a tier')} <span class="demo inl">${t('demoS')}</span></h4><p class="hint" style="margin:0 0 10px">${L('Kundin kann velja eitt ella einki. 1. ár er við í totalinum.','The customer can pick one or none. Year 1 is included in the total.')}</p>${tierCards('tiers','setTier')}</div>`;
 extra+=capBar(id);
 return h.slice(0,tail)+extra+h.slice(tail)};
const _live=live;live=function(){_live();const nc=document.getElementById('noiseCard');if(nc){if(S.noiseOn)nc.innerHTML=noiseCardHTML();else nc.remove();}netUI();
 const bp=document.getElementById('bcPanel'),v=v3c();if(bp){bp.insertAdjacentHTML('beforeend',(v.online?'':`<div class="bcrow"><span class="tag" style="background:#fdeacc;color:#8a5a00">QUEUE</span><span>${L(`Offline · ${v.queue.length} broytingar bíða`,`Offline · ${v.queue.length} changes waiting`)}</span></div>`)+
  (v.signed?`<div class="bcrow"><span class="tag w">POST</span><span>${L('Góðtikið tilboð','Accepted quote')} <b>${QNO()}</b> → ${L('klárt til verkætlan (Projects/Jobs)','ready for project (Projects/Jobs)')} (${L('simulerað','simulated')})</span></div>`:''));}};
const _sent=sent;sent=function(){if(!v3c().online){qPush('POST salesQuote (×'+S.sols.length+')');modal(`<h3>💾 ${L('Goymt – verður sent, tá ið netsambandið er aftur','Saved – will be sent when online')}</h3><span class="demo">${t('demo')}</span><p style="font-size:14px;margin:12px 0">${L('Tú hevur ikki netsamband. Sølutilboðið liggur í bíðirøðini á telefonini og verður skrivað inn í BC, tá ið sambandið er aftur.','You are offline. The sales quote is in the queue on the phone and will be written to BC when the connection is back.')}</p><button class="btn p" onclick="closeM();render()">OK</button>`);return}_sent()};

/* ===== v3b: customer offer (tiers, e-sign, after-sale), dashboard, job sheet, routing ===== */
document.head.insertAdjacentHTML('beforeend',`<style>
#dash,#job{max-width:1360px;margin:0 auto;padding:40px clamp(20px,5vw,80px) 80px}
.dk{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin:22px 0}.dk .kpi{padding:22px}
.dtbl{width:100%;border-collapse:collapse;font-size:13.5px;background:#fff;border-radius:22px;overflow:hidden;box-shadow:0 20px 50px -30px rgba(20,40,25,.35)}
.dtbl th{font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--mut);text-align:left;padding:14px 16px;background:#f1f4ec}.dtbl td{padding:13px 16px;border-top:1px solid var(--line)}.dtbl .n{text-align:right;font-variant-numeric:tabular-nums}
.hbar{height:8px;border-radius:4px;background:#e7ebe3;overflow:hidden;min-width:80px}.hbar i{display:block;height:100%;background:linear-gradient(90deg,var(--acc),var(--acc2))}
.dgrid{display:grid;grid-template-columns:1.4fr 1fr;gap:20px;margin-top:20px}.dcard{background:#fff;border-radius:22px;padding:22px;box-shadow:0 20px 50px -30px rgba(20,40,25,.35)}
.dcard h4{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--mut);margin:0 0 14px}
.fun{display:grid;gap:8px}.fun div{display:grid;grid-template-columns:120px 1fr 60px;gap:10px;align-items:center;font-size:13px}.fun i{display:block;height:26px;border-radius:8px;background:linear-gradient(90deg,var(--acc),var(--acc2))}
.st{display:inline-block;font-size:10.5px;font-weight:800;border-radius:99px;padding:2px 9px}.st.s{background:#e2ecf8;color:#24507f}.st.o{background:#fdeacc;color:#8a5a00}.st.g{background:#e3f6e9;color:#1d7a43}.st.r{background:#fde3dc;color:#9b2c12}
.sheet{background:#fff;border-radius:22px;padding:34px 38px;box-shadow:0 20px 50px -30px rgba(20,40,25,.35);margin-bottom:22px}
.sheet h2{font-size:15px;letter-spacing:.12em;text-transform:uppercase;color:var(--acc);margin:0 0 12px}.jh{display:flex;justify-content:space-between;gap:20px;align-items:flex-start;flex-wrap:wrap}
.jh .brand{width:170px}.jg{display:grid;grid-template-columns:repeat(3,1fr);gap:10px 22px;font-size:13px}.jg span{display:block;color:var(--mut);font-size:11px;text-transform:uppercase;letter-spacing:.08em}
.jt{width:100%;border-collapse:collapse;font-size:12.5px}.jt th{text-align:left;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--mut);border-bottom:2px solid var(--acc);padding:6px 8px}.jt td{border-bottom:1px solid var(--line);padding:6px 8px}.jt .n{text-align:right}.jt .ck{width:22px;height:14px;border:1.5px solid #9aa597;border-radius:3px;display:inline-block}
.jph{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.jph figure{margin:0}.jph img{width:100%;aspect-ratio:3/2;object-fit:cover;border-radius:10px;border:1px solid var(--line)}.jph figcaption{font-size:11px;color:var(--mut);margin-top:4px}
.draftw{position:relative}.draftw:after{content:attr(data-w);position:absolute;top:40%;left:50%;transform:translate(-50%,-50%) rotate(-18deg);font-size:90px;font-weight:900;color:rgba(200,120,0,.08);pointer-events:none;white-space:nowrap}
.after{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}.after .ac{background:#fff;border-radius:22px;padding:22px;box-shadow:0 20px 50px -30px rgba(20,40,25,.35)}.after .ac h4{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--mut);margin:0 0 10px}
.after .big{font-size:24px;font-weight:800;letter-spacing:-.02em}.mu{display:grid;grid-template-columns:1fr auto;gap:5px 10px;font-size:12.5px;margin-top:10px}.mu span{color:var(--mut)}
.dot{display:inline-block;width:9px;height:9px;border-radius:50%;background:#2cbc61;box-shadow:0 0 0 4px rgba(44,188,97,.18);margin-right:6px}
.rlist a{display:flex;justify-content:space-between;gap:8px;font-size:12.5px;padding:7px 0;border-bottom:1px solid var(--line);color:var(--ink);text-decoration:none}.rlist a b{color:var(--acc)}
@media (max-width:1000px){.dk,.after{grid-template-columns:1fr 1fr}.dgrid{grid-template-columns:1fr}.jg{grid-template-columns:1fr 1fr}.jph{grid-template-columns:1fr 1fr}}
@media print{.hud,.chatfab,.grain,.noprint,#toast{display:none!important}body,html{background:#fff!important}#job{padding:0;max-width:none}.sheet{box-shadow:none;border:1px solid #ccc;border-radius:8px;break-inside:avoid;padding:18px 22px;margin-bottom:12px}.draftw:after{color:rgba(0,0,0,.06)}}
</style>`);
const _modal=modal;modal=function(h){document.getElementById('mbox').classList.remove('wide');_modal(h)};
/* ---------- 5. e-signature ---------- */
function openAccept(){const ty=S.choice,p=pkOf(ty),tt=totalWithAdd(ty),v=v3c(),fo=FO();if(v.signed){modal(signedHTML(true));return}
 modal(`<h3>✍️ ${L('Góðtak og skriva undir','Accept and sign')}</h3><span class="demo">${t('demo')}</span>
 <div class="formv" style="margin-top:14px"><span>${L('Valt alternativ','Chosen alternative')}</span><b>${solName(ty)} · ${pkName(p)}</b><span>${L('Tænastuavtala','Service agreement')}</span><b>${S.svc?SVC[S.svc].tier+' · '+kr(SVC[S.svc].pr)+'/'+L('ár','yr'):L('Einki','None')}</b><span>${L('Eykaútgerð','Add-ons')}</span><b>${addOn().length}</b><span>${L('Tilsamans við MVG','Total incl. VAT')}</span><b style="color:var(--acc);font-size:16px">${kr(tt.inc)} <small style="color:var(--mut);font-weight:600">(DKK)</small></b></div>
 <p style="font-size:12.5px;color:var(--ink2);margin:0 0 14px">${L('Við at skriva undir góðtekur tú tilboðið við valda alternativinum og treytunum (dømi). Sparingin og tíðin, til íløgan er vunnin inn aftur, eru metingar.','By signing you accept the offer with the chosen alternative and the terms (example). Savings and payback are estimates.')}</p>
 <div id="smlBox"><button class="btn p big" style="width:100%;display:flex;gap:10px;justify-content:center;align-items:center" onclick="smlStart()"><span style="display:inline-grid;place-items:center;width:26px;height:26px;border-radius:50%;background:#fff;color:var(--acc);font-weight:900;font-size:14px">S</span>${L('Skriva undir við Samleikanum','Sign with Samleikin')}</button>
 <p class="hint" style="margin-top:8px">🔐 Samleikin – ${L('føroyski talgildi samleikin','the Faroese national e-ID')}. <span class="tbc">${L('Integratiónin skal setast upp','Integration to be set up')}</span> · ${L('simulerað her','simulated here')}</p></div>
 <details style="margin-top:12px;font-size:12px"><summary style="cursor:pointer;color:var(--mut)">${L('Hevur tú ikki Samleikan? Vel eina aðra loysn','No Samleikin? Fallback')}</summary>
 <div class="fld" style="margin-top:10px"><label>${L('Fullt navn (skrivað inn)','Full name (typed)')}</label><input id="sgName" autocomplete="name" autocapitalize="words" enterkeyhint="done" placeholder="${CUST[S.cust].n.split(' &')[0]}" oninput="sgCheck()"></div>
 <label style="display:flex;gap:8px;align-items:flex-start;font-size:12.5px;margin:10px 0;color:var(--ink2)"><input type="checkbox" id="sgOk" onchange="sgCheck()"> ${L('Eg góðtaki tilboðið og treytirnar (dømi).','I accept the offer and the terms (example).')}</label>
 <button class="btn s" id="sgBtn" disabled style="opacity:.45;width:100%" onclick="doSign('name')">${L('Góðtak við navni','Accept with name')}</button></details>
 <div style="display:flex;gap:10px;margin-top:14px"><button class="btn s" onclick="closeM()">${t('mCancel')}</button></div>`);document.getElementById('mbox').classList.add('wide')}
function smlStart(){const b=document.getElementById('smlBox');b.innerHTML=`<div style="border:1.5px solid var(--line);border-radius:18px;padding:18px;text-align:center;background:#fff"><div style="font-weight:800;font-size:15px">Samleikin <span class="demo inl">${L('simulerað','simulated')}</span></div>
 <div style="font-size:13px;color:var(--ink2);margin:8px 0 12px">${L('Opna Samleika-appina á telefonini og vátta við PIN-kotu','Open the Samleikin app on your phone and confirm with your PIN')}</div><div style="font-size:30px;letter-spacing:.3em;font-weight:800;color:var(--acc)">• • • •</div><div style="font-size:11.5px;color:var(--mut);margin-top:8px">⟳ ${L('Bíðar eftir váttan…','Waiting for confirmation…')}</div></div>`;setTimeout(()=>doSign('samleiki'),1600)}
function sgCheck(){const ok=document.getElementById('sgName').value.trim().length>2&&document.getElementById('sgOk').checked,b=document.getElementById('sgBtn');b.disabled=!ok;b.style.opacity=ok?1:.45}
function doSign(m){const v=v3c();v.method=m;v.signer=m==='samleiki'?signerName():document.getElementById('sgName').value.trim();v.signed=true;v.opened=true;
 const d=new Date();v.signedAt=d.toLocaleDateString(FO()?'da-DK':'en-GB',{day:'numeric',month:'short',year:'numeric'});modal(signedHTML(false));}
const sigBadge=()=>{const v=v3c();return v.method==='name'?`<span class="tbc">${L('Góðtikið við navni (onnur loysn)','Accepted with name (fallback)')}</span>`:`<span class="st g">🔐 ${L('Undirskrivað við Samleikanum','Signed with Samleikin')} (${L('simul.','sim.')})</span>`};
const bcAccTxt=()=>L('Góðtikið tilboð → klárt til verkætlan í BC (simulerað)','Accepted quote → ready for project in BC (simulated)');
function signedHTML(again){const v=v3c(),ty=S.choice,tt=totalWithAdd(ty);return `<h3>✓ ${L('Tilboðið er góðtikið','Offer accepted')}</h3><span class="demo">${t('demo')}</span>
 <div class="signed" style="margin-top:14px"><div><b>${v.signer}</b><div style="font-size:12.5px;color:var(--ink2);margin:2px 0 6px">${v.signedAt} · ${solName(ty)} · ${kr(tt.inc)}</div>${sigBadge()}</div></div>
 <div class="bcok">${bcAccTxt()}<br>PATCH salesQuotes('${QNO()}') · status = Accepted<br>${L('→ Seljarin flytur tilboðið beinleiðis úr tilboðnum í BC yvir í eina verkætlan (Projects/Jobs)','→ The salesperson transfers the quote into a Project (Projects/Jobs) straight from the quote in BC')}<br>${L('// Eingin søluordri · einki verður skrivað í hesi royndarútgávuni','// No sales order · nothing is written in this mockup')}</div>
 <p style="font-size:13px;color:var(--ink2)">${L('Hvat hendir nú:','What happens now:')} ${APPS().length?L('MP søkir um boreloyvi hjá kommununi vegna tín, ','MP applies to the municipality for the drilling permit on your behalf, '):''}${L('montørarnir fáa arbeiðsseðilin, og seljarin ringir fyri at avtala ein dag.','the installers get the job sheet, and the salesperson calls to agree a date.')}</p>
 <div style="display:flex;gap:10px;margin-top:12px"><button class="btn p" onclick="closeM();renderOfferKeep();setTimeout(()=>{const e=document.getElementById('o-after');e&&e.scrollIntoView({behavior:'smooth'})},80)">${L('Sí síðuna um tænastu eftir keypið','See the after-sale page')} →</button></div>`}
function renderOfferKeep(){const y=window.scrollY;renderOffer();window.scrollTo(0,y)}
function setTierO(n){S.svc=n;renderOfferKeep()}
/* ---------- 7. after-sale ---------- */
function afterHTML(){const v=v3c(),tier=S.svc,mon=tier===3||S.addons.myup,fo=FO(),ty=S.choice,inst=new Date((S.v3.signedMs||Date.now())+28*864e5),base=2,ext=tier>=2?2:0,until=new Date(inst);until.setFullYear(until.getFullYear()+base+ext);
 const df=d=>d.toLocaleDateString(fo?'da-DK':'en-GB',{day:'numeric',month:'short',year:'numeric'});
 const parts=[[L('Magnetiskt óljóssíufiltur – íseting','Magnetic dirt filter – insert'),'skitfiltur'],[L('Íblandingarevni / vatnviðgerð','Inhibitor / water treatment'),'inhibitor'],...(ty==='gs'?[[L('Kølivæska / frostvæska','Brine/antifreeze'),'brine']]:[]),...(ty==='ea'?[[L('Filtur til útsúgvingarluft','Exhaust air filter'),'luftfiltur']]:[[L('Partikkulfiltur (sil)','Particle filter (strainer)'),'filtur']]),[L('Trýstmátari / trygdarventilur','Pressure gauge / safety valve'),'trygdarventil']];
 return `<section class="sec" id="o-after"><span class="kicker">${L('Eftir keypið','After sale')} · ${L('sama síða eftir innlegging','same page, after installation')}</span><div class="h2">${L('Tín hitapumpa – alt á einum stað','Your heat pump – everything in one place')}</div><p class="lead">${L('Henda síðan verður tín egna síða um hitapumpuna, tá ið hon er sett upp.','This page becomes your “my heat pump” page once installation is done.')} <span class="demo inl">${t('demo')}</span></p>
 <div class="after">
  <div class="ac"><h4>🛠️ ${L('Tænastuavtala','Service agreement')}</h4>${tier?`<div class="big">${SVC[tier].ic} ${SVC[tier].tier}</div><div style="font-size:12.5px;color:var(--ink2);margin-top:4px">${L('Virkið','Active')} · ${kr(SVC[tier].pr)}/${L('ár','yr')}</div><div class="mu"><span>${L('Næsta eftirlit','Next inspection')}</span><b>${df(new Date((S.v3.signedMs||Date.now())+28*864e5+365*864e5))}</b><span>${L('Framí rað','Priority')}</span><b>${tier===3?'✓ VIP':'—'}</b><span>${L('Ókeypis vitjanir','Free call-outs')}</span><b>${tier===3?`<span class="tbc">${L('avmarkingar verða ásettar seinni','limits TBD')}</span>`:'—'}</b></div>`:`<div class="big">—</div><p style="font-size:12.5px;color:var(--ink2)">${L('Eingin avtala er gjørd. Avtala um kravt eftirlit má gerast.','No agreement. Mandatory inspections must be arranged.')}</p><button class="pill" onclick="document.getElementById('o-svc').scrollIntoView({behavior:'smooth'})">${L('Vel eina avtalu','Choose an agreement')}</button>`}</div>
  <div class="ac"><h4>📶 myUplink <span class="demo inl">mock</span></h4>${mon?`<div class="big"><span class="dot"></span>Online</div><div class="mu"><span>${L('Framrenningarhiti','Supply temp.')}</span><b>38,5 °C</b><span>${L('Utihiti','Outdoor')}</span><b>6,2 °C</b><span>${ty==='gs'?L('Kølivæska inn/út','Brine in/out'):L('Heitt vatn','Hot water')}</span><b>${ty==='gs'?'+2,1 / −0,8 °C':'52 °C'}</b><span>COP ${L('í dag','today')}</span><b>${ty==='gs'?'4,6':'3,4'}</b><span>${L('Fráboðanir','Alarms')}</span><b>0</b><span>${L('Seinast dagført','Last update')}</span><b>2 min</b></div>`:`<div class="big" style="color:var(--mut)">${L('Ikki sambundið','Not connected')}</div><p style="font-size:12.5px;color:var(--ink2)">${L('Fylgir við VIP ella myUplink-moduli.','Comes with VIP or the myUplink module.')}</p>`}</div>
  <div class="ac"><h4>🧾 ${L('Ábyrgd','Warranty')}</h4><div class="big">${L('til','until')} ${df(until)}</div><div class="mu"><span>${L('Ísett','Installed')}</span><b>${df(inst)}</b><span>${L('Grundábyrgd','Base warranty')}</span><b>${base} ${t('yrs')} <span class="tbc">${L('skal váttast','TBC')}</span></b><span>${L('Longd ábyrgd (Plus/VIP)','Extension (Plus/VIP)')}</span><b>${ext?'+2 '+t('yrs'):'—'}</b><span>${L('Raðnummar','Serial no.')}</span><b>DØMI-SN-55120</b></div></div>
  <div class="ac"><h4>🛒 ${L('Endurbílegg filtur og eykalutir','Reorder filters and parts')}</h4><div class="rlist">${parts.map(p=>`<a href="${MOCK.handil.searchUrl}${encodeURIComponent(p[1])}" target="_blank" rel="noopener"><span>${p[0]}</span><b>${L('Sí í handlinum','See in shop')} ↗</b></a>`).join('')}</div><span class="demo inl" style="margin-top:8px;display:inline-block">${t('demo')}</span></div>
 </div>
 <div style="margin-top:20px;max-width:720px">${apprHTML(true)}</div></section>`}
/* ---------- customer page wrapper ---------- */
const _renderOffer=renderOffer;renderOffer=function(){_renderOffer();const v=v3c(),fo=FO(),ty=S.choice,tt=totalWithAdd(ty);
 const add=document.getElementById('o-add');if(add)add.insertAdjacentHTML('afterend',`<section class="sec" id="o-svc"><span class="kicker">${L('Tænastuavtala','Service agreement')}</span><div class="h2">${L('Trygd í mong ár – vel títt støði','Peace of mind for years – pick your tier')}</div><p class="lead">${L('Vel eitt stig ella einki. 1. ár er við í totalinum; síðan verður goldið árliga.','Pick one tier or none. Year 1 is in the total; after that it is billed yearly.')} <span class="demo inl">${t('demo')}</span></p>${tierCards('otiers','setTierO')}<div class="tot" style="max-width:420px;margin-top:18px;display:flex;justify-content:space-between;border-top:1px solid var(--line);padding-top:12px"><span>${L('Nýggjur samlaður prísur íroknað MVG','New total incl. VAT')}</span><b style="font-size:20px;color:var(--acc)">${kr(tt.inc)}</b></div></section>`);
 const nav=document.querySelector('.onav');if(nav){const a=[...nav.querySelectorAll('a')];const ins=(after,id,lb)=>{const ref=a.find(x=>x.getAttribute('onclick').includes("o-"+after));if(ref)ref.insertAdjacentHTML('afterend',`<a href="javascript:void(0)" onclick="document.getElementById('o-${id}').scrollIntoView({behavior:'smooth'})">${lb}</a>`)};ins('add','svc',L('Tænasta','Service'));if(v.signed)nav.insertAdjacentHTML('beforeend',`<a href="javascript:void(0)" onclick="document.getElementById('o-after').scrollIntoView({behavior:'smooth'})">${L('Eftir keypið','After sale')}</a>`)}
 const acc=document.querySelector('#o-contact .accept');if(acc&&v.signed)acc.innerHTML=`<b>✓ ${L('Góðtikið','Accepted')}</b><div class="signed" style="margin:10px 0;background:rgba(255,255,255,.9)"><div style="color:var(--ink)"><b style="font-size:15px">${v.signer}</b><div style="font-size:12px;margin-bottom:6px">${v.signedAt} · ${solName(ty)} · ${kr(tt.inc)}</div>${sigBadge()}</div></div><p>${bcAccTxt()} · ${QNO()}</p>`;
 if(v.signed){const ct=document.getElementById('o-contact');ct&&ct.insertAdjacentHTML('beforebegin',afterHTML());const tl=document.querySelectorAll('#o-next .e');if(tl[2]){tl[2].className='e rv in dn';tl[2].querySelector('.o').textContent='✓';if(tl[3])tl[3].className='e rv in nx'}}
 document.querySelectorAll('#offer .sec:not(.in)').forEach(e=>{if(!e.querySelector('.rv')||['o-eftir','o-after'].includes(e.id))e.classList.add('in')});};
/* ---------- 8. dashboard ---------- */
const REPS=[{n:'Jógvan Dømisson',v:18,o:14,s:6,up:9400,svc:4},{n:'Sólja Dømadóttir',v:22,o:19,s:10,up:12800,svc:8},{n:'Rúni Dømason',v:12,o:9,s:3,up:5200,svc:1},{n:'Elin Dømis',v:15,o:13,s:7,up:11100,svc:5}];
function renderDash(){const fo=FO(),k=S.v3.period==='q'?3:1,R=REPS.map(r=>({...r,v:r.v*k,o:r.o*k,s:r.s*k,svc:r.svc*k}));const tv=R.reduce((s,r)=>s+r.v,0),to=R.reduce((s,r)=>s+r.o,0),ts=R.reduce((s,r)=>s+r.s,0),aup=R.reduce((s,r)=>s+r.up*r.s,0)/ts,mx=Math.max(...R.map(r=>r.up));
 const open=[{c:'Anna & Rói Joensen',a:L('Luft/vatn + jarðhiti','Air/water + ground'),d:S.v3.days,st:S.v3.signed?'g':S.v3.opened?'o':'s',r:'Jógvan Dømisson'},{c:'Dømi-kundi 2',a:L('Útsúgvingarluft','Exhaust air'),d:9,st:'r',r:'Rúni Dømason'},{c:'Dømi-kundi 3',a:L('Jarðhiti','Ground source'),d:2,st:'s',r:'Sólja Dømadóttir'},{c:'Dømi-kundi 4',a:L('Luft/vatn','Air/water'),d:11,st:'r',r:'Elin Dømis'},{c:'Dømi-kundi 5',a:L('Luft/vatn','Air/water'),d:5,st:'o',r:'Sólja Dømadóttir'}];
 const stl2={s:L('Sent','Sent'),o:L('Opnað','Opened'),g:L('Undirskrivað','Signed'),r:L('Áminning skal sendast','Reminder due')};
 document.getElementById('dash').innerHTML=`<span class="kicker">${L('Sølu yvirlit','Sales dashboard')} · ${L('hitapumpur','heat pumps')}</span><div class="h2" style="margin-top:6px">${L('Vitjanir, tilboð og sølutøl','Visits, offers and conversion')}</div>
 <div style="display:flex;gap:10px;align-items:center;margin-top:12px;flex-wrap:wrap"><div class="seg sm"><button class="${k===1?'on':''}" onclick="S.v3.period='m';renderDash()">${L('Hetta tíðarskeiðið','This month')}</button><button class="${k===3?'on':''}" onclick="S.v3.period='q';renderDash()">${L('Seinastu 90 dagarnar','Last 90 days')}</button></div><span class="demo">${t('demo')}</span><span style="font-size:12px;color:var(--mut)">${L('Kelda í veruleikanum: BC møguleikar/sølutilboð + vitjanir í Lobby','Real source: BC opportunities/sales quotes + Lobby visits')}</span></div>
 <div class="dk"><div class="kpi"><div class="l">${L('Vitjanir','Visits')}</div><div class="v">${tv}</div><div class="d">${L('skrásettar í appini','done in the app')}</div></div><div class="kpi"><div class="l">${L('Send tilboð','Offers sent')}</div><div class="v">${to}</div><div class="d">${Math.round(to/tv*100)} % ${L('av vitjanum','of visits')}</div></div>
 <div class="kpi"><div class="l">${L('Umsetingarstig','Conversion')}</div><div class="v">${Math.round(ts/to*100)}<small> %</small></div><div class="d">${ts} ${L('undirskrivað','signed')} / ${to} ${L('sent','sent')}</div></div><div class="kpi"><div class="l">${L('Miðal søla av eykaútgerð','Avg. upsell')}</div><div class="v">${nf(aup/1000,1)}<small> t.kr.</small></div><div class="d">${L('eykaútgerð + tænasta fyri hvørt undirskrivað tilboð','add-ons + service per signed')}</div></div></div>
 <table class="dtbl"><thead><tr><th>${L('Seljari','Salesperson')}</th><th class="n">${L('Vitjanir','Visits')}</th><th class="n">${L('Tilboð','Offers')}</th><th class="n">${L('Undirskr.','Signed')}</th><th class="n">${L('Umset.','Conv.')}</th><th>${L('Miðal søla av eykaútgerð','Avg. upsell')}</th><th class="n">${L('Tænastuavtalur','Service agr.')}</th></tr></thead><tbody>
 ${R.map(r=>`<tr><td><b>${r.n}</b> <span class="demo inl">${t('demoS')}</span></td><td class="n">${r.v}</td><td class="n">${r.o}</td><td class="n">${r.s}</td><td class="n"><b>${Math.round(r.s/r.o*100)} %</b></td><td><div style="display:flex;gap:10px;align-items:center"><div class="hbar" style="flex:1"><i style="width:${r.up/mx*100}%"></i></div><b style="min-width:80px;text-align:right">${kr(r.up)}</b></div></td><td class="n">${r.svc} / ${r.s}</td></tr>`).join('')}</tbody></table>
 <div class="dgrid"><div class="dcard"><h4>${L('Opin tilboð og áminningar','Open offers and reminders')}</h4><table class="jt"><thead><tr><th>${L('Kundi','Customer')}</th><th>${L('Loysn','Solution')}</th><th>${L('Seljari','Salesperson')}</th><th class="n">${L('Dagar','Days')}</th><th>${L('Støða','Status')}</th></tr></thead><tbody>${open.map(o=>`<tr><td>${o.c}</td><td>${o.a}</td><td>${o.r}</td><td class="n">${o.d}</td><td><span class="st ${o.d>=7&&o.st!=='g'?'r':o.st}">${o.d>=7&&o.st!=='g'?'⏰ '+stl2.r:stl2[o.st]}</span></td></tr>`).join('')}</tbody></table><p class="hint" style="margin-top:10px">⏰ ${L('Áminning, um tilboð ikki er opnað ella undirskrivað eftir 7 dagar. Octopus kann skráseta hetta – skal váttast.','Reminder when an offer is not opened/signed after 7 days. Octopus can track – to confirm.')}</p></div>
 <div class="dcard"><h4>${L('Sølutrekt','Funnel')}</h4><div class="fun">${[[L('Vitjanir','Visits'),tv],[L('Send tilboð','Offers sent'),to],[L('Opnað','Opened'),Math.round(to*.86)],[L('Undirskrivað','Signed'),ts]].map(([l,n])=>`<div><span>${l}</span><i style="width:${n/tv*100}%"></i><b>${n}</b></div>`).join('')}</div>
 <h4 style="margin-top:22px">${L('Tænastuavtalur – avtalustig','Service agreements – tiers')}</h4><div class="fun">${[['Essential',.35],['Plus',.4],['VIP',.25]].map(([l,f])=>`<div><span>${l}</span><i style="width:${f*100}%;opacity:${.5+f}"></i><b>${Math.round(f*R.reduce((s,r)=>s+r.svc,0))}</b></div>`).join('')}</div></div></div>`;}
/* ---------- 3. installer job sheet ---------- */
function renderJob(){const v=v3c(),fo=FO(),c=CUST[S.cust],ty=S.choice,p=pkOf(ty),r=S.run[ty],g=ty==='gs'?ground():null,all=[...baseLines(ty),...acc(ty),...labour(ty)];const ph=Object.entries(v.att).flatMap(([k,a])=>a.map(x=>({...x,st:k})));
 const taken=Object.entries(S.photos).filter(([k,b])=>b).map(([k])=>t(k));
 document.getElementById('job').innerHTML=`<div class="noprint" style="display:flex;gap:10px;align-items:center;margin-bottom:18px;flex-wrap:wrap"><button class="btn s" onclick="go('sales')">← ${L('Aftur í appina','Back to app')}</button><button class="btn p" onclick="window.print()">🖨️ ${L('Prenta / PDF','Print / PDF')}</button><span class="demo">${t('demo')}</span>${v.signed?'':`<span class="tbc" style="font-size:11px">${L('Uppskot – verður endaligt, tá ið kundin hevur góðtikið','Draft – final once the customer has accepted')}</span>`}</div>
 <div class="draftw" data-w="${v.signed?'':L('UPPSKOT','DRAFT')}">
 <div class="sheet"><div class="jh"><div><div class="brand">${document.querySelector('.hud .brand').innerHTML}</div><div style="font-size:24px;font-weight:800;letter-spacing:-.02em;margin-top:14px">${L('Arbeiðsseðil · innlegging av hitapumpu','Job sheet · heat pump installation')}</div><div style="color:var(--mut);font-size:13px">${L('Til montørar','For installers')} · ${L('Tilboð','Quote')} ${QNO()} → ${L('verkætlan í BC (Projects/Jobs)','project in BC (Projects/Jobs)')}</div></div>
  <div style="text-align:right;font-size:12.5px"><span class="demo">${t('demo')}</span><div style="margin-top:8px">${v.signed?`✓ ${L('Góðtikið','Accepted')} ${v.signedAt} · ${v.signer} · ${v.method==='name'?L('navn','name'):'Samleikin'}`:L('Enn ikki góðtikið','Not accepted yet')}</div><div>${L('Ætlað innlegging','Planned install')}: ${fmtD((S.v3.signedMs||Date.now())+28*864e5)} (${t('demoS')})</div></div></div>
  <div class="jg" style="margin-top:20px"><div><span>${L('Kundi','Customer')}</span><b>${c.n}</b></div><div><span>${L('Bústaður','Address')}</span><b>${c.addr}</b></div><div><span>${L('Samband','Contact')}</span><b>+298 00 00 01 (${t('demoS')})</b></div>
  <div><span>${L('Loysn','Solution')}</span><b>${solName(ty)}</b></div><div><span>${L('Pakki / stykklisti úr BC','Package / BC BOM')}</span><b>${pkName(p)} · ${p.bom}</b></div><div><span>${L('Seljari','Salesperson')}</span><b>${SELLER.n}</b></div>
  <div><span>${L('Núverandi hitaskipan (skal takast niður)','Current heating (to remove)')}</span><b>${baseName()}</b></div><div><span>${L('Tænastuavtala','Service agreement')}</span><b>${S.svc?SVC[S.svc].tier:L('Eingin','None')}</b></div><div><span>${L('Hitatørvur','Heat demand')}</span><b>${nf(demand().Q)} kWh/${L('ár','yr')} · ${nf(demand().Pd,1)} kW</b></div></div></div>
 <div class="sheet"><h2>1 · ${L('Stykklisti (BOM)','Bill of materials (BOM)')}</h2><table class="jt"><thead><tr><th></th><th>${L('Vørunr.','Item no.')}</th><th>${L('Lýsing','Description')}</th><th class="n">${L('Nøgd','Qty')}</th><th>${L('Regla','Rule')}</th></tr></thead><tbody>${all.map(l=>`<tr><td><span class="ck"></span></td><td>${l.no}</td><td>${l.d}</td><td class="n"><b>${nf(l.q)} ${t(l.u)}</b></td><td style="color:var(--mut);font-size:11px">${l.rule||''}</td></tr>`).join('')}${addOn().map(a=>`<tr><td><span class="ck"></span></td><td>${L('Eykaútgerð','Add-on')}</td><td>${fo?a.fo:a.en}</td><td class="n"><b>1</b></td><td></td></tr>`).join('')}</tbody></table><p class="hint" style="margin-top:8px">${L('Eingir prísir eru á arbeiðsseðlinum. Nøgdirnar eru úr stykklistanum í BC og mátingum á staðnum.','No prices on the job sheet. Quantities from the BC BOM + site measurements.')}</p></div>
 <div class="sheet"><h2>2 · ${L('Rørleiðing og frástøður','Pipe route and distances')}</h2><div style="display:grid;grid-template-columns:1.3fr 1fr;gap:24px;align-items:start"><div style="background:#f6f6f0;border-radius:14px;padding:10px">${runViz(ty)}</div>
  <table class="jt"><tbody><tr><td>${ty==='gs'?L('Hús → borihol/kollektara (L)','House → borehole/collector (L)'):L('Rørleiðing (L)','Pipe run (L)')}</td><td class="n"><b>${nf(r.len,1)} m</b></td></tr><tr><td>${L('Gjøgnumbrot','Penetrations')}</td><td class="n"><b>${r.pen}</b></td></tr><tr><td>${L('Hæddarmunur','Height difference')}</td><td class="n"><b>${nf(r.h,1)} m</b></td></tr>
  <tr><td>${L('Tøknirúm (B×D×H)','Utility room (W×D×H)')}</td><td class="n"><b>${S.indoor.w}×${S.indoor.d}×${S.indoor.h} mm</b></td></tr><tr><td>${L('Frítt pláss frammanfyri','Front clearance')}</td><td class="n"><b>${S.indoor.front} mm</b></td></tr>
  ${ty==='aw'?`<tr><td>${L('Útieind: festing','Outdoor unit: mounting')}</td><td class="n"><b>${({ground:L('stativ á jørð','ground stand'),wall:L('veggfesting','wall bracket'),corner:L('í horni','corner')})[S.outdoor.mount]}</b></td></tr><tr><td>${L('Frástøða aftanfyri / til síðuna / omanfyri','Clearance behind / side / above')}</td><td class="n"><b>${S.outdoor.behind} / ${S.outdoor.side} / ${S.outdoor.above} mm</b></td></tr>${S.noiseOn?`<tr><td>${L('Frástøða til markið hjá grannanum','To neighbour boundary')}</td><td class="n"><b>${nf(S.outdoor.neigh,1)} m · ${nf(noiseRaw(),1)} dB(A)</b></td></tr>`:''}`:''}
  ${g?`<tr><td>${g.kind==='bore'?L('Borihol','Boreholes'):L('Jarðslanga','Ground loop')}</td><td class="n"><b>${g.kind==='bore'?`${g.holes} × ${g.per} m`:`${nf(g.Lc)} m`}</b></td></tr><tr><td>${L('Kølivæska','Brine')}</td><td class="n"><b>${nf(g.q,2)} l/s</b></td></tr>`:''}
  <tr><td>${L('Høvuðstrygging / RCD','Main fuse / RCD')}</td><td class="n"><b>${S.el.fuse} A / ${S.el.rcd?'✓':'✕'}</b></td></tr><tr><td>${L('Frárenning','Drain')}</td><td class="n"><b>${S.el.drain}</b></td></tr></tbody></table></div></div>
 <div class="sheet"><h2>3 · ${L('Myndir frá vitjanini','Photos from the visit')} (${ph.length})</h2><div class="jph">${ph.map(x=>`<figure><img src="${x.src}" alt=""><figcaption>${stl(x.st)} · ${x.lb}</figcaption></figure>`).join('')}</div><p class="hint" style="margin-top:10px">${L('Eisini tikið myndir av','Also captured')}: ${taken.join(' · ')||'—'}</p></div>
 <div class="sheet"><h2>4 · ${L('Staðarviðmerkingar og ávaringar','Site notes and warnings')}</h2><ul style="font-size:13px;line-height:1.7;margin:0 0 0 18px">${checks().filter(z=>!z.ok).map(z=>`<li>⚠️ ${z.k}: ${z.v}</li>`).join('')}<li>${S.notes||L('Hundurin er vinarligur. Lykilin er hjá grannanum á nr. 14 (dømi).','The dog is friendly. Key with the neighbour at no. 14 (example).')}</li><li>${L('Boreloyvi – kommunan','Drilling permit – municipality')}: ${!APPS().length?noAppTxt():v.signed?(fo?APST[apprState('bore')][0]:APST[apprState('bore')][1])+' · '+L('MP tekur sær av hesum','handled by MP'):L('byrjar, tá ið kundin góðtekur','starts when the customer accepts')}${APPS().length&&apprState('bore')<3?' · '+L('Bora ikki, fyrr enn loyvið er góðkent','Do not drill before the permit is approved'):''}</li></ul>
 <div style="display:grid;grid-template-columns:1fr 1fr;gap:30px;margin-top:30px;font-size:12px;color:var(--mut)"><div style="border-top:1px solid #999;padding-top:6px">${L('Montørur, dagfesting','Installer, date')}</div><div style="border-top:1px solid #999;padding-top:6px">${L('Kundi, dagfesting (yvirtøka)','Customer, date (handover)')}</div></div></div></div>`;}
/* ---------- routing ---------- */
go=function(v){S.view=v;history.replaceState(null,'',v==='offer'?'#offer':v==='dash'?'#dash':v==='job'?'#job':'#sales/'+S.sid);render();window.scrollTo(0,0)};
const _render=render;render=function(){const v=S.view;const ex=v==='dash'||v==='job';
 if(!ex){document.getElementById('dash').style.display='none';document.getElementById('job').style.display='none';_render();}
 else{document.documentElement.lang=S.lang;document.querySelectorAll('[data-t]').forEach(el=>el.textContent=t(el.dataset.t));document.querySelectorAll('#langSeg button').forEach(b=>b.classList.toggle('on',b.dataset.l===S.lang));
  document.getElementById('sales').style.display='none';document.getElementById('offer').style.display='none';document.body.classList.add('offer');
  document.getElementById('dash').style.display=v==='dash'?'block':'none';document.getElementById('job').style.display=v==='job'?'block':'none';v==='dash'?renderDash():renderJob();}
 document.querySelectorAll('#viewSeg button').forEach(b=>b.classList.toggle('on',b.dataset.v===v||(v==='job'&&b.dataset.v==='sales')));document.getElementById('chatFab').style.display=ex?'none':'';};
document.querySelectorAll('#viewSeg button').forEach(b=>b.onclick=()=>go(b.dataset.v));
document.querySelectorAll('#langSeg button').forEach(b=>b.onclick=()=>{S.lang=b.dataset.l;render()});

/* ===== v3.2: responsive shell (phone / tablet / desktop), native feel, PWA, theme ===== */
document.head.insertAdjacentHTML('beforeend',`<style>
:root{--hudH:70px;--tabH:0px;--sat:env(safe-area-inset-top,0px);--sab:env(safe-area-inset-bottom,0px);--sal:env(safe-area-inset-left,0px);--sar:env(safe-area-inset-right,0px)}
html{-webkit-text-size-adjust:100%;text-size-adjust:100%;scroll-padding-top:calc(var(--hudH) + var(--sat) + 70px)}
body{min-height:100vh;min-height:100dvh;-webkit-tap-highlight-color:rgba(41,81,53,.12);overflow-x:hidden}
@supports (overflow-x:clip){body{overflow-x:clip}}
.hud{height:calc(var(--hudH) + var(--sat));padding-top:var(--sat);padding-left:max(clamp(14px,2.4vw,40px),var(--sal));padding-right:max(clamp(14px,2.4vw,40px),var(--sar))}
.hud .seg button{display:inline-flex;align-items:center;justify-content:center}.hud .demo.ds{display:none}
.sbar{display:none!important}
/* ---------- sales app shell ---------- */
#sales{grid-template-columns:clamp(220px,16vw,270px) minmax(0,1fr) clamp(300px,22vw,360px);gap:clamp(18px,2vw,32px);max-width:1880px;margin:0 auto;padding:24px max(clamp(16px,2.4vw,40px),var(--sar)) 40px max(clamp(16px,2.4vw,40px),var(--sal));align-items:start;justify-items:stretch}
.side{position:sticky;top:calc(var(--hudH) + var(--sat) + 20px);max-height:calc(100dvh - var(--hudH) - var(--sat) - 40px);overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;-webkit-overflow-scrolling:touch;max-width:none;width:auto}
.side .h{font-size:clamp(20px,1.6vw,26px)}.side p{font-size:13px}
.device{width:auto;height:auto;border-radius:var(--radius);background:none;padding:0;box-shadow:var(--shadow)}
.screen{height:auto;border-radius:var(--radius);overflow:clip;border:1px solid var(--line);background:var(--bg)}
.apphead{position:sticky;top:calc(var(--hudH) + var(--sat));z-index:20;padding:12px clamp(16px,2.6vw,32px)}
.apphead .row{flex-wrap:wrap}
.body{flex:none;overflow:visible;padding:22px clamp(16px,3vw,40px) 30px}
.body .stepin{max-width:880px;margin:0 auto}
.foot{position:sticky;bottom:0;z-index:20;padding:12px clamp(16px,3vw,40px) calc(12px + var(--sab))}
.foot .btn{max-width:420px}.foot #prevBtn{margin-right:auto}
.stepnav{display:grid;gap:4px;margin-top:18px}
.stepnav button{display:flex;align-items:center;gap:10px;min-height:44px;padding:6px 10px;border-radius:14px;text-align:left;font-size:13px;font-weight:600;color:var(--mut);transition:background .3s var(--ease)}
.stepnav button i{flex:none;width:26px;height:26px;border-radius:50%;display:grid;place-items:center;font-style:normal;font-size:11px;font-weight:800;background:var(--bg2);color:var(--mut)}
.stepnav button.done i{background:var(--acc2);color:#fff}.stepnav button.on{background:var(--surface2);color:var(--acc);box-shadow:0 10px 30px -18px rgba(25,63,36,.5)}.stepnav button.on i{background:var(--acc);color:#fff}
@media (hover:hover){.stepnav button:hover{background:var(--bg2)}}
.livebtn{display:none;align-items:center;gap:6px;min-height:36px;padding:6px 12px;border-radius:99px;background:var(--acc);color:#fff;font-size:12px;font-weight:800;white-space:nowrap}
.tabbar{display:none}
.osum{position:fixed;left:50%;bottom:calc(18px + var(--sab));transform:translate(-50%,140%);z-index:55;display:none;align-items:center;gap:14px;width:min(760px,calc(100vw - 32px));padding:10px 10px 10px 20px;border-radius:99px;background:var(--hud);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border:1px solid var(--line2);box-shadow:var(--shadow);transition:transform .6s var(--ease)}
body.offer .osum{display:flex}.osum.show{transform:translate(-50%,0)}
.osum .os{flex:1;min-width:0;font-size:12px;color:var(--mut);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.osum .os b{display:block;font-size:14px;color:var(--ink)}
.osum .ot{font-size:18px;font-weight:800;color:var(--acc);white-space:nowrap;letter-spacing:-.02em}
.osum button{min-height:44px;padding:0 20px;border-radius:99px;background:var(--acc);color:#fff;font-weight:800;font-size:13.5px;white-space:nowrap}
body.offer .chatfab{bottom:calc(22px + var(--sab))}
@media (min-width:1000px) and (max-width:1500px){body.offer .chatfab{bottom:calc(86px + var(--sab))}}
#dash{max-width:1600px}
.tscroll{overflow-x:auto;-webkit-overflow-scrolling:touch;overscroll-behavior-x:contain;max-width:100%}
@media (max-width:1320px){.hud .sub{display:none}}
@media (max-width:1100px){.hud .v3b{display:none}.hud{gap:12px}.hud .brand{width:130px}}
@media (max-width:1024px){.dtbl,.jt{display:block;overflow-x:auto;-webkit-overflow-scrolling:touch;max-width:100%}}
/* desktop ≥1200: 3 columns; dots replaced by sidebar step list */
@media (min-width:1200px){.dots{display:none}.apphead .prog{margin-bottom:0}}
/* tablet landscape / small desktop */
@media (max-width:1199px){#sales{grid-template-columns:minmax(0,1fr) clamp(280px,30vw,330px)}.side.l{display:none}}
/* tablet portrait & phones: app fills the screen */
@media (max-width:999px){#sales{display:block;padding:0}.side.r{display:none}.livebtn{display:inline-flex}.device{border-radius:0;box-shadow:none}.screen{border-radius:0;border:0}
 .body .stepin{max-width:720px}.foot .btn{max-width:none}}
/* phones */
@media (max-width:767px){:root{--hudH:56px;--tabH:64px}
 .hud{gap:10px}.hud .brand{width:112px}.hud .sub,.hud .v3b,#viewSeg{display:none}.hud .demo.dl{display:none}.hud .demo.ds{display:inline-flex;font-size:11px}.hud .seg button{min-height:36px!important;min-width:44px;position:relative}.hud .seg button:before{content:'';position:absolute;inset:-6px 0}.hud .spacer{flex:1}
 .apphead .t{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.apphead .net{min-height:30px!important;position:relative}.apphead .net:before{content:'';position:absolute;inset:-8px -2px}.livebtn{min-height:34px}.apphead .av{width:36px;height:36px}
 body{padding-bottom:calc(var(--tabH) + var(--sab))}
 .tabbar{display:flex;position:fixed;left:0;right:0;bottom:0;z-index:70;height:calc(var(--tabH) + var(--sab));padding:0 var(--sar) var(--sab) var(--sal);background:var(--hud);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border-top:1px solid var(--line)}
 .tabbar button{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;min-height:44px;font-size:10.5px;font-weight:700;color:var(--mut)}
 .tabbar svg{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}.tabbar button.on{color:var(--acc)}
 .apphead{padding:10px max(16px,var(--sal)) 10px max(16px,var(--sar))}.apphead .t{font-size:14px}
 .body{padding:16px max(16px,var(--sal)) 22px max(16px,var(--sar))}
 .foot{bottom:calc(var(--tabH) + var(--sab));padding:10px max(16px,var(--sal)) 10px max(16px,var(--sar))}
 .modal{align-items:flex-end;padding:0}.mbox,.mbox.wide{max-width:none;width:100%;border-radius:24px 24px 0 0;max-height:92dvh;overflow:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;padding:22px max(18px,var(--sal)) calc(22px + var(--sab)) max(18px,var(--sar))}
 .sec{padding:52px max(18px,var(--sal)) 52px max(18px,var(--sar))}.hero{min-height:560px}.hero .in{padding:40px 18px}.hero .sol{flex-direction:row}.hero .sol img{width:80px;height:80px}
 .kpi .v{font-size:36px}.kgrid{grid-template-columns:1fr 1fr 1fr}
 .tbl,.dtbl,.jt,.stbl,.ftbl{display:block;overflow-x:auto;-webkit-overflow-scrolling:touch;max-width:100%}
 .dk{grid-template-columns:1fr 1fr;gap:10px}.dk .kpi{padding:16px}.after{grid-template-columns:1fr}.jg{grid-template-columns:1fr}.jph{grid-template-columns:1fr 1fr}.sheet{padding:20px 18px}
 #dash,#job{padding:24px max(16px,var(--sal)) 40px max(16px,var(--sar))}.fun div{grid-template-columns:90px 1fr 40px}
 .osum{left:0;right:0;width:auto;transform:translateY(140%);bottom:calc(var(--tabH) + var(--sab));border-radius:20px 20px 0 0;padding:10px 12px 10px 16px;border-bottom:0}.osum.show{transform:none}.osum .ot{font-size:16px}
 body.offer .chatfab{bottom:calc(var(--tabH) + var(--sab) + 76px);right:14px;padding:12px}body.offer .chatfab [data-t]{display:none}
 .onav{justify-content:flex-start;-webkit-overflow-scrolling:touch;scrollbar-width:none}.onav::-webkit-scrollbar{display:none}
 .toast{bottom:calc(var(--tabH) + var(--sab) + 80px)}
}
.onav{top:calc(var(--hudH) + var(--sat))}
/* touch: 44px targets, no zoom on focus */
@media (pointer:coarse),(max-width:1024px){
 .chip,.dots button,.seg button,.capb button,.capb label,.pill,.anntb button,.onav a,.btn,.net{min-height:44px}
 .chip,.capb button,.capb label,.pill,.onav a,.net{display:inline-flex;align-items:center}
 .stepper button{min-width:44px;min-height:44px}.sw{position:relative}.sw:before{content:"";position:absolute;inset:-9px -4px}
 input[type=checkbox]{width:22px;height:22px;flex:none}
 input,select,textarea,.fld input,.fld select,.fld textarea,.anntb input{font-size:16px!important}
 .dots{-webkit-overflow-scrolling:touch;scroll-snap-type:x proximity}.dots button{scroll-snap-align:center}
}
/* reduced motion */
@media (prefers-reduced-motion:reduce){*,*:before,*:after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}.rv{opacity:1!important}.grain{display:none}}
/* dark theme (auto from prefers-color-scheme, or &theme=dark) */
html[data-theme=dark]{--bg:#0f1712;--bg2:#17221b;--surface:#152019;--surface2:#1b2820;--ink:#e8eee6;--ink2:#c7d2c9;--mut:#93a397;--acc:#3f8c5c;--line:rgba(160,185,168,.16);--line2:rgba(160,185,168,.3);--hud:rgba(15,23,18,.82);--shadow:0 30px 80px -30px rgba(0,0,0,.7);color-scheme:dark}
html[data-theme=dark] .logo-svg{color:#e8eee6}
html[data-theme=dark] :is(.tier,.appr,.dcard,.dtbl,.after .ac,.capb button,.capb label,.anntb button,.pick,.card,.kk,.cc,.addc,.doc,.pcard,.kpi,.panel){background:var(--surface2)!important;color:var(--ink)}
html[data-theme=dark] :is(.tier.on,.addc.on,.cc.on,.pick.on){background:#1f3427!important}
html[data-theme=dark] :is(.cap,.lockc){background:#131d17!important}
html[data-theme=dark] :is(.tbl .grp td,.tbl tfoot tr.gt td,.stbl tr.hl td,.dtbl th){background:#1f3427!important}.stbl tr.bl td{background:#1e1c14!important}
html[data-theme=dark] :is(.okbox,.signed){background:#173323!important;color:var(--ink)}
html[data-theme=dark] :is(.cc.base){background:#1b2219!important}
html[data-theme=dark] .fld input,html[data-theme=dark] .fld select,html[data-theme=dark] .fld textarea{background:var(--bg2)}
html[data-theme=dark] #job{--bg:#f6f6f0;--bg2:#eef0e8;--surface:#fefff4;--surface2:#fff;--ink:#152019;--ink2:#2b3a30;--mut:#5d6a61;--acc:#295135;--line:rgba(41,81,53,.14);--line2:rgba(41,81,53,.26);color:var(--ink)}
html[data-theme=dark] .mbox{background:var(--surface)}
html[data-theme=dark] .grain{opacity:.03}
@media print{.tabbar,.osum,.livebtn{display:none!important}html[data-theme=dark]{--bg:#fff;--ink:#152019}}
</style>`);
/* theme: auto follows the OS; &theme=light|dark forces */
(function(){const m=location.hash.match(/theme=(light|dark|auto)/),want=m?m[1]:'auto',mq=matchMedia('(prefers-color-scheme: dark)');
 const apply=()=>document.documentElement.dataset.theme=want==='auto'?(mq.matches?'dark':'light'):want;apply();mq.addEventListener&&mq.addEventListener('change',apply)})();
/* step sidebar, live sheet button, scroll-to-top on step change */
function renderStepNav(){const n=document.getElementById('stepNav');if(!n)return;const ST=steps(),idx=ST.indexOf(S.sid);
 n.innerHTML=`<div style="font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--mut);font-weight:700;margin-bottom:4px">${L('Stig','Steps')} · ${idx+1}/${ST.length}</div>`+ST.map((s,i)=>`<button class="${i===idx?'on':i<idx?'done':''}" onclick="gostep(${i})" ${i===idx?'aria-current="step"':''}><i>${i<idx?'✓':i+1}</i><span>${stl(s)}</span></button>`).join('');}
function liveBtnUI(){const b=document.getElementById('liveBtn');if(b)b.innerHTML=`📋 ${kr(totalWithAdd(S.choice).inc)}`}
function openLive(){modal(`<h3>${t('liveH')}</h3><span class="demo">${t('demo')}</span><div class="panel" style="margin-top:12px">${document.getElementById('livePanel').innerHTML}</div><div class="panel" style="margin-top:12px">${document.getElementById('bcPanel').innerHTML}</div><button class="btn p" style="width:100%;margin-top:14px" onclick="closeM()">${t('mClose')}</button>`)}
const _rs=renderSales;renderSales=function(){_rs();renderStepNav();liveBtnUI();const d=document.getElementById('dots');if(d){const on=d.querySelector('.on');if(on)d.scrollLeft=on.offsetLeft-d.clientWidth/2+on.clientWidth/2}};
const _live2=live;live=function(){_live2();liveBtnUI()};
const _gostep=gostep;gostep=function(i){_gostep(i);window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})};
/* tab bar + sticky offer summary */
function tabUI(){document.querySelectorAll('#tabbar button').forEach(b=>b.classList.toggle('on',b.dataset.v===S.view||(S.view==='job'&&b.dataset.v==='sales')))}
function osumUI(){const o=document.getElementById('osum');if(!o)return;o.style.display=S.view==='offer'?'':'none';if(S.view!=='offer')return;const v=v3c(),ty=S.choice,tt=totalWithAdd(ty);
 o.innerHTML=`<div class="os"><b>${solName(ty)}</b>${pkName(pkOf(ty))}${S.svc?' · '+SVC[S.svc].tier:''}</div><div class="ot">${kr(tt.inc)}</div>${v.signed?`<button onclick="openAccept()" style="background:var(--acc2)">✓ ${L('Góðtikið','Accepted')}</button>`:`<button onclick="openAccept()">✍️ ${L('Góðtak','Accept')}</button>`}`}
window.addEventListener('scroll',()=>{const o=document.getElementById('osum');if(o)o.classList.toggle('show',S.view==='offer'&&window.scrollY>window.innerHeight*.6)},{passive:true});
const _render3=render;render=function(){_render3();tabUI();osumUI();document.querySelectorAll('.tbl,.dtbl,.jt').forEach(()=>{});};
const _ro3=renderOffer;renderOffer=function(){_ro3();osumUI()};

function signerName(){const n=CUST[S.cust].n;if(!n.includes('&'))return n;const w=n.split(' ');return n.split(' &')[0]+' '+w[w.length-1]}
const _setvP=setv;setv=function(p,val,re){if(p==='v3.days')S.v3._simDays=1;_setvP(p,val,re)};
setInterval(()=>{const d=new Date(),c=document.getElementById('clock');if(c)c.textContent=String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0')},10000);
/* ===== proto.js – real prototype layer: visits in IndexedDB, routing, offers by token, mock API, dashboard from data ===== */
const PROTO={mode:'sales',vid:null,visits:[],offers:[],quotes:[],outbox:[],ready:false,_saveT:null,_lastSaved:''};
const bc=('BroadcastChannel' in window)?new BroadcastChannel('mp-heatpump-proto'):null;
const NOW=()=>Date.now(),DAY=864e5;
const QNO=()=>(S.v3&&S.v3.quoteNo)||L('SQ-DØMI-(ikki sent)','SQ-DØMI-(not sent)');
const uid=(n=10)=>Array.from(crypto.getRandomValues(new Uint8Array(n)),b=>'abcdefghjkmnpqrstuvwxyz23456789'[b%31]).join('');
const fmtD=ms=>new Date(ms).toLocaleDateString(FO()?'da-DK':'en-GB',{day:'numeric',month:'short',year:'numeric'});
/* ---- which parts of S belong to a visit ---- */
const NON_VISIT=['lang','view','_sec','_open','_internal'];
const pickState=(o=S)=>{const r={};for(const k of Object.keys(o))if(!NON_VISIT.includes(k))r[k]=o[k];return JSON.parse(JSON.stringify(r))};
let TEMPLATE=null;
function freshState(custIdx){const s=JSON.parse(JSON.stringify(TEMPLATE));s.cust=custIdx;s.sid='sol';s.date=new Date().toISOString().slice(0,10);
 s.v3=Object.assign(s.v3,{queue:[],att:{},appr:{},signed:false,signer:'',signedAt:null,method:null,opened:false,days:0,snooze:false,nudged:false,sentAt:null,offerToken:null,quoteNo:null,openedAt:null,_seed:1,lastSync:0});
 s.notes='';return s}
/* ---- run calculations for another visit's state (calc code reads global S) ---- */
function withState(st,fn){const keep=S;S=Object.assign(JSON.parse(JSON.stringify(TEMPLATE)),JSON.parse(JSON.stringify(st)),{lang:keep.lang,view:keep.view});try{return fn()}finally{S=keep}}
const offerTotals=st=>withState(st,()=>({total:totalWithAdd(S.choice).inc,upsell:addonSum(),choice:S.choice,svc:S.svc,sols:S.sols.slice()}));
/* ---- persistence ---- */
async function refreshCache(){[PROTO.visits,PROTO.offers,PROTO.quotes,PROTO.outbox]=await Promise.all(['visits','offers','quotes','outbox'].map(s=>DB.all(s)));PROTO.visits.sort((a,b)=>b.updated-a.updated)}
const curVisit=()=>PROTO.visits.find(v=>v.id===PROTO.vid);
function scheduleSave(){if(PROTO.mode!=='sales'||!PROTO.vid)return;clearTimeout(PROTO._saveT);PROTO._saveT=setTimeout(saveVisit,350)}
async function saveVisit(){if(!PROTO.vid)return;const st=pickState(),js=JSON.stringify(st);if(js===PROTO._lastSaved)return;
 const rec=(await DB.get('visits',PROTO.vid))||{id:PROTO.vid,created:NOW(),seller:SELLER.n};
 const dv=rec.state&&rec.state.v3; // customer may have signed in another tab meanwhile: never overwrite that
 if(dv&&dv.signed&&!S.v3.signed){for(const k of ['signed','signer','signedAt','method','opened','openedAt'])S.v3[k]=dv[k];}
 else if(dv&&dv.opened&&!S.v3.opened){S.v3.opened=true;S.v3.openedAt=dv.openedAt}
 rec.state=pickState();rec.updated=NOW();rec.cust=CUST[S.cust].id;PROTO._lastSaved=JSON.stringify(rec.state);await DB.put('visits',rec);
 const i=PROTO.visits.findIndex(v=>v.id===rec.id);if(i>=0)PROTO.visits[i]=rec;else PROTO.visits.unshift(rec)}
async function loadVisit(id){const rec=await DB.get('visits',id);if(!rec)return false;PROTO.vid=id;
 const st=Object.assign(JSON.parse(JSON.stringify(TEMPLATE)),rec.state);for(const k of Object.keys(st))S[k]=st[k];
 if(S.v3.sentAt){const real=Math.floor((NOW()-S.v3.sentAt)/DAY);if(!S.v3._simDays)S.v3.days=real}
 S.v3.online=NET.online;PROTO._lastSaved=JSON.stringify(pickState());return true}
/* ---- routing:  #/  #/v/<id>/<step>  #/v/<id>/offer  #/v/<id>/job  #/dash ---- */
function hashFor(v){const id=PROTO.vid;return v==='home'?'#/':v==='dash'?'#/dash':v==='offer'?`#/v/${id}/offer`:v==='job'?`#/v/${id}/job`:`#/v/${id}/${S.sid}`}
go=function(v){if(['sales','offer','job'].includes(v)&&!PROTO.vid)v='home';S.view=v;history.replaceState(null,'',hashFor(v));render();window.scrollTo(0,0)};
const _gostepP=gostep;gostep=function(i){_gostepP(i);history.replaceState(null,'',hashFor('sales'))};
async function route(){const h=location.hash.replace(/^#\/?/,'');const m=h.match(/^v\/([^/]+)\/?([a-z]*)/);
 if(m&&await loadVisit(m[1])){const st=m[2];if(st==='offer')S.view='offer';else if(st==='job')S.view='job';else{S.view='sales';if(st&&STL[st])S.sid=st}}
 else if(h.startsWith('dash'))S.view='dash';else S.view='home';
 history.replaceState(null,'',hashFor(S.view));render()}
/* ---- home: visits list ---- */
function vStatus(st){const v=st.v3||{};if(v.signed)return ['g',L('Góðtikið','Accepted')];if(v.sentAt&&v.opened)return['o',L('Opnað','Opened')];if(v.sentAt)return['s',L('Sent','Sent')];return['d',L('Kladda','Draft')]}
function renderHome(){const fo=FO(),vs=PROTO.visits,me=SELLER.n;
 const mine=vs.filter(v=>v.seller===me),open=mine.filter(v=>v.state.v3.sentAt&&!v.state.v3.signed),due=open.filter(v=>(NOW()-v.state.v3.sentAt)/DAY>=7);
 const isIOS=/iPhone|iPad|iPod/.test(navigator.userAgent),standalone=matchMedia('(display-mode: standalone)').matches||navigator.standalone;
 document.getElementById('home').innerHTML=`<div class="hwrap">
 <div class="hhead"><div><span class="kicker">${L('Hitapumpa · staðarvitjanir','Heat pump · site visits')}</span><div class="h2" style="margin-top:6px">${L('Góðan dag','Good day')}, ${me.split(' ')[0]}</div><p class="lead" style="margin-top:4px">${L('Royndarútgáva við dømisdáta – einki er tengt at BC, handlinum ella Samleikanum.','Prototype with example data – nothing is connected to BC, handil or Samleikin.')} <span class="demo inl">${t('demo')}</span></p></div>
  <button class="btn p big hnew" onclick="newVisit()">＋ ${L('Nýggj vitjan','New visit')}</button></div>
 <div class="hk"><div class="kpi"><div class="l">${L('Mínar vitjanir','My visits')}</div><div class="v">${mine.length}</div></div><div class="kpi"><div class="l">${L('Opin tilboð','Open offers')}</div><div class="v">${open.length}</div></div><div class="kpi"><div class="l">⏰ ${L('Áminningar','Reminders')}</div><div class="v" style="${due.length?'color:#b3412f':''}">${due.length}</div></div><div class="kpi"><div class="l">📶 ${L('Netsamband','Network')}</div><div class="v" style="font-size:22px;margin-top:14px">${NET.online?'● Online':'⚠ Offline'}</div><div class="d">${PROTO.outbox.length?PROTO.outbox.length+' '+L('bíðar eftir at verða flutt yvir í BC','queued for BC'):L('Alt er goymt á eindini','All saved on device')}</div></div></div>
 <div class="hl">${vs.map(v=>{const st=v.state,c=CUST[st.cust]||CUST[0],[k,lb]=vStatus(st),tot=v.total,days=st.v3.sentAt?Math.floor((NOW()-st.v3.sentAt)/DAY):null,nud=days!==null&&days>=7&&!st.v3.signed;
  return `<button class="vcard" onclick="openVisit('${v.id}')"><div class="av">${c.ini}</div><div class="vb"><b>${c.n}</b><span>${c.addr}</span><span>${st.sols.map(x=>SOLS[x][fo?'fo':'en']).join(' · ')}</span></div><div class="vr"><span class="st ${nud?'r':k}">${nud?'⏰ '+L('Áminning','Reminder'):lb}</span><small>${v.seller===me?'':v.seller+' · '}${fmtD(v.updated)}</small>${tot?`<b>${kr(tot)}</b>`:''}</div></button>`}).join('')||`<p class="hint">${L('Eingir vitjanir eru enn.','No visits yet.')}</p>`}</div>
 <div class="hfoot">${!standalone?`<div class="card" style="flex:1;min-width:260px"><h4>📲 ${L('Legg afturat á heimaskíggjan','Add to Home Screen')}</h4><p class="hint" style="margin:0">${isIOS?L('Safari: Trýst á Deil ⬆︎ → “Legg afturat á heimaskíggjan”. Síðani riggar appin eisini uttan netsamband.','Safari: tap Share ⬆︎ → “Add to Home Screen”. The app then also works offline.'):L('Chrome/Edge: Valmynd ⋮ → “Install app” / “Legg afturat á heimaskíggjan”.','Chrome/Edge: menu ⋮ → “Install app” / “Add to Home screen”.')}</p></div>`:''}
  <div class="card" style="flex:1;min-width:260px"><h4>🧪 ${L('Dømisdáta','Demo data')}</h4><p class="hint" style="margin:0 0 10px">${L('Øll dáta verða goymd á hesi eindini (IndexedDB). Royndar-API: CRM, stykklistar, prísir, tilboð og Samleikin.','All data lives only on this device (IndexedDB). Mock API: CRM, BOMs, prices, quotes, Samleikin.')}</p><button class="btn s" style="width:100%" onclick="confirmReset()">↺ ${L('Nullstilla dømisdáturnar','Reset demo data')}</button></div></div></div>`}
function openVisit(id){loadVisit(id).then(()=>{S.view=S.v3.sentAt&&S.sid!=='follow'?'sales':'sales';if(S.v3.sentAt)S.sid='follow';go('sales')})}
function newVisit(q=''){const list=CUST.map((c,i)=>({c,i})).filter(({c})=>!q||(c.n+c.addr+c.id).toLowerCase().includes(q.toLowerCase()));
 modal(`<h3>${L('Nýggj vitjan – vel ein kunda','New visit – pick a customer')}</h3><span class="demo">${t('demo')} · ${L('úr BC CRM (royndarútgáva)','from BC CRM (mock)')}</span>
 <div class="fld" style="margin:12px 0"><input type="search" id="nvq" value="${q}" placeholder="🔍 ${L('Leita eftir navni, bústaði ella KT-nummari.','Search name, address, contact no.')}" autocomplete="off" enterkeyhint="search" oninput="newVisitFilter(this.value)"></div>
 <div id="nvl">${list.map(({c,i})=>`<button class="pick" style="width:100%" onclick="createVisit(${i})"><div class="av">${c.ini}</div><div style="flex:1;text-align:left"><div class="n">${c.n}</div><div class="m">${c.addr}</div><div class="m"><span class="tag">${c.opp?t('opp')+' '+c.opp:t('contact')+' '+c.id}</span> ${FO()?c.src[0]:c.src[1]}</div></div></button>`).join('')}</div>
 <button class="btn s" style="width:100%;margin-top:10px" onclick="closeM()">${t('mCancel')}</button>`);document.getElementById('mbox').classList.add('wide')}
function newVisitFilter(q){const html=CUST.map((c,i)=>({c,i})).filter(({c})=>!q||(c.n+c.addr+c.id).toLowerCase().includes(q.toLowerCase())).map(({c,i})=>`<button class="pick" style="width:100%" onclick="createVisit(${i})"><div class="av">${c.ini}</div><div style="flex:1;text-align:left"><div class="n">${c.n}</div><div class="m">${c.addr}</div></div></button>`).join('');document.getElementById('nvl').innerHTML=html||`<p class="hint">${L('Eingin úrslit','No results')}</p>`}
async function createVisit(i){closeM();const id='V-'+uid(8),st=freshState(i);await DB.put('visits',{id,created:NOW(),updated:NOW(),seller:SELLER.n,cust:CUST[i].id,state:st});await refreshCache();await loadVisit(id);S.sid='sol';go('sales');toast(L('✓ Vitjan stovnað – goymd á eindini','✓ Visit created – saved on device'))}
function confirmReset(){modal(`<h3>↺ ${L('Nullstilla dømisdáturnar?','Reset demo data?')}</h3><p style="font-size:14px;margin:10px 0 16px">${L('Allar vitjanir, myndir, tilboð og tilboðsnummur á hesi eindini verða strikað, og dømisdáturnar verða løddar inn av nýggjum.','All visits, photos, offers and quote numbers on this device are deleted and the demo data is reloaded.')}</p><div style="display:flex;gap:10px"><button class="btn s" onclick="closeM()">${t('mCancel')}</button><button class="btn p" onclick="closeM();resetDemo()">${L('Nullstilla','Reset')}</button></div>`)}
async function resetDemo(){await DB.clear('visits','offers','quotes','outbox','meta');await seedDemo();await refreshCache();PROTO.vid=null;go('home');toast(L('✓ Dømisdáturnar eru nullstillaðar','✓ Demo data reset'))}
/* ---- seed demo data ---- */
async function seedDemo(){const sp=MOCK.salespeople.map(s=>s.n),now=NOW();let qn=1042;
 const specs=[
  {c:0,s:sp[0],sols:['aw','gs'],ch:'gs',svc:2,add:{therm:1,myup:1,filt:1},sent:3,opened:1,age:5,photos:1,sid:'follow'},
  {c:1,s:sp[0],sols:['aw'],ch:'aw',pk:{aw:'pana9'},svc:1,add:{filt:1},sent:9,opened:0,age:12},
  {c:2,s:sp[0],sols:['ea'],ch:'ea',svc:0,add:{},age:1,sid:'indoor'},
  {c:3,s:sp[1],sols:['aw','gs'],ch:'gs',svc:3,add:{therm:1,myup:1,filt:1,water:1},sent:20,opened:1,signed:16,age:24},
  {c:4,s:sp[1],sols:['aw'],ch:'aw',pk:{aw:'ctc12'},svc:2,add:{therm:1,filt:1,floor:1},sent:6,opened:1,age:8},
  {c:5,s:sp[1],sols:['ea','aw'],ch:'ea',svc:2,add:{filt:1},sent:30,opened:1,signed:27,age:33},
  {c:6,s:sp[2],sols:['aw'],ch:'aw',svc:0,add:{},sent:11,opened:0,age:14},
  {c:7,s:sp[3],sols:['gs'],ch:'gs',svc:3,add:{therm:1,myup:1},sent:15,opened:1,signed:12,age:18},
  {c:3,s:sp[3],sols:['aw'],ch:'aw',pk:{aw:'pana12'},svc:1,add:{therm:1},sent:4,opened:1,age:6}];
 for(const [n,x] of specs.entries()){const st=freshState(x.c);Object.assign(st,{sols:x.sols,choice:x.ch,svc:x.svc,addons:x.add,sid:x.sid||'sum'});if(x.pk)Object.assign(st.pk,x.pk);
  if(x.ch==='ea'){st.base.type='el';st.base.kwh=19000;st.base.eff=95}
  const id='V-DEMO'+n,created=now-x.age*DAY;
  if(x.photos){st.v3.att={indoor:[{src:sampleURL('room'),lb:L('Tøknirúm – Dømi','Utility room – sample'),k:'demo'}],outdoor:[{src:sampleURL(),lb:L('Útveggur – Dømi','Outside wall – sample'),k:'demo'}]}}
  let total=null;
  if(x.sent){const tt=offerTotals(st),sentAt=now-x.sent*DAY,token=uid(),qno='SQ-DØMI-'+(++qn);
   Object.assign(st.v3,{sentAt,offerToken:token,quoteNo:qno,opened:!!x.opened,openedAt:x.opened?sentAt+DAY:null,days:x.sent});
   if(x.signed){Object.assign(st.v3,{signed:true,signer:withState(st,signerName),method:'samleiki',signedAt:fmtD(now-x.signed*DAY),signedMs:now-x.signed*DAY});for(const a of APPSfor(st))st.v3.appr[a]=1}
   await DB.put('quotes',{no:qno,status:x.signed?'Accepted':'Open',readyForProject:!!x.signed,created:sentAt,visitId:id,cust:CUST[x.c].id,total:tt.total});
   await DB.put('offers',{token,visitId:id,quoteNo:qno,sentAt,openedAt:st.v3.openedAt,signedAt:x.signed?now-x.signed*DAY:null,seller:x.s,total:tt.total,upsell:tt.upsell,svc:x.svc,choice:x.ch,state:snapState(st)});total=tt.total}
  await DB.put('visits',{id,created,updated:x.sent?now-Math.min(x.sent,x.signed||x.sent)*DAY:created,seller:x.s,cust:CUST[x.c].id,state:st,total})}
 await DB.put('meta',{k:'quoteSeq',n:qn});await DB.put('meta',{k:'seeded',at:now})}
const APPSfor=st=>withState(st,()=>APPS().map(a=>a.id));
const snapState=st=>{const s=JSON.parse(JSON.stringify(st));s.v3.att={};s.v3.queue=[];return s};
/* ---- offer link (token + compressed snapshot so it also opens on another device) ---- */
async function packSnap(o){const js=new TextEncoder().encode(JSON.stringify(o));if(!('CompressionStream' in window))return 'j'+btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
 const cs=new Blob([js]).stream().pipeThrough(new CompressionStream('deflate-raw'));const buf=new Uint8Array(await new Response(cs).arrayBuffer());let s='';buf.forEach(b=>s+=String.fromCharCode(b));return 'z'+btoa(s).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')}
async function unpackSnap(d){const b64=d.slice(1).replace(/-/g,'+').replace(/_/g,'/');const bin=atob(b64);if(d[0]==='j')return JSON.parse(decodeURIComponent(escape(bin)));
 const u=Uint8Array.from(bin,c=>c.charCodeAt(0));const ds=new Blob([u]).stream().pipeThrough(new DecompressionStream('deflate-raw'));return JSON.parse(await new Response(ds).text())}
async function offerLink(off){const d=await packSnap({token:off.token,quoteNo:off.quoteNo,sentAt:off.sentAt,seller:off.seller,visitId:off.visitId,state:off.state});return new URL('tilbod.html',location.href).href.split('#')[0]+'#t='+off.token+'&d='+d}
/* ---- send offer: BC quote (mock) + offer record + share link ---- */
sent=async function(){const st=pickState(),tt=offerTotals(st);let qno=S.v3.quoteNo,queued=false;
 if(!qno){try{const q=await API.bc.createSalesQuote({visitId:PROTO.vid,cust:CUST[S.cust].id,total:tt.total,lines:S.sols.length});qno=q.no}
  catch(e){if(!e.offline)throw e;queued=true;qno='SQ-LOKALT-'+uid(4).toUpperCase();await DB.put('quotes',{no:qno,status:'Pending sync',created:NOW(),visitId:PROTO.vid});await DB.put('outbox',{type:'createQuote',local:qno,visitId:PROTO.vid,at:NOW()});qPush('POST salesQuote (×'+S.sols.length+')')}}
 const token=S.v3.offerToken||uid();Object.assign(S.v3,{quoteNo:qno,offerToken:token,sentAt:S.v3.sentAt||NOW(),days:0,_simDays:0});
 const off={token,visitId:PROTO.vid,quoteNo:qno,sentAt:S.v3.sentAt,openedAt:null,signedAt:null,seller:SELLER.n,total:tt.total,upsell:tt.upsell,svc:S.svc,choice:S.choice,state:snapState(pickState())};
 await DB.put('offers',off);await saveVisit();await refreshCache();const link=await offerLink(off);PROTO.lastLink=link;
 modal(`<h3>✓ ${L('Tilboðið er klárt','The offer is ready')}</h3><span class="demo">${t('demo')}</span>
 <div class="bcok">${queued?L('💾 Uttan netsamband – sølutilboðið bíðar í bíðirøðini og verður stovnað í BC (royndarútgáva), tá ið netsambandið er aftur.','💾 Offline – the sales quote is queued and will be created in BC (mock) when online.'):`POST salesQuotes → <b>${qno}</b> (mock)`}<br>${L('Tilboðsleinki','Offer link')}: tilbod.html#t=${token}</div>
 <p style="font-size:13px;color:var(--ink2);margin:0 0 12px">${L('Send leinkið til kundan (SMS/teldupost). Leinkið inniheldur tilboðið, so tað eisini kann latast upp á aðrari eind. Einki verður sent sjálvvirkandi.','Send the link to the customer (SMS/email). The link carries the offer, so it opens on another device too. Nothing is sent automatically.')}</p>
 <div style="display:grid;gap:8px">${navigator.share?`<button class="btn p" onclick="navigator.share({title:'Tilboð – Maria Poulsen (Dømi)',url:PROTO.lastLink}).catch(()=>{})">📤 ${L('Deil leinkið','Share link')}</button>`:''}
 <button class="btn s" onclick="navigator.clipboard&&navigator.clipboard.writeText(PROTO.lastLink).then(()=>toast(L('✓ Leinkið er avritað','✓ Link copied')))">📋 ${L('Avrita leinkið','Copy link')}</button>
 <a class="btn s" style="text-align:center;text-decoration:none" href="${link}" target="_blank" rel="noopener">↗ ${L('Opna sum kundi','Open as customer')}</a>
 <button class="btn s" onclick="closeM();S.sid='follow';go('sales')">${L('Far til eftirfylging','Go to follow-up')} →</button></div>`);document.getElementById('mbox').classList.add('wide')};
/* ---- signing (Samleikin mock via API) ---- */
smlStart=async function(){const b=document.getElementById('smlBox');b.innerHTML=`<div style="border:1.5px solid var(--line);border-radius:18px;padding:18px;text-align:center;background:var(--surface2)"><div style="font-weight:800;font-size:15px">Samleikin <span class="demo inl">${L('mock','mock')}</span></div>
 <div style="font-size:13px;color:var(--ink2);margin:8px 0 12px">${L('Opna Samleika-appina á telefonini og vátta við PIN-kotu','Open the Samleikin app on your phone and confirm with your PIN')}</div><div style="font-size:30px;letter-spacing:.3em;font-weight:800;color:var(--acc)">• • • •</div><div style="font-size:11.5px;color:var(--mut);margin-top:8px">⟳ ${L('Bíðar eftir váttan…','Waiting for confirmation…')}</div></div>`;
 const r=await API.samleikin.sign({name:signerName()});PROTO._sml=r;doSign('samleiki')};
const _doSign=doSign;doSign=function(m){_doSign(m);const v=S.v3;if(m==='samleiki'&&PROTO._sml)v.signer=PROTO._sml.name;v.signedAt=fmtD(NOW());v.signedMs=NOW();onSigned();};
async function onSigned(){const v=S.v3;let off=v.offerToken&&await DB.get('offers',v.offerToken);
 if(!off&&PROTO.mode==='sales'){await sent();closeM();off=await DB.get('offers',S.v3.offerToken)}
 if(off){const tt=offerTotals(pickState());Object.assign(off,{signedAt:NOW(),signer:v.signer,method:v.method,openedAt:off.openedAt||NOW(),total:tt.total,upsell:tt.upsell,svc:S.svc,choice:S.choice,state:Object.assign(snapState(pickState()))});await DB.put('offers',off)}
 const qno=v.quoteNo;if(qno){try{await API.bc.acceptQuote(qno,{name:v.signer})}catch(e){if(e.offline){await DB.put('outbox',{type:'acceptQuote',no:qno,name:v.signer,at:NOW()});qPush('PATCH salesQuote accepted')}}}
 const vid=PROTO.mode==='sales'?PROTO.vid:(off&&off.visitId);const rec=vid&&await DB.get('visits',vid);
 if(rec){const sv=rec.state.v3;for(const k of ['signed','signer','signedAt','signedMs','method'])sv[k]=v[k];sv.opened=true;sv.openedAt=sv.openedAt||NOW();for(const k of ['choice','svc','addons'])rec.state[k]=JSON.parse(JSON.stringify(S[k]));for(const a of withState(rec.state,()=>APPS().map(a=>a.id)))if(sv.appr[a]===undefined)sv.appr[a]=0;rec.updated=NOW();rec.total=off?off.total:rec.total;await DB.put('visits',rec);if(PROTO.mode==='sales'){S.v3.appr=sv.appr;PROTO._lastSaved=JSON.stringify(rec.state)}}
 else if(PROTO.mode==='customer'){const n=document.querySelector('#mbox .bcok');n&&n.insertAdjacentHTML('beforeend',`<br>${L('// Royndarútgáva: Eingin søluappdáta eru á hesi eindini – í veruligu loysnini verður undirskriftin send til MP/BC.','// Prototype: this device has no sales app data – in the real solution the signature goes to MP/BC.')}`)}
 bc&&bc.postMessage({type:'signed',token:v.offerToken,visitId:vid});await refreshCache()}
/* ---- simulated sign in sales follow-up also persists ---- */
const _simSign=simSign;simSign=function(){const was=S.v3.signed;_simSign();if(!was&&S.v3.signed){S.v3.method='samleiki';S.v3.signedAt=fmtD(NOW());onSigned()}else scheduleSave()};
/* ---- follow-up: real dates, not-sent state ---- */
const _followHTML=followHTML;followHTML=function(){const v=S.v3;let h=_followHTML();
 if(!v.sentAt)h=h.replace('<div class="card">',`<div class="nudge" style="background:#eef5ef;border-color:#b9e0c6"><b>📨 ${L('Ikki er sent tilboðið enn','The offer has not been sent yet')}</b><p style="color:var(--ink2)">${L('Far til samandráttin og send tilboðið – tá verður leinkið og BC-tilboðið (royndarútgáva) stovnað.','Go to the summary and send the offer – that creates the link and the BC quote (mock).')}</p><div class="capb"><button class="hi" onclick="S.sid='sum';go('sales')">→ ${stl('sum')}</button></div></div><div class="card">`);
 else h=h.replace('<div class="card">',`<div class="card"><h4>🔗 ${L('Tilboðsleinki','Offer link')} <span class="demo inl">${t('demoS')}</span></h4><div class="capb"><button onclick="copyOfferLink()">📋 ${L('Avrita','Copy')}</button><button onclick="openOfferLink()">↗ ${L('Opna sum kundi','Open as customer')}</button></div><p class="hint" style="margin-top:6px">${L('Sent','Sent')} ${fmtD(v.sentAt)} · ${v.quoteNo}${v.openedAt?' · '+L('opnað','opened')+' '+fmtD(v.openedAt):''}</p></div><div class="card">`);
 return h};
async function curLink(){const off=await DB.get('offers',S.v3.offerToken);return off&&offerLink(off)}
async function copyOfferLink(){const l=await curLink();if(l&&navigator.clipboard)navigator.clipboard.writeText(l).then(()=>toast(L('✓ Leinkið er avritað','✓ Link copied')))}
async function openOfferLink(){const l=await curLink();if(l)window.open(l,'_blank','noopener')}
/* ---- real photos: resize and keep in IndexedDB with the visit ---- */
addFile=function(id,inp){const f=inp.files[0];if(!f)return;const img=new Image(),u=URL.createObjectURL(f);img.onload=()=>{const m=1600,k=Math.min(1,m/Math.max(img.width,img.height)),c=document.createElement('canvas');c.width=Math.round(img.width*k);c.height=Math.round(img.height*k);c.getContext('2d').drawImage(img,0,0,c.width,c.height);URL.revokeObjectURL(u);
 att(id).push({src:c.toDataURL('image/jpeg',.82),lb:(f.name||'IMG').slice(0,22)+' · '+new Date().toLocaleTimeString(FO()?'da-DK':'en-GB',{hour:'2-digit',minute:'2-digit'}),k:'file'});qPush('photo '+id);render();toast(L('✓ Myndin er goymd á eindini','✓ Photo saved on device'))};img.onerror=()=>toast('⚠️ '+L('Kundi ikki lesa myndina','Could not read the photo'));img.src=u};
/* ---- network: real navigator.onLine + manual "simulate offline", outbox flush through the mock API ---- */
toggleNet=function(){NET.sim=!NET.sim;netChanged()};
async function netChanged(){const v=S.v3,was=v.online;v.online=NET.online;
 if(v.online&&!was){v.syncing=true;render();await flushOutbox();await wait(900);const n=v.queue.length;v.queue=[];v.syncing=false;v.lastSync=n||PROTO._flushed||0;render();scheduleSave();toast(L('✓ Samstillað við BC (royndarútgáva)','✓ Synced to BC (mock)'))}
 else{render();if(!v.online)toast(L('Uttan netsamband – alt verður goymt á eindini','Offline – everything is saved on the device'))}}
async function flushOutbox(){const ob=await DB.all('outbox');PROTO._flushed=ob.length;for(const o of ob){try{
  if(o.type==='createQuote'){const q=await API.bc.createSalesQuote({visitId:o.visitId});const rec=await DB.get('visits',o.visitId);if(rec&&rec.state.v3.quoteNo===o.local){rec.state.v3.quoteNo=q.no;await DB.put('visits',rec)}if(PROTO.vid===o.visitId&&S.v3.quoteNo===o.local)S.v3.quoteNo=q.no;
   const offs=(await DB.all('offers')).filter(f=>f.quoteNo===o.local);for(const f of offs){f.quoteNo=q.no;await DB.put('offers',f)}await DB.del('quotes',o.local)}
  if(o.type==='acceptQuote')await API.bc.acceptQuote(o.no,{name:o.name});await DB.del('outbox',o.id)}catch(e){if(e.offline)break}}await refreshCache()}
window.addEventListener('online',netChanged);window.addEventListener('offline',netChanged);
/* ---- dashboard computed from stored visits/offers ---- */
renderDash=function(){const fo=FO(),days=S.v3.period==='q'?90:30,since=NOW()-days*DAY;const V=PROTO.visits.filter(v=>v.created>=since),O=PROTO.offers;
 const reps=MOCK.salespeople.map(p=>{const vs=V.filter(v=>v.seller===p.n),sent=vs.filter(v=>v.state.v3.sentAt),sg=sent.filter(v=>v.state.v3.signed),offs=sg.map(v=>O.find(o=>o.visitId===v.id)).filter(Boolean);
  return {n:p.n,v:vs.length,o:sent.length,s:sg.length,up:offs.length?offs.reduce((s,o)=>s+o.upsell,0)/offs.length:0,svc:sg.filter(v=>v.state.svc).length}});
 const tv=reps.reduce((s,r)=>s+r.v,0),to=reps.reduce((s,r)=>s+r.o,0),ts=reps.reduce((s,r)=>s+r.s,0),sOffs=O.filter(o=>o.signedAt&&V.some(v=>v.id===o.visitId)),aup=sOffs.length?sOffs.reduce((s,o)=>s+o.upsell,0)/sOffs.length:0,mx=Math.max(1,...reps.map(r=>r.up)),opened=V.filter(v=>v.state.v3.sentAt&&v.state.v3.opened).length;
 const open=V.filter(v=>v.state.v3.sentAt).map(v=>({id:v.id,c:(CUST[v.state.cust]||{}).n,a:v.state.sols.map(x=>solName(x)).join(' + '),r:v.seller,d:Math.floor((NOW()-v.state.v3.sentAt)/DAY),st:v.state.v3.signed?'g':v.state.v3.opened?'o':'s'})).sort((a,b)=>(a.st==='g')-(b.st==='g')||b.d-a.d);
 const stl2={s:L('Sent','Sent'),o:L('Opnað','Opened'),g:L('Góðtikið','Accepted'),r:L('Áminning skal sendast','Reminder due')};const tiers=[1,2,3].map(n=>sOffs.filter(o=>o.svc===n).length);
 const pct=(a,b)=>b?Math.round(a/b*100):0;
 document.getElementById('dash').innerHTML=`<span class="kicker">${L('Sølu yvirlit','Sales dashboard')} · ${L('roknað út frá dátum, sum eru goymd á eindini','computed from data stored on the device')}</span><div class="h2" style="margin-top:6px">${L('Vitjanir, tilboð og sølutøl','Visits, offers and conversion')}</div>
 <div style="display:flex;gap:10px;align-items:center;margin-top:12px;flex-wrap:wrap"><div class="seg sm"><button class="${days===30?'on':''}" onclick="S.v3.period='m';renderDash()">${L('Seinastu 30 dagarnir','Last 30 days')}</button><button class="${days===90?'on':''}" onclick="S.v3.period='q';renderDash()">${L('Seinastu 90 dagarnar','Last 90 days')}</button></div><span class="demo">${t('demo')}</span></div>
 <div class="dk"><div class="kpi"><div class="l">${L('Vitjanir','Visits')}</div><div class="v">${tv}</div></div><div class="kpi"><div class="l">${L('Send tilboð','Offers sent')}</div><div class="v">${to}</div><div class="d">${pct(to,tv)} % ${L('av vitjanum','of visits')}</div></div>
 <div class="kpi"><div class="l">${L('Umsetingarstig','Conversion')}</div><div class="v">${pct(ts,to)}<small> %</small></div><div class="d">${ts} ${L('góðtikið','accepted')} / ${to}</div></div><div class="kpi"><div class="l">${L('Miðal søla av eykaútgerð','Avg. upsell')}</div><div class="v">${nf(aup/1000,1)}<small> t.kr.</small></div><div class="d">${L('eykaútgerð + tænasta (1. árið) fyri hvørt góðtikið tilboð','add-ons + service (yr 1) per accepted')}</div></div></div>
 <div class="tscroll"><table class="dtbl"><thead><tr><th>${L('Seljari','Salesperson')}</th><th class="n">${L('Vitjanir','Visits')}</th><th class="n">${L('Tilboð','Offers')}</th><th class="n">${L('Góðtikið','Accepted')}</th><th class="n">${L('Umset.','Conv.')}</th><th>${L('Miðal søla av eykaútgerð','Avg. upsell')}</th><th class="n">${L('Tænastuavtalur','Service agr.')}</th></tr></thead><tbody>
 ${reps.map(r=>`<tr><td><b>${r.n}</b> <span class="demo inl">${t('demoS')}</span></td><td class="n">${r.v}</td><td class="n">${r.o}</td><td class="n">${r.s}</td><td class="n"><b>${pct(r.s,r.o)} %</b></td><td><div style="display:flex;gap:10px;align-items:center"><div class="hbar" style="flex:1"><i style="width:${r.up/mx*100}%"></i></div><b style="min-width:80px;text-align:right">${kr(r.up)}</b></div></td><td class="n">${r.svc} / ${r.s}</td></tr>`).join('')}</tbody></table></div>
 <div class="dgrid"><div class="dcard"><h4>${L('Tilboð og áminningar','Offers and reminders')}</h4><div class="tscroll"><table class="jt"><thead><tr><th>${L('Kundi','Customer')}</th><th>${L('Loysn','Solution')}</th><th>${L('Seljari','Salesperson')}</th><th class="n">${L('Dagar','Days')}</th><th>${L('Støða','Status')}</th></tr></thead><tbody>${open.map(o=>{const r=o.d>=7&&o.st!=='g';return `<tr onclick="openVisit('${o.id}')" style="cursor:pointer"><td>${o.c}</td><td>${o.a}</td><td>${o.r}</td><td class="n">${o.d}</td><td><span class="st ${r?'r':o.st}">${r?'⏰ '+stl2.r:stl2[o.st]}</span></td></tr>`}).join('')}</tbody></table></div><p class="hint" style="margin-top:10px">⏰ ${L('Áminning, um tilboð ikki er góðtikið eftir 7 dagar.','Reminder when an offer is not accepted after 7 days.')}</p></div>
 <div class="dcard"><h4>${L('Sølutrekt','Funnel')}</h4><div class="fun">${[[L('Vitjanir','Visits'),tv],[L('Send tilboð','Offers sent'),to],[L('Opnað','Opened'),opened],[L('Góðtikið','Accepted'),ts]].map(([l,n])=>`<div><span>${l}</span><i style="width:${tv?n/tv*100:0}%"></i><b>${n}</b></div>`).join('')}</div>
 <h4 style="margin-top:22px">${L('Tænastuavtalur – stig (góðtikin)','Service agreements – tiers (accepted)')}</h4><div class="fun">${['Essential','Plus','VIP'].map((l,i)=>`<div><span>${l}</span><i style="width:${ts?tiers[i]/ts*100:0}%"></i><b>${tiers[i]}</b></div>`).join('')}</div></div></div>`};
/* ---- render: home view + autosave ---- */
const _renderP=render;render=function(){if(S.view==='home'){document.documentElement.lang=S.lang;document.querySelectorAll('[data-t]').forEach(el=>el.textContent=t(el.dataset.t));document.querySelectorAll('#langSeg button').forEach(b=>b.classList.toggle('on',b.dataset.l===S.lang));
  ['sales','offer','dash','job'].forEach(i=>document.getElementById(i).style.display='none');document.getElementById('home').style.display='block';document.body.classList.remove('offer');document.getElementById('chatFab').style.display='none';
  document.querySelectorAll('#viewSeg button,#tabbar button').forEach(b=>b.classList.toggle('on',b.dataset.v==='home'));const o=document.getElementById('osum');o&&(o.style.display='none');renderHome();return}
 document.getElementById('home').style.display='none';if(S.view==='offer'&&PROTO.mode==='customer')document.body.classList.add('offer');_renderP();if(S.view!=='dash')scheduleSave()};
const _togAddO=togAddO;togAddO=function(id){_togAddO(id);persistCustomerChoice()};
const _setTierO=setTierO;setTierO=function(n){_setTierO(n);persistCustomerChoice()};
const _chooseAlt=chooseAlt;chooseAlt=function(ty){_chooseAlt(ty);persistCustomerChoice()};
async function persistCustomerChoice(){if(PROTO.mode!=='customer')return;const off=await DB.get('offers',PROTO.token);if(off){off.state=snapState(pickState());await DB.put('offers',off)}}
/* ---- live updates from the customer page (other tab) ---- */
bc&&(bc.onmessage=async e=>{if(PROTO.mode!=='sales')return;await refreshCache();if(e.data.visitId&&e.data.visitId===PROTO.vid){await loadVisit(PROTO.vid);toast(e.data.type==='signed'?L('✍️ Kundin hevur góðtikið tilboðið!','✍️ The customer accepted the offer!'):L('👀 Kundin hevur opnað tilboðið','👀 The customer opened the offer'))}render()});
document.addEventListener('visibilitychange',async()=>{if(document.visibilityState==='visible'&&PROTO.mode==='sales'&&PROTO.ready){await refreshCache();if(PROTO.vid){const r=await DB.get('visits',PROTO.vid);if(r&&r.state.v3.signed&&!S.v3.signed){await loadVisit(PROTO.vid);render()}}else if(S.view==='home')render()}});
/* ---- start ---- */
PROTO.start=async function(mode){PROTO.mode=mode;TEMPLATE=pickState();S.v3.online=NET.online;
 const lang=(navigator.language||'').toLowerCase().startsWith('fo')?'fo':(localStorage.getItem('mp-lang')||'fo');S.lang=lang;
 document.querySelectorAll('#langSeg button').forEach(b=>b.addEventListener('click',()=>localStorage.setItem('mp-lang',b.dataset.l)));
 if(!(await DB.get('meta','seeded')))await seedDemo();await refreshCache();
 if(mode==='customer'){document.documentElement.classList.add('cust');const p=new URLSearchParams(location.hash.slice(1));PROTO.token=p.get('t');let off=PROTO.token&&await DB.get('offers',PROTO.token);
  if(!off&&p.get('d')){try{const sn=await unpackSnap(p.get('d'));off={token:sn.token,quoteNo:sn.quoteNo,sentAt:sn.sentAt,seller:sn.seller,visitId:sn.visitId,state:sn.state,remote:true,openedAt:null,signedAt:null};await DB.put('offers',off)}catch(e){console.warn(e)}}
  if(!off){document.getElementById('offer').innerHTML=`<section class="sec"><div class="h2">${L('Tilboðið varð ikki funnið','Offer not found')}</div><p class="lead">${L('Leinkið er ógyldugt, ella tilboðið er strikað.','The link is invalid or the offer was deleted.')}</p></section>`;S.view='offer';document.getElementById('home').style.display='none';['sales','dash','job'].forEach(i=>document.getElementById(i).style.display='none');PROTO.ready=true;return}
  const st=Object.assign(JSON.parse(JSON.stringify(TEMPLATE)),off.state);for(const k of Object.keys(st))S[k]=st[k];S.v3.quoteNo=off.quoteNo;S.v3.offerToken=off.token;
  if(off.signedAt){Object.assign(S.v3,{signed:true,signer:off.signer,method:off.method||'samleiki',signedAt:fmtD(off.signedAt)})}
  if(!off.openedAt){off.openedAt=NOW();await DB.put('offers',off);const rec=off.visitId&&await DB.get('visits',off.visitId);if(rec&&!rec.state.v3.opened){rec.state.v3.opened=true;rec.state.v3.openedAt=NOW();await DB.put('visits',rec)}bc&&bc.postMessage({type:'opened',visitId:off.visitId})}
  S.view='offer';render();PROTO.ready=true;return}
 window.addEventListener('hashchange',()=>{if(!PROTO._internal)route()});await route();PROTO.ready=true};
