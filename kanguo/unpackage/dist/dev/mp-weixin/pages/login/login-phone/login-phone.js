require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([13],{27:function(t,e,n){"use strict";var o=s(n(1)),i=s(n(28));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(i.default))},28:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(30),i=n.n(o),s=n(31),a=!1;var r=function(t){a||n(29)},l=n(0)(i.a,s.a,r,null,null);l.options.__file="D:\\myProject\\kanguoApp\\kanguo\\pages\\login\\login-phone\\login-phone.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] login-phone.vue: functional components are not supported with templates, they should use render functions."),e.default=l.exports},29:function(t,e){},30:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{positionTop:0,showClearIcon:!1,inputClearValue:"",showPassword:!0}},methods:{goWechatLogin:function(){t.navigateTo({url:"../login-wechat/login-wechat"})},initPosition:function(){this.positionTop=t.getSystemInfoSync().windowHeight-70},bindClearInput:function(t){this.inputClearValue=t.target.value,t.target.value.length>0?this.showClearIcon=!0:this.showClearIcon=!1},clearIcon:function(){this.inputClearValue="",this.showClearIcon=!1},changePassword:function(){this.showPassword=!this.showPassword}},onLoad:function(){this.initPosition()}}}).call(e,n(2).default)},31:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"container"},[n("view",{staticClass:"login-page-top"},[n("view",{staticClass:"top-img"},[n("navigator",{staticClass:"go-back",attrs:{"hover-class":"none","open-type":"navigateBack",delta:"1"}},[n("image",{attrs:{src:"../../../static/images/common_return@3x.png",mode:"widthFix",alt:""}})]),n("image",{attrs:{src:"../../../static/images/login_PhoneBG@3x.png",mode:"widthFix"}})],1),n("view",{staticClass:"login-input phone-num"},[n("image",{attrs:{src:"../../../static/images/login_signPhone@3x.png",mode:"aspectFit"}}),n("input",{attrs:{type:"number",focus:"true",value:"",placeholder:"请输入手机号码",value:t.inputClearValue,eventid:"WIw-0"},on:{input:t.bindClearInput}}),t.showClearIcon?n("view",{staticClass:"uni-icon uni-icon-clear",attrs:{eventid:"pSn-1"},on:{click:t.clearIcon}}):t._e()]),n("view",{staticClass:"login-input phone-password"},[n("image",{attrs:{src:"../../../static/images/login_signLock@3x.png",mode:"aspectFit"}}),n("input",{attrs:{value:"",placeholder:"请输入登录密码",password:t.showPassword}}),n("view",{staticClass:"uni-icon uni-icon-eye",class:[t.showPassword?"":"uni-active"],attrs:{eventid:"Vn8-2"},on:{click:t.changePassword}})]),n("view",{staticClass:"login-btn"},[t._v("登 录")]),n("view",{staticClass:"action-row"},[n("navigator",{attrs:{url:"","hover-class":"none"}},[t._v("\n                    快速注册\n                ")]),n("navigator",{attrs:{url:"../forget/phone/phone","hover-class":"none"}},[t._v("\n                    忘记密码\n                ")])],1)]),n("view",{staticClass:"other-login-way",style:{top:t.positionTop+"px"}},[n("text",[t._v("其他方式登录")]),n("view",{staticClass:"other-way-list"},[n("image",{staticClass:"other-login",attrs:{src:"../../../static/images/login_button_WeixinEnter@3x.png",eventid:"GAr-3"},on:{tap:t.goWechatLogin}})])])])};o._withStripped=!0;var i={render:o,staticRenderFns:[]};e.a=i}},[27]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/login/login-phone/login-phone.js.map