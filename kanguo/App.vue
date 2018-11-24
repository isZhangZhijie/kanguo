<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "./common/uni.css";
	
	page {
		background-color: #F8F8F8;
		height: 100%;
		font-size: 32upx;
		line-height: 1.6;
	}
	view {
		box-sizing: border-box;
	}
	
	.xtb-3dots {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	/* 图片居中 */
	.img-box {
		position: relative;
		display: block;
		overflow: hidden;
	}
	.img-box image {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: auto;
		height: 100%;
	}
	.img-box-width100 image {
		width: 100%;
		height: auto;
	}
	
	/* 其他登录方式 */
	.other-login-way {
		position: absolute;
		width: 100%;
		/* bottom: 60upx; */
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.other-login-way text {
		position: relative;
		margin-bottom: 30upx;
	}
	.other-login-way text:before {
		content: '';
		position: absolute;
		top: 50%;
		right: 120%;
		width: 160upx;
		height: 0;
		border-bottom: 1upx solid #000;;
	}
	.other-login-way text:after {
		content: '';
		position: absolute;
		top: 50%;
		left: 120%;
		width: 160upx;
		height: 0;
		border-bottom: 1upx solid #000;;
	}
	.other-way-list {
		/* display: flex; */
		/* align-items: center; */
		text-align: center;
	}
	.other-login {
		width: 160upx;
		height: 160upx;
	}
	.login-input {
		display: flex;
		align-items: center;
		border-bottom: 1upx solid #ccc;
		width: 80%;
		padding-bottom: 15upx;;
		margin-bottom: 80upx;
	}
	.login-input image {
		width: 50upx;
		height: 50upx;
		margin-right: 10upx;
	}
	.login-input input {
		text-align: left;
		flex-grow: 1;
	}
	.login-page-top {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 100%;
		min-height: 850upx;
		text-align: center;
	}
	
	
</style>
