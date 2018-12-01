<template>
	<view class="container">
		<view class="login-page-top">
			<view class="phone-num">
				{{ phone }}
				<image src="/static/images/login_button_edit@3x.png" mode="widthFix"></image>
			</view>
			<view class="login-input captcha-num" @tap="iptFocus">
				<input :focus="focusIndex==0?true:false" type="text" maxlength=1 value="" @input="nextFocus" />
				<input :focus="focusIndex==1?true:false" type="text" maxlength=1 value="" @input="nextFocus" />
				<input :focus="focusIndex==2?true:false" type="text" maxlength=1 value="" @input="nextFocus" />
				<input :focus="focusIndex==3?true:false" type="text" maxlength=1 value="" @input="nextFocus" />
			</view>
			<input class="captcha-num-ipt" type="text" value="" maxlength=4 />
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
				focus: true
			};
		},
		methods: {
			initPosition() {
				this.positionTop = uni.getSystemInfoSync().windowHeight - 140;
			},
			goPassword() {
				uni.navigateTo({
					url: '../password/password?phone=' + this.phone
				});
			},
			goWechatLogin() {
				uni.navigateTo({
					url: '../../login/login-wechat/login-wechat'
				})
			},
			iptFocus() {
				this.focusIndex = 0
// 				console.log(this.focus)
// 				this.focus = true
			},
// 			captchaIpt() {
// 				this.focusIndex = 0
// 			},
			nextFocus(e) {
				
				if(e.detail.value.length == 1 && this.focusIndex < 3) {
					this.focusIndex += 1
					console.log(this.focusIndex)
				} else if(e.detail.value.length == 0 && this.focusIndex > 0) {
					this.focusIndex -= 1
					console.log(this.focusIndex)
				}
			},
			firstFocus(e) {
				this.focusIndex = 0
				console.log(this.focusIndex)
			}
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			this.phone = option.phone;
			this.initPosition();
			this.focusIndex = 0;
		}
	}
</script>

<style>
	/* @import "../../../../common/icon.css"; */
	.captcha-num-ipt {
		border-bottom: 1px solid #363636;
		width: 50%;
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
