/* Tot conținutul site-ului. Editezi aici, paginile se refac singure. */
window.DATA = {

/* ---------- LINKURI ---------- */
links: [
  {id:"catehism", t:"Despre viața viitoare", by:"Catehismul ortodox · Mitropolia Ortodoxă Română a Germaniei", lang:"RO", lv:"Ușor", teme:[1,2], url:"https://mitropolia-ro.de/despre-viata-viitoare/",
   why:"Sursa principală pentru tema 1. Singura care acoperă judecata particulară și semnele sfârșitului, exact ce a cerut eseul din 2026. Explică și judecata universală, învierea, viața veșnică și rugăciunile pentru cei adormiți (tema 2).",
   tip:"Foarte lung. Întreabă profesorul dacă e aceeași ediție cu cea din bibliografie."},
  {id:"ga39", t:"Omilia 39 la 1 Corinteni (secțiunea 5)", by:"Sf. Ioan Gură de Aur · New Advent", lang:"EN", lv:"Mediu", teme:[1], url:"https://www.newadvent.org/fathers/220139.htm",
   why:"1 Corinteni 15, 20-23: dacă Hristos e „pârga celor adormiți”, atunci și ceilalți trebuie să învieze. Pentru cerința „Învierea lui Hristos ca temelie a învierii tuturor”.",
   tip:"Legătura cu judecata apare în secțiunea 4, nu în 5."},
  {id:"ga41", t:"Omilia 41 la 1 Corinteni", by:"Sf. Ioan Gură de Aur · New Advent", lang:"EN", lv:"Mediu", teme:[1], url:"https://www.newadvent.org/fathers/220141.htm",
   why:"Comentează 1 Corinteni 15, 35-46, versetele din Subiectul I din 2025: trupul înviat, „se seamănă”, Adam cel dintâi și Adam cel de pe urmă.",
   tip:"Traducere veche. Citește mai ales partea despre versetele 42-45."},
  {id:"damaschin", t:"Dogmatica, cartea a IV-a, cap. 27: Despre înviere", by:"Sf. Ioan Damaschin · New Advent", lang:"EN", lv:"Mediu", teme:[1], url:"https://www.newadvent.org/fathers/33044.htm",
   why:"Rezumatul cel mai sistematic: de ce învie și trupul, dovezi din Scriptură, cum e trupul înviat, judecata și viața veșnică.",
   tip:"Pagina are toată cartea. Caută „Chapter XXVII”."},
  {id:"schmemann", t:"The Christian Concept of Death", by:"Alexander Schmemann · OCA", lang:"EN", lv:"Mediu", teme:[1], url:"https://www.oca.org/wonder/the-christian-concept-of-death",
   why:"Pentru introducerea eseului: moartea e un dușman, nu o lege a naturii; învierea include trupul; „cu moartea pe moarte călcând”.",
   tip:"Nu tratează judecata."},
  {id:"florovsky", t:"The Gospel of Resurrection (1 Cor. 15)", by:"Georges Florovsky, 1951 · azbyka.ru", lang:"EN", lv:"Greu", teme:[1], url:"https://azbyka.ru/otechnik/Georgij_Florovskij/the-gospel-of-resurrection-1cor-15/",
   why:"Cel mai profund text despre 1 Corinteni 15: bobul semănat, identitatea trupului înviat, legătura dintre Învierea lui Hristos și a noastră.",
   tip:"Greu. Pagina arată un fragment; textul complet e sub „Читать полностью”."},
  {id:"oca-res", t:"Resurrection", by:"The Orthodox Faith · OCA", lang:"EN", lv:"Ușor", teme:[1], url:"https://oca.org/orthodoxy/the-orthodox-faith/doctrine-scripture/the-symbol-of-faith/resurrection",
   why:"Recapitulare: Învierea lui Hristos nu e simplă revenire la viață; El e „pârga” învierii noastre.", tip:"Fără citate patristice."},
  {id:"oca-death", t:"Death (pliant)", by:"OCA · 2021 · PDF", lang:"EN", lv:"Ușor", teme:[1], url:"https://www.oca.org/cdn/PDFs/evangelization/pamphlets/death-c.pdf",
   why:"Moartea nu e „naturală”, ci urmarea păcatului, iar Hristos a biruit-o. Multe citate biblice.", tip:""},
  {id:"oca-eternal", t:"Eternal Life", by:"The Orthodox Faith · OCA", lang:"EN", lv:"Ușor", teme:[1], url:"https://oca.org/orthodoxy/the-orthodox-faith/doctrine-scripture/the-symbol-of-faith/eternal-life",
   why:"Trupul și creația sunt bune și nu sunt anihilate; raiul și iadul ca răspuns la prezența lui Dumnezeu.", tip:"Superficial la judecată."},
  {id:"hopko", t:"The Holy Trinity in Eternal Life", by:"Thomas Hopko · OCA", lang:"EN", lv:"Ușor", teme:[1], url:"https://www.oca.org/orthodoxy/the-orthodox-faith/doctrine-scripture/the-holy-trinity/the-holy-trinity-in-eternal-life",
   why:"Viața veșnică e viața Sfintei Treimi, începută deja în Biserică (Ioan 17, 3).", tip:"Doar ~350 de cuvinte. Bun pentru o propoziție în lucrare."},
  {id:"nyssa", t:"On the Soul and the Resurrection", by:"Sf. Grigorie de Nyssa · New Advent", lang:"EN", lv:"Greu", teme:[1], url:"https://www.newadvent.org/fathers/2915.htm",
   why:"Dialog filosofic despre suflet, moarte și înviere.", tip:"Foarte greu. Opțional."},
  {id:"sub26", t:"Subiecte și bareme 2026, clasele IX-XII", by:"Etapa județeană, 14 martie 2026 · PDF scanat", lang:"RO", lv:"Oficial", teme:[0], url:"https://seminariasi.ro/sites/default/files/fisier/2026-03/subiecte_si_bareme_ojr_2026_0.pdf", local:"subiecte/2026_subiecte_si_bareme_clasa_XII_la_pag_11-12.pdf",
   why:"Ce s-a cerut în 2026. Clasa a XII-a e la paginile 11-12.", tip:""},
  {id:"sub25", t:"Subiect clasa a XII-a, 15 martie 2025", by:"Etapa județeană · PDF", lang:"RO", lv:"Oficial", teme:[0], url:"https://cdn.edupedu.ro/wp-content/uploads/2025/03/Religie_ortodoxa_olimp_J_clasa_XII_2025_var.pdf", local:"subiecte/2025_clasa_XII_subiect.pdf",
   why:"Subiectul din 2025, cu 1 Corinteni 15, postul și „Idealul tânărului creștin”.", tip:""},
  {id:"bar25", t:"Barem clasa a XII-a, 15 martie 2025", by:"Etapa județeană · PDF", lang:"RO", lv:"Oficial", teme:[0], url:"https://www.edupedu.ro/wp-content/uploads/2025/03/Religie_ortodoxa_olimp_J_clasa_XII_2025_bar.pdf", local:"subiecte/2025_clasa_XII_barem.pdf",
   why:"Cum se dau punctele, cerință cu cerință.", tip:""},
  {id:"sub24", t:"Subiect clasa a XII-a, 13 aprilie 2024", by:"Etapa județeană · PDF", lang:"RO", lv:"Oficial", teme:[0], url:"https://web.archive.org/web/20240613182900/http://subiecte.edu.ro/2024/olimpiade/OJ_2024_Religii.zip", local:"subiecte/2024_clasa_XII_subiect.pdf",
   why:"Monumentele de artă religioasă (Templul lui Solomon), învierea (Ioan 11, 25) și postul.", tip:"Linkul online e arhiva ZIP a ministerului, cu toate clasele. În folderul tău e doar clasa a XII-a."},
  {id:"bar24", t:"Barem clasa a XII-a, 13 aprilie 2024", by:"Etapa județeană · PDF", lang:"RO", lv:"Oficial", teme:[0], url:"https://web.archive.org/web/20240613182900/http://subiecte.edu.ro/2024/olimpiade/OJ_2024_Religii.zip", local:"subiecte/2024_clasa_XII_barem.pdf",
   why:"Cum s-au dat punctele în 2024.", tip:""},
  {id:"sub23", t:"Subiect clasa a XII-a, 18 martie 2023", by:"Etapa județeană · PDF", lang:"RO", lv:"Oficial", teme:[0], url:"https://web.archive.org/web/20230619051247/http://subiecte.edu.ro/2023/olimpiade/OJ_2023_Religie.zip", local:"subiecte/2023_clasa_XII_subiect.pdf",
   why:"Criteriul judecății și învierea (text din Stăniloae), tinerii și violența, eseul „Eu și aproapele meu”.", tip:"Linkul online e arhiva ZIP a ministerului, cu toate clasele. În folderul tău e doar clasa a XII-a."},
  {id:"bar23", t:"Barem clasa a XII-a, 18 martie 2023", by:"Etapa județeană · PDF", lang:"RO", lv:"Oficial", teme:[0], url:"https://web.archive.org/web/20230619051247/http://subiecte.edu.ro/2023/olimpiade/OJ_2023_Religie.zip", local:"subiecte/2023_clasa_XII_barem.pdf",
   why:"Cum s-au dat punctele în 2023.", tip:""},
  {id:"regulament", t:"Regulamentul olimpiadei, cult ortodox, IX-XII", by:"Ministerul Educației · nr. 24.594 din 3 februarie 2026 · PDF", lang:"RO", lv:"Oficial", teme:[0], url:"https://www.edu.ro/sites/default/files/_fi%C8%99iere/Minister/2026/olimpiade_concursuri/regulamente_actualizate/Regulament_Olimpiada_Religie_Cult_ortodox_IX_XII_2026.pdf", local:"subiecte/regulament_2026_IX-XII.pdf",
   why:"Regulamentul în vigoare. Foaia ta e pagina 10 din el: aceeași tematică și aceeași bibliografie. Confirmă pragul de 80 de puncte și un loc pe județ la fiecare clasă.", tip:""},
  {id:"criterii", t:"Condiții de calificare și premii, 2026", by:"ISJ Tulcea · PDF", lang:"RO", lv:"Oficial", teme:[0], url:"https://isjtulcea.ro/wp-content/uploads/2026/03/Criterii-de-departajare-Olimpiada-de-religie-2026.pdf",
   why:"Pragul de 80 de puncte, locurile pentru națională și premiile.", tip:""}
],

/* ---------- CALENDAR ---------- */
calendar: [
  {from:"2026-11-16", to:"2026-11-20", when:"16 – 20 noiembrie", t:"Tema 1 · Învierea și viața veșnică", tema:1, src:"data ta"},
  {from:"2026-11-23", to:"2026-11-27", when:"23 – 27 noiembrie", t:"Tema 2 · Rugăciunile pentru cei adormiți", tema:2, src:"data ta"},
  {from:"2026-12-01", to:"2026-12-04", when:"1 – 4 decembrie", t:"Tema 3 · Tinerii și apărarea vieții", tema:3, src:"data ta"},
  {from:"2026-12-07", to:"2026-12-11", when:"7 – 11 decembrie", t:"Tema 5 · Asceza creștină", tema:5, src:"data ta"},
  {from:"2026-12-14", to:"2026-12-18", when:"14 – 18 decembrie", t:"Tema 4 · Monumente de artă religioasă", tema:4, src:"data ta", note:"Pe foaie scrie „4-18 dec”. Am presupus 14-18. De confirmat."},
  {from:"2026-12-21", to:"2027-01-08", when:"21 decembrie – 8 ianuarie", t:"Vacanță · recitești temele 1-5", est:true},
  {from:"2027-01-11", to:"2027-01-15", when:"11 – 15 ianuarie", t:"Tema 6 · Dialogul ecumenic și inter-religios", tema:6, est:true},
  {from:"2027-01-18", to:"2027-01-22", when:"18 – 22 ianuarie", t:"Tema 7 · Confesiuni creștine în România", tema:7, est:true},
  {from:"2027-01-25", to:"2027-02-05", when:"25 ianuarie – 5 februarie", t:"Recapitulare generală, toate cele 7 teme", est:true},
  {from:"2027-01-11", to:"2027-02-28", when:"ianuarie – februarie", t:"Etapa pe școală și etapa locală", est:true, off:true, note:"Regulamentul spune „de regulă” ianuarie, respectiv februarie. Datele le stabilește inspectoratul."},
  {from:"2027-03-13", to:"2027-03-13", when:"mijlocul lui martie 2027", t:"Etapa județeană", est:true, off:true, note:"Nepublicată. În anii trecuți: 18 martie 2023, 13 aprilie 2024, 15 martie 2025, 14 martie 2026, de fiecare dată sâmbăta."},
  {from:"2027-03-15", to:"2027-03-26", when:"după județeană", t:"Tema pentru națională · Oameni de cultură români", tema:8, est:true},
  {from:"2027-04-12", to:"2027-04-30", when:"aprilie 2027", t:"Etapa națională", est:true, off:true, note:"Dată și loc nepublicate."}
],

/* ---------- PROBA ---------- */
proba: {
  format: [
    ["Durată","3 ore"],["Punctaj","100 de puncte, din care 10 din oficiu"],["Notă","punctajul împărțit la 10"],
    ["Subiectul I","30 de puncte · text biblic + 4 cerințe"],["Subiectul II","20 de puncte · text argumentativ"],["Subiectul III","40 de puncte · eseu structurat"]
  ],
  reguli: [
    "Se punctează orice formulare sau rezolvare corectă a cerințelor.",
    "Nu se acordă punctaje intermediare în afara celor din barem și nici fracțiuni de punct.",
    "La Subiectul III, 10 puncte din 40 sunt pentru redactare: structură (3), originalitate (3), limbaj religios și citarea din Sfânta Scriptură (3), limita de spațiu (1).",
    "La Subiectul II, 5 puncte sunt pentru construcția argumentativă și 15 pentru argumentare: opinie, două argumente, concluzie. Împărțirea a variat: 5/5/5 în 2023 și 2024, 5/6/4 în 2025 și 2026.",
    "Lungimea cerută a variat de la an la an: eseu de 2-3 pagini (2023), de 200-300 de cuvinte (2024, 2025), de 550-600 de cuvinte (2026)."
  ],
  calificare: [
    "Minimum 80 de puncte pentru etapa națională (în regulamentul din 2019 erau 85).",
    "Se califică primul clasat din județ, la fiecare clasă.",
    "În plus, primii 23 din ierarhia națională, la fiecare clasă.",
    "La egalitate pe locul I: se compară punctajul la cerința cu cele mai multe puncte, apoi la următoarea, apoi probă de baraj."
  ],
  premii: [["Premiul I","peste 9,50"],["Premiul II","peste 9,00"],["Premiul III","peste 8,50"],["Mențiune","peste 8,00"]],
  nota: "Pragul de 80 de puncte și locul pe județ sunt din regulamentul din 2026. Locurile suplimentare și premiile sunt din documentul ISJ Tulcea pentru 14 martie 2026; premiile le stabilește fiecare județ, deci la tine pot diferi."
},

/* ---------- SUBIECTE ---------- */
subiecte: [
  {an:2026, data:"14 martie 2026", link:"sub26", s:[
    {n:"I", p:30, teme:[5], text:"Matei 6, 3-4; 6; 17-18 (milostenia, rugăciunea și postul făcute în ascuns)", cer:[
      ["Identifică, din text, cele trei manifestări principale ale ascezei creștine.","3p"],
      ["Explică legătura dintre cele trei manifestări principale ale ascezei creștine.","7p"],
      ["Enumeră cinci fapte ale milei trupești și cinci fapte ale milei sufletești.","10p"],
      ["Prezintă importanța practicilor ascetice creștine în viața tinerilor.","10p"]]},
    {n:"II", p:20, teme:[6], text:"Ioan 17, 21-22 („ca toți să fie una”)", cer:[
      ["Text argumentativ, 250-300 de cuvinte: rolul dialogului ecumenic și interreligios în societatea contemporană.","20p"]]},
    {n:"III", p:40, teme:[1], text:"Matei 25, 31-33 · eseu de 550-600 de cuvinte, „Învierea și viața veșnică”", cer:[
      ["Învierea Mântuitorului Iisus Hristos ca temelie a învierii tuturor oamenilor","7p"],
      ["Învățătura creștină despre moarte și judecata particulară","8p"],
      ["Două semne premergătoare sfârșitului lumii","8p"],
      ["Învățătura creștină despre judecata universală","7p"],
      ["Redactare","10p"]]}
  ]},
  {an:2025, data:"15 martie 2025", link:"sub25", s:[
    {n:"I", p:30, teme:[1], text:"1 Corinteni 15, 42-45; 51-53 („se seamănă trupul întru stricăciune, înviază întru nestricăciune”)", cer:[
      ["Extrage din text patru însușiri ale trupurilor înviate.","4p"],
      ["Menționează trei argumente scripturistice sau patristice pentru învățătura despre înviere și viața veșnică.","9p"],
      ["Argumentează legătura dintre Adam cel dintâi, „cu suflet viu”, și Adam cel de pe urmă, „cu duh dătător de viață”.","7p"],
      ["Prezintă învățătura creștină despre înviere și viața veșnică.","10p"]]},
    {n:"II", p:20, teme:[5], text:"„Postul trupului este hrană pentru suflet.” (Sf. Ioan Gură de Aur)", cer:[
      ["Text argumentativ, 25-30 de rânduri: importanța postului pentru trupul și sufletul omului.","20p"]]},
    {n:"III", p:40, teme:[3,5], text:"Părintele Teofil Pârâian, „Veniți de luați bucurie” · eseu de 200-300 de cuvinte, „Idealul tânărului creștin”", cer:[
      ["Importanța vieții ca dar primit de la Dumnezeu","7p"],
      ["Rolul tinerilor în apărarea vieții fizice și spirituale","8p"],
      ["Două posibilități de implicare a tinerilor în combaterea violenței și a degradării demnității umane","8p"],
      ["Asceza ca modelare de sine","7p"],
      ["Redactare","10p"]]}
  ]},
  {an:2024, data:"13 aprilie 2024", link:"sub24", s:[
    {n:"I", p:30, teme:[4], text:"3 Regi 6, 14-15; 21-22; 37 (Solomon zidește templul și îl îmbracă cu aur)", cer:[
      ["Identifică în text două elemente caracteristice monumentelor de artă bisericească.","8p"],
      ["Explică sensul afirmației „a pus temelia casei Domnului”, în contextul dat.","10p"],
      ["Prezintă, în 12-15 rânduri, semnificația spirituală și valoarea artistică a monumentelor de artă religioasă.","12p"]]},
    {n:"II", p:20, teme:[1], text:"„Eu sunt învierea și viața; cel ce crede în Mine, chiar dacă va muri, va trăi” (Ioan 11, 25)", cer:[
      ["Text argumentativ, 25-30 de rânduri: învățătura de credință despre înviere și viața veșnică.","20p"]]},
    {n:"III", p:40, teme:[5], text:"Matei 6, 17-18 · eseu de 200-300 de cuvinte, „Postul, manifestare a ascezei creștine”", cer:[
      ["Necesitatea practicării postului în vederea dobândirii virtuților","10p"],
      ["Implicațiile educativ-morale ale practicării postului, ca exercițiu al voinței libere","10p"],
      ["Rugăciunea, postul și milostenia, principalele manifestări ale ascezei creștine","10p"],
      ["Redactare","10p"]]}
  ]},
  {an:2023, data:"18 martie 2023", link:"sub23", s:[
    {n:"I", p:30, teme:[1,5], text:"Pr. Dumitru Stăniloae, Teologia Dogmatică Ortodoxă: „Criteriul judecății va fi practicarea sau nepracticarea iubirii de oameni...”", cer:[
      ["Identifică, în text, o secvență care indică pe ce se întemeiază criteriul judecății.","4p"],
      ["Enumeră trei modalități de practicare a iubirii de oameni.","9p"],
      ["Explică înțelesul expresiei „om adevărat” în contextul dat.","7p"],
      ["Prezintă învățătura creștină despre înviere, precizând două însușiri ale trupurilor înviate.","10p"]]},
    {n:"II", p:20, teme:[3], text:"Fără text de pornire", cer:[
      ["Text argumentativ, 25-30 de rânduri: rolul tinerilor în combaterea violenței.","20p"]]},
    {n:"III", p:40, teme:[5], text:"Pr. Teofil Pârâian, „Veniți de luați bucurie” · eseu de 2-3 pagini, „Eu și aproapele meu”", cer:[
      ["Necesitatea practicării milosteniei în societatea contemporană","10p"],
      ["Implicații educativ-comportamentale și sociale ale practicării milei trupești și sufletești","10p"],
      ["Raportul dintre mila divină și cea umană","10p"],
      ["Redactare","10p"]]}
  ]}
],

/* ---------- ÎNTREBĂRI PENTRU PROFESOR ---------- */
intrebari: [
  ["Când sunt etapa pe școală, etapa locală și etapa județeană în 2027?","Nu sunt publicate. În calendar sunt trecute estimativ."],
  ["La tema 4 scrie „4-18 dec”. Este 14-18 decembrie?","Am presupus 14-18, fiindcă urmează după 7-11."],
  ["Ce ediție a Catehismului folosim?","Textul online e „Învățătură de credință creștină ortodoxă”; în bibliografie apare „Catehism – Învățătura de credință ortodoxă”."],
  ["Ce se așteaptă la tema 7: confesiunile în România sau deosebirile doctrinare în general?","Formularea de pe foaie lasă loc pentru ambele."],
  ["Ce monumente trebuie știute la tema 4?","Tema nu dă o listă. Cea din site e alegerea mea."],
  ["Lecțiile din site sunt corecte doctrinar?","Tema 1 e scrisă din surse citite. Temele 2-7 sunt schițe necercetate."],
  ["Unde găsesc pagina a doua a foii, cu restul bibliografiei?","Pe foaia ta se văd doar primele 4 titluri din 40."]
],

/* ---------- BIBLIOGRAFIA OFICIALĂ ---------- */
biblio: [
  "Biblia sau Sfânta Scriptură, EIBMBOR","Bioetică și taina persoanei, Editura Bizantină, 2006","Catehism – Învățătura de credință ortodoxă, EIBMBOR","Credința Ortodoxă, Trinitas, Iași, 2007","Molitfelnic, EIBMBOR",
  "Parabolele și învățăturile Domnului nostru Iisus Hristos, Vestala, 1998","Patericul, Alba-Iulia, 1990","Sfintele Evanghelii și Rugăciuni alese, Renașterea, 2009","Simbolul de credință pe înțelesul copiilor, Basilica, 2011",
  "Braniște, Dicționar enciclopedic de cunoștințe religioase, 2001","Bria, Dicționar de Teologie Ortodoxă, 1994","Călugăr, Șapte cărți de religie, 1990","Cristea, În țara bisericilor de lemn, 1989","Evdokimov, Arta icoanei. O teologie a frumuseții, Sophia, 2014",
  "Jeremias, Parabolele lui Iisus, Anastasia, 2000","Cleopa, Despre credința ortodoxă, 1987","Irineu de Ecaterinburg, Educația religioasă, Sofia, 2002","Lemeni, Adevăr și comuniune, Basilica, 2011","Logothetis, Răspunsuri la întrebări ale tinerilor, vol. I-II, 2004",
  "Costa de Beauregard, Rugați-vă neîncetat, Basilica, 2011","Mladin, Teologia Morală Ortodoxă, vol. I-II","Moldovan, Teologia iubirii, vol. I-II, 1996","Paisie Aghioritul, Viața de familie, vol. IV, 2003","Papacosta, Minunile Domnului, 2001",
  "Păcurariu, Istoria Bisericii Ortodoxe Române","Părăian, Veniți de luați bucurie, Teognost, 2001","Plămădeală, Dascăli de cuget și simțire românească, 1981","Plămădeală, Tâlcuiri noi la texte vechi, 1989","P.F. Daniel, Comori ale Ortodoxiei, Trinitas, 2007",
  "Răducă, Ghidul creștinului ortodox de azi, Humanitas, 1998","Rose, Cartea Facerii, Sofia, 2001","Schmemann, Postul cel Mare, 1995","Sf. Simeon Noul Teolog, Cateheze, Deisis, 1999","Slevoacă, Din tezaurul ortodoxiei, 1990",
  "Stan și Rus, Istoria Religiilor, 1991","Stăniloae, Reflecții despre spiritualitatea poporului român, 2007","Stăniloae, Spiritualitate și comuniune în Liturghia Ortodoxă, 1986","Stăniloae, Teologia Dogmatică Ortodoxă, vol. I-III","Sf. Ioan Gură de Aur, Cateheze Maritale, 2004","Zăgrean, Morala Creștină, Renașterea, 2003"
],

/* ---------- TEME ---------- */
teme: [
{
  n:1, t:"Credința în înviere și în viața veșnică", scurt:"Învierea și viața veșnică", when:"16 – 20 noiembrie", stare:"complet",
  cerut:"Cerută în fiecare an, 2023-2026.",
  pe_scurt:"Ultimele două articole din Crez: „Aștept învierea morților și viața veacului ce va să fie.” Moartea nu e sfârșitul. Hristos a înviat cu trupul, iar Învierea Lui e începutul și garanția învierii tuturor. După moarte urmează judecata particulară, iar la sfârșitul lumii învierea de obște, judecata universală și viața veșnică.",
  lectie:[
    {h:"1. Moartea", p:[
      "Moartea este despărțirea sufletului de trup. Nu a fost voită de Dumnezeu: a intrat în lume prin păcat <span class='ref'>(Romani 5, 12)</span>. „Dumnezeu n-a făcut moartea” <span class='ref'>(Înțelepciunea lui Solomon 1, 13)</span>.",
      "De aceea creștinul nu vede moartea ca pe ceva firesc sau ca pe o eliberare a sufletului din trup, ci ca pe un dușman biruit de Hristos: „cu moartea pe moarte călcând”. Trupul este bun și este chemat la înviere."]},
    {h:"2. Învierea lui Hristos, temelia învierii noastre", p:[
      "„Dacă Hristos n-a înviat, zadarnică este credința voastră” <span class='ref'>(1 Corinteni 15, 14-17)</span>. Hristos este „pârga celor adormiți” <span class='ref'>(1 Corinteni 15, 20-23)</span>: primul rod, după care vine toată recolta. „Precum în Adam toți mor, așa și în Hristos toți vor învia.”",
      "Învierea Lui nu a fost o simplă revenire la viața dinainte. Trupul Său înviat este același (poartă semnele cuielor, mănâncă cu ucenicii), dar slăvit: intră prin ușile încuiate și nu mai moare."]},
    {h:"3. Judecata particulară", p:[
      "Are loc îndată după moarte, pentru fiecare suflet în parte: „Este rânduit oamenilor o dată să moară, iar după aceea să fie judecata” <span class='ref'>(Evrei 9, 27)</span>. Temeiuri: pilda bogatului nemilostiv și a săracului Lazăr <span class='ref'>(Luca 16, 19-31)</span> și cuvântul către tâlhar, „astăzi vei fi cu Mine în rai” <span class='ref'>(Luca 23, 43)</span>.",
      "Sufletul primește o stare de fericire sau de suferință după credința și faptele cu care a plecat din viață. Starea aceasta este provizorie și nedeplină, pentru că lipsește trupul. De aceea Biserica se roagă pentru cei adormiți (tema 2). Ortodoxia nu învață purgatoriul."]},
    {h:"4. Semnele premergătoare sfârșitului lumii", p:[
      "Din Catehism: propovăduirea Evangheliei la toate neamurile <span class='ref'>(Matei 24, 14)</span>; întoarcerea poporului evreu la Hristos <span class='ref'>(Romani 11, 25-26)</span>; venirea lui Antihrist <span class='ref'>(2 Tesaloniceni 2, 3-4)</span>; venirea lui Ilie și Enoh; înmulțirea fărădelegii și răcirea iubirii <span class='ref'>(Matei 24, 12)</span>; războaie și tulburări în natură <span class='ref'>(Matei 24, 6-7; 29)</span>; arătarea pe cer a semnului Fiului Omului, Crucea <span class='ref'>(Matei 24, 30)</span>.",
      "Ziua și ceasul nu le știe nimeni <span class='ref'>(Matei 24, 36)</span>. Biserica respinge orice calcul al datei sfârșitului."]},
    {h:"5. Învierea de obște și trupul înviat", p:[
      "La a Doua Venire vor învia toți oamenii, drepți și păcătoși <span class='ref'>(Ioan 5, 28-29)</span>, „într-o clipeală de ochi, la trâmbița cea de apoi”; cei aflați în viață se vor schimba <span class='ref'>(1 Corinteni 15, 51-53; 1 Tesaloniceni 4, 16-17)</span>. Vechiul Testament o vestește: vedenia oaselor uscate <span class='ref'>(Iezechiel 37)</span>, <span class='ref'>Daniel 12, 2</span>, <span class='ref'>Isaia 26, 19</span>, <span class='ref'>Iov 19, 25-26</span>.",
      "Cele patru însușiri ale trupului înviat <span class='ref'>(1 Corinteni 15, 42-44)</span>: <b>nestricăcios</b>, <b>slăvit</b>, <b>puternic</b>, <b>duhovnicesc</b>. Este același trup, nu altul, dar transfigurat, ca bobul de grâu care moare și răsare <span class='ref'>(1 Corinteni 15, 36-38)</span>.",
      "Adam și Hristos <span class='ref'>(1 Corinteni 15, 45-49)</span>: Adam cel dintâi, „suflet viu”, a primit viața și ne-a lăsat moștenire moartea. Hristos, Adam cel de pe urmă, „duh dătător de viață”, dăruiește viața. Am purtat chipul celui pământesc; vom purta chipul Celui ceresc."]},
    {h:"6. Judecata universală", p:[
      "<span class='ref'>Matei 25, 31-46</span>: Fiul Omului vine întru slavă, adună toate neamurile și desparte oile de capre. Criteriul este iubirea arătată aproapelui: „întrucât ați făcut unuia dintre acești frați ai Mei prea mici, Mie Mi-ați făcut.”",
      "Față de judecata particulară: este publică, îi privește pe toți, are loc după înviere, deci cu trupul, și este definitivă. Sfântul Ioan Damaschin dă și un argument de dreptate: trupul a lucrat împreună cu sufletul binele sau răul, deci trebuie să primească împreună cu el răsplata."]},
    {h:"7. Viața veșnică", p:[
      "„Aceasta este viața veșnică: să Te cunoască pe Tine, singurul Dumnezeu adevărat, și pe Iisus Hristos pe Care L-ai trimis” <span class='ref'>(Ioan 17, 3)</span>. Este comuniune cu Sfânta Treime, începută deja în Biserică și împlinită în Împărăție. „Și va șterge orice lacrimă din ochii lor și moarte nu va mai fi” <span class='ref'>(Apocalipsa 21, 4)</span>.",
      "Raiul are „multe locașuri” <span class='ref'>(Ioan 14, 2)</span>, adică trepte ale fericirii. Iadul este lipsa comuniunii cu Dumnezeu. Creația întreagă va fi înnoită, nu nimicită: „cer nou și pământ nou” <span class='ref'>(Apocalipsa 21, 1)</span>."]}
  ],
  biblice:[
    ["1 Corinteni 15, 14","Dacă Hristos n-a înviat, zadarnică este propovăduirea și credința."],
    ["1 Corinteni 15, 20-22","Hristos, pârga celor adormiți; în Adam toți mor, în Hristos toți vor învia."],
    ["1 Corinteni 15, 42-44","Cele patru însușiri ale trupului înviat."],
    ["1 Corinteni 15, 45","Adam cel dintâi, suflet viu; Adam cel de pe urmă, duh dătător de viață."],
    ["1 Corinteni 15, 51-53","Toți ne vom schimba, la trâmbița cea de apoi."],
    ["Ioan 5, 28-29","Toți cei din morminte vor auzi glasul Lui: învierea vieții și învierea osândirii."],
    ["Ioan 11, 25","„Eu sunt Învierea și Viața.”"],
    ["Evrei 9, 27","O dată să moară, iar după aceea judecata."],
    ["Luca 16, 19-31","Bogatul nemilostiv și săracul Lazăr."],
    ["Matei 24, 14; 30; 36","Semnele sfârșitului; ziua n-o știe nimeni."],
    ["Matei 25, 31-46","Judecata universală."],
    ["Iezechiel 37, 1-14","Vedenia oaselor uscate."],
    ["Daniel 12, 2","Mulți dintre cei ce dorm în țărâna pământului se vor scula."],
    ["Ioan 17, 3","Ce este viața veșnică."],
    ["Apocalipsa 21, 1-4","Cer nou și pământ nou."]
  ],
  parinti:[
    ["Criteriul judecății va fi practicarea sau nepracticarea iubirii de oameni.","Pr. Dumitru Stăniloae, Teologia Dogmatică Ortodoxă (textul din subiectul din 2023)"],
    ["Dacă El este pârga lor, atunci și ei trebuie neapărat să învieze.","Sf. Ioan Gură de Aur, Omilia 39 la 1 Corinteni (idee redată după traducerea engleză)"],
    ["Trupul care se ridică este același cu cel semănat, dar mai strălucit. „Semănarea” este înmormântarea, nu nașterea.","Sf. Ioan Gură de Aur, Omilia 41 la 1 Corinteni (rezumat)"],
    ["Învierea este unirea din nou a sufletului cu trupul. Același trup, stricăcios, va învia nestricăcios, pentru că Cel ce l-a făcut din țărână îl poate ridica din nou.","Sf. Ioan Damaschin, Dogmatica IV, 27 (rezumat)"],
    ["The body is one thing, corruption is another.","Georges Florovsky, The Gospel of Resurrection, urmând pe Sf. Ioan Gură de Aur"]
  ],
  termeni:[
    ["Eshatologie","Învățătura despre „cele de pe urmă”: moarte, judecată, înviere, viața veșnică."],
    ["Pârgă","Primul rod al recoltei, închinat lui Dumnezeu. Hristos e pârga învierii."],
    ["Judecata particulară","Judecata fiecărui suflet, îndată după moarte."],
    ["Judecata universală","Judecata tuturor, la a Doua Venire, după învierea trupurilor."],
    ["Parusie","A Doua Venire a lui Hristos, întru slavă."],
    ["Învierea de obște","Învierea tuturor oamenilor, la sfârșitul veacurilor."],
    ["Antihrist","Potrivnicul lui Hristos, care se arată înaintea sfârșitului."],
    ["Trup duhovnicesc","Trup real, dar pătruns deplin de Duhul Sfânt. Nu înseamnă „fără materie”."],
    ["Nestricăciune","Starea în care trupul nu mai suferă boală, descompunere sau moarte."]
  ],
  idei:[
    "De ce nu ajunge „nemurirea sufletului”? Ce pierde credința creștină fără învierea trupului?",
    "Cum poate fi trupul înviat același și totuși schimbat? Imaginea bobului de grâu.",
    "De ce sunt două judecăți? Ce aduce în plus cea universală?",
    "Dacă soarta se hotărăște la judecata particulară, ce rost au rugăciunile pentru cei adormiți? (legătura cu tema 2)",
    "De ce criteriul din Matei 25 este iubirea de aproapele, nu credința declarată?",
    "Cum schimbă credința în înviere felul în care trăiești acum? (legătura cu temele 3 și 5)",
    "Viața veșnică începe după moarte sau de acum?"
  ],
  surse:["catehism","ga39","ga41","damaschin","schmemann","florovsky","oca-res","oca-death","oca-eternal","hopko","nyssa"]
},
{
  n:2, t:"Rugăciunile pentru cei adormiți în Domnul", scurt:"Rugăciunile pentru cei adormiți", when:"23 – 27 noiembrie", stare:"schiță",
  cerut:"Necerută în 2023-2026.",
  pe_scurt:"Biserica îi cuprinde și pe cei vii, și pe cei adormiți. Pentru că starea sufletelor după judecata particulară nu este încă definitivă, iar iubirea nu se oprește la moarte, Biserica se roagă pentru cei plecați, îi pomenește la Liturghie și face milostenie în numele lor.",
  lectie:[
    {h:"De ce ne rugăm pentru cei adormiți", p:[
      "Dumnezeu „nu este al morților, ci al viilor, căci toți trăiesc în El” <span class='ref'>(Luca 20, 38)</span>. „Dragostea nu cade niciodată” <span class='ref'>(1 Corinteni 13, 8)</span>. Cei adormiți rămân mădulare ale Bisericii.",
      "Până la judecata universală, starea sufletelor este provizorie (vezi tema 1). De aceea rugăciunea Bisericii le poate fi de folos. Ortodoxia nu învață purgatoriul."]},
    {h:"Temeiuri în Scriptură", p:[
      "<span class='ref'>2 Macabei 12, 42-45</span>: Iuda Macabeul aduce jertfă pentru ostașii căzuți. <span class='ref'>Iacov 5, 16</span>: „rugați-vă unul pentru altul”. <span class='ref'>2 Timotei 1, 16-18</span>: Sfântul Pavel se roagă pentru Onisifor. <span class='ref'>1 Tesaloniceni 4, 13</span>: să nu ne întristăm „ca ceilalți, care nu au nădejde”."]},
    {h:"Cum se roagă Biserica", p:[
      "Slujba înmormântării; parastasul; pomenirile la 3, 9 și 40 de zile, la 6 luni, la un an și apoi anual, de obicei până la 7 ani.",
      "Pomenirea la Sfânta Liturghie, cea mai importantă: la Proscomidie se scot părticele (miride) pentru cei adormiți.",
      "Sâmbăta este ziua de pomenire a morților. Sâmbetele morților: Moșii de iarnă (înaintea Duminicii Înfricoșătoarei Judecăți) și Moșii de vară (înaintea Rusaliilor).",
      "Milostenia în numele celor adormiți; coliva, din grâu, simbol al învierii <span class='ref'>(Ioan 12, 24)</span>; lumânarea, lumina lui Hristos; cântarea „Veșnica pomenire”."]},
    {h:"Ce spun Părinții", p:[
      "Sfântul Ioan Gură de Aur îndeamnă la pomenirea celor adormiți la Sfânta Liturghie și la milostenii pentru ei. Sfântul Chiril al Ierusalimului (Cateheza mistagogică V) spune că rugăciunea adusă la Jertfa euharistică le este de mare folos."]}
  ],
  biblice:[["2 Macabei 12, 42-45","Jertfă pentru cei morți."],["Luca 20, 38","Dumnezeul celor vii."],["Iacov 5, 16","Rugați-vă unul pentru altul."],["1 Tesaloniceni 4, 13-14","Nădejdea celor ce au adormit."],["Ioan 12, 24","Bobul de grâu."],["2 Timotei 1, 16-18","Rugăciunea pentru Onisifor."]],
  parinti:[],
  termeni:[["Parastas","Slujbă de pomenire a celor adormiți."],["Proscomidie","Pregătirea Darurilor, la care sunt pomeniți viii și adormiții."],["Colivă","Grâu fiert, simbol al învierii."],["Moși","Sâmbetele de pomenire generală a morților."],["Adormiți","Numele creștin al morților: moartea e un somn până la înviere."]],
  idei:["De ce spune Biserica „adormiți”, nu „morți”?","Cum se împacă rugăciunea pentru cei adormiți cu judecata particulară?","De ce pomenirea la Liturghie e mai importantă decât orice alt gest?","Ce legătură este între colivă și 1 Corinteni 15?","De ce nu acceptă Ortodoxia purgatoriul, dar se roagă pentru cei adormiți?"],
  biblio:["Catehism (capitolul despre viața viitoare)","Molitfelnic","Credința Ortodoxă, Trinitas"],
  surse:["catehism"]
},
{
  n:3, t:"Rolul tinerilor în apărarea vieții (combaterea violenței, a suicidului, a eutanasiei și a degradării demnității umane)", scurt:"Tinerii și apărarea vieții", when:"1 – 4 decembrie", stare:"schiță",
  cerut:"Cerută în 2023 (Subiectul II, violența) și 2025 (Subiectul III).",
  pe_scurt:"Viața este darul lui Dumnezeu, iar omul este chipul Lui. De aici vine demnitatea fiecărui om și datoria de a apăra viața, a ta și a celuilalt, trupească și sufletească. Tinerii o apără prin felul în care trăiesc și prin implicare.",
  lectie:[
    {h:"Viața, dar al lui Dumnezeu", p:[
      "Omul e creat „după chipul lui Dumnezeu” <span class='ref'>(Facerea 1, 26-27)</span> și a primit suflare de viață <span class='ref'>(Facerea 2, 7)</span>. Porunca a șasea: „Să nu ucizi” <span class='ref'>(Ieșirea 20, 13)</span>. Trupul este „templu al Duhului Sfânt” <span class='ref'>(1 Corinteni 6, 19-20)</span>. „Eu am venit ca viață să aibă și din belșug să aibă” <span class='ref'>(Ioan 10, 10)</span>.",
      "Omul nu este stăpânul vieții, ci cel căruia i-a fost încredințată."]},
    {h:"Violența", p:[
      "Hristos merge la rădăcină: și mânia și cuvântul care rănește sunt judecate <span class='ref'>(Matei 5, 21-22)</span>. „Fericiți făcătorii de pace” <span class='ref'>(Matei 5, 9)</span>. „Iubiți pe vrăjmașii voștri” <span class='ref'>(Matei 5, 44)</span>. „Biruiește răul cu binele” <span class='ref'>(Romani 12, 21)</span>. Aici intră și violența verbală, hărțuirea și cea din mediul online."]},
    {h:"Suicidul", p:[
      "Biserica îl socotește păcat împotriva darului vieții și a nădejdii. În rânduiala Bisericii, celui care își ia viața în deplină cunoștință nu i se face slujba înmormântării; cazurile de boală psihică sunt privite cu îngăduință.",
      "Răspunsul creștin este apropierea de omul aflat în deznădejde: ascultare, prezență, rugăciune și îndrumarea către ajutor (familie, duhovnic, psiholog, medic)."]},
    {h:"Eutanasia", p:[
      "Viața și moartea sunt în mâna lui Dumnezeu <span class='ref'>(Deuteronomul 32, 39; Iov 1, 21)</span>. Biserica respinge eutanasia, dar susține alinarea durerii și îngrijirea bolnavului până la capăt. Suferința poate avea sens, iar bolnavul nu-și pierde demnitatea."]},
    {h:"Degradarea demnității umane", p:[
      "Droguri, alcool, pornografie, exploatare, trafic de persoane, umilire. „Toate îmi sunt îngăduite, dar nu toate îmi sunt de folos” <span class='ref'>(1 Corinteni 6, 12)</span>. Libertatea adevărată nu este robia față de patimi <span class='ref'>(Galateni 5, 1; 13)</span>."]},
    {h:"Ce pot face tinerii", p:[
      "Exemplul personal; sprijinul pentru colegii aflați în dificultate; voluntariat și fapte de milostenie; implicare în parohie și în asociații de tineret; refuzul violenței și al batjocurii; mărturisirea valorii vieții. Asceza (tema 5) este „modelarea de sine” din care pornește totul."]}
  ],
  biblice:[["Facerea 1, 26-27","Omul, chip al lui Dumnezeu."],["Ieșirea 20, 13","Să nu ucizi."],["1 Corinteni 6, 19-20","Trupul, templu al Duhului Sfânt."],["Ioan 10, 10","Viață din belșug."],["Matei 5, 9; 21-22; 44","Pace, mânie, iubirea vrăjmașilor."],["Romani 12, 21","Biruiește răul cu binele."],["Deuteronomul 32, 39","Viața și moartea sunt la Dumnezeu."]],
  parinti:[["Un tânăr care ar vrea să se angajeze într-o lucrare, oricare ar fi ea, în Biserică, trebuie mai întâi să se angajeze în lucrarea modelării de sine.","Părintele Teofil Pârâian, „Veniți de luați bucurie” (textul din subiectul din 2025)"]],
  termeni:[["Bioetică","Reflecția morală asupra vieții: început, sfârșit, intervenții medicale."],["Eutanasie","Provocarea deliberată a morții unui bolnav."],["Chipul lui Dumnezeu","Temeiul demnității fiecărui om."],["Îngrijire paliativă","Alinarea suferinței bolnavului incurabil, fără a-i grăbi moartea."]],
  idei:["De ce e viața „dar” și nu „proprietate”? Ce se schimbă în funcție de răspuns?","Viața fizică și viața spirituală: cum se apără fiecare?","Cum arată violența în școală și online și ce poate face concret un tânăr?","De ce respinge Biserica eutanasia, dar nu și alinarea durerii?","Ce înseamnă demnitate, dacă nu depinde de sănătate sau succes?","Legătura cu tema 1: cum schimbă credința în înviere felul în care privești suferința și moartea?"],
  biblio:["Bioetică și taina persoanei","Zăgrean, Morala Creștină","Mladin, Teologia Morală Ortodoxă","Logothetis, Răspunsuri la întrebări ale tinerilor","Părăian, Veniți de luați bucurie"],
  surse:[]
},
{
  n:4, t:"Monumente reprezentative de artă religioasă din Europa și din România", scurt:"Monumente de artă religioasă", when:"14 – 18 decembrie", stare:"schiță",
  cerut:"Cerută în 2024 (Subiectul I).",
  pe_scurt:"Biserica-locaș este o mărturisire de credință în piatră, lemn și culoare. Tema cere să cunoști stilurile mari, câteva monumente reprezentative și, mai ales, sensul lor teologic.",
  lectie:[
    {h:"Sensul teologic", p:[
      "Biserica este icoană a Împărăției și „corabie a mântuirii”. Împărțirea ortodoxă: pronaos, naos, altar, cu catapeteasma între naos și altar. Icoana este „fereastră spre cer”. Sinodul VII Ecumenic (Niceea, 787) a hotărât cinstirea icoanelor: cinstirea trece la cel zugrăvit, nu rămâne la lemn și culoare. Pictura a fost numită „Biblia celor neștiutori de carte”."]},
    {h:"Europa", p:[
      "<b>Bizantin</b>: Sfânta Sofia din Constantinopol (532-537, împăratul Iustinian), cu marea cupolă; San Vitale din Ravenna (sec. VI), cu mozaicuri.",
      "<b>Romanic</b> (sec. XI-XII): ziduri groase, arc semicircular. Exemple: catedralele din Speyer și Pisa.",
      "<b>Gotic</b> (sec. XII-XV): arc frânt, vitralii, înălțime. Notre-Dame din Paris, Chartres, Köln.",
      "<b>Renaștere și baroc</b>: Bazilica Sfântul Petru din Roma, Capela Sixtină.",
      "<b>Ortodoxia răsăriteană</b>: mănăstirile de la Muntele Athos; Sfânta Sofia din Kiev (sec. XI); Catedrala Sfântul Vasile din Moscova (1555-1561)."]},
    {h:"România", p:[
      "<b>Stilul moldovenesc</b> (sinteză bizantin-gotic): Putna (1466-1469, Ștefan cel Mare), Voroneț (1488; pictura exterioară din 1547, cu Judecata de Apoi și „albastrul de Voroneț”), Sucevița (Scara virtuților), Moldovița, Humor, Arbore. Bisericile pictate din nordul Moldovei sunt în patrimoniul UNESCO.",
      "<b>Țara Românească</b>: Cozia (Mircea cel Bătrân, 1388); Mănăstirea Curtea de Argeș (Neagoe Basarab, 1512-1517, legenda Meșterului Manole); <b>stilul brâncovenesc</b>, cu Mănăstirea Hurezi (1690-1693, UNESCO).",
      "<b>Moldova, sec. XVII</b>: Trei Ierarhi din Iași (Vasile Lupu, 1639).",
      "<b>Transilvania și Maramureș</b>: bisericile de lemn din Maramureș (opt în UNESCO, între care Bârsana, Ieud, Șurdești); Biserica Neagră din Brașov (gotic); Catedrala romano-catolică din Alba Iulia (romanic-gotic).",
      "<b>Azi</b>: Catedrala Națională (Catedrala Mântuirii Neamului), București."]}
  ],
  biblice:[["3 Regi 6, 14-37","Solomon zidește templul și îl împodobește cu aur (textul din subiectul din 2024)."],["Ieșirea 25, 8","„Să-Mi facă locaș sfânt și voi locui în mijlocul lor.”"],["Psalmul 25, 8","„Doamne, iubit-am bunăcuviința casei Tale.”"],["Matei 21, 13","„Casa Mea, casă de rugăciune se va chema.”"]],
  parinti:[],
  termeni:[["Pronaos, naos, altar","Cele trei părți ale bisericii ortodoxe."],["Catapeteasmă (iconostas)","Peretele de icoane dintre naos și altar."],["Pantocrator","Hristos „Atotțiitorul”, pictat în cupolă."],["Stil brâncovenesc","Sinteză românească de la 1700: pridvor cu coloane, ornament sculptat bogat."],["Frescă","Pictură pe tencuială udă."]],
  idei:["Ce înseamnă „a pus temelia casei Domnului”? (cerința din 2024)","De ce pictura exterioară a Voronețului are Judecata de Apoi pe peretele de la intrare? (legătura cu tema 1)","Ce spune arhitectura gotică despre Dumnezeu și ce spune cea bizantină?","De ce icoana nu este idol?","Ce face ca stilul moldovenesc și cel brâncovenesc să fie „românești”?","Monumentul ca mărturisire de credință a unui ctitor și a unui neam."],
  biblio:["Evdokimov, Arta icoanei","Cristea, În țara bisericilor de lemn","P.F. Daniel, Comori ale Ortodoxiei","Păcurariu, Istoria Bisericii Ortodoxe Române"],
  surse:[]
},
{
  n:5, t:"Asceza creștină (post, rugăciune, milostenie)", scurt:"Asceza creștină", when:"7 – 11 decembrie", stare:"schiță",
  cerut:"Cerută în fiecare an, 2023-2026, ca și tema 1.",
  pe_scurt:"Asceza este nevoința prin care omul se eliberează de patimi și dobândește virtuțile. Hristos îi arată cele trei forme în Predica de pe Munte (Matei 6): milostenia, rugăciunea și postul, toate făcute „în ascuns”.",
  lectie:[
    {h:"Ce este asceza", p:[
      "Din grecescul <i>askesis</i>, exercițiu. Nu este dispreț față de trup, ci eliberarea omului întreg de sub stăpânirea patimilor. Este „modelare de sine” (formula din subiectul din 2025). Calea: curățire de patimi, luminare, unire cu Dumnezeu."]},
    {h:"Cele trei manifestări (Matei 6, 1-18)", p:[
      "<b>Milostenia</b>: „să nu știe stânga ta ce face dreapta ta”. <b>Rugăciunea</b>: „intră în cămara ta”. <b>Postul</b>: „unge capul tău și fața ta o spală”. Toate sunt pentru Dumnezeu, nu pentru a fi văzute de oameni."]},
    {h:"Legătura dintre ele", p:[
      "Postul rânduiește relația cu tine însuți, rugăciunea relația cu Dumnezeu, milostenia relația cu aproapele. Se țin una pe alta: postul fără rugăciune rămâne dietă, rugăciunea fără milostenie rămâne vorbă, iar ce economisești postind se cuvine dat celui lipsit <span class='ref'>(Isaia 58, 6-7)</span>."]},
    {h:"Postul", p:[
      "Hristos a postit 40 de zile <span class='ref'>(Matei 4, 2)</span>. „Acest neam de demoni nu iese decât numai cu rugăciune și cu post” <span class='ref'>(Matei 17, 21)</span>. Cele patru posturi mari: al Paștilor, al Sfinților Apostoli, al Adormirii Maicii Domnului și al Nașterii Domnului; în plus, miercurea și vinerea. Postul e trupesc și sufletesc: înfrânare de la mâncare, dar și de la păcat."]},
    {h:"Rugăciunea", p:[
      "„Rugați-vă neîncetat” <span class='ref'>(1 Tesaloniceni 5, 17)</span>. Modelul: Tatăl nostru <span class='ref'>(Matei 6, 9-13)</span>. Feluri: de laudă, de mulțumire, de cerere; particulară și publică. Rugăciunea lui Iisus: „Doamne Iisuse Hristoase, Fiul lui Dumnezeu, miluiește-mă pe mine, păcătosul.” Smerenia: vameșul și fariseul <span class='ref'>(Luca 18, 9-14)</span>."]},
    {h:"Milostenia: cele 14 fapte (cerute în 2026)", p:[
      "<b>Faptele milei trupești</b>: a sătura pe cel flămând; a da de băut celui însetat; a îmbrăca pe cel gol; a cerceta pe cei bolnavi; a primi pe străini; a cerceta pe cei din închisoare; a îngropa pe cei morți <span class='ref'>(Matei 25, 35-36)</span>.",
      "<b>Faptele milei sufletești</b>: a îndrepta pe cel ce greșește; a învăța pe cel neștiutor; a da sfat bun celui ce stă la îndoială; a ne ruga pentru aproapele; a mângâia pe cei întristați; a răbda cu liniște necazurile și nedreptățile; a ierta pe cei ce ne-au greșit.",
      "„Fericiți cei milostivi” <span class='ref'>(Matei 5, 7)</span>. „Mai fericit este a da decât a lua” <span class='ref'>(Faptele Apostolilor 20, 35)</span>. Pilde: samarineanul milostiv <span class='ref'>(Luca 10, 25-37)</span>, banul văduvei <span class='ref'>(Marcu 12, 41-44)</span>."]}
  ],
  biblice:[["Matei 6, 1-18","Milostenia, rugăciunea, postul."],["Matei 4, 2","Postul lui Hristos."],["Matei 17, 21","Rugăciune și post."],["Isaia 58, 6-7","Postul adevărat."],["1 Tesaloniceni 5, 17","Rugați-vă neîncetat."],["Luca 18, 9-14","Vameșul și fariseul."],["Matei 25, 35-36","Faptele milei trupești."],["Matei 5, 7","Fericiți cei milostivi."]],
  parinti:[["Postul trupului este hrană pentru suflet.","Sf. Ioan Gură de Aur (citatul din subiectul din 2025)"],["Fiecare om care ne vine în față este un candidat la iubirea noastră.","Pr. Teofil Pârâian, „Veniți de luați bucurie” (textul din subiectul din 2023)"]],
  termeni:[["Asceză","Nevoință, exercițiu duhovnicesc."],["Patimă","Obișnuința păcatului, care îl robește pe om."],["Virtute","Deprinderea statornică a binelui."],["Înfrânare","Stăpânirea de sine."],["Milostenie","Iubirea de aproapele arătată în faptă."]],
  idei:["De ce cere Hristos ca toate trei să fie făcute „în ascuns”?","Postul e doar despre mâncare? Ce ar însemna post de la telefon, de la vorbe, de la judecarea altora?","Ce rost are asceza pentru un tânăr care nu e călugăr?","Asceza ca libertate, nu ca interdicție.","Cum se sprijină cele trei una pe alta?","Legătura cu tema 3: omul care se stăpânește pe sine poate apăra viața altuia."],
  biblio:["Schmemann, Postul cel Mare","Costa de Beauregard, Rugați-vă neîncetat","Patericul","Părăian, Veniți de luați bucurie","Catehism (faptele milei)"],
  surse:[]
},
{
  n:6, t:"Rolul dialogului ecumenic și inter-religios", scurt:"Dialogul ecumenic și inter-religios", when:"11 – 15 ianuarie", est:true, stare:"schiță",
  cerut:"Cerută în 2026 (Subiectul II).",
  pe_scurt:"Dialogul ecumenic se poartă între creștini și caută refacerea unității. Dialogul inter-religios se poartă între religii și caută pacea și buna înțelegere. Temeiul este rugăciunea lui Hristos: „ca toți să fie una”.",
  lectie:[
    {h:"Temeiuri", p:[
      "„Ca toți să fie una, după cum Tu, Părinte, întru Mine și Eu întru Tine” <span class='ref'>(Ioan 17, 21)</span>. „Un Domn, o credință, un botez” <span class='ref'>(Efeseni 4, 5)</span>. „Va fi o turmă și un păstor” <span class='ref'>(Ioan 10, 16)</span>. Dezbinarea creștinilor slăbește mărturia: „ca lumea să creadă”."]},
    {h:"Cele două dialoguri", p:[
      "<b>Ecumenic</b> (gr. <i>oikoumene</i>, lumea locuită): între Bisericile și confesiunile creștine. <b>Inter-religios</b>: între creștinism și celelalte religii (iudaism, islam și altele). Primul caută unitatea de credință; al doilea, respectul, pacea și conlucrarea."]},
    {h:"Repere", p:[
      "Consiliul Ecumenic al Bisericilor (1948, Amsterdam; sediul la Geneva). Biserica Ortodoxă Română este membră din 1961. Conferința Bisericilor Europene (1959).",
      "1965: ridicarea anatemelor din 1054 de către Patriarhul Atenagora și Papa Paul al VI-lea.",
      "1999: vizita Papei Ioan Paul al II-lea în România, prima vizită a unui papă într-o țară majoritar ortodoxă. 2007: Adunarea Ecumenică Europeană de la Sibiu. 2019: vizita Papei Francisc.",
      "Săptămâna de rugăciune pentru unitatea creștinilor (18-25 ianuarie)."]},
    {h:"Principiile ortodoxe ale dialogului", p:[
      "Dialog „în adevăr și iubire” <span class='ref'>(Efeseni 4, 15)</span>. Fără compromis dogmatic, fără amestec de credințe (sincretism) și fără prozelitism. Unitatea înseamnă unitate de credință, nu uniformizare."]},
    {h:"Rolul în societatea de azi", p:[
      "Pace și reconciliere; respingerea extremismului și a urii religioase; conlucrare în fapte de ajutorare; apărarea împreună a vieții, a familiei și a libertății religioase; cunoașterea celuilalt, care risipește prejudecățile."]}
  ],
  biblice:[["Ioan 17, 21-22","Ca toți să fie una."],["Efeseni 4, 3-6","Un Domn, o credință, un botez."],["Ioan 10, 16","O turmă și un păstor."],["Efeseni 4, 15","Adevărul în iubire."],["Matei 5, 9","Fericiți făcătorii de pace."],["Romani 12, 18","Trăiți în pace cu toți oamenii."]],
  parinti:[],
  termeni:[["Ecumenism","Mișcarea pentru refacerea unității creștinilor."],["Sincretism","Amestecul de credințe diferite."],["Prozelitism","Atragerea credincioșilor altei confesiuni prin mijloace necinstite."],["Toleranță","Respectul față de omul de altă credință, fără a-i împărtăși credința."]],
  idei:["Poți dialoga fără să renunți la ce crezi?","Care e diferența dintre unitate și uniformitate?","De ce dezbinarea creștinilor e o problemă de mărturie, nu doar de organizare?","Ce poate face dialogul între religii pentru pace?","Ce înseamnă dialog la nivelul tău: colegi de altă confesiune sau religie?","Legătura cu tema 7: nu poți dialoga cu cineva pe care nu-l cunoști."],
  biblio:["Stan și Rus, Istoria Religiilor","Bria, Dicționar de Teologie Ortodoxă","Păcurariu, Istoria Bisericii Ortodoxe Române"],
  surse:[]
},
{
  n:7, t:"Confesiuni creștine în România — Ortodoxia, Catolicismul, Protestantismul și Neoprotestantismul", scurt:"Confesiuni creștine în România", when:"18 – 22 ianuarie", est:true, stare:"schiță",
  cerut:"Necerută în 2023-2026. În regulamentul din 2019 era doar o paranteză la tema 6.",
  pe_scurt:"Creștinismul s-a împărțit în trei mari ramuri: Ortodoxia, Catolicismul (din 1054) și Protestantismul (din 1517), din care s-au desprins cultele neoprotestante. Toate sunt prezente în România.",
  lectie:[
    {h:"Ortodoxia", p:[
      "Biserica Ortodoxă Română: autocefală din 1885, patriarhie din 1925; cuprinde majoritatea populației. Izvoarele credinței: Sfânta Scriptură și Sfânta Tradiție. Cele șapte Sinoade Ecumenice, șapte Sfinte Taine, conducere sinodală, cinstirea Maicii Domnului, a sfinților și a icoanelor."]},
    {h:"Catolicismul", p:[
      "Marea Schismă, 1054. În România: Biserica Romano-Catolică și Biserica Română Unită cu Roma, Greco-Catolică (unirea de la 1698-1701; rit bizantin, în comuniune cu Papa; centrul la Blaj; interzisă în 1948, reintrată în legalitate după 1989).",
      "Deosebiri față de Ortodoxie: <i>Filioque</i> (Duhul Sfânt purcede „și de la Fiul”); primatul și infailibilitatea papei (1870); purgatoriul; Imaculata Concepție (1854); celibatul preoților în ritul latin; azima la Euharistie."]},
    {h:"Protestantismul", p:[
      "Reforma: Martin Luther, 1517; apoi Jean Calvin. Principii: <i>Sola Scriptura</i>, <i>Sola fide</i>, <i>Sola gratia</i>; preoția universală; două taine (Botezul și Cina); fără cinstirea sfinților și a icoanelor.",
      "În România, mai ales în Transilvania: Biserica Evanghelică de Confesiune Augustană (lutherană, a sașilor; reformatorul Johannes Honterus), Biserica Reformată (calvină), Biserica Unitariană (apărută la Cluj în sec. XVI)."]},
    {h:"Neoprotestantismul", p:[
      "Culte apărute în sec. XIX-XX: baptiști, adventiști de ziua a șaptea, penticostali, creștini după Evanghelie. Trăsături comune: botezul la maturitate, Biblia ca singură autoritate, comunități fără ierarhie sacramentală."]},
    {h:"Cadrul din România", p:[
      "Statul recunoaște 18 culte (Legea cultelor, 2006). Cultele sunt egale în fața legii și autonome față de stat."]}
  ],
  biblice:[["Efeseni 4, 5","Un Domn, o credință, un botez."],["Ioan 17, 21","Ca toți să fie una."],["Matei 16, 18","„Pe această piatră voi zidi Biserica Mea.”"],["2 Tesaloniceni 2, 15","„Țineți predaniile”: temeiul Tradiției."]],
  parinti:[],
  termeni:[["Confesiune","Comunitate creștină cu o mărturisire de credință proprie."],["Autocefalie","Independența administrativă a unei Biserici Ortodoxe."],["Filioque","Adaosul apusean la Crez: „și de la Fiul”."],["Sola Scriptura","„Numai Scriptura”, principiu protestant."],["Sfânta Tradiție","Viața Bisericii în Duhul Sfânt, alături de Scriptură."]],
  idei:["Ce au în comun toate confesiunile creștine?","Care sunt cele trei-patru deosebiri pe care trebuie să le poți explica limpede?","De ce contează Tradiția pentru ortodocși și de ce o resping protestanții?","Cum a ajuns Transilvania un loc cu atâtea confesiuni?","Cum vorbești despre deosebiri fără dispreț? (legătura cu tema 6)"],
  biblio:["Păcurariu, Istoria Bisericii Ortodoxe Române","Stan și Rus, Istoria Religiilor","Cleopa, Despre credința ortodoxă","Catehism"],
  surse:[]
},
{
  n:8, nat:true, t:"Oameni de cultură români — promotori ai valorilor creștine", scurt:"Oameni de cultură români", when:"după etapa județeană", est:true, stare:"schiță",
  cerut:"Doar pentru etapa națională.",
  pe_scurt:"Opt nume din cultura română care au mărturisit credința prin opera sau prin viața lor. Pentru fiecare: cine a fost, o operă de ținut minte și legătura cu credința.",
  lectie:[
    {h:"Cei opt", p:[
      "<b>Nicolae Iorga</b> (1871-1940), istoric. „Istoria Bisericii românești și a vieții religioase a românilor”; „Bizanț după Bizanț”. A arătat rolul Bisericii în istoria și cultura neamului.",
      "<b>Nichifor Crainic</b> (1889-1972), poet și teolog. Revista „Gândirea”; „Nostalgia paradisului”. A legat cultura română de Ortodoxie. Închis în perioada comunistă.",
      "<b>Vasile Voiculescu</b> (1884-1963), medic și poet. „Poeme cu îngeri”; poezia „În Grădina Ghetsimani”. A făcut parte din gruparea „Rugul Aprins”. Închis 1958-1962.",
      "<b>Nicolae Steinhardt</b> (1912-1989). Botezat în închisoarea Jilava, în 1960; „Jurnalul fericirii”; apoi monah la Rohia; „Dăruind vei dobândi”.",
      "<b>Petre Țuțea</b> (1902-1991), filosof. 13 ani de închisoare; „Omul. Tratat de antropologie creștină”.",
      "<b>Dumitru Stăniloae</b> (1903-1993), preot și teolog. „Teologia Dogmatică Ortodoxă”; traducerea Filocaliei în 12 volume. Închis 1958-1963.",
      "<b>Mircea Eliade</b> (1907-1986), istoric al religiilor. „Sacrul și profanul”; „Istoria credințelor și ideilor religioase”. Omul este, prin fire, <i>homo religiosus</i>.",
      "<b>Constantin Brâncuși</b> (1876-1957), sculptor. Ansamblul de la Târgu Jiu: Masa Tăcerii, Poarta Sărutului, Coloana fără Sfârșit; „Rugăciune” (1907)."]}
  ],
  biblice:[["Matei 5, 14-16","„Voi sunteți lumina lumii.”"],["Matei 10, 32","Mărturisirea lui Hristos înaintea oamenilor."]],
  parinti:[],
  termeni:[["Homo religiosus","Omul ca ființă deschisă prin fire către sacru (Eliade)."],["Filocalie","„Iubire de frumusețe”: culegere de scrieri duhovnicești."],["Gândirism","Curent cultural interbelic care așază Ortodoxia în centrul culturii române."]],
  idei:["Poate fi cultura o formă de mărturisire a credinței?","Ce au în comun Steinhardt, Țuțea, Voiculescu și Stăniloae? Credința încercată în închisoare.","Cum vorbește Brâncuși despre veșnicie fără cuvinte? (legătura cu temele 1 și 4)","De ce spune Steinhardt că a găsit fericirea în închisoare?"],
  biblio:["Plămădeală, Dascăli de cuget și simțire românească","Stăniloae, Reflecții despre spiritualitatea poporului român","Stăniloae, Teologia Dogmatică Ortodoxă"],
  surse:[]
}
]
};
