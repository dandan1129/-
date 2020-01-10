<template>
	<view class="page">
		<tabHead title="导游预约"></tabHead>
		<image class="topImg" src="https://tool.changbaishan.gov.cn/tongcheng//upload/26c7bd95-dab1-4131-871d-99a68c24b710.jpg"
		 mode="aspectFill"></image>
		<view class="wrap">
			<view class="guid">
				<view class="res">
					<view class="name">性别 </view>
					<view v-for="(item,index) in sex" :key="index" :class="{isActive:isChange == index}" @click="clickBtn(index)">{{item}}</view>
				</view>
				<view class="res">
					<view class="name">登记</view>
					<view v-for="(item,index) in level" :key="index" :class="{ isActive:isLevel == index}" @click="levelBtn(index)">{{item}}</view>

				</view>
				<view class="res">
					<view class="name">评星 </view>
					<view v-for="(item,index) in star" :key="index" :class="{ isActive:isStar == index}" @click="starBtn(index)">{{item}}</view>

				</view>
				<view class="searchBtn" @tap="searchResult">查询</view>
			</view>
			<view class="recommend_list">
				<view class="recommendWrapTitle">为您推荐<view class="iconfont icon-gengduo" style=" font-size: 24rpx;"></view>
				</view>
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
	import tabHead from "../../components/tabhead.vue";
	import lazyImg from '@/components/lazyImg/lazyImg.vue'
	export default {
		data() {
			return {
				isChange: -1,
				isLevel: -1,
				isStar: -1,
				sex: ['男', '女'],
				level: ['特级', '高级', '中级', '初级'],
				star: ['五星', '四星', '三星', '二星', '一星'],
				obj: {
					sex: '',
					level: '',
					star: ''
				},
				list: ['https://tool.changbaishan.gov.cn/tongcheng//upload/26c7bd95-dab1-4131-871d-99a68c24b710.jpg']
			};
		},
		components: {
			tabHead,
			lazyImg
		},
		methods: {
			// 性别选择
			clickBtn(index) {
				if (index != this.isChange) {
					this.isChange = index;
					this.obj.sex = this.sex[index]
				} else {
					this.isChange = -1;
					this.obj.sex = ""
				}
			},
			// 级别选择
			levelBtn(index) {
				if (index != this.isLevel) {
					this.isLevel = index;
					this.obj.level = this.level[index]
				} else {
					this.isLevel = -1;
					this.obj.level = ""
				}
			},
			// 星级选择
			starBtn(index) {
				if (index != this.isStar) {
					this.isStar = index;
					this.obj.star = this.star[index]
				} else {
					this.isStar = -1;
					this.obj.star = ""
				}
			},
			searchResult() {
				console.log(this.obj)
				uni.navigateTo({
					url: "../guideList/guideList"
				})
			}
		}
	}
</script>

<style>
	.pages {
		position: relative;
	}
	.topImg {
		height: 464rpx;
		width: 100%;
		display: block
	}

	.wrap {
		margin-top: -150rpx;
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
	.recommendWrapTitle {
		margin: 80rpx 0 40rpx 0;
		font-size: 36rpx;
		font-weight: 800;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.mes {
		font-size: 28rpx;
		display: flex;
		justify-content: space-between;
	
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
		line-height: 30rpx;
	}

	.star {
		display: flex;
		margin-left: 6rpx;
	}

	.icon-xingxing {
		font-size: 26rpx;
		margin-right: 6rpx;
		color: #fd8e23
	}

	
</style>
