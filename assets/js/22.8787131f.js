(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{361:function(s,a,n){"use strict";n.r(a);var e=n(4),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h4",{attrs:{id:"需求-根据select-选择器选择城市地名切换地图位置变化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需求-根据select-选择器选择城市地名切换地图位置变化"}},[s._v("#")]),s._v(" 需求：根据select 选择器选择城市地名切换地图位置变化")]),s._v(" "),a("h4",{attrs:{id:"预期效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预期效果"}},[s._v("#")]),s._v(" 预期效果：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img2020.cnblogs.com/blog/1750633/202111/1750633-20211125104035266-1918067435.gif",alt:"image"}})]),s._v(" "),a("h3",{attrs:{id:"高德地图api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高德地图api"}},[s._v("#")]),s._v(" 高德地图API：")]),s._v(" "),a("h4",{attrs:{id:"思路-根据高德地图api-https-lbs-amap-com-api-javascript-api-summary-官方实例进行修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路-根据高德地图api-https-lbs-amap-com-api-javascript-api-summary-官方实例进行修改"}},[s._v("#")]),s._v(" 思路：根据高德地图api（"),a("a",{attrs:{href:"https://lbs.amap.com/api/javascript-api/summary/",title:"https://lbs.amap.com/api/javascript-api/summary/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://lbs.amap.com/api/javascript-api/summary/"),a("OutboundLink")],1),s._v("）官方实例进行修改")]),s._v(" "),a("h5",{attrs:{id:"需要获取城市地点的adcode值和城市地点的名称通过amap-geocoder-进行获取相关信息-将adcode值和城市地点的名称通过-setcity-和"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需要获取城市地点的adcode值和城市地点的名称通过amap-geocoder-进行获取相关信息-将adcode值和城市地点的名称通过-setcity-和"}},[s._v("#")]),s._v(" 需要获取城市地点的adcode值和城市地点的名称通过AMap.Geocoder()进行获取相关信息，将adcode值和城市地点的名称通过.setCity 和")]),s._v(" "),a("h5",{attrs:{id:"修改代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改代码"}},[s._v("#")]),s._v(" 修改代码：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<select name="" id="courtNameSelect" class="selectClass" style="background-position-x: 150px!important;">\n              <option value="哈尔滨冰雪大世界">哈尔滨冰雪大世界</option>\n              <option value="大连星海广场">大连星海广场</option>\n              <option value="沈阳中街">沈阳中街</option>\n            </select>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$(function () {\n  //地图加载\n  var map = new AMap.Map(\"container\", {\n    resizeEnable: true,\n    showMarker: true,\n    enableHighAccuracy: true,\n    showButton: true,\n    panToLocation: true,\n  });\n  var placeSearch = new AMap.PlaceSearch({\n    map: map\n  });  //构造地点查询类\n  $('#courtNameSelect').change(function () {\n    var myValue;\n    myValue = $(this).val()\n    AMap.plugin('AMap.Geocoder', function () {\n      var geocoder = new AMap.Geocoder();\n      geocoder.getLocation(myValue, function (status, result) {\n        if (result.info === 'OK') {\n          const adcodeNum = result.geocodes[0].adcode\n          select(adcodeNum, myValue);\n        }\n      });\n    });\n  })\n  function select (adcodeNum, myValue) {\n    placeSearch.setCity(adcodeNum);\n    placeSearch.search(myValue);  //关键字查询查询\n  }\n  map.plugin([\"AMap.ToolBar\"], function () {\n    map.addControl(new AMap.ToolBar());\n  });\n  if (location.href.indexOf('&guide=1') !== -1) {\n    map.setStatus({ scrollWheel: false })\n  }\n});\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br")])]),a("h3",{attrs:{id:"百度地图api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#百度地图api"}},[s._v("#")]),s._v(" 百度地图API：")]),s._v(" "),a("h4",{attrs:{id:"思路-根据高德地图api-https-lbsyun-baidu-com-jsdemo-htm-webgl0-1-官方实例进行修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路-根据高德地图api-https-lbsyun-baidu-com-jsdemo-htm-webgl0-1-官方实例进行修改"}},[s._v("#")]),s._v(" 思路：根据高德地图api（"),a("a",{attrs:{href:"https://lbsyun.baidu.com/jsdemo.htm#webgl0_1",title:"https://lbsyun.baidu.com/jsdemo.htm#webgl0_1",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://lbsyun.baidu.com/jsdemo.htm#webgl0_1"),a("OutboundLink")],1),s._v("）官方实例进行修改")]),s._v(" "),a("h5",{attrs:{id:"代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[s._v("#")]),s._v(" 代码")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<select name="" id="courtNameSelect" class="selectClass" style="background-position-x: 150px!important;">\n              <option value="哈尔滨冰雪大世界">哈尔滨冰雪大世界</option>\n              <option value="大连星海广场">大连星海广场</option>\n              <option value="沈阳中街">沈阳中街</option>\n            </select>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$(function () {\n  console.log($("#courtNameSelect").val())\n  // 百度地图API功能\n  function G (id) {\n    return document.getElementById(id);\n  }\n  var map = new BMap.Map("l-map");\n  const centerPlace = "北京"\n  map.centerAndZoom(centerPlace, 12);\n  const mrPlace = $("#courtNameSelect").val()\n  function myFun () {\n    var pp = mrPlace;\n    map.centerAndZoom(pp, 18);\n    map.addOverlay(new BMap.Marker(pp));\n  }\n  var local = new BMap.LocalSearch(map, {\n    onSearchComplete: myFun\n  });\n  local.search(mrPlace);\n  $(\'#courtNameSelect\').change(function () {\n    var myValue;\n    myValue = $(this).val()\n    map.clearOverlays();    //清除地图上所有覆盖物\n    function myFun () {\n      var pp = myValue;\n      console.log(pp)\n      map.centerAndZoom(pp, 18);\n      map.addOverlay(new BMap.Marker(pp));\n    }\n    var local = new BMap.LocalSearch(map, {\n      onSearchComplete: myFun\n    });\n    local.search(myValue);\n  })\n});\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br")])]),a("h3",{attrs:{id:"高德地图结合ztree-js多级联动效果实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高德地图结合ztree-js多级联动效果实现"}},[s._v("#")]),s._v(" 高德地图结合zTree.js多级联动效果实现")]),s._v(" "),a("h5",{attrs:{id:"引入ztree-js相关js文件以及css文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入ztree-js相关js文件以及css文件"}},[s._v("#")]),s._v(" 引入zTree.js相关js文件以及css文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('  <link rel="stylesheet" href="css/index/zTreeStyle.css" type="text/css">\n  <link rel="stylesheet" href="css/index/jquery.select.zTree.v1.5.css" type="text/css">\n  <script type="text/javascript" src="js/common/jquery.ztree.core.js"><\/script>\n  <script type="text/javascript" src="js/common/jquery.ztree.exhide.js"><\/script>\n  <script type="text/javascript" src="js/common/jquery.select.zTree.v1.5.min.js"><\/script>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<select id="select2" title="选择"> </select>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$(function () {\nvar zNodes = [\n        {id: 1, pId: 0, name: "父1 - 展开", open: true},\n        {id: 11, pId: 1, name: "父11 - 折叠"},\n        {id: 111, pId: 11, name: "叶子节点节点节点111"},\n        {id: 113, pId: 11, name: "叶子节点节点节点113"},\n        {id: 1131, pId: 113, name: "叶子节点节点节点1131"},\n        {id: 1132, pId: 113, name: "叶子节点节点节点1132"},\n        {id: 1133, pId: 113, name: "叶子节点节点节点1133"},\n        {id: 114, pId: 11, name: "叶子节点节点节点114"},\n        {id: 12, pId: 1, name: "父12 - 折叠"},\n        {id: 121, pId: 12, name: "叶子节点节点节点121"},\n        ...\n    ];\n  //地图加载\n  var map = new AMap.Map("container", {\n    resizeEnable: true,\n    showMarker: true,\n    enableHighAccuracy: true,\n    showButton: true,\n    panToLocation: true,\n  });\n  var placeSearch = new AMap.PlaceSearch({\n    map: map\n  });  //构造地点查询类\n  $(\'.auditdh\').click(function () {\n    var mrPlace = $("#select2").find(\'option:selected\').text()\n    AMap.plugin(\'AMap.Geocoder\', function () {\n      var geocoder = new AMap.Geocoder();\n      geocoder.getLocation(mrPlace, function (status, result) {\n        if (result.info === \'OK\') {\n          const adcodeNum = result.geocodes[0].adcode\n          select(adcodeNum, mrPlace);\n        }\n      });\n    });\n  })\n  $("#select2").selectZTree({ data: zNodes })\n    .on("change", function (e, data) {\n      const address = data.address\n      $(\'#placeAddress\').html(address)\n      var myValue;\n      myValue = data.name\n      AMap.plugin(\'AMap.Geocoder\', function () {\n        var geocoder = new AMap.Geocoder();\n        geocoder.getLocation(myValue, function (status, result) {\n          if (result.info === \'OK\') {\n            const adcodeNum = result.geocodes[0].adcode\n            select(adcodeNum, myValue);\n          }\n        });\n      });\n    });\n  function select (adcodeNum, myValue) {\n    placeSearch.setCity(adcodeNum);\n    placeSearch.search(myValue);  //关键字查询查询\n  }\n  map.plugin(["AMap.ToolBar"], function () {\n    map.addControl(new AMap.ToolBar());\n  });\n  if (location.href.indexOf(\'&guide=1\') !== -1) {\n    map.setStatus({ scrollWheel: false })\n  }\n});\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);