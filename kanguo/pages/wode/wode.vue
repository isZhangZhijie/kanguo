<template>
	<view>
		<image class="top-bg" src="../../static/images/my_userBG@3x.png" mode="widthFix"></image>
		<view class="user-row wode-row">
			<view class="avatar">
				<image src="../../static/images/massage_button_mine@3x.png" mode="widthFix"></image>
				欢迎来到看过
			</view>
			<text class="name">神秘用户1234</text>
			<image class="arrow-right" src="../../static/images/my_button_enter@3x.png" mode="widthFix"></image>
		</view>
		<view class="user-data-row wode-row">
			<view class="">
				<text class="num">42</text>
				<text class="text">动态</text>
			</view>
			<view class="">
				<text class="num">28</text>
				<text class="text">关注</text>
			</view>
			<view class="">
				<text class="num">2</text>
				<text class="text">粉丝</text>
			</view>
		</view>
		<view class="action-row wode-row">
			<image class="action-img" src="../../static/images/my_buttton_visted@3x.png" mode="widthFix"></image>
			观看历史
			<image class="arrow-right" src="../../static/images/my_button_enter@3x.png" mode="widthFix"></image>
		</view>
		<view class="action-row wode-row">
			<image class="action-img" src="../../static/images/my_buttton_keep@3x.png" mode="widthFix"></image>
			我的收藏
			<image class="arrow-right" src="../../static/images/my_button_enter@3x.png" mode="widthFix"></image>
		</view>
		<view class="action-row wode-row">
			<image class="action-img" src="../../static/images/my_buttton_set@3x.png" mode="widthFix"></image>
			设置
			<image class="arrow-right" src="../../static/images/my_button_enter@3x.png" mode="widthFix"></image>
		</view>
		<view class="action-row wode-row">
			<image class="action-img" src="../../static/images/my_buttton_help@3x.png" mode="widthFix"></image>
			帮助与反馈
			<image class="arrow-right" src="../../static/images/my_button_enter@3x.png" mode="widthFix"></image>
		</view>
		<view class="quit-row wode-row">
			<view class="quit-login">
				退出登录
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
		}
	}
</script>

<style>
	.top-bg {
		width: 100%;
		display: block;
	}
	.wode-row {
		position: relative;
		padding: 30upx 40upx;
		background: #fff;
	}
	.user-row {
		margin-bottom: 15upx;
	}
	.avatar {
		padding-left: 160upx;
		margin-bottom: 20upx;
		font-size: 34upx;
		color: #9c9c9c;
	}
	.avatar image {
		position: absolute;
		top: -70upx;
		left: 40upx;
		width: 140upx;
		border-radius: 50%;
	}
	.name {
		font-size: 42upx;
		color: #363636;
		font-weight: bold;
	}
	.arrow-right {
		position: absolute;
		width: 30upx;
		right: 40upx;
		top: 0;
		bottom: 0;
		margin: auto;
	}
	.user-data-row {
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-bottom: 15upx;
	}
	.user-data-row > view {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.user-data-row .num {
		font-size: 40upx;
		color: #363636;
		font-family: arial;
		font-weight: bold;
	}
	.user-data-row .text {
		font-size: 38upx;
		color: #666;
	}
	.action-row {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		border-bottom: 1px solid #e9e9e9;
		font-size: 40upx;
		color: #666;
	}
	.action-row .action-img {
		width: 70upx;
		margin-right: 20upx;
	}
	.quit-login {
		padding: 20upx 0;
		border-radius: 100upx;
		background: #ececec;
		font-size: 38upx;
		color: #363636;
		text-align: center;
	}
	.quit-row {
		/* padding-bottom: 220upx; */
		/* padding-top: 100upx; */
	}
</style>
