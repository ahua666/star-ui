(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["tuniao-ui/components/tn-image-upload/tn-image-upload"],{140:function(t,e,n){"use strict";n.r(e);var r=n(141),o=n(143);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n(145);var a,s=n(11),u=Object(s["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,"2546f4ca",null,!1,r["components"],a);u.options.__file="tuniao-ui/components/tn-image-upload/tn-image-upload.vue",e["default"]=u.exports},141:function(t,e,n){"use strict";n.r(e);var r=n(142);n.d(e,"render",(function(){return r["render"]})),n.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(e,"components",(function(){return r["components"]}))},142:function(t,e,n){"use strict";var r;n.r(e),n.d(e,"render",(function(){return o})),n.d(e,"staticRenderFns",(function(){return a})),n.d(e,"recyclableRender",(function(){return i})),n.d(e,"components",(function(){return r}));try{r={tnLineProgress:function(){return n.e("tuniao-ui/components/tn-line-progress/tn-line-progress").then(n.bind(null,175))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$t.string.getLengthUnitValue(t.width)),r=t.$t.string.getLengthUnitValue(t.height),o=!t.disabled&&t.maxCount>t.lists.length&&!t.customBtn?t.$t.string.getLengthUnitValue(t.width):null,i=!t.disabled&&t.maxCount>t.lists.length&&!t.customBtn?t.$t.string.getLengthUnitValue(t.height):null;t.$mp.data=Object.assign({},{$root:{g0:n,g1:r,g2:o,g3:i}}),"augmented"===t.$scope.data.scopedSlotsCompiler&&t.$setScopedSlotsParams("file",{file:t.lists})},i=!1,a=[];o._withStripped=!0},143:function(t,e,n){"use strict";n.r(e);var r=n(144),o=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},144:function(t,e,n){"use strict";(function(t){function n(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(F){u=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new $(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return E()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=x(a,n);if(s){if(s===f)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=c(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function c(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(F){return{type:"throw",arg:F}}}t.wrap=l;var f={};function h(){}function d(){}function p(){}var m={};u(m,i,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(T([])));y&&y!==e&&r.call(y,i)&&(m=y);var v=p.prototype=h.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function n(o,i,a,s){var u=c(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,s)}))}s(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=c(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,f;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function T(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return d.prototype=p,u(v,"constructor",p),u(p,"constructor",d),d.displayName=u(p,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,u(t,s,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},w(b.prototype),u(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new b(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(v),u(v,s,"Generator"),u(v,i,(function(){return this})),u(v,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=T,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}function r(t,e,n,r,o,i,a){try{var s=t[i](a),u=s.value}catch(l){return void n(l)}s.done?e(u):Promise.resolve(u).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function s(t){r(a,o,i,s,u,"next",t)}function u(t){r(a,o,i,s,u,"throw",t)}s(void 0)}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"tn-image-upload",props:{fileList:{type:Array,default:function(){return[]}},action:{type:String,default:""},name:{type:String,default:"file"},header:{type:Object,default:function(){return{}}},formData:{type:Object,default:function(){return{}}},disabled:{type:Boolean,default:!1},autoUpload:{type:Boolean,default:!0},maxCount:{type:Number,default:9},showUploadList:{type:Boolean,default:!0},imageMode:{type:String,default:"aspectFill"},previewFullImage:{type:Boolean,default:!0},showProgress:{type:Boolean,default:!0},deleteable:{type:Boolean,default:!0},deleteIcon:{type:String,default:"close"},deleteBackgroundColor:{type:String,default:""},deleteColor:{type:String,default:""},uploadText:{type:String,default:"选择图片"},showTips:{type:Boolean,default:!0},customBtn:{type:Boolean,default:!1},width:{type:Number,default:200},height:{type:Number,default:200},sizeType:{type:Array,default:function(){return["original","compressed"]}},sourceType:{type:Array,default:function(){return["album","camera"]}},multiple:{type:Boolean,default:!0},maxSize:{type:Number,default:10485760},limitType:{type:Array,default:function(){return["png","jpg","jpeg","webp","gif","image"]}},toJson:{type:Boolean,default:!0},beforeUpload:{type:Function,default:null},beforeRemove:{type:Function,default:null},index:{type:[Number,String],default:""}},computed:{},data:function(){return{lists:[],uploading:!1}},watch:{fileList:{handler:function(t){var e=this;t.map((function(t){var n=e.lists.some((function(e){return e.url===t.url}));!n&&e.lists.push({url:t.url,error:!1,progress:100})}))},immediate:!0},lists:function(t){this.$emit("on-list-change",t,this.index)}},methods:{clear:function(){this.lists=[]},reUpload:function(){this.uploadFile()},selectFile:function(){var e=this;if(!this.disabled){this.name;var n=this.maxCount,r=this.multiple,o=this.maxSize,i=this.sizeType,a=this.lists,s=(this.camera,this.compressed,this.sourceType),u=null,l=n-a.length;u=new Promise((function(e,n){t.chooseImage({count:r?l>9?9:l:1,sourceType:s,sizeType:i,success:e,fail:n})})),u.then((function(t){var i=a.length;t.tempFiles.map((function(t,i){if(e.checkFileExt(t)&&(r||!(i>=1)))if(t.size>o)e.$emit("on-oversize",t,a,e.index),e.showToast("超出可允许文件大小");else{if(n<=a.length)return e.$emit("on-exceed",t,a,e.index),void e.showToast("超出最大允许的文件数");a.push({url:t.path,progress:0,error:!1,file:t})}})),e.$emit("on-choose-complete",e.lists,e.index),e.autoUpload&&e.uploadFile(i)})).catch((function(t){e.$emit("on-choose-fail",t)}))}},showToast:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(this.showTips||e)&&this.$t.messageUtils.toast(t)},upload:function(){this.uploadFile()},retry:function(t){this.lists[t].progress=0,this.lists[t].error=!1,this.lists[t].response=null,this.$t.messageUtils.loading("重新上传"),this.uploadFile(t)},uploadFile:function(){var e=arguments,r=this;return o(n().mark((function o(){var i,a,s;return n().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=e.length>0&&void 0!==e[0]?e[0]:0,!r.disabled){n.next=3;break}return n.abrupt("return");case 3:if(!r.uploading){n.next=5;break}return n.abrupt("return");case 5:if(!(i>=r.lists.length)){n.next=8;break}return r.$emit("on-uploaded",r.lists,r.index),n.abrupt("return");case 8:if(100!==r.lists[i].progress){n.next=12;break}return r.lists[i].uploadTask=null,r.autoUpload&&r.uploadFile(i+1),n.abrupt("return");case 12:if(!r.beforeUpload||"function"!==typeof r.beforeUpload){n.next=23;break}if(a=r.beforeUpload.bind(r.$t.$parent.call(r))(i,r.lists),!a||"function"!==typeof a.then){n.next=19;break}return n.next=17,a.then((function(t){})).catch((function(t){return r.uploadFile(i+1)}));case 17:n.next=23;break;case 19:if(!1!==a){n.next=23;break}return n.abrupt("return",r.uploadFile(i+1));case 23:if(r.action){n.next=26;break}return r.showToast("请配置上传地址",!0),n.abrupt("return");case 26:r.lists[i].error=!1,r.uploading=!0,s=t.uploadFile({url:r.action,filePath:r.lists[i].url,name:r.name,formData:r.formData,header:r.header,success:function(t){var e=r.toJson&&r.$t.test.jsonString(t.data)?JSON.parse(t.data):t.data;[200,201,204].includes(t.statusCode)?(r.lists[i].response=e,r.lists[i].progress=100,r.lists[i].error=!1,r.$emit("on-success",e,i,r.lists,r.index)):r.uploadError(i,e)},fail:function(t){r.uploadError(i,t)},complete:function(t){r.$t.messageUtils.closeLoading(),r.uploading=!1,r.uploadFile(i+1),r.$emit("on-change",t,i,r.lists,r.index)}}),r.lists[i].uploadTask=s,s.onProgressUpdate((function(t){t.progress>0&&(r.lists[i].progress=t.progress,r.$emit("on-progress",t,i,r.lists,r.index))}));case 31:case"end":return n.stop()}}),o)})))()},uploadError:function(t,e){this.lists[t].progress=0,this.lists[t].error=!0,this.lists[t].response=null,this.showToast("上传失败，请重试"),this.$emit("on-error",e,t,this.lists,this.index)},deleteItem:function(t){var e=this;this.deleteable&&this.$t.messageUtils.modal("提示","您确定要删除吗？",o(n().mark((function r(){var o;return n().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.beforeRemove||"function"!==typeof e.beforeRemove){n.next=10;break}if(o=e.beforeRemove.bind(e.$t.$parent.call(e))(t,e.lists),!o||"function"!==typeof o.then){n.next=7;break}return n.next=5,o.then((function(n){e.handlerDeleteItem(t)})).catch((function(t){e.showToast("删除操作被中断")}));case 5:n.next=8;break;case 7:!1===o?e.showToast("删除操作被中断"):e.handlerDeleteItem(t);case 8:n.next=11;break;case 10:e.handlerDeleteItem(t);case 11:case"end":return n.stop()}}),r)}))),!0)},handlerDeleteItem:function(t){this.lists[t].progress<100&&this.lists[t].progress>0&&"undefined"!==typeof this.lists[t].uploadTask&&this.lists[t].uploadTask.abort(),this.lists.splice(t,1),this.$forceUpdate(),this.$emit("on-remove",t,this.lists,this.index),this.showToast("删除成功")},remove:function(t){this.deleteable&&t>=0&&t<this.lists.length&&this.lists.splice(t,1)},doPreviewImage:function(e,n){var r=this;if(this.previewFullImage){var o=this.lists.map((function(t){return t.url||t.path}));t.previewImage({urls:o,current:e,success:function(){r.$emit("on-preview",e,r.lists,r.index)},fail:function(){r.showToast("预览图片失败")}})}},checkFileExt:function(t){var e=!1,n="",r=/.+\./;return n=t.path.replace(r,"").toLowerCase(),e=this.limitType.some((function(t){return t.toLowerCase()===n})),e||this.showToast("不支持".concat(n,"格式的文件")),e}}};e.default=i}).call(this,n(1)["default"])},145:function(t,e,n){"use strict";n.r(e);var r=n(146),o=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},146:function(t,e,n){}}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/tuniao-ui/components/tn-image-upload/tn-image-upload.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'tuniao-ui/components/tn-image-upload/tn-image-upload-create-component',
    {
        'tuniao-ui/components/tn-image-upload/tn-image-upload-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(140))
        })
    },
    [['tuniao-ui/components/tn-image-upload/tn-image-upload-create-component']]
]);
