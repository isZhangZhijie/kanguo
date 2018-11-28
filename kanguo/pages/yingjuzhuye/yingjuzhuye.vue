<template>
    <view class="index">
		<view class="top-img-box">
			<image class="poster" src="/static/images/poster.png" mode="aspectFill"></image>
			<view class="video-detail">
				<view class="video-title">蚀日风暴</view>
				<view class="text">共36集</view>
				<view class="text">1618个视频</view>
				<view class="guanzhu">+关注</view>
			</view>
			<image @tap="goBack" class="back" src="/static/images/common_return@3x.png" mode="widthFix"></image>
		</view>
		<view id="tab-bar" class="swiper-tab-bar">
			<view v-for="(tab,index) in tabBars" :key="tab.id" :class="['swiper-tab-list',tabIndex==index ? 'active' : '']"
				:id="tab.id" :data-current="index" @tap="tapTab">{{tab.name}}</view>
		</view>
	
		<view class="pianduan" v-show="tabIndex == 0">
			<view class="video-about-tab">
				<view v-for="(tab, index) in sortTabBars" :key="tab.id" :class="[sortTabIndex==index ? 'active' : '']"
					:id="tab.id" :data-current="index" @tap="sortTapTab">{{tab.name}}</view>
			</view>
			
			<view class="anjishu" v-show="sortTabIndex == 0">
				<scroll-view scroll-x class="sort-jishu">
					<view v-for="(tab, index) in sortJishuBars" :key="index" :class="[sortJishuIndex==index ? 'active' : '']"
						:data-current="index" @tap="sortJishu">{{tab}}</view>
				</scroll-view>
				<view class="video-list">
					<video-item v-for="val in [1,2,3]" :key="val"></video-item>
				</view>
			</view>
			<view class="anrenqi" v-show="sortTabIndex == 1">
				<view class="video-list">
					<video-item v-for="val in [1,2,3]" :key="val"></video-item>
				</view>
			</view>
			<view class="anbofangliang" v-show="sortTabIndex == 2">
				欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧
			</view>
		</view>
		
		<view class="juqing" v-show="tabIndex == 1">
			<scroll-view scroll-x class="sort-jishu">
				<view v-for="(tab, index) in sortJuqingBars" :key="index" :class="[sortJuqingIndex==index ? 'active' : '']"
					:data-current="index" @tap="sortJuqing">{{tab}}</view>
			</scroll-view>
			<view class="juqing-list">
				<view class="juqing-item">
					<view class="title">第<text>1</text>集</view>
					<view class="text">
						欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧
					</view>
				</view>
				<view class="juqing-item">
					<view class="title">第<text>2</text>集</view>
					<view class="text">
						欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧
					</view>
				</view>
				<view class="juqing-item">
					<view class="title">第<text>3</text>集</view>
					<view class="text">
						欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧欢迎来到喜帖吧
					</view>
				</view>
			</view>
		</view>
		
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
                tabIndex: 0,
                tabBars: [{
                    name: '精彩片段',
                    id: 'duanpian'
                }, {
                    name: '文字剧情',
                    id: 'pinglun'
                }],
				sortTabIndex: 0,
				sortTabBars: [{
					name: '按集数',
					id: 'jishu'
				}, {
					name: '按人气',
					id: 'renqi'
				}, {
					name: '按播放量',
					id: 'bofangliang'
				}],
				sortJishuIndex: 0,
				sortJishuBars: [1,2,3,4,5,6,7,8,9],
				sortJuqingIndex: 0,
				sortJuqingBars: [1,2,3,4,5,6,7,8,9],
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
            tapTab(e) { //点击tab-bar
                if (this.tabIndex === e.target.dataset.current) {
                    return false;
                } else {
                    this.tabIndex = e.target.dataset.current
                }
            },
			sortTapTab(e) {
				if (this.sortTabIndex === e.target.dataset.current) {
					return false;
				} else {
					this.sortTabIndex = e.target.dataset.current
				}
			},
			sortJishu(e){
				if (this.sortJishuIndex === e.target.dataset.current) {
					return false;
				} else {
					this.sortJishuIndex = e.target.dataset.current
				}
			},
			sortJuqing(e) {
				if (this.sortJuqingIndex === e.target.dataset.current) {
					return false;
				} else {
					this.sortJuqingIndex = e.target.dataset.current
				}
			}
        }
    }
</script>

<style>

	
	
	
	.index {
		height: 100%;
		background: #fff;
	}

	.top-img-box {
		position: relative;
		margin-bottom: 0;
		height: 422upx;
	}
	.top-img-box .poster {
		/* position: absolute; */
		
		width: 100%;
		height: 100%;
		display: block;
	}
	.top-img-box .back {
		position: absolute;
		top: 60upx;
		left: 40upx;
		width: 40upx;
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


	
	
	

	.video-about-tab {
		padding: 30upx 0 20upx 40upx;
		border-bottom: 1px solid #e9e9e9;
		font-size: 34upx;
		color: #9c9c9c;
	}
	.video-about-tab view {
		display: inline-block;
		position: relative;
		margin-right: 40upx;
	}
	.video-about-tab .active {
		color: #363636;
		font-weight: bold;
	}
	
	
	
	.sort-jishu {
		width: 100%;
		white-space: nowrap;
		padding: 40rpx 0;
		box-sizing: border-box;
	}
	.sort-jishu view {
		display: inline-block;
		margin-left: 40upx;
		width: 80upx;
		height: 80upx;
		border: 1px solid #e9e9e9;
		border-radius: 10upx;
		text-align: center;
		line-height: 80upx;
		color: #363636;
		font-family: arial;
	}
	.sort-jishu view:last-child {
		margin-right: 40upx;
	}
	.sort-jishu view.active {
		color: #fff;
		background: #363636;
		font-weight: bold;
		border-color: #363636;
	}
	
	.juqing-list {
		padding: 40upx;
	}
	.juqing-item {
		margin-bottom: 40upx;
	}
	.juqing-item .title text {
		padding: 0 8upx;
		font-size: 42upx;
		font-family: arial;
	}
	.juqing-item .text {
		text-indent: 2em;
	}
		
		
	
	
</style>
