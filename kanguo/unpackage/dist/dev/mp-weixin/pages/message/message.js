require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([6],{51:function(t,e,n){"use strict";var s=a(n(1)),i=a(n(52));function a(t){return t&&t.__esModule?t:{default:t}}new s.default(i.default).$mount()},52:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(54),i=n.n(s),a=n(55),o=!1;var u=function(t){o||n(53)},r=n(0)(i.a,a.a,u,null,null);r.options.__file="D:\\myProject\\kanguoApp\\kanguo\\pages\\message\\message.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] message.vue: functional components are not supported with templates, they should use render functions."),e.default=r.exports},53:function(t,e){},54:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var s,i=n(3),a=(s=i)&&s.__esModule?s:{default:s};e.default={components:{footfoot:a.default},data:function(){return{}},methods:{goXitong:function(){t.navigateTo({url:"./xitong/xitong",success:function(t){},fail:function(){},complete:function(){}})},goFensi:function(){t.navigateTo({url:"./fensi/fensi"})},goDianzan:function(){t.navigateTo({url:"./dianzan/dianzan"})},goAtWode:function(){t.navigateTo({url:"./wodw/wodw"})},goPinglun:function(){t.navigateTo({url:"./pinglun/pinglun"})}}}}).call(e,n(2).default)},55:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("view",{staticClass:"top-bar"},[n("view",{staticClass:"top-text"},[t._v("消息")]),n("view",{staticClass:"msg-type"},[n("view",{staticClass:"type-item",attrs:{eventid:"zMa-0"},on:{tap:t.goFensi}},[n("image",{attrs:{src:"../../static/images/massage_button_fensi@3x.png",mode:"widthFix"}}),t._v("\n\t\t\t\t粉丝\n\t\t\t")]),n("view",{staticClass:"type-item",attrs:{eventid:"iD5-1"},on:{tap:t.goDianzan}},[n("image",{attrs:{src:"../../static/images/massage_button_dianzan@3x.png",mode:"widthFix"}}),t._v("\n\t\t\t\t点赞\n\t\t\t\t"),n("view",{staticClass:"msg-num"},[t._v("5")])]),n("view",{staticClass:"type-item",attrs:{eventid:"r2n-2"},on:{tap:t.goAtWode}},[n("image",{attrs:{src:"../../static/images/massage_button_mine@3x.png",mode:"widthFix"}}),t._v("\n\t\t\t\t@我的\n\t\t\t\t"),n("view",{staticClass:"msg-num"},[t._v("10")])]),n("view",{staticClass:"type-item",attrs:{eventid:"FQr-3"},on:{tap:t.goPinglun}},[n("image",{attrs:{src:"../../static/images/massage_button_pinglun@3x.png",mode:"widthFix"}}),t._v("\n\t\t\t\t评论\n\t\t\t")])])]),n("view",{staticClass:"msg-list"},[n("view",{staticClass:"msg-item",attrs:{eventid:"0xr-4"},on:{tap:t.goXitong}},[n("image",{attrs:{src:"../../static/images/common__button_emoj@3x.png",mode:"widthFix"}}),t._m(0)])])])};s._withStripped=!0;var i={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"msg-detail"},[e("view",{staticClass:"msg-title"},[e("text",[this._v("系统通知")]),e("text",{staticClass:"time"},[this._v("13:39")])]),e("view",{staticClass:"msg-text"},[this._v("\n\t\t\t\t\t欢迎你来到看过，马上去观看最新的精彩片段吧！\n\t\t\t\t")])])}]};e.a=i}},[51]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/message/message.js.map