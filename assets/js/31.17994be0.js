(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{521:function(s,a,t){"use strict";t.r(a);var e=t(14),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("#一、ES6块级作用域")]),s._v(" "),a("h2",{attrs:{id:"let-声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#let-声明"}},[s._v("#")]),s._v(" let 声明")]),s._v(" "),a("blockquote",[a("p",[s._v("块级声明用于声明在指定作用域之外无法访问的变量，存在于：")])]),s._v(" "),a("p",[s._v("①函数内部\n②块内（字符{和}之间的区域）")]),s._v(" "),a("h5",{attrs:{id:"禁止重声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#禁止重声明"}},[s._v("#")]),s._v(" 禁止重声明")]),s._v(" "),a("p",[s._v("（1）如果在作用域由已经存在某个标识，再用let声明时会报错")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var name = 'zhang'\nlet name = 'wang' // 报错\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("（2）如果在当前作用域内嵌另一个作用域，使可在内嵌的作用域中用let声明同名变量，代码如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var name = 'zhang'\nif(status){\n\tlet name = 'wang' // 不会报错  \n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"const-声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#const-声明"}},[s._v("#")]),s._v(" const 声明")]),s._v(" "),a("blockquote",[a("p",[s._v("声明的是常量，一旦被设定后不可更改，所以，每个通过const声明的常量必须进行初始化。")])]),s._v(" "),a("p",[a("code",[s._v("正确：const name = 'zhang';")]),s._v(" "),a("code",[s._v("错误：const name;")])]),s._v(" "),a("h4",{attrs:{id:"const-与-let"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#const-与-let"}},[s._v("#")]),s._v(" const 与 let")]),s._v(" "),a("blockquote",[a("p",[s._v("相同之处：都是块级标识符，只在当前代码块内有效，不会提升至作用域顶部。\n不同之处：无论在严格模式下还是非严格模式下，都不可以为const 定义的常量再赋值，否则会报错。")])]),s._v(" "),a("h4",{attrs:{id:"用const-声明对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用const-声明对象"}},[s._v("#")]),s._v(" 用const 声明对象")]),s._v(" "),a("blockquote",[a("p",[s._v("const 声明不允许修改绑定，但允许修改值，也就是说，用const声明对象后，可以修改该对象的属性值，代码如下：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const person = { name : 'zhang' };\n// 可以修改对象属性的值 person.name = 'wang'\n// 报错 person = { name:'wang' }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"临时死区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#临时死区"}},[s._v("#")]),s._v(" 临时死区")]),s._v(" "),a("blockquote",[a("p",[s._v("let和const与var不同，声明的变量不会被提升到作用域的顶部，不可在声明之前访问这些变量。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('if(status){\n console.log(typeof value);\n let value = "blue";\n}\n// 此时的console.log()会报错，此时的value还位于“临时死区”或TDZ中。\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h4",{attrs:{id:"全局块作用域绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局块作用域绑定"}},[s._v("#")]),s._v(" 全局块作用域绑定")]),s._v(" "),a("blockquote",[a("p",[s._v("let和const与var的另一个区别是它们在全局作用域中的行为，当var被用于全局作用域时，会创建一个新的全局变量作为全局对象（浏览器环境中的window对象）的属性。var 声明的变量会无意中覆盖一个已经存在的全局属性。代码如下：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var RegExp = 'Hello'\nconsole.log(window.RegExp) // Hello (覆盖)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"块级绑定最佳实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#块级绑定最佳实践"}},[s._v("#")]),s._v(" 块级绑定最佳实践")]),s._v(" "),a("blockquote",[a("p",[s._v("默认使用const，只在确定需要改变变量的值时使用let，这样就可以在某种程度上实现代码的不可变。防止某些错误的产生。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);