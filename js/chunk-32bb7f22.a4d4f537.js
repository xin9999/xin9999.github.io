(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32bb7f22"],{"04e5":function(t,e,s){},1148:function(t,e,s){"use strict";var i=s("a691"),a=s("1d80");t.exports="".repeat||function(t){var e=String(a(this)),s="",n=i(t);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(s+=e);return s}},"17da":function(t,e,s){"use strict";var i=s("1899"),a=s.n(i);a.a},1899:function(t,e,s){},"38af":function(t,e,s){},"408a":function(t,e,s){var i=s("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=i(t))throw TypeError("Incorrect invocation");return+t}},"41c7":function(t,e,s){"use strict";var i=s("eccd"),a=s.n(i);a.a},"57bd":function(t,e,s){"use strict";var i=s("b064"),a=s.n(i);a.a},"60bd":function(t,e,s){"use strict";var i=s("04e5"),a=s.n(i);a.a},"6ab7":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"detail"}},[s("detail-nav-bar",{ref:"nav",staticClass:"detail-nav",on:{titleClick:t.titleClick}}),s("scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3},on:{scroll:t.contentScroll}},[s("detail-swiper",{attrs:{"top-images":t.topImages}}),s("detail-base-info",{attrs:{goods:t.goods}}),s("detail-shop-info",{attrs:{shop:t.shop}}),s("detail-goods-info",{attrs:{"detail-info":t.detailInfo},on:{imageLoad:t.imageLoad}}),s("detail-param-info",{ref:"params",attrs:{"param-info":t.pramaInfo}}),s("detail-comment-info",{ref:"comment",attrs:{"comment-info":t.commentInfo}}),s("goods-list",{ref:"recommend",attrs:{goods:t.recommends}})],1),s("detail-bottom-bar",{on:{addToCart:t.addToCart}}),s("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(e){return t.backClick(e)}}})],1)},a=[];s("b0c0");function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=s("1bab");function r(t){return Object(o["a"])({url:"/detail",params:{iid:t}})}function c(){return Object(o["a"])({url:"/recommend"})}var l=function t(e,s,i){n(this,t),this.title=e.title,this.desc=e.desc,this.newPrice=e.price,this.oldPrice=e.oldPrice,this.discount=e.discountDesc,this.colums=s,this.services=i,this.realPrice=e.lowNowPrice},f=function t(e,s){n(this,t),this.image=e.images?e.images[0]:"",this.infos=e.set,this.sizes=s.tables},d=function t(e){n(this,t),this.logo=e.shopLogo,this.name=e.name,this.fans=e.cFans,this.sells=e.cSells,this.score=e.score,this.goodsCount=e.cGoods},u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("nav-bar",[i("div",{staticClass:"back",attrs:{slot:"left"},on:{click:t.backClick},slot:"left"},[i("img",{attrs:{src:s("7a74"),alt:""}})]),i("div",{staticClass:"title",attrs:{slot:"center"},slot:"center"},t._l(t.titles,(function(e,s){return i("div",{key:s,staticClass:"title-item",class:{active:t.currentIndex===s},on:{click:function(e){return t.titleClick(s)}}},[t._v(t._s(e))])})),0)])],1)},m=[],h=s("a7ac"),p={components:{NavBar:h["a"]},data:function(){return{titles:["商品","参数","评论","推荐"],currentIndex:0}},methods:{titleClick:function(t){this.currentIndex=t,this.$emit("titleClick",t)},backClick:function(){this.$router.back()}}},v=p,g=(s("57bd"),s("2877")),_=Object(g["a"])(v,u,m,!1,null,null,null),b=_.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("swiper",{staticClass:"detail-swiper"},t._l(t.topImages,(function(t){return s("swiper-item",[s("img",{attrs:{src:t,alt:""}})])})),1)},I=[],w=s("dc2c"),k={components:{Swiper:w["a"],SwiperItem:w["b"]},props:{topImages:{type:Array,default:function(){return[]}}}},x=k,y=(s("e89b"),Object(g["a"])(x,C,I,!1,null,"491e76f6",null)),T=y.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.goods).length?s("div",{staticClass:"base-info"},[s("div",{staticClass:"info-title"},[t._v(t._s(t.goods.title))]),s("div",{staticClass:"info-price"},[s("span",{staticClass:"n-price"},[t._v(t._s(t.goods.newPrice))]),s("span",{staticClass:"o-price"},[t._v(t._s(t.goods.oldPrice))]),s("span",{staticClass:"discount"},[t._v(t._s(t.goods.discount))])]),s("div",{staticClass:"info-other"},[s("span",[t._v(t._s(t.goods.colums[0]))]),s("span",[t._v(t._s(t.goods.colums[1]))]),s("span",[t._v(t._s(t.goods.services[t.goods.services.length-1].name))])]),s("div",{staticClass:"info-service"},t._l(t.goods.services.length-1,(function(e){return s("span",{key:e,staticClass:"info-service-item"},[s("img",{attrs:{src:t.goods.services[e-1].icon}}),s("span",[t._v(t._s(t.goods.services[e-1].name))])])})),0)]):t._e()},O=[],j={name:"DetailBaseInfo",props:{goods:{type:Object}}},E=j,D=(s("d2fb"),Object(g["a"])(E,$,O,!1,null,"06696fc4",null)),S=D.exports,Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop-info"},[s("div",{staticClass:"shop-top"},[s("img",{attrs:{src:t.shop.logo}}),s("span",{staticClass:"title"},[t._v(t._s(t.shop.name))])]),s("div",{staticClass:"shop-middle"},[s("div",{staticClass:"shop-middle-item shop-middle-left"},[s("div",{staticClass:"info-sells"},[s("div",{staticClass:"sells-count"},[t._v(t._s(t._f("sellCountFilter")(t.shop.sells)))]),s("div",{staticClass:"sells-text"},[t._v("总销量")])]),s("div",{staticClass:"info-goods"},[s("div",{staticClass:"goods-count"},[t._v(" "+t._s(t.shop.goodsCount)+" ")]),s("div",{staticClass:"goods-text"},[t._v("全部宝贝")])])]),s("div",{staticClass:"shop-middle-item shop-middle-right"},[s("table",t._l(t.shop.score,(function(e,i){return s("tr",{key:i},[s("td",[t._v(t._s(e.name))]),s("td",{staticClass:"score",class:{"score-better":e.isBetter}},[t._v(t._s(e.score))]),s("td",{staticClass:"better",class:{"better-more":e.isBetter}},[s("span",[t._v(t._s(e.isBetter?"高":"低"))])])])})),0)])]),t._m(0)])},B=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop-bottom"},[s("div",{staticClass:"enter-shop"},[t._v("进店逛逛")])])}],P=(s("b680"),{name:"DetailShopInfo",props:{shop:{type:Object,default:function(){return{}}}},filters:{sellCountFilter:function(t){return t<1e4?t:(t/1e4).toFixed(1)+"万"}}}),L=P,F=(s("60bd"),Object(g["a"])(L,Y,B,!1,null,"fee332fc",null)),N=F.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.detailInfo).length?s("div",{staticClass:"goods-info"},[s("div",{staticClass:"info-desc clear-fix"},[s("div",{staticClass:"start"}),s("div",{staticClass:"desc"},[t._v(t._s(t.detailInfo.desc))]),s("div",{staticClass:"end"})]),s("div",{staticClass:"info-key"},[t._v(t._s(t.detailInfo.detailImage[0].key))]),s("div",{staticClass:"info-list"},t._l(t.detailInfo.detailImage[0].list,(function(e,i){return s("img",{key:i,attrs:{src:e,alt:""},on:{load:t.imgLoad}})})),0)]):t._e()},z=[],G={props:{detailInfo:{type:Object,default:function(){return{}}}},data:function(){return{counter:0,imagesLength:0}},methods:{imgLoad:function(){this.$emit("imageLoad")}},watch:{detailInfo:function(){this.imagesLength=this.detailInfo.detailImage[0].list.length}}},M=G,J=(s("9d41"),Object(g["a"])(M,R,z,!1,null,"6abea3bc",null)),A=J.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.paramInfo).length?s("div",{staticClass:"param-info"},[t._l(t.paramInfo.sizes,(function(e,i){return s("table",{key:i,staticClass:"info-size"},t._l(e,(function(e,i){return s("tr",{key:i},t._l(e,(function(e,i){return s("td",{key:i},[t._v(t._s(e))])})),0)})),0)})),s("table",{staticClass:"info-param"},t._l(t.paramInfo.infos,(function(e,i){return s("tr",[s("td",{staticClass:"info-param-key"},[t._v(t._s(e.key))]),s("td",{staticClass:"param-value"},[t._v(t._s(e.value))])])})),0),0!==t.paramInfo.image.length?s("div",{staticClass:"info-img"},[s("img",{attrs:{src:t.paramInfo.image,alt:""}})]):t._e()],2):t._e()},q=[],H={props:{paramInfo:{type:Object,default:function(){return{}}}}},K=H,Q=(s("17da"),Object(g["a"])(K,W,q,!1,null,"7e8e604f",null)),U=Q.exports,V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.commentInfo).length?s("div",{staticClass:"comment-info"},[t._m(0),s("div",{staticClass:"info-user"},[s("img",{attrs:{src:t.commentInfo.user.avatar,alt:""}}),s("span",[t._v(t._s(t.commentInfo.user.uname))])]),s("div",{staticClass:"info-detail"},[s("p",[t._v(t._s(t.commentInfo.content))]),s("div",{staticClass:"info-other"},[s("span",{staticClass:"date"},[t._v(t._s(t._f("showDate")(t.commentInfo.created)))]),s("span",[t._v(t._s(t.commentInfo.style))])]),s("div",{staticClass:"info-imgs"},t._l(t.commentInfo.images,(function(t,e){return s("img",{key:e,attrs:{src:t,alt:""}})})),0)])]):t._e()},X=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"info-header"},[s("div",{staticClass:"header-title"},[t._v("用户评价")]),s("div",{staticClass:"header-more"},[t._v(" 更多 "),s("i",{staticClass:"arrow-right"})])])}],Z=s("90b9"),tt={props:{commentInfo:{type:Object,default:function(){return{}}}},filters:{showDate:function(t){var e=new Date(1e3*t);return Object(Z["b"])(e,"yyyy-MM-dd")}}},et=tt,st=(s("c087"),Object(g["a"])(et,V,X,!1,null,null,null)),it=st.exports,at=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bottom-bar"},[t._m(0),s("div",{staticClass:"bar-item bar-right"},[s("div",{staticClass:"cart",on:{click:t.addToCart}},[t._v("加入购物车")]),s("div",{staticClass:"buy"},[t._v("购买")])])])},nt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bar-item bar-left"},[s("div",[s("i",{staticClass:"icon service"}),s("span",{staticClass:"text"},[t._v("客服")])]),s("div",[s("i",{staticClass:"icon shop"}),s("span",{staticClass:"text"},[t._v("店铺")])]),s("div",[s("i",{staticClass:"icon select"}),s("span",{staticClass:"text"},[t._v("收藏")])])])}],ot={methods:{addToCart:function(){this.$emit("addToCart")}}},rt=ot,ct=(s("def3"),Object(g["a"])(rt,at,nt,!1,null,"4251baa0",null)),lt=ct.exports,ft=s("6d71"),dt=s("5d17"),ut=(s("fdd6"),s("eecb")),mt={name:"Detail",data:function(){return{iid:"",topImages:[],goods:{},shop:{},detailInfo:{},pramaInfo:{},commentInfo:{},recommends:[],themeTopYs:[],getThemeTopY:null,currentIndex:0,message:"",show:!1}},mixins:[ut["a"]],created:function(){var t=this;this.iid=this.$route.params.iid,r(this.iid).then((function(e){console.log(e);var s=e.result;t.topImages=s.itemInfo.topImages,t.goods=new l(s.itemInfo,s.columns,s.shopInfo.services),t.shop=new d(s.shopInfo),t.detailInfo=s.detailInfo,t.pramaInfo=new f(s.itemParams.info,s.itemParams.rule),0!==s.rate.cRate&&(t.commentInfo=s.rate.list[0])})),c().then((function(e){t.recommends=e.data.list})),this.getThemeTopY=Object(Z["a"])((function(){t.themeTopYs=[],t.themeTopYs.push(0),t.themeTopYs.push(t.$refs.params.$el.offsetTop),t.themeTopYs.push(t.$refs.comment.$el.offsetTop),t.themeTopYs.push(t.$refs.recommend.$el.offsetTop)}))},updated:function(){},components:{DetailNavBar:b,DetailSwiper:T,DetailBaseInfo:S,DetailShopInfo:N,Scroll:dt["a"],DetailGoodsInfo:A,DetailParamInfo:U,DetailCommentInfo:it,GoodsList:ft["a"],DetailBottomBar:lt},methods:{imageLoad:function(){this.newRefresh,this.getThemeTopY()},titleClick:function(t){this.$refs.scroll.scrollTo(0,44-this.themeTopYs[t],200)},contentScroll:function(t){for(var e=-t.y,s=this.themeTopYs.length,i=0;i<s;i++)this.currentIndex!==i&&(i<s-1&&e>=this.themeTopYs[i]&&e<this.themeTopYs[i+1]||i===s-1&&e>=this.themeTopYs[i])&&(this.currentIndex=i,this.$refs.nav.currentIndex=this.currentIndex);this.listenShowBackTop(t)},addToCart:function(){var t=this,e={};e.image=this.topImages[0],e.title=this.goods.title,e.desc=this.goods.desc,e.price=this.goods.realPrice,e.iid=this.iid,console.log(this.goods.realPrice),this.$store.dispatch("addCart",e).then((function(e){t.$toast.show(e,2e3)}))}},mounted:function(){var t=Object(Z["a"])(this.$refs.scroll.refresh,100);this.$bus.$on("detailItemImageLoad",(function(){t()}))}},ht=mt,pt=(s("41c7"),Object(g["a"])(ht,i,a,!1,null,"32aa9554",null));e["default"]=pt.exports},"7a74":function(t,e,s){t.exports=s.p+"img/back.26df9036.svg"},"7e26":function(t,e,s){},"9d41":function(t,e,s){"use strict";var i=s("38af"),a=s.n(i);a.a},"9e77":function(t,e,s){},b064:function(t,e,s){},b680:function(t,e,s){"use strict";var i=s("23e7"),a=s("a691"),n=s("408a"),o=s("1148"),r=s("d039"),c=1..toFixed,l=Math.floor,f=function(t,e,s){return 0===e?s:e%2===1?f(t,e-1,s*t):f(t*t,e/2,s)},d=function(t){var e=0,s=t;while(s>=4096)e+=12,s/=4096;while(s>=2)e+=1,s/=2;return e},u=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){c.call({})}));i({target:"Number",proto:!0,forced:u},{toFixed:function(t){var e,s,i,r,c=n(this),u=a(t),m=[0,0,0,0,0,0],h="",p="0",v=function(t,e){var s=-1,i=e;while(++s<6)i+=t*m[s],m[s]=i%1e7,i=l(i/1e7)},g=function(t){var e=6,s=0;while(--e>=0)s+=m[e],m[e]=l(s/t),s=s%t*1e7},_=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==m[t]){var s=String(m[t]);e=""===e?s:e+o.call("0",7-s.length)+s}return e};if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(h="-",c=-c),c>1e-21)if(e=d(c*f(2,69,1))-69,s=e<0?c*f(2,-e,1):c/f(2,e,1),s*=4503599627370496,e=52-e,e>0){v(0,s),i=u;while(i>=7)v(1e7,0),i-=7;v(f(10,i,1),0),i=e-1;while(i>=23)g(1<<23),i-=23;g(1<<i),v(1,1),g(2),p=_()}else v(0,s),v(1<<-e,0),p=_()+o.call("0",u);return u>0?(r=p.length,p=h+(r<=u?"0."+o.call("0",u-r)+p:p.slice(0,r-u)+"."+p.slice(r-u))):p=h+p,p}})},c087:function(t,e,s){"use strict";var i=s("7e26"),a=s.n(i);a.a},d0fc:function(t,e,s){},d2fb:function(t,e,s){"use strict";var i=s("ef5f"),a=s.n(i);a.a},def3:function(t,e,s){"use strict";var i=s("d0fc"),a=s.n(i);a.a},e89b:function(t,e,s){"use strict";var i=s("9e77"),a=s.n(i);a.a},eccd:function(t,e,s){},ef5f:function(t,e,s){}}]);
//# sourceMappingURL=chunk-32bb7f22.a4d4f537.js.map