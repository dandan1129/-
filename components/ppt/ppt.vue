<template>
	<view class="ppt">
		<swiper class="swiper" :previous-margin="isFull?'0':'36rpx'" :next-margin="isFull?'0':'36rpx'" :style="{'height':swiperHeight}">
			<swiper-item class="ppt-swiper-item skeleton-rect" v-for="(item,index) in banner" :key="index">
				<view :style="{width:isFull?'100%':'auto'}">
					<view class="ppt-swiper-item-wrapper" :style="{'width':isFull?screenWidth:'654rpx','height':imgHeight,'border-radius':isFull?0:'40rpx'}">
						<lazyImg :imgSrc="item.atts" />
						<slot name="tip"></slot>
					</view>
					<slot name="bottom" :prop="item"></slot>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import lazyImg from '@/components/lazyImg/lazyImg.vue'
	export default {
		components: {
			lazyImg
		},
		props: {
			banner: {
				type: Array
			},
			// 当前组件高度
			swiperHeight: {
				type: String,
				default: "415rpx"
			},
			// 图片高度
			imgHeight:{
				type:String,
				default:"415rpx"
			},
			// 是否横向充满屏幕
			isFull:{
				type:Boolean,
				default:false,
			}
		},
		watch: {
			banner(newVal) {
			}
		},
		data() {
			return {
				screenWidth:wx.getSystemInfoSync().screenWidth+'px'
			}
		},
		
		methods: {}
	}
</script>

<style lang="scss">
	.swiper {
		.ppt-swiper-item {
			display: flex;
			justify-content: center;
		}

		.ppt-swiper-item-wrapper {
			overflow: hidden;
			position:relative;
		}
	}
</style>
