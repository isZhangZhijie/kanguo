<template>
	<view>
		<view class="msg-list" v-if="dianzanList.length>0">
			<view class="msg-item" v-for="(i,index) in dianzanList" :key="index">
				<image src="../../../static/images/common__button_emoj@3x.png" mode="widthFix"></image>
				<view class="msg-detail">
					<view class="msg-title">
						<text>我是谁</text>
						<text class="time">13:39</text>
					</view>
					<view class="msg-text">
						用户赞了你的评论 #我智霖男神贼给力
					</view>
				</view>
			</view>
		</view>
		<view v-else class="no-zan">
			<view class="no-zan-text1">还没有人赞过你</view>
			<view class="no-zan-text2">发个短片来获赞吧！</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dianzanList: [1,2,3,4,5,6,7,8,9]
			};
		},
		methods: {
		}
	}
</script>

<style>
	.msg-list {
		/* padding-top: 320upx; */
		/* padding-bottom: 130upx; */
	}
	.msg-item {
		padding: 30upx 40upx;
		border-top: 1px solid #c9c9c9;
		display: flex;
		align-items: center;
		justify-content: space-between;
		/* background: #fff; */
	}
	.msg-item > image {
		width: 140upx;
		border-radius: 50%;
		margin-right: 20upx;
	}
	.msg-detail {
		flex-grow: 1;
		display: block;
	}
	.msg-title {
		display: flex;
		justify-content: space-between;
		font-size: 36upx;
		font-weight: bold;
		color: #363636;
	}
	.msg-title .time {
		font-size: 30upx;
		font-weight: normal;
		color: #c9c9c9;
	}
	.msg-text {
		display: block;
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	
	.no-zan {
		padding-top: 250upx;
		text-align: center;
	}
	.no-zan-text1 {
		font-size: 50upx;
		color: #363636;
	}
	.no-zan-text2 {
		font-size: 36upx;
		color: #363636;
	}
</style>
