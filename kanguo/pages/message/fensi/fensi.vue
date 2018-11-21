<template>
	<view>
		<view class="msg-list">
			<view class="msg-item" v-for="(i,index) in [1,2,3,4,5,6,7,8,9]" :key="index">
				<image src="../../../static/images/common__button_emoj@3x.png" mode="widthFix"></image>
				<view class="msg-detail">
					<view class="msg-title">
						<text>我是谁</text>
						<text class="time">13:39</text>
					</view>
					<view class="msg-text">
						关注了你
						<view :class="[guanzhuOrNot?'not-guanzhu':'guanzhu']" @tap="guanzhu">{{guanzhuMsg}}</view>
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
				guanzhuOrNot: false,
				guanzhuMsg: '+关注'
			};
		},
		methods: {
			guanzhu() {
				if(!this.guanzhuOrNot) {
					this.guanzhuOrNot = true;
					this.guanzhuMsg = '已互相关注'
				}
			}
		}
	}
</script>

<style>
	.msg-list {
		/* padding-top: 320upx; */
		padding-bottom: 130upx;
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
	.guanzhu {
		padding: 5upx 20upx;
		border-radius: 10upx;;
		background: #feda46;
	}
	.not-guanzhu {
		padding: 5upx 0;
		border-radius: 10upx;;
		/* background: #feda46; */
	}
		
</style>
