<template>
	<view class="pages">	
		<tabHead title="客服"></tabHead>
		<view class="banner">
			<swiper circular="true" interval="3000" duration="500" @change="bannerChange" :current="currentBannerId">
				<swiper-item v-for="(item,index) in list" :key="index">
					<image :src="item" mode="aspectFill"></image>
					<view class="weatherMes">
						<view class="currentTemp">-15℃</view>
						<view class="temp">-15℃/-17℃</view>
						<view class="weather">小到中雪 空气优</view>
						<view class=" position"><text class="iconfont icon-dingwei" style="margin-right: 10rpx; font-size: 28rpx;"></text>池西区</view>
					</view>
				</swiper-item>
				
			</swiper>
			<view class="indicator-dots">
				<view v-for="(item,index) in list" :key="index" :class="{color:index==currentBannerId}" @click="bindBannerTap(index)"></view>
			</view>
		</view>

		<view class="wrap">
			<view class="consultWrap" @click="makePhone(114)">
				 <view class="iconfont icon-lvyouzixun" style="font-size: 100rpx;"></view>
				<view class="consultText">旅游咨询</view>
			</view>
			<view class="consultWrap">
				<view class="iconfont icon-lvyoutousu" style="font-size: 100rpx;"></view>
				<view class="consultText">旅游投诉</view>
			</view>
		</view>
	</view>
</template>

<script>
	import tabHead from "../../components/tabhead.vue";

	export default {
		data() {
			return {
				currentBannerId: 0,
				indicatorDots: true,
				list: ['https://tool.changbaishan.gov.cn/tongcheng//upload/26c7bd95-dab1-4131-871d-99a68c24b710.jpg',
					'https://tool.changbaishan.gov.cn/tongcheng//upload/d6771cb6-0e93-4ca9-891f-dca981bf1378.jpg'
				]

			}
		},
		onLoad() {

		},
		components: {
		    tabHead
		},
		mounted() {
		

		},
		methods: {
			bannerChange(e) {
				this.currentBannerId = e.detail.current;


			},
			bindBannerTap(index) {
				this.currentBannerId = index
			},
			makePhone(phone){
				console.log(phone)
				uni.makePhoneCall({
				    phoneNumber: '114',
					success(){
						console.log('拨打成功')
					},
					fail(){
						console.log('拨打失败')
					}
				});
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
	.banner swiper {
		height: 530rpx;
	}

	/* 指示点 */
	.indicator-dots {
		position: absolute;
		bottom: 90rpx;
		display: flex;
		width: 100%;
		justify-content: center;
	}

	.indicator-dots view {
		background: #FFF;
		width: 10rpx;
		height: 10rpx;
		border-radius: 10rpx;
		margin-left: 10rpx;
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

/* 	.position:before {
		content: "";
		width: 36rpx;
		height: 36rpx;
		display: block;
		position: absolute;
		top: 50%;
		margin-top: -18rpx;
		left: 0;
		z-index: 2;
		background-size: cover;
	} */

	.wrap {
		margin-top: -40rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		box-sizing: border-box;
		z-index: 222;
		position: relative;
	}

	.consultWrap {
		width: 564rpx;
		height: 260rpx;
		margin-bottom: 80rpx;
		box-shadow: rgba(0, 0, 0, 0.03) 1px 2px 10px 5px;
		border-radius: 40rpx;
		background: #fff;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}

	.consultText {
		margin-top: 24rpx;
		font-size: 32rpx;
	}
</style>
