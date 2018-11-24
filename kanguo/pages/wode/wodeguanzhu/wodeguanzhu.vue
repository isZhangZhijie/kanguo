<template>
<view class="page">
    <view class="header">
        <view class="statusBar" :style="{height:statusBarHeight+'px'}"></view><!-- 状态栏占位 -->
        <view class="info">
			<text :class="[showYonghu?'active':'']" style="font-size: 16px;margin-right: 50upx;" @tap="goYonghu">用户</text>
			<text :class="[showYonghu?'':'active']" style="font-size: 16px;" @tap="goYingju">影剧</text>
			<image src="../../../static/images/common_return@3x.png" mode="widthFix" class="go-wode" @tap="goWode"></image>
		</view>
    </view>
	<view class="" v-show="showYonghu">
		<view class="yonghu-list" v-if="yonghuList.length > 0">
			<view class="yonghu-num">您关注了{{yonghuList.length}}位用户</view>
			<view class="msg-list">
				<view class="msg-item yonghu-item" v-for="(i,index) in yonghuList" :key="index">
					<image src="../../../static/images/common__button_emoj@3x.png" mode="widthFix"></image>
					<view class="msg-detail">
						<view class="msg-title">我是谁</view>
						<view class="msg-text">幽默影剧发布人</view>
					</view>
					<view class="guanzhu-btn">
						<image src="../../../static/images/common_del@3x.png" mode="widthFix"></image>
						取关
					</view>
				</view>
			</view>
		</view>
		<view class="no-yonghu" v-else>
			<view class="no-yonghu-text1">你还没有关注任何用户</view>
			<view class="no-yonghu-text2">错过的精彩那么大</view>
		</view>
	</view>
	<view class="" v-show="!showYonghu">
		<view class="yonghu-list" v-if="yingjuList.length > 0">
			<view class="msg-list">
				<view class="msg-item yingju-item" v-for="(i,index) in yonghuList" :key="index">
					<image class="" src="../../../static/images/juzhao.png" mode="widthFix"></image>
					<view class="msg-detail">
						<view class="msg-title">蚀日风暴</view>
						<view class="msg-text">1234精彩影评</view>
					</view>
					<view class="guanzhu-btn">
						<image src="../../../static/images/common_del@3x.png" mode="widthFix"></image>
						关注
					</view>
				</view>
			</view>
		</view>
		<view class="no-yonghu" v-else>
			<view class="no-yonghu-text1">你还没有关注任何影剧</view>
			<view class="no-yonghu-text2">错过的精彩那么大</view>
		</view>
	</view>
</view>
</template>

<script>
export default {
    data: {
        statusBarHeight: '',
		showYonghu: true,
		yonghuList: [1,2,3,4,5,6,7,8,9],
		yingjuList: [1,2,3,4,5,6,7,8,9]
    },
    created() {
        let _t = this;
        setTimeout(() => { //获取状态栏高度，setTimeout后才能调用uni.
            uni.getSystemInfo({
                success: function(res) {
                    _t.statusBarHeight = res.statusBarHeight;
                    console.log(_t.statusBarHeight);
                }
            });
        }, 1);
    },
	methods: {
		goWode() {
			console.log(123)
			uni.switchTab({
				url: '../wode'
			});
		},
		goYonghu() {
			if(!this.showYonghu) {
				this.showYonghu = !this.showYonghu
			}
		},
		goYingju() {
			if(this.showYonghu) {
				this.showYonghu = !this.showYonghu
			}
		}
	}
};
</script>

<style>
.page {
	padding-top: 150upx;
	height: 100%;
    background-color: #fff;
}
.header {
    width: 100%;
    position: fixed;
    top: 0;
	border-bottom: 1upx solid #c9c9c9;
	background-color: #fff;
	z-index: 100;
}
.info {
	position: relative;
    height: 100upx;
	display: flex;
    justify-content: center;
    align-items: center;
}
.info text {
	position: relative;
}
.info .active {
	font-size: 50upx;
	font-weight: bold;
}
.info .active::after {
	position: absolute;
	left: 0;
	right: 0;
	margin: auto;
	border-radius: 20upx;;
	bottom: 0;
	width: 50upx;
	height: 10upx;
	background: #feda46;
	content: '';
}
.go-wode {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 30upx;
	margin: auto;
	width: 40upx;
}

.no-yonghu {
	padding-top: 250upx;
	text-align: center;
}
.no-yonghu-text1 {
	font-size: 50upx;
	color: #363636;
}
.no-yonghu-text2 {
	font-size: 36upx;
	color: #363636;
}
.yonghu-num {
	text-align: center;
	color: #c9c9c9;
}

.msg-item {
	position: relative;
	padding: 30upx 40upx;
	border-bottom: 1px solid #c9c9c9;
	display: flex;
	align-items: center;
	justify-content: space-between;
	/* background: #fff; */
}
.msg-item > image {
	width: 140upx;
	margin-right: 20upx;
}
.yonghu-item > image {
	border-radius: 50%;
}
.msg-detail {
	flex-grow: 1;
	display: block;
}
.msg-title {
	display: flex;
	justify-content: space-between;
	font-size: 40upx;
	font-weight: bold;
	color: #363636;
}
.msg-text {
	display: block;
	display: flex;
	justify-content: space-between;
	width: 100%;
}
.guanzhu-btn {
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;
	top: 0;
	bottom: 0;
	right: 40upx;
	width: 140upx;
	height: 70upx;
	color: #fff;
	font-size: 38upx;
	border-radius: 70upx;
	background: #fe4646;
}
.guanzhu-btn image {
	width: 28upx;
}
	
</style>