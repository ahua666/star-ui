<template>
 <view class="template-edit tn-safe-area-inset-bottom">

  
    <view class="tn-safe-area-inset-bottom" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top-xl tn-margin">
        <view class="tn-flex justify-content-item">
          <view class="tn-bg-black tn-color-white tn-text-center" style="border-radius: 100rpx;margin-right: 8rpx;width: 45rpx;height: 45rpx;line-height: 45rpx;">
            <text class="tn-icon-tag" style="font-size: 30rpx;"></text>
          </view>
          <view class="tn-text-lg tn-padding-right-xs tn-text-bold">以下类型的我们都擅长</view>
        </view>
        <view class="justify-content-item tn-text-df tn-color-grey">
          <text class="tn-padding-xs"></text>
        </view>
      </view>
      
      <view class="tn-tag-content tn-margin tn-text-justify tn-padding-bottom">
        <view v-for="(item, index) in tagList" :key="index" class="tn-tag-content__item tn-margin-right tn-round tn-text-sm tn-text-bold" :class="[`tn-bg-${item.color}--light tn-color-${item.color}`]">
          <text class="tn-tag-content__item--prefix">#</text> {{ item.title }}
        </view>
      </view>  
      <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top tn-margin">
        <view class="tn-flex justify-content-item">
          <view class="tn-bg-black tn-color-white tn-text-center" style="border-radius: 100rpx;margin-right: 8rpx;width: 45rpx;height: 45rpx;line-height: 45rpx;">
            <text class="tn-icon-topics" style="font-size: 30rpx;"></text>
          </view>
          <view class="tn-text-lg tn-padding-right-xs tn-text-bold">下面三项请您填写</view>
        </view>
        <view class="justify-content-item tn-text-df tn-color-grey">
          <text class="tn-padding-xs"></text>
          <text class="tn-icon-keyboard-circle"></text>
        </view>
      </view>
      <view class="tn-margin tn-bg-gray--light" style="border-radius: 10rpx;padding: 20rpx 30rpx;">
       <input placeholder="客户的名字" name="input" placeholder-style="color:#AAAAAA" ></input>
      </view>
      <view class="tn-margin tn-bg-gray--light" style="border-radius: 10rpx;padding: 20rpx 30rpx;">
       <input placeholder="客户手机号" name="input" placeholder-style="color:#AAAAAA" ></input>
      </view>
     <view class="tn-margin tn-bg-gray--light" style="border-radius: 10rpx;padding: 20rpx 30rpx;">
      <input placeholder="简单描述下客户需求" name="input" placeholder-style="color:#AAAAAA" ></input>
     </view>
      <view class="tn-flex tn-flex-row-between tn-flex-col-center tn-padding-top-xl tn-margin">
        <view class="tn-flex justify-content-item">
          <view class="tn-bg-black tn-color-white tn-text-center" style="border-radius: 100rpx;margin-right: 8rpx;width: 45rpx;height: 45rpx;line-height: 45rpx;">
            <text class="tn-icon-image" style="font-size: 30rpx;"></text>
          </view>
          <view class="tn-text-lg tn-padding-right-xs tn-text-bold">再发点截图或附件咧</view>
        </view>
        <view class="justify-content-item tn-text-df tn-color-grey" @tap="clear">
          <text class="tn-padding-xs">清空上传</text>
          <text class="tn-icon-delete"></text>
        </view>
      </view>
      
      
      
      
      <view class="tn-margin-left tn-padding-top-xs">
        <tn-image-upload
          ref="imageUpload"
		  name="image"
          :action="action"
          :width="236"
          :height="236"
          :formData="formData"
          :fileList="fileList"
          :disabled="disabled"
          :autoUpload="autoUpload"
          :maxCount="maxCount"
          :showUploadList="showUploadList"
          :showProgress="showProgress"
          :deleteable="deleteable"
          :customBtn="customBtn"
          @sort-list="onSortList"
        />

      </view>
      
      
      
      <!-- 悬浮按钮-->
      <view class="tn-flex tn-footerfixed">
        <view class="tn-flex-1 justify-content-item tn-margin-sm tn-text-center">
          <tn-button backgroundColor="#00FFC6" padding="40rpx 0" width="60%" shadow fontBold @tap="upload">
            <!-- <text class="tn-icon-light tn-padding-right-xs tn-color-black"></text> -->
            <text class="tn-color-black">确 认 提 交</text>
          </tn-button>
        </view>
      </view>
      
    </view>
    
    <view class='tn-tabbar-height'></view>
    
 </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
 export default {
    name: 'TemplateEdit',
    mixins: [template_page_mixin],
  data() {
   return {
        tagList: [
          {
            color: 'red',
            title: "数据集成",
          },
          {
            color: 'cyan',
            title: "物联网设备",
          },
          {
            color: 'blue',
            title: "数字双碳",
          },
          {
            color: 'green',
            title: "数字孪生",
          },
          {
            color: 'orange',
            title: "三维可视化",
          },
          {
            color: 'purplered',
            title: "数据统计大屏",
          },
          {
            color: 'purple',
            title: "设备控制",
          },
          {
            color: 'brown',
            title: "数字园区",
          },
          {
            color: 'yellowgreen',
            title: "数字化工厂",
          }
        ],
    action: 'https://www.hualigs.cn/api/upload',
    // action: '',
    formData: {
      apiType: 'majorhua,bilibili,this,ali',
      token: '56b2ac3ca56be34d90de9129814e58bd',
      // image: ""
    },
    fileList: [],
    showUploadList: true,
    customBtn: false,
    autoUpload: true,
    showProgress: false,
    deleteable: true,
    customStyle: false,
    maxCount: 9,
    disabled: false,
   }
  },
  onLoad() {

  },
  methods: {
      // 跳转
      tn(e) {
       uni.navigateTo({
        url: e,
       });
      },
      // 手动上传文件
      upload() {
        this.$refs.imageUpload.upload()
  
      },
      // 手动清空列表
      clear() {
        this.$refs.imageUpload.clear()
      },
      // 图片拖拽重新排序
      onSortList(list) {
        console.log(list);
      },
  }
 }
</script>

<style lang="scss" scoped>
 .template-edit{
 }
  
  /* 胶囊*/
  .tn-custom-nav-bar__back {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 1000rpx;
    border: 1rpx solid rgba(255, 255, 255, 0.5);
    color: #FFFFFF;

    font-size: 18px;
    
    .icon {
      display: block;
      flex: 1;
      margin: auto;
      text-align: center;
    }
    
    &:before {
      content: " ";
      width: 1rpx;
      height: 110%;
      position: absolute;
      top: 22.5%;
      left: 0;
      right: 0;
      margin: auto;
      transform: scale(0.5);
      transform-origin: 0 0;
      pointer-events: none;
      box-sizing: border-box;
      opacity: 0.7;
      background-color: #FFFFFF;

    }
  }
  
  /* 底部悬浮按钮 start*/
  .tn-tabbar-height {
   min-height: 100rpx;
   height: calc(120rpx + env(safe-area-inset-bottom) / 2);
  }
  .tn-footerfixed {
    position: fixed;
    width: 100%;
    bottom: calc(120rpx + env(safe-area-inset-bottom));
    z-index: 1024;
    box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0);
    
  }
  /* 底部悬浮按钮 end*/
  
  /* 标签内容 start*/
  .tn-tag-content {
    &__item {
      display: inline-block;
      line-height: 45rpx;
      padding: 10rpx 30rpx;
      margin: 20rpx 20rpx 5rpx 0rpx;
      
      &--prefix {
        padding-right: 10rpx;
      }  
    }
  }
  /* 标签内容 end*/
</style>