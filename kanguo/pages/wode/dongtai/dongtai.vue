<template>
	<view>
		<view class="video-list">
			<video-item v-for="val in [1,2,3]" :key="val"></video-item>
		</view>
	</view>
</template>

<script>
	import videoItem from '../../../components/video-item.vue'
	export default {
		components: {
			videoItem
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
