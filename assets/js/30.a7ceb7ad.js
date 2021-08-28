(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{772:function(s,t,a){"use strict";a.r(t);var e=a(18),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"数据库安全性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库安全性"}},[s._v("#")]),s._v(" 数据库安全性")]),s._v(" "),a("p",[s._v("不安全因素:")]),s._v(" "),a("ol",[a("li",[s._v("非授权对数据库的恶意破坏")]),s._v(" "),a("li",[s._v("数据库数据泄露")]),s._v(" "),a("li",[s._v("安全环境的脆弱性")])]),s._v(" "),a("h2",{attrs:{id:"数据库安全机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库安全机制"}},[s._v("#")]),s._v(" 数据库安全机制")]),s._v(" "),a("h3",{attrs:{id:"自主存取控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自主存取控制"}},[s._v("#")]),s._v(" 自主存取控制")]),s._v(" "),a("p",[s._v("采用权限授予机制，让不同用户对不同的数据库或者对不同表结构或者列具有不同的存取权限，事先对用户的权限行为定义。通过权限授予、回收指令实现该功能。")]),s._v(" "),a("ul",[a("li",[s._v("用户")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("grant")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("权限"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("表名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("用户"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("grant")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("option")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("grant")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" sc "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--授予所有用户权限")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("grant")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" studednt "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" manager1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--不具备授予其他用户的权限")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("grant")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" studednt "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" manager2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("grant")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("option")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--具有授予其他用户的权限")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("回收权限的方法:")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("要注意的一点是每一个用户所获得的权限或者给出去的权限都是独立唯一的，比如user3获得了来自user1的select权限和来自user2的select和delete权限，当回收的时候注意如果仅回收来自user1的权限，那么user2给user3的权限并不会影响，因为权限在数据库中也是一条记录，不同记录之间是相互独立的.")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("revoke")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("权限"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("表名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("用户"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("cascade")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("revoke")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" sc "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" manager1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("cascade")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--回收所有manager1给出去的权限")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("revoke")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" sc "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" manager1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--只回收manager1的权限。")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("角色")])]),s._v(" "),a("p",[s._v("角色通常指的是一类人，通过sql语句也能进行权限赋予，通过角色可以同时给多个用户赋予权限。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--创建角色")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" role R1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--赋予权限")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("grant")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" sc "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" R1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("grant")]),s._v("　R1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" tearcher"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" student"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" kids"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--回收权限")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("revoke")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" sc "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" R1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"强制存取控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强制存取控制"}},[s._v("#")]),s._v(" 强制存取控制")]),s._v(" "),a("p",[s._v("对数据库对象标记密级，对用户授予某个级别的许可证。通过用户和数据库对象的密级对应规则来决定访问权限。")]),s._v(" "),a("ul",[a("li",[s._v("主体: 数据库系统当中的用户。")]),s._v(" "),a("li",[s._v("客体: 数据库系统中的实体，如：表、索引、视图、存储文件等。")])]),s._v(" "),a("p",[s._v("敏感度标记(理解为保密等级):\n主要分为四级:绝密、机密、可信、公开")]),s._v(" "),a("p",[s._v("主体的等级叫做许可证级别，客体的等级叫做密级。")]),s._v(" "),a("ul",[a("li",[s._v("规则:\n"),a("ol",[a("li",[s._v("主体的等级"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mo",[s._v("≥")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\\ge")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.7719400000000001em","vertical-align":"-0.13597em"}}),a("span",{staticClass:"mrel"},[s._v("≥")])])])]),s._v("客体的等级的时候才能"),a("strong",[s._v("读")]),s._v("相应的客体(只有足够权限之后才能读取到对应的内容)")]),s._v(" "),a("li",[s._v("主体的等级"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mo",[s._v("≤")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\\le")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.7719400000000001em","vertical-align":"-0.13597em"}}),a("span",{staticClass:"mrel"},[s._v("≤")])])])]),s._v("客体的等级的时候才能"),a("strong",[s._v("写")]),s._v("相应的客体(如果高权限的主体写入低权限的客体，那么就会把保密等级比较高的数据暴露给了等级比较低的客体，相当于数据泄露了，是不对的。所以才有上面的规则。)")]),s._v(" "),a("li",[s._v("注意题目当中级别的排列先后顺序，是"),a("strong",[s._v("数字大权限高还是数字小权限高")]),s._v("。")])])])]),s._v(" "),a("h2",{attrs:{id:"审计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#审计"}},[s._v("#")]),s._v(" 审计")]),s._v(" "),a("p",[s._v("对数据库的所有操作都记录道审计日志当中，可以通过查询审计日志来看到之前有哪些操作的行为。同时也是通过日志文件来对数据数据进行备份或者恢复。")])])}),[],!1,null,null,null);t.default=n.exports}}]);