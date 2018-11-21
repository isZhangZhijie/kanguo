<template>
	<view>
		<view class="top-box">
			<view class="search-box">
				<view class="search-btn">
					<image src="../../static/images/massge_button_find@3x.png" mode="widthFix"></image>
					搜你想看
				</view>
				<view class="view-history">
					<image src="../../static/images/massge_button_visited@3x.png" mode="widthFix"></image>
					记录
				</view>
			</view>
			<view class="sel-box">
				<scroll-view scroll-x="true" class="sel-row" v-for="(selRow, index) in selData" :key="index">
					<text class="sel-item" :class="[selected[index]==itemIndex?'active':'']" v-for="(selItem, itemIndex) in selRow" :key="itemIndex">
						{{ selItem }}
					</text>
				</scroll-view>
			</view>
		</view>
		<view class="img-list">
			<view class="img-item xtb-3dots" v-for="(imgItem, index) in [1,2,3,4,5,6,7,8,9,10]" :key="index">
				<image src="../../static/images/juzhao.png" mode="widthFix"></image>
				极速青春
			</view>
		</view>

		<footfoot></footfoot>
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
				selData: [
					['推荐', '近期上映', '已剧终'],
					['全部地区', '大陆', '香港', '台湾', '韩国', '美国', '英国', '泰国', '日本', '其他'],
					['全部类型', '偶像', '古装', '武侠', '军事', '神话', '科幻', '搞笑', '悬疑', '历史', '儿童', '农村', '都市', '家庭', '言情'],
					['最高人气', '最多评论', '最多收藏']
				],
				selected: [0, 1, 2, 0]
			};
		},
		onLoad() {
			
		}
	}
</script>

<style>
	.top-box {
		position: fixed;
		width: 100%;
		background: #fff;
	}
	.search-box {
		padding: 50upx 40upx 0;
		margin-bottom: 40upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 38upx;
	}
	.search-btn {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-grow: 1;
		padding-left: 20upx;
		margin-right: 20upx;
		height: 80upx;
		border-radius: 10upx;
		color: #c9c9c9;
		background: #f1f1f1;
	}
	.search-btn image {
		margin-right: 20upx;
		width: 50upx;
		height: 50upx;
	}
	.view-history {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		color: #363636;
	}
	.view-history image {
		margin-right: 10upx;
		width: 50upx;
		height: 50upx;
	}
	.sel-box {
		/* padding: 0 40upx; */
		font-size: 38upx;
		color: #363636;
	}
	.sel-row {
		white-space: nowrap;
		width: 100%;
		margin-bottom: 20upx;
		/* padding: 0 40upx; */
	}
	.sel-item {
		margin-left: 40upx;
	}
	.sel-item:last-child {
		margin-right: 40upx;
	}
	.sel-item.active {
		font-weight: bold;
		color: #ecbe07;
	}
	.img-list {
		padding: 500upx 0 130upx 40upx;
		width: 100%;
		overflow: hidden;
	}
	.img-item {
		float: left;
		display: flex;
		flex-direction: column;
		margin-right: 20upx;
		margin-bottom: 25upx;
		width: 210upx;
	}
	.img-item:nth-of-type(3n) {
		margin-right: 0;
	}
	.img-item image {
		width: 100%;
	}
</style>
