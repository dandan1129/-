<template>
	<view class="page">
		<view class="guideWrap">
			<image src="https://tool.changbaishan.gov.cn/tongcheng//upload/2c2325c6-1b23-4118-8d1f-38800fd2e1b3.jpg" mode="aspectFill"></image>
			<view class="guideMes">
				<view>
					<view class="recommendTitle">高级导游-张某某</view>
					<view class="center">
						<view class="iconfont icon-renzheng" style="font-size: 26rpx; margin-right: 6rpx;"></view>
						<view style="margin-right: 8rpx;">已认证</view>
						<view class="star">
							<view class="iconfont icon-xingxing"></view>
							<view class="iconfont icon-xingxing"></view>
							<view class="iconfont icon-xingxing"></view>
							<view class="iconfont icon-xingxing"></view>
							<view class="iconfont icon-xingxing"></view>
						</view>
						<view class="iconfont icon-dingwei" style="font-size: 26rpx; margin-right: 6rpx;"></view>
						<view>池北区</view>
					</view>
					<view class="yellow">
						￥99<view>/天</view>
					</view>
				</view>
				<view class="rightMes">
					<view class="dz">
						<view class="iconfont icon-kongxindianzan" style="font-size: 48rpx; margin-right: 8rpx;"></view>444
					</view>

					<view class="zxWrap">
						<view class="iconfont icon-dianhua" style="font-size: 48rpx; margin:0 8rpx 4rpx; color:#fd8e23"></view>
						立即咨询
					</view>
				</view>
			</view>
		</view>
		<view class="wrap">
			<view class="recommendWrapTitle">服务特色</view>
			<view class="textDetail">
				<uni-badge :content="article" @preview="preview" @navigate="navigate"></uni-badge>
			</view>
		</view>
	</view>
</template>

<script>
	import voice from "../../components/voice";
	import uniBadge from "@/components/gaoyia-parse/parse.vue"
	export default {
		data() {
			return {
				list: ['https://tool.changbaishan.gov.cn/tongcheng//upload/26c7bd95-dab1-4131-871d-99a68c24b710.jpg'],
				currentTabIndex: 1,
				article: "",
			};
		},
		// 测试数据
		onReady() {
			var that = this
			uni.request({
				url: 'https://tool.changbaishan.gov.cn/tongcheng/v2/findNewsDetail?id=943',
				success(res) {
					res = res.data.obj;
					// 把图片https前面的../去掉
					res.htmContent = res.htmContent.replace(/\.\.\//g,"")
					// 把图片里的/转义
					res.htmContent = res.htmContent.replace(/\\/g, '/');					
					that.article = res.htmContent
				
				}
			})
		},
		components: {
			voice,
			uniBadge
		},
		methods: {
			tabClick(index) {
				this.currentTabIndex = index
			}
		}
	}
</script>

<style>
	.page {
		position: relative;
		width:100%;
	}

	.title {
		color: #000
	}

	.wrap {
		padding-top: 40rpx;
		padding-bottom: 80rpx;
	}

	.guideWrap {
		width: 100%;
		position: relative;
	}

	.guideWrap image {
		width: 100%;
		height: 470rpx;
		display: block;
	}

	.pos {
		width: 28rpx !important;
		height: 28rpx !important;
		margin: 0 10rpx 0 20rpx;
	}

	.zx {
		width: 40rpx !important;
		height: 40rpx !important;
		margin-bottom: 10rpx;
	}

	.zxWrap {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 36rpx;
	}

	.recommendWrapTitle {
		font-size: 36rpx;
		font-weight: 800;
		text-align: left;
	}

	.recommendTitle {
		margin-left: 0;
		text-align:left;
	}

	.recommend {
		width: 100%;
		padding-bottom: 40rpx;
		box-shadow: rgba(0, 0, 0, 0.03) 1px 2px 10px 5px;
		margin-top: 40rpx;
		border-radius: 40rpx;
		overflow: hidden;
		position: relative;
	}

	.recommend image {
		width: 100%;
		height: 466rpx;
		display: block;
	}

	.recommendTitle {
		font-size: 36rpx;
		line-height: 42rpx;
	}

	.yellow {
		color: #fd8e23;
		font-size: 44rpx;
		font-style: italic;
		margin-top: 20rpx;
		display: flex;
		align-items: center;
	}

	.yellow view {
		margin-left: 4rpx;
		color: #000;
		font-size: 28rpx !important;
	}

	.guideMes {
		font-size: 28rpx;
		display: flex;
		justify-content: space-between;
		margin: 40rpx 48rpx 0;
		align-items: center;
		padding-bottom: 30rpx;
		border-bottom: 1px solid #E5E5E5;
	}

	.mes text {
		font-size: 40rpx;
	}

	.center {
		color: #999;
		line-height: 40rpx;
		display: flex;
		align-items: center;
		height: 42rpx;
		margin-top: 10rpx
	}

	.rz {
		width: 20rpx !important;
		height: 24rpx !important;
		margin-right: 10rpx;
	}

	.shape {
		padding: 10rpx 30rpx;
		background: #025392;
		color: #fff;
		border-radius: 30rpx;
		width: 60rpx;
		text-align: center;
		position: absolute;
		right: 30rpx;
		top: 40rpx;
		font-size: 28rpx;
		z-index: 22;
	}

	.dz {
		font-size: 32rpx;
		display: flex;
		align-items: center;
	}

	.star {
		display: flex;
	}

	.textDetail {
		margin-top: 40rpx;
		overflow: hidden;
		font-size: 30rpx;
	}

	.icon-xingxing {
		font-size: 26rpx;
		margin-right: 6rpx;
		color: #fd8e23
	}
</style>
