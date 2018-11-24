<template>
	<view>
		<view class="time-row">
			<text>今天</text>共观看25个视频
		</view>
		<view class="video-list">
			<view class="video-item" v-for="(item, index) in videoList" :key="index">
				<view class="img-box img-box-width100">
					<image src="../../../static/images/juzhao.png" mode="widthFix"></image>
					<view class="shadow"></view>
					<text>热度：23W+</text>
				</view>
				<view class="title xtb-3dots">
					周润发郭富城刘德华梁朝伟
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				videoList: [1,2,3,4,5,6,7,8]
			};
		}
	}
</script>

<style>
	.time-row {
		padding: 20upx 40upx;
		border-bottom: 1px solid #eee;
		font-size: 38upx;
		color: #666;
		background: #fff;
	}
	.time-row text {
		padding-right: 10upx;
		color: #363636;
		font-weight: bold;
	}
	
	.video-list {
		padding: 40upx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.video-item {
		width: 310upx;
		margin-bottom: 20upx;
	}
	.video-item .img-box {
		height: 240upx;
		border-radius: 20upx;
	}
	.video-item text {
		position: absolute;
		left: 30upx;
		bottom: 0upx;
		font-size: 36upx;
		color: #fff;
	}
	.shadow {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 0;
		box-shadow: 0 0 40upx 40upx rgba(0,0,0,.4);
	}
	.title {
		width: 100%;
		padding: 0;
		font-size: 38upx;
	}
</style>
