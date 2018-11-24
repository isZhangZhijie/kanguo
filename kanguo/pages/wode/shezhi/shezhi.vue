<template>
	<view class="shezhi">
		<view class="action-row">
			<text>WIFI下视频自动播放</text>
			<switch checked @change="switch1Change" color="#feda46" />
		</view>
		<view class="action-row">
			<text>移动流量下视频自动播放</text>
			<switch @change="switch2Change" color="#feda46" />
		</view>
		<view class="action-row">
			<text>清除缓存</text>
			<view class="right">
				<image class="arrow-right" src="../../../static/images/my_button_enter@3x.png" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			switch1Change: function (e) {
				console.log('switch1 发生 change 事件，携带值为' + e.detail.value)
			},
			switch2Change: function (e) {
				console.log('switch2 发生 change 事件，携带值为' + e.detail.value)
			}
		}
	}
</script>

<style>
	.shezhi {
		padding: 40upx;
	}
	
	.action-row {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.arrow-right {
		position: absolute;
		width: 50upx;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
	}
</style>
