(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02dac988"],{"06f1":function(t,e,n){},"1ae4":function(t,e,n){t.exports=n.p+"img/logo.458d8eba.svg"},"25d7":function(t,e,n){"use strict";n("06f1")},2965:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("article",{staticClass:"main row"},[i("aside",{staticClass:"aside-left"},[i("div",{staticClass:"boxshadow ver-hor-center column"},[i("avatar",{staticClass:"avatar",attrs:{url:n("1ae4")}}),i("p",{staticClass:"title"},[t._v(t._s(t.config.webTitle.allName))]),i("p",{staticClass:"sub-title"},[t._v(t._s(t.config.webTitle.allNameEn))]),i("ul",{staticClass:"nav-ul row ver-hor-center"},[i("li",{staticClass:"nav-item"},[i("circle-btn",{attrs:{icon:t.config.webTitle.icon,tiptext:t.config.webTitle.asideName,langPre:t.config.langPre.navigation},on:{iconClick:function(e){return t.$router.push(t.config.webTitle.router)}}})],1),t._l(t.config.navList,(function(e,n){return i("li",{key:n,staticClass:"nav-item"},[i("circle-btn",{attrs:{icon:e.icon,tiptext:e.name,langPre:t.config.langPre.navigation},on:{iconClick:function(n){return t.$router.push(e.router)}}})],1)})),i("li",{staticClass:"nav-item"},[i("circle-btn",{attrs:{icon:"light"==t.$store.state.model?"iconanyemoshi":"iconbaitianmoshi",tiptext:"modelChange",langPre:t.config.langPre.navigation},on:{iconClick:t.changeModel}})],1)],2),i("p",{staticClass:"content"},[t._v(" "+t._s(t.$t("tellMe.content"))+" ")]),i("foot",{staticClass:"foot",attrs:{color:"#ffffffcc",isShrink:!0,footTitle:t.config.footTitle,langPre:t.config.langPre.foot,linkList:t.config.footList}})],1)]),i("article",{staticClass:"aside-right"},[i("router-view")],1)])},o=[],a=n("6751"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{attrs:{src:t.url}})},r=[],l={name:"avatar",props:{url:{type:String,default:""}}},s=l,u=(n("a67e"),n("2877")),f=Object(u["a"])(s,c,r,!1,null,"293e6b5c",null),g=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn",on:{click:t.iconClick}},[n("i",{class:"iconfont "+t.icon}),n("span",{staticClass:"tooltiptext"},[t._v(t._s(t.$t(t.langPre+t.tiptext)))])])},p=[],m={name:"circleBtn",props:{icon:{type:String,default:""},tiptext:{type:String,default:""},langPre:{type:String,default:""}},methods:{iconClick:function(){this.$emit("iconClick")}}},v=m,h=(n("4ec1"),Object(u["a"])(v,d,p,!1,null,"7c7c52fd",null)),b=h.exports,C={components:{avatar:g,circleBtn:b,foot:a["a"]},name:"subPage",methods:{changeModel:function(){this.$store.commit("changeModel")}}},_=C,k=(n("25d7"),Object(u["a"])(_,i,o,!1,null,"58c51b92",null));e["default"]=k.exports},"4ec1":function(t,e,n){"use strict";n("d253")},6751:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"column ver-hor-center"},[n("div",t._l(t.linkList,(function(e,i){return n("a",{key:i,style:""==t.color?"":"color:"+t.color+";border-color:"+t.color+";",on:{click:function(n){return t.$router.push(e.router)}}},[t._v(t._s(t.$t(t.langPre+e.name)))])})),0),n("p",{class:t.isShrink?"shrink":"",style:""==t.color?"":"color:"+t.color+";"},[t._v(t._s(t.footTitle))])])},o=[],a={name:"foot",props:{footTitle:{type:String,default:"@2021 Site By JunLiangWang"},langPre:{type:String,default:"foot."},linkList:{type:Array,default:function(){return[{name:"goodSite",router:"/home"},{name:"tellMe",router:"/tellMe"},{name:"aboutMe",router:"/home"}]}},color:{type:String,default:""},isShrink:{type:Boolean,default:!1}}},c=a,r=(n("dd04"),n("2877")),l=Object(r["a"])(c,i,o,!1,null,"0076df02",null);e["a"]=l.exports},a67e:function(t,e,n){"use strict";n("e138")},c0de:function(t,e,n){},d253:function(t,e,n){},dd04:function(t,e,n){"use strict";n("c0de")},e138:function(t,e,n){}}]);
//# sourceMappingURL=chunk-02dac988.61275fca.js.map