(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["libs/components/nav-index-button"],{"2fda":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"nav-index-button",props:{bottom:{type:[Number,String],default:300},right:{type:[Number,String],default:75},indexPath:{type:String,default:"/pages/index/index"}},methods:{navIndex:function(){var n=getCurrentPages();if(n&&n.length>0){var e=this.indexPath||"/pages/index/index",a=n[0];1!=n.length||a.route&&a.route==e.substring(1,e.length)?t.navigateBack({delta:1}):t.reLaunch({url:e})}else t.reLaunch({url:indexPath})}}};n.default=e}).call(this,e("543d")["default"])},"4d97":function(t,n,e){"use strict";e.r(n);var a=e("2fda"),u=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=u.a},"671c":function(t,n,e){"use strict";e.r(n);var a=e("a2a0"),u=e("4d97");for(var r in u)"default"!==r&&function(t){e.d(n,t,(function(){return u[t]}))}(r);e("975a");var i,d=e("f0c5"),f=Object(d["a"])(u["default"],a["b"],a["c"],!1,null,"610315b1",null,!1,a["a"],i);n["default"]=f.exports},"975a":function(t,n,e){"use strict";var a=e("d2df"),u=e.n(a);u.a},a2a0:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var u=function(){var t=this,n=t.$createElement;t._self._c},r=[]},d2df:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'libs/components/nav-index-button-create-component',
    {
        'libs/components/nav-index-button-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("671c"))
        })
    },
    [['libs/components/nav-index-button-create-component']]
]);
