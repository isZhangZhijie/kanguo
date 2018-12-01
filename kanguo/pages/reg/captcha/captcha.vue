<template>
	<view class="container">
		<view class="login-page-top">
			<view class="phone-num">
				{{ phone }}
				<image src="/static/images/login_button_edit@3x.png" mode="widthFix"></image>
			</view>
			<input class="captcha-num-ipt" v-model="captcha" type="number" focus value="" maxlength=4 />
			<view @tap="goPassword" class="login-btn">下一步</view>
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
				phone: "",
				positionTop: 0,
				focusIndex: 0,
				captcha: ''
			};
		},
		methods: {
			initPosition() {
				this.positionTop = uni.getSystemInfoSync().windowHeight - 140;
			},
			goPassword() {
				var _this = this
				// console.log(this.captcha)
				// return
				uni.request({
					url: 'http://www.aikm.cn/api/auth/code',
					method: 'POST',
					data: {
						phone: _this.phone,
						code: parseInt(_this.captcha)
					},
					success: res => {
						console.log(JSON.stringify(res.data))
						if(res.data.code == 1) {
							uni.navigateTo({
								url: '../password/password?phone=' + this.phone
							});
						} else {
							uni.showToast({
								title: res.data.msg,
								duration: 2000,
								icon: 'none',
							});
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			goWechatLogin() {
				uni.navigateTo({
					url: '../../login/login-wechat/login-wechat'
				})
			},
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			this.phone = option.phone;
			this.initPosition();
		}
	}
</script>

<style>
	/* @import "../../../../common/icon.css"; */
	.captcha-num-ipt {
		margin-bottom: 80upx;
		border: 1px solid #9e9e9e;
		width: 320upx;
		height: 80upx;
		font-size: 32px;
		padding: 20upx 40upx;
		font-family: arial;
		text-align: center;
		background: #e9e9e9;
	}
	
	
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.login-page-top {
		padding-top: 80upx;
	}
	.phone-num {
		width: 80%;
		margin-bottom: 80upx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.phone-num image {
		width: 16px;
		margin-left: 5px;
		/* heihgt: 42px; */
	}
	
	.captcha-num {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 80%;
		border: none;
	}
	.captcha-num input {
		width: 100upx;
		height: 80upx;
		flex-grow: 0;
		border: none;
		padding-bottom: 10px;
		border-bottom: 1px solid #363636;
		text-align: center;
		font-size: 32px;
	}
	.captcha-num text {
		width: 100upx;
		height: 80upx;
		flex-grow: 0;
		border: none;
		padding-bottom: 10px;
		border-bottom: 1px solid #363636;
		text-align: center;
		font-size: 32px;
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
</style>
