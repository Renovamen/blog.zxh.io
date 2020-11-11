(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{548:function(t,s,a){"use strict";a.r(s);var n=a(54),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("“虽然研究进度堪忧，但鱼还是要摸的”，在这样的理念的驱动下，菜鸡最终折腾出了一个目前看上去还算可以的方案。")]),t._v(" "),a("p",[t._v("我的博客最初 fork 自 "),a("a",{attrs:{href:"https://github.com/Huxpro/huxpro.github.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Huxpro/huxpro.github.io")]),t._v("，用了一段时间之后开始瞎改，把别人干净的代码改得乱七八糟。博客用的是 Jekyll 框架，而 Jekyll 就是 Github Pages 的默认引擎，所以在部署的时候 Github Pages 连 build 这一步都帮你省了。于是在很长一段时间内，作为一只懒惰的菜鸡，我并没有什么动力来折腾这些东西。而现在之所以要折腾，是因为不折腾的确不行了。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("不过这版博客已经是用 VuePress 重写过后的版本了...")])]),t._v(" "),a("h2",{attrs:{id:"奇怪的起因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#奇怪的起因"}},[t._v("#")]),t._v(" 奇怪的起因")]),t._v(" "),a("p",[t._v("说起来这还是一个漫长的故事。首先我的博客的公式渲染引擎用的是 "),a("a",{attrs:{href:"https://katex.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Katex")]),t._v("，因为它快，比 Mathjax 快多了（可以参考"),a("a",{attrs:{href:"https://katex.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里")]),t._v("）。")]),t._v(" "),a("p",[t._v("kramdown 的默认数学公式渲染引擎是 Mathjax，而从 "),a("code",[t._v("v2.0.0")]),t._v(" 开始 kramdown 似乎引入了一些插件来支持 Katex，比如 "),a("a",{attrs:{href:"https://github.com/kramdown/math-katex",target:"_blank",rel:"noopener noreferrer"}},[t._v("kramdown-math-katex")]),t._v("。那么问题来了，Github Pages 的 Jekyll 是不支持除了"),a("a",{attrs:{href:"https://pages.github.com/versions/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这些插件")]),t._v("以外的插件的。那么唯一的办法就只有在本地 build 网站，然后把 build 好的文件 push 到 "),a("code",[t._v("gh-pages")]),t._v(" 分支上去。")]),t._v(" "),a("p",[t._v("不行，这样多麻烦，Jekyll 的天生优势不就没了吗，不然我为啥不用 Hexo 或者 Hugo，它们还比 Jekyll 快，不行不行。")]),t._v(" "),a("p",[t._v("那个时候还没有 Github Actions 这种东西，我又完全不知道别的持续集成方案，就算知道了估计也不想去折腾。于是我在"),a("a",{attrs:{href:"https://xuc.me/blog/katex-and-jekyll/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里")]),t._v("看到了一个比较 hack 的方法，首先让 kramdown 以为我们要用 Mathjax：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("markdown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kramdown    \n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kramdown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("math_engine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mathjax\n")])])]),a("p",[t._v("这样 kramdown 就会把像 "),a("code",[t._v("$$a + b$$")]),t._v(" 这样的公式转换成 Mathjax 能识别的 HTML 形式：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("math/tex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("然后通过 JavaScript 把 "),a("code",[t._v('<script type="math/tex">')]),t._v(" 标签里的东西用 Katex 渲染出来：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"script[type='math/tex']\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replaceWith")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" tex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" katex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderToString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    displayMode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"script[type='math/tex; mode=display']\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replaceWith")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" tex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" katex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderToString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("%.*")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    displayMode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("虽然看上去不太优雅，但好歹能用，本菜鸡的理念是能用就行，于是就这样过了一段时间。直到几个月前，我发现我博客的公式不对劲了，它们突然都变成了这样："),a("code",[t._v("\\(a + b\\)")]),t._v("。")]),t._v(" "),a("p",[t._v("我一脸懵逼，第一反应是我是不是又把博客哪儿的代码搞崩了，但想了想我似乎也没有动过公式那部分的代码？而且当时我部署在 Coding Pages 上的博客公式还是正常的，那么大概率就是 Github Pages 哪里不对劲了。")]),t._v(" "),a("p",[t._v("搜了一下发现 Github Pages 把 kramdown 的版本更新到了 "),a("code",[t._v("v2.2.0")]),t._v("，从这一版开始，为了兼容 Mathjax "),a("code",[t._v("v3.x")]),t._v("，kramdown 会把 inline math 转换成 "),a("code",[t._v("\\(a + b\\)")]),t._v(" 的形式，把 block math 转换成 "),a("code",[t._v("\\[a + b\\]")]),t._v(" 的形式（参考"),a("a",{attrs:{href:"https://github.com/gettalong/kramdown/commit/c3acf8df1db49d2456050f4456f3f542294e2e8f",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个 commit")]),t._v("），于是上面那段脚本就坏掉了。")]),t._v(" "),a("p",[t._v("于是一切都回到了最初的起点，摆在面前的办法只剩下把在本地用 kramdown "),a("code",[t._v("v2.1.0")]),t._v(" build 好的网站扔 "),a("code",[t._v("gh-pages")]),t._v(" 上去。这样干了几个月后懒惰的我实在忍不了了，并决定让 Github Actions 来帮我干这件事。")]),t._v(" "),a("p",[t._v("所以我当初为啥不选 Hexo...")]),t._v(" "),a("h2",{attrs:{id:"github-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-actions"}},[t._v("#")]),t._v(" Github Actions")]),t._v(" "),a("p",[t._v("在 repo 下建一个目录 "),a("code",[t._v(".github/workflow")]),t._v("，在这个目录下放一个 "),a("code",[t._v(".yaml")]),t._v(" 格式的 workflow 文件。GitHub 只要发现 "),a("code",[t._v(".github/workflows")]),t._v(" 下有 "),a("code",[t._v(".yaml")]),t._v(" 文件，就会自动运行它们。"),a("a",{attrs:{href:"https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里")]),t._v("是 workflow 文件的详细文档。")]),t._v(" "),a("h3",{attrs:{id:"jekyll"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jekyll"}},[t._v("#")]),t._v(" Jekyll")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://jekyllrb.com/docs/continuous-integration/github-actions/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jekyll 官方")]),t._v("已经给了一个现成的 "),a("a",{attrs:{href:"https://github.com/helaili/jekyll-action",target:"_blank",rel:"noopener noreferrer"}},[t._v("action")]),t._v("，直接引用它就好：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" build Jekyll site and deploy it to GitHub Pages\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检测 master 分支上的推送和 pr")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" master "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pull_request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" master "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jekyll-build-and-deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" checkout\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v2\n      \n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检测 vendor/bundle 下有没有已经安装好的包")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果有的话就不用再 bundle install 了，节省时间和资源")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" check cache\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/cache@v1\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" vendor/bundle\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" runner.os−gems−"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("%raw%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hashFiles('"),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("**/Gemfile.lock')")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("% endraw %"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restore-keys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n            ${{ runner.os }}-gems-")]),t._v("\n      \n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 引用 helaili/jekyll-action 来打包 Jekyll 网站")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 并把打包好的文件推到同一个 repo 的 gh-pages 分支")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" build and deploy\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" helaili/jekyll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@2.0.4\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("JEKYLL_PAT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.GITHUB_TOKEN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("target_branch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gh-pages'")]),t._v("\n")])])]),a("p",[t._v("相当于这个 workflow 会自动检测 "),a("code",[t._v("master")]),t._v(" 分支上的 push 和 pull_request，一旦检测就到准备环境，然后运行 "),a("code",[t._v("bundle exec jekyll build")]),t._v(" 打包网站，并把打包产物扔 "),a("code",[t._v("gh-pages")]),t._v(" 分支上去。")]),t._v(" "),a("p",[t._v("需要注意的是必须得有一个 "),a("code",[t._v("Gemfile")]),t._v(" 和 "),a("code",[t._v("Gemfile.lock")]),t._v(" 文件，"),a("code",[t._v("Gemfile")]),t._v(" 里面写上要装的包，比如本博客的 "),a("code",[t._v("Gemfile")]),t._v(" 长这样：")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("source "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://rubygems.org'")]),t._v("\n\ngem "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jekyll'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'~> 4.0'")]),t._v("\ngem "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kramdown'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'= 2.1.0'")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这里为了 Katex 把 kramdown 版本固定在了 2.1.0")]),t._v("\ngem "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jemoji'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'~> 0.11.1'")]),t._v("\ngem "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jekyll-paginate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'~> 1.1.0'")]),t._v("\n")])])]),a("p",[t._v("如果用了自定义域名，那就还需要在 "),a("code",[t._v("master")]),t._v(" 分支放一个 "),a("code",[t._v("CNAME")]),t._v("，这样 "),a("a",{attrs:{href:"https://github.com/helaili/jekyll-action",target:"_blank",rel:"noopener noreferrer"}},[t._v("helaili/jekyll-action")]),t._v(" 就会把 "),a("code",[t._v("CNAME")]),t._v(" 也推到 "),a("code",[t._v("gh-pages")]),t._v(" 分支去。直接在 "),a("code",[t._v("gh-pages")]),t._v(" 分支加 "),a("code",[t._v("CNAME")]),t._v(" 是没有什么用的，因为下次自动推送时它就会被清掉...")]),t._v(" "),a("h3",{attrs:{id:"node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js"}},[t._v("#")]),t._v(" Node.js")]),t._v(" "),a("p",[t._v("所有能用 Node.js 搞定的东西（比如这个基于 VuePress 的博客）都能用这个工作流处理：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" build and deploy\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检测 master 分支上的推送和 pr")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" master "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pull_request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" master "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build-and-deploy-vuepress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Checkout\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v2\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Node.js 环境")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Setup Node\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node@v2.1.0\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node-version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12.x'")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Cache dependencies\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/cache@v2\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ~/.npm\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" runner.os "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hashFiles('"),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("**/package-lock.json')")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restore-keys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n            ${{ runner.os }}-node-")]),t._v("\n      \n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm run build")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n          npm ci\n          npm run build")]),t._v("\n      \n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送到同一个 repo 的 gh-pages 分支")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" peaceiris/actions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("gh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages@v3\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github_token")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.GITHUB_TOKEN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("publish_dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dist "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# build 输出文件夹")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" renovamen.ink  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果用了自定义域名，在这里设置")]),t._v("\n")])])]),a("p",[t._v("其中 "),a("a",{attrs:{href:"https://github.com/peaceiris/actions-gh-pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("peaceiris/actions-gh-pages")]),t._v(" 也是一个别人写好的 action，能把指定路径的文件推到 "),a("code",[t._v("gh-pages")]),t._v(" 分支。")]),t._v(" "),a("p",[t._v("也可以用 "),a("a",{attrs:{href:"https://github.com/JamesIves/github-pages-deploy-action",target:"_blank",rel:"noopener noreferrer"}},[t._v("JamesIves/github-pages-deploy-action")]),t._v("，它是一个能把指定路径的文件推到指定分支的 action：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" build and deploy\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检测 master 分支上的推送和 pr")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" master "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pull_request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" master "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Checkout\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v2\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("persist-credentials")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检测 node_modules 下有没有已经安装好的包")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果有的话就不用再 npm install 了，节省时间和资源")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Check Cache\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/cache@v1\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dependencies\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node_modules\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" runner.OS−"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hashFiles('"),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("**/package-lock.json')")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果没有缓存，就 npm install")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Install Dependencies\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" steps.cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dependencies.outputs.cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("hit "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v("!=")]),t._v(" 'true'\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n          npm install")]),t._v("\n      \n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm run build")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm run build\n      \n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送到同一个 repo 的 gh-pages 分支")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" JamesIves/github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("deploy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@master\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("GITHUB_TOKEN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.GITHUB_TOKEN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("BRANCH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("FOLDER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dist  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm run build 的输出文件夹")]),t._v("\n")])])]),a("p",[t._v("不过虽然作者在"),a("a",{attrs:{href:"https://github.com/JamesIves/github-pages-deploy-action#additional-build-files-",target:"_blank",rel:"noopener noreferrer"}},[t._v("表示")]),t._v("在 "),a("code",[t._v("gh-pages")]),t._v(" 分支手动 commit 一个 "),a("code",[t._v("CNAME")]),t._v(" 之后，"),a("code",[t._v("CNAME")]),t._v(" 不会在后面的部署中被清掉，但我不管怎么试都会被清掉，所以就没用了...大概是我的方式不太对...")]),t._v(" "),a("h2",{attrs:{id:"vercel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vercel"}},[t._v("#")]),t._v(" Vercel")]),t._v(" "),a("p",[t._v("我一直以来都在听说双线部署甚至多线部署这种提高访问速度的操作，但一直没有去折腾。因为 Github Pages 虽然国内访问慢了点，但至少还是能访问的，那么能用就行了。直到几个月前，我发现 Github Pages 国内完全访问不上了...")]),t._v(" "),a("p",[t._v("好的好的行吧双线部署我来了...")]),t._v(" "),a("p",[t._v("那时候我所知的有境内节点的静态网站托管服务就 "),a("a",{attrs:{href:"https://gitee.com/help/articles/4136",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitee Pages")]),t._v(" 和 "),a("a",{attrs:{href:"https://help.coding.net/docs/devops/cd/static-website.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Coding Pages")]),t._v(" 俩，而 Gitee Pages 不能免费自定义域名，于是就把境内的线路解析到了 Coding Pages 上。")]),t._v(" "),a("p",[t._v("直到不久之前，我发现新版 Coding Pages 的静态网站合并到腾讯云静态网站，并开始收费了...之前旧版的静态网站表面上看上去好像还能正常部署，实际上并不能访问了。")]),t._v(" "),a("p",[t._v("于是就手忙脚乱的把境内线路的博客扔到了 Vercel 上。只能说 Vercel 至少到目前为止还没发现什么毛病，有境内节点（不过感觉还是没有 Coding Pages 快就是了），而且是直接自动从 Github 仓库上拉代码然后打包加部署，对菜鸡相当友好。")]),t._v(" "),a("p",[t._v("以前为啥就没发现呢。")])])}),[],!1,null,null,null);s.default=e.exports}}]);