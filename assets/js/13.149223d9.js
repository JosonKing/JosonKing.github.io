(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{373:function(t,a,r){"use strict";r.r(a);var e=r(42),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"css-grid-网格布局教程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#css-grid-网格布局教程"}},[t._v("#")]),t._v(" CSS Grid 网格布局教程")]),t._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#一、概述"}},[t._v("一、概述")])]),r("li",[r("a",{attrs:{href:"#二、基本概念"}},[t._v("二、基本概念")]),r("ul",[r("li",[r("a",{attrs:{href:"#_1-容器和项目"}},[t._v("1. 容器和项目")])]),r("li",[r("a",{attrs:{href:"#_2-行和列"}},[t._v("2. 行和列")])]),r("li",[r("a",{attrs:{href:"#_3-单元格"}},[t._v("3. 单元格")])]),r("li",[r("a",{attrs:{href:"#_4-网格线"}},[t._v("4. 网格线")])])])]),r("li",[r("a",{attrs:{href:"#三、容器属性"}},[t._v("三、容器属性")]),r("ul",[r("li",[r("a",{attrs:{href:"#_1-display-属性"}},[t._v("1. display 属性")])]),r("li",[r("a",{attrs:{href:"#_2-grid-template-columns、grid-template-rows-属性"}},[t._v("2. grid-template-columns、grid-template-rows 属性")])]),r("li",[r("a",{attrs:{href:"#_2-auto-fill-关键字"}},[t._v("（2） auto-fill 关键字")])]),r("li",[r("a",{attrs:{href:"#_3-fr-关键字"}},[t._v("（3） fr 关键字")])]),r("li",[r("a",{attrs:{href:"#_4-minmax"}},[t._v("（4） minmax()")])]),r("li",[r("a",{attrs:{href:"#_5-auto-关键字"}},[t._v("（5） auto 关键字")])]),r("li",[r("a",{attrs:{href:"#_6-网格线的名称"}},[t._v("（6） 网格线的名称")])]),r("li",[r("a",{attrs:{href:"#_3-grid-row-gap-grid-column-gap-grid-gap-属性"}},[t._v("3. grid-row-gap，grid-column-gap，grid-gap 属性")])]),r("li",[r("a",{attrs:{href:"#_4-grid-template-areas-属性"}},[t._v("4. grid-template-areas 属性")])]),r("li",[r("a",{attrs:{href:"#_5-grid-auto-flow-属性"}},[t._v("5. grid-auto-flow 属性")])]),r("li",[r("a",{attrs:{href:"#_6-justify-items、align-items、place-items-属性"}},[t._v("6. justify-items、align-items、place-items 属性")])]),r("li",[r("a",{attrs:{href:"#_7-justify-content、align-content、place-content-属性"}},[t._v("7. justify-content、align-content、place-content 属性")])]),r("li",[r("a",{attrs:{href:"#_8-grid-auto-columns、grid-auto-rows-属性"}},[t._v("8. grid-auto-columns、grid-auto-rows 属性")])]),r("li",[r("a",{attrs:{href:"#_9-grid-template、grid-属性"}},[t._v("9. grid-template、grid 属性")])])])]),r("li",[r("a",{attrs:{href:"#四、项目属性"}},[t._v("四、项目属性")]),r("ul",[r("li",[r("a",{attrs:{href:"#_1-grid-column-start、grid-column-end、grid-row-start、grid-row-end-属性"}},[t._v("1. grid-column-start、grid-column-end、grid-row-start、grid-row-end 属性")])]),r("li",[r("a",{attrs:{href:"#_2-grid-column、grid-row-属性"}},[t._v("2. grid-column、grid-row 属性")])]),r("li",[r("a",{attrs:{href:"#_3-grid-area-属性"}},[t._v("3. grid-area 属性")])]),r("li",[r("a",{attrs:{href:"#_4-justify-self、align-self、place-self-属性"}},[t._v("4. justify-self、align-self、place-self 属性")])])])])])]),r("p"),t._v(" "),r("h2",{attrs:{id:"一、概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、概述"}},[t._v("#")]),t._v(" 一、概述")]),t._v(" "),r("p",[t._v("Grid 布局与 Flex 布局有一定的相似性，都可以指定容器内部多个项目的位置。")]),t._v(" "),r("p",[t._v('Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是一维布局。Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是二维布局。Grid 布局远比 Flex 布局强大。')]),t._v(" "),r("h2",{attrs:{id:"二、基本概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、基本概念"}},[t._v("#")]),t._v(" 二、基本概念")]),t._v(" "),r("h3",{attrs:{id:"_1-容器和项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-容器和项目"}},[t._v("#")]),t._v(" 1. 容器和项目")]),t._v(" "),r("p",[t._v('采用网格布局的区域，称为"容器"（container）。容器内部采用网格定位的子元素，称为"项目"（item）。')]),t._v(" "),r("blockquote",[r("p",[t._v("项目只能是容器的顶层子元素，不包含项目的子元素。Grid 布局只对项目生效。")])]),t._v(" "),r("h3",{attrs:{id:"_2-行和列"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-行和列"}},[t._v("#")]),t._v(" 2. 行和列")]),t._v(" "),r("p",[t._v('容器里面的水平区域称为"行"（row），垂直区域称为"列"（column）。')]),t._v(" "),r("h3",{attrs:{id:"_3-单元格"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-单元格"}},[t._v("#")]),t._v(" 3. 单元格")]),t._v(" "),r("p",[t._v('行和列的交叉区域，称为"单元格"（cell）。')]),t._v(" "),r("p",[t._v("正常情况下，n行和m列会产生n x m个单元格。")]),t._v(" "),r("h3",{attrs:{id:"_4-网格线"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-网格线"}},[t._v("#")]),t._v(" 4. 网格线")]),t._v(" "),r("p",[t._v('划分网格的线，称为"网格线"（grid line）。水平网格线划分出行，垂直网格线划分出列。')]),t._v(" "),r("p",[t._v("正常情况下，n行有n + 1根水平网格线，m列有m + 1根垂直网格线。")]),t._v(" "),r("h2",{attrs:{id:"三、容器属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、容器属性"}},[t._v("#")]),t._v(" 三、容器属性")]),t._v(" "),r("blockquote",[r("p",[t._v("Grid 布局的属性分成两类。一类定义在容器上面，称为容器属性；另一类定义在项目上面，称为项目属性。")])]),t._v(" "),r("h3",{attrs:{id:"_1-display-属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-display-属性"}},[t._v("#")]),t._v(" 1. display 属性")]),t._v(" "),r("p",[r("code",[t._v("display: grid")]),t._v(" 指定一个容器采用网格布局。")]),t._v(" "),r("p",[t._v("默认情况下，容器元素都是块级元素，但也可以设成行内元素："),r("code",[t._v("display: inline-grid")])]),t._v(" "),r("blockquote",[r("p",[t._v("设为网格布局以后，容器子元素（项目）的float、display: inline-block、display: table-cell、vertical-align和column-*等设置都将失效。")])]),t._v(" "),r("h3",{attrs:{id:"_2-grid-template-columns、grid-template-rows-属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-grid-template-columns、grid-template-rows-属性"}},[t._v("#")]),t._v(" 2. grid-template-columns、grid-template-rows 属性")]),t._v(" "),r("p",[t._v("grid-template-columns属性定义每一列的列宽，grid-template-rows属性定义每一行的行高。")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("// 三行三列的网格，列宽和行高都是100px。\n// 绝对单位\ngrid-template-columns: 100px 100px 100px;\ngrid-template-rows: 100px 100px 100px;\n\n// 百分比\ngrid-template-columns: 33.33% 33.33% 33.33%;\ngrid-template-rows: 33.33% 33.33% 33.33%;\n")])])]),r("h4",{attrs:{id:"_1-repeat"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-repeat"}},[t._v("#")]),t._v(" (1) repeat()")]),t._v(" "),r("p",[t._v("简化重复的值，第一个参数是重复的次数，第二个参数是所要重复的值。")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("// 三行三列，每行每列各占33.33%。\ngrid-template-columns: repeat(3, 33.33%);\ngrid-template-rows: repeat(3, 33.33%);\n\n// 重复某种模式\n// 第一列和第四列的宽度为100px，第二列和第五列为20px，第三列和第六列为80px。\ngrid-template-columns: repeat(2, 100px 20px 80px);\n")])])]),r("h3",{attrs:{id:"_2-auto-fill-关键字"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-auto-fill-关键字"}},[t._v("#")]),t._v(" （2） auto-fill 关键字")]),t._v(" "),r("p",[t._v("单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用auto-fill关键字表示自动填充："),r("code",[t._v("grid-template-columns: repeat(auto-fill, 100px)")])]),t._v(" "),r("h3",{attrs:{id:"_3-fr-关键字"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-fr-关键字"}},[t._v("#")]),t._v(" （3） fr 关键字")]),t._v(" "),r("p",[t._v('为了方便表示比例关系，网格布局提供了fr关键字（fraction 的缩写，意为"片段"）。如果两列的宽度分别为1fr和2fr，就表示后者是前者的两倍：'),r("code",[t._v("grid-template-columns: 1fr 1fr")]),t._v(" , "),r("code",[t._v("grid-template-columns: 150px 1fr 2fr")])]),t._v(" "),r("h3",{attrs:{id:"_4-minmax"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-minmax"}},[t._v("#")]),t._v(" （4） minmax()")]),t._v(" "),r("p",[t._v("产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。\n"),r("code",[t._v("grid-template-columns: 1fr 1fr minmax(100px, 1fr)")]),t._v(" "),r("code",[t._v("minmax(100px, 1fr)")]),t._v(" 表示列宽不小于100px，不大于1fr。")]),t._v(" "),r("h3",{attrs:{id:"_5-auto-关键字"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-auto-关键字"}},[t._v("#")]),t._v(" （5） auto 关键字")]),t._v(" "),r("p",[t._v("表示由浏览器自己决定长度："),r("code",[t._v("grid-template-columns: 100px auto 100px")])]),t._v(" "),r("h3",{attrs:{id:"_6-网格线的名称"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-网格线的名称"}},[t._v("#")]),t._v(" （6） 网格线的名称")]),t._v(" "),r("p",[r("code",[t._v("grid-template-columns")]),t._v(" 属性和 "),r("code",[t._v("grid-template-rows")]),t._v(" 属性里面，还可以使用方括号，指定每一根网格线的名字，方便以后的引用：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];\ngrid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];\n")])])]),r("blockquote",[r("p",[t._v("上面代码指定网格布局为3行 x 3列，因此有4根垂直网格线和4根水平网格线。方括号里面依次是这八根线的名字。")])]),t._v(" "),r("p",[t._v("网格布局允许同一根线有多个名字，比如[fifth-line row-5]。")]),t._v(" "),r("h3",{attrs:{id:"_3-grid-row-gap-grid-column-gap-grid-gap-属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-grid-row-gap-grid-column-gap-grid-gap-属性"}},[t._v("#")]),t._v(" 3. grid-row-gap，grid-column-gap，grid-gap 属性")]),t._v(" "),r("p",[t._v("grid-row-gap属性设置行与行的间隔（行间距），grid-column-gap属性设置列与列的间隔（列间距）。")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("grid-row-gap: 20px;\ngrid-column-gap: 20px;\n")])])]),r("p",[t._v("grid-gap属性是grid-column-gap和grid-row-gap的合并简写形式：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("grid-gap: <grid-row-gap> <grid-column-gap>;\ngrid-gap: 20px 20px;\n")])])]),r("p",[t._v("如果grid-gap省略了第二个值，浏览器认为第二个值等于第一个值。")]),t._v(" "),r("blockquote",[r("p",[t._v("根据最新标准，上面三个属性名的grid-前缀已经删除，grid-column-gap和grid-row-gap写成column-gap和row-gap，grid-gap写成gap。")])]),t._v(" "),r("h3",{attrs:{id:"_4-grid-template-areas-属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-grid-template-areas-属性"}},[t._v("#")]),t._v(" 4. grid-template-areas 属性")]),t._v(" "),r("p",[t._v('网格布局允许指定"区域"（area），一个区域由单个或多个单元格组成。grid-template-areas属性用于定义区域。')]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("// 3*3 单元格\ngrid-template-columns: 100px 100px 100px;\ngrid-template-rows: 100px 100px 100px;\n\n// 划分出9个单元格，然后将其定名为a到i的九个区域，分别对应这九个单元格。\ngrid-template-areas: 'a b c'\n                      'd e f'\n                      'g h i';\n\n// 多个单元格合并成一个区域，将9个单元格分成a、b、c三个区域。\ngrid-template-areas: 'a a a'\n                     'b b b'\n                     'c c c';  \n\n// 顶部是页眉区域header，底部是页脚区域footer，中间部分则为main和sidebar。\ngrid-template-areas: \"header header header\"\n                     \"main main sidebar\"\n                     \"footer footer footer\";\n\n// 某些区域不需要利用，则使用\"点\"（.）表示。\ngrid-template-areas: 'a . c'\n                     'd . f'\n                     'g . i';                     \n")])])]),r("h3",{attrs:{id:"_5-grid-auto-flow-属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-grid-auto-flow-属性"}},[t._v("#")]),t._v(" 5. grid-auto-flow 属性")]),t._v(" "),r("p",[t._v('划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格。默认的放置顺序是"先行后列"，即先填满第一行，再开始放入第二行。这个顺序由 '),r("code",[t._v("grid-auto-flow")]),t._v(' 属性决定，默认值是row，即"先行后列"。也可以将它设成column，变成"先列后行"。')]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("grid-auto-flow: column;\n")])])]),r("p",[t._v("还可以设成 "),r("code",[t._v("row dense")]),t._v(" 和 "),r("code",[t._v("column dense")]),t._v(" 。这两个值主要用于，某些项目指定位置以后，剩下的项目怎么自动放置。\n设为 "),r("code",[t._v("row dense")]),t._v(' ，表示"先行后列"，并且尽可能紧密填满，尽量不出现空格。\n改为 '),r("code",[t._v("column dense")]),t._v(' ，表示"先列后行"，并且尽量填满空格。')]),t._v(" "),r("h3",{attrs:{id:"_6-justify-items、align-items、place-items-属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-justify-items、align-items、place-items-属性"}},[t._v("#")]),t._v(" 6. justify-items、align-items、place-items 属性")]),t._v(" "),r("p",[t._v("justify-items属性设置单元格内容的水平位置（左中右），align-items属性设置单元格内容的垂直位置（上中下）。")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("justify-items: start | end | center | stretch;\nalign-items: start | end | center | stretch;\n")])])]),r("ul",[r("li",[t._v("start：对齐单元格的起始边缘。")]),t._v(" "),r("li",[t._v("end：对齐单元格的结束边缘。")]),t._v(" "),r("li",[t._v("center：单元格内部居中。")]),t._v(" "),r("li",[t._v("stretch：拉伸，占满单元格的整个宽度（默认值）\nplace-items属性是align-items属性和justify-items属性的合并简写形式。")])]),t._v(" "),r("h3",{attrs:{id:"_7-justify-content、align-content、place-content-属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-justify-content、align-content、place-content-属性"}},[t._v("#")]),t._v(" 7. justify-content、align-content、place-content 属性")]),t._v(" "),r("p",[t._v("justify-content属性是整个内容区域在容器里面的水平位置（左中右），align-content属性是整个内容区域的垂直位置（上中下）。")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("justify-content: start | end | center | stretch | space-around | space-between | space-evenly;\nalign-content: start | end | center | stretch | space-around | space-between | space-evenly; \n")])])]),r("ul",[r("li",[t._v("start - 对齐容器的起始边框。")]),t._v(" "),r("li",[t._v("end - 对齐容器的结束边框。")]),t._v(" "),r("li",[t._v("center - 容器内部居中。")]),t._v(" "),r("li",[t._v("stretch - 项目大小没有指定时，拉伸占据整个网格容器。")]),t._v(" "),r("li",[t._v("space-around - 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍。")]),t._v(" "),r("li",[t._v("space-between - 项目与项目的间隔相等，项目与容器边框之间没有间隔。")]),t._v(" "),r("li",[t._v("space-evenly - 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔。")])]),t._v(" "),r("p",[t._v("place-content属性是align-content属性和justify-content属性的合并简写形式。")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("place-content: <align-content> <justify-content>\n")])])]),r("h3",{attrs:{id:"_8-grid-auto-columns、grid-auto-rows-属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-grid-auto-columns、grid-auto-rows-属性"}},[t._v("#")]),t._v(" 8. grid-auto-columns、grid-auto-rows 属性")]),t._v(" "),r("p",[t._v("有时候，一些项目的指定位置，在现有网格的外部。比如网格只有3列，但是某一个项目指定在第5行。这时，浏览器会自动生成多余的网格，以便放置项目。")]),t._v(" "),r("p",[t._v("grid-auto-columns属性和grid-auto-rows属性用来设置，浏览器自动创建的多余网格的列宽和行高。它们的写法与grid-template-columns和grid-template-rows完全相同。如果不指定这两个属性，浏览器完全根据单元格内容的大小，决定新增网格的列宽和行高。")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("grid-auto-rows: 50px; \n")])])]),r("h3",{attrs:{id:"_9-grid-template、grid-属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_9-grid-template、grid-属性"}},[t._v("#")]),t._v(" 9. grid-template、grid 属性")]),t._v(" "),r("p",[t._v("grid-template属性是grid-template-columns、grid-template-rows和grid-template-areas这三个属性的合并简写形式。")]),t._v(" "),r("p",[t._v("grid属性是grid-template-rows、grid-template-columns、grid-template-areas、 grid-auto-rows、grid-auto-columns、grid-auto-flow这六个属性的合并简写形式。")]),t._v(" "),r("h2",{attrs:{id:"四、项目属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、项目属性"}},[t._v("#")]),t._v(" 四、项目属性")]),t._v(" "),r("blockquote",[r("p",[t._v("下面这些属性定义在项目上面。")])]),t._v(" "),r("h3",{attrs:{id:"_1-grid-column-start、grid-column-end、grid-row-start、grid-row-end-属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-grid-column-start、grid-column-end、grid-row-start、grid-row-end-属性"}},[t._v("#")]),t._v(" 1. grid-column-start、grid-column-end、grid-row-start、grid-row-end 属性")]),t._v(" "),r("p",[t._v("项目的位置是可以指定的，具体方法就是指定项目的四个边框，分别定位在哪根网格线。")]),t._v(" "),r("ul",[r("li",[t._v("grid-column-start属性：左边框所在的垂直网格线")]),t._v(" "),r("li",[t._v("grid-column-end属性：右边框所在的垂直网格线")]),t._v(" "),r("li",[t._v("grid-row-start属性：上边框所在的水平网格线")]),t._v(" "),r("li",[t._v("grid-row-end属性：下边框所在的水平网格线")])]),t._v(" "),r("p",[t._v("没有指定上下边框，所以会采用默认位置，没有指定位置，由浏览器自动布局。")]),t._v(" "),r("h3",{attrs:{id:"_2-grid-column、grid-row-属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-grid-column、grid-row-属性"}},[t._v("#")]),t._v(" 2. grid-column、grid-row 属性")]),t._v(" "),r("p",[t._v("grid-column属性是grid-column-start和grid-column-end的合并简写形式，grid-row属性是grid-row-start属性和grid-row-end的合并简写形式。")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("grid-column: <start-line> / <end-line>;\ngrid-row: <start-line> / <end-line>;\n")])])]),r("h3",{attrs:{id:"_3-grid-area-属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-grid-area-属性"}},[t._v("#")]),t._v(" 3. grid-area 属性")]),t._v(" "),r("p",[t._v("grid-area属性指定项目放在哪一个区域。")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("grid-area: e;\n\ngrid-area: <row-start> / <column-start> / <row-end> / <column-end>;\n")])])]),r("h3",{attrs:{id:"_4-justify-self、align-self、place-self-属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-justify-self、align-self、place-self-属性"}},[t._v("#")]),t._v(" 4. justify-self、align-self、place-self 属性")]),t._v(" "),r("p",[t._v("justify-self属性设置单元格内容的水平位置（左中右），跟justify-items属性的用法完全一致，但只作用于单个项目。")]),t._v(" "),r("p",[t._v("align-self属性设置单元格内容的垂直位置（上中下），跟align-items属性的用法完全一致，也是只作用于单个项目。")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("justify-self: start | end | center | stretch;\nalign-self: start | end | center | stretch;\n")])])]),r("ul",[r("li",[t._v("start：对齐单元格的起始边缘。")]),t._v(" "),r("li",[t._v("end：对齐单元格的结束边缘。")]),t._v(" "),r("li",[t._v("center：单元格内部居中。")]),t._v(" "),r("li",[t._v("stretch：拉伸，占满单元格的整个宽度（默认值）。")])])])}),[],!1,null,null,null);a.default=s.exports}}]);