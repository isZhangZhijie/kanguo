require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([2],{92:function(t,s,e){"use strict";var i=a(e(1)),n=a(e(93));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(n.default))},93:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(95),n=e.n(i),a=e(96),o=!1;var u=function(t){o||e(94)},c=e(0)(n.a,a.a,u,null,null);c.options.__file="D:\\myProject\\kanguoApp\\kanguo\\pages\\wode\\wodeguanzhu\\wodeguanzhu.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] wodeguanzhu.vue: functional components are not supported with templates, they should use render functions."),s.default=c.exports},94:function(t,s){},95:function(t,s,e){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:{statusBarHeight:"",showYonghu:!0,yonghuList:[1,2,3,4,5,6,7,8,9],yingjuList:[1,2,3,4,5,6,7,8,9]},created:function(){var s=this;setTimeout(function(){t.getSystemInfo({success:function(t){s.statusBarHeight=t.statusBarHeight,console.log(s.statusBarHeight)}})},1)},methods:{goWode:function(){console.log(123),t.switchTab({url:"../wode"})},goYonghu:function(){this.showYonghu||(this.showYonghu=!this.showYonghu)},goYingju:function(){this.showYonghu&&(this.showYonghu=!this.showYonghu)}}}}).call(s,e(2).default)},96:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"page"},[e("view",{staticClass:"header"},[e("view",{staticClass:"statusBar",style:{height:t.statusBarHeight+"px"}}),e("view",{staticClass:"info"},[e("text",{class:[t.showYonghu?"active":""],staticStyle:{"font-size":"16px","margin-right":"50upx"},attrs:{eventid:"OTC-0"},on:{tap:t.goYonghu}},[t._v("用户")]),e("text",{class:[t.showYonghu?"":"active"],staticStyle:{"font-size":"16px"},attrs:{eventid:"GLA-1"},on:{tap:t.goYingju}},[t._v("影剧")]),e("image",{staticClass:"go-wode",attrs:{src:"../../../static/images/common_return@3x.png",mode:"widthFix",eventid:"7ZL-2"},on:{tap:t.goWode}})])]),e("view",{directives:[{name:"show",rawName:"v-show",value:t.showYonghu,expression:"showYonghu"}]},[t.yonghuList.length>0?e("view",{staticClass:"yonghu-list"},[e("view",{staticClass:"yonghu-num"},[t._v("您关注了"+t._s(t.yonghuList.length)+"位用户")]),e("view",{staticClass:"msg-list"},t._l(t.yonghuList,function(s,i){return e("view",{key:i,staticClass:"msg-item yonghu-item"},[e("image",{attrs:{src:"../../../static/images/common__button_emoj@3x.png",mode:"widthFix"}}),t._m(0,!0),t._m(1,!0)])}))]):e("view",{staticClass:"no-yonghu"},[e("view",{staticClass:"no-yonghu-text1"},[t._v("你还没有关注任何用户")]),e("view",{staticClass:"no-yonghu-text2"},[t._v("错过的精彩那么大")])])]),e("view",{directives:[{name:"show",rawName:"v-show",value:!t.showYonghu,expression:"!showYonghu"}]},[t.yingjuList.length>0?e("view",{staticClass:"yonghu-list"},[e("view",{staticClass:"msg-list"},t._l(t.yonghuList,function(s,i){return e("view",{key:i,staticClass:"msg-item yingju-item"},[e("image",{attrs:{src:"../../../static/images/juzhao.png",mode:"widthFix"}}),t._m(2,!0),t._m(3,!0)])}))]):e("view",{staticClass:"no-yonghu"},[e("view",{staticClass:"no-yonghu-text1"},[t._v("你还没有关注任何影剧")]),e("view",{staticClass:"no-yonghu-text2"},[t._v("错过的精彩那么大")])])])])};i._withStripped=!0;var n={render:i,staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"msg-detail"},[s("view",{staticClass:"msg-title"},[this._v("我是谁")]),s("view",{staticClass:"msg-text"},[this._v("幽默影剧发布人")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"guanzhu-btn"},[s("image",{attrs:{src:"../../../static/images/common_del@3x.png",mode:"widthFix"}}),this._v("\r\n\t\t\t\t\t\t取关\r\n\t\t\t\t\t")])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"msg-detail"},[s("view",{staticClass:"msg-title"},[this._v("蚀日风暴")]),s("view",{staticClass:"msg-text"},[this._v("1234精彩影评")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"guanzhu-btn"},[s("image",{attrs:{src:"../../../static/images/common_del@3x.png",mode:"widthFix"}}),this._v("\r\n\t\t\t\t\t\t关注\r\n\t\t\t\t\t")])}]};s.a=n}},[92]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/wode/wodeguanzhu/wodeguanzhu.js.map