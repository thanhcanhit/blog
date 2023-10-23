import{g as B,r as l,C as E,aN as R,aM as V,aO as N,k as S,B as W,aP as D,aQ as L,aR as K,E as T,y as F,P as H,L as X,aC as A,v as M}from"./index-17386793.js";const q=e=>{const{componentCls:t,iconCls:r,antCls:n,zIndexPopup:o,colorText:u,colorWarning:i,marginXXS:s,marginXS:p,fontSize:m,fontWeightStrong:g,colorTextHeading:C}=e;return{[t]:{zIndex:o,[`&${n}-popover`]:{fontSize:m},[`${t}-message`]:{marginBottom:p,display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${t}-message-icon ${r}`]:{color:i,fontSize:m,lineHeight:1,marginInlineEnd:p},[`${t}-title`]:{fontWeight:g,color:C,"&:only-child":{fontWeight:"normal"}},[`${t}-description`]:{marginTop:s,color:u}},[`${t}-buttons`]:{textAlign:"end",whiteSpace:"nowrap",button:{marginInlineStart:p}}}}},$=B("Popconfirm",e=>q(e),e=>{const{zIndexPopupBase:t}=e;return{zIndexPopup:t+60}});var Q=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const w=e=>{const{prefixCls:t,okButtonProps:r,cancelButtonProps:n,title:o,description:u,cancelText:i,okText:s,okType:p="primary",icon:m=l.createElement(T,null),showCancel:g=!0,close:C,onConfirm:P,onCancel:v,onPopupClick:b}=e,{getPrefixCls:d}=l.useContext(E),[f]=R("Popconfirm",V.Popconfirm),y=N(o),x=N(u);return l.createElement("div",{className:`${t}-inner-content`,onClick:b},l.createElement("div",{className:`${t}-message`},m&&l.createElement("span",{className:`${t}-message-icon`},m),l.createElement("div",{className:`${t}-message-text`},y&&l.createElement("div",{className:S(`${t}-title`)},y),x&&l.createElement("div",{className:`${t}-description`},x))),l.createElement("div",{className:`${t}-buttons`},g&&l.createElement(W,Object.assign({onClick:v,size:"small"},n),i??(f==null?void 0:f.cancelText)),l.createElement(D,{buttonProps:Object.assign(Object.assign({size:"small"},L(p)),r),actionFn:P,close:C,prefixCls:d("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},s??(f==null?void 0:f.okText))))},U=e=>{const{prefixCls:t,placement:r,className:n,style:o}=e,u=Q(e,["prefixCls","placement","className","style"]),{getPrefixCls:i}=l.useContext(E),s=i("popconfirm",t),[p]=$(s);return p(l.createElement(K,{placement:r,className:S(s,n),style:o,content:l.createElement(w,Object.assign({prefixCls:s},u))}))},Y=U;var G=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const j=l.forwardRef((e,t)=>{const{prefixCls:r,placement:n="top",trigger:o="click",okType:u="primary",icon:i=l.createElement(T,null),children:s,overlayClassName:p,onOpenChange:m,onVisibleChange:g}=e,C=G(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),{getPrefixCls:P}=l.useContext(E),[v,b]=F(!1,{value:e.open,defaultValue:e.defaultOpen}),d=(a,c)=>{b(a,!0),g==null||g(a),m==null||m(a,c)},f=a=>{d(!1,a)},y=a=>{var c;return(c=e.onConfirm)===null||c===void 0?void 0:c.call(globalThis,a)},x=a=>{var c;d(!1,a),(c=e.onCancel)===null||c===void 0||c.call(globalThis,a)},k=a=>{a.keyCode===M.ESC&&v&&d(!1,a)},_=a=>{const{disabled:c=!1}=e;c||d(a)},O=P("popconfirm",r),I=S(O,p),[z]=$(O);return z(l.createElement(H,Object.assign({},X(C,["title"]),{trigger:o,placement:n,onOpenChange:_,open:v,ref:t,overlayClassName:I,content:l.createElement(w,Object.assign({okType:u,icon:i},e,{prefixCls:O,close:f,onConfirm:y,onCancel:x})),"data-popover-inject":!0}),A(s,{onKeyDown:a=>{var c,h;l.isValidElement(s)&&((h=s==null?void 0:(c=s.props).onKeyDown)===null||h===void 0||h.call(c,a)),k(a)}})))});j._InternalPanelDoNotUseOrYouWillBeFired=Y;const Z=j;export{Z as P};
