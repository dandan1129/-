<template>
	<view class="page">
		<view class="videoWrap">
			<view class="shape">直播</view>
			<image class="playIcon" src="../../static/playIcon.png"></image>
			<image src="https://tool.changbaishan.gov.cn/tongcheng//upload/2c2325c6-1b23-4118-8d1f-38800fd2e1b3.jpg" mode="aspectFill"></image>						
			<view class="mes" style="margin:20rpx 50rpx">
				<view >
					<view class="recommendTitle">天伦广场</view>
					<view class="yellow"><view class="iconfont icon-bofang" style=" margin-right: 8rpx;"></view>12万次播放</view>
				</view>
				<view class="dz"><view class="iconfont icon-kongxindianzan" style="font-size: 48rpx; margin-right: 8rpx;"></view>444</view>
			</view>
		</view>
		<view class="wrap">
			<voice></voice>
			<view class="recommend_list">
				<view class="recommendWrapTitle">为您推荐<view class="iconfont icon-gengduo" style=" font-size: 24rpx;"></view>
				</view>
				<!-- 卡片 -->
				<view class="card"v-for="(item,index) in list" :key="index" @tap="linkDetail(item.id,item.title)">
					<view class="card_img_wrapper">
						<view class="card_img">
							<lazyImg :imgSrc="item" />
						</view>
						<view class="living">直播</view>
					</view>
					<view class="card_dec_wrapper">
						<view class="mes">
							<view class="title">天伦广场</view>
							<view class="yellow">
								<view class="iconfont icon-bofang" style=" margin-right: 8rpx;"></view>50
							</view>
						</view>
						
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import voice from "../../components/voice";
		import lazyImg from '@/components/lazyImg/lazyImg.vue'
	export default {
		data() {
			return {
				list: ['https://tool.changbaishan.gov.cn/tongcheng//upload/26c7bd95-dab1-4131-871d-99a68c24b710.jpg'],
				url:''
			};
		},
		 components: {
		    voice,
			lazyImg
		},
		onLoad(options){
			console.log(options)
			this.url=options.url
			
		},
		methods:{
		

		}
	}
</script>

<style>
	.pages {
		position: relative;
	}
	.title{color:#000}
	.wrap{ margin-top:40rpx; padding-bottom: 80rpx;}
	.videoWrap{width:100%; position: relative;}
	.playIcon{position:absolute; width:78rpx!important; height: 78rpx!important; left:50%; top:196rpx; margin-left:-39rpx; margin-top: -39rpx; z-index:222;}
	.videoWrap image{width:100%; height: 470rpx;}
	.recommendWrapTitle{font-size: 36rpx; font-weight:800; margin-top:80rpx; display: flex; align-items: center; justify-content: space-between;margin:80rpx 0 40rpx 0}

	.recommendTitle{font-size: 36rpx; line-height: 50rpx;}
	.mes{font-size: 24rpx; display: flex; justify-content: space-between; align-items: center;}
	.mes .title{margin-bottom: 0;}
	.yellow{color:#fd8e23; line-height: 40rpx; display: flex; align-items: center; }
	.play{width:28rpx!important; height: 28rpx!important; margin-right: 10rpx;}
	.shape{padding:10rpx 30rpx; background: #025392; color: #fff; border-radius: 30rpx; width:60rpx; text-align: center; position: absolute; right:28rpx; top:40rpx; font-size: 28rpx; z-index:22;}
	.dz{font-size:32rpx; display: flex; align-items: center;}
	.dzImg{width:50rpx!important; height: 46rpx!important; margin-right:20rpx;}
</style>
