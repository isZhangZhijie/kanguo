require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([22],{127:function(t,a,i){"use strict";var s=n(i(1)),e=n(i(128));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(e.default))},128:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=i(130),e=i.n(s),n=i(131),o=!1;var c=function(t){o||i(129)},r=i(0)(e.a,n.a,c,null,null);r.options.__file="D:\\myProject\\kanguoApp\\kanguo\\pages\\kanju\\kanju.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] kanju.vue: functional components are not supported with templates, they should use render functions."),a.default=r.exports},129:function(t,a){},130:function(t,a,i){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default={components:{},data:function(){return{isClickChange:!1,tabIndex:0,newsitems:[123,456],tabBars:[{name:"短片",id:"duanpian"},{name:"评论(1210)",id:"pinglun"}],showPianduan:!0,videoList:[1,2,3,4,5,6]}},onLoad:function(){},methods:{goBack:function(){t.navigateBack({delta:1})},changeTab:function(t){var a=t.target.current;if(this.isClickChange)return this.tabIndex=a,void(this.isClickChange=!1);this.isClickChange=!1,this.tabIndex=a},tapTab:function(t){if(this.tabIndex===t.target.dataset.current)return!1;this.isClickChange=!0,this.tabIndex=t.target.dataset.current},goPianduan:function(){this.showPianduan||(this.showPianduan=!this.showPianduan)},goFenji:function(){this.showPianduan&&(this.showPianduan=!this.showPianduan)},dianzan:function(t){console.log(t)},goYingjuzhuye:function(){t.navigateTo({url:"../yingjuzhuye/yingjuzhuye"})}}}}).call(a,i(2).default)},131:function(t,a,i){"use strict";var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("view",{staticClass:"index"},[i("view",{staticClass:"video-box"},[i("video",{attrs:{src:"https://www.xitieba.com/video/new/YS_PCVedio.webm",poster:"/static/images/poster.png",controls:""}},[i("cover-image",{staticClass:"back",attrs:{src:"/static/images/common_return2@3x.png",eventid:"PRx-0",mpcomid:"D33-0"},on:{click:t.goBack}})],1)]),i("view",{staticClass:"swiper-tab-bar",attrs:{id:"tab-bar"}},t._l(t.tabBars,function(a,s){return i("view",{key:a.id,class:["swiper-tab-list",t.tabIndex==s?"active":""],attrs:{id:a.id,"data-current":s,eventid:"KmB-1-"+s},on:{tap:t.tapTab}},[t._v(t._s(a.name))])})),i("swiper",{staticClass:"swiper-box",attrs:{current:t.tabIndex,duration:"100",eventid:"cwq-9"},on:{change:t.changeTab}},[i("swiper-item",{attrs:{mpcomid:"Jqu-1"}},[i("scroll-view",{staticStyle:{width:"100%",height:"100%"},attrs:{"scroll-y":""}},[i("view",{staticClass:"author"},[i("view",{staticClass:"author-about"},[i("image",{attrs:{src:"/static/images/massage_button_fensi@3x.png",mode:"widthFix"}}),i("text",{staticClass:"name"},[t._v("剧情死忠粉")])]),i("view",{staticClass:"right"},[t._v("\n\t\t\t\t\t\t\t+关注\n\t\t\t\t\t\t")])]),i("view",{staticClass:"title"},[t._v("\n\t\t\t\t\t\t勇闯AK火力网，凌风一枪生擒毒枭\n\t\t\t\t\t")]),i("view",{staticClass:"action-row"},[i("view",{staticClass:"love"},[i("image",{attrs:{src:"/static/images/common__button_dianzan0@3x.png",mode:"widthFix"}}),t._v("\n\t\t\t\t\t\t\t2124\n\t\t\t\t\t\t")]),i("view",{staticClass:"share"},[i("image",{attrs:{src:"/static/images/common__button_fenxiang@3x.png",mode:"widthFix"}}),t._v("\n\t\t\t\t\t\t\t320\n\t\t\t\t\t\t")]),i("view",{staticClass:"guanzhu"},[i("image",{attrs:{src:"/static/images/common__button_keep0@3x.png",mode:"widthFix"}}),t._v("\n\t\t\t\t\t\t\t870\n\t\t\t\t\t\t")]),i("view",{staticClass:"download"},[i("image",{attrs:{src:"/static/images/common__button_download@3x.png",mode:"widthFix"}}),t._v("\n\t\t\t\t\t\t\t下载\n\t\t\t\t\t\t")])]),i("view",{staticClass:"dashed-line"}),i("view",{staticClass:"all-video"},[i("view",{staticClass:"all-video-btn",attrs:{eventid:"kbC-2"},on:{tap:t.goYingjuzhuye}},[i("view",{staticClass:"img-box img-box-width100"},[i("image",{attrs:{src:"/static/images/juzhao.png",mode:"widthFix"}})]),i("view",{staticClass:"text"},[i("view",{staticClass:"title1 xtb-3dots"},[t._v("\n\t\t\t\t\t\t\t\t\t蚀日风暴风暴风暴\n\t\t\t\t\t\t\t\t")]),i("view",{staticClass:"arrow-right"},[t._v("\n\t\t\t\t\t\t\t\t\t全部视频\n\t\t\t\t\t\t\t\t\t"),i("image",{attrs:{src:"/static/images/common__button_enter@3x.png",mode:"widthFix"}})])])]),i("view",{staticClass:"other-way"},[i("image",{attrs:{src:"/static/images/aiqiyi@3x.png",mode:"widthFix"}}),i("image",{attrs:{src:"/static/images/youku@3x.png",mode:"widthFix"}}),i("image",{attrs:{src:"/static/images/tengxun@3x.png",mode:"widthFix"}})])]),i("view",{staticClass:"video-about-tab"},[i("text",{class:[t.showPianduan?"active":""],staticStyle:{"font-size":"16px","margin-right":"50upx"},attrs:{eventid:"pJa-3"},on:{tap:t.goPianduan}},[t._v("精彩片段")]),i("text",{class:[t.showPianduan?"":"active"],staticStyle:{"font-size":"16px"},attrs:{eventid:"tgR-4"},on:{tap:t.goFenji}},[t._v("分集剧情")])]),i("view",{directives:[{name:"show",rawName:"v-show",value:t.showPianduan,expression:"showPianduan"}],staticClass:"pianduan"},[i("scroll-view",{staticClass:"video-list",attrs:{"scroll-x":""}},t._l(t.videoList,function(a,s){return i("view",{key:s,staticClass:"video-item"},[i("view",{staticClass:"img-box img-box-width100"},[i("image",{attrs:{src:"/static/images/juzhao.png",mode:"widthFix"}}),i("view",{staticClass:"shadow"}),i("text",[t._v("热度：23W+")])])])}))],1),i("view",{directives:[{name:"show",rawName:"v-show",value:!t.showPianduan,expression:"!showPianduan"}],staticClass:"fenji"},[t._v("\n\t\t\t\t\t\t欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧\n\t\t\t\t\t")])])],1),i("swiper-item",{attrs:{mpcomid:"O4X-2"}},[i("scroll-view",{staticStyle:{width:"100%",height:"100%"},attrs:{"scroll-y":""}},[i("view",{staticClass:"comment-list"},[i("view",{staticClass:"comment-item"},[i("image",{attrs:{src:"/static/images/massage_button_fensi@3x.png",mode:"widthFix"}}),i("view",{staticClass:"comment-box"},[i("view",{staticClass:"name"},[t._v("剧情死忠粉")]),i("view",{staticClass:"main-comment"},[t._v("\n\t\t\t\t\t\t\t\t\t这是一条神评这是一条神评这是一条神评这是一条神评这是一条神评这是一条神评这是一条神评\n\t\t\t\t\t\t\t\t")]),i("view",{staticClass:"reply-comment"},[i("view",{staticClass:"reply-item"},[i("view",{staticClass:"reply-name"},[t._v("@你猜我猜不猜")]),i("view",{staticClass:"reply-text"},[t._v("这是一条神评")])]),i("view",{staticClass:"reply-item"},[i("view",{staticClass:"reply-name"},[t._v("@啥名字")]),i("view",{staticClass:"reply-text"},[t._v("这是一条神评")])])])]),i("view",{staticClass:"dianzan",attrs:{eventid:"8aF-5"},on:{tap:t.dianzan}},[i("image",{attrs:{src:"/static/images/dianzan0.png",mode:"widthFix"}}),t._v("\n\t\t\t\t\t\t\t\t361\n\t\t\t\t\t\t\t")])]),i("view",{staticClass:"comment-item"},[i("image",{attrs:{src:"/static/images/massage_button_fensi@3x.png",mode:"widthFix"}}),i("view",{staticClass:"comment-box"},[i("view",{staticClass:"name"},[t._v("剧情死忠粉")]),i("view",{staticClass:"main-comment"},[t._v("\n\t\t\t\t\t\t\t\t\t这是一条神评\n\t\t\t\t\t\t\t\t")]),i("view",{staticClass:"reply-comment"},[i("view",{staticClass:"reply-item"},[i("view",{staticClass:"reply-name"},[t._v("@你猜我猜不猜")]),i("view",{staticClass:"reply-text"},[t._v("这是一条神评")])]),i("view",{staticClass:"reply-item"},[i("view",{staticClass:"reply-name"},[t._v("@啥名字")]),i("view",{staticClass:"reply-text"},[t._v("这是一条神评")])])])]),i("view",{staticClass:"dianzan",attrs:{eventid:"zVu-6"},on:{tap:t.dianzan}},[i("image",{attrs:{src:"/static/images/dianzan0.png",mode:"widthFix"}}),t._v("\n\t\t\t\t\t\t\t\t361\n\t\t\t\t\t\t\t")])]),i("view",{staticClass:"comment-item"},[i("image",{attrs:{src:"/static/images/massage_button_fensi@3x.png",mode:"widthFix"}}),i("view",{staticClass:"comment-box"},[i("view",{staticClass:"name"},[t._v("剧情死忠粉")]),i("view",{staticClass:"main-comment"},[t._v("\n\t\t\t\t\t\t\t\t\t这是一条神评这是一条神评这是一条神评这是一条神评这是一条神评这是一条神评这是一条神评\n\t\t\t\t\t\t\t\t")])]),i("view",{staticClass:"dianzan",attrs:{eventid:"lzp-7"},on:{tap:t.dianzan}},[i("image",{attrs:{src:"/static/images/dianzan0.png",mode:"widthFix"}}),t._v("\n\t\t\t\t\t\t\t\t361\n\t\t\t\t\t\t\t")])]),i("view",{staticClass:"comment-item"},[i("image",{attrs:{src:"/static/images/massage_button_fensi@3x.png",mode:"widthFix"}}),i("view",{staticClass:"comment-box"},[i("view",{staticClass:"name"},[t._v("剧情死忠粉")]),i("view",{staticClass:"main-comment"},[t._v("\n\t\t\t\t\t\t\t\t\t这是一条神评\n\t\t\t\t\t\t\t\t")])]),i("view",{staticClass:"dianzan",attrs:{eventid:"O5s-8"},on:{tap:t.dianzan}},[i("image",{attrs:{src:"/static/images/dianzan0.png",mode:"widthFix"}}),t._v("\n\t\t\t\t\t\t\t\t361\n\t\t\t\t\t\t\t")])])])])],1)],1),t._m(0)],1)};s._withStripped=!0;var e={render:s,staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("view",{staticClass:"ipt-box"},[a("textarea",{attrs:{placeholder:"来发条热门评论吧!",name:"textarea","auto-height":""}}),a("image",{attrs:{src:"/static/images/common__button_emoj@3x.png",mode:"widthFix"}}),a("image",{attrs:{src:"/static/images/common__button_fasong@3x.png",mode:"widthFix"}})])}]};a.a=e}},[127]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/kanju/kanju.js.map