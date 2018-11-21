<template>
	<view>
		<view class="msg-list1">
			<view class="time">13:39</view>
			<view class="msg-item1" v-for="(imgItem, index) in [1,2,3,4,5,6,7,8,9,10]" :key="index">
				<image src="../../../static/images/common__button_emoj@3x.png" mode="widthFix"></image>
				<view class="msg-text1">
					欢迎你来到看过，马上去观看最新的精彩片段吧！
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.msg-list1 {
		padding: 30upx 40upx;
	}
	.msg-item1 {
		/* padding: 30upx 40upx; */
		margin-bottom: 40upx;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}
	.msg-item1 > image {
		width: 140upx;
		border-radius: 50%;
		margin-right: 30upx;
	}
	.msg-text1 {
		position: relative;
		padding: 20upx 30upx;
		border-radius: 16upx;
		background: #fff;
	}
	.msg-text1:before {
		content: '';
		position: absolute;
		top: 20upx;
		right: 100%;
		width: 0;
		height: 0;
		border-top: 15upx solid transparent;
		border-right: 12upx solid #fff;
		border-bottom: 15upx solid transparent;
		border-left: 12upx solid transparent;
	}
	.time {
		text-align: center;
		font-family: arial;
		color: #c9c9c9;
	}
</style>
