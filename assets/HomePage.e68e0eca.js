import{f as b,r as L,o as r,a as h,b as t,t as w,i as m,j as D,k as $,d,w as I,l as H,g as S,m as y,n as P,F as C,p as M,h as x,q as V,s as T,v as j,x as B,_ as R}from"./app.4a7360b6.js";import{_ as q}from"./Pager.3f0558a6.js";const z={class:"post-item"},A=["src"],F={class:"else"},E={key:0,class:"post-item__date"},O={key:0},G=["innerHTML"],U=b({props:{item:{type:Object,required:!0}},setup(a){return(c,e)=>{const l=L("RouterLink");return r(),h("div",z,[t("div",{class:"post-item__img",onClick:e[0]||(e[0]=g=>c.$router.push(a.item.path))},[t("img",{src:c.$withBase(a.item.frontmatter.headerImage)},null,8,A)]),t("div",F,[a.item.frontmatter.date?(r(),h("p",E,w(m(D)(a.item.frontmatter.date)),1)):$("",!0),d(l,{to:a.item.path,class:"post-item__title"},{default:I(()=>[t("h2",null,w(a.item.frontmatter.title),1),a.item.frontmatter.subtitle?(r(),h("h3",O,w(a.item.frontmatter.subtitle),1)):$("",!0)]),_:1},8,["to"]),t("div",{class:"post-item__content",innerHTML:a.item.excerpt},null,8,G)])])}}}),J={class:"postlist-wrapper"},K=b({setup(a){const c=H(),e=S(),l=y(()=>{const n=decodeURI(c.currentRoute.value.path.replace(/\/page/g,"").replace(/\//g,""));return n===""?1:Number(n)}),{slicedPosts:g,pagerLink:v}=P(l),_=y(()=>{const n=v.value,o=n&&n.next?{text:e.value.homeNext,link:n.next}:null,u=n&&n.prev?{text:e.value.homePrev,link:n.prev}:null;return{next:o,prev:u}});return(n,o)=>(r(),h("div",J,[(r(!0),h(C,null,M(m(g),u=>(r(),x(U,{key:u.path,item:u},null,8,["item"]))),128)),d(q,{data:m(_)},null,8,["data"])]))}});const Q={class:"sns-wrapper"},W=["href"],X=b({props:{large:{type:Boolean,default:!0}},setup(a){var n;const c={github:{icon:"github",preLink:"https://github.com/"},linkedin:{icon:"linkedin-in",preLink:"https://www.linkedin.com/in/"},facebook:{icon:"facebook-f",preLink:"https://www.facebook.com/"},twitter:{icon:"twitter",preLink:"https://www.twitter.com/"},zhihu:{icon:"zhihu",preLink:"https://www.zhihu.com/people/",iconScale:1.1},weibo:{icon:"weibo",preLink:"http://weibo.com/u/"},email:{icon:"envelope",preLink:"mailto:"},rss:{preLink:"",icon:"rss"}},l=(n=S().value.personalInfo)==null?void 0:n.sns,g=(o,u)=>typeof o=="string"?c[u].preLink+o:o.link,v=(o,u)=>typeof o=="string"?c[u].icon:o.icon,_=(o,u)=>.9*((typeof o=="string"?c[u].iconScale:o.iconScale)||1);return(o,u)=>{const k=L("VIcon");return r(),h("div",Q,[(r(!0),h(C,null,M(m(l),(p,i)=>(r(),h("a",{key:`${i}-${p}`,href:g(p,i),target:"_blank",rel:"noopener noreferrer"},[d(k,{class:"icon-stack"},{default:I(()=>[a.large?(r(),x(k,{key:0,name:"circle",scale:"2",class:"icon-circle"})):$("",!0),d(k,{name:v(p,i),scale:_(p,i),class:"icon-sns",inverse:""},null,8,["name","scale"])]),_:2},1024)],8,W))),128))])}}}),Y={class:"home-blog"},Z=["src"],ee={key:0,class:"hero-bubble"},te=t("div",{class:"hero-bubble__body"},[t("p",{id:"hitokoto"},"\u6B63\u5728\u52A0\u8F7D\u4E00\u8A00...")],-1),oe=t("div",{class:"hero-bubble__tile"},null,-1),ne=[te,oe],se={class:"hero-info"},ae={class:"description"},ie=b({setup(a){const c=S(),e=c.value.homeHeaderImages,l=V(-1),g=V(1),v=()=>{window.scrollTo({top:document.querySelector(".hero").clientHeight,behavior:"smooth"})},_=c.value.hitokoto,n=()=>{let i=_;i=typeof i=="string"?i:"https://v1.hitokoto.cn",fetch(i).then(s=>s.json()).then(s=>{const f=document.querySelector("#hitokoto");f.innerHTML=s.hitokoto}).catch(s=>{console.log(`Get ${i} error: `,s)})};T(()=>{_&&n(),e&&e.length>0&&(l.value=Math.floor(Math.random()*e.length))});const o=i=>{if(!(e&&e.length>0))return;const s=e.length;l.value=(l.value+i+s)%s},u=y(()=>e&&e.length>0&&l.value!==-1?j(e[l.value].path):null),k=y(()=>e&&e.length>0&&l.value!==-1?e[l.value].mask:null),p=c.value.personalInfo;return(i,s)=>{const f=L("VIcon");return r(),h("main",Y,[t("div",{class:"hero",style:B({"background-image":`url(${m(u)})`})},[m(k)?(r(),h("div",{key:0,class:"hero-mask",style:B({background:m(k)})},null,4)):$("",!0),t("div",{class:"hero-content",style:B({opacity:g.value})},[t("img",{class:"hero-avatar hide-on-mobile",src:i.$withBase(m(p).avatar),alt:"hero"},null,8,Z),m(_)?(r(),h("div",ee,ne)):$("",!0),t("div",se,[t("h1",null,w(m(p).name),1),t("p",ae,w(m(p).description),1)]),d(X,{class:"hide-on-mobile",large:""}),t("button",{class:"hero-img-prev hide-on-mobile",onClick:s[0]||(s[0]=N=>o(-1))},[d(f,{name:"chevron-left"})]),t("button",{class:"hero-img-next hide-on-mobile",onClick:s[1]||(s[1]=N=>o(1))},[d(f,{name:"chevron-right"})]),t("span",{class:"hero-arrow-down hide-on-mobile",onClick:s[2]||(s[2]=N=>v())},[d(f,{name:"chevron-down",animation:"float"})])],4)],4),d(K)])}}}),le=b({setup(a){return(c,e)=>(r(),x(R,null,{page:I(()=>[d(ie)]),_:1}))}});export{le as default};
