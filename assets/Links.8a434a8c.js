import{C as k}from"./Common.b0738ace.js";import{P as g}from"./PageHeader.59a555dc.js";import{_ as h,f as v,g as L,H as B,j as w,o as t,h as x,w as C,d as y,i as c,b as e,a as o,E as u,F as _,t as i}from"./app.5481814d.js";const F={class:"links-wrapper"},P={class:"link-group"},$={class:"content"},b=["href"],D=["src"],E={class:"sitename"},H={class:"desc"},N=v({name:"Links",setup(T){const a=L(),p=B(),d=w(()=>{var r;const s=a.value.pages&&a.value.pages.links?a.value.pages.links:{};return s.title===void 0&&(s.title=(r=a.value.pageText)==null?void 0:r.links),s});return(s,r)=>(t(),x(k,null,{page:C(()=>[y(g,{"page-info":c(d)},null,8,["page-info"]),e("div",F,[(t(!0),o(_,null,u(c(p).links,(l,m)=>(t(),o("div",{key:`link-group-${m}`,class:"link-section"},[e("h2",null,i(l.title),1),e("div",P,[(t(!0),o(_,null,u(l.items,(n,f)=>(t(),o("div",{key:`link-${f}`,class:"link-item"},[e("div",$,[e("a",{href:n.url,target:"_blank",rel:"noopener noreferrer"},[e("img",{src:s.$withBase(n.img)},null,8,D),e("span",E,i(n.sitename),1),e("div",H,i(n.desc),1)],8,b)])]))),128))])]))),128))])]),_:1}))}});var S=h(N,[["__file","Links.vue"]]);export{S as default};
