(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["tuniao-ui/components/tn-button/tn-button"],{140:function(t,e,n){"use strict";n.r(e);var i=n(141),o=n(143);for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n(145);var a,d=n(11),l=Object(d["default"])(o["default"],i["render"],i["staticRenderFns"],!1,null,"17fe1570",null,!1,i["components"],a);l.options.__file="tuniao-ui/components/tn-button/tn-button.vue",e["default"]=l.exports},141:function(t,e,n){"use strict";n.r(e);var i=n(142);n.d(e,"render",(function(){return i["render"]})),n.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(e,"components",(function(){return i["components"]}))},142:function(t,e,n){"use strict";var i;n.r(e),n.d(e,"render",(function(){return o})),n.d(e,"staticRenderFns",(function(){return a})),n.d(e,"recyclableRender",(function(){return r})),n.d(e,"components",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__get_style([t.buttonStyle]));t.$mp.data=Object.assign({},{$root:{s0:n}})},r=!1,a=[];o._withStripped=!0},143:function(t,e,n){"use strict";n.r(e);var i=n(144),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},144:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n(123));function o(t){return t&&t.__esModule?t:{default:t}}var r={mixins:[i.default],name:"tn-button",behaviors:["wx://form-field-button"],props:{index:{type:[Number,String],default:0},shape:{type:String,default:"default"},shadow:{type:Boolean,default:!1},width:{type:String,default:"auto"},height:{type:String,default:""},size:{type:String,default:""},fontBold:{type:Boolean,default:!1},padding:{type:String,default:"0 30rpx"},margin:{type:String,default:""},plain:{type:Boolean,default:!1},border:{type:Boolean,default:!0},borderBold:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},formType:{type:String,default:""},openType:{type:String,default:""},blockRepeatClick:{type:Boolean,default:!1}},computed:{buttonClass:function(){var t="";switch(this.shape){case"icon":case"round":t+=" tn-round";break}if(this.shadow)if(""!==this.backgroundColorClass&&-1!=this.backgroundColorClass.indexOf("tn-bg")){var e=this.backgroundColor.slice(this.backgroundColor.lastIndexOf("-")+1);t+=" tn-shadow-".concat(e)}else t+=" tn-shadow-blur";if(this.fontBold&&(t+=" tn-text-bold"),this.plain&&(t+=" tn-btn--plain",this.border&&(t+=" tn-border-solid",this.borderBold&&(t+=" tn-bold-border"),""!==this.backgroundColor&&this.backgroundColor.includes("tn-bg")))){var n=this.backgroundColor.slice(this.backgroundColor.lastIndexOf("-")+1);t+=" tn-border-".concat(n)}return t},buttonStyle:function(){var t={};switch(this.size){case"sm":t.padding="0 20rpx",t.fontSize="22rpx",t.height=this.height||"48rpx";break;case"lg":t.padding="0 40rpx",t.fontSize="32rpx",t.height=this.height||"80rpx";break;default:t.padding="0 30rpx",t.fontSize="28rpx",t.height=this.height||"64rpx"}return this.padding&&(t.padding=this.padding),this.margin&&(t.margin=this.margin),this.fontSize&&(t.fontSize=this.fontSize+this.fontUnit),t.width="icon"===this.shape?t.height:this.width,t.padding="icon"===this.shape?"0":t.padding,this.fontColorStyle&&(t.color=this.fontColorStyle),this.backgroundColorClass||(this.plain?t.borderColor=this.backgroundColorStyle||"#080808":t.backgroundColor=this.backgroundColorStyle||"#FFFFFF"),this.shadow&&!this.backgroundColorClass&&(-1!=this.backgroundColorStyle.indexOf("#")?t.boxShadow="6rpx 6rpx 8rpx ".concat(this.backgroundColorStyle||"#000000","10"):-1==this.backgroundColorStyle.indexOf("rgb")&&-1==this.backgroundColorStyle.indexOf("rgba")&&this.backgroundColorStyle||(t.boxShadow="6rpx 6rpx 8rpx ".concat(this.backgroundColorStyle||"rgba(0, 0, 0, 0.1)"))),t}},data:function(){return{clickTime:0,clickIntervalTime:200}},methods:{handleClick:function(){var t=this;if(!this.disabled){if(this.blockRepeatClick){var e=(new Date).getTime();if(e-this.clickTime<=this.clickIntervalTime)return;this.clickTime=e,setTimeout((function(){t.clickTime=0}),this.clickIntervalTime)}this.$emit("click",{index:Number(this.index)}),this.$emit("tap",{index:Number(this.index)})}},handleGetUserInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("getuserinfo",n)},handleContact:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("contact",n)},handleGetPhoneNumber:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("getphonenumber",n)},handleError:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,n=void 0===e?{}:e;this.$emit("error",n)}}};e.default=r},145:function(t,e,n){"use strict";n.r(e);var i=n(146),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},146:function(t,e,n){}}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/tuniao-ui/components/tn-button/tn-button.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'tuniao-ui/components/tn-button/tn-button-create-component',
    {
        'tuniao-ui/components/tn-button/tn-button-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(140))
        })
    },
    [['tuniao-ui/components/tn-button/tn-button-create-component']]
]);
