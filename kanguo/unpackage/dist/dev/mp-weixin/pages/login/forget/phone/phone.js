require("../../../../common/manifest.js");
require("../../../../common/vendor.js");
global.webpackJsonp([22],{32:function(e,t,n){"use strict";var o=a(n(1)),i=a(n(33));function a(e){return e&&e.__esModule?e:{default:e}}Page((0,o.default)(i.default))},33:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(35),i=n.n(o),a=n(36),s=!1;var l=function(e){s||n(34)},r=n(0)(i.a,a.a,l,null,null);r.options.__file="D:\\myProject\\kanguoApp\\kanguo\\pages\\login\\forget\\phone\\phone.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] phone.vue: functional components are not supported with templates, they should use render functions."),t.default=r.exports},34:function(e,t){},35:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{positionTop:0,showClearIcon:!1,inputClearValue:"",phone:""}},methods:{goCaptcha:function(){e.navigateTo({url:"../captcha/captcha?phone="+this.phone})},initPosition:function(){this.positionTop=e.getSystemInfoSync().windowHeight-140},bindClearInput:function(e){this.inputClearValue=e.target.value,e.target.value.length>0?this.showClearIcon=!0:this.showClearIcon=!1},clearIcon:function(){this.inputClearValue="",this.showClearIcon=!1},goWechatLogin:function(){e.navigateTo({url:"../../login-wechat/login-wechat"})}},onLoad:function(){this.initPosition()}}}).call(t,n(2).default)},36:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"container"},[n("view",{staticClass:"login-page-top"},[n("view",{staticClass:"login-input phone-num"},[n("image",{attrs:{src:"../../../../static/images/login_signPhone@3x.png",mode:"aspectFit"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"number",focus:"true",value:"",placeholder:"请输入手机号码",value:e.inputClearValue,eventid:"gYy-0"},domProps:{value:e.phone},on:{input:[function(t){t.target.composing||(e.phone=t.target.value)},e.bindClearInput]}}),e.showClearIcon?n("view",{staticClass:"uni-icon uni-icon-clear",attrs:{eventid:"8r3-1"},on:{click:e.clearIcon}}):e._e()]),n("view",{staticClass:"login-btn",attrs:{eventid:"jpo-2"},on:{tap:e.goCaptcha}},[e._v("获取验证码")])]),n("view",{staticClass:"other-login-way",style:{top:e.positionTop+"px"}},[n("text",[e._v("其他方式登录")]),n("view",{staticClass:"other-way-list"},[n("image",{staticClass:"other-login",attrs:{src:"../../../../static/images/login_button_WeixinEnter@3x.png",eventid:"W55-3"},on:{tap:e.goWechatLogin}})])])])};o._withStripped=!0;var i={render:o,staticRenderFns:[]};t.a=i}},[32]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/login/forget/phone/phone.js.map