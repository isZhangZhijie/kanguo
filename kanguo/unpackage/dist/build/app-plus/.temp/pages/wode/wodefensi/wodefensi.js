require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([3],{112:function(t,e,s){"use strict";var i=a(s(1)),n=a(s(113));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(n.default))},113:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(115),n=s.n(i),a=s(116);var u=function(t){s(114)},c=s(0)(n.a,a.a,u,null,null);e.default=c.exports},114:function(t,e){},115:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:{yonghuList:[1,2,3,4,5,6,7,8,9]},methods:{}}},116:function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"page"},[s("view",{},[t.yonghuList.length>0?s("view",{staticClass:"yonghu-list"},[s("view",{staticClass:"yonghu-num"},[t._v("有"+t._s(t.yonghuList.length)+"位用户关注了你")]),s("view",{staticClass:"msg-list"},t._l(t.yonghuList,function(e,i){return s("view",{key:i,staticClass:"msg-item yonghu-item"},[s("image",{attrs:{src:"../../../static/images/common__button_emoj@3x.png",mode:"widthFix"}}),t._m(0,!0),t._m(1,!0)])}))]):s("view",{staticClass:"no-yonghu"},[s("view",{staticClass:"no-yonghu-text1"},[t._v("你还没有关注任何用户")]),s("view",{staticClass:"no-yonghu-text2"},[t._v("错过的精彩那么大")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"msg-detail"},[e("view",{staticClass:"msg-title"},[this._v("我是谁")]),e("view",{staticClass:"msg-text"},[this._v("幽默影剧发布人")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"guanzhu-btn"},[e("image",{attrs:{src:"../../../static/images/common_del@3x.png",mode:"widthFix"}}),this._v("\r\n\t\t\t\t\t\t取关\r\n\t\t\t\t\t")])}]};e.a=i}},[112]);