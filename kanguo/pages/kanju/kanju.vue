<template>
    <view class="index">
		<view class="video-box">
			<video src="https://www.xitieba.com/video/new/YS_PCVedio.webm" controls></video>
		</view>
        <view id="tab-bar" class="swiper-tab">
            <view v-for="(tab,index) in tabBars" :key="tab.id" :class="['swiper-tab-list',tabIndex==index ? 'active' : '']"
                :id="tab.id" :data-current="index" @tap="tapTab">{{tab.name}}</view>
        </view>
        <swiper :current="tabIndex" class="swiper-box" duration="300" @change="changeTab">
            <swiper-item v-for="(tab,index1) in newsitems" :key="index1">
                {{tab}}
            </swiper-item>
        </swiper>
    </view>
</template>
<script>
    // import mediaList from '@/components/tab-nvue/mediaList.vue'
    export default {
        components: {
            // mediaList
        },
        data() {
            return {
                scrollLeft: 0,
                isClickChange: false,
                tabIndex: 0,
                newsitems: [123,456],
                tabBars: [{
                    name: '短片',
                    id: 'guanzhu'
                }, {
                    name: '评论',
                    id: 'tuijian'
                }]
            }
        },
        onLoad: function() {
            this.newsitems = this.randomfn()
        },
        methods: {
            async changeTab(e) {
                let index = e.target.current;
                if (this.isClickChange) {
                    this.tabIndex = index;
                    this.isClickChange = false;
                    return;
                }
                let tabBar = await this.getElSize("tab-bar"),
                    tabBarScrollLeft = tabBar.scrollLeft;
                let width = 0;

                for (let i = 0; i < index; i++) {
                    let result = await this.getElSize(this.tabBars[i].id);
                    width += result.width;
                }
                let winWidth = uni.getSystemInfoSync().windowWidth,
                    nowElement = await this.getElSize(this.tabBars[index].id),
                    nowWidth = nowElement.width;
                if (width + nowWidth - tabBarScrollLeft > winWidth) {
                    this.scrollLeft = width + nowWidth - winWidth;
                }
                if (width < tabBarScrollLeft) {
                    this.scrollLeft = width;
                }
                this.isClickChange = false;
                this.tabIndex = index; //一旦访问data就会出问题
            },
            getElSize(id) { //得到元素的size
                return new Promise((res, rej) => {
                    uni.createSelectorQuery().select("#" + id).fields({
                        size: true,
                        scrollOffset: true
                    }, (data) => {
                        res(data);
                    }).exec();
                })
            },
            async tapTab(e) { //点击tab-bar
                if (this.tabIndex === e.target.dataset.current) {
                    return false;
                } else {
					console.log(222)
                    let tabBar = await this.getElSize("tab-bar"),
                        tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
                    this.scrollLeft = tabBarScrollLeft;
                    this.isClickChange = true;
                    this.tabIndex = e.target.dataset.current
                }
            },
        }
    }
</script>

<style>
    page {
        display: flex;
    }

	.video-box {
		margin-bottom: 0;
	}
	.video-box video {
		display: block;
	}
    .index {
        display: flex;
        flex: 1;
        flex-direction: column;
        overflow: hidden;
        height: 100%;
    }

    .list {
        width: 750upx;
        height: 100%;
    }

    .swiper-tab {
		display: flex;
		align-items: center;
		justify-content: space-around;
        width: 100%;
        white-space: nowrap;
        /* line-height: 100upx; */
        height: 100upx;
        border-bottom: 1px solid #c8c7cc;
    }


    .swiper-tab-list {
        font-size: 30upx;
        /* width: 150upx; */
        /* display: inline-block; */
        /* text-align: center; */
        color: #555;
    }

    .active {
        color: #007AFF;
    }

    .swiper-box {
        flex: 1;
        width: 100%;
        height: calc(100% - 100upx);
    }

    .loadmore {
        height: 70upx;
        width: 750upx;
        flex-direction: column;
        justify-content: center;
    }

    .loadmore-text {
        font-size: 30upx;
        text-align: center;
        color: #999999;
    }
</style>
