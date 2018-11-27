<template>
    <view class="page">
        <video class="video" id="demoVideo" :controls="disable" :show-fullscreen-btn="disable" :show-play-btn="disable"
         :show-center-play-btn="disable" :enable-progress-gesture="disable" @fullscreenchange="fullscreenchange" src="https://www.dcloud.io/uniapp/wap2appvsnative.mp4">
            <cover-view class="controls-title">简单的自定义 controls</cover-view>
            <cover-image class="controls-play img" @click="play" src="/static/images/common_play@3x.png"></cover-image>
            <cover-image class="controls-pause img" @click="pause" src="/static/images/common_stop@3x.png"></cover-image>
        </video>
    </view>
</template>
<script>
    export default {
        data() {
            return {
                videoCtx: null,
                disable: false
            }
        },
        mounted() {
            this.videoCtx = uni.createVideoContext('demoVideo')
        },
        methods: {
            play(event) {
                this.videoCtx.play();
                uni.showToast({
                    title: '开始播放',
                    icon: 'none'
                });
            },
            pause(event) {
                this.videoCtx.pause();
                uni.showToast({
                    title: '暂停播放',
                    icon: 'none'
                });
            }
        }
    }
</script>
<style>
    .page {
        display: flex;
        justify-content: center;
    }

    .video {
        position: relative;
    }

    cover-view,
    cover-image {
        display: inline-block;
    }

    .img {
        position: absolute;
        width: 100upx;
        height: 100upx;
        top: 50%;
        margin-top: -50upx;
    }

    .controls-play {
        left: 50upx;
    }

    .controls-pause {
        right: 50upx;
    }

    .controls-title {
        width: 100%;
        text-align: center;
        color: #FFFFFF;
    }
</style>