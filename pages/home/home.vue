<template>
	<view class="home">
		<view class="home-head1 heads">
		</view>
		<view class="home-head2 heads">
		</view>
		<view class="home-head3 heads">
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.home {
		width: 100%;
		height: 667rpx;
		background-image: linear-gradient(to right, #485563, #29323c);
		/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
		// radial-gradient(933.4px at 0.9% -2.6%, rgb(1, 220, 215) 0%, rgb(171, 196, 251) 47.6%, rgb(224, 188, 253) 72.8%, rgb(255, 182, 194) 100.3%);
	position: relative;
	}

	.home-head1 {
		    width: 90%;
		    background-color: white;
		    height: 368px;
		    position: relative;
		    top: 35%;
		    border-radius: 5%;
		    margin: 0 auto;
		    opacity: 0.6;
	}

	.home-head2 {
		width: 95%;
		background-color: white;
		height: 667rpx;
		position: absolute;
		top: 37%;
		border-radius: 5%;
		margin: auto;
		opacity: 0.7;
		left: 20rpx;
	}
	.home-head3 {
		width: 100%;
		background-color: white;
		height: 667rpx;
		position: absolute;
		top: 39%;
		border-radius: 5%;
		margin: auto;
		opacity: 1;
		// left: 20rpx;
	}
</style>
