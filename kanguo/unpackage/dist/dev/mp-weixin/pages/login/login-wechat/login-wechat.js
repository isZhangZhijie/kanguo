require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([9],[,,,,,,,,,function(t,e,n){"use strict";var o=s(n(1)),i=s(n(10));function s(t){return t&&t.__esModule?t:{default:t}}new o.default(i.default).$mount()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(12),i=n.n(o),s=n(13),a=!1;var l=function(t){a||n(11)},u=n(0)(i.a,s.a,l,null,null);u.options.__file="D:\\myProject\\kanguoApp\\kanguo\\pages\\login\\login-wechat\\login-wechat.vue",u.esModule&&Object.keys(u.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] login-wechat.vue: functional components are not supported with templates, they should use render functions."),e.default=u.exports},function(t,e){},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{positionTop:0}},methods:{goPhoneLogin:function(){t.navigateTo({url:"../login-phone/login-phone"})},initPosition:function(){this.positionTop=t.getSystemInfoSync().windowHeight-70}},onLoad:function(){this.initPosition()}}}).call(e,n(2).default)},function(t,e,n){"use strict";var o=function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"container"},[this._m(0),e("view",{staticClass:"other-login-way",style:{top:this.positionTop+"px"}},[e("text",[this._v("其他方式登录")]),e("view",{staticClass:"other-way-list"},[e("image",{staticClass:"other-login",attrs:{src:"../../../static/images/login_button_PhoneEnter@3x.png",eventid:"X1e-0"},on:{tap:this.goPhoneLogin}})])])])};o._withStripped=!0;var i={render:o,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"login-page-top"},[e("image",{staticClass:"logo",attrs:{src:"../../../static/images/login_touxiang_defaul@3x.png"}}),e("view",{staticClass:"login-btn"},[this._v("微信登录")])])}]};e.a=i}],[9]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/login/login-wechat/login-wechat.js.map