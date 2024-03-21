(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{366:function(t,n,a){"use strict";a.r(n);var s=a(4),e=Object(s.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("blockquote",[n("p",[t._v("实际开发需求：vue项目中，根据数据结构生成echarts图表组件，生成带有样式的图表以后，点击下载按钮，把图表以pdf格式的文件下载到本地\n实现思路：将vue界面的echarts组件生成图片，然后使用插件将生成的图片放入pdf中，再实现pdf文件的下载\n"),t._v("\n涉及框架以及插件：vue、echarts、html2canvas、dom-to-image、jspdf")])]),t._v(" "),n("h4",{attrs:{id:"插件介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#插件介绍"}},[t._v("#")]),t._v(" 插件介绍：")]),t._v(" "),n("p",[n("strong",[t._v("vue、echarts")]),t._v(" 不用多说，vue前端的框架，echarts用来根据数据生成的带有样式效果的图表；html2canvas与dom-to-image都是将界面上的dom生成图片。")]),t._v(" "),n("h4",{attrs:{id:"html2canvas"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#html2canvas"}},[t._v("#")]),t._v(" html2canvas")]),t._v(" "),n("p",[t._v("能够实现在用户浏览器端直接对整个或部分页面进行生成图片，主要是将选中的页面或者整个页面渲染成一个canvas图片，通过读取DOM并将不同的样式应用到这些元素上实现。可以通过获取HTML的某个元素，然后生成Canvas，从而生成图片。")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("安装\nnpm install --save html2canvas\n或 yarn add html2canvas\n引入\nimport html2canvas from 'html2canvas';\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("p",[t._v("用法：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<div class="container" id="myDom1">\n  测试\n</div>\n<style>\n.container {\n  width:100px;\n  height:100px;\n  background:red;\n  color: #ffffff;\n}\n</style>\nmethods(){\n  getImage(){\n    html2canvas(document.querySelector("#myDom1")).then(canvas => {\n        console.logo(canvas)\n        document.body.appendChild(canvas);\n        var dataUrl = canvas.toDataURL("image/png")\n    });\n  }\n}\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br")])]),n("table",[n("thead",[n("tr",[n("th",[t._v("参数名称")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")]),t._v(" "),n("th",[t._v("描述")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("allowTaint")]),t._v(" "),n("td",[t._v("boolean")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("允许跨域")])]),t._v(" "),n("tr",[n("td",[t._v("background")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("#fff")]),t._v(" "),n("td",[t._v("canvas的背景颜色，如果没有设定默认透明")])]),t._v(" "),n("tr",[n("td",[t._v("height")]),t._v(" "),n("td",[t._v("number")]),t._v(" "),n("td",[t._v("null")]),t._v(" "),n("td",[t._v("canvas高度设定")])]),t._v(" "),n("tr",[n("td",[t._v("letterRendering")]),t._v(" "),n("td",[t._v("boolean")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("在设置了字间距的时候有用")])]),t._v(" "),n("tr",[n("td",[t._v("logging")]),t._v(" "),n("td",[t._v("boolean")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("输出信息")])]),t._v(" "),n("tr",[n("td",[t._v("proxy")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("undefined")]),t._v(" "),n("td",[t._v("代理地址")])]),t._v(" "),n("tr",[n("td",[t._v("taintTest")]),t._v(" "),n("td",[t._v("boolean")]),t._v(" "),n("td",[t._v("true")]),t._v(" "),n("td",[t._v("是否在渲染前测试图片")])]),t._v(" "),n("tr",[n("td",[t._v("timeout")]),t._v(" "),n("td",[t._v("number")]),t._v(" "),n("td",[t._v("0")]),t._v(" "),n("td",[t._v("图片加载延迟，默认延迟为0，单位毫秒")])]),t._v(" "),n("tr",[n("td",[t._v("width")]),t._v(" "),n("td",[t._v("number")]),t._v(" "),n("td",[t._v("null")]),t._v(" "),n("td",[t._v("canvas的宽度")])]),t._v(" "),n("tr",[n("td",[t._v("useCORS")]),t._v(" "),n("td",[t._v("boolean")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("图片跨域问题")])])])]),t._v(" "),n("h4",{attrs:{id:"dom-to-image"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dom-to-image"}},[t._v("#")]),t._v(" dom-to-image")]),t._v(" "),n("p",[t._v("它可以将任意DOM节点转换成用JavaScript编写的矢量（SVG）或光栅（PNG或JPEG）图像。")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("安装\nnpm install dom-to-image\n或 yarn add dom-to-image\n引入\nimport domtoimage from 'dom-to-image';\n或 var domtoimage = require('dom-to-image');\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("p",[t._v("基本用法：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<template>\n  <div id=""myDom>\n    <el-table\n      :data="tableData"\n      style="width: 100%">\n      <el-table-column\n        prop="date"\n        label="日期"\n        width="180">\n      </el-table-column>\n      <el-table-column\n        prop="name"\n        label="姓名"\n        width="180">\n      </el-table-column>\n      <el-table-column\n        prop="address"\n        label="地址">\n      </el-table-column>\n    </el-table>\n    ......\n  </div>\n</template>\nmethods(){\n  getDomToImage(){\n    let dom = document.getElementById(\'myDom\');\n    domtoimage.toPng(dom).then(function (dataUrl) {\n        var img = new Image();\n        img.src = dataUrl;\n        document.body.appendChild(img);\n    })\n    .catch(function (error) {\n        console.error(\'wrong!\', error);\n    });\n  }\n}\n\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br")])]),n("p",[t._v("获取一个png的blob：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("domtoimage.toBlob(document.getElementById('myDom')).then(function (blob) {\n        console.log(blob)\n});\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("h4",{attrs:{id:"jspdf"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jspdf"}},[t._v("#")]),t._v(" jspdf")]),t._v(" "),n("p",[t._v("jsPDF 是一个使用 Javascript 语言生成 PDF 的开源库。你可以在 Firefox 插件，服务端脚本或是浏览器脚本中使用它。")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('安装：\nnpm install jspdf\n或 yarn add jspdf\n引入\nimport jsPDF from "jspdf"\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("p",[t._v("基本用法：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('let pdf = new jsPDF(\'p\', \'pt\', \'a4);\n参数1：l：横向  p：纵向\n参数2：单位（"pt"，"mm", "cm", "m", "in" or "px"）\n参数3：格式，默认为“a4”\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("p",[t._v("常用方法：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("pdf.addPage()  在PDF文档中添加新页面，参数如下，也可以不设置，默认a4\npdf.addImage()  将图像添加到PDF中\npdf.save(`保存的PDF文件.pdf`); 保存为pdf格式的文件\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("blockquote",[n("p",[t._v("回到需求：vue项目中，根据数据结构生成echarts图表组件，生成带有样式的图表以后，点击下载按钮，把图表以pdf格式的文件下载到本地(带分页)，部分代码如下（思路）")])]),t._v(" "),n("h5",{attrs:{id:"_1-使用html2canvas"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用html2canvas"}},[t._v("#")]),t._v(" 1.使用html2canvas")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("<template>\n  <div id=\"pdfDom\" ref=\"pdfDom\">\n    // 此处存放界面中显示的内容区域，生成pdf的内容区域......\n  </div>\n</template>\n\nmethods(){\n  let node = document.getElementById('pdfDom');\nhtml2canvas(document.getElementById('pdfDom'), {\n\t\t\t\tscale: 2\n\t\t\t}).then(function (canvas) {\n\t\t\t\tvar pdfWidth = canvas.width;\n\t\t\t\tvar pdfHeight = canvas.height;\n\t\t\t\tvar pageHeight = pdfWidth / 592.28 * 841.89;\n\t\t\t\tvar leftHeight = pdfHeight;\n\t\t\t\tvar position = 0;\n\t\t\t\tvar imgWidth = 595.28;\n\t\t\t\tvar imgHeight = 595.28 / pdfWidth * pdfHeight;\n\t\t\t\tvar pageData = canvas.toDataURL(\"img/jpeg\", 1.0);\n\t\t\t\tvar pdf = new jsPDF('', 'pt', 'a4');\n\t\t\t\t// 判断打印dom高度是否需要分页，如果需要进行分页处理\n\t\t\t\tif (leftHeight < pageHeight) {\n\t\t\t\t\tpdf.addImage(pageData, \"JPEG\", 0, 0, imgWidth, imgHeight)\n\t\t\t\t} else {\n\t\t\t\t\twhile (leftHeight > 0) {\n\t\t\t\t\t\tpdf.addImage(pageData, \"JPEG\", 0, position, imgWidth, imgHeight)\n\t\t\t\t\t\tleftHeight -= pageHeight\n\t\t\t\t\t\tposition -= 841.89\n\t\t\t\t\t\tif (leftHeight > 0) {\n\t\t\t\t\t\t\tpdf.addPage()\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tconst aLink = document.createElement('a')\n\t\t\t\tdocument.body.appendChild(aLink)\n\t\t\t\tconst url = URL.createObjectURL(_this.toBlob(pdf.output('datauristring')))\n\t\t\t\taLink.href = url\n\t\t\t\tlet date = new Date()\n\t\t\t\tlet year = date.getFullYear()\n\t\t\t\tlet month = (date.getMonth() + 1).toString().padStart(2, 0)\n\t\t\t\tlet day = date.getDate().toString().padStart(2, 0)\n\t\t\t\tlet hour = date.getHours().toString().padStart(2, 0)\n\t\t\t\tlet minutes = date.getMinutes().toString().padStart(2, 0)\n\t\t\t\tlet seconds = date.getSeconds().toString().padStart(2, 0)\n\t\t\t\taLink.download = '保存的PDF文件-' + '.pdf'\n\t\t\t\taLink.click()\n\t\t\t\twindow.URL.revokeObjectURL(url)\n\t\t\t})\n}\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br"),n("span",{staticClass:"line-number"},[t._v("41")]),n("br"),n("span",{staticClass:"line-number"},[t._v("42")]),n("br"),n("span",{staticClass:"line-number"},[t._v("43")]),n("br"),n("span",{staticClass:"line-number"},[t._v("44")]),n("br"),n("span",{staticClass:"line-number"},[t._v("45")]),n("br"),n("span",{staticClass:"line-number"},[t._v("46")]),n("br"),n("span",{staticClass:"line-number"},[t._v("47")]),n("br"),n("span",{staticClass:"line-number"},[t._v("48")]),n("br"),n("span",{staticClass:"line-number"},[t._v("49")]),n("br")])]),n("h5",{attrs:{id:"_2-使用dom-to-image"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用dom-to-image"}},[t._v("#")]),t._v(" 2.使用dom-to-image")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("<template>\n  <div id=\"pdfDom\" ref=\"pdfDom\">\n    // 此处存放界面中显示的内容区域，生成pdf的内容区域......\n  </div>\n</template>\n\nmethods(){\n  let node = document.getElementById('pdfDom');\n\t\t\tdomtoimage.toJpeg(node, {\n\t\t\t\twidth: node.clientWidth,\n\t\t\t\theight: node.clientHeight,\n\t\t\t\tcacheBust: true,\n\t\t\t\tstyle: {\n\t\t\t\t\tmargin: 0,\n\t\t\t\t\tbackground: '#fff',\n\t\t\t\t}\n\t\t\t}).then(function (dataUrl) {\n\t\t\t\t\tconsole.log(node.clientWidth)\n\t\t\t\t\tthat.canvasWidth = node.clientWidth;\n\t\t\t\t\tthat.canvasHeight = node.clientHeight;\n\t\t\t\t\tlet imgObj = new Image()\n\t\t\t\t\timgObj.src = dataUrl;\n\t\t\t\t\tdocument.documentElement.scrollTop = 0\n\t\t\t\t\t//待图片加载完后，将其显示在canvas上\n\t\t\t\t\timgObj.onload = function (img) {\n\t\t\t\t\t\tlet canvas = document.getElementById(\"canvasDom\");\n\t\t\t\t\t\tconsole.log(canvas.width, canvas.height, 'canvas.width')\n\t\t\t\t\t\tcanvas.getContext(\"2d\").drawImage(imgObj, 0, 0, that.canvasWidth, that.canvasHeight); //将图片绘制到canvas中\n\t\t\t\t\t\tlet contentWidth = canvas.width\n\t\t\t\t\t\tlet contentHeight = canvas.height\n\t\t\t\t\t\tlet pageHeight = contentWidth / 592.28 * 841.89\n\t\t\t\t\t\tlet leftHeight = contentHeight\n\t\t\t\t\t\tlet position = 0\n\t\t\t\t\t\tlet imgWidth = 595.28\n\t\t\t\t\t\tlet imgHeight = 592.28 / contentWidth * contentHeight\n\t\t\t\t\t\tlet pageData = canvas.toDataURL('image/jpeg', 1.0)\n\t\t\t\t\t\tlet PDF = new jsPDF('', 'pt', 'a4')\n\t\t\t\t\t\tif (leftHeight < pageHeight) {\n\t\t\t\t\t\t\tPDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight) // 大于1页高度时分页\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\twhile (leftHeight > 0) {\n\t\t\t\t\t\t\t\tPDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)\n\t\t\t\t\t\t\t\tleftHeight -= pageHeight\n\t\t\t\t\t\t\t\tposition -= 841.89\n\t\t\t\t\t\t\t\tif (leftHeight > 0) {\n\t\t\t\t\t\t\t\t\tPDF.addPage()\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tconst aLink = document.createElement('a')\n\t\t\t\t\t\tdocument.body.appendChild(aLink)\n\t\t\t\t\t\tconst url = URL.createObjectURL(that.toBlob(PDF.output('datauristring')))\n\t\t\t\t\t\taLink.href = url\n\t\t\t\t\t\tlet date = new Date()\n\t\t\t\t\t\tlet year = date.getFullYear()\n\t\t\t\t\t\tlet month = (date.getMonth() + 1).toString().padStart(2, 0)\n\t\t\t\t\t\tlet day = date.getDate().toString().padStart(2, 0)\n\t\t\t\t\t\tlet hour = date.getHours().toString().padStart(2, 0)\n\t\t\t\t\t\tlet minutes = date.getMinutes().toString().padStart(2, 0)\n\t\t\t\t\t\tlet seconds = date.getSeconds().toString().padStart(2, 0)\n\t\t\t\t\t\taLink.download = '保存的PDF文件-' + '.pdf'\n\t\t\t\t\t\taLink.click()\n\t\t\t\t\t\twindow.URL.revokeObjectURL(url)\n\t\t\t\t\t}\n\t\t\t\t\treturn dataUrl\n\t\t\t\t})\n\t\t\t\t.catch(function (error) {\n\t\t\t\t\tconsole.error('wrong!', error);\n\t\t\t\t});\n}\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br"),n("span",{staticClass:"line-number"},[t._v("41")]),n("br"),n("span",{staticClass:"line-number"},[t._v("42")]),n("br"),n("span",{staticClass:"line-number"},[t._v("43")]),n("br"),n("span",{staticClass:"line-number"},[t._v("44")]),n("br"),n("span",{staticClass:"line-number"},[t._v("45")]),n("br"),n("span",{staticClass:"line-number"},[t._v("46")]),n("br"),n("span",{staticClass:"line-number"},[t._v("47")]),n("br"),n("span",{staticClass:"line-number"},[t._v("48")]),n("br"),n("span",{staticClass:"line-number"},[t._v("49")]),n("br"),n("span",{staticClass:"line-number"},[t._v("50")]),n("br"),n("span",{staticClass:"line-number"},[t._v("51")]),n("br"),n("span",{staticClass:"line-number"},[t._v("52")]),n("br"),n("span",{staticClass:"line-number"},[t._v("53")]),n("br"),n("span",{staticClass:"line-number"},[t._v("54")]),n("br"),n("span",{staticClass:"line-number"},[t._v("55")]),n("br"),n("span",{staticClass:"line-number"},[t._v("56")]),n("br"),n("span",{staticClass:"line-number"},[t._v("57")]),n("br"),n("span",{staticClass:"line-number"},[t._v("58")]),n("br"),n("span",{staticClass:"line-number"},[t._v("59")]),n("br"),n("span",{staticClass:"line-number"},[t._v("60")]),n("br"),n("span",{staticClass:"line-number"},[t._v("61")]),n("br"),n("span",{staticClass:"line-number"},[t._v("62")]),n("br"),n("span",{staticClass:"line-number"},[t._v("63")]),n("br"),n("span",{staticClass:"line-number"},[t._v("64")]),n("br"),n("span",{staticClass:"line-number"},[t._v("65")]),n("br"),n("span",{staticClass:"line-number"},[t._v("66")]),n("br"),n("span",{staticClass:"line-number"},[t._v("67")]),n("br"),n("span",{staticClass:"line-number"},[t._v("68")]),n("br"),n("span",{staticClass:"line-number"},[t._v("69")]),n("br"),n("span",{staticClass:"line-number"},[t._v("70")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);