webpackJsonp([0],{"+HhI":function(t,e,i){"use strict";var n={render:function(){var t=this.$createElement;return(this._self._c||t)("footer",{staticClass:"c-footer"},[this._v("\n  CLOCKWISE\n")])},staticRenderFns:[]};var r=i("VU/8")({},n,!1,function(t){i("T9gA")},"data-v-2e94c1ab",null);e.a=r.exports},"3Lt7":function(t,e,i){"use strict";Number,String,Number,String;var n=["-moz-box-","-webkit-box-",""],r={name:"flexbox-item",props:{span:[Number,String],order:[Number,String]},beforeMount:function(){this.bodyWidth=document.documentElement.offsetWidth},methods:{buildWidth:function(t){return"number"==typeof t?t<1?t:t/12:"string"==typeof t?t.replace("px","")/this.bodyWidth:void 0}},computed:{style:function(){var t={},e="horizontal"===this.$parent.orient?"marginLeft":"marginTop";if(1*this.$parent.gutter!=0&&(t[e]=this.$parent.gutter+"px"),this.span)for(var i=0;i<n.length;i++)t[n[i]+"flex"]="0 0 "+100*this.buildWidth(this.span)+"%";return void 0!==this.order&&(t.order=this.order),t}},data:function(){return{bodyWidth:0}}},s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vux-flexbox-item",style:this.style},[this._t("default")],2)},staticRenderFns:[]},o=i("VU/8")(r,s,!1,null,null,null);e.a=o.exports},"3kXs":function(t,e){},T9gA:function(t,e){},YxJB:function(t,e,i){"use strict";Number,String,String,String,String,String;var n={name:"flexbox",props:{gutter:{type:Number,default:8},orient:{type:String,default:"horizontal"},justify:String,align:String,wrap:String,direction:String},computed:{styles:function(){var t={"justify-content":this.justify,"-webkit-justify-content":this.justify,"align-items":this.align,"-webkit-align-items":this.align,"flex-wrap":this.wrap,"-webkit-flex-wrap":this.wrap,"flex-direction":this.direction,"-webkit-flex-direction":this.direction};return t}}},r={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vux-flexbox",class:{"vux-flex-col":"vertical"===this.orient,"vux-flex-row":"horizontal"===this.orient},style:this.styles},[this._t("default")],2)},staticRenderFns:[]};var s=i("VU/8")(n,r,!1,function(t){i("3kXs")},null,null);e.a=s.exports}});