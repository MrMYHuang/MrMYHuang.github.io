import{J as r,l as s,a,Y as i,i as c}from"./index-56abbf39.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const m=()=>{const e=window;e.addEventListener("statusTap",()=>{r(()=>{const n=document.elementFromPoint(e.innerWidth/2,e.innerHeight/2);if(!n)return;const t=s(n);t&&new Promise(o=>a(t,o)).then(()=>{i(async()=>{t.style.setProperty("--overflow","hidden"),await c(t,300),t.style.removeProperty("--overflow")})})})})};export{m as startStatusTap};
//# sourceMappingURL=p-DD92Fw3n-310edfc9.js.map
