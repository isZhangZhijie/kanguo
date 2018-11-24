<template>
	<view>
		<view class="top-bar">
			<view class="top-text">消息</view>
			<view class="msg-type">
				<view class="type-item" @tap="goFensi">
					<image src="../../static/images/massage_button_fensi@3x.png" mode="widthFix"></image>
					粉丝
				</view>
				<view class="type-item" @tap="goDianzan">
					<image src="../../static/images/massage_button_dianzan@3x.png" mode="widthFix"></image>
					点赞
					<view class="msg-num">5</view>
				</view>
				<view class="type-item" @tap="goAtWode">
					<image src="../../static/images/massage_button_mine@3x.png" mode="widthFix"></image>
					@我的
					<view class="msg-num">10</view>
				</view>
				<view class="type-item" @tap="goPinglun">
					<image src="../../static/images/massage_button_pinglun@3x.png" mode="widthFix"></image>
					评论
				</view>
			</view>
		</view>
		<view class="msg-list">
			<view class="msg-item" @tap="goXitong">
				<image src="../../static/images/common__button_emoj@3x.png" mode="widthFix"></image>
				<view class="msg-detail">
					<view class="msg-title">
						<text>系统通知</text>
						<text class="time">13:39</text>
					</view>
					<view class="msg-text">
						欢迎你来到看过，马上去观看最新的精彩片段吧！
					</view>
				</view>
			</view>
		</view>
		<!-- <footfoot></footfoot> -->
	</view>
</template>

<script>
	import footfoot from '../../components/footer.vue'
	export default {
		components: {
			footfoot,
		},
		data() {
			return {
				
			};
		},
		methods: {
			goXitong() {
				uni.navigateTo({
					url: './xitong/xitong',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			goFensi() {
				uni.navigateTo({
					url: './fensi/fensi'
				});
			},
			goDianzan() {
				uni.navigateTo({
					url: './dianzan/dianzan'
				});
			},
			goAtWode() {
				uni.navigateTo({
					url: './wode/wode'
				});
			},
			goPinglun() {
				uni.navigateTo({
					url: './pinglun/pinglun'
				});
			}
		}
	}
</script>

<style>
	.top-bar {
		position: fixed;
		padding: 50upx 40upx 20upx;
		border-bottom: 1px solid #c9c9c9;
		width: 100%;
		background: #fff;
	}
	.top-text {
		margin-bottom: 30upx;
		font-size: 36upx;
		font-weight: bold;
		text-align: center;
	}
	.msg-type {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}
	.type-item {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.msg-num {
		position: absolute;
		top: -10upx;
		right: -10upx;
		width: 50upx;
		height: 50upx;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		font-family: arial;
		background: #ff1d1d;
	}
	.type-item image {
		width: 120upx;
	}
	
	.msg-list {
		padding-top: 320upx;
		padding-bottom: 130upx;
	}
	.msg-item {
		padding: 30upx 40upx;
		border-bottom: 1px solid #c9c9c9;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #fff;
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
		width: 100%;
	}
</style>
