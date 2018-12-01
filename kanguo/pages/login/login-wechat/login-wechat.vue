<template>
	<view class="container">
		<image class="back" src="/static/images/common_return@3x.png" mode="widthFix" @tap="goBack"></image>
		<view class="login-page-top">
			<image class="logo" src="../../../static/images/login_touxiang_defaul@3x.png"></image>
			<view class="login-btn" @tap="bindLogin">微信登录</view>
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
			goBack() {
				uni.switchTab({
					url: '../../index/index'
				});
			},
			bindLogin() {
				// console.log(res.provider)
				uni.login({
					provider: 'weixin',
					success: function (loginRes) {
						// console.log(JSON.stringify(loginRes.authResult));
						// 获取用户信息
						uni.getUserInfo({
						    provider: 'weixin',
						    success: function (infoRes) {
								// console.log(JSON.stringify(infoRes.userInfo));
								uni.request({
									url: 'http://www.aikm.cn/api/login',
									data: {
										judge: 2,
										unionid: infoRes.userInfo.unionId,
										app_open_id: infoRes.userInfo.openId,
										nickname: infoRes.userInfo.nickName,
										head_img: infoRes.userInfo.avatarUrl,
										type: 'android',
										sex: infoRes.userInfo.gender
									},
									method: 'POST',
									success: (res) => {
										// console.log(res);
										// console.log(JSON.stringify(res.data));
										// this.text = 'request success';
// 										var loginData = {
// 											hasLogin: true,
// 											userData: res.data.data
// 										}
										if(res.data.code == 1) {
											uni.setStorage({
												key: 'userData',
												data: res.data.data,
												success: function () {
													console.log('success');
												}
											});
											uni.setStorage({
												key: 'hasLogin',
												data: true,
												success: function () {
													console.log('success');
												}
											});
											uni.switchTab({
												url: '../../index/index',
											});
										}
									}
								});
						    }
						});
						
					}
				});
			}
		},
		onLoad() {
			this.initPosition();
		}
	}
</script>

<style>
	.container {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.back {
		position: absolute;
		width: 40upx;
		height: 40upx;
		top: 50upx;
		left: 40upx; 
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
