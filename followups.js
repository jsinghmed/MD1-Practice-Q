// =====================================================================
// Related questions (follow-ups)
// Hidden extra questions linked to a parent question. They live in followups/<prefix>.js, load only when
// opened, and keep their own progress in S.fu, so they never touch chapter totals, tests, search or class stats.
//   S.fu[followUpId] = [chosenIndex, 1 if right else 0]
// =====================================================================
(function(){
  // The app runs inside its own closure, so it hands us what we need through bind() (see index.html).
  let A = null;
  const LET = "ABCDEFGHIJ", $ = id => document.getElementById(id);
  const curQ = () => A.curQ(), pos = () => A.pos(), esc = x => A.esc(x), save = () => A.save(), renderAll = () => A.renderAll(),
    renderCard = () => A.renderCard(), usmleOn = () => A.usmleOn(), showPage = h => A.showPage(h), toast = m => A.toast(m),
    openChapter = (k, i) => A.openChapter(k, i), status = (q, s) => A.status(q, s), navRow = (...a) => A.navRow(...a), secLabel = (q, c) => A.secLabel(q, c);
  const MAN = () => window.JJ_FU_MANIFEST || {};
  const ICON = '<svg class="fuico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>';
  const CHECK = '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
  const TIPKEY = "jj-fu-tip";
  let st = null;            // {pid, i, queue:[pid,...]} while a set is open; i === n means the summary screen
  const sel = {};           // follow-up id -> picked choice before submitting
  const loadState = {};     // prefix -> 1 loading, 2 loaded
  let drillTab = "need";

  const pfxOf = id => String(id).replace(/\d+$/, "");
  const count = id => { const m = MAN()[pfxOf(id)]; return (m && m.n[id]) || 0; };
  const rec = () => (A.S.fu ??= {});
  const data = pid => (window.JJ_FU || {})[pid];
  const fids = pid => Array.from({length: count(pid)}, (_, i) => pid + "-f" + (i + 1));
  const result = fid => { const r = rec()[fid]; return r ? (r[1] ? "ok" : "bad") : null; };
  const fixed = pid => { const f = fids(pid); return f.length > 0 && f.every(x => result(x) === "ok"); };
  const missed = pid => fids(pid).some(x => result(x) === "bad");
  const mix = pid => { const n = count(pid), q = A.byId[pid], hard = q && q.lv === "Hard";
    if (n <= 2) return n === 2 ? "1 easy and 1 hard" : "1"; return hard ? "1 easy and " + (n - 1) + " hard" : (n - 1) + " easy and 1 hard"; };

  function load(pfx, cb){
    const m = MAN()[pfx]; if (!m) return;
    if (loadState[pfx] === 2) return cb && cb();
    if (loadState[pfx] === 1) { setTimeout(() => load(pfx, cb), 120); return; }
    loadState[pfx] = 1;
    const s = document.createElement("script"); s.src = m.file;
    s.onload = () => { loadState[pfx] = 2; cb && cb(); };
    s.onerror = () => { loadState[pfx] = 0; toast("Couldn't load related questions — check your connection"); };
    document.head.appendChild(s);
  }

  function on(){
    if (!A || !st || A.view !== "quiz") return false;
    const q = curQ();
    if (!q || q.id !== st.pid) { st = null; return false; }
    return true;
  }

  // ---------- quiz screen ----------
  function card(){
    const d = data(st.pid);
    if (!d) { load(pfxOf(st.pid), () => { if (on()) renderCard(); }); return `<div class="fuload">Loading related questions…</div>`; }
    const n = d.q.length, U = usmleOn(), back = `Back to question ${pos() + 1}`;
    const dots = d.q.map((f, k) => `<button class="fudot ${result(f.id) || ""} ${k === st.i ? "cur" : ""}" data-fu-go="${k}" title="Extra question ${k + 1}">${k + 1}</button>`).join("");
    let h = `<div class="fuh">${ICON}<div class="fuht"><b>${st.i < n ? `Extra question ${st.i + 1} of ${n}` : "Related questions · summary"}</b><span>Not part of this chapter · not counted in your totals or stats</span><small>${esc(d.k)}</small></div>
      <div class="fudots">${dots}</div><button class="fuback" data-fu-back>${back}</button></div>`;
    if (st.i >= n) return h + summary(d);
    const f = d.q[st.i], r = rec()[f.id], done = !!r, pick = done ? r[0] : sel[f.id];
    h += `<div class="umeta fumeta"><span class="badge">Related question</span> <span class="badge lv${f.lv[0]}">${f.lv}</span></div>`;
    h += `<div class="stem">${esc(f.s)}</div>`;
    h += `<div class="choices" id="fuChoices">` + f.c.map((c, oi) => {
      let cls = "ch", tag = "", why = "";
      if (done) { cls += " done";
        if (oi === f.a) { cls += " right"; tag = `<span class="tag">Correct</span>`; }
        else if (oi === pick) { cls += " wrong"; tag = `<span class="tag">Your answer</span>`; }
        if (f.w && f.w[oi]) { why = `<span class="wi">${esc(f.w[oi])}</span>`; cls += " hasw"; }
      } else if (pick === oi) cls += " sel";
      return `<div class="${cls}" data-fuo="${oi}"><span class="L">${LET[oi]}</span><span class="T"><span class="tx">${esc(c)}</span>${why}</span>${tag}</div>`;
    }).join("") + `</div>`;
    if (!done) return h + `<div class="nav funav"><button class="nbtn" data-fu-back>${back}</button><button class="nbtn primary" data-fu-submit ${pick === undefined ? "disabled" : ""}>Submit</button></div>`;
    const ok = r[1] === 1;
    h += U ? `<div class="ustrip"><div class="us ${ok ? "g" : "r"}"><b>${ok ? "Correct" : "Incorrect"}</b><span>Correct answer: ${LET[f.a]}</span></div><div class="us"><b>Extra question</b><span>Not counted in your stats</span></div></div>`
           : `<div class="exp" style="border-top:none;margin-top:14px;padding-top:0"><div class="verdict ${ok ? "g" : "r"}">${ok ? "Correct." : "Incorrect."} The answer is ${LET[f.a]}. ${esc(f.c[f.a])}</div></div>`;
    h += `<div class="exp"><h4>Why it's correct</h4><p class="pre">${esc(f.e)}</p></div>`;
    h += `<div class="nav funav">${st.i > 0 ? `<button class="nbtn" data-fu-step="-1">← Previous</button>` : ""}<button class="nbtn primary" data-fu-step="1">${st.i < n - 1 ? "Next extra question →" : "See summary →"}</button></div>`;
    return h;
  }
  function summary(d){
    const n = d.q.length, okN = d.q.filter(f => result(f.id) === "ok").length, ans = d.q.filter(f => rec()[f.id]).length;
    const all = okN === n, nextQ = st.queue && st.queue.length;
    return `<div class="fusum"><div class="fusumn"><b>${okN}</b><span>of ${n} right</span></div>
      <div class="fusumt">${all ? `<span class="badge fuok">${CHECK} Concept fixed</span><p>You got every related question right. Question ${pos() + 1} now shows a check mark in the question list.</p>`
        : ans < n ? `<p>${n - ans} related question${n - ans === 1 ? " is" : "s are"} still unanswered.</p>`
        : `<p>The question${n - okN === 1 ? " you missed is" : "s you missed are"} saved in <b>Concept drills</b> in the sidebar, so you can come back to this concept.</p>`}</div></div>
      <div class="nav funav"><button class="nbtn" data-fu-back>Back to question ${pos() + 1}</button>
        ${missed(st.pid) ? `<button class="nbtn" data-fu-retry="${st.pid}">Retry missed</button>` : ""}
        ${nextQ ? `<button class="nbtn primary" data-fu-nextc>Next concept (${st.queue.length} left) →</button>` : ""}</div>`;
  }

  // ---------- buttons, badge, sidebar ----------
  function btn(q, done, where){
    const n = count(q.id); if (!n || !done) return "";
    if (on()) return where === "foot" ? `<button class="ufbtn fubtn" data-fu-back>${ICON}<span>Back to question ${pos() + 1}</span></button>` : "";
    const wrong = status(q, A.S) === "bad";
    return where === "foot"
      ? `<button class="ufbtn fubtn ${wrong ? "acc" : ""}" data-fu-open>${ICON}<span>Related questions</span><span class="fun">${n}</span><span class="fui" data-fu-info role="button" aria-label="What are related questions?">i</span></button>`
      : `<button class="btn fubtn2 ${wrong ? "acc" : ""}" data-fu-open>${ICON}Related questions <span class="fun">${n}</span><span class="fui" data-fu-info role="button" aria-label="What are related questions?">i</span></button>`;
  }
  const badge = id => fixed(id) ? ` <span class="badge fuok" title="You got every related question right">${CHECK} Concept fixed</span>` : "";
  function courseHas(){ return Object.keys(MAN()).some(p => Object.keys(MAN()[p].n).some(id => A.byId[id] && A.byId[id].course === A.S.course)); }
  function coursePids(){ const out = []; Object.keys(MAN()).forEach(p => Object.keys(MAN()[p].n).forEach(id => { if (A.byId[id] && A.byId[id].course === A.S.course) out.push(id); })); return out; }
  function side(){
    if (!courseHas()) return "";
    const n = coursePids().filter(missed).length;
    return navRow('data-fu-drills title="Concepts where you missed a related question"', ICON, "Concept drills", n, A.view === "fudrills", "rv-fu" + (n ? "" : " zero"));
  }

  // ---------- explainer ----------
  function tipHTML(pid, first){
    const n = count(pid);
    return `<b>${n} extra questions on this concept</b><span>Questions written to test the same idea from new angles: ${mix(pid)}. They aren't part of this chapter and don't count toward your totals or stats.</span>`
      + (first ? `<div class="futipf"><small>Hover over the button any time to see this again</small><button data-fu-tipok>Got it</button></div>` : "");
  }
  function showTip(b, first){
    hideTip(); const q = curQ(); if (!q || !b) return;
    const d = document.createElement("div"); d.className = "futip"; d.id = "fuTip"; d.dataset.pid = q.id; d.innerHTML = tipHTML(q.id, first);
    document.body.appendChild(d);
    const r = b.getBoundingClientRect(), w = d.offsetWidth;
    const left = Math.max(8, Math.min(window.innerWidth - w - 8, r.right - w));
    const above = r.top - d.offsetHeight - 12;
    d.style.left = left + "px"; d.style.top = (above > 8 ? above : r.bottom + 12) + "px";
    d.classList.toggle("below", above <= 8);
    d.style.setProperty("--ax", Math.max(14, Math.min(w - 14, r.left + r.width / 2 - left)) + "px");
  }
  function hideTip(){ const t = document.getElementById("fuTip"); if (t) t.remove(); }
  function tipSeen(){ try { return localStorage.getItem(TIPKEY) === "1"; } catch(e) { return true; } }
  // Called on every question render: drop a tip that belongs to another question, then show the first-time tip
  function sync(){ setTimeout(() => { const t = document.getElementById("fuTip"), b = document.querySelector("[data-fu-open]"), q = A && curQ();
    if (t && (!b || !q || t.dataset.pid !== q.id)) t.remove(); firstTip(); }, 60); }
  function firstTip(){ if (tipSeen() || document.getElementById("fuTip")) return; const b = document.querySelector("[data-fu-open]"); if (b && b.offsetParent) showTip(b, true); }

  // ---------- actions ----------
  function open(pid, i, queue){
    if (!count(pid)) return;
    hideTip();
    const f = fids(pid); let at = i;
    if (at === undefined) { at = f.findIndex(x => !rec()[x]); if (at < 0) at = 0; }
    st = {pid, i: at, queue: queue || null};
    load(pfxOf(pid), () => { if (on()) renderAll(); });
    renderAll(); $("main").scrollTo({top: 0}); window.scrollTo({top: 0});
  }
  function lectureOf(pid){
    const L = A.STATIC.filter(c => c.ids && c.ids.includes(pid) && /^Lecture /.test(c.name || ""));
    return L[0] || A.STATIC.find(c => c.ids && c.ids.includes(pid) && /:all$/.test(c.key));
  }
  function retry(pid, queue){
    fids(pid).forEach(x => { if (result(x) === "bad") delete rec()[x]; });
    fids(pid).forEach(x => delete sel[x]); save();
    const L = lectureOf(pid); if (!L) return;
    if (!(A.view === "quiz" && curQ() && curQ().id === pid)) {
      st = {pid, i: Math.max(0, fids(pid).findIndex(x => !rec()[x])), queue: queue || null};
      load(pfxOf(pid), () => { openChapter(L.key, L.ids.indexOf(pid)); });
    } else open(pid, undefined, queue);
  }
  function submit(){
    const d = data(st.pid); if (!d) return; const f = d.q[st.i];
    if (!f || rec()[f.id] || sel[f.id] === undefined) return;
    rec()[f.id] = [sel[f.id], sel[f.id] === f.a ? 1 : 0]; save(); renderAll();
  }
  function step(k){ const d = data(st.pid); if (!d) return; st.i = Math.max(0, Math.min(d.q.length, st.i + k)); renderCard(); $("main").scrollTo({top: 0}); window.scrollTo({top: 0}); }

  document.addEventListener("click", e => {
    const t = e.target; if (!A || !t.closest) return;
    const stop = () => { e.preventDefault(); e.stopImmediatePropagation(); };
    if (t.closest("[data-fu-tipok]")) { stop(); try { localStorage.setItem(TIPKEY, "1"); } catch(x) {} hideTip(); return; }
    if (t.closest("[data-fu-info]")) { stop(); const b = t.closest("[data-fu-open]"); if (document.getElementById("fuTip")) hideTip(); else showTip(b, !tipSeen()); return; }
    if (t.closest("[data-fu-open]")) { stop(); const q = curQ(); if (q) open(q.id); return; }
    if (t.closest("[data-fu-back]")) { stop(); st = null; renderAll(); return; }
    if (t.closest("[data-fu-drills]")) { stop(); st = null; A.view = "fudrills"; $("side").classList.remove("open"); renderAll(); $("main").scrollTo({top: 0}); return; }
    const tab = t.closest("[data-fu-tab]"); if (tab) { stop(); drillTab = tab.dataset.fuTab; page(); return; }
    const rt = t.closest("[data-fu-retry]"); if (rt) { stop(); retry(rt.dataset.fuRetry, st && st.queue); return; }
    const rv = t.closest("[data-fu-review]"); if (rv) { stop(); const pid = rv.dataset.fuReview, L = lectureOf(pid); if (L) { st = {pid, i: 0, queue: null}; load(pfxOf(pid), () => openChapter(L.key, L.ids.indexOf(pid))); } return; }
    if (t.closest("[data-fu-all]")) { stop(); const list = coursePids().filter(missed); if (list.length) retry(list[0], list.slice(1)); return; }
    if (t.closest("[data-fu-nextc]")) { stop(); const q = st.queue.slice(); retry(q[0], q.slice(1)); return; }
    if (!on()) return;
    const go = t.closest("[data-fu-go]"); if (go) { stop(); st.i = +go.dataset.fuGo; renderCard(); return; }
    const sp = t.closest("[data-fu-step]"); if (sp) { stop(); step(+sp.dataset.fuStep); return; }
    if (t.closest("[data-fu-submit]")) { stop(); submit(); return; }
    const ch = t.closest("[data-fuo]");
    if (ch) { stop(); const d = data(st.pid), f = d && d.q[st.i]; if (f && !rec()[f.id]) { sel[f.id] = +ch.dataset.fuo; renderCard(); } return; }
  }, true);
  document.addEventListener("mouseover", e => {
    const b = e.target.closest && e.target.closest("[data-fu-open]");
    if (b && tipSeen() && !document.getElementById("fuTip") && window.matchMedia("(hover: hover)").matches) showTip(b, false);
  });
  document.addEventListener("mouseout", e => {
    const b = e.target.closest && e.target.closest("[data-fu-open]");
    if (b && tipSeen() && !(e.relatedTarget && b.contains(e.relatedTarget))) hideTip();
  });
  window.addEventListener("scroll", () => { if (tipSeen()) hideTip(); }, true);
  document.addEventListener("keydown", e => {
    if (!A || !on() || e.target.matches("textarea,input,select") || e.metaKey || e.ctrlKey) return;
    const d = data(st.pid), f = d && d.q[st.i]; if (!f) return;
    const k = e.key.toUpperCase(), i = LET.indexOf(k);
    if (k.length === 1 && i >= 0 && i < f.c.length) { e.preventDefault(); e.stopImmediatePropagation(); if (!rec()[f.id]) { sel[f.id] = i; renderCard(); } return; }
    if (e.key === "Enter") { e.preventDefault(); e.stopImmediatePropagation(); if (rec()[f.id]) step(1); else submit(); }
  }, true);

  // ---------- Concept drills page ----------
  function page(){
    const pids = coursePids(), pf = [...new Set(pids.map(pfxOf))];
    const need = pf.filter(p => loadState[p] !== 2 && pids.some(id => pfxOf(id) === p && rec()[id + "-f1"] !== undefined || fids(id).some(x => rec()[x])));
    if (need.length) { let left = need.length; showPage(`<div class="page"><div class="fuload">Loading concept drills…</div></div>`); need.forEach(p => load(p, () => { if (--left === 0 && A.view === "fudrills") page(); })); return; }
    const nw = pids.filter(missed), fx = pids.filter(fixed), list = drillTab === "fixed" ? fx : nw;
    const groups = {};
    list.forEach(pid => { const L = lectureOf(pid), key = L ? L.key : "other"; (groups[key] ??= {L, rows: []}).rows.push(pid); });
    const row = pid => {
      const d = data(pid), L = lectureOf(pid), qn = L ? L.ids.indexOf(pid) + 1 : 0, bad = fids(pid).filter(x => result(x) === "bad").length, n = count(pid);
      return `<div class="fdr"><div class="fdrt"><b>${esc(d ? d.k : pid)}</b><span>From question ${qn}${A.byId[pid] ? " · " + esc(A.byId[pid].t) : ""}</span></div>
        <div class="fdrs ${bad ? "r" : "g"}">${bad ? `${bad} of ${n} missed` : `${n} of ${n} right`}</div>
        ${bad ? `<button class="btn" data-fu-retry="${pid}">Retry missed</button>` : `<button class="btn" data-fu-review="${pid}">Review</button>`}</div>`;
    };
    let h = `<div class="page fudpage"><h2>Concept drills</h2><p class="sub">Concepts where you missed a related question. Get every related question for a concept right and it moves to Fixed. Related questions are extras: they are not part of any chapter and don't count toward your totals or stats.</p>
      <div class="fdtabs"><button class="fdtab ${drillTab !== "fixed" ? "on" : ""}" data-fu-tab="need">Needs work · ${nw.length}</button><button class="fdtab ${drillTab === "fixed" ? "on" : ""}" data-fu-tab="fixed">Fixed · ${fx.length}</button>
      ${drillTab !== "fixed" && nw.length ? `<button class="btn primary fdall" data-fu-all>Drill all missed →</button>` : ""}</div>`;
    if (!list.length) h += `<div class="empty">${drillTab === "fixed" ? "No fixed concepts yet. Get every related question for a concept right and it shows up here." : "Nothing to drill right now. When you miss a related question, its concept shows up here."}</div>`;
    Object.values(groups).forEach(g => { h += `<div class="fdg"><div class="fdgh">${esc(g.L ? secLabel(A.byId[g.rows[0]], g.L) + " · " + g.L.name : "Other")}</div>${g.rows.map(row).join("")}</div>`; });
    showPage(h + `</div>`);
  }

  // ---------- styles ----------
  const css = `
  .fuico{width:15px;height:15px;flex:none}
  .ufbtn.fubtn{display:inline-flex;align-items:center;gap:8px;height:32px;margin:auto 10px auto 0;border:1px solid rgba(255,255,255,.28);background:rgba(255,255,255,.06);font-weight:600;font-size:13px}
  .ufbtn.fubtn .fuico{color:#8fd3cc}
  .ufbtn.fubtn.acc{border-color:#4fb8b0;box-shadow:0 0 0 3px rgba(79,184,176,.14)}
  .fun{display:inline-grid;place-items:center;min-width:18px;height:18px;padding:0 5px;border-radius:4px;background:rgba(255,255,255,.14);font-size:11px;font-weight:700}
  .fui{display:none;place-items:center;width:16px;height:16px;border-radius:50%;border:1px solid currentColor;font:700 10px/1 Georgia,serif;opacity:.75}
  @media (hover:none){ .fui{display:inline-grid} }
  .btn.fubtn2{display:inline-flex;align-items:center;gap:7px}
  .btn.fubtn2 .fuico{color:var(--accent,#4fb8b0)} .btn.fubtn2 .fun{background:var(--line);color:var(--text)}
  .btn.fubtn2.acc{border-color:var(--accent,#4fb8b0)}
  .futip{position:fixed;z-index:2000;width:300px;background:var(--card,#161b22);border:1px solid var(--line2,#3a4250);border-radius:8px;padding:12px 14px;font-size:13px;line-height:1.45;color:var(--text);box-shadow:0 12px 32px rgba(0,0,0,.4)}
  .futip b{display:block;margin-bottom:4px;font-size:13.5px} .futip span{color:var(--muted)}
  .futip::after{content:"";position:absolute;bottom:-6px;left:calc(var(--ax) - 5px);width:10px;height:10px;background:inherit;border-right:1px solid var(--line2,#3a4250);border-bottom:1px solid var(--line2,#3a4250);transform:rotate(45deg)}
  .futip.below::after{bottom:auto;top:-6px;transform:rotate(225deg)}
  .futipf{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:10px}
  .futipf small{color:var(--muted);font-size:11.5px} .futipf button{flex:none;white-space:nowrap;background:none;border:none;color:var(--accent,#4fb8b0);font-weight:700;font-size:13px;cursor:pointer;padding:2px 0}
  .fuh{display:flex;align-items:center;gap:12px;max-width:900px;margin:0 0 16px;padding:11px 14px;border:1px solid var(--line2);border-left:3px solid var(--accent,#4fb8b0);border-radius:6px;background:var(--card)}
  .fuh>.fuico{width:18px;height:18px;color:var(--accent,#4fb8b0)}
  .fuht{display:flex;flex-direction:column;gap:1px;min-width:0}
  .fuht b{font-size:14px} .fuht span{font-size:12px;color:var(--muted)} .fuht small{font-size:12.5px;color:var(--text);opacity:.85;margin-top:2px}
  .fudots{display:flex;gap:5px;margin-left:auto}
  .fudot{width:24px;height:24px;border-radius:50%;border:1px solid var(--line2);background:none;color:var(--muted);font-size:11px;font-weight:700;cursor:pointer}
  .fudot.ok{background:var(--green);border-color:var(--green);color:var(--on-green,#fff)} .fudot.bad{background:var(--red);border-color:var(--red);color:#fff}
  .fudot.cur{box-shadow:0 0 0 2px var(--accent,#4fb8b0)}
  .fuback{background:none;border:1px solid var(--line2);color:var(--text);border-radius:6px;padding:6px 11px;font-size:12.5px;font-weight:600;white-space:nowrap;cursor:pointer}
  .fuback:hover{background:var(--hover)}
  .fumeta{margin-bottom:10px}
  @media (max-width:640px){ .fuh{flex-wrap:wrap;gap:10px} .fuh>.fuico{display:none} .fuht{flex:1 1 100%} .fudots{margin-left:0} .fuback{margin-left:auto} .fusum{flex-direction:column;align-items:flex-start;gap:10px} .fdr{flex-wrap:wrap} }
  .funav{margin-top:18px}
  .fuload{padding:30px 0;color:var(--muted)}
  .badge.fuok{display:inline-flex;align-items:center;gap:4px;color:var(--green);border-color:var(--green)}
  .tile.fufix{position:relative} .tile.fufix::after{content:"";position:absolute;right:3px;top:3px;width:7px;height:7px;border-radius:50%;background:var(--green);box-shadow:0 0 0 2px var(--panel,#161b22)}
  .fusum{display:flex;gap:22px;align-items:center;max-width:720px;padding:18px 20px;border:1px solid var(--line2);border-radius:8px;background:var(--card)}
  .fusumn{display:flex;flex-direction:column;align-items:center;min-width:90px} .fusumn b{font-size:34px;line-height:1} .fusumn span{color:var(--muted);font-size:12.5px;margin-top:4px}
  .fusumt p{margin:6px 0 0;color:var(--muted);line-height:1.5}
  .nv.rv-fu .nn{color:var(--accent,#4fb8b0)}
  .fdtabs{display:flex;gap:8px;align-items:center;margin:18px 0 6px}
  .fdtab{border:1px solid var(--line2);background:none;color:var(--muted);border-radius:999px;padding:5px 13px;font-size:13px;font-weight:600;cursor:pointer}
  .fdtab.on{border-color:var(--accent,#4fb8b0);color:var(--accent,#4fb8b0)} .fdall{margin-left:auto}
  .fdg{border:1px solid var(--line);border-radius:10px;margin-top:14px;overflow:hidden}
  .fdgh{padding:10px 16px;font-weight:700;background:var(--panel)}
  .fdr{display:flex;align-items:center;gap:14px;padding:12px 16px;border-top:1px solid var(--line)}
  .fdrt{flex:1;display:flex;flex-direction:column;gap:2px} .fdrt span{font-size:12.5px;color:var(--muted)}
  .fdrs{font-size:12.5px;white-space:nowrap} .fdrs.r{color:var(--red)} .fdrs.g{color:var(--green)}
  `;
  const style = document.createElement("style"); style.textContent = css; document.head.appendChild(style);

  window.JJFU = { sync, bind: api => { A = api; }, count, fixed, missed, on, card, btn, badge, side, page, close: () => { st = null; } };
})();
