require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([12],{57:function(t,e,s){"use strict";var o=a(s(1)),n=a(s(58));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(n.default))},58:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(60),n=s.n(o),a=s(61),i=!1;var r=function(t){i||s(59)},c=s(0)(n.a,a.a,r,null,null);c.options.__file="D:\\myProject\\kanguoApp\\kanguo\\pages\\reg\\password\\password.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] password.vue: functional components are not supported with templates, they should use render functions."),e.default=c.exports},59:function(t,e){},60:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{positionTop:0,phone:"",showPassword:!0,password:""}},methods:{initPosition:function(){this.positionTop=t.getSystemInfoSync().windowHeight-140},goWechatLogin:function(){t.navigateTo({url:"../../login/login-wechat/login-wechat"})},changePassword:function(){this.showPassword=!this.showPassword},goIndex:function(){/\w{6,}/.test(this.password)?t.request({url:"http://www.aikm.cn/api/register",method:"POST",data:{type:"android",phone:this.phone,password:this.password},success:function(e){1==e.data.code&&(e.data.data.head_img="/static/images/head_img.png",t.setStorage({key:"userData",data:e.data.data,success:function(){}}),t.setStorage({key:"hasLogin",data:!0,success:function(){}}),t.switchTab({url:"../../index/index"}))},fail:function(){},complete:function(){}}):t.showToast({title:"请输入不少于6位的字母数字下划线",duration:3e3,icon:"none"})}},onLoad:function(t){this.initPosition(),this.phone=t.phone}}}).call(e,s(2).default)},61:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"container"},[s("view",{staticClass:"login-page-top"},[s("view",{staticClass:"login-input phone-password"},[s("image",{attrs:{src:"/static/images/login_signLock@3x.png",mode:"aspectFit"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{focus:"",value:"",placeholder:"请输入不少于6位数的密码",password:t.showPassword,eventid:"FQx-0"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),s("view",{staticClass:"uni-icon uni-icon-eye",class:[t.showPassword?"":"uni-active"],attrs:{eventid:"QpL-1"},on:{click:t.changePassword}})]),s("view",{staticClass:"login-btn",attrs:{eventid:"4Iw-2"},on:{tap:t.goIndex}},[t._v("完成并登陆")])]),s("view",{staticClass:"other-login-way",style:{top:t.positionTop+"px"}},[s("text",[t._v("其他方式登录")]),s("view",{staticClass:"other-way-list"},[s("image",{staticClass:"other-login",attrs:{src:"/static/images/login_button_WeixinEnter@3x.png",eventid:"GZc-3"},on:{tap:t.goWechatLogin}})])])])};o._withStripped=!0;var n={render:o,staticRenderFns:[]};e.a=n}},[57]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/reg/password/password.js.map