import{f,g as y,l as k,V as T,n as x,m as _,o as a,a as o,p as m,E as B,x as w,i as l,e as L,t as c,F as v,r as N,b as d,d as h,w as C,k as R,h as V,_ as b,W as A,X as P}from"./app.4a7360b6.js";import{_ as S}from"./PageHeader.89b3a690.js";const j=["onClick"],z={key:0},D={key:1},E=f({props:{currentTag:{type:String,default:""}},setup(g){const i=y(),s=k(),u=T(),{posts:n}=x(),p=_(()=>[{name:i.value.showAllTagsText,path:"/tags/"},...u.tagsWithColor.value]);return(r,t)=>(a(!0),o(v,null,m(l(p),(e,$)=>(a(),o("span",{key:$,class:B(["tag",{active:e.name==g.currentTag,"tag-all":e.path=="/tags/"}]),style:w({backgroundColor:e.tagColor}),onClick:q=>l(s).push(e.path)},[L(c(e.name)+" ",1),e.path=="/tags/"?(a(),o("sup",z,c(l(n).length),1)):(a(),o("sup",D,c(e.pages.length),1))],14,j))),128))}}),F={class:"year"},W={class:"title"},H={key:0,class:"subtitle"},U=d("hr",null,null,-1),X=f({props:{data:{type:Array,default:()=>[]}},setup(g){return(i,s)=>{const u=N("RouterLink");return a(!0),o(v,null,m(g.data,(n,p)=>(a(),o("section",{key:p},[d("span",F,c(n.year),1),(a(!0),o(v,null,m(n.data,(r,t)=>(a(),o("div",{key:t,class:"item"},[h(u,{to:r.path},{default:C(()=>[d("p",W,c(r.frontmatter.title),1),r.frontmatter.subtitle?(a(),o("p",H,c(r.frontmatter.subtitle),1)):R("",!0)]),_:2},1032,["to"]),U]))),128))]))),128)}}}),Y={class:"tags-wrapper"},K=f({setup(g){const i=k(),s=y();T();const{posts:u}=x(),n=_(()=>{const t=decodeURI(i.currentRoute.value.path.replace(/\/tags/g,"").replace(/\//g,""));return t===""?s.value.showAllTagsText:t}),p=_(()=>{const t=n.value===s.value.showAllTagsText?"":n.value;return A(P(u.value,t))}),r=_(()=>{var e;const t=s.value.pages&&s.value.pages.tags?s.value.pages.tags:{};return t.title===void 0&&(t.title=(e=s.value.pageText)==null?void 0:e.tags),t});return(t,e)=>(a(),V(b,null,{page:C(()=>[h(S,{"page-info":l(r)},null,8,["page-info"]),d("div",Y,[h(E,{"current-tag":l(n)},null,8,["current-tag"]),h(X,{data:l(p)},null,8,["data"])])]),_:1}))}});export{K as default};
