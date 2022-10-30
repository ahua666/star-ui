<template>
	<view  :class="[checked == true ? 'home':'star-light',checkeds == true ? 'star-maoboli':'']">
		<div class="video-bg">
			<video
				src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-24e90c90-9fc1-4fdd-b14d-10d70f24a492/5e3122ab-7bf8-4432-9bd7-b19efd16feaa.mp4"
				width="320"
				height="240"
				object-fit="cover"
				:autoplay="true"
				:controls="false"
				:muted="true"
				:loop="true"
			>
				<source src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-24e90c90-9fc1-4fdd-b14d-10d70f24a492/5e3122ab-7bf8-4432-9bd7-b19efd16feaa.mp4" type="video/mp4" />
				<font style="vertical-align: inherit;"><font style="vertical-align: inherit;"></font></font>
			</video>
		</div>
		<!-- 非固定模版 -->
		<view :class="[checked == true ? 'home':'star-light']">
			<view class="home-head">
				<view class="home-head1 heads"></view>
				<view class="home-head2 heads"></view>
				<view class="home-head3 heads">
					<view class="home__wrap" style="padding-left: 20rpx;">
						<!-- <image  src="https://note.youdao.com/yws/public/resource/59dee57d6f3be28543801f1539475cd1/xmlnote/WEBRESOURCE79ba6e983f002d52edf0db79ea0de67a/40" style="height:30rpx;width:100%;margin-top:50px;" mode="widthFix"></image> -->
						<!-- <tn-swiper :list="list"></tn-swiper> -->
						<tn-switch v-model="checked" leftIcon="moon" rightIcon="moon-fill" activeColor="#21242d" @change="change"></tn-switch>
						<!-- <tn-switch v-model="checkeds" leftIcon="moon" rightIcon="moon-fill" activeColor="#21242d" @change="changes"></tn-switch> -->
						
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
						{
			image: 'https://tnuiimage.tnkjapp.com/swiper/summer.jpg',
					title: '夏天'
				},
				{
					image: 'https://tnuiimage.tnkjapp.com/swiper/winter.jpg',
					title: '冬天'
				}
			],
			checked: false,
			checkeds:false,
			backdrop:'saturate(3)',
			backdrops:'blur(20px)'
		};
	},
	methods: {
		change() {
			console.log(this.checked);
			// if(this.checked==true){
			// 	this.backdrop='saturate(1)'
			// }else{
			// 	this.backdrop='saturate(3)'
			// }
		},
		
	}
};
</script>

<style lang="scss" scoped>
page {
	background-image: url('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-24e90c90-9fc1-4fdd-b14d-10d70f24a492/6eb259d3-0c82-418b-bf7c-c692c2e700e6.jpg');
}

.video-bg {
	position: fixed;
	right: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-image: url('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-24e90c90-9fc1-4fdd-b14d-10d70f24a492/6eb259d3-0c82-418b-bf7c-c692c2e700e6.jpg');
}
.video-bg video {
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	background-image: url('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-24e90c90-9fc1-4fdd-b14d-10d70f24a492/6eb259d3-0c82-418b-bf7c-c692c2e700e6.jpg');
	
}
.star-maoboli{
	backdrop-filter: blur(20px);
}
.star-light{
	width: 100%;
	height: 100%;
	// background-image: radial-gradient(933.4px at 0.9% -2.6%, rgb(1, 220, 215) 0%, rgb(171, 196, 251) 47.6%, rgb(224, 188, 253) 72.8%, rgb(255, 182, 194) 100.3%);
	/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	// radial-gradient(933.4px at 0.9% -2.6%, rgb(1, 220, 215) 0%, rgb(171, 196, 251) 47.6%, rgb(224, 188, 253) 72.8%, rgb(255, 182, 194) 100.3%);
	position: absolute;
	background: linear-gradient(180deg, rgba(255, 255, 255, 0.72) 0%, rgba(255, 255, 255, 0.45) 100%);
	-webkit-backdrop-filter: saturate(3);
	backdrop-filter: saturate(3);
	
}
.home {
	width: 100%;
	height: 100%;
	// background-image: radial-gradient(933.4px at 0.9% -2.6%, rgb(1, 220, 215) 0%, rgb(171, 196, 251) 47.6%, rgb(224, 188, 253) 72.8%, rgb(255, 182, 194) 100.3%);
	/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	// radial-gradient(933.4px at 0.9% -2.6%, rgb(1, 220, 215) 0%, rgb(171, 196, 251) 47.6%, rgb(224, 188, 253) 72.8%, rgb(255, 182, 194) 100.3%);
	position: absolute;
	//浅色模式
	
	// rgba(16 18 27 / 40%)
	// background-color: rgba(16, 18 ,27 ,0.4);
	
}
.home-head {
	width: 100%;
	height: 100%;
	// background-color: rgba(46, 46, 65, 0.8);

	// background-image: radial-gradient(933.4px at 0.9% -2.6%, #01dcd7 0%, #abc4fb 47.6%, #e0bcfd 72.8%, #ffb6c2 100.3%);
	position: relative;
	top: 0;
}

.home__wrap {
	position: relative;
	z-index: 1;
	// margin: 16px 16px;
	// margin-top: -266px;
	// top: 20%;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0);
}

.home-head1 {
	width: 90%;
	background-color: rgba(40, 40, 40, 0.35);
	height: 80%;
	position: relative;
	top: 20%;
	border-radius: 5% 5% 0% 0%;
	margin: 0 auto;
	opacity: 0;
	// box-shadow: 20px 20px 60px #489dcf, -20px -20px 60px #62d5ff;
	transition: 0.5s ease;
	backdrop-filter: blur(20px);
	// box-shadow: 0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.7px 2.6px rgba(0, 0, 0, 0.2), 0 3.5px 5.3px rgba(0, 0, 0, 0.3), 0 7.3px 11px rgba(0, 0, 0, 0.4), 0 20px 30px rgba(0, 0, 0, 0.5);
}

.home-head2 {
	width: 95%;
	background-color: rgba(40, 40, 40, 0.55);
	height: 79%;
	position: absolute;
	top: 21%;
	border-radius: 5% 5% 0% 0%;
	margin: auto;
	opacity: 0;
	left: 20rpx;
	// box-shadow: 20px 20px 60px #489dcf, -20px -20px 60px #62d5ff;
	transition: 0.5s ease;
	backdrop-filter: blur(20px);
	// box-shadow: 0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.7px 2.6px rgba(0, 0, 0, 0.2), 0 3.5px 5.3px rgba(0, 0, 0, 0.3), 0 7.3px 11px rgba(0, 0, 0, 0.4), 0 20px 30px rgba(0, 0, 0, 0.5);
}

.home-head3 {
	// padding: 2em;
	width: 100%;
	// background-color:rgba(255 ,255 ,255, 0.3);
	height: calc(100% - 200rpx);
	position: absolute;
	top: 100rpx;
	// border-radius: 5% 5% 0% 0%;
	margin: auto;
	opacity: 0.8;
	// backdrop-filter: blur(20px);
	// box-shadow: 20px 20px 60px #489dcf, -20px -20px 60px #62d5ff;
	// transition: 0.5s ease;
	// backdrop-filter: blur(10px);
	// background: linear-gradient(145deg, rgba(91, 198, 255, 0.1), rgba(255, 182, 194, 0.1));
	// box-shadow: 0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.7px 2.6px rgba(0, 0, 0, 0.2), 0 3.5px 5.3px rgba(0, 0, 0, 0.3), 0 7.3px 11px rgba(0, 0, 0, 0.4), 0 20px 30px rgba(0, 0, 0, 0.5);
	// animation: textHeight 6s infinite linear forwards;

	// animation: textHeight 15s ease infinite;
}
</style>
