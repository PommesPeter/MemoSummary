(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{763:function(t,s,a){"use strict";a.r(s);var n=a(18),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"非线性优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非线性优化"}},[t._v("#")]),t._v(" 非线性优化")]),t._v(" "),a("h2",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),a("p",[t._v("当目标函数或约束条件中有非线性的函数时，就是非线性规划问题，与线性规划类似，只是函数不同。")]),t._v(" "),a("h2",{attrs:{id:"matlab编程求解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#matlab编程求解"}},[t._v("#")]),t._v(" matlab编程求解")]),t._v(" "),a("p",[t._v("非线性规划标准型为")]),t._v(" "),a("p",{staticClass:"katex-block"},[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[a("semantics",[a("mrow",[a("mi",[t._v("min")]),a("mo",[t._v("⁡")]),a("mi",[t._v("F")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",{attrs:{mathvariant:"bold"}},[t._v("X")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mspace",{attrs:{linebreak:"newline"}}),a("mi",[t._v("s")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",[t._v("t")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mrow",[a("mo",{attrs:{fence:"true"}},[t._v("{")]),a("mtable",{attrs:{rowspacing:"0.3600em",columnalign:"left left",columnspacing:"1em"}},[a("mtr",[a("mtd",[a("mstyle",{attrs:{scriptlevel:"0",displaystyle:"false"}},[a("mrow",[a("mi",{attrs:{mathvariant:"bold"}},[t._v("A")]),a("mi",{attrs:{mathvariant:"bold"}},[t._v("X")]),a("mo",[t._v("≤")]),a("mi",{attrs:{mathvariant:"bold"}},[t._v("b")])],1)],1)],1)],1),a("mtr",[a("mtd",[a("mstyle",{attrs:{scriptlevel:"0",displaystyle:"false"}},[a("mrow",[a("mi",[t._v("A")]),a("mi",[t._v("e")]),a("mi",[t._v("q")]),a("mo",[t._v("⋅")]),a("mi",{attrs:{mathvariant:"bold"}},[t._v("X")]),a("mo",[t._v("=")]),a("mi",[t._v("b")]),a("mi",[t._v("e")]),a("mi",[t._v("q")])],1)],1)],1)],1),a("mtr",[a("mtd",[a("mstyle",{attrs:{scriptlevel:"0",displaystyle:"false"}},[a("mrow",[a("mi",[t._v("G")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",{attrs:{mathvariant:"bold"}},[t._v("X")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mo",[t._v("≤")]),a("mn",{attrs:{mathvariant:"bold"}},[t._v("0")])],1)],1)],1)],1),a("mtr",[a("mtd",[a("mstyle",{attrs:{scriptlevel:"0",displaystyle:"false"}},[a("mrow",[a("mi",[t._v("C")]),a("mi",[t._v("e")]),a("mi",[t._v("q")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",{attrs:{mathvariant:"bold"}},[t._v("X")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mo",[t._v("=")]),a("mn",{attrs:{mathvariant:"bold"}},[t._v("0")])],1)],1)],1)],1),a("mtr",[a("mtd",[a("mstyle",{attrs:{scriptlevel:"0",displaystyle:"false"}},[a("mrow",[a("mi",[t._v("V")]),a("mi",[t._v("L")]),a("mi",[t._v("B")]),a("mo",[t._v("≤")]),a("mi",{attrs:{mathvariant:"bold"}},[t._v("X")]),a("mo",[t._v("≤")]),a("mi",[t._v("V")]),a("mi",[t._v("U")]),a("mi",[t._v("B")])],1)],1)],1)],1)],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\min F(\\bold{X}) \\\\\ns.t.\n\\begin{cases}\n    \\bold A\\bold X\\le \\bold b \\\\\n    Aeq\\cdot\\bold X = beq \\\\\n    G(\\bold{X})\\le \\bold{0} \\\\\n    Ceq(\\bold{X})=\\bold{0} \\\\\n    VLB\\le\\bold{X}\\le VUB\n\\end{cases}\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mop"},[t._v("min")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.13889em"}},[t._v("F")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathbf"},[t._v("X")]),a("span",{staticClass:"mclose"},[t._v(")")])]),a("span",{staticClass:"mspace newline"}),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"7.2000399999999996em","vertical-align":"-3.3500199999999998em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("s")]),a("span",{staticClass:"mord"},[t._v(".")]),a("span",{staticClass:"mord mathnormal"},[t._v("t")]),a("span",{staticClass:"mord"},[t._v(".")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"minner"},[a("span",{staticClass:"mopen"},[a("span",{staticClass:"delimsizing mult"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"3.8500199999999998em"}},[a("span",{staticStyle:{top:"-1.36599em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.816em"}}),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[t._v("⎩")])])]),a("span",{staticStyle:{top:"-1.35799em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.816em"}}),a("span",{staticStyle:{height:"1.8159999999999998em",width:"0.889em"}},[a("svg",{staticStyle:{width:"0.889em"},attrs:{width:"0.889em",height:"1.8159999999999998em",viewBox:"0 0 889 1816",preserveAspectRatio:"xMinYMin"}},[a("path",{attrs:{d:"M384 0 H504 V1816 H384z M384 0 H504 V1816 H384z"}})])])]),a("span",{staticStyle:{top:"-3.81601em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.816em"}}),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[t._v("⎨")])])]),a("span",{staticStyle:{top:"-4.95801em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.816em"}}),a("span",{staticStyle:{height:"1.8159999999999998em",width:"0.889em"}},[a("svg",{staticStyle:{width:"0.889em"},attrs:{width:"0.889em",height:"1.8159999999999998em",viewBox:"0 0 889 1816",preserveAspectRatio:"xMinYMin"}},[a("path",{attrs:{d:"M384 0 H504 V1816 H384z M384 0 H504 V1816 H384z"}})])])]),a("span",{staticStyle:{top:"-6.766019999999999em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.816em"}}),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[t._v("⎧")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"3.3500199999999998em"}},[a("span")])])])])]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mtable"},[a("span",{staticClass:"col-align-l"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"3.8500000000000005em"}},[a("span",{staticStyle:{top:"-5.850000000000001em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.008em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathbf"},[t._v("AX")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("≤")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mord mathbf"},[t._v("b")])])]),a("span",{staticStyle:{top:"-4.410000000000001em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.008em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("A")]),a("span",{staticClass:"mord mathnormal"},[t._v("e")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("q")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("⋅")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mord mathbf"},[t._v("X")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("b")]),a("span",{staticClass:"mord mathnormal"},[t._v("e")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("q")])])]),a("span",{staticStyle:{top:"-2.9700000000000006em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.008em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("G")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathbf"},[t._v("X")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("≤")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mord mathbf"},[t._v("0")])])]),a("span",{staticStyle:{top:"-1.5300000000000002em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.008em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.07153em"}},[t._v("C")]),a("span",{staticClass:"mord mathnormal"},[t._v("e")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("q")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathbf"},[t._v("X")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mord mathbf"},[t._v("0")])])]),a("span",{staticStyle:{top:"-0.08999999999999997em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.008em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")]),a("span",{staticClass:"mord mathnormal"},[t._v("L")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05017em"}},[t._v("B")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("≤")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mord mathbf"},[t._v("X")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("≤")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10903em"}},[t._v("U")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05017em"}},[t._v("B")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"3.35em"}},[a("span")])])])])])]),a("span",{staticClass:"mclose nulldelimiter"})])])])])])]),t._v(" "),a("ol",[a("li",[t._v("先建立目标函数m文件")]),t._v(" "),a("li",[t._v("若有非线性约束"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("G")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",{attrs:{mathvariant:"bold"}},[t._v("X")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mo",[t._v("≤")]),a("mn",{attrs:{mathvariant:"bold"}},[t._v("0")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("G(\\bold{X})\\le \\bold{0}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("G")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathbf"},[t._v("X")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("≤")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"mord mathbf"},[t._v("0")])])])]),t._v("或"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("C")]),a("mi",[t._v("e")]),a("mi",[t._v("q")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",{attrs:{mathvariant:"bold"}},[t._v("X")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mo",[t._v("=")]),a("mn",{attrs:{mathvariant:"bold"}},[t._v("0")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("Ceq(\\bold{X})=\\bold{0}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.07153em"}},[t._v("C")]),a("span",{staticClass:"mord mathnormal"},[t._v("e")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("q")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathbf"},[t._v("X")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"mord mathbf"},[t._v("0")])])])]),t._v("建立m文件表示出来"),a("div",{staticClass:"language-matlab line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-matlab"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("G"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Ceq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nonlcon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("X"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n G"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n Ceq"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])]),t._v(" "),a("li",[t._v("建立主程序，使用非线性规划求解的函数fmincon格式如下"),a("div",{staticClass:"language-matlab line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-matlab"}},[a("code",[t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fmincon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fun'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("x0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fmincon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fun'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("x0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Aeq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("beq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fmincon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fun'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("x0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Aeq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("beq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("VLB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("VUB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fmincon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fun'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("x0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Aeq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("beq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("VLB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("VUB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nonlcon'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fmincon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fun'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("x0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Aeq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("beq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("VLB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("VUB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nonlcon'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("fval"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fmincon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("fval"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("exitflag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fmincon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("fval"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("exitflag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fmincon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);