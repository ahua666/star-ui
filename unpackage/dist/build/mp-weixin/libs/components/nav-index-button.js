(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["libs/components/nav-index-button"],{"2fda":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"nav-index-button",props:{bottom:{type:[Number,String],default:300},right:{type:[Number,String],default:75},indexPath:{type:String,default:"/pages/index/index"}},methods:{navIndex:function(){var n=getCurrentPages();if(n&&n.length>0){var e=this.indexPath||"/pages/index/index",a=n[0];1!=n.length||a.route&&a.route==e.substring(1,e.length)?t.navigateBack({delta:1}):t.reLaunch({url:e})}else t.reLaunch({url:indexPath})}}};n.default=e}).call(this,e("543d")["default"])},"3e4d":function(t,n,e){"use strict";var a=e("44b8"),u=e.n(a);u.a},"443a":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},u=[]},"44b8":function(t,n,e){},"4d97":function(t,n,e){"use strict";e.r(n);var a=e("2fda"),u=e.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=u.a},"671c":function(t,n,e){"use strict";e.r(n);var a=e("443a"),u=e("4d97");for(var i in u)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return u[t]}))}(i);e("3e4d");var r=e("f0c5"),d=Object(r["a"])(u["default"],a["b"],a["c"],!1,null,"1b1a7208",null,!1,a["a"],void 0);n["default"]=d.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'libs/components/nav-index-button-create-component',
    {
        'libs/components/nav-index-button-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("671c"))
        })
    },
    [['libs/components/nav-index-button-create-component']]
]);
