<template>
	<view class="animation">
		<view class="imgAnimate" :style="{
				      opacity: Number(!loadingShow),
				      transition: `opacity ${loadingTime}s ease-in-out`
				   }">
			<image :src="imgSrc" :mode="mode" @load="loaded" @error="errImg"></image>
		</view>
		<view class="loading" v-show="loadingShow">
			<image :class="isError?'':'loadingPic'" :src="loadingSrc"></image>
		</view>
	</view>
</template>
<script>
	import config from './config.js'
	export default {
		props: {
			imgSrc: {
				type: String
			},
			mode:{
				type:String,
				default:'aspectFill'
			}
		},
		data() {
			return {
				loadingSrc:config.loadingPic,//加载loading或报错图片
				loadingShow: true, //加载动画
				loadingTime: .6, //图片加载时间
				isError:false,
			}
		},
		methods: {
			loaded(e) {
				this.loadingShow = false;
			},
			errImg(e){
				this.isError=true;
				this.loadingSrc=config.noFoundPic
			}
		}
	}
</script>

<style lang="scss">
	// 必须规定父级宽高
	.animation {
		position: relative;
		width: 100%;
		height: 100%;
		background:#EFEFEF;
	}

	.loading {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 4s ease-in-out;

		image.loadingPic {
			width: 100rpx;
			height: 100rpx;
			animation: imgShow 2s infinite;
		}
	}

	.imgAnimate {
		width: 100%;
		height: 100%;
		position: relative;
	}

	@keyframes imgShow {
		from {
			transform: rotateZ(0)
		}

		to {
			transform: rotateZ(360deg)
		}
	}
</style>
