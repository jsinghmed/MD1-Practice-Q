// JJ QBank new-user tour: highlights one part of the screen at a time after sign-in.
// Shown once per person per browser (localStorage "jj-tour-v1"); "Take the tour" in the menu replays it.
(function(){
  const KEY = "jj-tour-v1";
  const $ = id => document.getElementById(id);
  const phone = () => window.matchMedia("(max-width:900px)").matches;
  const STEPS = [
    {t:"Welcome to JJ QBank", b:"A quick tour of where everything is. It takes about a minute, and you can skip it any time."},
    {sel:"#ctabs", side:1, t:"Pick your course", b:"Switch between FBS, MSK, CRS and Ethics here. Each course keeps its own progress, notes and tests."},
    {sel:"#searchWrap", side:1, t:"Search every question", b:"Type a word like “plateau” or “phrenic” to find questions across the course you're in."},
    {sel:"#homeBtn", side:1, t:"Dashboard", b:"Your home page: how many you've answered, what you got wrong, and a Resume button to pick up where you left off."},
    {sel:"#buildBtn", side:1, t:"Create a test", b:"Mix any sections into one test. Choose how many questions, tutor mode or timed exam mode, and whether to scramble the answers."},
    {sel:'[data-act="guides"]', side:1, t:"NBME Dashboard", b:"Harder NBME-style quizzes for each lecture, plus the study guides you can read right on the site."},
    {sel:"#chaps .rv-inc", up:".nvg", side:1, t:"Review what you missed", b:"Incorrect, Flagged and Unanswered collect questions for you automatically, so revising is one click."},
    {sel:"[data-toolstoggle]", side:1, t:"Study tools", b:"Open this menu for the interactive tools: 3D models, the cardiac action potential and PV loop, and Viva Practice."},
    {sel:"#chaps .sec", side:1, openSec:true, t:"Sections and lectures", b:"Open a section to see its lectures. Click a lecture's name to start it, or the arrow to see its topics. Easy and Hard are at the bottom."},
    {sel:".dsc", t:"Answering questions", b:"Press Start to begin. Pick an answer and Submit to see the explanation. Use Highlight, Flag and Notes as you go; your work saves to your account."},
    {sel:"#themeBtn", side:1, t:"Make it yours", b:"Switch between light and dark here. On a computer, the button at the top of the menu hides the sidebar for more room."},
    {t:"You're all set", b:"You can take this tour again any time from “Take the tour” at the bottom of the menu. Good luck studying!"}
  ];
  const css = `
  .jt-dim{position:fixed;inset:0;z-index:10000;background:transparent}
  .jt-hole{position:fixed;z-index:10001;border-radius:10px;box-shadow:0 0 0 9999px rgba(6,10,16,.68);outline:2px solid #4fb8b0;outline-offset:2px;transition:all .25s ease;pointer-events:none}
  .jt-card{position:fixed;z-index:10002;width:min(340px,calc(100vw - 32px));background:var(--panel,#161b22);color:var(--text,#e6edf3);border:1px solid var(--line,#262d36);border-radius:14px;padding:18px 18px 14px;box-shadow:0 18px 40px rgba(0,0,0,.35);font-size:14.5px;line-height:1.5}
  .jt-card h3{margin:0 0 6px;font-size:17px;text-wrap:balance}
  .jt-card p{margin:0 0 14px;color:var(--muted,#9aa4b2)}
  .jt-row{display:flex;align-items:center;gap:8px;justify-content:flex-end}.jt-row button{white-space:nowrap}
  .jt-bar{height:3px;border-radius:2px;background:var(--line,#3a434f);margin:-4px 0 12px;overflow:hidden}.jt-bar i{display:block;height:100%;background:#4fb8b0;transition:width .25s}
  .jt-card button{font:inherit;font-size:13.5px;border-radius:8px;padding:7px 13px;cursor:pointer;border:1px solid var(--line,#3a434f);background:none;color:inherit}
  .jt-card button.go{background:#4fb8b0;border-color:#4fb8b0;color:#0d1f2b;font-weight:600}
  .jt-card button.skip{border:0;color:var(--muted,#9aa4b2);padding:7px 6px;margin-right:auto}
  .jt-card button:focus-visible{outline:2px solid #4fb8b0;outline-offset:2px}
  .jt-card .ct{font-size:12px;color:var(--muted,#9aa4b2);margin-bottom:4px;letter-spacing:.04em}
  @media (max-width:900px){.jt-card{left:16px!important;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px))!important;top:auto!important;width:auto}}
  @media (prefers-reduced-motion:reduce){.jt-hole{transition:none}}
  .sfoot .jt-replay{margin-left:auto;margin-right:8px;background:none;border:0;color:var(--muted);font:inherit;font-size:12.5px;cursor:pointer;text-decoration:underline;text-underline-offset:3px}
  `;
  let i = 0, dim, hole, card;
  function store(v){ try { v ? localStorage.setItem(KEY, "1") : localStorage.removeItem(KEY); } catch(e) {} }
  function seen(){ try { return localStorage.getItem(KEY) === "1"; } catch(e) { return true; } }
  function target(s){
    if (!s.sel) return null;
    let el = document.querySelector(s.sel);
    if (el && s.up) el = el.closest(s.up) || el;
    return el && el.offsetParent !== null ? el : null;
  }
  function prep(s){
    const side = $("side");
    if (phone()) side.classList.toggle("open", !!s.side);
    if (s.openSec && !document.querySelector("#chaps .sec.open")) { const h = document.querySelector("#chaps .sec-h"); if (h) h.click(); }
  }
  function show(){
    const s = STEPS[i]; prep(s);
    const el = target(s);
    if (el) el.scrollIntoView({block:"nearest"});
    requestAnimationFrame(()=>{
      if (el) {
        const r = el.getBoundingClientRect(), pad = 4;
        Object.assign(hole.style, {left:(r.left-pad)+"px", top:(r.top-pad)+"px", width:(r.width+pad*2)+"px", height:Math.min(r.height+pad*2, innerHeight*0.6)+"px", opacity:1});
        if (!phone()) {
          const cw = card.offsetWidth || 340, ch = card.offsetHeight || 190;
          let x = r.right + 16, y = r.top;
          if (x + cw > innerWidth - 16) { x = Math.max(16, Math.min(r.left, innerWidth - cw - 16)); y = r.bottom + 14; }
          if (y + ch > innerHeight - 16) y = Math.max(16, r.top - ch - 14);
          card.style.left = x+"px"; card.style.top = Math.max(16, y)+"px";
        }
      } else {
        Object.assign(hole.style, {left:"50%", top:"50%", width:"0px", height:"0px", opacity:1});
        if (!phone()) { card.style.left = (innerWidth/2 - (card.offsetWidth||340)/2)+"px"; card.style.top = (innerHeight/2 - (card.offsetHeight||190)/2)+"px"; }
      }
    });
    const last = i === STEPS.length-1;
    card.innerHTML = `<div class="ct">${i+1} of ${STEPS.length}</div><h3 id="jtTitle">${s.t}</h3><p>${s.b}</p><div class="jt-bar"><i style="width:${Math.round((i+1)*100/STEPS.length)}%"></i></div>
      <div class="jt-row">
      ${last ? "" : `<button class="skip" data-jt="skip">Skip tour</button>`}
      ${i ? `<button data-jt="back">Back</button>` : ""}
      <button class="go" data-jt="next">${last ? "Done" : i ? "Next" : "Start the tour"}</button></div>`;
    card.querySelector(".go").focus({preventScroll:true});
  }
  function end(){
    store(true);
    [dim, hole, card].forEach(x=>x && x.remove()); dim = hole = card = null;
    if (phone()) $("side").classList.remove("open");
    window.removeEventListener("resize", show); document.removeEventListener("keydown", key, true);
  }
  function key(e){
    if (!card) return;
    if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); end(); }
    else if (e.key === "ArrowRight") { e.preventDefault(); e.stopPropagation(); i < STEPS.length-1 ? (i++, show()) : end(); }
    else if (e.key === "ArrowLeft" && i) { e.preventDefault(); e.stopPropagation(); i--; show(); }
  }
  function start(){
    if (card) return;
    const home = $("homeBtn"); if (home && home.offsetParent !== null) home.click();
    i = 0;
    dim = document.createElement("div"); dim.className = "jt-dim";
    hole = document.createElement("div"); hole.className = "jt-hole";
    card = document.createElement("div"); card.className = "jt-card"; card.setAttribute("role","dialog"); card.setAttribute("aria-modal","true"); card.setAttribute("aria-labelledby","jtTitle");
    card.addEventListener("click", e=>{ const b = e.target.closest("[data-jt]"); if (!b) return;
      const a = b.dataset.jt;
      if (a === "skip") end(); else if (a === "back") { i--; show(); } else if (i === STEPS.length-1) end(); else { i++; show(); } });
    document.body.append(dim, hole, card);
    window.addEventListener("resize", show); document.addEventListener("keydown", key, true);
    show();
  }
  window.jjStartTour = start;
  const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
  // "Take the tour" link in the menu footer (re-added if the menu re-renders).
  function addReplay(){
    const f = document.querySelector(".sfoot"); if (!f || f.querySelector(".jt-replay")) return;
    const b = document.createElement("button"); b.className = "jt-replay"; b.type = "button"; b.textContent = "Take the tour";
    b.addEventListener("click", ()=>{ start(); });
    f.insertBefore(b, f.querySelector("#themeBtn"));
  }
  addReplay();
  // Start once the app is actually on screen (signed in, splash gone).
  const ready = () => { const g = $("jjGate"), sp = $("splash");
    return !document.documentElement.classList.contains("jjlock") && (!g || g.hidden) && (!sp || sp.classList.contains("out") || sp.hidden || getComputedStyle(sp).display === "none"); };
  let tries = 0;
  const iv = setInterval(()=>{ addReplay(); if (++tries > 600) clearInterval(iv);
    if (!seen() && !card && ready()) { clearInterval(iv); setTimeout(()=>{ if (ready()) start(); }, 700); } }, 500);
})();
