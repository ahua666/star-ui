<template>
	<view class="index">
		<home v-if="tabberPageLoadFlag[0]" :style="{display: currentIndex === 0 ? '' : 'none'}" ref="home"></home>
		<my v-if="tabberPageLoadFlag[1]" :style="{display: currentIndex === 1 ? '' : 'none'}" ref="about"></my>
		<mydemo v-if="tabberPageLoadFlag[2]" :style="{display: currentIndex === 2 ? '' : 'none'}" ref="mydemo"></mydemo>
		<my v-if="tabberPageLoadFlag[3]" :style="{display: currentIndex === 3 ? '' : 'none'}" ref="about"></my>
		<tn-tabbar v-model="currentIndex" :list="tabbarList" activeColor="#838383" inactiveColor="#AAAAAA"
			activeIconColor="tn-cool-bg-color-7" :animation="true" :safeAreaInsetBottom="true" @change="switchTabbar">
		</tn-tabbar>
	</view>
</template>

<script>
	import My from '../my/my.vue'
	import Mydemo from '../mydemo/mydemo.vue'
	import Home from '../home/home.vue'
	export default {
		components: {
			My,
			Home,
			Mydemo,
		},
		data() {
			return {
				// 底部tabbar菜单数据
				tabbarList: [{
						title: '首页',
						activeIcon: 'home-smile-fill',
						inactiveIcon: 'home-smile'
					},
					{
						title: '圈子',
						activeIcon: 'discover-fill',
						inactiveIcon: 'discover'
					},
					{
						title: '福利',
						activeIcon: 'fire-fill',
						inactiveIcon: 'fire'
					},
					{
						title: '我的',
						activeIcon: 'my-fill',
						inactiveIcon: 'my',
						dot: true
					}
				],
				// tabbar当前被选中的序号
				currentIndex: 0,
				// 自定义底栏对应页面的加载情况
				tabberPageLoadFlag: []
			}
		},
		onLoad(options) {
			const index = Number(options.index || 0)
			// 根据底部tabbar菜单列表设置对应页面的加载情况
			this.tabberPageLoadFlag = this.tabbarList.map((item, tabbar_index) => {
				return index === tabbar_index
			})
			this.switchTabbar(index)
		},
		onPageScroll(e) {},
		onReachBottom() {},
		methods: {
			switchTabbar(index) {
				this._switchTabbarPage(index)
			},


			// 导航页面滚动到底部
			tabbarPageScrollLower(e) {},

			// 切换导航页面
			_switchTabbarPage(index) {
				const selectPageFlag = this.tabberPageLoadFlag[index]
				if (selectPageFlag === undefined) {
					return
				}
				if (selectPageFlag === false) {
					this.tabberPageLoadFlag[index] = true
				}
				this.currentIndex = index
			}
		}
	}
</script>

<style>
	.index {
		overflow: hidden;
		height: 100%;
	}

	.custom-tabbar-page {
		height: calc(100vh - (100rpx + env(safe-area-inset-bottom) / 2));
	}
</style>
