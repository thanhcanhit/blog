import{k as x,r as i,g as ce,h as de,K as ge,C as A,L as Y,A as ue,_ as me,M as he,j as l,P as ae,O as fe,Q as Z,V as pe,W as be,X as xe,Y as ve}from"./index-17386793.js";import{A as $e,d as Ce,e as ye}from"./index-b00cab11.js";import{P as je,B as we,a as Se,b as ke,c as Ne,S as Ee}from"./index-5163ce89.js";import{b as Oe,c as Re}from"./postRequest-8c754513.js";import{P as Me}from"./Pagination-ad58d8ed.js";import"./index-7dcf87ce.js";import"./tagRequest-5dd9008d.js";const Pe=e=>{const{prefixCls:t,className:n,style:a,size:s,shape:c}=e,d=x({[`${t}-lg`]:s==="large",[`${t}-sm`]:s==="small"}),o=x({[`${t}-circle`]:c==="circle",[`${t}-square`]:c==="square",[`${t}-round`]:c==="round"}),r=i.useMemo(()=>typeof s=="number"?{width:s,height:s,lineHeight:`${s}px`}:{},[s]);return i.createElement("span",{className:x(t,d,o,n),style:Object.assign(Object.assign({},r),a)})},D=Pe,ze=new ge("ant-skeleton-loading",{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),W=e=>({height:e,lineHeight:`${e}px`}),I=e=>Object.assign({width:e},W(e)),Be=e=>({background:e.skeletonLoadingBackground,backgroundSize:"400% 100%",animationName:ze,animationDuration:e.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite"}),Q=e=>Object.assign({width:e*5,minWidth:e*5},W(e)),Ie=e=>{const{skeletonAvatarCls:t,gradientFromColor:n,controlHeight:a,controlHeightLG:s,controlHeightSM:c}=e;return{[`${t}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:n},I(a)),[`${t}${t}-circle`]:{borderRadius:"50%"},[`${t}${t}-lg`]:Object.assign({},I(s)),[`${t}${t}-sm`]:Object.assign({},I(c))}},Ae=e=>{const{controlHeight:t,borderRadiusSM:n,skeletonInputCls:a,controlHeightLG:s,controlHeightSM:c,gradientFromColor:d}=e;return{[`${a}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:d,borderRadius:n},Q(t)),[`${a}-lg`]:Object.assign({},Q(s)),[`${a}-sm`]:Object.assign({},Q(c))}},se=e=>Object.assign({width:e},W(e)),He=e=>{const{skeletonImageCls:t,imageSizeBase:n,gradientFromColor:a,borderRadiusSM:s}=e;return{[`${t}`]:Object.assign(Object.assign({display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",background:a,borderRadius:s},se(n*2)),{[`${t}-path`]:{fill:"#bfbfbf"},[`${t}-svg`]:Object.assign(Object.assign({},se(n)),{maxWidth:n*4,maxHeight:n*4}),[`${t}-svg${t}-svg-circle`]:{borderRadius:"50%"}}),[`${t}${t}-circle`]:{borderRadius:"50%"}}},V=(e,t,n)=>{const{skeletonButtonCls:a}=e;return{[`${n}${a}-circle`]:{width:t,minWidth:t,borderRadius:"50%"},[`${n}${a}-round`]:{borderRadius:t}}},K=e=>Object.assign({width:e*2,minWidth:e*2},W(e)),qe=e=>{const{borderRadiusSM:t,skeletonButtonCls:n,controlHeight:a,controlHeightLG:s,controlHeightSM:c,gradientFromColor:d}=e;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[`${n}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:d,borderRadius:t,width:a*2,minWidth:a*2},K(a))},V(e,a,n)),{[`${n}-lg`]:Object.assign({},K(s))}),V(e,s,`${n}-lg`)),{[`${n}-sm`]:Object.assign({},K(c))}),V(e,c,`${n}-sm`))},Le=e=>{const{componentCls:t,skeletonAvatarCls:n,skeletonTitleCls:a,skeletonParagraphCls:s,skeletonButtonCls:c,skeletonInputCls:d,skeletonImageCls:o,controlHeight:r,controlHeightLG:m,controlHeightSM:h,gradientFromColor:g,padding:f,marginSM:C,borderRadius:v,titleHeight:p,blockRadius:S,paragraphLiHeight:y,controlHeightXS:j,paragraphMarginTop:$}=e;return{[`${t}`]:{display:"table",width:"100%",[`${t}-header`]:{display:"table-cell",paddingInlineEnd:f,verticalAlign:"top",[`${n}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:g},I(r)),[`${n}-circle`]:{borderRadius:"50%"},[`${n}-lg`]:Object.assign({},I(m)),[`${n}-sm`]:Object.assign({},I(h))},[`${t}-content`]:{display:"table-cell",width:"100%",verticalAlign:"top",[`${a}`]:{width:"100%",height:p,background:g,borderRadius:S,[`+ ${s}`]:{marginBlockStart:h}},[`${s}`]:{padding:0,"> li":{width:"100%",height:y,listStyle:"none",background:g,borderRadius:S,"+ li":{marginBlockStart:j}}},[`${s}> li:last-child:not(:first-child):not(:nth-child(2))`]:{width:"61%"}},[`&-round ${t}-content`]:{[`${a}, ${s} > li`]:{borderRadius:v}}},[`${t}-with-avatar ${t}-content`]:{[`${a}`]:{marginBlockStart:C,[`+ ${s}`]:{marginBlockStart:$}}},[`${t}${t}-element`]:Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},qe(e)),Ie(e)),Ae(e)),He(e)),[`${t}${t}-block`]:{width:"100%",[`${c}`]:{width:"100%"},[`${d}`]:{width:"100%"}},[`${t}${t}-active`]:{[`
        ${a},
        ${s} > li,
        ${n},
        ${c},
        ${d},
        ${o}
      `]:Object.assign({},Be(e))}}},H=ce("Skeleton",e=>{const{componentCls:t}=e,n=de(e,{skeletonAvatarCls:`${t}-avatar`,skeletonTitleCls:`${t}-title`,skeletonParagraphCls:`${t}-paragraph`,skeletonButtonCls:`${t}-button`,skeletonInputCls:`${t}-input`,skeletonImageCls:`${t}-image`,imageSizeBase:e.controlHeight*1.5,borderRadius:100,skeletonLoadingBackground:`linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,skeletonLoadingMotionDuration:"1.4s"});return[Le(n)]},e=>{const{colorFillContent:t,colorFill:n}=e,a=t,s=n;return{color:a,colorGradientEnd:s,gradientFromColor:a,gradientToColor:s,titleHeight:e.controlHeight/2,blockRadius:e.borderRadiusSM,paragraphMarginTop:e.marginLG+e.marginXXS,paragraphLiHeight:e.controlHeight/2}},{deprecatedTokens:[["color","gradientFromColor"],["colorGradientEnd","gradientToColor"]]}),Te=e=>{const{prefixCls:t,className:n,rootClassName:a,active:s,shape:c="circle",size:d="default"}=e,{getPrefixCls:o}=i.useContext(A),r=o("skeleton",t),[m,h]=H(r),g=Y(e,["prefixCls","className"]),f=x(r,`${r}-element`,{[`${r}-active`]:s},n,a,h);return m(i.createElement("div",{className:f},i.createElement(D,Object.assign({prefixCls:`${r}-avatar`,shape:c,size:d},g))))},Fe=Te,_e=e=>{const{prefixCls:t,className:n,rootClassName:a,active:s,block:c=!1,size:d="default"}=e,{getPrefixCls:o}=i.useContext(A),r=o("skeleton",t),[m,h]=H(r),g=Y(e,["prefixCls"]),f=x(r,`${r}-element`,{[`${r}-active`]:s,[`${r}-block`]:c},n,a,h);return m(i.createElement("div",{className:f},i.createElement(D,Object.assign({prefixCls:`${r}-button`,size:d},g))))},De=_e,We="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",Ge=e=>{const{prefixCls:t,className:n,rootClassName:a,style:s,active:c}=e,{getPrefixCls:d}=i.useContext(A),o=d("skeleton",t),[r,m]=H(o),h=x(o,`${o}-element`,{[`${o}-active`]:c},n,a,m);return r(i.createElement("div",{className:h},i.createElement("div",{className:x(`${o}-image`,n),style:s},i.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:`${o}-image-svg`},i.createElement("path",{d:We,className:`${o}-image-path`})))))},Xe=Ge,Je=e=>{const{prefixCls:t,className:n,rootClassName:a,active:s,block:c,size:d="default"}=e,{getPrefixCls:o}=i.useContext(A),r=o("skeleton",t),[m,h]=H(r),g=Y(e,["prefixCls"]),f=x(r,`${r}-element`,{[`${r}-active`]:s,[`${r}-block`]:c},n,a,h);return m(i.createElement("div",{className:f},i.createElement(D,Object.assign({prefixCls:`${r}-input`,size:d},g))))},Qe=Je;var Ve={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"};const Ke=Ve;var Ue=function(t,n){return i.createElement(ue,me({},t,{ref:n,icon:Ke}))};const Ye=i.forwardRef(Ue),Ze=e=>{const{prefixCls:t,className:n,rootClassName:a,style:s,active:c,children:d}=e,{getPrefixCls:o}=i.useContext(A),r=o("skeleton",t),[m,h]=H(r),g=x(r,`${r}-element`,{[`${r}-active`]:c},h,n,a),f=d??i.createElement(Ye,null);return m(i.createElement("div",{className:g},i.createElement("div",{className:x(`${r}-image`,n),style:s},f)))},et=Ze,tt=e=>{const t=o=>{const{width:r,rows:m=2}=e;if(Array.isArray(r))return r[o];if(m-1===o)return r},{prefixCls:n,className:a,style:s,rows:c}=e,d=he(Array(c)).map((o,r)=>i.createElement("li",{key:r,style:{width:t(r)}}));return i.createElement("ul",{className:x(n,a),style:s},d)},nt=tt,at=e=>{let{prefixCls:t,className:n,width:a,style:s}=e;return i.createElement("h3",{className:x(t,n),style:Object.assign({width:a},s)})},st=at;function U(e){return e&&typeof e=="object"?e:{}}function rt(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function ot(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}function it(e,t){const n={};return(!e||!t)&&(n.width="61%"),!e&&t?n.rows=3:n.rows=2,n}const q=e=>{const{prefixCls:t,loading:n,className:a,rootClassName:s,style:c,children:d,avatar:o=!1,title:r=!0,paragraph:m=!0,active:h,round:g}=e,{getPrefixCls:f,direction:C,skeleton:v}=i.useContext(A),p=f("skeleton",t),[S,y]=H(p);if(n||!("loading"in e)){const j=!!o,$=!!r,M=!!m;let k;if(j){const N=Object.assign(Object.assign({prefixCls:`${p}-avatar`},rt($,M)),U(o));k=i.createElement("div",{className:`${p}-header`},i.createElement(D,Object.assign({},N)))}let _;if($||M){let N;if($){const L=Object.assign(Object.assign({prefixCls:`${p}-title`},ot(j,M)),U(r));N=i.createElement(st,Object.assign({},L))}let z;if(M){const L=Object.assign(Object.assign({prefixCls:`${p}-paragraph`},it(j,$)),U(m));z=i.createElement(nt,Object.assign({},L))}_=i.createElement("div",{className:`${p}-content`},N,z)}const P=x(p,{[`${p}-with-avatar`]:j,[`${p}-active`]:h,[`${p}-rtl`]:C==="rtl",[`${p}-round`]:g},v==null?void 0:v.className,a,s,y);return S(i.createElement("div",{className:P,style:Object.assign(Object.assign({},v==null?void 0:v.style),c)},k,_))}return typeof d<"u"?d:null};q.Button=De;q.Avatar=Fe;q.Input=Qe;q.Image=Xe;q.Node=et;const B=q,lt="/assets/hero-2a493943.svg",ct=()=>{const e=()=>{const t=document.body.scrollHeight;window.scrollTo({top:t,behavior:"smooth"})};return l.jsxs("div",{className:"container grid items-center grid-cols-1 py-8 md:grid-cols-2",children:[l.jsx("img",{src:lt,alt:"hero",className:"w-full animate-float"}),l.jsx("div",{children:l.jsx("section",{className:"bg-normal",children:l.jsxs("div",{className:"max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16",children:[l.jsx("h1",{className:"mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white",children:"Chào bạn, mình là Nguyễn Thanh Cảnh"}),l.jsxs("p",{className:"text-base sub-heading",children:[l.jsx("span",{className:"text-xl font-semibold",children:"🎯 Mình đang theo học Software Engineer tại IUH."})," ",l.jsx("br",{}),l.jsx("span",{className:"block w-full pl-4 mt-4 text-left border-l-4 border-gray-500 dark:border-gray-200",children:"Tại đây lưu giữ những dự án của mình trong suốt quá trình học tập & nghiên cứu và tất nhiên source code của chúng nếu các bạn muốn tham khảo & nghiên cứu."})]}),l.jsxs("div",{className:"flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4",children:[l.jsx(ae,{content:"Đến trang github",children:l.jsxs("a",{href:"https://github.com/thanhcanhit",target:"_blank",className:"inline-flex items-center justify-center gap-2 px-5 py-3 text-base font-medium text-center text-gray-900 transition-colors bg-white border border-gray-300 rounded-lg dark:bg-black hover:bg-gray-200 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800",children:[l.jsx($e,{}),"Github"]})}),l.jsx(ae,{content:"Đến phần thông tin ở cuối trang",children:l.jsxs("button",{onClick:e,className:"flex items-center justify-center gap-2 button-primary",children:["About me",l.jsx(fe,{className:"relative top-[2px]"})]})})]})]})})})]})},dt=l.jsxs(l.Fragment,{children:[l.jsx(B,{avatar:!0,loading:!0,paragraph:{rows:4}}),l.jsx(B,{avatar:!0,loading:!0,paragraph:{rows:4}}),l.jsx(B,{avatar:!0,loading:!0,paragraph:{rows:4}}),l.jsx(B,{avatar:!0,loading:!0,paragraph:{rows:4}}),l.jsx(B,{avatar:!0,loading:!0,paragraph:{rows:4}}),l.jsx(B,{avatar:!0,loading:!0,paragraph:{rows:4}})]}),gt=()=>{const[e,t]=i.useState(0),n=9,a=i.useRef(null),[s,c]=i.useState([]),[d,o]=i.useState(1),r=(d-1)*n;i.useEffect(()=>{(async()=>{const f=await Oe();t(f.data)})()},[]),i.useEffect(()=>{(async()=>{const f=await Re(n,r);c(f.data)})()},[r]);function m(){setTimeout(()=>{var g;(g=a.current)==null||g.scrollIntoView({behavior:"smooth",block:"start"})},250)}const h=s.map(g=>l.jsx(je,{post:g},g._id));return l.jsxs("div",{className:"pb-12",children:[l.jsx("div",{ref:a,className:"container grid grid-cols-2 gap-3 py-8 gap-y-6 md:grid-cols-2 lg:grid-cols-3 scroll-mt-2",children:s.length>0?h:dt}),l.jsx("div",{className:"container flex justify-center",children:l.jsx("div",{className:"p-2 bg-gray-200 border rounded-md dark:bg-gray-50 w-fit",children:l.jsx(Me,{current:d,responsive:!0,defaultCurrent:d,defaultPageSize:n,onChange:g=>{m(),o(g)},total:e})})})]})};var re={};function ut(e){if(!e||typeof window>"u")return;const t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t),e}Object.defineProperty(re,"__esModule",{value:!0});var u=i;function mt(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var w=mt(u);ut(`.marquee-container {
  overflow-x: hidden !important;
  display: flex !important;
  flex-direction: row !important;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.overlay::before, .overlay::after {
  background: linear-gradient(to right, var(--gradient-color));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
}
.overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.overlay::before {
  left: 0;
  top: 0;
}

.marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
}

.child {
  transform: var(--transform);
}`);const ht=u.forwardRef(function({style:t={},className:n="",autoFill:a=!1,play:s=!0,pauseOnHover:c=!1,pauseOnClick:d=!1,direction:o="left",speed:r=50,delay:m=0,loop:h=0,gradient:g=!1,gradientColor:f=[255,255,255],gradientWidth:C=200,onFinish:v,onCycleComplete:p,onMount:S,children:y},j){const[$,M]=u.useState(0),[k,_]=u.useState(0),[P,N]=u.useState(1),[z,L]=u.useState(!1),oe=u.useRef(null),E=j||oe,T=u.useRef(null),F=u.useCallback(()=>{if(T.current&&E.current){const b=E.current.getBoundingClientRect(),J=T.current.getBoundingClientRect();let O=b.width,R=J.width;(o==="up"||o==="down")&&(O=b.height,R=J.height),N(a&&O&&R&&R<O?Math.ceil(O/R):1),M(O),_(R)}},[a,E,o]);u.useEffect(()=>{if(z&&(F(),T.current&&E.current)){const b=new ResizeObserver(()=>F());return b.observe(E.current),b.observe(T.current),()=>{b&&b.disconnect()}}},[F,E,z]),u.useEffect(()=>{F()},[F,y]),u.useEffect(()=>{L(!0)},[]),u.useEffect(()=>{typeof S=="function"&&S()},[]);const ee=u.useMemo(()=>a?k*P/r:k<$?$/r:k/r,[a,$,k,P,r]),G=`rgba(${f[0]}, ${f[1]}, ${f[2]}`,ie=u.useMemo(()=>Object.assign(Object.assign({},t),{"--pause-on-hover":!s||c?"paused":"running","--pause-on-click":!s||c&&!d||d?"paused":"running","--width":o==="up"||o==="down"?"100vh":"100%","--transform":o==="up"?"rotate(-90deg)":o==="down"?"rotate(90deg)":"none"}),[t,s,c,d,o]),le=u.useMemo(()=>({"--gradient-color":`${G}, 1), ${G}, 0)`,"--gradient-width":typeof C=="number"?`${C}px`:C}),[G,C]),te=u.useMemo(()=>({"--play":s?"running":"paused","--direction":o==="left"?"normal":"reverse","--duration":`${ee}s`,"--delay":`${m}s`,"--iteration-count":h?`${h}`:"infinite","--min-width":a?"auto":"100%"}),[s,o,ee,m,h,a]),X=u.useMemo(()=>({"--transform":o==="up"?"rotate(90deg)":o==="down"?"rotate(-90deg)":"none"}),[o]),ne=u.useCallback(b=>[...Array(Number.isFinite(b)&&b>=0?b:0)].map((J,O)=>w.default.createElement(u.Fragment,{key:O},u.Children.map(y,R=>w.default.createElement("div",{style:X,className:"child"},R)))),[X,y]);return z?w.default.createElement("div",{ref:E,style:ie,className:"marquee-container "+n},g&&w.default.createElement("div",{style:le,className:"overlay"}),w.default.createElement("div",{className:"marquee",style:te,onAnimationIteration:p,onAnimationEnd:v},w.default.createElement("div",{className:"initial-child-container",ref:T},u.Children.map(y,b=>w.default.createElement("div",{style:X,className:"child"},b))),ne(P-1)),w.default.createElement("div",{className:"marquee",style:te},ne(P))):null});var ft=re.default=ht;function pt(e){return Z({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"}}]})(e)}function bt(e){return Z({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"}}]})(e)}function xt(e){return Z({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z"}}]})(e)}const vt=[{title:"HTML5",icon:Ce,color:"#ff5c29"},{title:"CSS3",icon:pe,color:"#299cf8"},{title:"JavaScript",icon:we,color:"#f7e025"},{title:"Sass",icon:be,color:"#cf6c9c"},{title:"React.js",icon:xe,color:"#08daff"},{title:"TypeScript",icon:Se,color:"#377cc8"},{title:"Redux",icon:xt,color:"#7a50be"},{title:"Tailwindcss",icon:ke,color:"#21b4bc"},{title:"Bootstrap",icon:Ne,color:"#7f18f9"},{title:"Ant Design",icon:ye,color:"#228eff"},{title:"Node.js",icon:ve,color:"#72aa62"},{title:"Express.js",icon:pt},{title:"NoSQL MongoDB",icon:bt,color:"#5dad55"}],$t=()=>l.jsx(ft,{className:"py-12 overflow-hidden text-6xl text-normal",children:vt.map(e=>l.jsx("div",{className:"mx-8",title:e.title,style:{color:e.color},children:e.icon({})},e.title))}),Et=()=>l.jsxs("div",{children:[l.jsx(ct,{}),l.jsx($t,{}),l.jsx(Ee,{gotoButton:!0}),l.jsx(gt,{})]});export{Et as default};
