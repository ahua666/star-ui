(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["tuniao-ui/components/tn-switch/tn-switch"],{185:function(t,e,n){"use strict";n.r(e);var i=n(186),o=n(188);for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n(190);var a,u=n(11),c=Object(u["default"])(o["default"],i["render"],i["staticRenderFns"],!1,null,"b279ce68",null,!1,i["components"],a);c.options.__file="tuniao-ui/components/tn-switch/tn-switch.vue",e["default"]=c.exports},186:function(t,e,n){"use strict";n.r(e);var i=n(187);n.d(e,"render",(function(){return i["render"]})),n.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(e,"components",(function(){return i["components"]}))},187:function(t,e,n){"use strict";var i;n.r(e),n.d(e,"render",(function(){return o})),n.d(e,"staticRenderFns",(function(){return a})),n.d(e,"recyclableRender",(function(){return r})),n.d(e,"components",(function(){return i}));try{i={tnLoading:function(){return n.e("tuniao-ui/components/tn-loading/tn-loading").then(n.bind(null,192))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__get_style([t.switchStyle])),i=t.__get_style([t.switchNodeStyle]),o=""!==t.leftIcon?t.__get_style([t.iconStyle]):null,r=""!==t.rightIcon?t.__get_style([t.iconStyle]):null;t.$mp.data=Object.assign({},{$root:{s0:n,s1:i,s2:o,s3:r}})},r=!1,a=[];o._withStripped=!0},188:function(t,e,n){"use strict";n.r(e);var i=n(189),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},189:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"tn-switch",props:{value:{type:Boolean,default:!1},shape:{type:String,default:"circle"},disabled:{type:Boolean,default:!1},size:{type:Number,default:50},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},activeValue:{type:[Number,String,Boolean],default:!0},inactiveValue:{type:[Number,String,Boolean],default:!1},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},loading:{type:Boolean,default:!1},vibrateShort:{type:Boolean,default:!1}},computed:{switchStyle:function(){var t={};return t.fontSize=this.$t.string.getLengthUnitValue(this.size),t.backgroundColor=this.value?this.activeColor?this.activeColor:"#01BEFF":this.inactiveColor?this.inactiveColor:"#AAAAAA",t},switchNodeStyle:function(){var t={};return t.width=this.$t.string.getLengthUnitValue(this.size),t.height=t.width,t},iconStyle:function(){var t={};return t.fontSize=this.$t.string.getLengthUnitValue(this.size-20),t.lineHeight=this.$t.string.getLengthUnitValue(this.size),t},loadingColor:function(){return this.value?this.activeColor:""}},data:function(){return{}},methods:{click:function(){var e=this;this.disabled||this.loading||(this.vibrateShort&&t.vibrateShort(),this.$emit("input",!this.value),this.$nextTick((function(){e.$emit("change",e.value?e.activeValue:e.inactiveValue)})))}}};e.default=n}).call(this,n(1)["default"])},190:function(t,e,n){"use strict";n.r(e);var i=n(191),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},191:function(t,e,n){}}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/tuniao-ui/components/tn-switch/tn-switch.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'tuniao-ui/components/tn-switch/tn-switch-create-component',
    {
        'tuniao-ui/components/tn-switch/tn-switch-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(185))
        })
    },
    [['tuniao-ui/components/tn-switch/tn-switch-create-component']]
]);
