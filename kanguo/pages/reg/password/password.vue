<template>
	<view class="container">
		<view class="login-page-top">
			<view class="login-input phone-password">
				<image src="/static/images/login_signLock@3x.png" mode="aspectFit"></image>
				<input focus value="" placeholder="请输入不少于6位数的密码" v-model="password" :password="showPassword" />
				<view class="uni-icon uni-icon-eye" :class="[!showPassword ? 'uni-active' : '']" @click="changePassword"></view>
			</view>
			<view class="login-btn" @tap="goIndex">完成并登陆</view>
		</view>
		<view class="other-login-way" v-bind:style="{top: positionTop + 'px'}">
			<text>其他方式登录</text>
			<view class="other-way-list">
				<image @tap="goWechatLogin" class="other-login" src="/static/images/login_button_WeixinEnter@3x.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				positionTop: 0,
				phone: "",
				showPassword: true,
				password: ''
			};
		},
		methods: {
			initPosition() {
				/**
				* 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
				* 反向使用 top 进行定位，可以避免此问题。
				*/
				this.positionTop = uni.getSystemInfoSync().windowHeight - 140;
			},
			goWechatLogin() {
				uni.navigateTo({
					url: '../../login/login-wechat/login-wechat'
				})
			},
			changePassword: function () {
				this.showPassword = !this.showPassword;
			},
			goIndex() {
				var _this = this
				var reg = /\w{6,}/  // 字母数字下划线，最少六位
				if(reg.test(this.password)) {
					uni.request({
						url: 'http://www.aikm.cn/api/register',
						method: 'POST',
						data: {
							type: 'android',
							phone: _this.phone,
							password: _this.password
						},
						success: res => {
							// console.log(JSON.stringify(res.data))
							
							if(res.data.code == 1) {
								res.data.data.head_img = '/static/images/head_img.png'
								uni.setStorage({
									key: 'userData',
									data: res.data.data,
									success: function () {
										// console.log('success');
									}
								});
								uni.setStorage({
									key: 'hasLogin',
									data: true,
									success: function () {
										// console.log('success');
									}
								});
								uni.switchTab({
									url: '../../index/index',
								});
							}
						},
						fail: () => {},
						complete: () => {}
					});
				} else {
					uni.showToast({
						title: '请输入不少于6位的字母数字下划线',
						duration: 3000,
						icon: 'none',
					});
				}
				
			}
		},
		onLoad(option) {
			this.initPosition();
			this.phone = option.phone;
		}
	}
</script>

<style>
	@import "../../../common/icon.css";
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.login-page-top {
		padding-top: 80upx;
	}
	.login-btn {
		width: 80%;
		height: 110upx;
		line-height: 110upx;
		margin-bottom: 10upx;
		border: none;
		border-radius: 100upx;
		background-color: #feda46;
		color: #363636;
		font-size: 38upx;
		font-weight: bold;
	}
	.uni-icon-eye {
		color: #ccc;
	}
	.uni-icon-eye.uni-active {
		color: #363636;
	}
</style>
