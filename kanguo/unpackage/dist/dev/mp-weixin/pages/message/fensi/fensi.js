require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([14],{57:function(t,e,s){"use strict";var n=a(s(1)),u=a(s(58));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(u.default))},58:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(60),u=s.n(n),a=s(61),i=!1;var o=function(t){i||s(59)},r=s(0)(u.a,a.a,o,null,null);r.options.__file="D:\\myProject\\kanguoApp\\kanguo\\pages\\message\\fensi\\fensi.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] fensi.vue: functional components are not supported with templates, they should use render functions."),e.default=r.exports},59:function(t,e){},60:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{guanzhuOrNot:!1,guanzhuMsg:"+关注"}},methods:{guanzhu:function(){this.guanzhuOrNot||(this.guanzhuOrNot=!0,this.guanzhuMsg="已互相关注")}}}},61:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",[s("view",{staticClass:"msg-list"},t._l([1,2,3,4,5,6,7,8,9],function(e,n){return s("view",{key:n,staticClass:"msg-item"},[s("image",{attrs:{src:"../../../static/images/common__button_emoj@3x.png",mode:"widthFix"}}),s("view",{staticClass:"msg-detail"},[t._m(0,!0),s("view",{staticClass:"msg-text"},[t._v("\n\t\t\t\t\t关注了你\n\t\t\t\t\t"),s("view",{class:[t.guanzhuOrNot?"not-guanzhu":"guanzhu"],attrs:{eventid:"7jc-0-"+n},on:{tap:t.guanzhu}},[t._v(t._s(t.guanzhuMsg))])])])])}))])};n._withStripped=!0;var u={render:n,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"msg-title"},[e("text",[this._v("我是谁")]),e("text",{staticClass:"time"},[this._v("13:39")])])}]};e.a=u}},[57]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/message/fensi/fensi.js.map