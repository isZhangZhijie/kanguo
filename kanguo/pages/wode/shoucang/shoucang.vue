<template>
	<view>
		<view class="time-row">
			共<text>12</text>个收藏片段
		</view>
		
		<view class="video-list">
			<video-item v-for="val in [1,2,3]" :key="val"></video-item>
		</view>
	</view>
</template>

<script>
	import videoItem from '../../../components/video-item.vue'
	export default {
		components: {
			videoItem
		},
		data() {
			return {
				
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
		padding: 0 10upx;
		color: #363636;
		font-weight: bold;
	}
</style>
