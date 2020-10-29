(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{477:function(a,t,s){a.exports=s.p+"assets/img/racf-2.1.4de3d063.png"},478:function(a,t,s){a.exports=s.p+"assets/img/racf-3.1.694cc895.png"},479:function(a,t,s){a.exports=s.p+"assets/img/racf-4.1.2862dc45.png"},480:function(a,t,s){a.exports=s.p+"assets/img/racf-7.1.61e49311.png"},536:function(a,t,s){"use strict";s.r(t);var e=s(54),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("对我认为的本科最难的课（2333）第一次实验的流水账式记录。")]),a._v(" "),e("p",[a._v("希望早日脱离大型机的苦海，阿门。")]),a._v(" "),e("h2",{attrs:{id:"_1-创建组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建组"}},[a._v("#")]),a._v(" 1. 创建组")]),a._v(" "),e("h3",{attrs:{id:"_1-1-组的结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-组的结构"}},[a._v("#")]),a._v(" 1.1 组的结构")]),a._v(" "),e("p",[e("img",{attrs:{src:s(477),alt:""}})]),a._v(" "),e("h3",{attrs:{id:"_1-2-登陆-tso"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-登陆-tso"}},[a._v("#")]),a._v(" 1.2 登陆 TSO")]),a._v(" "),e("p",[a._v("以 RACFLAB 组管理员身份登陆TSO：")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("以 ST016 用户身份登录 TSO，进 ISPF；")])]),a._v(" "),e("li",[e("p",[a._v('"P" '),e("span",{staticClass:"katex"},[e("span",{staticClass:"katex-mathml"},[e("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[e("semantics",[e("mrow",[e("mo",[a._v("→")])],1),e("annotation",{attrs:{encoding:"application/x-tex"}},[a._v("\\rightarrow")])],1)],1)],1),e("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[e("span",{staticClass:"base"},[e("span",{staticClass:"strut",staticStyle:{height:"0.36687em","vertical-align":"0em"}}),e("span",{staticClass:"mrel"},[a._v("→")])])])]),a._v(' "6"（或直接"P.6"）')])]),a._v(" "),e("li",[e("p",[a._v("使用 "),e("code",[a._v("LU")]),a._v(" RACF 命令查看 ST016 的属性")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("LU ST016\n")])])])])]),a._v(" "),e("h3",{attrs:{id:"_1-3-在-racflab-下定义子组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-在-racflab-下定义子组"}},[a._v("#")]),a._v(" 1.3 在 RACFLAB 下定义子组")]),a._v(" "),e("p",[a._v("利用 RACF 命令定义以下子组：")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("定义 DIV16ADM 用户管理组（相当于公司人事部门），RACF 命令：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ADDGROUP DIV16ADM OWNER(RACFLAB) SUPGROUP(RACFLAB)\n")])])])]),a._v(" "),e("li",[e("p",[a._v("定义 DIV16FUN 功能组（相当于公司各职能部门），后继实验将在该组下定义各个子功能组，RACF 命令：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ADDGROUP DIV16FUN OWNER(RACFLAB) SUPGROUP(RACFLAB)\n")])])])]),a._v(" "),e("li",[e("p",[a._v("定义 DIV16RES 资源组（为有机组织和保护系统资源—包括数据集 / CICS 交易 / 系统和用户程序等资源—而设立的组），后继实验将在该组下定义各个子资源组，RACF 命令：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ADDGROUP DIV16RES OWNER(RACFLAB) SUPGROUP(RACFLAB)\n")])])])])]),a._v(" "),e("p",[a._v("利用 RACF 命令查看新建的组进行验证：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("LG DIV16ADM\nLG DIV16FUN\nLG DIV16RES\n")])])]),e("h3",{attrs:{id:"_1-4-在-div16fun-下定义子组-功能组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-在-div16fun-下定义子组-功能组"}},[a._v("#")]),a._v(" 1.4 在 DIV16FUN 下定义子组（功能组）")]),a._v(" "),e("p",[a._v("利用 RACF 命令定义以下子组：")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("定义 FUN16PRD 功能组，该组将用于对生产系统数据集（Production Data Sets）的访问进行集中授权（即如果该组对生产系统数据集有访问权限，该组的成员将自动继承这一权限），RACF 命令：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ADDGROUP FUN16PRD OWNER(DIV16FUN) SUPGROUP(DIV16FUN)\n")])])])]),a._v(" "),e("li",[e("p",[a._v("定义 FUN16TST 功能组，该组将用于对测试系统数据集（Test Data Sets）的访问进行集中授权（即如果该组对测试系统数据集有访问权限，该组的成员将自动继承这一权限），RACF 命令：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ADDGROUP FUN16TST OWNER(DIV16FUN) SUPGROUP(DIV16FUN)\n")])])])])]),a._v(" "),e("h3",{attrs:{id:"_1-5-在-div16res-下定义子组-资源组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-在-div16res-下定义子组-资源组"}},[a._v("#")]),a._v(" 1.5 在 DIV16RES 下定义子组（资源组）")]),a._v(" "),e("p",[a._v("利用 RACF 命令定义以下子组（RACF 中数据集 Profile 的 HLQ 必须是 RACF 系统中的一个用户或者组，这里为即将要保护的数据集 RES16PRD.* 和 RES16TST 定义 2 个子组）：")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("定义 RES16PRD 资源组，该组将用于保护生产系统的数据集。RACF 命令：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ADDGROUP RES16PRD OWNER(DIV16RES) SUPGROUP(DIV16RES)\n")])])])]),a._v(" "),e("li",[e("p",[a._v("定义 RES16TST 资源组，该组将用于保护测试系统的数据集。RACF 命令：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ADDGROUP RES16TST OWNER(DIV16RES) SUPGROUP(DIV16RES)\n")])])])])]),a._v(" "),e("h3",{attrs:{id:"_1-6-查找组-profile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-查找组-profile"}},[a._v("#")]),a._v(" 1.6 查找组 Profile")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("SEARCH CLASS(GROUP) MASK(DIV16)\n")])])]),e("p"),a._v(" "),e("h2",{attrs:{id:"_2-用户管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-用户管理"}},[a._v("#")]),a._v(" 2. 用户管理")]),a._v(" "),e("p",[e("img",{attrs:{src:s(478),alt:""}})]),a._v(" "),e("h3",{attrs:{id:"_2-1-新建用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-新建用户"}},[a._v("#")]),a._v(" 2.1 新建用户")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("在不太了解用户需要什么权限的情况下，一般只给出最低权限，利用 RACF 命令完成以下设置：")]),a._v(" "),e("ol",[e("li",[a._v("指定用户的默认组为 DIV16ADM")]),a._v(" "),e("li",[a._v("为用户指定初始密码")]),a._v(" "),e("li",[a._v("考虑为用户指定 OWNER")]),a._v(" "),e("li",[a._v("新增以下用户:\n"),e("ol",[e("li",[a._v("TSO1601  for user Janet Smith")]),a._v(" "),e("li",[a._v("TSO1602  for user Robert Anderson")]),a._v(" "),e("li",[a._v("TSO1603  for user Leslie Brown")]),a._v(" "),e("li",[a._v("TSO1604  for user Arthur Fielding")]),a._v(" "),e("li",[a._v("TSO1605  for user Susan Johnson")])])])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ADDUSER TSO1601 OWNER(DIV16ADM) DFLTGRP(DIV16ADM) PASSWORD(PASS)\n# 以此类推\n")])])])]),a._v(" "),e("li",[e("p",[a._v("查看用户是否建立成功")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("LU TSO1601\n")])])]),e("p",[a._v("查看用户的 TSO 段是否有内容")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("LU TSO1601 TSO\n")])])])]),a._v(" "),e("li",[e("p",[a._v("如果用户 Profile 没有指定 TSO 段的内容，用户将无法顺利登陆 TSO 系统，需要为用户指定 TSO 段信息")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ALU TSO1601 TSO(PROC(IKJDB2) ACCTNUM(#ACCT) SIZE(4096))\n")])])])]),a._v(" "),e("li",[e("p",[a._v("用户登陆 TSO 之后，如果要进入 ISPF 面板系统，首次进入 ISPF 系统时系统会自动为用户建立几个编目的数据集，通常普通用户的文件无法在主机系统主目录（Master Catalog）中进行编目，所以，要实现为新用户创建好用户目录（User Catalog）和别名（Alias）。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("DEFINE ALIAS(NAME(TSO1601) RELATE('CATALOG.UCAT.STGRP'))\n")])])]),e("p",[a._v('在 OPTION3.4 中 DSN Level 输入 TSO1601 回车，看是否显示其 "ALIAS"，如果出现类似下面的结果则表明 ALIAS 创建成功：')]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("DSLIST - Data Sets Matching TSO1601                       Row "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" of "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\n\nCommand - Enter "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/"')]),a._v(" to "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" action           Message        Volume\n---------------------------------------------------------------------\nTSO1601                                                 *ALIAS\n************************ End of Data Set list ***********************\n")])])])])]),a._v(" "),e("h3",{attrs:{id:"_2-2-重置用户密码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-重置用户密码"}},[a._v("#")]),a._v(" 2.2 重置用户密码")]),a._v(" "),e("p",[a._v("当用户忘记密码的时后需要管理员 ST016 为该用户重新指定一个初始密码。")]),a._v(" "),e("p",[a._v("场景：Janet Smith（TSO1601）遗忘了密码：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ALU TSO1601 PASSWORD(PASS)\n")])])]),e("h3",{attrs:{id:"_2-3-revoke-用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-revoke-用户"}},[a._v("#")]),a._v(" 2.3 Revoke 用户")]),a._v(" "),e("p",[a._v("当用户帐号暂时不用的时候，安全起见应该将该帐号挂起（Revoke）。\n场景：Arthur Fielding（TSO1604）将会出差一段时间，在这段时间应将该用户的帐号挂起：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ALU TSO1601 REVOKE\n")])])]),e("h3",{attrs:{id:"_2-4-resume-用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-resume-用户"}},[a._v("#")]),a._v(" 2.4 Resume 用户")]),a._v(" "),e("p",[a._v("当挂起的用户帐号需要重新启用的时候，应该及时地将帐号 Resume。\n场景：Arthur Fielding（TSO1604）出差回来，希望能够继续使用以前的帐号：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ALU TSO1601 RESUME\n")])])]),e("h3",{attrs:{id:"_2-5-search-查找"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-search-查找"}},[a._v("#")]),a._v(" 2.5 Search 查找")]),a._v(" "),e("p",[a._v("使用 Search 命令查找以上新建的用户 Profile")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("SEARCH CLASS(USER) MASK(TSO1601)\n")])])]),e("h3",{attrs:{id:"_2-6-将用户关联到组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-将用户关联到组"}},[a._v("#")]),a._v(" 2.6 将用户关联到组")]),a._v(" "),e("p",[a._v("RACF 中给用户访问资源权限的最佳方法是将用户关联到可以访问这些资源的组中，这些组称为功能组（Functional Group）。")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("将用户 Arthur Fielding（TSO1604）连接到组 FUN16PRD，实现其对生产数据集的访问：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("CONNECT TSO1604 GROUP(FUN16PRD)\n")])])])]),a._v(" "),e("li",[e("p",[a._v("将用户 Susan Johnson（TSOxx05）连接到组 FUN16TST，实现其对测试数据集的访问：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("CONNECT TSO1605 GROUP(FUN16TST)\n")])])])])]),a._v(" "),e("h3",{attrs:{id:"_2-7-验证用户是否关联到组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-验证用户是否关联到组"}},[a._v("#")]),a._v(" 2.7 验证用户是否关联到组")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("LU TSO1604\nLU TSO1605\nLG FUN16PRD\nLG FUN16TST\n")])])]),e("p"),a._v(" "),e("h2",{attrs:{id:"_3-分散式-racf-安全管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-分散式-racf-安全管理"}},[a._v("#")]),a._v(" 3. 分散式 RACF 安全管理")]),a._v(" "),e("p",[a._v("**目的：**实现 RACF 中的管理权限下放（Delegation）")]),a._v(" "),e("p",[a._v("**内容：**新建几个管理员用户，其中一个管理员负责用户安全的管理，一个管理员负 责将用户连接到功能组，另外一个管理员管控制对数据集资源的访问：")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("USER")]),a._v(" "),e("th",[a._v("AUTHORITY")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("TSO1601")]),a._v(" "),e("td",[a._v("group special for DIV16ADM")])]),a._v(" "),e("tr",[e("td",[a._v("TSO1602")]),a._v(" "),e("td",[a._v("connect authority for FUN16PRD & FUN16TST")])]),a._v(" "),e("tr",[e("td",[a._v("TSO1603")]),a._v(" "),e("td",[a._v("create authority for RES16PRD & RES16TST")])])])]),a._v(" "),e("p",[e("img",{attrs:{src:s(479),alt:""}})]),a._v(" "),e("h3",{attrs:{id:"_3-1-用户身份定位"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-用户身份定位"}},[a._v("#")]),a._v(" 3.1 用户身份定位")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("TSO1601（Janet Smith）：该管理员将对 DIV16ADM 组用户的安全进行管理，包括为用户重置密码，挂起和启用用户：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("CONNECT TSO1601 GROUP(DIV16ADM) SPECIAL\n")])])])]),a._v(" "),e("li",[e("p",[a._v("TSO1602（Robert Anderson）：该管理员可以将用户关联到 DIV16FUN 组下的子功能组中，以实现用户对特定数据的访问权限：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("CONNECT TSO1602 GROUP(FUN16PRD) AUTHORITY(CONNECT)\nCONNECT TSO1602 GROUP(FUN16TST) AUTHORITY(CONNECT)\n")])])])]),a._v(" "),e("li",[e("p",[a._v("TSO1603（Leslie Brown）：该管理员可以为 RES16PRD 和 RES16TST 组数据集创建数据集 PROFILE，以控制用户对组数据集的访问：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("CONNECT TSO1603 GROUP(RES16PRD) AUTHORITY(CREATE)\nCONNECT TSO1603 GROUP(RES16TST) AUTHORITY(CREATE)\n")])])])])]),a._v(" "),e("h3",{attrs:{id:"_3-2-测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-测试"}},[a._v("#")]),a._v(" 3.2 测试")]),a._v(" "),e("p",[a._v("测试步骤1的功能是否实现：")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("以 TSO1601 身份登陆 TSO，尝试修改用户密码等")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ALU TSO1602 PASSWORD(PASS)\n")])])])]),a._v(" "),e("li",[e("p",[a._v("以 TSO1602 身份登陆 TSO，将 TSO1601 用户关联到 FUN16PRD 和 FUN16TST：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("CONNECT TSO1601 GROUP(FUN16PRD) \nCONNECT TSO1601 GROUP(FUN16TST)\n")])])])]),a._v(" "),e("li",[e("p",[a._v("以 TSOxx02 身份登陆 TSO，将 TSO1601 从 FUN16PRD 和 FUN16TST 组中移走：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("REMOVE TSO1601 GROUP(FUN16PRD)\nREMOVE TSO1601 GROUP(FUN16TST)\n")])])])])]),a._v(" "),e("p"),a._v(" "),e("h2",{attrs:{id:"_4-数据集保护-i"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-数据集保护-i"}},[a._v("#")]),a._v(" 4. 数据集保护 I")]),a._v(" "),e("p",[a._v("**目的：**实现对用户数据集和组数据集的保护。")]),a._v(" "),e("p",[a._v("**内容：**首先保护用户数据集，然后对生产数据集和测试数据集进行保护，然后进行授权后的验证。")]),a._v(" "),e("p",[a._v("为了简化实验，RES16PRD 和 RES16TST 组既是 Data Control Group，也是 Resource Onwership Group。")]),a._v(" "),e("h3",{attrs:{id:"_4-1-保护数据集"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-保护数据集"}},[a._v("#")]),a._v(" 4.1 保护数据集")]),a._v(" "),e("p",[a._v("保护以下用户的数据集，保护准则：只有用户本身可以访问自己的数据集，其他人都不能访问。（用户的数据集是指以用户名为 HLQ 的所有数据集）")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("TSO1601  for user Janet Smith")])]),a._v(" "),e("li",[e("p",[a._v("TSO1602  for user Robert Anderson")])]),a._v(" "),e("li",[e("p",[a._v("TSO1603  for user Leslie Brown")])]),a._v(" "),e("li",[e("p",[a._v("TSO1604  for user Arthur Fielding")])]),a._v(" "),e("li",[e("p",[a._v("TSO1605  for user Susan Johnson")])])]),a._v(" "),e("p",[a._v("以 TSO1601 身份登陆 TSO 然后执行 RACF 命令：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ADDSD 'TSO1601.**' UACC(NONE) \nADDSD 'TSO1602.**' UACC(NONE) \nADDSD 'TSO1603.**' UACC(NONE) \nADDSD 'TSO1604.**' UACC(NONE) \nADDSD 'TSO1605.**' UACC(NONE) \n")])])]),e("h3",{attrs:{id:"_4-2-查看-profile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-查看-profile"}},[a._v("#")]),a._v(" 4.2 查看 PROFILE")]),a._v(" "),e("p",[a._v("查看步骤1创建的用户数据集PROFILE：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("LISTDSD DA('TSO1601.**') ALL\nLISTDSD DA('TSO1602.**') ALL\nLISTDSD DA('TSO1603.**') ALL\nLISTDSD DA('TSO1604.**') ALL\nLISTDSD DA('TSO1605.**') ALL\n")])])]),e("h3",{attrs:{id:"_4-3-定义-rpofile-赋-alter-权"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-定义-rpofile-赋-alter-权"}},[a._v("#")]),a._v(" 4.3  定义 RPOFILE + 赋 ALTER 权")]),a._v(" "),e("p",[a._v("定义RES16TST组数据集的RPOFILE。在前面的实验中，TSO1603 被指定为 RES16PRD 和 RES16TST 的 Create 用户，以拥有对这 2 个组的数据集的保护权限。")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("以 TSO1603 登陆 TSO，对 RES16TST 数据集进行以下保护：")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("Audit all unsuccessful accesses (Hint: AUDIT)")])]),a._v(" "),e("li",[e("p",[a._v("Make the owner TSO1603 (Hint: OWNER)")])]),a._v(" "),e("li",[e("p",[a._v("No other users or groups should have access (Hint: UACC)")])])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ADDSD 'RES16TST.**' AUDIT(FAILURES) OWNER(TSO1603) UACC(NONE)\n")])])]),e("p",[a._v("修改上面定义的 "),e("code",[a._v("RES16TST.**")]),a._v(" PORFILE的访问列表，给FUN16TST组赋予ALTER访问权限：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("PERMIT 'RES16TST.**' ID(FUN16TST) ACCESS(ALTER)\n")])])])]),a._v(" "),e("li",[e("p",[a._v("对 RES16PRD 数据集进行以下保护：")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("Audit all unsuccessful accesses (AUDIT)")])]),a._v(" "),e("li",[e("p",[a._v("Audit successful accesses at UPDATE and higher (AUDIT)")])]),a._v(" "),e("li",[e("p",[a._v("Make the owner TSO1603 (OWNER)")])]),a._v(" "),e("li",[e("p",[a._v("No other users or groups should have access (UACC)")])])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ADDSD 'RES16PRD.**' AUDIT(FAILURES SUCCESS(UPDATE)) OWNER(TSO1603) UACC(NONE)\n")])])]),e("p",[a._v("修改上面定义的 "),e("code",[a._v("RESxxPRD.**")]),a._v(" PORFILE的访问列表，给FUN16PRD组赋予ALTER访问权限：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("PERMIT 'RES16PRD.**' ID(FUN16PRD) ACCESS(ALTER)\n")])])])])]),a._v(" "),e("h3",{attrs:{id:"_4-4-验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-验证"}},[a._v("#")]),a._v(" 4.4 验证")]),a._v(" "),e("p",[a._v("确定组数据集 PROFIEL 是否创建并按照预定的要求保护成功")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("LISTDSD DATASET('RES16TST.**') ALL\nLISTDSD DATASET('RES16PRD.**') ALL\n")])])]),e("h3",{attrs:{id:"_4-5-创建组数据集"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-创建组数据集"}},[a._v("#")]),a._v(" 4.5 创建组数据集")]),a._v(" "),e("p",[a._v("以 ST016 用户登陆 TSO，创建 RES16TST 和 RES16PRD 组数据集：")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("创建 ALIAS：RES16TST 和 RES16PRD")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("DEFINE ALIAS(NAME(RES16TST) RELATE(CATALOG.UCAT.STGRP))\nDEFINE ALIAS(NAME(RES16PRD) RELATE(CATALOG.UCAT.STGRP))\n")])])])]),a._v(" "),e("li",[e("p",[a._v("测试是否成功")]),a._v(" "),e("p",[a._v("在 OPTION 3.4 中 DSN Level 分别输入 RES16TST**、**RES16PRD，回车，看是否显示其 Alias。")])])]),a._v(" "),e("p",[a._v("以 TSO1603 登陆 TSO 并创建组数据集：")]),a._v(" "),e("p",[a._v("创建一个顺序数据集 RES16PRD.DATA (RECFM=FB, LRECL=80) 和 RES16TST.DATA (RECFM=FB, LRECL=80)")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('                        Allocate New Data Set\nData Set Name  . . . : RESxxPRD.DATA\nManagement class . . .       (Blank for default management class)\nStorage class  . . . .       (Blank for default storage class)\n Volume serial . . . .       (Blank for system default volume) **\n Device type . . . . .       (Generic unit or device address) **\nData class . . . . . .       (Blank for default data class)\n Space units . . . . . TRKS  (BLKS, TRKS, CYLS, KB, MB, BYTES or RECORDS)\n Average record unit         (M, K, or U)\n Primary quantity  . . 1     (In above units)\n Secondary quantity    1     (In above units)\n Directory blocks  . .       (Zero for sequential data set) *\n Record format . . . . FB\n Record length . . . . 80 \n Blocksize   . . . . . \n Data set name type :        (LIBRARY, HFS, PDS, or blank)  *\n                             (YY/MM/DD, YYYY/MM/DD\n Expiration date . . .        YY.DDD, YYYY.DDD in Julian form\nEnter "/" to select option    DDDD for retention period in days\n   Allocate Multiple Volumes  or blank)\n\n( * Specifying LIBRARY may override zero directory block)\n\n( ** Only one of these fields may be specified)\n')])])]),e("h3",{attrs:{id:"_4-6-验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-验证"}},[a._v("#")]),a._v(" 4.6 验证")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("验证 TSO1604 访问 RES16PRD 组数据集：成功访问；")])]),a._v(" "),e("li",[e("p",[a._v("验证 TSO1604 访问 RES16TST 组数据集：拒绝访问；")])]),a._v(" "),e("li",[e("p",[a._v("验证 TSO1605 访问 RES16TST 组数据集的保护：成功访问。")])]),a._v(" "),e("li",[e("p",[a._v("以 TSO1601 登陆，删除 RES16PRD 打头的数据集（如 "),e("code",[a._v("RES16PRD.DATA")]),a._v("）")]),a._v(" "),e("p",[a._v("保留 TSO1601 登陆的 Session，再打开一个新的 Session，以 TSO1603 登陆 TSO，修改 "),e("code",[a._v("RESxxPRD.**")]),a._v(" Profile，给 TSO1601 赋 ALTER 权：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("PERMIT 'RES16PRD.**' ID(TSO1601) ACCESS(ALTER) \n")])])]),e("p",[a._v("测试：")]),a._v(" "),e("ul",[e("li",[a._v("再尝试用 TSO1601 用户删除 "),e("code",[a._v("RES16PRD.DATA")])]),a._v(" "),e("li",[a._v("TSO1601 重新登陆后再尝试删除 "),e("code",[a._v("RES16PRD.DATA")])])])])]),a._v(" "),e("p"),a._v(" "),e("h2",{attrs:{id:"_5-数据集保护-ii"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-数据集保护-ii"}},[a._v("#")]),a._v(" 5. 数据集保护 II")]),a._v(" "),e("p",[a._v("目的：实现对用户数据集和组数据集的保护")]),a._v(" "),e("p",[a._v("内容：创建数据集，确定创建数据集需要的权限，然后建立 Generic PROFILE 对数据集进行保护，最后对 PROFILE 的 Warning 状态进行理解和配置，并使用 LISTDSD 命令确定最佳匹配 PROFILE 和确定 Generic PROFILE 所保护的数据集范围。")]),a._v(" "),e("h3",{attrs:{id:"_5-1-创建全匹配-profile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-创建全匹配-profile"}},[a._v("#")]),a._v(" 5.1 创建全匹配 PROFILE")]),a._v(" "),e("p",[a._v("为 RES16PRD.DATA 创建全匹配 PROFILE。以 TSO1603 登陆（RES16PRD 组 CREATE 特权人员，即数据管理人员），为 "),e("code",[a._v("RES16PRD.DATA")]),a._v(" 创建一个全匹配的 PROFILE 进行保护：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ADDSD 'RES16PRD.DATA' UACC(READ)\n")])])]),e("h3",{attrs:{id:"_5-2-打开-warning-状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-打开-warning-状态"}},[a._v("#")]),a._v(" 5.2 打开 Warning 状态")]),a._v(" "),e("p",[a._v("以 TSO1603 登陆，把 "),e("code",[a._v("RES16TST.**")]),a._v(" PROFILE 的 Warning 状态打开：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ALTDSD 'RES16TST.**' WARNING\n")])])]),e("p",[a._v("测试：以 TSO1604 登陆，浏览 "),e("code",[a._v("RES16TST.DATA")]),a._v(" 数据集")]),a._v(" "),e("h3",{attrs:{id:"_5-3-关闭-warning-状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-关闭-warning-状态"}},[a._v("#")]),a._v(" 5.3 关闭 Warning 状态")]),a._v(" "),e("p",[a._v("以 TSO1603 登陆，把 "),e("code",[a._v("RES16TST.**")]),a._v(" PROFILE 的 Warning 状态关闭：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ALTDSD 'RES16TST.**' NOWARNING\n")])])]),e("p",[a._v("测试：以 TSO1604 登陆，浏览 "),e("code",[a._v("RES16TST.DATA")]),a._v(" 数据集")]),a._v(" "),e("h3",{attrs:{id:"_5-4-update-权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-update-权限"}},[a._v("#")]),a._v(" 5.4 UPDATE 权限")]),a._v(" "),e("p",[a._v("TSO1603 登陆。假设 "),e("code",[a._v("RES16PRD.NEWAPPL.FINANCE.DATA")]),a._v(" 和 "),e("code",[a._v("RES16PRD.NEWAPPL.HR.DATA")]),a._v(" 是一个新应用系统的 2 个数据集，FUN16TST 组需要对这 2 个数据集有 UPDATE 权限，而不能对其他应用系统的数据集有操作权限。注意，FUN16PRD 组仍然需要对所有的 RES16PRD 数据集保留原有的操作权限。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ADDSD 'RES16PRD.NEWAPPL.**' UACC(NONE) FROM('RES16PRD.**')\nPERMIT 'RES16PRD.NEWAPPL.**' ID(FUN16TST) ACC(UPDATE)\n")])])]),e("p",[a._v("检测哪一个 PROFILE 在保护 "),e("code",[a._v("RES16PRD.NEWAPPL.FINANCE.DATA")]),a._v(" 和 "),e("code",[a._v("RES16PRD.NEWAPPL.HR.DATA")]),a._v("：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("LISTDSD DATASET('RES16PRD.NEWAPPL.FINANCE.DATA') GEN\nLISTDSD DATASET('RES16PRD.NEWAPPL.HR.DATA') GEN\n")])])]),e("p",[a._v("检测一个 Generic PROFILE "),e("code",[a._v("RES16PRD.**")]),a._v(" 保护了那些数据集：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("LISTDSD DATASET('RES16PRD.**') DSNS\n")])])]),e("p"),a._v(" "),e("h2",{attrs:{id:"_6-保护-tso-资源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-保护-tso-资源"}},[a._v("#")]),a._v(" 6. 保护 TSO 资源")]),a._v(" "),e("p",[a._v("目的：授权用户登录 TSO")]),a._v(" "),e("p",[a._v("内容：该实验将首先为 AP（Application Programmer）和 SP（System Programmer）用户建立组结构，然后为 TSO 的登陆过程（TSOPROC）和用户帐号（ACCTNUM建立一些通用资源 PROFILE 进行保护，接着新增 AP/SP 用户 PROFILE，对 TSO 段进行赋值，并对他们授权访问 TSO。")]),a._v(" "),e("p",[a._v("组结构：")]),a._v(" "),e("p",[e("img",{attrs:{src:s(480),alt:""}})]),a._v(" "),e("h3",{attrs:{id:"_6-1-创建组结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-创建组结构"}},[a._v("#")]),a._v(" 6.1 创建组结构")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("在 DIV16FUN 下创建子组 FUN16AP")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ADDGROUP FUN16AP OWNER(DIV16FUN) SUPGROUP(DIV16FUN)\n")])])])]),a._v(" "),e("li",[e("p",[a._v("在 DIV16FUN 下创建子组 FUN16SP")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ADDGROUP FUN16SP OWNER(DIV16FUN) SUPGROUP(DIV16FUN)\n")])])])]),a._v(" "),e("li",[e("p",[a._v("在 DIV16RES 下创建子组 RES16TSO，用以管理 TSO 资源授权")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ADDGROUP RES16TSO OWNER(DIV16RES) SUPGROUP(DIV16RES)\n")])])])])]),a._v(" "),e("h3",{attrs:{id:"_6-2-新增用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-新增用户"}},[a._v("#")]),a._v(" 6.2 新增用户")]),a._v(" "),e("p",[a._v("新增 AP 和 SP 用户，这些用户需要访问TSO")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("新增 SP 用户 TSO1607，要求如下:")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("OWNER和默认组应该是DIV16ADM")])]),a._v(" "),e("li",[e("p",[a._v("可以登陆TSO")]),a._v(" "),e("ol",[e("li",[a._v("账户使用 ACCT#Sxx")]),a._v(" "),e("li",[a._v("登陆过程使用 PROC#Sxx")]),a._v(" "),e("li",[a._v("Region 大小为 4096")])])])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ADDUSER TSO1607 OWNER(DIV16ADM) NAME('SYSTEM PROGRAMMER') DFLTGRP(DIV16ADM) PASSWORD(123456)\n\nALU TSO1607 TSO(PROC(IKJDB2) ACCTNUM(#ACCT) SIZE(4096) COMMAN(ISPF))\n\nCONNECT TSO1607 GROUP(FUN16SP)\n")])])])]),a._v(" "),e("li",[e("p",[a._v("新增 AP 用户 TSO1608，要求如下:")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("OWNER和默认组应该是DIV16ADM")])]),a._v(" "),e("li",[e("p",[a._v("可以登陆TSO")]),a._v(" "),e("ol",[e("li",[a._v("账户使用 ACCT#Axx")]),a._v(" "),e("li",[a._v("登陆过程使用 PROC#Axx")]),a._v(" "),e("li",[a._v("Region 大小为 4096")])])])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ADDUSER TSO1608 OWNER(DIV16ADM) NAME('SYSTEM PROGRAMMER') DFLTGRP(DIV16ADM) PASSWORD(123456)\n\nALU TSO1608 TSO(PROC(IKJDB2) ACCTNUM(#ACCT) SIZE(4096) COMMAN(ISPF))\n\nCONNECT TSO1608 GROUP(FUN16AP)\n")])])])])]),a._v(" "),e("h3",{attrs:{id:"_6-3-创建登陆过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-创建登陆过程"}},[a._v("#")]),a._v(" 6.3 创建登陆过程")]),a._v(" "),e("p",[a._v("为 TSO 用户创建一个新的登陆过程 PROC#Sxx 和 PROC#Axx。打开文件 VENDOR.PROCLIB ，在 Command 中输入：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("S PROC#S16;COPY IKJDB2\nS PROC#A16;COPY IKJDB2\n")])])]),e("h3",{attrs:{id:"_6-4-保护登录过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-保护登录过程"}},[a._v("#")]),a._v(" 6.4 保护登录过程")]),a._v(" "),e("p",[a._v("保护 PROC#Sxx 登陆过程（TSOPROC类）。")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("创建通用资源 TSOPROC 的 RPOFILE，保护 AP 和 SP 的 TSO 登陆过程。")]),a._v(" "),e("p",[a._v("授权规则：PROC#Sxx 只有 SP 才能使用（READ 权限），其他人不可以使用；PROC#Axx 只有 AP 才能使用（READ 权限），其他人不可以使用。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("RDEFINE TSOPROC PROC#S16 OWNER(DIV16FUN) UACC(NONE)\nPE PROC#S16 CLASS(TSOPROC) ID(FUN16SP) AC(READ)\n\nRDEFINE TSOPROC PROC#A16 OWNER(DIV16FUN) UACC(NONE)\nPE PROC#A16 CLASS(TSOPROC) ID(FUN16AP) AC(READ)\n")])])])]),a._v(" "),e("li",[e("p",[a._v("浏览 PROC#Sxx 和 PROC#Axx PROFILE，它们用于保护不同的 TSO 登陆服务：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("RLIST TSOPROC PROC#S16 AUTHUSER\nRLIST TSOPROC PROC#A16 AUTHUSER\n")])])])]),a._v(" "),e("li",[e("p",[a._v("刷新 TSOPROC 类在内存中的 PROFILE")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("SETROPTS RACLIST(TSOPROC) REFRESH\n")])])]),e("p",[a._v("可能会提示不需要刷新。")])])]),a._v(" "),e("h3",{attrs:{id:"_6-5-保护-acctnum"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-保护-acctnum"}},[a._v("#")]),a._v(" 6.5 保护 ACCTNUM")]),a._v(" "),e("p",[a._v("创建两个 TSO 账户（ACCTNUM），并创建一个通用资源 RPOFILE 保护该 ACCTNUM。")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("创建 RPOFILE：ACCT#Sxx 该 ACCTNUM 为 SP 提供 TSO 登陆服务。")]),a._v(" "),e("p",[a._v("授权规则：ACCT#Sxx 只有 SP 才能使用(READ 权限)，其他人不可以使用。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("RDEFINE ACCTNUM ACCT#S16 OWNER(DIV16FUN) UACC(NONE)\nPE ACCT#S16 CLASS(ACCTNUM) ID(FUN16SP) AC(READ)\n")])])])]),a._v(" "),e("li",[e("p",[a._v("创建 PROFILE：ACCT#Axx 该 ACCTNUM 为 AP 提供 TSO 登陆服务。")]),a._v(" "),e("p",[a._v("授权规则：ACCT#Axx 只有 AP 才能使用(READ 权限)，其他人不可以使用。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("RDEFINE ACCTNUM ACCT#A16 OWNER(DIV16FUN) UACC(NONE)\nPE ACCT#A16 CLASS(ACCTNUM) ID(FUN16AP) AC(READ)\n")])])])]),a._v(" "),e("li",[e("p",[a._v("浏览 PROFILE：ACCT#Sxx 和 ACCT#Axx")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("RLIST ACCTNUM ACCT#S16 AUTHUSER\nRLIST ACCTNUM ACCT#A16 AUTHUSER\n")])])])])]),a._v(" "),e("h3",{attrs:{id:"_6-6-保护-tsoauth"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-保护-tsoauth"}},[a._v("#")]),a._v(" 6.6 保护 TSOAUTH")]),a._v(" "),e("p",[a._v("TSOAUTH 通用资源类提供保护 TSO 权限的功能，TSO 权限主要包括：ACCT，JCL，MOUNT， OPER，RECOVER 等。系统已经定义了一个 JCL PROFILE 用于保护 TSO 的 JCL 权限，该权限允许通过 TSO 向 JES 提交 JCL 批量作业。")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("（不做）为 SP 和 AP 用户赋权访问 JCL 权限：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("PE JCL CLASS(TSOAUTH) ID(FUN16AP FUN16SP) ACCESS(READ)\n")])])])]),a._v(" "),e("li",[e("p",[a._v("查看 SP 和 AP 用户是否拥有提交 JCL 作业的权利：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("RLIST TSOAUTH JCL\n")])])])])]),a._v(" "),e("h3",{attrs:{id:"_6-7-保护用户数据集"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-7-保护用户数据集"}},[a._v("#")]),a._v(" 6.7 保护用户数据集")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("保护 TSO1607 的用户数据集")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ADDSD 'TSO1607.**' UACC(NONE)\n")])])])]),a._v(" "),e("li",[e("p",[a._v("保护 TSO1608 的用户数据集")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ADDSD 'TSO1608.**' UACC(NONE)\n")])])])])]),a._v(" "),e("h3",{attrs:{id:"_6-8-创建-alias"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-8-创建-alias"}},[a._v("#")]),a._v(" 6.8 创建 ALIAS")]),a._v(" "),e("p",[a._v("为 TSOxx07 和 TSOxx08 创建 ALIAS（普通用户不能修改 Master Catalog，所以为了让用户可以创建自己的编目数据集，必须为用户创建 ALIAS，ALIAS 指向 User Catalog）。")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("为 TSOxx07 创建别名")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("DEFINE ALIAS(NAME(TSO1607) RELATE('CATALOG.UCAT.STGRP'))\n")])])])]),a._v(" "),e("li",[e("p",[a._v("为 TSOxx08 创建别名")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("DEFINE ALIAS(NAME(TSO1608) RELATE('CATALOG.UCAT.STGRP'))\n")])])])])]),a._v(" "),e("p"),a._v(" "),e("h2",{attrs:{id:"_7-使用-jcl-执行-racf-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-使用-jcl-执行-racf-命令"}},[a._v("#")]),a._v(" 7. 使用 JCL 执行 RACF 命令")]),a._v(" "),e("p",[a._v("编写 JCL 作业，然后 SUBMIT：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("//ST016R1 JOB CLASS=A,MSGLEVEL=(1,1),MSGCLASS=H,\n// NOTIFY=ST016\n//SEND EXEC PGM=IKJEFT01\n//SYSPRINT DD DUMMY\n//SYSTSPRT DD SYSOUT=*\n//SYSTSIN DD *\nSEARCH CLASS(GROUP) MASK(DIV16)\nSEARCH CLASS(GROUP) MASK(FUN16)\nSEARCH CLASS(GROUP) MASK(RES16)\nSEARCH CLASS(USER) MASK(TSO16)\nLG FUN16PRD\nLG FUN16TST\nLG FUN16SP\nLG FUN16AP\nSEARCH CLASS(DATASET) MASK(TSO16)\nSEARCH CLASS(DATASET) MASK(RES16)\nLISTDSD DA(TSO1601.**) AU\nSEARCH CLASS(TSOPROC) FILTER(PROC#%16)\nRLIST TSOPROC PROC#S16 AU\nRLIST TSOPROC PROC#A16 AU\nSEARCH CLASS(ACCTNUM) FILTER(ACCT#%16)\nRLIST ACCTNUM ACCT#S16 AU\nRLIST ACCTNUM ACCT#A16 AU\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);