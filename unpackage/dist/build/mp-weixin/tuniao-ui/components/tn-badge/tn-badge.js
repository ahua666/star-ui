(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["tuniao-ui/components/tn-badge/tn-badge"],{"02f8":function(t,e,n){"use strict";n.r(e);var i=n("62c7"),a=n("9839");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("2102");var o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"ce6c81d8",null,!1,i["a"],void 0);e["default"]=u.exports},2102:function(t,e,n){"use strict";var i=n("9e93"),a=n.n(i);a.a},4792:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(t){return t&&t.__esModule?t:{default:t}}(n("5e58"));var a={mixins:[i.default],name:"tn-badge",props:{index:{type:[Number,String],default:"0"},radius:{type:Number,default:0},padding:{type:String,default:""},margin:{type:String,default:""},dot:{type:Boolean,default:!1},absolute:{type:Boolean,default:!1},top:{type:[String,Number],default:""},right:{type:[String,Number],default:""},translateCenter:{type:Boolean,default:!0}},computed:{badgeClass:function(){var t="";return this.dot&&(t+=" tn-badge--dot"),this.absolute&&(t+=" tn-badge--absolute",this.translateCenter&&(t+=" tn-badge--center-position")),t},badgeStyle:function(){var t={};return 0!==this.radius&&(t.width=this.radius+"rpx",t.height=this.radius+"rpx",t.lineHeight=this.radius+"rpx"),this.padding&&(t.padding=this.padding),this.margin&&(t.margin=this.margin),this.fontColorStyle&&(t.color=this.fontColorStyle),this.fontSize&&(t.fontSize=this.fontSize+this.fontUnit),this.backgroundColorStyle&&(t.backgroundColor=this.backgroundColorStyle),this.top&&(t.top=this.$t.string.getLengthUnitValue(this.top)),this.right&&(t.right=this.$t.string.getLengthUnitValue(this.right)),t}},data:function(){return{}},methods:{handleClick:function(){this.$emit("click",{index:Number(this.index)}),this.$emit("tap",{index:Number(this.index)})}}};e.default=a},"62c7":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=(this._self._c,this.__get_style([this.badgeStyle]));this.$mp.data=Object.assign({},{$root:{s0:e}})},a=[]},9839:function(t,e,n){"use strict";n.r(e);var i=n("4792"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"9e93":function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'tuniao-ui/components/tn-badge/tn-badge-create-component',
    {
        'tuniao-ui/components/tn-badge/tn-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("02f8"))
        })
    },
    [['tuniao-ui/components/tn-badge/tn-badge-create-component']]
]);
