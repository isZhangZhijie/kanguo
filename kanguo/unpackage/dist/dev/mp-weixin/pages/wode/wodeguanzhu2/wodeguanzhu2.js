require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([19],{118:function(t,e,s){"use strict";var o=a(s(1)),n=a(s(119));function a(t){return t&&t.__esModule?t:{default:t}}new o.default(n.default).$mount()},119:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(121),n=s.n(o),a=s(122),i=!1;var u=function(t){i||s(120)},r=s(0)(n.a,a.a,u,null,null);r.options.__file="D:\\myProject\\kanguoApp\\kanguo\\pages\\wode\\wodeguanzhu2\\wodeguanzhu2.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] wodeguanzhu2.vue: functional components are not supported with templates, they should use render functions."),e.default=r.exports},120:function(t,e){},121:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:{statusBarHeight:""},created:function(){var e=this;setTimeout(function(){t.getSystemInfo({success:function(t){e.statusBarHeight=t.statusBarHeight,console.log(e.statusBarHeight)}})},1)},methods:{goWode:function(){console.log(123),t.switchTab({url:"../wode"})}}}}).call(e,s(2).default)},122:function(t,e,s){"use strict";var o=function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"page"},[e("view",{staticClass:"header"},[e("view",{staticClass:"statusBar",style:{height:this.statusBarHeight+"px"}}),e("view",{staticClass:"info"},[e("text",{staticStyle:{"font-size":"16px","margin-right":"50upx"}},[this._v("用户")]),e("text",{staticClass:"active",staticStyle:{"font-size":"16px"}},[this._v("影剧")]),e("image",{staticClass:"go-wode",attrs:{src:"../../../static/images/common_return@3x.png",mode:"widthFix",eventid:"0I8-0"},on:{tap:this.goWode}})])])])};o._withStripped=!0;var n={render:o,staticRenderFns:[]};e.a=n}},[118]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/wode/wodeguanzhu2/wodeguanzhu2.js.map