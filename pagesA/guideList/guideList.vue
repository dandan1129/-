<template>
	<view class="page">	
		<view class="wrap">
			<view class="recommend_list">
				<!-- 卡片 -->
				<view class="card" v-for="(item,idx) in list" :key="idx">
					<view class="card_img_wrapper">
						<view class="card_img">
							<lazyImg :imgSrc="item" />
						</view>
						<view class="hot">导游预约</view>
						<view class="position">
							<view class="iconfont icon-dingwei" style="margin-right: 10rpx; font-size: 28rpx;"></view>池北区
						</view>
					</view>
					<view class="card_dec_wrapper">
						<text class="title">私人导游-专业的国证导游带您畅游如画的长白山</text>
					
						<view class="mes">
							<view class="leftMes">
								高级
								<view class="star">
									<view class="iconfont icon-xingxing"></view>
									<view class="iconfont icon-xingxing"></view>
									<view class="iconfont icon-xingxing"></view>
									<view class="iconfont icon-xingxing"></view>
									<view class="iconfont icon-xingxing"></view>
								</view>
							</view>
							<view class="yellow">￥<text>60</text>/天</view>
						</view>
					</view>
				</view>
			</view>
			
			
			
		</view>

	</view>
</template>

<script>
	import lazyImg from '@/components/lazyImg/lazyImg.vue'
	export default {
		data() {
			return {			
				list: ['https://tool.changbaishan.gov.cn/tongcheng//upload/26c7bd95-dab1-4131-871d-99a68c24b710.jpg','https://tool.changbaishan.gov.cn/tongcheng//upload/26c7bd95-dab1-4131-871d-99a68c24b710.jpg']
			};
		},
		components: {
			lazyImg
		},
		methods: {
		
		}
	}
</script>

<style>
	.page {
		position: relative;
		background: white;
	}
	.topImg {
		height: 464rpx;
		width: 100%;
		display: block
	}
	.wrap {
		padding-bottom: 80rpx;
	}
	.guid {
		padding: 26rpx 56rpx 46rpx;
		background: #fff;
		border-radius: 40rpx;
		box-shadow: rgba(0, 0, 0, 0.03) 1px 2px 10px 5px;
		position: relative;
		z-index: 22;
	}
	.res {
		height: 100rpx;
		border-bottom: 1px solid #e5e5e5;
		display: flex;
		line-height: 100rpx;
	}
	.res view {
		width: 90rpx;
		text-align: center;
		color: #999;
		font-size: 24rpx;
	}
	.name {
		color: #000 !important;
		font-size: 28rpx !important;
		width: 100rpx !important;
		font-weight: normal;
	}
	.searchBtn {
		width: 100%;
		height: 60rpx;
		background: #fd8e23;
		border-radius: 40rpx;
		text-align: center;
		line-height: 60rpx;
		color: #fff;
		margin-top: 40rpx;
		font-size: 26rpx;
	}
	.isActive {
		color: #000 !important
	}
	.mes {
		font-size: 24rpx;
		display: flex;
		justify-content: space-between;
		height: 40rpx;
		align-items: center;
	}
	.mes text {
		font-size: 40rpx;
	}
	.yellow {
		color: #fd8e23;
		line-height: 40rpx;
	}

	.position {
		position: absolute;
		right: 30rpx;
		top: 400rpx;
		font-size: 28rpx;
		color: #fff;
		display: flex;
		align-items: center;
		z-index: 22
	}
	.leftMes {
		display: flex;
		align-items: center;
		line-height: 40rpx;
	}
	.star {
		display: flex;
		margin-left: 6rpx;
	}
	.icon-xingxing{
		font-size: 26rpx; margin-right: 6rpx; color:#fd8e23
	}
</style>
