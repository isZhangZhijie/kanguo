<template>
    <view class="index">
		<view class="top-img-box">
			<image src="/static/images/poster.png" mode="aspectFill"></image>
			<view class="video-detail">
				<view class="video-title">蚀日风暴</view>
				<view class="text">共36集</view>
				<view class="text">1618个视频</view>
				<view class="guanzhu">+关注</view>
			</view>
		</view>
		<view id="tab-bar" class="swiper-tab-bar">
			<view v-for="(tab,index) in tabBars" :key="tab.id" :class="['swiper-tab-list',tabIndex==index ? 'active' : '']"
				:id="tab.id" :data-current="index" @tap="tapTab">{{tab.name}}</view>
		</view>
	
        <swiper :current="tabIndex" class="swiper-box" duration="100" @change="changeTab">
            <swiper-item>
				<scroll-view scroll-y style="width:100%;height:100%">
					
					
					
					<view class="video-about-tab">
						<text :class="[showPianduan?'active':'']" style="font-size: 16px;margin-right: 50upx;" @tap="goPianduan">精彩片段</text>
						<text :class="[showPianduan?'':'active']" style="font-size: 16px;" @tap="goFenji">分集剧情</text>
					</view>
					
					<view class="pianduan" v-show="showPianduan">
						<view class="video-list">
							<video-item v-for="val in [1,2,3]" :key="val"></video-item>
						</view>
					</view>
					<view class="fenji" v-show="!showPianduan">
						欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧
					</view>
					
				</scroll-view>
            </swiper-item>
			<swiper-item>
				<scroll-view scroll-y style="width:100%;height:100%">
					<view class="comment-list">
						<view class="comment-item">
							<image src="/static/images/massage_button_fensi@3x.png" mode="widthFix"></image>
							<view class="comment-box">
								<view class="name">剧情死忠粉</view>
								<view class="main-comment">
									这是一条神评这是一条神评这是一条神评这是一条神评这是一条神评这是一条神评这是一条神评
								</view>
								<view class="reply-comment">
									<view class="reply-item">
										<view class="reply-name">@你猜我猜不猜</view>
										<view class="reply-text">这是一条神评</view>
									</view>
									<view class="reply-item">
										<view class="reply-name">@啥名字</view>
										<view class="reply-text">这是一条神评</view>
									</view>
								</view>
							</view>
							<view class="dianzan" @tap="dianzan">
								<image src="/static/images/dianzan0.png" mode="widthFix"></image>
								361
							</view>
						</view>
						<view class="comment-item">
							<image src="/static/images/massage_button_fensi@3x.png" mode="widthFix"></image>
							<view class="comment-box">
								<view class="name">剧情死忠粉</view>
								<view class="main-comment">
									这是一条神评
								</view>
								<view class="reply-comment">
									<view class="reply-item">
										<view class="reply-name">@你猜我猜不猜</view>
										<view class="reply-text">这是一条神评</view>
									</view>
									<view class="reply-item">
										<view class="reply-name">@啥名字</view>
										<view class="reply-text">这是一条神评</view>
									</view>
								</view>
							</view>
							<view class="dianzan" @tap="dianzan">
								<image src="/static/images/dianzan0.png" mode="widthFix"></image>
								361
							</view>
						</view>
						<view class="comment-item">
							<image src="/static/images/massage_button_fensi@3x.png" mode="widthFix"></image>
							<view class="comment-box">
								<view class="name">剧情死忠粉</view>
								<view class="main-comment">
									这是一条神评这是一条神评这是一条神评这是一条神评这是一条神评这是一条神评这是一条神评
								</view>
							</view>
							<view class="dianzan" @tap="dianzan">
								<image src="/static/images/dianzan0.png" mode="widthFix"></image>
								361
							</view>
						</view>
						<view class="comment-item">
							<image src="/static/images/massage_button_fensi@3x.png" mode="widthFix"></image>
							<view class="comment-box">
								<view class="name">剧情死忠粉</view>
								<view class="main-comment">
									这是一条神评
								</view>
							</view>
							<view class="dianzan" @tap="dianzan">
								<image src="/static/images/dianzan0.png" mode="widthFix"></image>
								361
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
        </swiper>

    </view>
</template>
<script>
	import videoItem from '../../components/video-item.vue'
    export default {
        components: {
			videoItem
        },
        data() {
            return {
                isClickChange: false,
                tabIndex: 0,
                newsitems: [123,456],
                tabBars: [{
                    name: '精彩片段',
                    id: 'duanpian'
                }, {
                    name: '文字剧情',
                    id: 'pinglun'
                }],
				showPianduan: true,
				sort: 0
            }
        },
        onLoad: function() {
            // this.newsitems = this.randomfn()
        },
        methods: {
			goBack() {
				uni.navigateBack({
					delta: 1
				});
			},
            changeTab(e) {
                let index = e.target.current;
                if (this.isClickChange) {
                    this.tabIndex = index;
                    this.isClickChange = false;
                    return;
                }
                this.isClickChange = false;
                this.tabIndex = index; //一旦访问data就会出问题
            },
            tapTab(e) { //点击tab-bar
                if (this.tabIndex === e.target.dataset.current) {
                    return false;
                } else {
                    this.isClickChange = true;
                    this.tabIndex = e.target.dataset.current
                }
            },
			goPianduan() {
				if(!this.showPianduan) {
					this.showPianduan = !this.showPianduan
				}
			},
			goFenji() {
				if(this.showPianduan) {
					this.showPianduan = !this.showPianduan
				}
			},
			dianzan(e) {
				console.log(e)
			}
        }
    }
</script>

<style>

	
	
	

	.top-img-box {
		position: relative;
		margin-bottom: 0;
		height: 422upx;
	}
	.top-img-box image {
		/* position: absolute; */
		
		width: 100%;
		height: 100%;
		display: block;
	}
	.video-detail {
		position: absolute;
		bottom: 40upx;
		left: 40upx;
		color: #fff;
	}
	.video-detail .video-title {
		font-size: 40upx;
		font-weight: bold;
	}
	.video-detail .text {
		font-size: 36upx;
	}
	.video-detail .guanzhu {
		display: inline-block;
		padding: 2upx 20upx;
		margin-top: 10upx;
		font-size: 38upx;
		background: #feda46;
		border-radius: 10upx;
		color: #000;
	}
	.back {
		position: absolute;
		width: 40upx;
		height: 40upx;
		top: 50upx;
		left: 40upx;
	}
    .index {
        /* overflow: hidden; */
        height: 100%;
		background: #fff;
    }
	
    .swiper-tab-bar {
		display: flex;
		align-items: center;
		justify-content: space-around;
        width: 100%;
        white-space: nowrap;
        height: 90upx;
		box-shadow: 0 0 30upx 0upx rgba(0,0,0,.2);
		background: #fff;
    }


    .swiper-tab-list {
		position: relative;
        font-size: 36upx;
        color: #555;
    }
	.swiper-tab-bar .active {
		color: #363636;
		font-weight: bold;
	}
	.swiper-tab-bar .active::after {
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
		border-radius: 20upx;;
		bottom: 0upx;
		width: 50upx;
		height: 10upx;
		background: #feda46;
		content: '';
	}

    .swiper-box {
        width: 100%;
		box-sizing: border-box;
        height: calc(100% - 512upx);
    }
	
	
	

	.video-about-tab {
		padding: 0 0 10upx 40upx;
		border-bottom: 1px solid #e9e9e9;
		font-size: 40upx;
		color: #9c9c9c;
	}
	.video-about-tab text {
		position: relative;
	}
	.video-about-tab .active {
		color: #363636;
		font-size: 42upx;
		font-weight: bold;
	}
	.video-about-tab .active::after {
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
		border-radius: 20upx;;
		bottom: 0upx;
		width: 50upx;
		height: 10upx;
		background: #feda46;
		content: '';
	}
	
	.fenji {
		padding: 20upx 40upx;
		font-size: 36upx;
		text-indent: 2em;
	}
	
	.comment-list {
		padding: 40upx 40upx;
	}
	.comment-item {
		position: relative;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		margin-bottom: 40upx;
	}
	.comment-item > image {
		flex-shrink: 0;
		width: 80upx;
		height: 80upx;
		border-radius: 50%;
		margin-right: 20upx;
	}
	.comment-box {
		flex-grow: 1;
	}
	.comment-box .name {
		font-size: 30upx;
		color: #666;
	}
	.comment-box .main-comment {
		padding-right: 100upx;
		margin-bottom: 20upx;
		font-size: 34upx;
	}
	.reply-comment {
		padding: 10upx 20upx;
		background: #efefef;
		border-radius: 10upx;
	}
	.reply-item {
		margin-bottom: 10upx;
	}
	.reply-name {
		font-size: 30upx;
		color: #666;
	}
	.reply-text {
		font-size: 34upx;
	}
	
	.dianzan {
		position: absolute;
		top: -14upx;
		right: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.dianzan > image {
		width: 60upx;
	}
</style>
