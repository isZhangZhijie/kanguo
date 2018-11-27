<template>
	<view class="video-box">
		<view class="author">
			<view class="author-about">
				<image src="/static/images/massage_button_fensi@3x.png" mode="widthFix"></image>
				<view class="detail">
					<text class="name">剧情死忠粉</text>
					<text class="time">14:05</text>
				</view>
			</view>
			<view class="right">
				+关注
			</view>
		</view>
		<view class="title">郭富城惊天演技，戏耍众人</view>
		<video id="myVideo" poster="/static/images/poster.png" src="http://vjs.zencdn.net/v/oceans.mp4" controls></video>
		
		<view class="action-row">
			<view class="love">
				<image src="/static/images/common__button_dianzan0@3x.png" mode="widthFix"></image>
				2124
			</view>
			<view class="comment">
				<image src="/static/images/common__button_Pinglun@3x.png" mode="widthFix"></image>
				2124
			</view>
			<view class="share">
				<image src="/static/images/common__button_shareAll@3x.png" mode="widthFix"></image>
				2124
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	video {
		position: relative;
		width: 100%;
		height: 422upx;
	}
	.video-box {
		margin-bottom: 20upx;
		background: #fff;
	}
	.author {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20upx 40upx 0;
		margin-bottom: 10upx;
	}
	.author-about {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.author-about image {
		width: 90upx;
		height: 90upx;
		border-radius: 50%;
		margin-right: 30upx;
	};
	.author-about .detail {
		display: flex;
		flex-direction: column;
	}
	.author-about .detail .name {
		font-size: 32upx;
		color: #363636;
	}
	.author-about .detail .time {
		font-size: 32upx;
		color: #9c9c9c;
	}
	.author .right {
		width: 140upx;
		height: 70upx;
		line-height: 70upx;
		text-align: center;
		border-radius: 70upx;
		background: #feda46;
	}
	.title {
		font-size: 36upx;
		font-weight: bold;
		padding: 0 40upx;
		margin-bottom: 15upx;
	}
	
	.action-row {
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 10upx 0 20upx;
	}
	.action-row > view {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 32upx;
	}
	.action-row > view image {
		width: 40upx;
		height: 40upx;
		margin-right: 15upx;
	}
</style>
