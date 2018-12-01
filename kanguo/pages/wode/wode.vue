<template>
	<view class="wode" v-if="hasLogin">
		<image class="top-bg" src="../../static/images/my_userBG@3x.png" mode="widthFix"></image>
		<view class="user-row wode-row" @tap="goBianji">
			<view class="avatar">
				<image :src="userData.head_img" mode="widthFix"></image>
				欢迎来到看过
			</view>
			<text class="name">{{ userData.nickname }}</text>
			<image class="arrow-right" src="../../static/images/my_button_enter@3x.png" mode="widthFix"></image>
		</view>
		<view class="user-data-row wode-row">
			<view class="" @tap="goDongtai">
				<text class="num">42</text>
				<text class="text">动态</text>
			</view>
			<view class="" @tap="goWodeguanzhu">
				<text class="num">28</text>
				<text class="text">关注</text>
			</view>
			<view class="" @tap="goWodefensi">
				<text class="num">2</text>
				<text class="text">粉丝</text>
			</view>
		</view>
		<view class="action-row wode-row" @tap="goLishi">
			<image class="action-img" src="../../static/images/my_buttton_visted@3x.png" mode="widthFix"></image>
			观看历史
			<image class="arrow-right" src="../../static/images/my_button_enter@3x.png" mode="widthFix"></image>
		</view>
		<view class="action-row wode-row" @tap="goShoucang">
			<image class="action-img" src="../../static/images/my_buttton_keep@3x.png" mode="widthFix"></image>
			我的收藏
			<image class="arrow-right" src="../../static/images/my_button_enter@3x.png" mode="widthFix"></image>
		</view>
		<view class="action-row wode-row" @tap="goShezhi">
			<image class="action-img" src="../../static/images/my_buttton_set@3x.png" mode="widthFix"></image>
			设置
			<image class="arrow-right" src="../../static/images/my_button_enter@3x.png" mode="widthFix"></image>
		</view>
		<view class="action-row wode-row" @tap="goFankui">
			<image class="action-img" src="../../static/images/my_buttton_help@3x.png" mode="widthFix"></image>
			帮助与反馈
			<image class="arrow-right" src="../../static/images/my_button_enter@3x.png" mode="widthFix"></image>
		</view>
		<view class="quit-row wode-row">
			<view class="quit-login" @tap="loginOut">
				退出登录
			</view>
		</view>
		<!-- <footfoot></footfoot> -->
	</view>
	<view class="" v-else>
		<view :class="[!hasLogin ? 'no-login-show' : '', 'no-login']">
			<image class="no-login-img" src="/static/images/common_null@3x.png" mode="widthFix"></image>
			<view class="no-login-text">你还没有登录哦~</view>
			<view class="login-btn" @tap="goLogin">
				登录
			</view>
		</view>
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
				hasLogin: '',
				userData: null
			};
		},
		onLoad() {
			var _this = this
			uni.getStorage({
				key: 'userData',
				success: function (res) {
					// console.log(JSON.stringify(res.data));
					_this.userData = res.data
				}
			});
			uni.getStorage({
				key: 'hasLogin',
				success: function (res) {
					// console.log(JSON.stringify(res.data));
					_this.hasLogin = res.data
				}
			});
		},
		methods: {
			goBianji() {
				uni.navigateTo({
					url: './bianji/bianji',
				});
			},
			goDongtai() {
				uni.navigateTo({
					url: './dongtai/dongtai',
				});
			},
			goWodeguanzhu() {
				uni.navigateTo({
					url: './wodeguanzhu/wodeguanzhu',
				});
			},
			goWodefensi() {
				uni.navigateTo({
					url: './wodefensi/wodefensi',
				});
			},
			goLishi() {
				uni.navigateTo({
					url: './lishi/lishi',
				});
			},
			goShoucang() {
				uni.navigateTo({
					url: './shoucang/shoucang',
				});
			},
			goShezhi() {
				uni.navigateTo({
					url: './shezhi/shezhi',
				});
			},
			goFankui() {
				uni.navigateTo({
					url: './fankui/fankui',
				});
			},
			loginOut() {
				uni.setStorage({
					key: 'hasLogin',
					data: false,
					success: function () {
						console.log('success');
					}
				});
				uni.removeStorage({
					key: 'userData',
					success: function (res) {
						console.log('success');
						uni.redirectTo({
							url: '../login/login-wechat/login-wechat'
						});
					}
				});
			},
			goLogin() {
				uni.redirectTo({
					url: '../login/login-wechat/login-wechat'
				});
			}
		}
	}
</script>

<style>
	.no-login {
		display: none;
	}
	.no-login-show {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 160upx;
	}
	.no-login-img {
		width: 400upx;
		margin-bottom: 40upx;
	}
	.no-login-text {
		margin-bottom: 40upx;
		font-size: 32upx;
		color: #c9c9c9;
	}
	.login-btn {
		width: 260upx;
		height: 80upx;
		border-radius: 10upx;
		text-align: center;
		line-height: 80upx;
		color: #363636;
		background: #feda46;
	}
	
	
	
	
	.wode {
		height: 100%;
		background: #fff;
	}
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
		border-bottom: 15upx solid #f3f3f3;
	}
	.avatar {
		padding-left: 160upx;
		margin-bottom: 20upx;
		font-size: 32upx;
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
		font-size: 38upx;
		color: #363636;
		font-weight: bold;
	}
	.arrow-right {
		position: absolute;
		width: 22upx;
		right: 40upx;
		top: 0;
		bottom: 0;
		margin: auto;
	}
	.user-data-row {
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-bottom: 15upx solid #f3f3f3;
	}
	.user-data-row > view {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.user-data-row .num {
		font-size: 36upx;
		color: #363636;
		font-family: arial;
		font-weight: bold;
	}
	.user-data-row .text {
		font-size: 34upx;
		color: #666;
	}
	.action-row {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		border-bottom: 1px solid #e9e9e9;
		font-size: 34upx;
		color: #666;
	}
	.action-row .action-img {
		width: 56upx;
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
