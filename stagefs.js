// Full screen for a 3D view: shows only the 3D stage, with a small control bar (like a video player).
// <script src="stagefs.js" data-stage="#stage" data-prev="#prev" data-play="#play" data-next="#next"></script>
(function(){
  const me = document.currentScript, D = me.dataset, q = s => s ? document.querySelector(s) : null;
  const FS_IN = "M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5", FS_OUT = "M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5";
  function init(){
    const stage = q(D.stage); if (!stage) return;
    if (getComputedStyle(stage).position === "static") stage.style.position = "relative";
    const css = document.createElement("style");
    css.textContent = `#jfsb{position:absolute;right:10px;bottom:8px;z-index:30;width:34px;height:34px;border-radius:8px;border:none;background:rgba(0,0,0,.45);color:#fff;display:grid;place-items:center;padding:0;cursor:pointer}
#jfsb:hover{background:rgba(0,0,0,.7)}#jfsb svg{width:18px;height:18px}
#jfsbar{display:none;position:absolute;left:0;right:0;bottom:0;z-index:29;align-items:center;gap:8px;padding:28px 60px 12px 14px;background:linear-gradient(transparent,rgba(0,0,0,.7));color:#fff;pointer-events:none}
#jfsbar button{pointer-events:auto;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.25);color:#fff;border-radius:8px;padding:6px 12px;font:600 13px system-ui,-apple-system,sans-serif;cursor:pointer}
#jfsbar button:hover{background:rgba(255,255,255,.26)}
body.jsfs{overflow:hidden}
body.jsfs .jfs-stage{position:fixed!important;inset:0!important;width:100vw!important;height:100vh!important;max-width:none!important;max-height:none!important;margin:0!important;border:0!important;border-radius:0!important;z-index:9000!important}
body.jsfs #jfsbar{display:flex}`;
    document.head.appendChild(css);
    stage.classList.add("jfs-stage");
    const b = document.createElement("button");
    b.id = "jfsb"; b.type = "button"; b.title = "Full screen"; b.setAttribute("aria-label","Full screen");
    b.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="${FS_IN}"/></svg>`;
    if (D.pos === "top") { b.style.top = "10px"; b.style.bottom = "auto"; }
    stage.appendChild(b);
    // control bar mirrors the page's own Back / Play / Next buttons, when it has them
    const ctl = [["prev","← Back"],["play",""],["next","Next →"]].map(([k,l])=>[q(D[k]),l]).filter(x=>x[0]);
    if (ctl.length) {
      const bar = document.createElement("div"); bar.id = "jfsbar";
      ctl.forEach(([src,l])=>{ const x = document.createElement("button"); x.type = "button"; x.textContent = l || src.textContent.trim();
        x.onclick = e=>{ e.stopPropagation(); src.click(); };
        if (!l) new MutationObserver(()=>{ x.textContent = src.textContent.trim(); }).observe(src, {childList:true, characterData:true, subtree:true});
        bar.appendChild(x); });
      stage.appendChild(bar);
    }
    const path = b.querySelector("path");
    const fit = ()=>{ setTimeout(()=>{ window.dispatchEvent(new Event("resize")); try { if (typeof window.resize === "function") window.resize(); } catch(e){} }, 60); };
    function set(on){ document.body.classList.toggle("jsfs", on); path.setAttribute("d", on ? FS_OUT : FS_IN); b.title = on ? "Exit full screen" : "Full screen"; fit(); }
    const inFs = ()=>!!(document.fullscreenElement || document.webkitFullscreenElement);
    const isOn = ()=>document.body.classList.contains("jsfs");
    b.onclick = e=>{ e.stopPropagation();
      if (isOn()) { if (inFs()) (document.exitFullscreen || document.webkitExitFullscreen).call(document); else if (window.parent !== window) parent.postMessage("jj-exitfs","*"); set(false); return; }
      const el = document.documentElement, rq = el.requestFullscreen || el.webkitRequestFullscreen; set(true);
      if (rq) { try { const p = rq.call(el); if (p && p.catch) p.catch(()=>{}); } catch(e){} } };
    ["fullscreenchange","webkitfullscreenchange"].forEach(ev=>document.addEventListener(ev, ()=>{ if (!inFs() && !window._jjParentFs) set(false); }));
    window.addEventListener("message", e=>{ if (e.data==="jj-stagefs-on") { window._jjParentFs = true; set(true); } if (e.data==="jj-stagefs-off") { window._jjParentFs = false; set(false); } });
    document.addEventListener("keydown", e=>{ if (e.key==="Escape" && isOn() && !inFs()) { if (window.parent !== window) parent.postMessage("jj-exitfs","*"); set(false); } });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
