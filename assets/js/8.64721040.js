(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{381:function(t,e,a){},383:function(t,e,a){},385:function(t,e,a){"use strict";a(381)},389:function(t,e,a){"use strict";a(383)},391:function(t,e,a){"use strict";var s={props:{pageInfo:{type:Object,default:function(){return{}}}},computed:{headerImage:function(){return this.pageInfo.bgImage?{backgroundImage:"url(".concat(this.$withBase(this.pageInfo.bgImage.path),")")}:{}}}},n=(a(389),a(55)),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header",class:{"style-img":t.pageInfo.bgImage},style:t.headerImage},[t.pageInfo.bgImage&&t.pageInfo.bgImage.mask?a("div",{staticClass:"header-mask",style:{background:t.pageInfo.bgImage.mask}}):t._e(),t._v(" "),a("h1",{staticClass:"title"},[t._v("\n        "+t._s(t.pageInfo.title||t.$page.frontmatter.title)+"\n    ")]),t._v(" "),t.pageInfo.subtitle?a("h3",{staticClass:"subtitle"},[t._v("\n        "+t._s(t.pageInfo.subtitle)+"\n    ")]):t._e()])}),[],!1,null,"ae4e6ae0",null);e.a=i.exports},426:function(t,e,a){},466:function(t,e,a){t.exports=a.p+"assets/img/default-link-avatar.59621d5c.jpg"},467:function(t,e,a){"use strict";a(426)},526:function(t,e,a){"use strict";a.r(e);var s=a(384),n=a(391),i={components:{Common:s.a,PageHeader:n.a}},r=(a(467),a(385),a(55)),l=Object(r.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("PageHeader",{attrs:{pageInfo:t.$themeConfig.pageConfig.links}}),t._v(" "),s("Common",{staticClass:"links-wrapper"},[s("div",{staticClass:"links-group"},t._l(t.$page.frontmatter.links,(function(e,n){return s("div",{key:"link-group-"+n,staticClass:"section"},[s("h2",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),s("ul",t._l(e.items,(function(e,n){return s("li",{key:"link-"+n},[s("a",{attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:e.img?t.$withBase(e.img):a(466)}}),t._v(" "),s("span",{staticClass:"sitename"},[t._v(t._s(e.sitename))]),t._v(" "),s("div",{staticClass:"desc"},[t._v(t._s(e.desc))])])])})),0),t._v(" "),s("hr",{staticStyle:{visibility:"hidden"}})])})),0)])],1)}),[],!1,null,null,null);e.default=l.exports}}]);