<template>
    <view class="container">
		<!-- <view class="" style="border-bottom: 1px solid #eee;height:50upx;background:#fff"></view> -->
        <view class="top-bar">
			<image class="search-btn" src="../../static/images/index__button_find@3x.png" mode="widthFix"></image>
			<view class="sel-bar">
				<scroll-view scroll-x="true" class="scroll-view-box">
					<view id="" class="scroll-view-item" style="width: 100upx;color:#FFF;">1</view>
					<view id="" class="scroll-view-item active">人气热播</view>
					<view id="" class="scroll-view-item">精品收藏</view>
					<view id="" class="scroll-view-item">最新上映</view>
					<view id="" class="scroll-view-item">为您推荐</view>
				</scroll-view>
			</view>
        </view>
		
		<view class="video-list">
			<video-item v-for="val in [1,2,3]" :key="val"></video-item>
		</view>
		
		
		<!-- <footfoot></footfoot> -->
    </view>
</template>
<script>
    import footfoot from '../../components/footer.vue'
    import videoItem from '../../components/video-item.vue'
	export default {
		components: {
			footfoot,
			videoItem
		},
		data() {
			return {}
		},
	}
</script>

<style>
	.container {
		/* padding-bottom: 150upx; */
		background: #e6e6e6;
	}
	.top-bar {
		padding-top: 40upx;
		position: relative;
		/* top: 0; */
		/* left: 0; */
		width: 100%;
		background: #fff;
		box-shadow: 0 10upx 10upx rgba(0,0,0,.2);
	}
	.search-btn {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100upx;
		height: 100upx;
		z-index: 100;
	}
	.scroll-view-box {
		white-space: nowrap;
		width: 100%;
		/* padding-left: 80upx; */
		box-sizing: border-box;
	}
	.scroll-view-item {
		position: relative;
		display: inline-block;
		height: 100upx;
		line-height: 100upx;
		padding: 0 20upx;
		font-size: 32upx;
	}
	.scroll-view-item.active {
		font-size: 40upx;
		font-weight: bold;
	}
	.scroll-view-item.active::after {
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
		border-radius: 20upx;;
		bottom: 20upx;
		width: 50upx;
		height: 10upx;
		background: #feda46;
		content: '';
	}
	
	.video-list {
		/* padding-top: 140upx; */
		/* height: 1000upx; */
	}
</style>