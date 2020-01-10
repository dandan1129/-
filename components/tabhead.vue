<template>
	<view class="headerTitle" :style="{top:tabHeight+'px',lineHeight:lineHight+'px',color:color}">
		<!-- 图标 -->
	<!-- 	<text class="iconfont icon-fanhui" style="font-size: 14px; margin-right: 8rpx;" @click="prevStep"></text> -->
		 {{title}}</view>
</template>

<script>
	export default {
		data() {
			return {
				tabHeight: 25,
				lineHight: 30,
				color:'#fff'
			}
		},
		props: ['title'],
		onReady() {
			// 获取胶囊的信息
			// #ifdef MP-WEIXIN
			let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			this.lineHight = menuButtonInfo.height
			this.tabHeight = menuButtonInfo.top
			// #endif
			if(this.title=="我的"){
				this.color="#000"
			}
				
		},
		methods: {
			prevStep() {
				uni.navigateBack({

				})
			}
		}
	}
</script>

<style>

</style>
