<template>
	<view>
		<view class="msg-list">
			<view class="msg-item" v-for="(i,index) in [1,2,3,4,5,6,7,8,9]" :key="index">
				<view class="title-row">
					<text class="title">勇闯AK火力网，凌风一枪生擒毒枭</text>
					<image src="../../../static/images/timg.jpg" mode="widthFix"></image>
				</view>
				<view class="pinglun-row">
					<image src="../../../static/images/common__button_emoj@3x.png" mode="widthFix"></image>
					为智霖男神疯狂打call！！！
				</view>
				<view class="new-pinglun">
					还有2条新评论>
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
		},
		methods: {
			
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
		/* display: flex;
		align-items: center;
		justify-content: space-between; */
		/* background: #fff; */
	}
	.title-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10upx;
	}
	.title {
		font-size: 40upx;
		color: #363636;
		font-weight: bold;
		flex-grow: 1;
	}
	.title-row image {
		flex-shrink: 0;
		width: 200upx;
		margin-left: 40upx;
		border-radius: 10upx;
	}
	.pinglun-row {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-size: 36upx;
		color: #262626;
	}
	.pinglun-row image {
		width: 120upx;
		border-radius: 50%;
		margin-right: 20upx;
	}
	.new-pinglun {
		text-align: center;
		color: #c9c9c9;
	}
</style>
