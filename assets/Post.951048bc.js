import{l as L,R as H,f as D,D as N,g as R,m as l,S as W,s as j,U as z,n as q,o as h,h as f,w as v,d as m,b as V,z as A,A as O,i as a,E as $,x as U,k as J,T as M,_ as Y,J as G,C as I}from"./app.19abbc1e.js";import{a as K,_ as Q}from"./Page.00bcd40d.js";import{_ as X}from"./Pager.90e1064a.js";const _=({headers:k,activeLink:n})=>{const r=L();return H("ul",{class:{catalog:!0}},k.map(o=>H("li",{class:{active:n===o.slug,[`level-${o.level}`]:!0,[`toc-link-${o.slug}`]:!0},key:o.title,onClick:()=>{r.currentRoute.value.hash!==`#${o.slug}`&&r.push(`#${o.slug}`)}},o.title)))};_.displayName="Catalog";_.props={headers:{type:Object,required:!0},activeLink:{type:String,default:""}};const oe=D({setup(k){const n=G(),r=N(),o=R(),b=L(),x=I(),S=x.resolve,E=x.pending,c=l(()=>(o.value.catalog||r.value.catalog)&&n.value.headers.length>0),P=l(()=>c.value?n.value.headers:[]),T=t=>t.children.length>0?[t].concat(...t.children.map(T)):t,i=l(()=>[].concat(...P.value.map(T))),e=W({headerHeight:0,screenWidth:0,catalogTop:0,activeLink:"",isFixed:!1}),u=40,w=80,d=()=>{for(let s=i.value.length-1;s>=0;s--){const B=i.value[s].slug,C=document.querySelector(`#${B}`);if((C?C.getBoundingClientRect().top:0)<=100){e.activeLink=B;break}}window.pageYOffset>e.headerHeight+u-w?(e.isFixed=!0,e.catalogTop=w):(e.isFixed=!1,e.catalogTop=e.headerHeight+u),e.screenWidth<=719&&(e.catalogTop=-15)},p=()=>{const t=document.querySelector(".post-header");e.headerHeight=t?t.offsetHeight:0,e.screenWidth=document.body.clientWidth,e.screenWidth<=719?e.catalogTop=-15:e.catalogTop=e.headerHeight+u};let y;j(()=>{window.addEventListener("scroll",d),p(),window.onresize=()=>(()=>{p(),d()})(),y=b.afterEach(()=>{p()})}),z(()=>{window.removeEventListener("scroll",d),y()});const{post:g}=q(),F=l(()=>{if(!g.value)return{};const t=g.value.next;t&&(t.text=o.value.postNext);const s=g.value.prev;return s&&(s.text=o.value.postPrev),{next:t,prev:s}});return(t,s)=>(h(),f(Y,null,{page:v(()=>[m(M,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:a(S),onBeforeLeave:a(E)},{default:v(()=>[V("div",{class:$(["post-wrapper",{"show-catalog":a(c)}])},[A(m(K,{class:"post-header"},null,512),[[O,a(n).title]]),(h(),f(Q,{key:a(n).path,class:"post-content"},{bottom:v(()=>[m(X,{data:a(F)},null,8,["data"])]),_:1})),a(c)?(h(),f(a(_),{key:0,headers:a(i),"active-link":a(e).activeLink,class:$({fixed:a(e).isFixed}),style:U({top:`${a(e).catalogTop}px`})},null,8,["headers","active-link","class","style"])):J("",!0)],2)]),_:1},8,["onBeforeEnter","onBeforeLeave"])]),_:1}))}});export{oe as default};
