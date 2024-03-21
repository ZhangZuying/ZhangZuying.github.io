(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{354:function(s,e,a){"use strict";a.r(e);var t=a(4),n=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h4",{attrs:{id:"_1-什么是mvvm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是mvvm"}},[s._v("#")]),s._v(" 1.什么是MVVM？")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("MVVM是一种设计思想。\nModel 层代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑；\nView 代表UI 组件，它负责将数据模型转化成UI 展现出来，ViewModel 是一个\n同步View 和 Model的对象。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h4",{attrs:{id:"_2-mvvm和mvc区别-它和其它框架-jquery-的区别是什么-哪些场景适合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-mvvm和mvc区别-它和其它框架-jquery-的区别是什么-哪些场景适合"}},[s._v("#")]),s._v(" 2.mvvm和mvc区别？它和其它框架（jquery）的区别是什么？哪些场景适合？")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mvc和mvvm其实区别并不大。都是一种设计思想。主要就是mvc中Controller演变成mvvm中的\nviewModel。mvvm主要解决了mvc中大量的DOM 操作使页面渲染性能降低，加载速度变慢，影响用户\n体验。\n区别：vue数据驱动，通过数据来显示视图层而不是节点操作。\n场景：数据操作比较多的场景，更加便捷\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h4",{attrs:{id:"_3-vue的优点是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-vue的优点是什么"}},[s._v("#")]),s._v(" 3.vue的优点是什么？")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('低耦合:视图（View）可以独立于Model变化和修改，一个ViewModel可以绑定到不同的"View"上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变。\n可重用性:你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑。\n独立开发:开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计。\n可测试:界面素来是比较难于测试的，而现在测试可以针对ViewModel来写。\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h4",{attrs:{id:"_4-vue组件之间传值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-vue组件之间传值"}},[s._v("#")]),s._v(" 4.vue组件之间传值？")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("*父组件与子组件传值\n父组件通过标签上面定义传值\n子组件通过props方法接受数据\n*子组件向父组件传递数据\n子组件通过$emit方法传递参数\n*vuex\n*eventbus\n*pubsub.js\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h4",{attrs:{id:"_5-vue2和vue3区别-vue3比vue2优点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-vue2和vue3区别-vue3比vue2优点"}},[s._v("#")]),s._v(" 5.vue2和vue3区别？vue3比vue2优点？")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("我们可以概览Vue3的新特性\n速度更快、体积减少、更易维护、更接近原生、更易使用\nvue3相比vue2、重写了虚拟Dom实现、编译模板的优化、\n更高效的组件初始化、undate性能提高1.3~2倍、\nSSR速度提高了2~3倍\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h4",{attrs:{id:"_6-vuex面试相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-vuex面试相关"}},[s._v("#")]),s._v(" 6.vuex面试相关")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vue框架中状态管理。在main.js引入store，注入。新建一个目录store，….. export 。场景有：单页应用中，组件之间的状态。\n当触发组件中的某一个事件或者方法得时候，会通过dispatch分发一个消息到actions当中，action会进行异步请求数据，当数据请求回来的时候，会通过commit提交到mutations当中，在mutations当中去改变state当中的状态。状态改变以后会映射组件也发生改变。\n1、Vuex 是一个专为 Vue.js 设计的状态管理模式\nVuex 是一个专为 Vue.js 应用程序开发的状态管理模式\n•1.vuex解决了组件之间同一状态的共享问题 （解决了不同组件之间的数据共享）\n•2.组件里面数据的持久化。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h4",{attrs:{id:"_7-v-show和v-if指令的共同点和不同点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-v-show和v-if指令的共同点和不同点"}},[s._v("#")]),s._v(" 7.v-show和v-if指令的共同点和不同点")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("v-show指令是通过修改元素的display的CSS属性让其显示或者隐藏\nv-if指令是直接销毁和重建DOM达到让元素显示和隐藏的效果\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h4",{attrs:{id:"_8-keep-alive的作用是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-keep-alive的作用是什么"}},[s._v("#")]),s._v(" 8.keep-alive的作用是什么?")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("<keep-alive></keep-alive> 包裹动态组件时，会缓存不活动的组件实例，\n主要用于保留组件状态或避免重新渲染。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h4",{attrs:{id:"_9-vue中引入组件的步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-vue中引入组件的步骤"}},[s._v("#")]),s._v(" 9.Vue中引入组件的步骤?")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("1）采用ES6的import ... from ...语法或CommonJS的require()方法引入组件\n2）对组件进行注册,代码如下\n// 注册\nVue.component('my-component', {\n  template: '<div>A custom component!</div>'})\n3）使用组件<my-component></my-component>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h4",{attrs:{id:"_10-vue-router有哪几种导航钩子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-vue-router有哪几种导航钩子"}},[s._v("#")]),s._v(" 10.vue-router有哪几种导航钩子？")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("三种，一种是全局导航钩子：router.beforeEach(to,from,next)，作用：跳转前进行判断拦截。\n第二种：组件内的钩子；\n第三种：单独路由独享组件\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h4",{attrs:{id:"_11-生命周期相关面试题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-生命周期相关面试题"}},[s._v("#")]),s._v(" 11.生命周期相关面试题")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("总共分为8个阶段创建前/后，载入前/后，更新前/后，销毁前/后。\n1-beforeCreate 初始化之后\n2-created 创建完成\n3-beforeMount 挂载之前\n4-mounted 被创建\n5-beforeUpdate 数据更新前\n6-updated 被更新后\n7-activated\n8-deactivated\n9-beforeDestroy 销毁之前\n10-destroyed 销毁之后\nVue 实例从创建到销毁的过程，就是生命周期。也就是从开始创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("h4",{attrs:{id:"_12-第一次页面加载会触发哪几个钩子-dom-渲染在-哪个周期中就已经完成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12-第一次页面加载会触发哪几个钩子-dom-渲染在-哪个周期中就已经完成"}},[s._v("#")]),s._v(" 12.第一次页面加载会触发哪几个钩子?DOM 渲染在 哪个周期中就已经完成?")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("*第一次页面加载时会触发 beforeCreate, created, beforeMount, mounted 这几个钩子\n*DOM 渲染在 mounted 中就已经完成了。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h4",{attrs:{id:"_13-举例说出几种vue当中的指令和它的用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-举例说出几种vue当中的指令和它的用法"}},[s._v("#")]),s._v(" 13.举例说出几种vue当中的指令和它的用法？")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("v-if：判断是否隐藏；\nv-for：数据循环；\nv-bind:class：绑定一个属性；\nv-model：实现双向绑定\nv-html：更新元素的innerHTML；\nv-show与v-if\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h4",{attrs:{id:"_14-vue-loader是什么-使用它的用途有哪些"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_14-vue-loader是什么-使用它的用途有哪些"}},[s._v("#")]),s._v(" 14.vue-loader是什么？使用它的用途有哪些？")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("解析.vue文件的一个加载器。\n用途：js可以写es6、style样式可以scss或less、template可以加jade等\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h4",{attrs:{id:"_15-为什么使用key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_15-为什么使用key"}},[s._v("#")]),s._v(" 15.为什么使用key？")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("当有相同标签名的元素切换时，需要通过 key 特性设置唯一的值来标记以让Vue 区分它们，否则 Vue 为了效率只会替换相同标签内部的内容。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"_16-v-if-和-v-for-可以一起使用吗-如果不可以-为什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_16-v-if-和-v-for-可以一起使用吗-如果不可以-为什么"}},[s._v("#")]),s._v(" 16.v-if 和 v-for 可以一起使用吗？如果不可以，为什么？")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("当 Vue 处理指令时，v-for 比 v-if 具有更高的优先级，通过v-if 移动到容器元素，不会再重复遍历列表中的每个值。取而代之的是，我们只检查它一次，且不会在 v-if 为否的时候运算 v-for。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"_17-vnode是什么-虚拟-dom是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_17-vnode是什么-虚拟-dom是什么"}},[s._v("#")]),s._v(" 17.VNode是什么？虚拟 DOM是什么？")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Vue在 页面上渲染的节点，及其子节点称为“虚拟节点 (Virtual Node)”，简写为“VNode”。“虚拟 DOM”是由 Vue 组件树建立起来的整个 VNode 树的称呼。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"_18-vue2-x与vue3-x双向数据绑定的原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_18-vue2-x与vue3-x双向数据绑定的原理"}},[s._v("#")]),s._v(" 18.vue2.x与vue3.x双向数据绑定的原理?")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("数据变化更新视图，视图变化更新数据。其中，View变化更新Data，可以通过事件监听的方式来实现，所以 Vue数据双向绑定的工作主要是如何根据Data变化更新View。\nVue 是利用的 Object.defineProperty()方法进行的数据劫持，利用 set、get 来检测数据的读写。\nVue2.x采用的是Object.defineProperty()方法\nVue3.0实现数据的双向绑定原理：采用的是Proxy方法,proxy是个对象\nproxy比Object.defineProperty好在哪里？\n可以直接监听数组的变化；可以直接监听对象而非属性；Proxy返回的是一个新对象，可以只操作新的对象达到目的，而Object.defineProperty只能遍历对象属性直接修改\nObject.defineProperty的优势：A.兼容性好，支持IE9，而Proxy的存在浏览器兼容性问题，而且无法用polyfill磨平。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h4",{attrs:{id:"_19-vue-nexttick作用是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_19-vue-nexttick作用是什么"}},[s._v("#")]),s._v(" 19.Vue $nextTick作用是什么？")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。简单的说就是再DOM操作时，vue的更新是异步的，$nextTick 是用来知道什么时候 DOM 更新完成的。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"_20-route和-router的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_20-route和-router的区别"}},[s._v("#")]),s._v(" 20.$route和$router的区别?")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$route是“路由信息对象”，包括path，params，query，name等路由信息参数。而$router是“路由实例”对象包括了路由的跳转方法，钩子函数等\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"_21-vue-js的两个核心是什么-数据驱动、组件系统。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_21-vue-js的两个核心是什么-数据驱动、组件系统。"}},[s._v("#")]),s._v(" 21.vue.js的两个核心是什么(数据驱动、组件系统。)")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("数据驱动：Object.defineProperty和存储器属性: getter和setter\nViewModel，保证数据和视图的一致性。\n组件系统：应用类UI可以看作全部是由组件树构成的。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h4",{attrs:{id:"_22-hash路由和history路由的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_22-hash路由和history路由的区别"}},[s._v("#")]),s._v(" 22.hash路由和history路由的区别?")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("hash路由在地址栏URL上有#，而history路由没有会好看一点；\n我们进行回车刷新操作，hash路由会加载到地址栏对应的页面，而history路由一般就404报错了（刷新是网络请求，没有后端准备时会报错）。history运用了浏览器的历史记录栈\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h4",{attrs:{id:"_23-cookie-sessionstorage和localstorage的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_23-cookie-sessionstorage和localstorage的区别"}},[s._v("#")]),s._v(" 23.cookie，sessionStorage和localStorage的区别?")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("localStorage：存储持久数据，浏览器关闭后数据不会丢失，除非主动删除数据。\nsessionStorage:数据在当前浏览器窗口关闭后自动删除。\ncookie：设置的cookie过期时间之前一直有效，即使窗口关闭或浏览器关闭。\ncookie数据时钟在同源的http请求中携带（即使不需要），即会在浏览器和服务器之间传递。\nseeeionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h4",{attrs:{id:"_24-computed与watch的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_24-computed与watch的区别"}},[s._v("#")]),s._v(" 24.computed与watch的区别?")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("computed是计算属性，会根据依赖的数据动态显示新的计算结果，计算后的值会被缓存，当依赖的值改变的时候，才会更新新的计算后的值\nwatch 就相当于是一个 data 的数据监听回调，当依赖的 data 的数据变化就会执行回调\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h4",{attrs:{id:"_25-页面刷新后-vuex中的数据丢失"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_25-页面刷新后-vuex中的数据丢失"}},[s._v("#")]),s._v(" 25.页面刷新后，vuex中的数据丢失")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("js代码是运行在内存中的，代码运行时的所有变量、函数也都是保存在内存中的。进行刷新页面的操作，以前申请的内存被释放\n解决思路：这些数据要想存储就必须存储在外部，例如：Local Storage、Session Storage、Index DB等。这些都是浏览器提供的API，让你可以将数据存储在硬盘上，做持久化存储。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h4",{attrs:{id:"_26-图片懒加载和路由懒加载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_26-图片懒加载和路由懒加载"}},[s._v("#")]),s._v(" 26.图片懒加载和路由懒加载？")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("图片懒加载：可视区域加载，就是只加载用户可以看到的区域，这个主要由监控滚动条来实现，在没进入可视区域的时候，我们先不给这个标签赋 src 属性。\n路由懒加载：1. vue异步组件\ncomponent: resolve => require(['@/pages/ShopCar'],resolve)\n2. webpack的require.ensure()\ncomponent: r => require.ensure([], () => r(require('@/pages/GoodsDetailPage')), 'demot')\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h4",{attrs:{id:"_27-跨域问题如何解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_27-跨域问题如何解决"}},[s._v("#")]),s._v(" 27.跨域问题如何解决？")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("通过jsonp跨域\nnodejs中间件代理跨域： vue框架的跨域webpack.config.js部分配置\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h4",{attrs:{id:"_28-scss是什么-在vue-cli中的安装使用步骤是-有哪几大特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_28-scss是什么-在vue-cli中的安装使用步骤是-有哪几大特性"}},[s._v("#")]),s._v(" 28.scss是什么？在vue.cli中的安装使用步骤是？有哪几大特性？")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("css的预编译。\n使用步骤：\n第一步：先装css-loader、node-loader、sass-loader等加载器模块\n第二步：在build目录找到webpack.base.config.js，在那个extends属性中加一个拓展.scss\n第三步：在同一个文件，配置一个module属性\n第四步：然后在组件的style标签加上lang属性 ，例如：lang=”scss”\n特性:\n•可以用变量，例如（$变量名称=值）；\n•可以用混合器，例如（）\n•可以嵌套\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);