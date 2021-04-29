(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{361:function(e,a,t){"use strict";t.r(a);var s=t(42),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"js模块化规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js模块化规范"}},[e._v("#")]),e._v(" JS模块化规范")]),e._v(" "),t("blockquote",[t("p",[e._v("原始方式")])]),e._v(" "),t("ul",[t("li",[e._v("模块的引入顺序可能会出错")]),e._v(" "),t("li",[e._v("会污染全局变量")]),e._v(" "),t("li",[e._v("模块之间的依赖关系不明显")])]),e._v(" "),t("blockquote",[t("p",[e._v("主流规范")])]),e._v(" "),t("ul",[t("li",[e._v("CommonJS")]),e._v(" "),t("li",[e._v("AMD")]),e._v(" "),t("li",[e._v("CMD")]),e._v(" "),t("li",[e._v("ES6 Module")])]),e._v(" "),t("h2",{attrs:{id:"commonjs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commonjs"}},[e._v("#")]),e._v(" CommonJS")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("一个单独的文件就是一个模块。每一个模块都是一个单独的作用域，模块必须通过 module.exports 导出对外的变量或接口，通过 require() 来导入其他模块的输出到当前模块作用域中。\n")])])]),t("blockquote",[t("p",[e._v("NodeJs 中 CommonJS 的模块化机制")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 模块定义 add.js\nmodule.eports.add = function(a, b) {\n  return a + b;\n};\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 模块定义 decrease.js\nmodule.exports.decrease = function(a, b) {\n  return a - b;\n};\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// formula.js,模块使用，利用 require() 方法加载模块,require 导出的即是 module.exports 的内容\nconst add = require("./add.js").add;\nconst decrease = require("./decrease.js").decrease;\nmodule.exports.square_difference = function(a, b) {\n  return add(a, b) * decrease(a, b);\n};\n')])])]),t("blockquote",[t("p",[e._v("module.exports = exports = {}")])]),e._v(" "),t("h2",{attrs:{id:"amd-asynchronous-module-definition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#amd-asynchronous-module-definition"}},[e._v("#")]),e._v(" AMD(Asynchronous Module Definition)")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("异步模块加载机制，它采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句都定义在一个回调函数中，等到依赖加载完成之后，这个回调函数才会运行。\n")])])]),t("ul",[t("li",[e._v("实现 JavaScript 文件的异步加载，避免网页失去响应")]),e._v(" "),t("li",[e._v("管理模块之间的依赖性，便于代码的编写和维护")])]),e._v(" "),t("h2",{attrs:{id:"cmd-common-module-definition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cmd-common-module-definition"}},[e._v("#")]),e._v(" CMD (Common Module Definition)")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("CMD 在浏览器端的实现有 SeaJS， 和 RequireJS 一样，SeaJS 加载原理也是动态创建异步 Script 标签。二者的区别主要是依赖写法上不同，AMD 推崇一开始就加载所有的依赖，而 CMD 则推崇在需要用的地方才进行依赖加载。\n")])])]),t("h2",{attrs:{id:"es-module"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es-module"}},[e._v("#")]),e._v(" ES Module")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("ECMAScript 6 中引入的模块化功能。模块功能主要由两个命令构成，分别是 export 和 import。export 命令用于规定模块的对外接口，import 命令用于输入其他模块提供的功能。\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// 模块定义 add.js\nexport function add(a, b) {\n  return a + b;\n}\n\n// 模块使用 main.js\nimport { add } from "./add.js";\nconsole.log(add(1, 2)); // 3\n')])])]),t("blockquote",[t("p",[e._v("export 和 export default")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("在一个文件或模块中，export 可以有多个，export default 仅有一个, export 类似于具名导出，而 default 类似于导出一个变量名为 default 的变量。同时在 import 的时候，对于 export 的变量，必须要用具名的对象去承接，而对于 default，则可以任意指定变量名\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// a.js\nexport var a = 2;\nexport var b = 3 ;\n// main.js 在导出的时候必须要用具名变量 a, b 且以解构的方式得到导出变量\nimport {a, b} from 'a.js' // √ a= 2, b = 3\nimport a from 'a.js' // x\n\n// b.js export default 方式\nconst a = 3\nexport default a // 注意不能 export default const a = 3 ,因为这里 default 就相当于一个变量名\n\n// 导出\nimport b form 'b.js' // √\nimport c form 'b.js' // √ 因为 b 模块导出的是 default，对于导出的default，可以用任意变量去承接\n")])])]),t("blockquote",[t("p",[e._v("ES Module 模块加载和导出过程")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// counter.js\nexport let count = 5\n\n// display.js\nexport function render() {\n  console.log('render')\n}\n\n// main.js\nimport { counter } from './counter.js';\nimport { render } from './display.js'\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);