require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([6],{127:function(t,e,i){"use strict";var s=a(i(1)),n=a(i(128));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(n.default))},128:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(130),n=i.n(s),a=i(131);var c=function(t){i(129)},r=i(0)(n.a,a.a,c,null,null);e.default=r.exports},129:function(t,e){},130:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},methods:{switch1Change:function(t){console.log("switch1 发生 change 事件，携带值为"+t.detail.value)},switch2Change:function(t){console.log("switch2 发生 change 事件，携带值为"+t.detail.value)}}}},131:function(t,e,i){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"shezhi"},[e("view",{staticClass:"active-row"},[e("text",[this._v("移动流量下视频自动播放")]),e("switch",{attrs:{color:"#feda46",eventid:"xB3-0"},on:{change:this.switch2Change}})]),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"active-row"},[e("text",[this._v("清除缓存")]),e("view",{staticClass:"right"},[this._v("\n\t\t\t3.7M\n\t\t\t"),e("image",{staticClass:"arrow-right",attrs:{src:"../../../static/images/my_button_enter@3x.png",mode:"widthFix"}})])])}]};e.a=s}},[127]);