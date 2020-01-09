<template>
	<view class="home">
		<!-- 骨架屏 -->
		<skeleton v-if="showSkeleton" ref="skeleton" />

		<view class="top">
			<!-- 搜索 -->
			<Search class="skeleton-rect" />
			<!-- 轮播图 -->
			<view class="banner skeleton-rect">
				<Ppt :banner="banner" />
			</view>
		</view>


		<view class="sort">
			<view v-for="item in sortList" :key="item.text" @tap="sortTap(item)">
				<view :class="'circle skeleton-radius iconfont '+item.icon"></view>
				<text class="skeleton-rect">{{item.text}}</text>
			</view>
		</view>

		<view class="bottom">
			<!-- 推荐 -->
			<view class="recommend_list">
				<h2 class="skeleton-rect">为你推荐长白山精彩</h2>
				<!-- 卡片 -->
				<view class="card skeleton-rect">
					<view class="card_img_wrapper">
						<view class="card_img">
							<lazyImg :imgSrc="'https://tool.changbaishan.gov.cn/tongcheng//upload/795932a2-f79b-4cd3-9011-3b0ef0ec05a3.jpg'" />
						</view>
						<view class="hot">热门推荐</view>
					</view>
					<view class="card_dec_wrapper">
						<text class="title">语音导游</text>
						<text class="des">长白山旅游中的免费导游</text>
					</view>
				</view>
				<view class="card">
					<view class="card_img_wrapper">
						<view class="card_img">
							<image src="https://tool.changbaishan.gov.cn/tongcheng//upload/795932a2-f79b-4cd3-9011-3b0ef0ec05a3.jpg" mode="aspectFill"></image>
						</view>
						<view class="hot">热门推荐</view>
					</view>
					<view class="card_dec_wrapper">
						<text class="title">语音导游</text>
						<text class="des">长白山旅游中的免费导游</text>
					</view>
				</view>
			</view>


		</view>

	</view>
</template>

<script>
	import Search from '@/components/search/search'
	import Ppt from '@/components/ppt/ppt'
	import lazyImg from '@/components/lazyImg/lazyImg.vue'
	import skeleton from '@/components/easy-skeleton/easy-skeleton.vue'
	import {
		getBanner,
	} from '@/api/index'
	export default {
		components: {
			Search,
			Ppt,
			skeleton,
			lazyImg
		},
		data() {
			return {
				sortList: [{
					id:0,
					text: '我要购票',
					icon: 'icon-woyaogoupiao',//图标
					path:'',//跳转路径
				}, {
					id:1,
					text: '我要上山',
					icon: 'icon-woyaoshangshan',
					path:'',
				}, {
					id:2,
					text: '游玩攻略',
					icon: 'icon-youwangonglve',
					path:'',
				}, {
					id:3,
					text: '民宿酒店',
					icon: 'icon-minsujiudian',
					path:'/pagesA/list/index?categoryIds=44,57',
				}, {
					id:4,
					text: '必吃美食',
					icon: 'icon-bichimeishi',
					path:'/pagesA/list/index?categoryIds=43,56',
				}],
				showSkeleton: true,
				// 请求数据
				banner: [],

			}
		},
		created() {
			this.getBanner()
		},
		// mounted(){
		// 	this.$refs['skeleton'].init()
		// 	setTimeout(() => {
		// 		this.showSkeleton = false
		// 	}, 1000)
		// },
		// onPullDownRefresh() {
		// 	console.log(111)
		// 	// 下拉刷新
		// 	let that = this;
		// 	async function loadData() {
		// 		await that.getBanner();
		// 		wx.stopPullDownRefresh()
		// 	}
		// 	loadData()
		// },


		methods: {
			getBanner() {
				getBanner({
					categoryIds: 70,
					isTop: 'desc'
				}).then(res => {
					if (res.data.success) {
						let data = res.data.obj;
						// 图片数据处理
						data.forEach(item => {
							item.atts = item.atts.replace(/\\/g, '/')
							item.atts = item.atts.split('#')
							item.atts.pop()
							item.atts = item.atts[0]
						})
						this.banner = data;
					}
				})
			},
			getRecommendation() {

			},
			sortTap(item){
				uni.navigateTo({
					url:item.path+'&title='+item.text,
				})
			}

		}

	}
</script>

<style lang="scss">
	.home {
		width: 100%;

		.top {
			height: 250rpx;
			background: linear-gradient(0deg, rgba(2, 83, 146, 1) 0%, rgba(0, 74, 132, 1) 100%);
		}

		.banner {
			margin-top: 52rpx;
		}

		.sort {
			width: 654rpx;
			margin: 12rpx auto 0;
			position: relative;
			top: 324rpx;
			display: flex;
			justify-content: space-between;
			font-size: 28rpx;

			.circle {
				width: 120rpx;
				height: 122rpx;
				background: url('data:image/png;base64,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');
				background-size: 100%;
				display: flex;
				align-items: center;
				justify-content: center;

				&:before {
					font-size: 32rpx;
					margin-right: 12rpx;
					margin-top: -8rpx;
				}
			}
		}

		.bottom {
			position: relative;
			top: 314rpx;
			width: 654rpx;
			margin: 0 auto;
		}
	}
</style>
