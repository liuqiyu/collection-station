webpackJsonp([5],{"/uab":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"m",function(){return o});var o={menu:"Menu",search:"Search",shopingCart:"Shopping Cart",ladiesWatch:"Ladies watch",menWatch:"Men watch",smartWatch:"Men watch",newProducts:"New Products",allProducts:"All Products",freeShippingWorldwide:"Free shipping worldwide",taxFreeRefundWorldwide:"Tax-free refund worldwide",twoYearWarrantyForAllProduct:"Two-year warranty for all product",secureTransaction100RiskFreePurchase:"100% secure transaction, risk free purchase",countdown:"Countdown",clickAndBuyItNow:"Click and buy it now",surplusStock:"Surplus stock",addMoreProduct:"Add more product",quantity:"Quantity",discount:"Discount",taxInclusive:"Tax-inclusive",grandTotal:"Grand total",goToCheckOut:"Go to check out",checkOut:"Check out",yourAddress:"Your address",Address:"Address",name:"Name",postCode:"Post code",phoneNumber:"Phone number",emailAddress:"E-mail address",note:"Note",cashOnDelivery:"Cash on delivery",submitOrder:"Cash on delivery",grade:"Grade",detailsDisplay:"Details display",customerReview:"Customer review",youMayBeInterstedIn:"You may be interested in",addToCart:"Add to cart",paymentDetails:"Payment details",checkoutSuccess:"Checkout success",total:"Total",bravoSuccessfullyOrdered:"Bravo! Successfully ordered!",theOrderGoodsAreHeadingToYou:"The ordered goods are heading to you~",customerService:"Customer service",viewOrder:"Customer service",warningTips:"Warm tips: If there is any question, please do not hesitate to contact our customer service staff, we will do our best for you timely. Wishing you a happy shopping.",viewDetails:"View details",recipient:"Recipient",deliveryAddress:"Delivery address",orderDetails:"Order details ",learnMore:"Learn more",orderNumber:"Order number",orderTime:"Order time",commodityPrice:"Commodity price",shippingFee:"Shipping fee"}},"991W":function(e,t){},Dwxw:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),r=n("Dd8w"),i=n.n(r),a=(Boolean,String,String,String,{name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(e){this.$emit("update:show",e)}}}),s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:e.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading"},[n("div",{staticClass:"weui-mask_transparent"}),e._v(" "),n("div",{staticClass:"weui-toast",style:{position:e.position}},[n("i",{staticClass:"weui-loading weui-icon_toast"}),e._v(" "),n("p",{staticClass:"weui-toast__content"},[e._v(e._s(e.text||"加载中")),e._t("default")],2)])])])},staticRenderFns:[]};var d=n("VU/8")(a,s,!1,function(e){n("dIBT")},null,null).exports,c=n("NYxO"),u=(i()({},Object(c.b)({isLoading:function(e){return e.vux.isLoading}})),{components:{Loading:d},computed:i()({},Object(c.b)({isLoading:function(e){return e.vux.isLoading}}))}),l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("loading",{model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}}),e._v(" "),n("router-view")],1)},staticRenderFns:[]};var p=n("VU/8")(u,l,!1,function(e){n("Dwxw")},null,null).exports,m=n("/ocq"),h=function(e){return n.e(0).then(function(){return e(n("KR8f"))}.bind(null,n)).catch(n.oe)};o.a.use(m.a);var w=new m.a({routes:[{path:"/",component:function(e){return n.e(1).then(function(){return e(n("6f/g"))}.bind(null,n)).catch(n.oe)},children:[{path:"",component:h,redirect:"home"},{path:"home",name:"home",component:h},{path:"products",name:"products",component:function(e){return n.e(2).then(function(){return e(n("9pJy"))}.bind(null,n)).catch(n.oe)}},{path:"promotion",name:"promotion",component:function(e){return n.e(3).then(function(){return e(n("HdTe"))}.bind(null,n)).catch(n.oe)}}]}]}),f=n("bOdI"),v=n.n(f)()({},"UPDATELOADINGSTATUS",function(e,t){e.isLoading=t.isLoading}),g={state:{isLoading:!1},mutations:v};o.a.use(c.a);var y=new c.a.Store({modules:{vux:g}}),T=n("TXmL");o.a.use(T.a);var S=new T.a({locale:"zh-CN",messages:{"zh-CN":n("xZXS"),"en-US":n("/uab")}});n("UoMW"),n("991W"),n("UfKn");w.beforeEach(function(e,t,n){y.commit("UPDATELOADINGSTATUS",{isLoading:!0}),n()}),w.afterEach(function(){setTimeout(function(){y.commit("UPDATELOADINGSTATUS",{isLoading:!1})},200)}),o.a.config.productionTip=!1,new o.a({el:"#app",i18n:S,router:w,store:y,components:{App:p},template:"<App/>"})},UfKn:function(e,t){},UoMW:function(e,t){var n,o,r,i,a;n=document,o=window,r=n.documentElement,i="orientationchange"in window?"orientationchange":"resize",a=function(){var e=r.clientWidth;e&&(r.style.fontSize=e/375*100+"px")},n.addEventListener&&(o.addEventListener(i,a,!1),n.addEventListener("DOMContentLoaded",a,!1))},dIBT:function(e,t){},xZXS:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"m",function(){return o});var o={menu:"菜单",search:"搜索",shopingCart:"购物车",ladiesWatch:"女士腕表",menWatch:"男士腕表",smartWatch:"智能腕表",newProducts:"新品推荐",allProducts:"所有商品",freeShippingWorldwide:"全球范围 配送免费",taxFreeRefundWorldwide:"全球范围 退货免费",twoYearWarrantyForAllProduct:"所有商品 两年质保",secureTransaction100RiskFreePurchase:"100%安全交易 放心购买",countdown:"倒计时",clickAndBuyItNow:"点击抢购",surplusStock:"剩余库存",addMoreProduct:"继续添加商品",quantity:"数量",discount:"折扣",taxInclusive:"含税",grandTotal:"累计",goToCheckOut:"前往结账",checkOut:"结账",yourAddress:"您的地址",Address:"地址",name:"姓名",postCode:"邮编",phoneNumber:"电话",emailAddress:"邮箱",note:"备注",cashOnDelivery:"货到付款",submitOrder:"提交订单",grade:"评分",detailsDisplay:"细节展示",customerReview:"客户反馈",youMayBeInterstedIn:"猜你喜欢",addToCart:"加入购物车",paymentDetails:"付款详情",checkoutSuccess:"下单成功",total:"合计",bravoSuccessfullyOrdered:"恭喜，成功提交订单",theOrderGoodsAreHeadingToYou:"您的商品正向您飞奔而去~ ",customerService:"客户服务",viewOrder:"查看订单",warningTips:"温馨提示：有任何问题请联系我们的在线客服，以便我们能够及时为您提供服务，祝您购物愉快!",viewDetails:"查看详情",recipient:"收货人",deliveryAddress:"收货地址",orderDetails:"订单详情",learnMore:"更多",orderNumber:"订单编号",orderTime:"订购时间",commodityPrice:"商品价格",shippingFee:"运费"}}},["NHnr"]);