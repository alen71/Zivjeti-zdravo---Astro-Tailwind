import{u as L,m as x,M as _,i as I,a as T,c as P,f as w,b as E,d as D,p as G,v as X,e as q,g as F,w as $,j as l,h as m}from"./motion.c4d64313.js";import{r as d}from"./index.03be2d59.js";function J(e){const s=L(()=>x(e)),{isStatic:n}=d.useContext(_);if(n){const[,t]=d.useState(e);d.useEffect(()=>s.on("change",t),[])}return s}const K=e=>typeof e=="object"&&e.mix,Q=e=>K(e)?e.mix:void 0;function U(...e){const s=!Array.isArray(e[0]),n=s?0:-1,t=e[0+n],r=e[1+n],o=e[2+n],i=e[3+n],a=I(r,o,{mixer:Q(o[0]),...i});return s?a(t):a}function R(e,s){const n=J(s()),t=()=>n.set(s());return t(),T(()=>{const r=()=>w.update(t,!1,!0),o=e.map(i=>i.on("change",r));return()=>{o.forEach(i=>i()),P(t)}}),n}function Z(e){E.current=[],e();const s=R(E.current,e);return E.current=void 0,s}function ee(e,s,n,t){if(typeof e=="function")return Z(e);const r=typeof s=="function"?s:U(s,n,t);return Array.isArray(e)?O(e,r):O([e],([o])=>r(o))}function O(e,s){const n=L(()=>[]);return R(e,()=>{n.length=0;const t=e.length;for(let r=0;r<t;r++)n[r]=e[r].get();return s(n)})}function te(e,s,n){var t;if(typeof e=="string"){let r=document;s&&(D(!!s.current),r=s.current),n?((t=n[e])!==null&&t!==void 0||(n[e]=r.querySelectorAll(e)),e=n[e]):e=r.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}const b=new WeakMap;let p;function se(e,s){if(s){const{inlineSize:n,blockSize:t}=s[0];return{width:n,height:t}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function ne({target:e,contentRect:s,borderBoxSize:n}){var t;(t=b.get(e))===null||t===void 0||t.forEach(r=>{r({target:e,contentSize:s,get size(){return se(e,n)}})})}function re(e){e.forEach(ne)}function ie(){typeof ResizeObserver>"u"||(p=new ResizeObserver(re))}function oe(e,s){p||ie();const n=te(e);return n.forEach(t=>{let r=b.get(t);r||(r=new Set,b.set(t,r)),r.add(s),p?.observe(t)}),()=>{n.forEach(t=>{const r=b.get(t);r?.delete(s),r?.size||p?.unobserve(t)})}}const j=new Set;let y;function le(){y=()=>{const e={width:window.innerWidth,height:window.innerHeight},s={target:window,size:e,contentSize:e};j.forEach(n=>n(s))},window.addEventListener("resize",y)}function ae(e){return j.add(e),y||le(),()=>{j.delete(e),!j.size&&y&&(y=void 0)}}function ce(e,s){return typeof e=="function"?ae(e):oe(e,s)}const ue=50,H=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),fe=()=>({time:0,x:H(),y:H()}),de={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function A(e,s,n,t){const r=n[s],{length:o,position:i}=de[s],a=r.current,u=n.time;r.current=e["scroll"+i],r.scrollLength=e["scroll"+o]-e["client"+o],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=G(0,r.scrollLength,r.current);const h=t-u;r.velocity=h>ue?0:X(r.current-a,h)}function he(e,s,n){A(e,"x",s,n),A(e,"y",s,n),s.time=n}function ge(e,s){const n={x:0,y:0};let t=e;for(;t&&t!==s;)if(t instanceof HTMLElement)n.x+=t.offsetLeft,n.y+=t.offsetTop,t=t.offsetParent;else if(t.tagName==="svg"){const r=t.getBoundingClientRect();t=t.parentElement;const o=t.getBoundingClientRect();n.x+=r.left-o.left,n.y+=r.top-o.top}else if(t instanceof SVGGraphicsElement){const{x:r,y:o}=t.getBBox();n.x+=r,n.y+=o;let i=null,a=t.parentNode;for(;!i;)a.tagName==="svg"&&(i=a),a=t.parentNode;t=i}else break;return n}const pe={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},N={start:0,center:.5,end:1};function B(e,s,n=0){let t=0;if(N[e]!==void 0&&(e=N[e]),typeof e=="string"){const r=parseFloat(e);e.endsWith("px")?t=r:e.endsWith("%")?e=r/100:e.endsWith("vw")?t=r/100*document.documentElement.clientWidth:e.endsWith("vh")?t=r/100*document.documentElement.clientHeight:e=r}return typeof e=="number"&&(t=s*e),n+t}const me=[0,0];function ve(e,s,n,t){let r=Array.isArray(e)?e:me,o=0,i=0;return typeof e=="number"?r=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?r=e.split(" "):r=[e,N[e]?e:"0"]),o=B(r[0],n,t),i=B(r[1],s),o-i}const xe={x:0,y:0};function we(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function ye(e,s,n){let{offset:t=pe.All}=n;const{target:r=e,axis:o="y"}=n,i=o==="y"?"height":"width",a=r!==e?ge(r,e):xe,u=r===e?{width:e.scrollWidth,height:e.scrollHeight}:we(r),h={width:e.clientWidth,height:e.clientHeight};s[o].offset.length=0;let g=!s[o].interpolate;const z=t.length;for(let f=0;f<z;f++){const W=ve(t[f],h[i],u[i],a[o]);!g&&W!==s[o].interpolatorOffsets[f]&&(g=!0),s[o].offset[f]=W}g&&(s[o].interpolate=I(s[o].offset,q(t)),s[o].interpolatorOffsets=[...s[o].offset]),s[o].progress=s[o].interpolate(s[o].current)}function be(e,s=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,s!==e){let t=s;for(;t&&t!==e;)n.x.targetOffset+=t.offsetLeft,n.y.targetOffset+=t.offsetTop,t=t.offsetParent}n.x.targetLength=s===e?s.scrollWidth:s.clientWidth,n.y.targetLength=s===e?s.scrollHeight:s.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function je(e,s,n,t={}){return{measure:()=>be(e,t.target,n),update:r=>{he(e,n,r),(t.offset||t.target)&&ye(e,n,t)},notify:()=>s(n)}}const v=new WeakMap,M=new WeakMap,S=new WeakMap,V=e=>e===document.documentElement?window:e;function ze(e,{container:s=document.documentElement,...n}={}){let t=S.get(s);t||(t=new Set,S.set(s,t));const r=fe(),o=je(s,e,r,n);if(t.add(o),!v.has(s)){const a=()=>{for(const f of t)f.measure()},u=()=>{for(const f of t)f.update(F.timestamp)},h=()=>{for(const f of t)f.notify()},g=()=>{w.read(a,!1,!0),w.update(u,!1,!0),w.update(h,!1,!0)};v.set(s,g);const z=V(s);window.addEventListener("resize",g,{passive:!0}),s!==document.documentElement&&M.set(s,ce(s,g)),z.addEventListener("scroll",g,{passive:!0})}const i=v.get(s);return w.read(i,!1,!0),()=>{var a;P(i);const u=S.get(s);if(!u||(u.delete(o),u.size))return;const h=v.get(s);v.delete(s),h&&(V(s).removeEventListener("scroll",h),(a=M.get(s))===null||a===void 0||a(),window.removeEventListener("resize",h))}}function C(e,s){$(!!(!s||s.current))}const Ee=()=>({scrollX:x(0),scrollY:x(0),scrollXProgress:x(0),scrollYProgress:x(0)});function Se({container:e,target:s,layoutEffect:n=!0,...t}={}){const r=L(Ee);return(n?T:d.useEffect)(()=>(C("target",s),C("container",e),ze(({x:i,y:a})=>{r.scrollX.set(i.current),r.scrollXProgress.set(i.progress),r.scrollY.set(a.current),r.scrollYProgress.set(a.progress)},{...t,container:e?.current||void 0,target:s?.current||void 0})),[e,s,JSON.stringify(t.offset)]),r}const Ne=()=>l.jsxs("a",{href:"/",className:"text-2xl font-normal md:text-3xl",children:["ŽIVJETI ",l.jsx("span",{className:"font-bold",children:"ZDRAVO"})]});let c=[],ke=(e,s)=>{let n=[],t={get(){return t.lc||t.listen(()=>{})(),t.value},l:s||0,lc:0,listen(r,o){return t.lc=n.push(r,o||t.l)/2,()=>{let i=n.indexOf(r);~i&&(n.splice(i,2),t.lc--,t.lc||t.off())}},notify(r){let o=!c.length;for(let i=0;i<n.length;i+=2)c.push(n[i],t.value,r,n[i+1]);if(o){for(let i=0;i<c.length;i+=4){let a=!1;for(let u=i+7;u<c.length;u+=4)if(c[u]<c[i+3]){a=!0;break}a?c.push(c[i],c[i+1],c[i+2],c[i+3]):c[i](c[i+1],c[i+2])}c.length=0}},off(){},set(r){t.value!==r&&(t.value=r,t.notify())},subscribe(r,o){let i=t.listen(r,o);return r(t.value),i},value:e};return t};function Le(e,s,n){let t=new Set([...s,void 0]);return e.listen((r,o)=>{t.has(o)&&n(r,o)})}function Y(e,s={}){let n=d.useCallback(r=>s.keys?Le(e,s.keys,r):e.listen(r),[s.keys,e]),t=e.get.bind(e);return d.useSyncExternalStore(n,t,t)}const k=ke(!1);function We(){const e=Y(k),s={visible:{opacity:1,transition:{type:"tween",duration:.3,delay:.5}},hidden:{opacity:0,transition:{duration:.4,ease:"easeIn"}}},n={visible:{opacity:1,transition:{type:"tween",duration:.3,delay:.5}},hidden:{opacity:0,transition:{duration:.4,ease:"easeIn"}}};return l.jsxs("button",{className:"group relative z-50 h-5 w-6",onClick:()=>{k.set(!e),document.querySelector("html").classList.toggle("stop-scroll")},children:[l.jsxs(m.div,{initial:"visible",animate:e?"hidden":"visible",variants:s,className:" relative flex h-full w-full flex-col justify-between overflow-hidden",children:[l.jsx("span",{className:"h-[0.125rem] w-full bg-black duration-300 group-hover:-translate-x-[150%]"}),l.jsx("span",{className:"h-[0.125rem] w-2/3 bg-black duration-200 group-hover:translate-x-[150%]"}),l.jsx("span",{className:"h-[0.125rem] w-full bg-black delay-100 duration-300 group-hover:-translate-x-[150%]"}),l.jsx("span",{className:"absolute top-0 h-[0.125rem] w-full bg-black  duration-300 translate-x-full group-hover:translate-x-0"}),l.jsx("span",{className:"absolute top-1/2 h-[0.125rem] w-2/3 bg-black duration-200 -translate-x-full -translate-y-1/2 group-hover:translate-x-0"}),l.jsx("span",{className:"absolute bottom-0 h-[0.125rem] w-full bg-black  delay-100 duration-300 translate-x-full group-hover:translate-x-0"})]}),l.jsxs(m.div,{initial:"hidden",animate:e?"visible":"hidden",variants:n,className:"absolute left-0 top-0 flex h-5 w-6 flex-col justify-center overflow-hidden ",children:[l.jsx("span",{className:"h-[0.125rem] w-full bg-black translate-y-[0.0625rem] rotate-45"}),l.jsx("span",{className:"h-[0.125rem] w-full bg-black -translate-y-[0.0625rem] -rotate-45"})]})]})}const Oe=[{href:"https://www.instagram.com/zivjeti__zdravo/",name:"Instagram"},{href:"https://www.youtube.com/@zivjetizdravo?app=desktop",name:"YouTube"},{href:"https://www.tiktok.com/@zivjetizdravo",name:"TikTok"}],He={open:{y:"100%",transition:{type:"spring",stiffness:80,damping:14,mass:.5}},closed:{y:"0%",transition:{delay:.2,duration:.4,ease:"easeInOut"}}},Ae={open:{boxShadow:"0 25px 40px -12px rgb(0 0 0 / 0.35)",transition:{duration:.2,delay:.1}},closed:{boxShadow:"0",transition:{delay:.3,duration:.3,ease:"anticipate"}}},Be={open:{y:0,opacity:1,transition:{type:"spring",stiffness:45,delay:.3}},closed:{y:-50,opacity:0,transition:{type:"tween",duration:.2}}},Me=async e=>await(await fetch(e||"https://wp.zivjetizdravo.com/wp-json/wp/v2/categories?per_page=50")).json(),Ve=()=>{const[e,s]=d.useState([]),n=d.useCallback(async()=>{const t=await Me("https://wp.zivjetizdravo.com/wp-json/wp/v2/categories?parent=0");t&&s(t)},[]);return d.useEffect(()=>{n()},[]),e};function Ce(){const e=Y(k),s=Ve();return l.jsx(m.div,{initial:"closed",animate:e?"open":"closed",variants:He,className:"absolute bottom-0 z-0 w-full  bg-white translate-y-full",children:l.jsx(m.div,{variants:Ae,className:"h-full w-full overflow-hidden py-8 sm:py-12",children:l.jsxs(m.div,{variants:Be,className:"container grid text-lg font-bold sm:grid-cols-2 sm:divide-x-1",children:[l.jsxs("div",{className:"mb-8 border-b-1 pb-8 sm:mb-0 sm:border-b-0 sm:pb-0",children:[l.jsx("p",{className:"mb-5 text-center text-dark-gray",children:"Kategorije"}),l.jsx("ul",{className:"flex flex-col items-center gap-3",children:s.map(({slug:n,name:t})=>{if(t!=="unrecognized")return l.jsx("li",{children:l.jsx("a",{href:"/category/"+n,children:t})},t)})})]}),l.jsxs("div",{className:"",children:[l.jsx("p",{className:"mb-5 text-center text-dark-gray",children:"Social"}),l.jsx("ul",{className:"flex flex-col items-center gap-3",children:Oe.map(({href:n,name:t})=>l.jsx("li",{children:l.jsx("a",{href:n,children:t})},t))})]})]})})})}const Ie=()=>{const[e,s]=d.useState(0);return d.useEffect(()=>{s(window.innerWidth),window.onresize=()=>{s(window.innerWidth)}},[]),e},Re=()=>{const e=Ie(),{scrollYProgress:s}=Se(),n=ee(s,[0,.05],[158,80]);return l.jsx(l.Fragment,{children:l.jsxs(m.header,{style:{willChange:"height",height:e>1024?n:80},className:"left fixed top-0 z-50 w-screen bg-white ",children:[l.jsx("div",{className:"container relative z-10 h-full bg-white",children:l.jsxs("div",{className:"relative flex h-full items-center justify-between",children:[l.jsx(Ne,{}),l.jsx(We,{}),l.jsx("div",{className:"absolute bottom-0 left-0 h-1 w-full bg-light-gray"})]})}),l.jsx(Ce,{})]})})};export{Re as default};
