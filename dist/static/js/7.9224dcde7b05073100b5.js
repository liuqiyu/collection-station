webpackJsonp([7],{"9pJy":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("YxJB"),i=s("3Lt7"),r=s("+HhI"),n=(a.a,i.a,r.a,{components:{Flexbox:a.a,FlexboxItem:i.a,footbar:r.a},data:function(){return{proList:[1,2,3,4,5,6,7,8,9,10]}},mounted:function(){this.getData()},methods:{getData:function(){this.proList.length%2==0?this.$refs.proList.classList.add("is-even"):this.$refs.proList.classList.remove("is-even")}}}),o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"silver"},[s("div",{staticClass:"title"},[t._v("全部商品")]),t._v(" "),s("div",{ref:"proList",staticClass:"pro-list"},[s("flexbox",{attrs:{gutter:0,wrap:"wrap"}},t._l(t.proList,function(e,a){return s("flexbox-item",{key:a,attrs:{span:.5}},[s("div",{staticClass:"list-item"},[t._v(t._s(e))])])}))],1),t._v(" "),s("footbar")],1)},staticRenderFns:[]};var l=s("VU/8")(n,o,!1,function(t){s("eGQD")},"data-v-7e08d94e",null);e.default=l.exports},eGQD:function(t,e){}});