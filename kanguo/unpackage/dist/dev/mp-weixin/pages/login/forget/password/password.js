require("../../../../common/manifest.js");
require("../../../../common/vendor.js");
global.webpackJsonp([23],{42:function(t,e,o){"use strict";var s=i(o(1)),n=i(o(43));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(n.default))},43:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o(45),n=o.n(s),i=o(46),a=!1;var r=function(t){a||o(44)},c=o(0)(n.a,i.a,r,null,null);c.options.__file="D:\\myProject\\kanguoApp\\kanguo\\pages\\login\\forget\\password\\password.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] password.vue: functional components are not supported with templates, they should use render functions."),e.default=c.exports},44:function(t,e){},45:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{positionTop:0,phone:"",showPassword:!0}},methods:{initPosition:function(){this.positionTop=t.getSystemInfoSync().windowHeight-140},goWechatLogin:function(){t.navigateTo({url:"../../login-wechat/login-wechat"})},changePassword:function(){this.showPassword=!this.showPassword},goIndex:function(){console.log(123),t.switchTab({url:"../../../index/index"})}},onLoad:function(){this.initPosition()}}}).call(e,o(2).default)},46:function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",{staticClass:"container"},[o("view",{staticClass:"login-page-top"},[o("view",{staticClass:"login-input phone-password"},[o("image",{attrs:{src:"../../../../static/images/login_signLock@3x.png",mode:"aspectFit"}}),o("input",{attrs:{focus:"true",value:"",placeholder:"请输入长度大于6位数的密码",password:t.showPassword}}),o("view",{staticClass:"uni-icon uni-icon-eye",class:[t.showPassword?"":"uni-active"],attrs:{eventid:"Yyq-0"},on:{click:t.changePassword}})]),o("view",{staticClass:"login-btn",attrs:{eventid:"UN6-1"},on:{tap:t.goIndex}},[t._v("完成并登陆")])]),o("view",{staticClass:"other-login-way",style:{top:t.positionTop+"px"}},[o("text",[t._v("其他方式登录")]),o("view",{staticClass:"other-way-list"},[o("image",{staticClass:"other-login",attrs:{src:"../../../../static/images/login_button_WeixinEnter@3x.png",eventid:"lzj-2"},on:{tap:t.goWechatLogin}})])])])};s._withStripped=!0;var n={render:s,staticRenderFns:[]};e.a=n}},[42]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/login/forget/password/password.js.map