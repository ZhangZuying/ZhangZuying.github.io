(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{360:function(s,n,a){"use strict";a.r(n);var e=a(4),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"前端xss攻击场景与vue-js处理xss的方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前端xss攻击场景与vue-js处理xss的方法"}},[s._v("#")]),s._v(" 前端XSS攻击场景与Vue.js处理XSS的方法")]),s._v(" "),n("p",[s._v("在前端开发中，跨站脚本攻击（XSS）是一种常见的安全威胁。本文将介绍前端跨站脚本攻击（XSS）的场景以及在Vue.js框架中如何处理XSS的方法。通过了解这些内容，我们可以更好地保护前端应用程序的安全性，防止恶意攻击。\n")]),s._v(" "),n("h2",{attrs:{id:"一、前端xss攻击场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、前端xss攻击场景"}},[s._v("#")]),s._v(" 一、前端XSS攻击场景")]),s._v(" "),n("ol",[n("li",[s._v("输入框注入：用户在输入框中输入恶意内容，这些内容会被提交到服务器端并被其他用户查看，攻击者可以通过注入恶意脚本获取其他用户的敏感信息。")]),s._v(" "),n("li",[s._v("响应注入：攻击者通过注入恶意脚本到服务器的响应中，当其他用户访问该页面时，恶意脚本会被执行，从而盗取用户数据或篡改页面内容。")]),s._v(" "),n("li",[s._v("URL参数注入：攻击者通过修改URL参数注入恶意脚本，当其他用户访问该页面时，恶意脚本会被执行。")]),s._v(" "),n("li",[s._v("跨站请求伪造（CSRF）：攻击者通过伪造其他用户的请求，在用户不知情的情况下执行恶意操作，如修改密码、转账等。")])]),s._v(" "),n("h2",{attrs:{id:"二、vue-js处理xss的方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、vue-js处理xss的方法"}},[s._v("#")]),s._v(" 二、Vue.js处理XSS的方法")]),s._v(" "),n("ol",[n("li",[s._v("数据绑定：在Vue.js中，我们通常使用双大括号语法（{{}}）来绑定数据。为了防止XSS攻击，我们需要对用户输入的数据进行过滤和转义。可以使用Vue XSS库提供的xss方法进行转义，确保用户输入的数据不会被恶意代码利用。")]),s._v(" "),n("li",[s._v("输入验证：在接收用户输入的数据之前，需要进行严格的验证。确保输入的数据符合预期的格式和规则，以减少XSS攻击的可能性。")]),s._v(" "),n("li",[s._v("使用CSP（内容安全策略）：CSP是一种安全机制，可以限制网页中可以执行的脚本和加载的资源。通过配置CSP策略，我们可以限制网页中可以执行的脚本和加载的资源，从而防止XSS攻击。")]),s._v(" "),n("li",[s._v("使用HTTPOnly Cookie：HTTPOnly Cookie是一种安全机制，可以防止通过JavaScript访问Cookie数据。将Cookie设置为HTTPOnly，可以防止XSS攻击者通过JavaScript访问Cookie数据。")]),s._v(" "),n("li",[s._v("使用HTTPS：HTTPS是一种加密协议，可以保护数据在传输过程中的安全性。使用HTTPS可以防止中间人攻击和数据窃取，从而减少XSS攻击的可能性。")])]),s._v(" "),n("h2",{attrs:{id:"三、vue-xss插件过滤xss语句"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、vue-xss插件过滤xss语句"}},[s._v("#")]),s._v(" 三、vue-xss插件过滤xss语句")]),s._v(" "),n("p",[s._v("一个开箱即用的Vue.js插件，可通过简单的方式防止XSS攻击")]),s._v(" "),n("ol",[n("li",[s._v("安装")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("npm i vue-xss  或  yarn add vue-xss\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[s._v("使用")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// main.js\nimport VueXss from 'vue-xss'\nVue.use(VueXss)\n\n\x3c!-- *.vue --\x3e\n<div v-html=\"$xss(content)\"></div>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("ol",{attrs:{start:"3"}},[n("li",[s._v("自定义配置项\n支持 js-xss 的自定义规则，可通过 options 对象形式传入实例， 具体请点击 "),n("a",{attrs:{href:"https://github.com/leizongmin/js-xss",target:"_blank",rel:"noopener noreferrer"}},[s._v("js-xss"),n("OutboundLink")],1),s._v(" 查看\n示例：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// mani.js\nvar options = {\n  // 默认白名单参考 xss.whiteList\n  whiteList: {\n    a: ['href', 'style'],\n    img: ['src', 'alt'],\n    ...\n  },\n  stripIgnoreTag: true, // 去掉不在白名单上的标签   true：去掉不在白名单上的标签\n  stripIgnoreTagBody: ['script', 'style'] // 去掉不在白名单上的标签及标签体   ['tag1', 'tag2']：仅去掉指定的不在白名单上的标签\n  onTagAttr: function () {\n    // todo\n  },\n  ...\n}\n\nimport VueXss from 'vue-xss'\nVue.use(VueXss, options)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('\x3c!-- *.vue --\x3e\n\n<template>\n  <div v-html="$xss(content)"></div>\n  \x3c!-- 过滤后输出：<iframe></iframe> --\x3e\n<template>\n\n<script>\n\nexport default {\n  data () {\n    return{\n      content: \'<iframe onload=alert("XSS-TEST")></iframe>\'\n    }\n  },\n  ...\n}\n\n<\/script>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[s._v("在vue方法中使用：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("methods: {\n\tasync getInfo(){\n\t\tlet _req = {\n            name: this.$xss(this.name),\n            age: this.$xss(this.age),\n            ...\n        };\n        // 模拟向后台请求接口\n        let res = await getInfo(_req ){\n        }\n\t}\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);