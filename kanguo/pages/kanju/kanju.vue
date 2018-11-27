<template>
    <view class="index">
		<view class="video-box">
			<video src="https://www.xitieba.com/video/new/YS_PCVedio.webm" poster="/static/images/poster.png" controls>
				<cover-image class="back" @click="goBack" src="/static/images/common_return2@3x.png"></cover-image>
			</video>
		</view>
		<view id="tab-bar" class="swiper-tab-bar">
			<view v-for="(tab,index) in tabBars" :key="tab.id" :class="['swiper-tab-list',tabIndex==index ? 'active' : '']"
				:id="tab.id" :data-current="index" @tap="tapTab">{{tab.name}}</view>
		</view>
	
        <swiper :current="tabIndex" class="swiper-box" duration="100" @change="changeTab">
            <swiper-item>
				<scroll-view scroll-y style="width:100%;height:100%">
					<view class="author">
						<view class="author-about">
							<image src="/static/images/massage_button_fensi@3x.png" mode="widthFix"></image>
							<text class="name">剧情死忠粉</text>
						</view>
						<view class="right">
							+关注
						</view>
					</view>
					<view class="title">
						勇闯AK火力网，凌风一枪生擒毒枭
					</view>
					<view class="action-row">
						<view class="love">
							<image src="/static/images/common__button_dianzan0@3x.png" mode="widthFix"></image>
							2124
						</view>
						<view class="share">
							<image src="/static/images/common__button_fenxiang@3x.png" mode="widthFix"></image>
							320
						</view>
						<view class="guanzhu">
							<image src="/static/images/common__button_keep0@3x.png" mode="widthFix"></image>
							870
						</view>
						<view class="download">
							<image src="/static/images/common__button_download@3x.png" mode="widthFix"></image>
							下载
						</view>
					</view>
					
					<view class="dashed-line"></view>
					
					<view class="all-video">
						<view class="all-video-btn">
							<view class="img-box img-box-width100">
								<image src="/static/images/juzhao.png" mode="widthFix"></image>
							</view>
							<view class="text">
								<view class="title1 xtb-3dots">
									蚀日风暴风暴风暴
								</view>
								<view class="arrow-right">
									全部视频
									<image src="/static/images/common__button_enter@3x.png" mode="widthFix"></image>
								</view>
							</view>
						</view>
						<view class="other-way">
							<image src="/static/images/aiqiyi@3x.png" mode="widthFix"></image>
							<image src="/static/images/youku@3x.png" mode="widthFix"></image>
							<image src="/static/images/tengxun@3x.png" mode="widthFix"></image>
						</view>
					</view>
					
					<view class="video-about-tab">
						<text :class="[showPianduan?'active':'']" style="font-size: 16px;margin-right: 50upx;" @tap="goPianduan">精彩片段</text>
						<text :class="[showPianduan?'':'active']" style="font-size: 16px;" @tap="goFenji">分集剧情</text>
					</view>
					
					<view class="pianduan" v-show="showPianduan">
						<scroll-view scroll-x class="video-list">
							<view class="video-item" v-for="(item, index) in videoList" :key="index">
								<view class="img-box img-box-width100">
									<image src="/static/images/juzhao.png" mode="widthFix"></image>
									<view class="shadow"></view>
									<text>热度：23W+</text>
								</view>
							</view>
						</scroll-view>
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
		
		<view class="ipt-box">
			<textarea placeholder="来发条热门评论吧!" name="textarea" auto-height />
			<image src="/static/images/common__button_emoj@3x.png" mode="widthFix"></image>
			<image src="/static/images/common__button_fasong@3x.png" mode="widthFix"></image>
		</view>
    </view>
</template>
<script>
    export default {
        components: {
        },
        data() {
            return {
                isClickChange: false,
                tabIndex: 0,
                newsitems: [123,456],
                tabBars: [{
                    name: '短片',
                    id: 'duanpian'
                }, {
                    name: '评论(1210)',
                    id: 'pinglun'
                }],
				showPianduan: true,
				videoList: [1,2,3,4,5,6]
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
	.ipt-box {
		position: fixed;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 20upx 40upx;
		background: #fff;
		box-shadow: 0 0 30upx 0upx rgba(0,0,0,.2);
	}
	.ipt-box textarea {
		padding: 10upx 20upx;
		background: #f1f1f1;
		border: 1px solid #e9e9e9;
		/* border-bottom: 1px solid #e9e9e9; */
		border-radius: 10upx;
		font-size: 36upx;
		/* line-height: 1; */
	}
	.textarea-placeholder {
		font-size: 36upx;
		/* line-height: 2; */
	}
	.ipt-box > image {
		width: 90upx;
		margin-left: 30upx;
	}
	
	
	
	

	.video-box {
		margin-bottom: 0;
	}
	.video-box video {
		position: relative;
		display: block;
		height: 422upx;
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
		padding-bottom: 100upx;
		box-sizing: border-box;
        height: calc(100% - 512upx);
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
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
		margin-right: 30upx;
	};
	.author-about .name {
		font-size: 36upx;
		color: #363636;
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
		font-size: 40upx;
		color: #363636;
	}
	
	.action-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 40upx;
		font-size: 36upx;
	}
	.action-row > view {
		display: flex;
		align-items: center;
		/* justify-content: space-between; */
	}
	.action-row > view image {
		margin-right: 8upx;
	}
	.dashed-line {
		border-bottom: 1px dashed #e9e9e9;
		margin: 40upx 0 30upx;
	}
	
	
	.all-video {
		padding: 0 40upx;
		margin-bottom: 80upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.all-video-btn {
		width: 320upx;
		padding: 16upx;
		margin-right: 30upx;
		border-radius: 20upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #e6e6e6;
	}
	
	.all-video-btn .img-box {
		margin-right: 10upx;
		width: 110upx;
		height: 110upx;
		overflow: hidden;
		border-radius: 10upx;
		flex-shrink: 0;
	}
	.all-video-btn .text {
		flex-grow: 1;
	}
	.all-video-btn .text .title1 {
		padding: 0;
		font-size: 32upx;
		width: 180upx;
		font-weight: bold;
	}
	.all-video-btn .arrow-right {
		display: flex;
		align-items: center;
		color: #9c9c9c;
	}
	.all-video-btn .arrow-right image {
		margin-left: 8upx;
		width: 40upx;
	}
	.other-way {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: nowrap;
		flex-grow: 1;
	}
	.other-way image {
		width: 80upx;
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
	.video-list {
		width: 100%;
		white-space: nowrap;
		padding: 40upx 0;
		box-sizing: border-box;
	}
	.video-item {
		display: inline-block;
		margin-bottom: 20upx;
		margin-right: 40upx;
	}
	.video-item:first-of-type {
		margin-left: 40upx;
	}
	.video-item .img-box {
		width: 280upx;
		height: 200upx;
		border-radius: 20upx;
	}
	.video-item text {
		position: absolute;
		left: 30upx;
		bottom: 0upx;
		font-size: 36upx;
		color: #fff;
	}
	.shadow {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 0;
		box-shadow: 0 0 40upx 40upx rgba(0,0,0,.4);
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
