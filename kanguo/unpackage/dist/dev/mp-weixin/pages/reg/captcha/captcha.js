require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([13],{52:function(t,e,n){"use strict";var o=i(n(1)),a=i(n(53));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(a.default))},53:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(55),a=n.n(o),i=n(56),s=!1;var c=function(t){s||n(54)},u=n(0)(a.a,i.a,c,null,null);u.options.__file="D:\\myProject\\kanguoApp\\kanguo\\pages\\reg\\captcha\\captcha.vue",u.esModule&&Object.keys(u.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] captcha.vue: functional components are not supported with templates, they should use render functions."),e.default=u.exports},54:function(t,e){},55:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{phone:"",positionTop:0,focusIndex:0,captcha:""}},methods:{initPosition:function(){this.positionTop=t.getSystemInfoSync().windowHeight-140},goPassword:function(){var e=this;t.request({url:"http://www.aikm.cn/api/auth/code",method:"POST",data:{phone:this.phone,code:parseInt(this.captcha)},success:function(n){1==n.data.code?t.navigateTo({url:"../password/password?phone="+e.phone}):t.showToast({title:n.data.msg,duration:2e3,icon:"none"})},fail:function(){},complete:function(){}})},goWechatLogin:function(){t.navigateTo({url:"../../login/login-wechat/login-wechat"})}},onLoad:function(t){this.phone=t.phone,this.initPosition()}}}).call(e,n(2).default)},56:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"container"},[n("view",{staticClass:"login-page-top"},[n("view",{staticClass:"phone-num"},[t._v("\n\t\t\t"+t._s(t.phone)+"\n\t\t\t"),n("image",{attrs:{src:"/static/images/login_button_edit@3x.png",mode:"widthFix"}})]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.captcha,expression:"captcha"}],staticClass:"captcha-num-ipt",attrs:{type:"number",focus:"",value:"",maxlength:"4",eventid:"Emj-0"},domProps:{value:t.captcha},on:{input:function(e){e.target.composing||(t.captcha=e.target.value)}}}),n("view",{staticClass:"login-btn",attrs:{eventid:"Lew-1"},on:{tap:t.goPassword}},[t._v("下一步")])]),n("view",{staticClass:"other-login-way",style:{top:t.positionTop+"px"}},[n("text",[t._v("其他方式登录")]),n("view",{staticClass:"other-way-list"},[n("image",{staticClass:"other-login",attrs:{src:"/static/images/login_button_WeixinEnter@3x.png",eventid:"6nR-2"},on:{tap:t.goWechatLogin}})])])])};o._withStripped=!0;var a={render:o,staticRenderFns:[]};e.a=a}},[52]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/reg/captcha/captcha.js.map