<template>
	<view class="container">
		<view class="page-body uni-content-info">
			<view class="avatar">
				<image :src="head_img" @click="getImage" mode="widthFix"></image>
			</view>
			<view class="input-box">
				<text>昵称：</text>
				<input type="text" v-model="nickname" maxlength="12" placeholder="12字以内" />
			</view>
			<view class="input-box">
				<text>个性签名：</text>
				<input type="text" v-model="signature" maxlength="20" placeholder="20字以内" />
			</view>
			<view class="input-box">
				<text>性别：</text>
				<!-- <radio-group class="radio-group" @change="radioChange"> -->
				<radio-group class="radio-group">
					<label class="radio">
						<radio value="2" color="#feda46" v-model="sex" />女
					</label>
					<label class="radio">
						<radio value="1" color="#feda46" v-model="sex" />男
					</label>
				</radio-group>
			</view>
			<view class="finish-btn" @tap="finish">完成</view>
			
			<view v-if="isShowImg" class='cropper-content'>
				<view class="uni-corpper" :style="'width:'+cropperInitW+'px;height:'+cropperInitH+'px;background:#000'">
					<view class="uni-corpper-content" :style="'width:'+cropperW+'px;height:'+cropperH+'px;left:'+cropperL+'px;top:'+cropperT+'px'">
						<image :src="imageSrc" :style="'width:'+cropperW+'px;height:'+cropperH+'px'"></image>
						<view class="uni-corpper-crop-box" @touchstart.stop="contentStartMove" @touchmove.stop="contentMoveing" @touchend.stop="contentTouchEnd"
						    :style="'left:'+cutL+'px;top:'+cutT+'px;right:'+cutR+'px;bottom:'+cutB+'px'">
							<view class="uni-cropper-view-box">
								<view class="uni-cropper-dashed-h"></view>
								<view class="uni-cropper-dashed-v"></view>
								<view class="uni-cropper-line-t"></view>
								<view class="uni-cropper-line-r"></view>
								<view class="uni-cropper-line-b"></view>
								<view class="uni-cropper-line-l"></view>
								<view class="uni-cropper-point point-t"></view>
								<view class="uni-cropper-point point-tr"></view>
								<view class="uni-cropper-point point-r"></view>
								<view class="uni-cropper-point point-rb" data-drag="rightBottom" @touchstart.stop="dragStart" @touchmove.stop="dragMove"></view>
								<view class="uni-cropper-point point-b"></view>
								<view class="uni-cropper-point point-bl"></view>
								<view class="uni-cropper-point point-l"></view>
								<view class="uni-cropper-point point-lt"></view>
							</view>
						</view>
					</view>
				</view>
				<view class='cropper-config'>
					<button @click="getImageInfo" style='margin-top: 30upx;'> 点击生成头像 </button>
				</view>
			</view>
			
			<canvas canvas-id="myCanvas" :style="'position:absolute;border: 1px solid red; width:'+imageW+'px;height:'+imageH+'px;top:-9999px;left:-9999px;'"></canvas>
		</view>
	</view>
</template>

<script>
	let sysInfo = uni.getSystemInfoSync();
	let SCREEN_WIDTH = sysInfo.screenWidth
	let PAGE_X, // 手按下的x位置
		PAGE_Y, // 手按下y的位置 
		PR = sysInfo.pixelRatio, // dpi
		T_PAGE_X, // 手移动的时候x的位置
		T_PAGE_Y, // 手移动的时候Y的位置
		CUT_L, // 初始化拖拽元素的left值
		CUT_T, // 初始化拖拽元素的top值
		CUT_R, // 初始化拖拽元素的
		CUT_B, // 初始化拖拽元素的
		CUT_W, // 初始化拖拽元素的宽度
		CUT_H, //  初始化拖拽元素的高度
		IMG_RATIO, // 图片长宽比例
		IMG_REAL_W, // 图片实际的宽度
		IMG_REAL_H, // 图片实际的高度
		DRAFG_MOVE_RATIO = 1, //移动时候的比例,
		INIT_DRAG_POSITION = 100, // 初始化屏幕宽度和裁剪区域的宽度之差，用于设置初始化裁剪的宽度
		DRAW_IMAGE_W = sysInfo.screenWidth // 设置生成的图片宽度

	export default {
		/**
		 * 页面的初始数据
		 */
		data() {
			return {
				name:'张志杰',
				imageSrc: '',
				isShowImg: false,
				// 图片显示区域初始化的宽高
				cropperInitW: SCREEN_WIDTH,
				cropperInitH: SCREEN_WIDTH,
				// 动态的宽高   图片显示的宽高
				cropperW: SCREEN_WIDTH,
				cropperH: SCREEN_WIDTH,
				// 动态的left top值   图片定位的left top 值
				cropperL: 0,
				cropperT: 0,

				transL: 0,
				transT: 0,

				// 图片缩放值
				scaleP: 0,
				imageW: 0,
				imageH: 0,

				// 裁剪框 宽高
				cutL: 0,
				cutT: 0,
				cutB: SCREEN_WIDTH,
				cutR: '100%',
				qualityWidth: DRAW_IMAGE_W,
				innerAspectRadio: DRAFG_MOVE_RATIO,
				
				userData: '',
				head_img: '',
				nickname: '',
				signature: '欢迎来到看过~',
				sex: '',
			}
		},
		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function (options) {
			console.log(options.userData)
			this.userData = JSON.parse(options.userData)
			this.head_img = this.userData.head_img
			this.nickname = this.userData.nickname
			this.signature = this.userData.signature
			this.sex = this.userData.sex
		},

		/**
		 * 生命周期函数--监听页面初次渲染完成
		 */
		mounted: function () {

			// this.loadImage();

		},
		methods: {
			setData: function (obj) {
				let that = this;
				Object.keys(obj).forEach(function (key) {
					that.$set(that.$data, key, obj[key])

				});
			},
			getImage: function () {
				var _this = this
				uni.chooseImage({
					success: function (res) {
						_this.setData({
							imageSrc: res.tempFilePaths[0],
						})
						_this.loadImage();
					},
				})
			},
			loadImage: function () {
				var _this = this
				uni.showLoading({
					title: '图片加载中...',
				})

				uni.getImageInfo({
					src: _this.imageSrc,
					success: function success(res) {
						IMG_RATIO = res.width / res.height
						if (IMG_RATIO >= 1) {
							IMG_REAL_W = SCREEN_WIDTH
							IMG_REAL_H = SCREEN_WIDTH / IMG_RATIO
						} else {
							IMG_REAL_W = SCREEN_WIDTH * IMG_RATIO
							IMG_REAL_H = SCREEN_WIDTH
						}
						let minRange = IMG_REAL_W > IMG_REAL_H ? IMG_REAL_W : IMG_REAL_H
						INIT_DRAG_POSITION = minRange > INIT_DRAG_POSITION ? INIT_DRAG_POSITION : minRange
						// 根据图片的宽高显示不同的效果   保证图片可以正常显示
						if (IMG_RATIO >= 1) { // 宽 >= 高
							let cutT = 0;
							let cutB = 0;
							let cutL = Math.ceil((IMG_REAL_W - IMG_REAL_H) / 2);
							let cutR = cutL;
							_this.setData({
								cropperW: SCREEN_WIDTH,
								cropperH: SCREEN_WIDTH / IMG_RATIO,
								// 初始化left right
								cropperL: Math.ceil((SCREEN_WIDTH - SCREEN_WIDTH) / 2),
								cropperT: Math.ceil((SCREEN_WIDTH - SCREEN_WIDTH / IMG_RATIO) / 2),
								cutL: cutL,
								cutT: cutT,
								cutR: cutR,
								cutB: cutB,
								// 图片缩放值
								imageW: IMG_REAL_W,
								imageH: IMG_REAL_H,
								scaleP: IMG_REAL_W / SCREEN_WIDTH,
								qualityWidth: DRAW_IMAGE_W,
								innerAspectRadio: IMG_RATIO
							})
						} else {
							let cutL = 0;
							let cutR = cutL;
							let cutT = Math.ceil((IMG_REAL_H - IMG_REAL_W) / 2);
							let cutB = cutT;
							_this.setData({
								cropperW: SCREEN_WIDTH * IMG_RATIO,
								cropperH: SCREEN_WIDTH,
								// 初始化left right
								cropperL: Math.ceil((SCREEN_WIDTH - SCREEN_WIDTH * IMG_RATIO) / 2),
								cropperT: Math.ceil((SCREEN_WIDTH - SCREEN_WIDTH) / 2),

								cutL: cutL,
								cutT: cutT,
								cutR: cutR,
								cutB: cutB,
								// 图片缩放值
								imageW: IMG_REAL_W,
								imageH: IMG_REAL_H,
								scaleP: IMG_REAL_W / SCREEN_WIDTH,
								qualityWidth: DRAW_IMAGE_W,
								innerAspectRadio: IMG_RATIO
							})
						}
						_this.setData({
							isShowImg: true
						})
						uni.hideLoading()
					}
				})
			},
			// 拖动时候触发的touchStart事件
			contentStartMove(e) {
				PAGE_X = e.touches[0].pageX
				PAGE_Y = e.touches[0].pageY
			},

			// 拖动时候触发的touchMove事件
			contentMoveing(e) {
				var _this = this
				var dragLengthX = (PAGE_X - e.touches[0].pageX) * DRAFG_MOVE_RATIO
				var dragLengthY = (PAGE_Y - e.touches[0].pageY) * DRAFG_MOVE_RATIO
				// 左移
				if (dragLengthX > 0) {
					if (this.cutL - dragLengthX < 0) dragLengthX = this.cutL
				} else {
					if (this.cutR + dragLengthX < 0) dragLengthX = -this.cutR
				}

				if (dragLengthY > 0) {
					if (this.cutT - dragLengthY < 0) dragLengthY = this.cutT
				} else {
					if (this.cutB + dragLengthY < 0) dragLengthY = -this.cutB
				}
				this.setData({
					cutL: this.cutL - dragLengthX,
					cutT: this.cutT - dragLengthY,
					cutR: this.cutR + dragLengthX,
					cutB: this.cutB + dragLengthY
				})

				PAGE_X = e.touches[0].pageX
				PAGE_Y = e.touches[0].pageY
			},

			contentTouchEnd() {

			},

			// 获取图片
			getImageInfo() {
				var _this = this;
				uni.showLoading({
					title: '图片生成中...',
				});
				// 将图片写入画布
				const ctx = uni.createCanvasContext('myCanvas');
				ctx.drawImage(_this.imageSrc, 0, 0, IMG_REAL_W, IMG_REAL_H);
				ctx.draw(true, () => {
					// 获取画布要裁剪的位置和宽度   均为百分比 * 画布中图片的宽度    保证了在微信小程序中裁剪的图片模糊  位置不对的问题 canvasT = (_this.cutT / _this.cropperH) * (_this.imageH / pixelRatio)
					var canvasW = ((_this.cropperW - _this.cutL - _this.cutR) / _this.cropperW) * IMG_REAL_W;
					var canvasH = ((_this.cropperH - _this.cutT - _this.cutB) / _this.cropperH) * IMG_REAL_H;
					var canvasL = (_this.cutL / _this.cropperW) * IMG_REAL_W;
					var canvasT = (_this.cutT / _this.cropperH) * IMG_REAL_H;
					uni.canvasToTempFilePath({
						x: canvasL,
						y: canvasT,
						width: canvasW,
						height: canvasH,
						destWidth: canvasW,
						destHeight: canvasH,
						quality: 0.5,
						canvasId: 'myCanvas',
						success: function (res) {
							uni.hideLoading()
							_this.setData({
								isShowImg: false,
								head_img: res.tempFilePath
							})
							// 成功获得地址的地方
// 							uni.previewImage({
// 								current: '', // 当前显示图片的http链接
// 								urls: [res.tempFilePath] // 需要预览的图片http链接列表
// 							})
						}
					});
				});
			},

			// 设置大小的时候触发的touchStart事件
			dragStart(e) {
				T_PAGE_X = e.touches[0].pageX
				T_PAGE_Y = e.touches[0].pageY
				CUT_L = this.cutL
				CUT_R = this.cutR
				CUT_B = this.cutB
				CUT_T = this.cutT
			},

			// 设置大小的时候触发的touchMove事件
			dragMove(e) {
				var _this = this
				var dragType = e.target.dataset.drag
				// console.log(dragType)
				var dragLengthX = (T_PAGE_X - e.touches[0].pageX) * DRAFG_MOVE_RATIO
				var dragLengthY = (T_PAGE_Y - e.touches[0].pageY) * DRAFG_MOVE_RATIO
				
				if(Math.abs(dragLengthX) >= Math.abs(dragLengthY)) dragLengthY = dragLengthX
				if(Math.abs(dragLengthX) < Math.abs(dragLengthY)) dragLengthX = dragLengthY
				
				let length = Math.abs(dragLengthX) >= Math.abs(dragLengthY) ? dragLengthX : dragLengthY
				
				// 边界
				if (CUT_B + dragLengthY < 0) length = -CUT_B
				if (CUT_R + dragLengthX < 0) length = -CUT_R
				
				let cutB = CUT_B + length;
				let cutR = CUT_R + length;

				this.setData({
					cutB: cutB,
					cutR: cutR
				})
			},
			
			radioChange: function (e) {
				console.log('radio发生change事件，携带value值为：' + e.detail.value)
				this.sex = e.detail.value
			},
			
			finish() {
				var _this = this
				console.log(this.head_img)
				console.log(this.nickname)
				console.log(this.signature)
				console.log(this.sex)
				uni.request({
					url: 'http://www.aikm.cn/api/edit/personal/data',
					method: 'POST',
					data: {
						uid: _this.userData.id,
						token: _this.userData.token,
						head_img: _this.head_img,
						nickname: _this.nickname,
						sex: _this.sex,
						signature: _this.signature
					},
					success: res => {
						console.log(JSON.stringify(res.data))
					},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	/* pages/uni-cropper/index.wxss */

	.uni-content-info {
		/* position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: block;
		align-items: center;
		flex-direction: column; */
	}
	
	.avatar {
		padding-top: 80upx;
		margin-bottom: 30upx;
	}
	.avatar image {
		display: block;
		margin: 0 auto;
		width: 150upx;
		border-radius: 50%;
	}
	.input-box {
		padding: 0 60upx;
		margin-bottom: 40upx;
	}
	.input-box text {
		color: #9e9e9e;
		padding-bottom: 20upx;
	}
	.input-box input {
		border-bottom: 1px solid #363636;
	}
	.input-box .radio {
		margin-right: 50upx;
	}
	.input-box radio {
		color: #feda46;
	}
	.finish-btn {
		margin: 0 60upx;
		height: 90upx;
		line-height: 90upx;
		border-radius: 10upx;
		text-align: center;
		background: #feda46;
	}
	
	

	.cropper-config {
		padding: 20upx 40upx;
	}
	.cropper-config button {
		background: #feda46;
	}

	.cropper-content {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 100;
		background: #fff;
	}

	.uni-corpper {
		position: relative;
		overflow: hidden;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		-webkit-tap-highlight-color: transparent;
		-webkit-touch-callout: none;
		box-sizing: border-box;
	}

	.uni-corpper-content {
		position: relative;
	}

	.uni-corpper-content image {
		display: block;
		width: 100%;
		min-width: 0 !important;
		max-width: none !important;
		height: 100%;
		min-height: 0 !important;
		max-height: none !important;
		image-orientation: 0deg !important;
		margin: 0 auto;
	}
	/* 移动图片效果 */

	.uni-cropper-drag-box {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		cursor: move;
		background: rgba(0, 0, 0, 0.6);
		z-index: 1;
	}
	/* 内部的信息 */

	.uni-corpper-crop-box {
		position: absolute;
		background: rgba(255, 255, 255, 0.3);
		z-index: 2;
	}

	.uni-corpper-crop-box .uni-cropper-view-box {
		position: relative;
		display: block;
		width: 100%;
		height: 100%;
		overflow: visible;
		outline: 1upx solid #69f;
		outline-color: rgba(102, 153, 255, .75)
	}
	/* 横向虚线 */

	.uni-cropper-dashed-h {
		position: absolute;
		top: 33.33333333%;
		left: 0;
		width: 100%;
		height: 33.33333333%;
		border-top: 1upx dashed rgba(255, 255, 255, 0.5);
		border-bottom: 1upx dashed rgba(255, 255, 255, 0.5);
	}
	/* 纵向虚线 */

	.uni-cropper-dashed-v {
		position: absolute;
		left: 33.33333333%;
		top: 0;
		width: 33.33333333%;
		height: 100%;
		border-left: 1upx dashed rgba(255, 255, 255, 0.5);
		border-right: 1upx dashed rgba(255, 255, 255, 0.5);
	}
	/* 四个方向的线  为了之后的拖动事件*/

	.uni-cropper-line-t {
		position: absolute;
		display: block;
		width: 100%;
		background-color: #69f;
		top: 0;
		left: 0;
		height: 1upx;
		opacity: 0.1;
		cursor: n-resize;
	}

	.uni-cropper-line-t::before {
		content: '';
		position: absolute;
		top: 50%;
		right: 0upx;
		width: 100%;
		-webkit-transform: translate3d(0, -50%, 0);
		transform: translate3d(0, -50%, 0);
		bottom: 0;
		height: 41upx;
		background: transparent;
		z-index: 11;
	}

	.uni-cropper-line-r {
		position: absolute;
		display: block;
		background-color: #69f;
		top: 0;
		right: 0upx;
		width: 1upx;
		opacity: 0.1;
		height: 100%;
		cursor: e-resize;
	}

	.uni-cropper-line-r::before {
		content: '';
		position: absolute;
		top: 0;
		left: 50%;
		width: 41upx;
		-webkit-transform: translate3d(-50%, 0, 0);
		transform: translate3d(-50%, 0, 0);
		bottom: 0;
		height: 100%;
		background: transparent;
		z-index: 11;
	}

	.uni-cropper-line-b {
		position: absolute;
		display: block;
		width: 100%;
		background-color: #69f;
		bottom: 0;
		left: 0;
		height: 1upx;
		opacity: 0.1;
		cursor: s-resize;
	}

	.uni-cropper-line-b::before {
		content: '';
		position: absolute;
		top: 50%;
		right: 0upx;
		width: 100%;
		-webkit-transform: translate3d(0, -50%, 0);
		transform: translate3d(0, -50%, 0);
		bottom: 0;
		height: 41upx;
		background: transparent;
		z-index: 11;
	}

	.uni-cropper-line-l {
		position: absolute;
		display: block;
		background-color: #69f;
		top: 0;
		left: 0;
		width: 1upx;
		opacity: 0.1;
		height: 100%;
		cursor: w-resize;
	}

	.uni-cropper-line-l::before {
		content: '';
		position: absolute;
		top: 0;
		left: 50%;
		width: 41upx;
		-webkit-transform: translate3d(-50%, 0, 0);
		transform: translate3d(-50%, 0, 0);
		bottom: 0;
		height: 100%;
		background: transparent;
		z-index: 11;
	}

	.uni-cropper-point {
		width: 5upx;
		height: 5upx;
		background-color: #69f;
		opacity: .75;
		position: absolute;
		z-index: 3;
	}

	.point-t {
		top: -3upx;
		left: 50%;
		margin-left: -3upx;
		cursor: n-resize;
	}

	.point-tr {
		top: -3upx;
		left: 100%;
		margin-left: -3upx;
		cursor: n-resize;
	}

	.point-r {
		top: 50%;
		left: 100%;
		margin-left: -3upx;
		margin-top: -3upx;
		cursor: n-resize;
	}

	.point-rb {
		left: 100%;
		top: 100%;
		-webkit-transform: translate3d(-50%, -50%, 0);
		transform: translate3d(-50%, -50%, 0);
		cursor: n-resize;
		width: 36upx;
		height: 36upx;
		background-color: #69f;
		position: absolute;
		z-index: 1112;
		opacity: 1;
	}

	.point-b {
		left: 50%;
		top: 100%;
		margin-left: -3upx;
		margin-top: -3upx;
		cursor: n-resize;
	}

	.point-bl {
		left: 0%;
		top: 100%;
		margin-left: -3upx;
		margin-top: -3upx;
		cursor: n-resize;
	}

	.point-l {
		left: 0%;
		top: 50%;
		margin-left: -3upx;
		margin-top: -3upx;
		cursor: n-resize;
	}

	.point-lt {
		left: 0%;
		top: 0%;
		margin-left: -3upx;
		margin-top: -3upx;
		cursor: n-resize;
	}
	/* 裁剪框预览内容 */

	.uni-cropper-viewer {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.uni-cropper-viewer image {
		position: absolute;
		z-index: 2;
	}
</style>
