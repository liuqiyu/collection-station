webpackJsonp([2],{"1MFX":function(t,e){},Cdx3:function(t,e,s){var i=s("sB3e"),r=s("lktj");s("uqUo")("keys",function(){return function(t){return r(i(t))}})},HdTe:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("fZjL"),r=s.n(i),n=/\s+/;function a(){}a.prototype.on=function(t,e,s){var i,r;if(!e)return this;for(i=this.__events||(this.__events={}),t=t.split(n);r=t.shift();)(i[r]||(i[r]=[])).push(e,s);return this},a.prototype.once=function(t,e,s){var i=this;return this.on(t,function r(){i.off(t,r),e.apply(s||i,arguments)},s)},a.prototype.off=function(t,e,s){var i,r,a,c;if(!(i=this.__events))return this;if(!(t||e||s))return delete this.__events,this;for(t=t?t.split(n):o(i);r=t.shift();)if(a=i[r])if(e||s)for(c=a.length-2;c>=0;c-=2)e&&a[c]!==e||s&&a[c+1]!==s||a.splice(c,2);else delete i[r];return this},a.prototype.trigger=function(t){var e,s,i,r,a,o,l=[],h=!0;if(!(e=this.__events))return this;for(t=t.split(n),a=1,o=arguments.length;a<o;a++)l[a-1]=arguments[a];for(;s=t.shift();)(i=e.all)&&(i=i.slice()),(r=e[s])&&(r=r.slice()),"all"!==s&&(h=c(r,l,this)&&h),h=c(i,[s].concat(l),this)&&h;return h},a.prototype.emit=a.prototype.trigger;var o=r.a;function c(t,e,s){var i=!0;if(t){var r=0,n=t.length,a=e[0],o=e[1],c=e[2];switch(e.length){case 0:for(;r<n;r+=2)i=!1!==t[r].call(t[r+1]||s)&&i;break;case 1:for(;r<n;r+=2)i=!1!==t[r].call(t[r+1]||s,a)&&i;break;case 2:for(;r<n;r+=2)i=!1!==t[r].call(t[r+1]||s,a,o)&&i;break;case 3:for(;r<n;r+=2)i=!1!==t[r].call(t[r+1]||s,a,o,c)&&i;break;default:for(;r<n;r+=2)i=!1!==t[r].apply(t[r+1]||s,e)&&i}}return i}o||(o=function(t){var e=[];for(var s in t)t.hasOwnProperty(s)&&e.push(s);return e}),a.mixTo=function(t){var e,s=a.prototype;if(e=t,"[object Function]"===Object.prototype.toString.call(e))for(var i in s)s.hasOwnProperty(i)&&(t.prototype[i]=s[i]);else{var r=new a;for(var n in s)s.hasOwnProperty(n)&&o(n)}function o(e){t[e]=function(){return s[e].apply(r,Array.prototype.slice.call(arguments)),this}}};var l=a,h=[],f=[];f.push(/^[0-9]*$/.source),f.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),f.push(/[0-9]{4}([/-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),f=new RegExp(f.join("|"));var u={Y:"years",m:"months",w:"weeks",D:"days",H:"hours",M:"minutes",S:"seconds"};function p(t,e){var s="s",i="";return t&&(1===(t=t.replace(/(:||\s)/gi,"").split(/,/)).length?s=t[0]:(i=t[0],s=t[1])),1===Math.abs(e)?i:s}var v=function(t,e){e=e||{},this.PRECISION=e.precision||100,this.interval=null,this.offset={},this.instanceNumber=h.length,h.push(this),this.setFinalDate(t)};l.mixTo(v);var _=v.prototype,m={start:function(){null!==this.interval&&clearInterval(this.interval);var t=this;return this.update(),this.interval=setInterval(function(){t.update()},this.PRECISION),this},stop:function(){return clearInterval(this.interval),this.interval=null,this._dispatchEvent("stoped"),this},toggle:function(){return this.interval?this.stop():this.start(),this},pause:function(){return this.stop()},resume:function(){return this.start()},remove:function(){this.stop(),h[this.instanceNumber]=null},setFinalDate:function(t){return this.finalDate=function(t){if(t instanceof Date)return t;if(String(t).match(f))return String(t).match(/^[0-9]*$/)&&(t=Number(t)),String(t).match(/-/)&&(t=String(t).replace(/-/g,"/")),new Date(t);throw new Error("Couldn't cast `"+t+"` to a date object.")}(t),this},getOffset:function(){return this.totalSecsLeft=this.finalDate.getTime()-(new Date).getTime(),this.totalSecsLeft=Math.ceil(this.totalSecsLeft/1e3),this.totalSecsLeft=this.totalSecsLeft<0?0:this.totalSecsLeft,{seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),months:Math.floor(this.totalSecsLeft/60/60/24/30),years:Math.floor(this.totalSecsLeft/60/60/24/365)}},update:function(){this.offset=this.getOffset();for(var t,e=["days","hours","minutes","seconds"],s=0;s<e.length;s++)for(var i=e[s],r=(t=this.offset[i],(t=(1===(t+="").length?"0"+t:t)+"").split("")),n=0;n<r.length;n++)this.offset[i+"_"+(n+1)]=r[n];return 0===this.totalSecsLeft?(this.stop(),this._dispatchEvent("finish")):this._dispatchEvent("update"),this},_dispatchEvent:function(t){var e,s={};s.finalDate=this.finalDate,s.offset=this.offset,s.strftime=(e=this.offset,function(t){var s,i,r=t.match(/%(-|!)?[A-Z]{1}(:[^]+)?/gi);if(r)for(var n=0,a=r.length;n<a;++n){var o=r[n].match(/%(-|!)?([a-zA-Z]{1})(:[^]+)?/),c=(s=o[0],i=s.toString().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1"),new RegExp(i)),l=o[1]||"",h=o[3]||"",f=null;o=o[2],u.hasOwnProperty(o)&&(f=u[o],f=Number(e[f])),null!==f&&("!"===l&&(f=p(h,f)),""===l&&f<10&&(f="0"+f.toString()),t=t.replace(c,f.toString()))}return t=(t=t.replace("%_M1",e.minutes_1).replace("%_M2",e.minutes_2).replace("%_S1",e.seconds_1).replace("%_S2",e.seconds_2).replace("%_S3",e.seconds_3).replace("%_H1",e.hours_1).replace("%_H2",e.hours_2).replace("%_H3",e.hours_3).replace("%_D1",e.days_1).replace("%_D2",e.days_2).replace("%_D3",e.days_3)).replace(/%%/,"%")}),this.emit(t,s),this.emit("tick",s)}};for(var d in m)_[d]=m[d];var S=v,g="%D 天 %H 小时 %M 分 %S 秒";g="%D 天 %H 小时 %M 分 %S 秒";String,Number,String;var y="%D 天 %H 小时 %M 分 %S 秒";y="%D 天 %H 小时 %M 分 %S 秒";var k={name:"clocker",mounted:function(){var t=this;this.$nextTick(function(){t.slot=t.$el.querySelector(".vux-clocker-tpl"),t.slotString=t.slot.innerHTML,""!==t.slotString&&(t.showTimeString=!1),t.render()})},methods:{render:function(){var t=this;this.time&&(this.clocker=new S(this.time).on("tick",function(e){t.update(e),t.$emit("on-tick",e)}).on("finish",function(){t.timeString="00:00:00",t.$emit("on-finish")}).start())},update:function(t){if(this.showTimeString)this.timeString=t.strftime(this.format);else{var e=t.strftime(this.slotString);e!==this.cacheSlotString&&(this.slot.innerHTML=this.cacheSlotString=e)}}},props:{time:[String,Number],format:{type:String,default:y}},watch:{time:function(){this.clocker&&this.clocker.remove(),this.render()}},data:function(){return{showTimeString:!0,timeString:"",slotString:"",cacheSlotString:""}},beforeDestroy:function(){this.clocker&&(this.clocker.remove(),this.clocker=null)}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{display:"inline-block"}},[this.showTimeString?e("span",[this._v(this._s(this.timeString))]):this._e(),this._v(" "),e("div",{staticClass:"vux-clocker-tpl"},[this._t("default")],2)])},staticRenderFns:[]},C=s("VU/8")(k,b,!1,null,null,null).exports,M=s("+HhI"),w=(M.a,{components:{Clocker:C,footbar:M.a},created:function(){var t=this;setTimeout(function(){t.time1="2018-08-13 22:54"},5e3)},data:function(){return{time1:"2018-07-13 21:54"}}}),D={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"slide"},[t._v("江南皮革厂倒闭了")]),t._v(" "),s("div",{staticClass:"cloker"},[s("span",{staticClass:"label"},[t._v("倒计时：")]),t._v(" "),s("clocker",{attrs:{time:"2018-08-08"}},[s("span",{staticClass:"day"},[t._v("%_H1")]),t._v(" "),s("span",{staticClass:"day"},[t._v("%_H2")]),t._v("：\n      "),s("span",{staticClass:"day"},[t._v("%_M1")]),t._v(" "),s("span",{staticClass:"day"},[t._v("%_M2")]),t._v("：\n      "),s("span",{staticClass:"day"},[t._v("%_S1")]),t._v(" "),s("span",{staticClass:"day"},[t._v("%_S2")])])],1),t._v(" "),t._m(0),t._v(" "),s("footbar")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"promo-list"},[e("div",{staticClass:"promo-item"}),this._v(" "),e("div",{staticClass:"promo-item"}),this._v(" "),e("div",{staticClass:"promo-item"}),this._v(" "),e("div",{staticClass:"promo-item"}),this._v(" "),e("div",{staticClass:"promo-item"})])}]};var L=s("VU/8")(w,D,!1,function(t){s("1MFX")},"data-v-4e03e186",null);e.default=L.exports},fZjL:function(t,e,s){t.exports={default:s("jFbC"),__esModule:!0}},jFbC:function(t,e,s){s("Cdx3"),t.exports=s("FeBl").Object.keys},uqUo:function(t,e,s){var i=s("kM2E"),r=s("FeBl"),n=s("S82l");t.exports=function(t,e){var s=(r.Object||{})[t]||Object[t],a={};a[t]=e(s),i(i.S+i.F*n(function(){s(1)}),"Object",a)}}});