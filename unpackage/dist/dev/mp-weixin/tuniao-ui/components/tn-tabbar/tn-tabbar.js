(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["tuniao-ui/components/tn-tabbar/tn-tabbar"],{83:function(t,e,n){"use strict";n.r(e);var o=n(84),r=n(86);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n(88);var a,u=n(11),c=Object(u["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,"3972e4a0",null,!1,o["components"],a);c.options.__file="tuniao-ui/components/tn-tabbar/tn-tabbar.vue",e["default"]=c.exports},84:function(t,e,n){"use strict";n.r(e);var o=n(85);n.d(e,"render",(function(){return o["render"]})),n.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(e,"components",(function(){return o["components"]}))},85:function(t,e,n){"use strict";var o;n.r(e),n.d(e,"render",(function(){return r})),n.d(e,"staticRenderFns",(function(){return a})),n.d(e,"recyclableRender",(function(){return i})),n.d(e,"components",(function(){return o}));try{o={tnBadge:function(){return Promise.all([n.e("common/vendor"),n.e("tuniao-ui/components/tn-badge/tn-badge")]).then(n.bind(null,112))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.show?t.__map(t.list,(function(e,n){var o=t.__get_orig(e),r=t.__get_style([t.itemButtonStyle(n)]),i=t.itemButtonClass(n),a=t.isImage(n),u=a?t.elIcon(n):null,c=a?null:t.elIcon(n),l=a?null:t.elIconColor(n,!1),f=a?null:t.elIconColor(n),s=e.out||!e.count&&!e.dot?null:t.$t.number.formatNumberString(e.count),d=t.elColor(n,!1),m=t.elColor(n);return{$orig:o,s0:r,m0:i,m1:a,m2:u,m3:c,m4:l,m5:f,g0:s,m6:d,m7:m}})):null);t._isMounted||(t.e0=function(t){t.stopPropagation(),t.preventDefault()}),t.$mp.data=Object.assign({},{$root:{l0:n}})},i=!1,a=[];r._withStripped=!0},86:function(t,e,n){"use strict";n.r(e);var o=n(87),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},87:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n(59));function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,o,r,i,a){try{var u=t[i](a),c=u.value}catch(l){return void n(l)}u.done?e(c):Promise.resolve(c).then(o,r)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var a=t.apply(e,n);function u(t){i(a,o,r,u,c,"next",t)}function c(t){i(a,o,r,u,c,"throw",t)}u(void 0)}))}}var u={name:"tn-tabbar",props:{value:{type:[String,Number],default:0},show:{type:Boolean,default:!0},list:{type:Array,default:function(){return[]}},height:{type:Number,default:100},outHeight:{type:Number,default:100},bgColor:{type:String,default:"#FFFFFF"},iconSize:{type:Number,default:40},fontSize:{type:Number,default:24},activeColor:{type:String,default:"#01BEFF"},inactiveColor:{type:String,default:"#AAAAAA"},activeIconColor:{type:String,default:"#01BEFF"},inactiveIconColor:{type:String,default:"#AAAAAA"},activeStyle:{type:Object,default:function(){return{}}},shadow:{type:Boolean,default:!0},animation:{type:Boolean,default:!1},animationMode:{type:String,default:"scale"},fixed:{type:Boolean,default:!0},safeAreaInsetBottom:{type:Boolean,default:!1},beforeSwitch:{type:Function,default:null}},computed:{elColor:function(){var t=this;return function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=t.list[e],r="";return r=e===t.value?o["activeColor"]||t.activeColor:o["inactiveColor"]||t.inactiveColor,n?""!==t.$t.colorUtils.getFontColorStyle(r)?r:"":""===t.$t.colorUtils.getFontColorStyle(r)?r:""}},elIconColor:function(){var t=this;return function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=t.list[e],r="";return r=e===t.value?o["activeIconColor"]||t.activeIconColor:o["inactiveIconColor"]||t.inactiveIconColor,n?""!==t.$t.colorUtils.getFontColorStyle(r)?r:"":""===t.$t.colorUtils.getFontColorStyle(r)?r+" tn-tabbar__content__item__icon--clip":""}},elIcon:function(){var t=this;return function(e){var n=t.list[e];return e===t.value?n["activeIcon"]:n["inactiveIcon"]}},itemButtonClass:function(){var t=this;return function(e){var n="";return t.list[e]["out"]?(n+="tn-tabbar__content__item__button--out",""===t.$t.colorUtils.getFontColorStyle(t.activeIconColor)&&(n+=" ".concat(t.activeIconColor)),t.value===e&&(n+=" tn-tabbar__content__item__button--out--animation--".concat(t.animationMode))):(n+="tn-tabbar__content__item__button",t.value===e&&(n+=" tn-tabbar__content__item__button--animation--".concat(t.animationMode))),n}},itemButtonStyle:function(){var t=this;return function(e){var n={};return t.list[e]["out"]?(""!==t.$t.colorUtils.getFontColorStyle(t.activeIconColor)&&(n.backgroundColor=t.activeIconColor),n.width="".concat(t.outHeight-35,"rpx"),n.height="".concat(t.outHeight-35,"rpx"),n.top="-".concat(.15*t.outHeight,"rpx"),n):n}},isImage:function(){var t=this;return function(e){var n=t.list[e]["activeIcon"];return-1!==n.indexOf("/")}}},data:function(){return{outItemLeft:"50%",outItemIndex:-1,tabbatItemInfo:[]}},watch:{},created:function(){this.getOutItemIndex()},mounted:function(){var t=this;this.$nextTick((function(){t.getTabbarItem()}))},methods:{getTabbarItem:function(){for(var e=this,n=t.createSelectorQuery().in(this),o=0;o<this.list.length;o++)n.select("#tabbar_item_".concat(o)).fields({size:!0,rect:!0});n.exec((function(t){t?(e.tabbatItemInfo=t.map((function(t){return{left:t.left,width:t.width}})),e.updateOutItemLeft()):setTimeout((function(){e.getTabbarItem()}),10)}))},getOutItemIndex:function(){this.outItemIndex=this.list.findIndex((function(t){return t.hasOwnProperty("out")&&t.out}))},clickItemHandler:function(t){var e=this;return a(o.default.mark((function n(){var r;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.beforeSwitch||"function"!==typeof e.beforeSwitch){n.next=10;break}if(r=e.beforeSwitch.bind(e.$t.$parent.call(e))(t),!r||"function"!==typeof r.then){n.next=7;break}return n.next=5,r.then((function(n){e.switchTab(t)})).catch((function(t){}));case 5:n.next=8;break;case 7:!0===r&&e.switchTab(t);case 8:n.next=11;break;case 10:e.switchTab(t);case 11:case"end":return n.stop()}}),n)})))()},switchTab:function(t){this.$emit("change",t),this.$emit("input",t)},updateOutItemLeft:function(){var t=this.list.findIndex((function(t){return t.out}));-1!==t&&(this.outItemLeft=this.tabbatItemInfo[t].left+this.tabbatItemInfo[t].width/2+"px")}}};e.default=u}).call(this,n(1)["default"])},88:function(t,e,n){"use strict";n.r(e);var o=n(89),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},89:function(t,e,n){}}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/tuniao-ui/components/tn-tabbar/tn-tabbar.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'tuniao-ui/components/tn-tabbar/tn-tabbar-create-component',
    {
        'tuniao-ui/components/tn-tabbar/tn-tabbar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(83))
        })
    },
    [['tuniao-ui/components/tn-tabbar/tn-tabbar-create-component']]
]);
