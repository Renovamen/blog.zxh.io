import{f as g,g as h,D as k,m as v,o as a,h as B,w as $,d as w,i as c,b as e,a as o,p as _,F as p,_ as x,t as l}from"./app.a8274c06.js";import{_ as y}from"./PageHeader.6a04ca06.js";const D={class:"links-wrapper"},F={class:"link-group"},L={class:"content"},b=["href"],j=["src"],C={class:"sitename"},N={class:"desc"},E=g({setup(P){const t=h(),u=k(),d=v(()=>{var i;const s=t.value.pages&&t.value.pages.links?t.value.pages.links:{};return s.title===void 0&&(s.title=(i=t.value.pageText)==null?void 0:i.links),s});return(s,i)=>(a(),B(x,null,{page:$(()=>[w(y,{"page-info":c(d)},null,8,["page-info"]),e("div",D,[(a(!0),o(p,null,_(c(u).links,(r,m)=>(a(),o("div",{key:`link-group-${m}`,class:"link-section"},[e("h2",null,l(r.title),1),e("div",F,[(a(!0),o(p,null,_(r.items,(n,f)=>(a(),o("div",{key:`link-${f}`,class:"link-item"},[e("div",L,[e("a",{href:n.url,target:"_blank",rel:"noopener noreferrer"},[e("img",{src:s.$withBase(n.img)},null,8,j),e("span",C,l(n.sitename),1),e("div",N,l(n.desc),1)],8,b)])]))),128))])]))),128))])]),_:1}))}});export{E as default};
