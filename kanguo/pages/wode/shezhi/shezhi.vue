<template>
	<view class="shezhi">
		<view class="active-row">
			<text>移动流量下视频自动播放</text>
			<switch @change="switch2Change" color="#feda46" />
		</view>
		<view class="active-row">
			<text>清除缓存</text>
			<view class="right">
				3.7M
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
	
	.active-row {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 120upx;
	}
	.arrow-right {
		position: absolute;
		width: 30upx;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
	}
	.right {
		padding-right: 60upx;
	}
</style>
