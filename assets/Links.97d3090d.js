import{f as g,g as h,D as k,m as v,o as a,h as B,w as $,d as b,i as c,b as e,a as o,p as _,F as p,_ as w,t as l}from"./app.afb7d666.js";import{_ as x}from"./PageHeader.9fb5c87f.js";const y={class:"links-wrapper"},D={class:"link-group"},F={class:"content"},L=["href"],j=["src"],C={class:"sitename"},N={class:"desc"},E=g({setup(P){const t=h(),d=k(),u=v(()=>{var i;const s=t.value.pages&&t.value.pages.links?t.value.pages.links:{};return s.title===void 0&&(s.title=(i=t.value.pageText)==null?void 0:i.links),s});return(s,i)=>(a(),B(w,null,{page:$(()=>[b(x,{"page-info":c(u)},null,8,["page-info"]),e("div",y,[(a(!0),o(p,null,_(c(d).links,(r,f)=>(a(),o("div",{key:`link-group-${f}`,class:"link-section"},[e("h2",null,l(r.title),1),e("div",D,[(a(!0),o(p,null,_(r.items,(n,m)=>(a(),o("div",{key:`link-${m}`,class:"link-item"},[e("div",F,[e("a",{href:n.url,target:"_blank",rel:"noopener noreferrer"},[e("img",{src:s.$withBase(n.img)},null,8,j),e("span",C,l(n.sitename),1),e("div",N,l(n.desc),1)],8,L)])]))),128))])]))),128))])]),_:1}))}});export{E as default};
