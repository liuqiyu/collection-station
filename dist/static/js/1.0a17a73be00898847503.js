webpackJsonp([1],{"+tPU":function(t,e,i){i("xGkn");for(var s=i("7KvD"),n=i("hJx8"),r=i("/bQp"),o=i("dSzd")("toStringTag"),a="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<a.length;c++){var l=a[c],u=s[l],f=u&&u.prototype;f&&!f[o]&&n(f,o,l),r[l]=r.Array}},"/bQp":function(t,e){t.exports={}},"/n6Q":function(t,e,i){i("zQR9"),i("+tPU"),t.exports=i("Kh4W").f("iterator")},"06OY":function(t,e,i){var s=i("3Eo+")("meta"),n=i("EqjI"),r=i("D2L2"),o=i("evD5").f,a=0,c=Object.isExtensible||function(){return!0},l=!i("S82l")(function(){return c(Object.preventExtensions({}))}),u=function(t){o(t,s,{value:{i:"O"+ ++a,w:{}}})},f=t.exports={KEY:s,NEED:!1,fastKey:function(t,e){if(!n(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!r(t,s)){if(!c(t))return"F";if(!e)return"E";u(t)}return t[s].i},getWeak:function(t,e){if(!r(t,s)){if(!c(t))return!0;if(!e)return!1;u(t)}return t[s].w},onFreeze:function(t){return l&&f.NEED&&c(t)&&!r(t,s)&&u(t),t}}},"1u9t":function(t,e,i){t.exports=i.p+"static/img/sample.87b952d.png"},"4mcu":function(t,e){t.exports=function(){}},"50hQ":function(t,e){},"5QVw":function(t,e,i){t.exports={default:i("BwfY"),__esModule:!0}},"7UMu":function(t,e,i){var s=i("R9M2");t.exports=Array.isArray||function(t){return"Array"==s(t)}},"880/":function(t,e,i){t.exports=i("hJx8")},"94VQ":function(t,e,i){"use strict";var s=i("Yobk"),n=i("X8DO"),r=i("e6n0"),o={};i("hJx8")(o,i("dSzd")("iterator"),function(){return this}),t.exports=function(t,e,i){t.prototype=s(o,{next:n(1,i)}),r(t,e+" Iterator")}},BEQ0:function(t,e,i){"use strict";var s=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var s={};return"abcdefghijklmnopqrst".split("").forEach(function(t){s[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},s)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var i,o,a=function(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),c=1;c<arguments.length;c++){for(var l in i=Object(arguments[c]))n.call(i,l)&&(a[l]=i[l]);if(s){o=s(i);for(var u=0;u<o.length;u++)r.call(i,o[u])&&(a[o[u]]=i[o[u]])}}return a}},BwfY:function(t,e,i){i("fWfb"),i("M6a0"),i("OYls"),i("QWe/"),t.exports=i("FeBl").Symbol},EGZi:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},J4Hj:function(t,e,i){t.exports=i.p+"static/img/showall.60abe58.png"},KR8f:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("mvHQ"),n=i.n(s),r=i("Zrlr"),o=i.n(r),a=i("wxAW"),c=i.n(a),l=i("BEQ0"),u=i.n(l),f=function(t){return Array.prototype.slice.call(t)},d=function(){function t(e){if(o()(this,t),this._default={container:".vux-swiper",item:".vux-swiper-item",direction:"vertical",activeClass:"active",threshold:50,duration:300,auto:!1,loop:!1,interval:3e3,height:"auto",minMovingDistance:0},this._options=u()(this._default,e),this._options.height=this._options.height.replace("px",""),this._start={},this._move={},this._end={},this._eventHandlers={},this._prev=this._current=this._goto=0,this._width=this._height=this._distance=0,this._offset=[],this.$box=this._options.container,this.$container=this._options.container.querySelector(".vux-swiper"),this.$items=this.$container.querySelectorAll(this._options.item),this.count=this.$items.length,this.realCount=this.$items.length,this._position=[],this._firstItemIndex=0,this.count)return this._init(),this._auto(),this._bind(),this._onResize(),this}return c()(t,[{key:"_auto",value:function(){var t=this;t.stop(),t._options.auto&&(t.timer=setTimeout(function(){t.next()},t._options.interval))}},{key:"updateItemWidth",value:function(){this._width=this.$box.offsetWidth||document.documentElement.offsetWidth,this._distance="horizontal"===this._options.direction?this._width:this._height}},{key:"stop",value:function(){this.timer&&clearTimeout(this.timer)}},{key:"_loop",value:function(){return this._options.loop&&this.realCount>=3}},{key:"_onResize",value:function(){var t=this;this.resizeHandler=function(){setTimeout(function(){t.updateItemWidth(),t._setOffset(),t._setTransform()},100)},window.addEventListener("orientationchange",this.resizeHandler,!1)}},{key:"_init",value:function(){this._height="auto"===this._options.height?"auto":this._options.height-0,this.updateItemWidth(),this._initPosition(),this._activate(this._current),this._setOffset(),this._setTransform(),this._loop()&&this._loopRender()}},{key:"_initPosition",value:function(){for(var t=0;t<this.realCount;t++)this._position.push(t)}},{key:"_movePosition",value:function(t){if(t>0){var e=this._position.splice(0,1);this._position.push(e[0])}else if(t<0){var i=this._position.pop();this._position.unshift(i)}}},{key:"_setOffset",value:function(){var t=this,e=t._position.indexOf(t._current);t._offset=[],f(t.$items).forEach(function(i,s){t._offset.push((s-e)*t._distance)})}},{key:"_setTransition",value:function(t){var e="none"===(t=t||this._options.duration||"none")?"none":t+"ms";f(this.$items).forEach(function(t,i){t.style.webkitTransition=e,t.style.transition=e})}},{key:"_setTransform",value:function(t){var e=this;t=t||0,f(e.$items).forEach(function(i,s){var n=e._offset[s]+t,r="translate3d("+n+"px, 0, 0)";"vertical"===e._options.direction&&(r="translate3d(0, "+n+"px, 0)"),i.style.webkitTransform=r,i.style.transform=r})}},{key:"_bind",value:function(){var t=this,e=this;e.touchstartHandler=function(t){e.stop(),e._start.x=t.changedTouches[0].pageX,e._start.y=t.changedTouches[0].pageY,e._setTransition("none")},e.touchmoveHandler=function(i){if(1!==e.count){e._move.x=i.changedTouches[0].pageX,e._move.y=i.changedTouches[0].pageY;var s=e._move.x-e._start.x,n=e._move.y-e._start.y,r=n,o=Math.abs(s)>Math.abs(n);"horizontal"===e._options.direction&&o&&(r=s),t._options.loop||t._current!==t.count-1&&0!==t._current||(r/=3),(e._options.minMovingDistance&&Math.abs(r)>=e._options.minMovingDistance||!e._options.minMovingDistance)&&o&&e._setTransform(r),o&&i.preventDefault()}},e.touchendHandler=function(t){if(1!==e.count){e._end.x=t.changedTouches[0].pageX,e._end.y=t.changedTouches[0].pageY;var i=e._end.y-e._start.y;"horizontal"===e._options.direction&&(i=e._end.x-e._start.x),0!==(i=e.getDistance(i))&&e._options.minMovingDistance&&Math.abs(i)<e._options.minMovingDistance||(i>e._options.threshold?e.move(-1):i<-e._options.threshold?e.move(1):e.move(0),e._loopRender())}},e.transitionEndHandler=function(t){e._activate(e._current);var i=e._eventHandlers.swiped;i&&i.apply(e,[e._prev%e.count,e._current%e.count]),e._auto(),e._loopRender(),t.preventDefault()},e.$container.addEventListener("touchstart",e.touchstartHandler,!1),e.$container.addEventListener("touchmove",e.touchmoveHandler,!1),e.$container.addEventListener("touchend",e.touchendHandler,!1),e.$items[1]&&e.$items[1].addEventListener("webkitTransitionEnd",e.transitionEndHandler,!1)}},{key:"_loopRender",value:function(){var t=this;t._loop()&&(0===t._offset[t._offset.length-1]?(t.$container.appendChild(t.$items[0]),t._loopEvent(1)):0===t._offset[0]&&(t.$container.insertBefore(t.$items[t.$items.length-1],t.$container.firstChild),t._loopEvent(-1)))}},{key:"_loopEvent",value:function(t){var e=this;e._itemDestoy(),e.$items=e.$container.querySelectorAll(e._options.item),e.$items[1]&&e.$items[1].addEventListener("webkitTransitionEnd",e.transitionEndHandler,!1),e._movePosition(t),e._setOffset(),e._setTransform()}},{key:"getDistance",value:function(t){return this._loop()?t:t>0&&0===this._current?0:t<0&&this._current===this.realCount-1?0:t}},{key:"_moveIndex",value:function(t){0!==t&&(this._prev=this._current,this._current+=this.realCount,this._current+=t,this._current%=this.realCount)}},{key:"_activate",value:function(t){var e=this._options.activeClass;Array.prototype.forEach.call(this.$items,function(i,s){i.classList.remove(e),t===Number(i.dataset.index)&&i.classList.add(e)})}},{key:"go",value:function(t){var e=this;return e.stop(),t=t||0,t+=this.realCount,t%=this.realCount,t=this._position.indexOf(t)-this._position.indexOf(this._current),e._moveIndex(t),e._setOffset(),e._setTransition(),e._setTransform(),e._auto(),this}},{key:"next",value:function(){return this.move(1),this}},{key:"move",value:function(t){return this.go(this._current+t),this}},{key:"on",value:function(t,e){return this._eventHandlers[t]&&console.error("[swiper] event "+t+" is already register"),"function"!=typeof e&&console.error("[swiper] parameter callback must be a function"),this._eventHandlers[t]=e,this}},{key:"_itemDestoy",value:function(){var t=this;this.$items.length&&f(this.$items).forEach(function(e){e.removeEventListener("webkitTransitionEnd",t.transitionEndHandler,!1)})}},{key:"destroy",value:function(){if(this.stop(),this._current=0,this._setTransform(0),window.removeEventListener("orientationchange",this.resizeHandler,!1),this.$container.removeEventListener("touchstart",this.touchstartHandler,!1),this.$container.removeEventListener("touchmove",this.touchmoveHandler,!1),this.$container.removeEventListener("touchend",this.touchendHandler,!1),this._itemDestoy(),this._options.loop&&2===this.count){var t=this.$container.querySelector(this._options.item+"-clone");t&&this.$container.removeChild(t),(t=this.$container.querySelector(this._options.item+"-clone"))&&this.$container.removeChild(t)}}}]),t}(),h=i("pFYg"),v=i.n(h);function p(t,e){!/^javas/.test(t)&&t&&("object"===(void 0===t?"undefined":v()(t))||e&&"string"==typeof t&&!/http/.test(t)?"object"===(void 0===t?"undefined":v()(t))&&!0===t.replace?e.replace(t):"BACK"===t?e.go(-1):e.push(t):window.location.href=t)}Array,String,Boolean,Boolean,String,String,Boolean,Boolean,Number,Number,Number,String,Number,Number,Number;var m={name:"swiper",created:function(){this.index=this.value||0,this.index&&(this.current=this.index)},mounted:function(){var t=this;this.hasTwoLoopItem(),this.$nextTick(function(){t.list&&0===t.list.length||t.render(t.index),t.xheight=t.getHeight(),t.$emit("on-get-height",t.xheight)})},methods:{hasTwoLoopItem:function(){2===this.list.length&&this.loop?this.listTwoLoopItem=this.list:this.listTwoLoopItem=[]},clickListItem:function(t){p(t.url,this.$router),this.$emit("on-click-list-item",JSON.parse(n()(t)))},buildBackgroundUrl:function(t){return t.fallbackImg?"url("+t.img+"), url("+t.fallbackImg+")":"url("+t.img+")"},render:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.swiper&&this.swiper.destroy(),this.swiper=new d({container:this.$el,direction:this.direction,auto:this.auto,loop:this.loop,interval:this.interval,threshold:this.threshold,duration:this.duration,height:this.height||this._height,minMovingDistance:this.minMovingDistance,imgList:this.imgList}).on("swiped",function(e,i){t.current=i%t.length,t.index=i%t.length}),e>0&&this.swiper.go(e)},rerender:function(){var t=this;this.$el&&!this.hasRender&&(this.hasRender=!0,this.hasTwoLoopItem(),this.$nextTick(function(){t.index=t.value||0,t.current=t.value||0,t.length=t.list.length||t.$children.length,t.destroy(),t.render(t.value)}))},destroy:function(){this.hasRender=!1,this.swiper&&this.swiper.destroy()},getHeight:function(){var t=parseInt(this.height,10);return t?this.height:t?void 0:this.aspectRatio?this.$el.offsetWidth*this.aspectRatio+"px":"180px"}},props:{list:{type:Array,default:function(){return[]}},direction:{type:String,default:"horizontal"},showDots:{type:Boolean,default:!0},showDescMask:{type:Boolean,default:!0},dotsPosition:{type:String,default:"right"},dotsClass:String,auto:Boolean,loop:Boolean,interval:{type:Number,default:3e3},threshold:{type:Number,default:50},duration:{type:Number,default:300},height:{type:String,default:"auto"},aspectRatio:Number,minMovingDistance:{type:Number,default:0},value:{type:Number,default:0}},data:function(){return{hasRender:!1,current:this.index||0,xheight:"auto",length:this.list.length,index:0,listTwoLoopItem:[]}},watch:{auto:function(t){t?this.swiper&&this.swiper._auto():this.swiper&&this.swiper.stop()},list:function(t){this.rerender()},current:function(t){this.index=t,this.$emit("on-index-change",t)},index:function(t){var e=this;t!==this.current&&this.$nextTick(function(){e.swiper&&e.swiper.go(t)}),this.$emit("input",t)},value:function(t){this.index=t}},beforeDestroy:function(){this.destroy()}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-slider"},[i("div",{staticClass:"vux-swiper",style:{height:t.xheight}},[t._t("default"),t._v(" "),t._l(t.list,function(e,s){return i("div",{staticClass:"vux-swiper-item",attrs:{"data-index":s},on:{click:function(i){t.clickListItem(e)}}},[i("a",{attrs:{href:"javascript:"}},[i("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e)}}),t._v(" "),t.showDescMask?i("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])])}),t._v(" "),t._l(t.listTwoLoopItem,function(e,s){return t.listTwoLoopItem.length>0?i("div",{staticClass:"vux-swiper-item vux-swiper-item-clone",attrs:{"data-index":s},on:{click:function(i){t.clickListItem(e)}}},[i("a",{attrs:{href:"javascript:"}},[i("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e)}}),t._v(" "),t.showDescMask?i("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])]):t._e()})],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showDots,expression:"showDots"}],class:[t.dotsClass,"vux-indicator","vux-indicator-"+t.dotsPosition]},t._l(t.length,function(e){return i("a",{attrs:{href:"javascript:"}},[i("i",{staticClass:"vux-icon-dot",class:{active:e-1===t.current}})])}))])},staticRenderFns:[]};var g=i("VU/8")(m,_,!1,function(t){i("50hQ")},null,null).exports,x={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vux-swiper-item"},[this._t("default")],2)},staticRenderFns:[]},y=i("VU/8")({name:"swiper-item",mounted:function(){var t=this;this.$nextTick(function(){t.$parent.rerender()})},beforeDestroy:function(){var t=this.$parent;this.$nextTick(function(){t.rerender()})}},x,!1,null,null,null).exports,b=i("YxJB"),C=i("3Lt7"),w=(Number,Number,Number,Boolean,String,String,Number,Number,{name:"rater",created:function(){this.currentValue=this.value},mounted:function(){this.updateStyle()},props:{min:{type:Number,default:0},max:{type:Number,default:5},value:{type:Number,default:0},disabled:Boolean,star:{type:String,default:"★"},activeColor:{type:String,default:"#fc6"},margin:{type:Number,default:2},fontSize:{type:Number,default:25}},computed:{sliceValue:function(){var t=this.currentValue.toFixed(2).split(".");return 1===t.length?[t[0],0]:t},cutIndex:function(){return 1*this.sliceValue[0]},cutPercent:function(){return 1*this.sliceValue[1]}},methods:{handleClick:function(t,e){this.disabled&&!e||(this.currentValue===t+1?(this.currentValue=t<this.min?this.min:t,this.updateStyle()):this.currentValue=t+1<this.min?this.min:t+1)},updateStyle:function(){for(var t=0;t<this.max;t++)t<=this.currentValue-1?this.$set(this.colors,t,this.activeColor):this.$set(this.colors,t,"#ccc")}},data:function(){return{colors:[],currentValue:0}},watch:{currentValue:function(t){this.updateStyle(),this.$emit("input",t)},value:function(t){this.currentValue=t}}}),S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-rater"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],staticStyle:{display:"none"},domProps:{value:t.currentValue},on:{input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}),t._v(" "),t._l(t.max,function(e){return i("a",{staticClass:"vux-rater-box",class:{"is-active":t.currentValue>e-1},style:{color:t.colors&&t.colors[e-1]?t.colors[e-1]:"#ccc",marginRight:t.margin+"px",fontSize:t.fontSize+"px",width:t.fontSize+"px",height:t.fontSize+"px",lineHeight:t.fontSize+"px"},on:{click:function(i){t.handleClick(e-1)}}},[i("span",{staticClass:"vux-rater-inner"},[i("span",{domProps:{innerHTML:t._s(t.star)}}),t.cutPercent>0&&t.cutIndex===e-1?i("span",{staticClass:"vux-rater-outer",style:{color:t.activeColor,width:t.cutPercent+"%"},domProps:{innerHTML:t._s(t.star)}}):t._e()])])})],2)},staticRenderFns:[]};var k=i("VU/8")(w,S,!1,function(t){i("fT7Y")},null,null).exports,$=i("+HhI"),O=(b.a,C.a,$.a,{data:function(){return{data4:4}},components:{Swiper:g,SwiperItem:y,Flexbox:b.a,FlexboxItem:C.a,footbar:$.a,Rater:k},methods:{showProducts:function(){this.$router.push({path:"/products"})},showPromotion:function(){this.$router.push({path:"/promotion"})}}}),E={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"h-view"},[t._m(0),t._v(" "),s("div",{staticClass:"view-culomn"},[s("div",{staticClass:"view-culomn-item item-left"},[s("div",{staticClass:"view-culomn-col"},[s("span",{staticClass:"v-btn",on:{click:t.showProducts}},[t._v("Men's wristwatch")])]),t._v(" "),s("div",{staticClass:"view-culomn-col"},[s("span",{staticClass:"v-btn",on:{click:t.showPromotion}},[t._v("Men's wristwatch")])])]),t._v(" "),t._m(1)])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("div",{staticClass:"h-swipe"},[s("swiper",{attrs:{auto:"","dots-position":"center",height:"2.7rem"}},[s("swiper-item",{staticClass:"black"},[s("flexbox",{attrs:{gutter:11}},[s("flexbox-item",[s("div",{staticClass:"flex-demo"},[s("div",{staticClass:"flex-demo-img"},[s("img",{attrs:{src:i("1u9t"),alt:""}})]),t._v(" "),s("div",{staticClass:"flex-demo-desc"},[s("div",{staticClass:"flex-demo-name"},[t._v("ABCD")]),t._v(" "),s("div",{staticClass:"flex-demo-describe"},[t._v("Design is b")]),t._v(" "),s("div",{staticClass:"flex-demo-price"},[t._v("$999")])])])]),t._v(" "),s("flexbox-item",[s("div",{staticClass:"flex-demo"},[s("div",{staticClass:"flex-demo-img"},[s("img",{attrs:{src:i("1u9t"),alt:""}})]),t._v(" "),s("div",{staticClass:"flex-demo-desc"},[s("div",{staticClass:"flex-demo-name"},[t._v("ABCD")]),t._v(" "),s("div",{staticClass:"flex-demo-describe"},[t._v("Design is b")]),t._v(" "),s("div",{staticClass:"flex-demo-price"},[t._v("$999")])])])]),t._v(" "),s("flexbox-item",[s("div",{staticClass:"flex-demo"},[s("div",{staticClass:"flex-demo-img"},[s("img",{attrs:{src:i("1u9t"),alt:""}})]),t._v(" "),s("div",{staticClass:"flex-demo-desc"},[s("div",{staticClass:"flex-demo-name"},[t._v("ABCD")]),t._v(" "),s("div",{staticClass:"flex-demo-describe"},[t._v("Design is b")]),t._v(" "),s("div",{staticClass:"flex-demo-price"},[t._v("$999")])])])])],1)],1),t._v(" "),s("swiper-item",{staticClass:"black"},[s("flexbox",{attrs:{gutter:11}},[s("flexbox-item",[s("div",{staticClass:"flex-demo"},[s("div",{staticClass:"flex-demo-img"},[s("img",{attrs:{src:i("1u9t"),alt:""}})]),t._v(" "),s("div",{staticClass:"flex-demo-desc"},[s("div",{staticClass:"flex-demo-name"},[t._v("ABCD")]),t._v(" "),s("div",{staticClass:"flex-demo-describe"},[t._v("Design is b")]),t._v(" "),s("div",{staticClass:"flex-demo-price"},[t._v("$999")])])])]),t._v(" "),s("flexbox-item",[s("div",{staticClass:"flex-demo"},[s("div",{staticClass:"flex-demo-img"},[s("img",{attrs:{src:i("1u9t"),alt:""}})]),t._v(" "),s("div",{staticClass:"flex-demo-desc"},[s("div",{staticClass:"flex-demo-name"},[t._v("ABCD")]),t._v(" "),s("div",{staticClass:"flex-demo-describe"},[t._v("Design is b")]),t._v(" "),s("div",{staticClass:"flex-demo-price"},[t._v("$999")])])])]),t._v(" "),s("flexbox-item",[s("div",{staticClass:"flex-demo"},[s("div",{staticClass:"flex-demo-img"},[s("img",{attrs:{src:i("1u9t"),alt:""}})]),t._v(" "),s("div",{staticClass:"flex-demo-desc"},[s("div",{staticClass:"flex-demo-name"},[t._v("ABCD")]),t._v(" "),s("div",{staticClass:"flex-demo-describe"},[t._v("Design is b")]),t._v(" "),s("div",{staticClass:"flex-demo-price"},[t._v("$999")])])])])],1)],1),t._v(" "),s("swiper-item",{staticClass:"black"},[s("flexbox",{attrs:{gutter:11}},[s("flexbox-item",[s("div",{staticClass:"flex-demo"},[s("div",{staticClass:"flex-demo-img"},[s("img",{attrs:{src:i("1u9t"),alt:""}})]),t._v(" "),s("div",{staticClass:"flex-demo-desc"},[s("div",{staticClass:"flex-demo-name"},[t._v("ABCD")]),t._v(" "),s("div",{staticClass:"flex-demo-describe"},[t._v("Design is b")]),t._v(" "),s("div",{staticClass:"flex-demo-price"},[t._v("$999")])])])]),t._v(" "),s("flexbox-item",[s("div",{staticClass:"flex-demo"},[s("div",{staticClass:"flex-demo-img"},[s("img",{attrs:{src:i("1u9t"),alt:""}})]),t._v(" "),s("div",{staticClass:"flex-demo-desc"},[s("div",{staticClass:"flex-demo-name"},[t._v("ABCD")]),t._v(" "),s("div",{staticClass:"flex-demo-describe"},[t._v("Design is b")]),t._v(" "),s("div",{staticClass:"flex-demo-price"},[t._v("$999")])])])]),t._v(" "),s("flexbox-item",[s("div",{staticClass:"flex-demo"},[s("div",{staticClass:"flex-demo-img"},[s("img",{attrs:{src:i("1u9t"),alt:""}})]),t._v(" "),s("div",{staticClass:"flex-demo-desc"},[s("div",{staticClass:"flex-demo-name"},[t._v("ABCD")]),t._v(" "),s("div",{staticClass:"flex-demo-describe"},[t._v("Design is b")]),t._v(" "),s("div",{staticClass:"flex-demo-price"},[t._v("$999")])])])])],1)],1)],1)],1),t._v(" "),t._m(4),t._v(" "),s("div",{staticClass:"h-grid"},[t._m(5),t._v(" "),s("section",[s("flexbox",{attrs:{gutter:0,wrap:"wrap"}},[s("flexbox-item",{attrs:{span:.5}},[s("div",{staticClass:"gird-item p-left"},[s("div",{staticClass:"gird-item-cell clearfix"},[s("div",{staticClass:"cell-left"},[s("div",{staticClass:"cell-p"},[s("span",{staticClass:"name"},[t._v("ABCD")]),t._v(" "),s("span",{staticClass:"price"},[t._v("$999")])]),t._v(" "),s("div",{staticClass:"cell-rate"},[s("rater",{attrs:{"font-size":12,margin:1,disabled:""},model:{value:t.data4,callback:function(e){t.data4=e},expression:"data4"}})],1)]),t._v(" "),s("div",{staticClass:"cell-right"},[s("img",{attrs:{src:i("Wmw1"),alt:""}})])])])]),t._v(" "),s("flexbox-item",{attrs:{span:.5}},[s("div",{staticClass:"gird-item p-right"},[s("div",{staticClass:"gird-item-cell clearfix"},[s("div",{staticClass:"cell-left"},[s("div",{staticClass:"cell-p"},[s("span",{staticClass:"name"},[t._v("ABCD")]),t._v(" "),s("span",{staticClass:"price"},[t._v("$999")])]),t._v(" "),s("div",{staticClass:"cell-rate"},[s("rater",{attrs:{"font-size":12,margin:1,disabled:""},model:{value:t.data4,callback:function(e){t.data4=e},expression:"data4"}})],1)]),t._v(" "),s("div",{staticClass:"cell-right"},[s("img",{attrs:{src:i("Wmw1"),alt:""}})])])])]),t._v(" "),s("flexbox-item",{attrs:{span:.5}},[s("div",{staticClass:"gird-item p-left"},[s("div",{staticClass:"gird-item-cell clearfix"},[s("div",{staticClass:"cell-left"},[s("div",{staticClass:"cell-p"},[s("span",{staticClass:"name"},[t._v("ABCD")]),t._v(" "),s("span",{staticClass:"price"},[t._v("$999")])]),t._v(" "),s("div",{staticClass:"cell-rate"},[s("rater",{attrs:{"font-size":12,margin:1,disabled:""},model:{value:t.data4,callback:function(e){t.data4=e},expression:"data4"}})],1)]),t._v(" "),s("div",{staticClass:"cell-right"},[s("img",{attrs:{src:i("Wmw1"),alt:""}})])])])]),t._v(" "),s("flexbox-item",{attrs:{span:.5}},[s("div",{staticClass:"gird-item p-right"},[s("div",{staticClass:"gird-item-cell clearfix"},[s("div",{staticClass:"cell-left"},[s("div",{staticClass:"cell-p"},[s("span",{staticClass:"name"},[t._v("ABCD")]),t._v(" "),s("span",{staticClass:"price"},[t._v("$999")])]),t._v(" "),s("div",{staticClass:"cell-rate"},[s("rater",{attrs:{"font-size":12,margin:1,disabled:""},model:{value:t.data4,callback:function(e){t.data4=e},expression:"data4"}})],1)]),t._v(" "),s("div",{staticClass:"cell-right"},[s("img",{attrs:{src:i("Wmw1"),alt:""}})])])])])],1)],1)]),t._v(" "),t._m(6),t._v(" "),s("footbar")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"view-img"},[e("img",{attrs:{src:i("zXML"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"view-culomn-item item-right"},[e("div",{staticClass:"view-culomn-col"},[e("span",{staticClass:"v-btn"},[this._v("Men's wristwatch")])]),this._v(" "),e("div",{staticClass:"view-culomn-col"},[e("span",{staticClass:"v-btn"},[this._v("Men's wristwatch")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"h-sale"},[e("img",{attrs:{src:i("P5kY"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"h-show-all"},[e("img",{attrs:{src:i("J4Hj"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"h-preview"},[e("img",{attrs:{src:i("qEVw"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"g-header"},[e("img",{attrs:{src:i("yHUj"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"h-section"},[e("img",{attrs:{src:i("uHCU"),alt:""}})])}]};var D=i("VU/8")(O,E,!1,function(t){i("rUIv")},"data-v-0db7eac2",null);e.default=D.exports},Kh4W:function(t,e,i){e.f=i("dSzd")},LKZe:function(t,e,i){var s=i("NpIQ"),n=i("X8DO"),r=i("TcQ7"),o=i("MmMw"),a=i("D2L2"),c=i("SfB7"),l=Object.getOwnPropertyDescriptor;e.f=i("+E39")?l:function(t,e){if(t=r(t),e=o(e,!0),c)try{return l(t,e)}catch(t){}if(a(t,e))return n(!s.f.call(t,e),t[e])}},M6a0:function(t,e){},O4g8:function(t,e){t.exports=!0},OYls:function(t,e,i){i("crlp")("asyncIterator")},P5kY:function(t,e,i){t.exports=i.p+"static/img/sale.6998585.png"},PzxK:function(t,e,i){var s=i("D2L2"),n=i("sB3e"),r=i("ax3d")("IE_PROTO"),o=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=n(t),s(t,r)?t[r]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?o:null}},"QWe/":function(t,e,i){i("crlp")("observable")},RPLV:function(t,e,i){var s=i("7KvD").document;t.exports=s&&s.documentElement},Rrel:function(t,e,i){var s=i("TcQ7"),n=i("n0T6").f,r={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return o&&"[object Window]"==r.call(t)?function(t){try{return n(t)}catch(t){return o.slice()}}(t):n(s(t))}},Wmw1:function(t,e,i){t.exports=i.p+"static/img/item.016abdd.png"},Xc4G:function(t,e,i){var s=i("lktj"),n=i("1kS7"),r=i("NpIQ");t.exports=function(t){var e=s(t),i=n.f;if(i)for(var o,a=i(t),c=r.f,l=0;a.length>l;)c.call(t,o=a[l++])&&e.push(o);return e}},Yobk:function(t,e,i){var s=i("77Pl"),n=i("qio6"),r=i("xnc9"),o=i("ax3d")("IE_PROTO"),a=function(){},c=function(){var t,e=i("ON07")("iframe"),s=r.length;for(e.style.display="none",i("RPLV").appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;s--;)delete c.prototype[r[s]];return c()};t.exports=Object.create||function(t,e){var i;return null!==t?(a.prototype=s(t),i=new a,a.prototype=null,i[o]=t):i=c(),void 0===e?i:n(i,e)}},Zrlr:function(t,e,i){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},Zzip:function(t,e,i){t.exports={default:i("/n6Q"),__esModule:!0}},crlp:function(t,e,i){var s=i("7KvD"),n=i("FeBl"),r=i("O4g8"),o=i("Kh4W"),a=i("evD5").f;t.exports=function(t){var e=n.Symbol||(n.Symbol=r?{}:s.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:o.f(t)})}},dSzd:function(t,e,i){var s=i("e8AB")("wks"),n=i("3Eo+"),r=i("7KvD").Symbol,o="function"==typeof r;(t.exports=function(t){return s[t]||(s[t]=o&&r[t]||(o?r:n)("Symbol."+t))}).store=s},e6n0:function(t,e,i){var s=i("evD5").f,n=i("D2L2"),r=i("dSzd")("toStringTag");t.exports=function(t,e,i){t&&!n(t=i?t:t.prototype,r)&&s(t,r,{configurable:!0,value:e})}},fT7Y:function(t,e){},fWfb:function(t,e,i){"use strict";var s=i("7KvD"),n=i("D2L2"),r=i("+E39"),o=i("kM2E"),a=i("880/"),c=i("06OY").KEY,l=i("S82l"),u=i("e8AB"),f=i("e6n0"),d=i("3Eo+"),h=i("dSzd"),v=i("Kh4W"),p=i("crlp"),m=i("Xc4G"),_=i("7UMu"),g=i("77Pl"),x=i("EqjI"),y=i("TcQ7"),b=i("MmMw"),C=i("X8DO"),w=i("Yobk"),S=i("Rrel"),k=i("LKZe"),$=i("evD5"),O=i("lktj"),E=k.f,D=$.f,T=S.f,L=s.Symbol,M=s.JSON,j=M&&M.stringify,P=h("_hidden"),I=h("toPrimitive"),N={}.propertyIsEnumerable,B=u("symbol-registry"),A=u("symbols"),H=u("op-symbols"),V=Object.prototype,z="function"==typeof L,R=s.QObject,Q=!R||!R.prototype||!R.prototype.findChild,F=r&&l(function(){return 7!=w(D({},"a",{get:function(){return D(this,"a",{value:7}).a}})).a})?function(t,e,i){var s=E(V,e);s&&delete V[e],D(t,e,i),s&&t!==V&&D(V,e,s)}:D,W=function(t){var e=A[t]=w(L.prototype);return e._k=t,e},Y=z&&"symbol"==typeof L.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof L},K=function(t,e,i){return t===V&&K(H,e,i),g(t),e=b(e,!0),g(i),n(A,e)?(i.enumerable?(n(t,P)&&t[P][e]&&(t[P][e]=!1),i=w(i,{enumerable:C(0,!1)})):(n(t,P)||D(t,P,C(1,{})),t[P][e]=!0),F(t,e,i)):D(t,e,i)},U=function(t,e){g(t);for(var i,s=m(e=y(e)),n=0,r=s.length;r>n;)K(t,i=s[n++],e[i]);return t},J=function(t){var e=N.call(this,t=b(t,!0));return!(this===V&&n(A,t)&&!n(H,t))&&(!(e||!n(this,t)||!n(A,t)||n(this,P)&&this[P][t])||e)},q=function(t,e){if(t=y(t),e=b(e,!0),t!==V||!n(A,e)||n(H,e)){var i=E(t,e);return!i||!n(A,e)||n(t,P)&&t[P][e]||(i.enumerable=!0),i}},G=function(t){for(var e,i=T(y(t)),s=[],r=0;i.length>r;)n(A,e=i[r++])||e==P||e==c||s.push(e);return s},X=function(t){for(var e,i=t===V,s=T(i?H:y(t)),r=[],o=0;s.length>o;)!n(A,e=s[o++])||i&&!n(V,e)||r.push(A[e]);return r};z||(a((L=function(){if(this instanceof L)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(i){this===V&&e.call(H,i),n(this,P)&&n(this[P],t)&&(this[P][t]=!1),F(this,t,C(1,i))};return r&&Q&&F(V,t,{configurable:!0,set:e}),W(t)}).prototype,"toString",function(){return this._k}),k.f=q,$.f=K,i("n0T6").f=S.f=G,i("NpIQ").f=J,i("1kS7").f=X,r&&!i("O4g8")&&a(V,"propertyIsEnumerable",J,!0),v.f=function(t){return W(h(t))}),o(o.G+o.W+o.F*!z,{Symbol:L});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Z.length>tt;)h(Z[tt++]);for(var et=O(h.store),it=0;et.length>it;)p(et[it++]);o(o.S+o.F*!z,"Symbol",{for:function(t){return n(B,t+="")?B[t]:B[t]=L(t)},keyFor:function(t){if(!Y(t))throw TypeError(t+" is not a symbol!");for(var e in B)if(B[e]===t)return e},useSetter:function(){Q=!0},useSimple:function(){Q=!1}}),o(o.S+o.F*!z,"Object",{create:function(t,e){return void 0===e?w(t):U(w(t),e)},defineProperty:K,defineProperties:U,getOwnPropertyDescriptor:q,getOwnPropertyNames:G,getOwnPropertySymbols:X}),M&&o(o.S+o.F*(!z||l(function(){var t=L();return"[null]"!=j([t])||"{}"!=j({a:t})||"{}"!=j(Object(t))})),"JSON",{stringify:function(t){for(var e,i,s=[t],n=1;arguments.length>n;)s.push(arguments[n++]);if(i=e=s[1],(x(e)||void 0!==t)&&!Y(t))return _(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!Y(e))return e}),s[1]=e,j.apply(M,s)}}),L.prototype[I]||i("hJx8")(L.prototype,I,L.prototype.valueOf),f(L,"Symbol"),f(Math,"Math",!0),f(s.JSON,"JSON",!0)},h65t:function(t,e,i){var s=i("UuGF"),n=i("52gC");t.exports=function(t){return function(e,i){var r,o,a=String(n(e)),c=s(i),l=a.length;return c<0||c>=l?t?"":void 0:(r=a.charCodeAt(c))<55296||r>56319||c+1===l||(o=a.charCodeAt(c+1))<56320||o>57343?t?a.charAt(c):r:t?a.slice(c,c+2):o-56320+(r-55296<<10)+65536}}},mvHQ:function(t,e,i){t.exports={default:i("qkKv"),__esModule:!0}},n0T6:function(t,e,i){var s=i("Ibhu"),n=i("xnc9").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return s(t,n)}},pFYg:function(t,e,i){"use strict";e.__esModule=!0;var s=o(i("Zzip")),n=o(i("5QVw")),r="function"==typeof n.default&&"symbol"==typeof s.default?function(t){return typeof t}:function(t){return t&&"function"==typeof n.default&&t.constructor===n.default&&t!==n.default.prototype?"symbol":typeof t};function o(t){return t&&t.__esModule?t:{default:t}}e.default="function"==typeof n.default&&"symbol"===r(s.default)?function(t){return void 0===t?"undefined":r(t)}:function(t){return t&&"function"==typeof n.default&&t.constructor===n.default&&t!==n.default.prototype?"symbol":void 0===t?"undefined":r(t)}},qEVw:function(t,e,i){t.exports=i.p+"static/img/preview.b36bb59.jpg"},qio6:function(t,e,i){var s=i("evD5"),n=i("77Pl"),r=i("lktj");t.exports=i("+E39")?Object.defineProperties:function(t,e){n(t);for(var i,o=r(e),a=o.length,c=0;a>c;)s.f(t,i=o[c++],e[i]);return t}},qkKv:function(t,e,i){var s=i("FeBl"),n=s.JSON||(s.JSON={stringify:JSON.stringify});t.exports=function(t){return n.stringify.apply(n,arguments)}},rUIv:function(t,e){},uHCU:function(t,e,i){t.exports=i.p+"static/img/section.52a05e8.png"},"vIB/":function(t,e,i){"use strict";var s=i("O4g8"),n=i("kM2E"),r=i("880/"),o=i("hJx8"),a=i("D2L2"),c=i("/bQp"),l=i("94VQ"),u=i("e6n0"),f=i("PzxK"),d=i("dSzd")("iterator"),h=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,e,i,p,m,_,g){l(i,e,p);var x,y,b,C=function(t){if(!h&&t in $)return $[t];switch(t){case"keys":case"values":return function(){return new i(this,t)}}return function(){return new i(this,t)}},w=e+" Iterator",S="values"==m,k=!1,$=t.prototype,O=$[d]||$["@@iterator"]||m&&$[m],E=!h&&O||C(m),D=m?S?C("entries"):E:void 0,T="Array"==e&&$.entries||O;if(T&&(b=f(T.call(new t)))!==Object.prototype&&b.next&&(u(b,w,!0),s||a(b,d)||o(b,d,v)),S&&O&&"values"!==O.name&&(k=!0,E=function(){return O.call(this)}),s&&!g||!h&&!k&&$[d]||o($,d,E),c[e]=E,c[w]=v,m)if(x={values:S?E:C("values"),keys:_?E:C("keys"),entries:D},g)for(y in x)y in $||r($,y,x[y]);else n(n.P+n.F*(h||k),e,x);return x}},wxAW:function(t,e,i){"use strict";e.__esModule=!0;var s,n=i("C4MV"),r=(s=n)&&s.__esModule?s:{default:s};e.default=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),(0,r.default)(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}()},xGkn:function(t,e,i){"use strict";var s=i("4mcu"),n=i("EGZi"),r=i("/bQp"),o=i("TcQ7");t.exports=i("vIB/")(Array,"Array",function(t,e){this._t=o(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,i=this._i++;return!t||i>=t.length?(this._t=void 0,n(1)):n(0,"keys"==e?i:"values"==e?t[i]:[i,t[i]])},"values"),r.Arguments=r.Array,s("keys"),s("values"),s("entries")},yHUj:function(t,e,i){t.exports=i.p+"static/img/title.2879912.png"},zQR9:function(t,e,i){"use strict";var s=i("h65t")(!0);i("vIB/")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,i=this._i;return i>=e.length?{value:void 0,done:!0}:(t=s(e,i),this._i+=t.length,{value:t,done:!1})})},zXML:function(t,e,i){t.exports=i.p+"static/img/mian-bg.a6c2d4f.jpg"}});