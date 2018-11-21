<template>
	<view class="container">
		<view class="login-page-top">
			<view class="top-img">
				<navigator class="go-back" hover-class="none" open-type="navigateBack" delta="1">
					<image src="../../../static/images/common_return@3x.png" mode="widthFix" alt=""></image>
				</navigator>
				<image class="" src="../../../static/images/login_PhoneBG@3x.png" mode="widthFix"></image>
			</view>
			<view class="login-input phone-num">
				<image src="../../../static/images/login_signPhone@3x.png" mode="aspectFit"></image>
				<input type="number" focus=true value="" placeholder="请输入手机号码" :value="inputClearValue" @input="bindClearInput" />
				<view class="uni-icon uni-icon-clear" v-if="showClearIcon" @click="clearIcon"></view>
			</view>
			<view class="login-input phone-password">
				<image src="../../../static/images/login_signLock@3x.png" mode="aspectFit"></image>
				<input value="" placeholder="请输入登录密码" :password="showPassword" />
				<view class="uni-icon uni-icon-eye" :class="[!showPassword ? 'uni-active' : '']" @click="changePassword"></view>
			</view>
			<view class="login-btn">登&nbsp;录</view>
			<view class="action-row">
				<navigator url="" hover-class="none">
                    快速注册
                </navigator>
                <navigator url="../forget/phone/phone" hover-class="none">
                    忘记密码
                </navigator>
			</view>
		</view>
		<view class="other-login-way" v-bind:style="{top: positionTop + 'px'}">
			<text>其他方式登录</text>
			<view class="other-way-list">
				<image @tap="goWechatLogin" class="other-login" src="../../../static/images/login_button_WeixinEnter@3x.png"></image>
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
				showPassword: true,
			};
		},
		methods: {
			goWechatLogin() {
				uni.navigateTo({
					url: '../login-wechat/login-wechat'
				})
			},
			initPosition() {
				/**
				* 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
				* 反向使用 top 进行定位，可以避免此问题。
				*/
				this.positionTop = uni.getSystemInfoSync().windowHeight - 70;
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
			changePassword: function () {
				this.showPassword = !this.showPassword;
			}
		},
		onLoad() {
			this.initPosition();
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
	.top-img {
		position: relative;
		width: 100%;
		margin-bottom: 80upx;
	}
	.top-img>image {
		display: block;
		width: 100%;
	}
	.go-back {
		position: absolute;
		top: 60upx;
		left: 30upx;
	}
	.go-back image {
		width: 40upx;
		/* height: 50upx; */
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
	.action-row {
		display: flex;
		justify-content: space-between;
		width: 80%;
	}
	.uni-icon-clear {
		color: #ccc;
	}
	.uni-icon-eye {
		color: #ccc;
	}
	.uni-icon-eye.uni-active {
		color: #363636;
	}
</style>
