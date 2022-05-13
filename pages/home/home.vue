<template>
	<view class="home tn-safe-area-inset-bottom">
		<!-- 固定版 -->
		<view class="home-head">
			<view class="home-head1 heads">
			</view>
			<view class="home-head2 heads">
			</view>
			<view class="home-head3 heads">
				<view class="home__wrap" style="">
					<!-- <image  src="https://note.youdao.com/yws/public/resource/59dee57d6f3be28543801f1539475cd1/xmlnote/WEBRESOURCE79ba6e983f002d52edf0db79ea0de67a/40" style="height:30rpx;width:100%;margin-top:50px;" mode="widthFix"></image> -->
					<tn-swiper :list="list"></tn-swiper>
					<!-- <tn-swiper :list="list"></tn-swiper>
					<tn-swiper :list="list"></tn-swiper>
					<tn-swiper :list="list"></tn-swiper>
					<tn-swiper :list="list"></tn-swiper>
					<tn-swiper :list="list"></tn-swiper>
					<tn-swiper :list="list"></tn-swiper>
					<tn-swiper :list="list"></tn-swiper>
					<tn-swiper :list="list"></tn-swiper>
					<tn-swiper :list="list"></tn-swiper> -->

				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						image: 'https://tnuiimage.tnkjapp.com/swiper/summer.jpg',
						title: '夏天'
					},
					{
						image: 'https://tnuiimage.tnkjapp.com/swiper/winter.jpg',
						title: '冬天'
					},
				]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.home__wrap {
		position: absolute;
		z-index: 1;
		margin: 16px 16px;
		margin-top: -126px;
		top: 17%;
		width: 92%;
		overflow: scroll;
		height: 75%;
	}

	.home-head {
		width: 100%;
		height: 100%;
		background-image: radial-gradient(933.4px at 0.9% -2.6%, #01dcd7 0%, #abc4fb 47.6%, #e0bcfd 72.8%, #ffb6c2 100.3%);
		position: fixed;
		top: 0;
		transition: all .3s;
	}

	.home-head1 {
		width: 90%;
		background-color: white;
		height: 100%;
		position: relative;
		top: 10%;
		border-radius: 5%;
		margin: 0 auto;
		opacity: 0.6;
	}

	.home-head2 {
		width: 95%;
		background-color: white;
		height: 100%;
		position: absolute;
		top: 11%;
		border-radius: 5%;
		margin: auto;
		opacity: 0.7;
		left: 10px;
	}

	.home-head3 {
		width: 100%;
		background-color: white;
		height: 100%;

		top: 12%;
		border-radius: 5%;
		margin: auto;
		opacity: 1;
		position: absolute;
		z-index: 99;
		overflow: hidden;
	}
</style>
