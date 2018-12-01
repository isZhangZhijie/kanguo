<template>
	<view class="container">
		<view class="login-page-top">
			<view class="login-input phone-num">
				<image src="/static/images/login_signPhone@3x.png" mode="aspectFit"></image>
				<input type="number" focus=true value="" v-model="phone" placeholder="请输入手机号码" :value="inputClearValue" @input="bindClearInput" />
				<view class="uni-icon uni-icon-clear" v-if="showClearIcon" @click="clearIcon"></view>
			</view>
			<view @tap="goCaptcha" class="login-btn">获取验证码</view>
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
				showClearIcon: false,
				inputClearValue: "",
				phone: "",
			};
		},
		methods: {
			goCaptcha() {
				var _this = this
				if(this.phone.length == 11) {
					// 找回密码手机号验证是否存在
					uni.request({
						url: 'http://www.aikm.cn/api/auth/phone',
						method: 'POST',
						data: {phone: _this.phone},
						success: res => {
							// console.log(JSON.stringify(res.data))
							if(res.data.code == 1) {
								uni.showToast({
									title: '验证码已发送',
									duration: 2000,
									icon: 'none',
								});
								// return
								setTimeout(function() {
									uni.navigateTo({
										url: '../captcha/captcha?phone=' + _this.phone
									});
								}, 800)
							} else {
								uni.showToast({
									title: res.data.msg,
									duration: 2000,
									icon: 'none',
								});
							}
						}
					});
				} else {
					uni.showToast({
						title: '请输入正确手机号',
						duration: 2000,
						icon: 'none',
					});
				}
			},
			initPosition() {
				/**
				* 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
				* 反向使用 top 进行定位，可以避免此问题。
				*/
				this.positionTop = uni.getSystemInfoSync().windowHeight - 140;
			},
			bindClearInput: function (e) {
				this.inputClearValue = e.target.value;
				if (e.target.value.length > 0) {
					this.showClearIcon = true;
				} else {
					this.showClearIcon = false;
				}
			},
			clearIcon: function () {
				this.inputClearValue = "";
				this.showClearIcon = false;
			},
			goWechatLogin() {
				uni.navigateTo({
					url: '../../login-wechat/login-wechat'
				})
			},
		},
		onLoad() {
			this.initPosition();
			
		}
	}
</script>

<style>
	@import "../../../../common/icon.css";
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
	.uni-icon-clear {
		color: #ccc;
	}
</style>
