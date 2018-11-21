<template>
	<view class="container">
		<view class="login-page-top">
			<image class="logo" src="../../../static/images/login_touxiang_defaul@3x.png"></image>
			<view class="login-btn">微信登录</view>
		</view>
		<view class="other-login-way" v-bind:style="{top: positionTop + 'px'}">
			<text>其他方式登录</text>
			<view class="other-way-list">
				<image @tap="goPhoneLogin" class="other-login" src="../../../static/images/login_button_PhoneEnter@3x.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				positionTop: 0,
			};
		},
		methods: {
			goPhoneLogin() {
				uni.navigateTo({
					url: '../login-phone/login-phone'
				})
			},
			initPosition() {
				/**
				* 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
				* 反向使用 top 进行定位，可以避免此问题。
				*/
				this.positionTop = uni.getSystemInfoSync().windowHeight - 70;
			},
		},
		onLoad() {
			this.initPosition();
		}
	}
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.logo {
		width: 279upx;
		height: 279upx;
		margin-bottom: 120upx;
		margin-top: 120upx;
	}
	.login-btn {
		width: 80%;
		height: 110upx;
		line-height: 110upx;
		border-radius: 100upx;
		background-color: #08be14;
		color: #fff;
		font-size: 38upx;
		font-weight: bold;
	}
</style>
