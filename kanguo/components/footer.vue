<template>
	<view class="footer">
		<view class="jingxuan">
			<image src="/static/images/nav_jingxuan0@3x.png" mode="widthFix"></image>精选
		</view>
		<view class="faxian">
			<image src="/static/images/nav_faxian0@3x.png" mode="widthFix"></image>发现
		</view>
		<view class="fabu">
			<image src="/static/images/nav_button_fabu@3x.png" mode="widthFix"></image>
		</view>
		<view class="massage">
			<image src="/static/images/nav_massage0@3x.png" mode="widthFix"></image>消息
		</view>
		<view class="mine">
			<image src="/static/images/nav_mine0@3x.png" mode="widthFix"></image>我的
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
	}
</script>

<style>
	.footer {
    	display: flex;
    	align-items: center;
		position: fixed;
		justify-content: space-around;
		bottom: 0;
		padding: 5px 0;
		border-top: 1px solid #9c9c9c;
		width:100%;
		background: #fff;
		z-index: 10000;
    }
    .footer>view {
    	display: flex;
    	flex-direction: column;
    	align-items: center;
    	color: #9c9c9c;
    }
	.footer image {
		width: 60upx;
		height: 60upx;
	}
	.footer .fabu {
		display: block;
		width: 50upx;
		height: 50upx;
	}
	.fabu image {
		position: absolute;
		top: -35upx;
		left: 0;
		right: 0;
		margin: auto;
		width: 150upx;
		height: 150upx;
	}
</style>
