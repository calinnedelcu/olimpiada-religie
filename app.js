(function(){
"use strict";
const D = window.DATA, app = document.getElementById("app"), root = document.documentElement;
const store = {
  get(k){ try{ return localStorage.getItem(k); }catch(e){ return null; } },
  set(k,v){ try{ localStorage.setItem(k,v); }catch(e){} }
};
const SECS = [["pe_scurt","Pe scurt"],["lectie","Ce trebuie știut"],["biblice","Texte biblice"],["parinti","Ce spun Părinții"],["termeni","Termeni"],["idei","Idei de discutat"],["cerut","Ce s-a cerut"],["surse","Surse"]];
const ROMAN = ["I","II","III","IV","V","VI","VII","VIII"];
const MONTHS = ["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"];
const I = {
  cross:'<svg viewBox="0 0 40 64" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="square"><path d="M20 3v58M13 12h14M5 25h30M11 44l18 8"/></g></svg>',
  arrow:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h9.5M8.5 4 12.5 8l-4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  ext:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3h7v7M13 3 4.5 11.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  sun:'<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"/></g></svg>',
  moon:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>'
};

const EMBLEM = (() => {
  let rays = "";
  for(let i = 0; i < 48; i++){
    const a = i / 48 * Math.PI * 2, c = Math.cos(a), s = Math.sin(a);
    rays += `<line x1="${(120 + c*86).toFixed(1)}" y1="${(120 + s*86).toFixed(1)}" x2="${(120 + c*95).toFixed(1)}" y2="${(120 + s*95).toFixed(1)}"/>`;
  }
  return `<svg class="emblem" viewBox="0 0 240 240" aria-hidden="true">
    <circle class="r1" cx="120" cy="120" r="116"/>
    <circle class="r2" cx="120" cy="120" r="108" style="stroke-dasharray:0 7.0686"/>
    <circle class="r3" cx="120" cy="120" r="98"/>
    <g class="rays">${rays}</g>
    <g class="x"><rect x="116" y="40" width="8" height="160"/><rect x="101" y="60" width="38" height="7"/><rect x="70" y="86" width="100" height="8"/><line x1="95" y1="150" x2="145" y2="167"/></g>
    <g class="ic"><path d="M80 107h22M137 107h24"/><text x="91" y="129" text-anchor="middle">IC</text><text x="149" y="129" text-anchor="middle">XC</text></g>
  </svg>`;
})();
const today = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`; };
const link = id => D.links.find(l => l.id === id);
const tema = n => D.teme.find(t => t.n === n);
const label = t => t.nat ? "Națională" : "Tema " + t.n;
const ANI = D.subiecte.map(a => a.an).sort();
const LEGEND = `<p class="legend-note"><span class="quoted">„între ghilimele”</span> = citat exact · fără ghilimele = explicat pe scurt</p>`;
const CER_NOTE = `<p class="legend-note">Cerințele de la Subiectul I și reperele eseului sunt copiate din subiect. Enunțul de la Subiectul II e prescurtat.</p>`;
const startText = s => s.text.startsWith("Fără") ? s.text : `Pornind de la: ${s.text}`;

/* ---------- progres ---------- */
function secsOf(t){
  return SECS.filter(([k]) => {
    if(k === "pe_scurt" || k === "cerut") return true;
    if(k === "surse") return t.surse.length || (t.biblio || []).length;
    return t[k] && t[k].length;
  });
}
function prog(t){
  const s = secsOf(t), done = s.filter(([k]) => store.get(`p-${t.n}-${k}`) === "1").length;
  return {done, total:s.length, pct:Math.round(done / s.length * 100)};
}
function progAll(){
  let d = 0, tot = 0;
  D.teme.filter(t => !t.nat).forEach(t => { const p = prog(t); d += p.done; tot += p.total; });
  return Math.round(d / tot * 100);
}
function current(){
  const t = today(), st = D.calendar.filter(c => c.tema);
  return st.find(c => c.from <= t && t <= c.to) || st.find(c => c.from > t) || st[st.length - 1];
}

/* ---------- bucăți comune ---------- */
const progHTML = (p, id) => `<div class="prog"><div class="bar"><i ${id ? `id="${id}"` : ""} data-w="${p.pct}"></i></div><span ${id ? `id="${id}-t"` : ""}>${p.done}/${p.total} parcurse</span></div>`;
const statusTag = t => t.stare === "complet" ? `<span class="tag ok">Lecție completă</span>` : `<span class="tag est">Schiță · de verificat</span>`;
const lvTag = lv => `<span class="tag ${({"Ușor":"ok","Mediu":"gold","Greu":"red"})[lv] || ""}">${lv}</span>`;
const phead = (crumb, kicker, title, lede, extra) => `
  <header class="phead">
    ${crumb ? `<p class="crumb">${crumb}</p>` : ""}
    <p class="kicker">${kicker}</p>
    <h1>${title}</h1>
    ${lede ? `<p class="lede">${lede}</p>` : ""}
    ${extra || ""}
  </header>
  <div class="orn"></div>`;

const srcRow = l => `
  <article class="src" data-teme="${l.teme.join(",")}">
    <h3>${l.t}</h3>
    <div class="meta"><span>${l.by}</span><span class="tag">${l.lang}</span>${lvTag(l.lv)}</div>
    <p class="why"><b>Pentru ce:</b> ${l.why}</p>
    ${l.tip ? `<p class="tip">${l.tip}</p>` : ""}
    <div class="open">
      ${l.local ? `<a class="btn ghost sm" href="${l.local}" target="_blank" rel="noopener">PDF din folder</a>` : ""}
      <a class="btn ghost sm" href="${l.url}" target="_blank" rel="noopener noreferrer">${l.local ? "Online" : "Deschide"} ${I.ext}</a>
    </div>
  </article>`;

const temaRow = t => `
  <a class="row" href="#/tema/${t.n}">
    <span class="n">${t.nat ? "N" : t.n}</span>
    <span class="main"><span class="t">${t.scurt}</span><span class="s">${t.when}${t.est ? " · estimativ" : ""}${t.stare === "complet" ? "" : " · schiță"}</span></span>
    <span class="go">${I.arrow}</span>
  </a>`;

const linkCard = (href, title, text) => `<a class="card lc" href="${href}"><h3>${title}</h3><p class="muted small" style="margin:0">${text}</p><span class="go">${I.arrow}</span></a>`;

/* ---------- pagini ---------- */
const views = {

  ""(){
    const c = current(), t = tema(c.tema), live = c.from <= today() && today() <= c.to;
    return `
    <section class="hero">
      <div>
        <p class="kicker">Olimpiada de religie · cult ortodox · clasa a XII-a</p>
        <h1>Pregătire pentru olimpiadă</h1>
        <p class="lede">Lecțiile, calendarul, punctajul și sursele, adunate într-un singur loc.</p>
        <div class="hero-actions">
          <a class="btn" href="#/tema/${t.n}">${live ? "Continuă" : "Începe"}: ${label(t).toLowerCase()} ${I.arrow}</a>
          <a class="btn ghost" href="#/calendar">Calendar</a>
        </div>
      </div>
      ${EMBLEM}
    </section>
    <div class="orn"></div>

    <div class="home-grid">
      <a class="card now" href="#/tema/${t.n}">
        <p class="kicker">${live ? "Săptămâna aceasta" : "Urmează"} · ${c.when}</p>
        <h3>${t.scurt}</h3>
        <p class="muted clamp">${t.pe_scurt}</p>
      </a>
      <div class="card facts">
        <div class="fact"><span>Durata probei</span><b>3 ore</b></div>
        <div class="fact"><span>Punctaj maxim</span><b>100 p</b></div>
        <div class="fact"><span>Prag pentru națională</span><b>80 p</b></div>
        <div class="fact"><span>Etapa județeană</span><b>~ martie</b></div>
      </div>
    </div>

    <h2>Teme</h2>
    <div class="rows">${D.teme.map(temaRow).join("")}</div>

    <h2>Organizare</h2>
    <div class="grid">
      ${linkCard("#/proba","Proba","Format, punctaj, calificare și premii.")}
      ${linkCard("#/cerut","Ce s-a cerut","Subiectele din 2025 și 2026, cerință cu cerință.")}
      ${linkCard("#/biblioteca","Bibliotecă",`${D.links.length} linkuri cu „pentru ce” și bibliografia oficială.`)}
      ${linkCard("#/intrebari","De întrebat","Ce trebuie lămurit cu profesorul.")}
    </div>`;
  },

  teme(){
    return phead("", "Învățare", "Teme", "Șapte teme pentru etapa județeană și una în plus pentru națională. Tema 1 e lecție completă; celelalte sunt schițe.") + `
    <h2>Etapa județeană</h2>
    <div class="rows">${D.teme.filter(t => !t.nat).map(temaRow).join("")}</div>
    <h2>În plus, pentru etapa națională</h2>
    <div class="rows">${D.teme.filter(t => t.nat).map(temaRow).join("")}</div>`;
  },

  tema(n){
    const t = tema(+n);
    if(!t) return views[""]();
    const secs = secsOf(t), done = k => store.get(`p-${t.n}-${k}`) === "1";
    const cerute = [];
    D.subiecte.forEach(a => a.s.forEach(s => { if(s.teme.includes(t.n)) cerute.push({an:a.an, s}); }));
    const src = t.surse.map(link).filter(Boolean), biblio = t.biblio || [];

    const body = {
      pe_scurt: `<p class="lead">${t.pe_scurt}</p>`,
      lectie: `<div class="prose">${t.lectie.map(l => `<h3>${l.h}</h3>${l.p.map(x => `<p>${x}</p>`).join("")}`).join("")}</div>`,
      biblice: `${LEGEND}<div class="tablebox"><table class="tbl"><tr><th>Locul</th><th>Ce găsești acolo</th></tr>${t.biblice.map(b => `<tr><td class="ref">${b[0]}</td><td>${b[2] === "q" ? `<span class="quoted">„${b[1]}”</span>` : b[1]}</td></tr>`).join("")}</table></div>`,
      parinti: LEGEND + t.parinti.map(q => q[2] === "q"
        ? `<figure class="quote"><span class="kind">Citat</span><p class="quoted">„${q[0]}”</p><cite>${q[1]}</cite></figure>`
        : `<figure class="quote idea"><span class="kind">Ideea, pe scurt · nu e citat</span><p>${q[0]}</p><cite>După ${q[1]}</cite></figure>`).join(""),
      termeni: `<div class="terms">${t.termeni.map(x => `<div class="term"><b>${x[0]}</b><span>${x[1]}</span></div>`).join("")}</div>`,
      idei: `<ol class="ideas">${t.idei.map(i => `<li>${i}</li>`).join("")}</ol>`,
      cerut: cerute.length
        ? CER_NOTE + cerute.map(c => `<div class="subj"><div class="subj-h"><b>${c.an} · Subiectul ${c.s.n}</b><span class="tag">${c.s.p} de puncte</span></div><p class="muted small">${startText(c.s)}</p><table class="tbl">${c.s.cer.map(x => `<tr><td>${x[0]}</td><td class="pts">${x[1]}</td></tr>`).join("")}</table></div>`).join("")
        : `<p class="muted">${t.cerut}</p>`,
      surse: (src.length ? `<div class="srcs">${src.map(srcRow).join("")}</div>` : "")
        + (biblio.length ? `<div class="card" style="margin-top:14px"><h3>Din bibliografia oficială</h3><ul class="list">${biblio.map(b => `<li>${b}</li>`).join("")}</ul></div>` : "")
    };

    const i = D.teme.indexOf(t), prev = D.teme[i-1], next = D.teme[i+1];
    const chips = `<div class="tags" style="margin-top:20px">${statusTag(t)}${cerute.length ? cerute.map(c => `<span class="tag red">${c.an} · Subiectul ${c.s.n}</span>`).join("") : `<span class="tag">Necerută în ${ANI[0]}-${ANI[ANI.length-1]}</span>`}</div>`;

    return phead(`<a href="#/teme">Teme</a> / ${label(t)}`, `${label(t)} · ${t.when}${t.est ? " · estimativ" : ""}`, t.scurt, t.t, chips) + `
    <div class="doc">
      <aside class="toc" aria-label="Cuprins">
        <p>Cuprins</p>
        <div class="list">${secs.map(([k,l]) => `<button type="button" data-goto="s-${k}" data-s="${k}">${l}</button>`).join("")}</div>
      </aside>
      <div class="content">
        ${secs.map(([k,l], j) => `
        <section class="sec" id="s-${k}">
          <div class="sec-h">
            <span class="rn">${ROMAN[j]}.</span><h2>${l}</h2>
          </div>
          ${body[k]}
        </section>`).join("")}
        <nav class="pn">
          ${prev ? `<a class="card" href="#/tema/${prev.n}"><span class="muted small">← ${label(prev)}</span><h3>${prev.scurt}</h3></a>` : "<span></span>"}
          ${next ? `<a class="card r" href="#/tema/${next.n}"><span class="muted small">${label(next)} →</span><h3>${next.scurt}</h3></a>` : ""}
        </nav>
      </div>
    </div>`;
  },

  calendar(){
    const t = today(), items = [...D.calendar].sort((a,b) => a.from.localeCompare(b.from));
    const groups = [];
    items.forEach(c => { const k = c.from.slice(0,7); let g = groups.find(x => x.k === k); if(!g) groups.push(g = {k, items:[]}); g.items.push(c); });
    return phead("", "Organizare", "Calendar", "Datele tale pe teme și etapele olimpiadei. Ce nu e publicat încă e marcat estimativ.",
      `<div class="legend-row"><span class="tag">data ta</span><span class="tag est">estimativ</span><span class="tag gold">etapă oficială</span></div>`) +
      groups.map(g => {
        const [y, m] = g.k.split("-");
        return `<p class="month">${MONTHS[+m-1]} ${y}</p><div class="cal">${g.items.map(c => {
          const now = c.from <= t && t <= c.to && !c.off, tag = c.tema ? "a" : "div";
          return `<${tag} class="ev ${now ? "now" : ""} ${c.off ? "off" : ""}" ${c.tema ? `href="#/tema/${c.tema}"` : ""}>
            <div class="d">${c.when}</div>
            <div><div class="t">${c.t}</div>${c.note ? `<p class="note">${c.note}</p>` : ""}</div>
            <div class="tags">${now ? `<span class="tag red">Acum</span>` : ""}${c.src ? `<span class="tag">data ta</span>` : ""}${c.est ? `<span class="tag est">estimativ</span>` : ""}${c.off ? `<span class="tag gold">etapă oficială</span>` : ""}</div>
          </${tag}>`;
        }).join("")}</div>`;
      }).join("");
  },

  proba(){
    const p = D.proba;
    return phead("", "Organizare", "Proba", "Cum arată lucrarea, cum se notează și ce trebuie pentru calificare.") + `
    <div class="facts4" style="margin-top:36px">
      <div class="fact4"><span>Durată</span><b>3 ore</b></div>
      <div class="fact4"><span>Punctaj maxim</span><b>100 p</b></div>
      <div class="fact4"><span>Din oficiu</span><b>10 p</b></div>
      <div class="fact4"><span>Prag pentru națională</span><b>80 p</b></div>
    </div>
    <h2>Structura lucrării</h2>
    <div class="pts-bar" role="img" aria-label="Subiectul I 30 de puncte, Subiectul II 20, Subiectul III 40, oficiu 10">
      <div class="seg1"><b>30</b><span>Subiectul I</span></div>
      <div class="seg2"><b>20</b><span>Subiectul II</span></div>
      <div class="seg3"><b>40</b><span>Subiectul III</span></div>
      <div class="seg4"><b>10</b><span>Oficiu</span></div>
    </div>
    <div class="legend">
      <div><b><span class="sw" style="background:#b3261e"></span>Subiectul I · 30 p</b><p>Un text biblic și patru cerințe.</p></div>
      <div><b><span class="sw" style="background:#c99a44"></span>Subiectul II · 20 p</b><p>Text argumentativ: opinie, două argumente, concluzie.</p></div>
      <div><b><span class="sw" style="background:#2f2924"></span>Subiectul III · 40 p</b><p>Eseu structurat, din care 10 puncte pe redactare.</p></div>
      <div><b><span class="sw" style="background:var(--line2)"></span>Oficiu · 10 p</b><p>Se acordă tuturor.</p></div>
    </div>
    <h2>Cum se dau punctele</h2>
    <div class="card"><ul class="list">${p.reguli.map(r => `<li>${r}</li>`).join("")}</ul></div>
    <h2>Calificarea la etapa națională</h2>
    <div class="card"><ul class="list">${p.calificare.map(r => `<li>${r}</li>`).join("")}</ul></div>
    <h2>Premii la etapa județeană</h2>
    <div class="tablebox"><table class="tbl"><tr><th>Premiu</th><th style="text-align:right">Nota</th></tr>${p.premii.map(r => `<tr><td>${r[0]}</td><td class="pts">${r[1]}</td></tr>`).join("")}</table></div>
    <p class="muted small" style="margin-top:12px">${p.nota}</p>`;
  },

  cerut(){
    const judet = D.teme.filter(t => !t.nat);
    const subs = (n, an) => D.subiecte.find(a => a.an === an).s.filter(s => s.teme.includes(n));
    const cell = (n, an) => subs(n, an).map(s => `<span class="tag red">S. ${s.n}</span>`).join(" ") || `<span class="muted">—</span>`;
    const count = n => ANI.filter(an => subs(n, an).length).length;
    return phead("", "Învățare", "Ce s-a cerut", `Subiectele de la etapa județeană din ${ANI.length} ani (${ANI[0]}-${ANI[ANI.length-1]}), cerință cu cerință.`) + `
    <h2>Ce temă a apărut și când</h2>
    <div class="tablebox"><table class="tbl">
      <tr><th>Tema</th>${ANI.map(a => `<th>${a}</th>`).join("")}<th style="text-align:right">Total</th></tr>
      ${judet.map(t => `<tr><td><a href="#/tema/${t.n}" style="text-decoration:none;color:var(--ink);font-weight:500">${t.n}. ${t.scurt}</a></td>${ANI.map(an => `<td>${cell(t.n, an)}</td>`).join("")}<td class="pts">${count(t.n)} din ${ANI.length}</td></tr>`).join("")}
    </table></div>
    <p class="muted small" style="margin-top:10px">S. = Subiectul. Tema 1 și tema 5 au apărut în fiecare an. Subiectele din 2019-2022 nu le-am găsit online.</p>
    <div style="margin-top:28px">${CER_NOTE}</div>
    ${D.subiecte.map(a => `
      <h2>${a.an}</h2>
      <p class="muted" style="margin:-8px 0 16px">Etapa județeană, ${a.data} · <a href="${link(a.link).url}" target="_blank" rel="noopener noreferrer">documentul original</a></p>
      ${a.s.map(s => `<div class="subj">
        <div class="subj-h"><b>Subiectul ${s.n} · ${s.p} de puncte</b><div class="tags">${s.teme.map(n => `<a class="tag" href="#/tema/${n}">Tema ${n}</a>`).join("")}</div></div>
        <p class="muted small">${startText(s)}</p>
        <table class="tbl">${s.cer.map(x => `<tr><td>${x[0]}</td><td class="pts">${x[1]}</td></tr>`).join("")}</table>
      </div>`).join("")}`).join("")}`;
  },

  biblioteca(){
    const f = [["all","Toate"],["1","Tema 1"],["2","Tema 2"],["0","Documente oficiale"]];
    return phead("", "Învățare", "Bibliotecă", "Toate linkurile adunate până acum, cu „pentru ce” lângă fiecare. Am căutat surse doar pentru tema 1.") + `
    <h2>Linkuri</h2>
    <div class="chips" id="chips">${f.map((x,i) => `<button type="button" data-f="${x[0]}" aria-pressed="${i === 0}">${x[1]}</button>`).join("")}</div>
    <div class="srcs" id="lib">${D.links.map(srcRow).join("")}</div>
    <h2>Bibliografia oficială</h2>
    <p class="muted" style="margin:-8px 0 16px">Cele 40 de titluri din regulament. Pe foaia ta se văd primele 4.</p>
    <div class="card"><ol class="biblio">${D.biblio.map(b => `<li>${b}</li>`).join("")}</ol></div>`;
  },

  intrebari(){
    return phead("", "Organizare", "De întrebat", "Ce a rămas neclar. Bifează când ai aflat răspunsul.") + `
    <div class="rows" style="margin-top:36px">${D.intrebari.map((q,i) => {
      const d = store.get(`q-${i}`) === "1";
      return `<label class="q ${d ? "done" : ""}"><input class="cb" type="checkbox" data-k="q-${i}" ${d ? "checked" : ""}><span><b>${q[0]}</b><span class="muted small">${q[1]}</span></span></label>`;
    }).join("")}</div>`;
  }
};

/* ---------- comportament ---------- */
function fillBars(){
  requestAnimationFrame(() => requestAnimationFrame(() => app.querySelectorAll(".bar i").forEach(b => b.style.width = b.dataset.w + "%")));
}
function refreshProg(n){
  const p = prog(tema(n)), bar = document.getElementById("tbar"), txt = document.getElementById("tbar-t");
  if(bar){ bar.dataset.w = p.pct; bar.style.width = p.pct + "%"; }
  if(txt) txt.textContent = `${p.done}/${p.total} parcurse`;
}
let spy;
function scrollSpy(){
  if(spy) spy.disconnect();
  const btns = [...app.querySelectorAll(".toc button")];
  if(!btns.length) return;
  spy = new IntersectionObserver(es => es.forEach(e => {
    if(!e.isIntersecting) return;
    const k = e.target.id.slice(2);
    btns.forEach(b => b.classList.toggle("on", b.dataset.s === k));
    const on = btns.find(b => b.dataset.s === k);
    if(on && on.parentElement.scrollWidth > on.parentElement.clientWidth) on.scrollIntoView({block:"nearest", inline:"center"});
  }), {rootMargin:"-140px 0px -60% 0px"});
  app.querySelectorAll(".sec").forEach(s => spy.observe(s));
}

function route(){
  const parts = location.hash.replace(/^#\/?/, "").split("/");
  const r = Object.prototype.hasOwnProperty.call(views, parts[0]) ? parts[0] : "";
  app.innerHTML = `<div class="view">${views[r](parts[1])}</div>`;
  const active = r === "tema" ? "teme" : r;
  document.querySelectorAll("#links a").forEach(a => {
    const on = a.dataset.r === active;
    a.classList.toggle("on", on);
    if(on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
  });
  window.scrollTo(0, 0);
  fillBars();
  scrollSpy();
  const t = r === "tema" && tema(+parts[1]);
  document.title = (t ? t.scurt : (document.querySelector("#links a.on") || {}).textContent || "Acasă") + " · Olimpiada de Religie XII";
}

app.addEventListener("click", e => {
  const go = e.target.closest("[data-goto]");
  if(go){ const s = document.getElementById(go.dataset.goto); if(s) s.scrollIntoView({behavior:"smooth", block:"start"}); return; }

  const c = e.target.closest("#chips button");
  if(c){
    document.querySelectorAll("#chips button").forEach(x => x.setAttribute("aria-pressed", String(x === c)));
    document.querySelectorAll("#lib .src").forEach(s => { s.hidden = c.dataset.f !== "all" && !s.dataset.teme.split(",").includes(c.dataset.f); });
  }
});
app.addEventListener("change", e => {
  const k = e.target.dataset && e.target.dataset.k;
  if(!k) return;
  store.set(k, e.target.checked ? "1" : "0");
  const q = e.target.closest(".q");
  if(q) q.classList.toggle("done", e.target.checked);
});

const themeBtn = document.getElementById("theme");
function setThemeIcon(){
  const dark = root.dataset.theme === "dark";
  themeBtn.innerHTML = dark ? I.sun : I.moon;
  themeBtn.setAttribute("aria-label", dark ? "Mod luminos" : "Mod întunecat");
  themeBtn.title = dark ? "Mod luminos" : "Mod întunecat";
}
themeBtn.addEventListener("click", () => {
  if(root.dataset.theme === "dark"){ delete root.dataset.theme; store.set("theme", "light"); }
  else { root.dataset.theme = "dark"; store.set("theme", "dark"); }
  setThemeIcon();
});
setThemeIcon();

window.addEventListener("hashchange", route);
route();
})();
