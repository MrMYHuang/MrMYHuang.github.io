import{r as m,n as g,h as v}from"./index-fe2f4722.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const M=(r,p,X,w,f)=>{const c=r.ownerDocument.defaultView;let o=m(r);const d=t=>o?-t.deltaX:t.deltaX;return g({el:r,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:t=>(o=m(r),(e=>{const{startX:n}=e;return o?n>=c.innerWidth-50:n<=50})(t)&&p()),onStart:X,onMove:t=>{const e=d(t);w(e/c.innerWidth)},onEnd:t=>{const e=d(t),n=c.innerWidth,i=e/n,s=(a=>o?-a.velocityX:a.velocityX)(t),l=s>=0&&(s>.2||e>n/2),h=(l?1-i:i)*n;let u=0;if(h>5){const a=h/Math.abs(s);u=Math.min(a,540)}f(l,i<=0?.01:v(0,i,.9999),u)}})};export{M as createSwipeBackGesture};
//# sourceMappingURL=p-BVNUhOOf-8b8a20ca.js.map
