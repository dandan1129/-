<template>
	<view class="pages">
		<tabHead title="智游助手"></tabHead>
		<view class="banner">
			<swiper circular="true" interval="3000" duration="500" @change="bannerChange" :current="currentBannerId">
				<swiper-item v-for="(item,index) in list" :key="index">
					<lazyImg :imgSrc="item" />
					<view class="weatherMes">
						<view class="currentTemp">-15℃</view>
						<view class="temp">-15℃/-17℃</view>
						<view class="weather">小到中雪 空气优</view>
						<view class="position"><text class="iconfont icon-dingwei" style="margin-right: 10rpx; font-size: 14px;"></text>池西区</view>
					</view>
				</swiper-item>
			</swiper>
			<view class="indicator-dots">
				<view v-for="(item,index) in list" :key="index" :class="{color:index==currentBannerId}" @click="bindBannerTap(index)"></view>
			</view>
		</view>

		<view class="wrap">
			<view class="boxWrap" @click="nextStep()">
				<view class="iconfont icon-youkexuzhi" style="font-size: 90rpx;"></view>
				<view class="consultText">游客须知</view>
			</view>
			<view class="boxWrap" @click="nextStep('../../pagesA/scene/scene')">
				<view class="iconfont icon-jingqushijing" style="font-size: 70rpx;"></view>	
				<view class="consultText">景区实景</view>
			</view>
			<view class="boxWrap" @click="nextStep()">
			<view class="iconfont icon-ditu" style="font-size: 90rpx;"></view>			
				<view class="consultText">便民地图</view>
			</view>
			<view class="boxWrap" @click="nextStep('../../pagesA/guide/guide')">
				<view class="iconfont icon-daoyouyuyue" style="font-size: 90rpx;"></view>				
				<view class="consultText">导游预约</view>
			</view>
		</view>
	</view>

</template>

<script>
		import tabHead from "@/components/tabhead.vue";
			import lazyImg from '@/components/lazyImg/lazyImg.vue'
	export default {
		data() {
			return {
				currentBannerId: 0,
				currentTabIndex: 2,
				indicatorDots: true,
				list: ['https://tool.changbaishan.gov.cn/tongcheng//upload/26c7bd95-dab1-4131-871d-99a68c24b710.jpg',
					'https://tool.changbaishan.gov.cn/tongcheng//upload/d6771cb6-0e93-4ca9-891f-dca981bf1378.jpg'
				],
				tabHeight:25
			};
		},
		components: {
		    tabHead,
			lazyImg
		},
		onLoad(){
			var height = uni.getSystemInfoSync().statusBarHeight;
			this.tabHeight=height
		},
		methods: {
			bannerChange(e) {
				this.currentBannerId = e.detail.current;
			},
			bindBannerTap(index) {
				this.currentBannerId = index
			},
			nextStep(url){
				uni.navigateTo({
					url:url
				})
			},
			// tabbar
			tabClick(index) {
				this.currentTabIndex = index
			}
		}
	}
</script>

<style>
.pages {
		position: relative;
	}


	.banner {
		height: 530rpx;
		width: 100%;
		position: relative;
	}
	.banner swiper{height: 530rpx;}

	/* 指示点 */
	.indicator-dots {
		
		position: absolute;
		bottom: 90rpx;
		display: flex;
		width:100%;
		justify-content: center;
	}

	.indicator-dots view {
		background: #FFF;
		width: 10rpx;
		height: 10rpx;
		border-radius: 10rpx;
		margin-left:10rpx;
	}

	.indicator-dots view.color {
		background: #025392;
	}

	.banner swiper-item {
		position: relative
	}

	.banner swiper-item image {
		width: 100%;
		height: 100%;
		overflow: hidden;
		height: 530rpx
	}
	/* 天气 */
	.weatherMes {
		position: absolute;
		top: 160rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		color: #fff;
		font-size: 30rpx;
	}
	
	.currentTemp {
		font-size: 60rpx;
	}
	
	.position {
		margin-top: 30rpx;
		position: relative;
	}
	/* 列表 */
	.wrap {
		margin: -40rpx 48rpx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		z-index: 222;
		position: relative;
		flex-wrap:wrap;
	}
	
	.boxWrap {
		width: 290rpx;
		height: 214rpx;
		margin-bottom: 80rpx;
		box-shadow: rgba(0, 0, 0, 0.03) 1px 2px 10px 5px;
		border-radius: 40rpx;
		background: #fff;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}
	.boxWrap>view:nth-child(1){height: 90rpx; display: flex; align-items: center;}
	.consultText {
		margin-top: 24rpx;
		font-size: 32rpx;
	}
</style>
