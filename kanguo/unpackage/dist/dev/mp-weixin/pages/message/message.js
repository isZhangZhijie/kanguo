require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([17],{67:function(t,e,s){"use strict";var n=a(s(1)),i=a(s(68));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(i.default))},68:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(70),i=s.n(n),a=s(71),o=!1;var u=function(t){o||s(69)},c=s(0)(i.a,a.a,u,null,null);c.options.__file="D:\\myProject\\kanguoApp\\kanguo\\pages\\message\\message.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] message.vue: functional components are not supported with templates, they should use render functions."),e.default=c.exports},69:function(t,e){},70:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n,i=s(3),a=(n=i)&&n.__esModule?n:{default:n};e.default={components:{footfoot:a.default},data:function(){return{}},methods:{goXitong:function(){t.navigateTo({url:"./xitong/xitong",success:function(t){},fail:function(){},complete:function(){}})},goFensi:function(){t.navigateTo({url:"./fensi/fensi"})},goDianzan:function(){t.navigateTo({url:"./dianzan/dianzan"})},goAtWode:function(){t.navigateTo({url:"./wode/wode"})},goPinglun:function(){t.navigateTo({url:"./pinglun/pinglun"})}}}}).call(e,s(2).default)},71:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",[s("view",{staticClass:"top-bar"},[s("view",{staticClass:"top-text"},[t._v("消息")]),s("view",{staticClass:"msg-type"},[s("view",{staticClass:"type-item",attrs:{eventid:"ggJ-0"},on:{tap:t.goFensi}},[s("image",{attrs:{src:"../../static/images/massage_button_fensi@3x.png",mode:"widthFix"}}),t._v("\n\t\t\t\t粉丝\n\t\t\t")]),s("view",{staticClass:"type-item",attrs:{eventid:"xd9-1"},on:{tap:t.goDianzan}},[s("image",{attrs:{src:"../../static/images/massage_button_dianzan@3x.png",mode:"widthFix"}}),t._v("\n\t\t\t\t点赞\n\t\t\t\t"),s("view",{staticClass:"msg-num"},[t._v("5")])]),s("view",{staticClass:"type-item",attrs:{eventid:"1ZP-2"},on:{tap:t.goAtWode}},[s("image",{attrs:{src:"../../static/images/massage_button_mine@3x.png",mode:"widthFix"}}),t._v("\n\t\t\t\t@我的\n\t\t\t\t"),s("view",{staticClass:"msg-num"},[t._v("10")])]),s("view",{staticClass:"type-item",attrs:{eventid:"H1A-3"},on:{tap:t.goPinglun}},[s("image",{attrs:{src:"../../static/images/massage_button_pinglun@3x.png",mode:"widthFix"}}),t._v("\n\t\t\t\t评论\n\t\t\t")])])]),s("view",{staticClass:"msg-list"},[s("view",{staticClass:"msg-item",attrs:{eventid:"OqB-4"},on:{tap:t.goXitong}},[s("image",{attrs:{src:"../../static/images/common__button_emoj@3x.png",mode:"widthFix"}}),t._m(0)])])])};n._withStripped=!0;var i={render:n,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"msg-detail"},[e("view",{staticClass:"msg-title"},[e("text",[this._v("系统通知")]),e("text",{staticClass:"time"},[this._v("13:39")])]),e("view",{staticClass:"msg-text"},[this._v("\n\t\t\t\t\t欢迎你来到看过，马上去观看最新的精彩片段吧！\n\t\t\t\t")])])}]};e.a=i}},[67]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/message/message.js.map