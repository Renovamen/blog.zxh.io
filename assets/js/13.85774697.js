(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{378:function(t,s,a){},382:function(t,s,a){"use strict";a(378)},428:function(t,s,a){},516:function(t,s,a){"use strict";a(428)},525:function(t,s,a){"use strict";a.r(s);var e=a(381),i={github:"https://github.com/",linkedin:"https://www.linkedin.com/in/",facebook:"https://www.facebook.com/",twitter:"https://www.twitter.com/",zhihu:"https://www.zhihu.com/people/",weibo:"http://weibo.com/",email:"mailto:"},n={github:"<i class='fab fa-github' />",linkedin:"<i class='fab fa-linkedin' />",facebook:"<i class='fab fa-facebook-square' />",twitter:"<i class='fab fa-twitter' />",zhihu:"<i class='fas icon-zhihu'>知</i>",weibo:"<i class='fab fa-weibo' />",email:"<i class='fas fa-envelope' />"},o={components:{Common:e.a},methods:{snsLink:function(t,s){return i[s]+t},snsIcon:function(t){return n[t]}}},r=(a(516),a(382),a(54)),c=Object(r.a)(o,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("Common",{staticClass:"about-wrapper"},[a("div",{staticClass:"header"},[a("div",{staticClass:"header__content"},[a("div",{staticClass:"header__basic col-md-4"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:t.$withBase(t.$page.frontmatter.avatar)}})]),t._v(" "),a("h3",{staticClass:"title"},[t._v(t._s(t.$page.frontmatter.name))]),t._v(" "),a("p",{staticClass:"subname"},[t._v(t._s(t.$page.frontmatter.subname))]),t._v(" "),a("div",{staticClass:"sns"},t._l(t.$themeConfig.SNS,(function(s,e){return a("div",{staticClass:"sns__item"},[a("a",{attrs:{target:"_blank",href:t.snsLink(s,e)},domProps:{innerHTML:t._s(t.snsIcon(e))}},[t._v("\n              "+t._s(t.snsIcon(e))+"\n            ")])])})),0)]),t._v(" "),a("div",{staticClass:"header__info col-md-8"},[a("h3",{staticClass:"title"},[t._v("Biography")]),t._v(" "),a("div",{staticClass:"bio-info"},[t._v("\n          Xiaohan is "),a("del",[t._v("a dragon lost in human world")]),t._v(" now a research assistant\n          supervised by "),a("a",{attrs:{href:"http://www.cis.pku.edu.cn/jzyg/szdw/lt.htm",target:"_blank"}},[t._v("Prof. Tong Lin")]),t._v(".\n          Before that, she got her bachelor's degree in "),a("a",{attrs:{href:"http://sse.tongji.edu.cn",target:"_blank"}},[t._v("Software Engineering")]),t._v("\n          at "),a("a",{attrs:{href:"https://www.tongji.edu.cn",target:"_blank"}},[t._v("Tongji University")]),t._v(".\n          Her main research interests include Continual Learning and Meta Learning with deep architectures.\n          Besides, she is also interested in Natural Language Processing.\n        ")]),t._v(" "),a("div",{staticClass:"personal-info"},[a("div",{staticClass:"col-md-5 interests"},[a("p",{staticClass:"subtitle"},[t._v("Interests")]),t._v(" "),a("ul",t._l(t.$page.frontmatter.interests,(function(s,e){return a("li",{key:"interests-"+e},[a("p",{staticClass:"item",domProps:{innerHTML:t._s(s)}},[t._v(t._s(s))])])})),0)]),t._v(" "),a("div",{staticClass:"col-md-7 education"},[a("p",{staticClass:"subtitle"},[t._v("Education")]),t._v(" "),a("ul",t._l(t.$page.frontmatter.education,(function(s,e){return a("li",{key:"education-"+e},[a("p",{staticClass:"degree"},[t._v(t._s(s.degree)+", "+t._s(s.year))]),t._v(" "),a("p",{staticClass:"school"},[t._v(t._s(s.school))])])})),0)])])])])]),t._v(" "),a("Content",{staticClass:"theme-content"})],1)}),[],!1,null,null,null);s.default=c.exports}}]);