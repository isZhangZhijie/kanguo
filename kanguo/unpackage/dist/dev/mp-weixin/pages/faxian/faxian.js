require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([16],{46:function(t,e,s){"use strict";var n=i(s(1)),a=i(s(47));function i(t){return t&&t.__esModule?t:{default:t}}new n.default(a.default).$mount()},47:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(49),a=s.n(n),i=s(50),o=!1;var r=function(t){o||s(48)},u=s(0)(a.a,i.a,r,null,null);u.options.__file="D:\\myProject\\kanguoApp\\kanguo\\pages\\faxian\\faxian.vue",u.esModule&&Object.keys(u.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] faxian.vue: functional components are not supported with templates, they should use render functions."),e.default=u.exports},48:function(t,e){},49:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,a=s(3),i=(n=a)&&n.__esModule?n:{default:n};e.default={components:{footfoot:i.default},data:function(){return{selData:[["推荐","近期上映","已剧终"],["全部地区","大陆","香港","台湾","韩国","美国","英国","泰国","日本","其他"],["全部类型","偶像","古装","武侠","军事","神话","科幻","搞笑","悬疑","历史","儿童","农村","都市","家庭","言情"],["最高人气","最多评论","最多收藏"]],selected:[0,1,2,0]}},onLoad:function(){}}},50:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",[s("view",{staticClass:"top-box"},[t._m(0),s("view",{staticClass:"sel-box"},t._l(t.selData,function(e,n){return s("scroll-view",{key:n,staticClass:"sel-row",attrs:{"scroll-x":"true"}},t._l(e,function(e,a){return s("text",{key:a,staticClass:"sel-item",class:[t.selected[n]==a?"active":""]},[t._v("\n\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t")])}))}))]),s("view",{staticClass:"img-list"},t._l([1,2,3,4,5,6,7,8,9,10],function(e,n){return s("view",{key:n,staticClass:"img-item xtb-3dots"},[s("image",{attrs:{src:"../../static/images/juzhao.png",mode:"widthFix"}}),t._v("\n\t\t\t极速青春\n\t\t")])}))])};n._withStripped=!0;var a={render:n,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"search-box"},[e("view",{staticClass:"search-btn"},[e("image",{attrs:{src:"../../static/images/massge_button_find@3x.png",mode:"widthFix"}}),this._v("\n\t\t\t\t搜你想看\n\t\t\t")]),e("view",{staticClass:"view-history"},[e("image",{attrs:{src:"../../static/images/massge_button_visited@3x.png",mode:"widthFix"}}),this._v("\n\t\t\t\t记录\n\t\t\t")])])}]};e.a=a}},[46]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/faxian/faxian.js.map