<template>
	<view class="list_detail">
		<!-- 骨架屏 -->
		<skeleton v-if="showSkeleton" ref="skeleton" />
		<!-- 下拉列表加载 -->
		<Mescroll :down="downOption" @down="downCallback" :up="upOption" @up="upCallback" @init="mescrollInit">
			<ppt class="skeleton-rect" :banner="banner" :swiperHeight="'500rpx'" :imgHeight="'354rpx'">
				<template v-slot:bottom="{prop}">
					<view class="ppt_title">{{prop.title}}</view>
					<view class="ppt_des">{{prop.category_name}}</view>
				</template>
				<view class="ppt_tip iconfont icon-dingwei" slot="tip">池北区</view>
			</ppt>
			<view :style="{'margin-top':active?178+'rpx':70+'rpx'}"></view>

			<!-- 列表筛选条件加载 -->
			<view class="filterPop" :style="{height: active?'100%':'auto',
								position:active?'fixed':'sticky',
								background: active?'rgba(0,0,0,0.4)':'#FFF'}"
			 @tap.stop="hideDialog(false)" @touchmove.stop.prevent="">
				<view class="filterWrapper skeleton-rect" :style="{'top':top,background:active?'#FFF':'','border-top-left-radius':active?'30rpx':'0','border-top-right-radius':active?'30rpx':'0'}">
					<view class="filter">
						<view class="filter_des" @tap.stop="showDialog('hot')">热度<view :class="active&&filter=='hot'?'iconfont icon-gengduo rotate':'iconfont icon-gengduo'"></view>
						</view>
						<view class="filter_des" @tap.stop="showDialog('address')">{{address}}
							<view :class="active&&filter=='address'?'iconfont icon-gengduo rotate':'iconfont icon-gengduo'"></view>
						</view>
						<view class="filter_des" @tap.stop="showDialog('price')">价格<view :class="active&&filter=='price'?'iconfont icon-gengduo rotate':'iconfont icon-gengduo'"></view>
						</view>
					</view>
					<view :class="active?'filter_detail showDetail':'filter_detail'">
						<view :class="item.active?'filter_line activeText':'filter_line'" @click.stop="hideDialog(true,index,item.value)"
						 v-for="(item,index) in filterItem[filter]" :key="item.value">
							<text>{{item.title}}</text>
						</view>
					</view>
				</view>

			</view>

			<!-- 列表 -->
			<view class="pull" v-for="(item,index) in listData" :key="item.id" @tap="currentTap(item.id)">
				<!-- 卡片 -->
				<view :class="'card skeleton-rect lazy-'+index">
					<view class="card_img_wrapper">
						<view class="card_img">
							<lazyImg :imgSrc="item.isShow?item.atts:''" />
						</view>
					</view>
					<view class="card_dec_wrapper">
						<text class="title">{{item.title}}</text>
						<text class="des">{{item.content}}</text>

						<view class="listBottom">
							<!-- 星级评价 -->
							<star :score="item.score" />
							<!-- 价格 -->
							<view class="price">¥<text>60</text>/人</view>
						</view>

					</view>
				</view>
			</view>
		</Mescroll>

	</view>
</template>

<script>
	import skeleton from '@/components/easy-skeleton/easy-skeleton'
	import ppt from '@/components/ppt/ppt.vue'
	import Mescroll from "@/components/mescroll-uni/mescroll-uni.vue";
	import pullList from '@/mixin/list'
	import lazyImg from '@/components/lazyImg/lazyImg.vue'
	import star from '@/components/star.vue'
	import {
		getImgSrc
	} from '@/utils/comUtils.js'
	import {
		getListBanner
	} from '@/api/index.js'
	export default {
		mixins: [pullList],
		components: {
			skeleton,
			ppt,
			Mescroll,
			lazyImg,
			star
		},
		data() {
			return {
				showSkeleton: true,
				banner: [],
				// 筛选吸顶容器
				top: 0, //吸顶容器top
				active: false, //吸顶是否处于激活状态
				address: '全部', //地址回显
				addressVal: '', //地址列表参数
				hotVal: '', //热度列表参数
				priceVal: '', //价格列表参数
				filter: 'hot', //选中
				filterItem: {
					hot: [{
						title: 'high',
						value: 'high',
						active: false
					}, {
						title: 'down',
						value: 'down',
						active: false
					}],
					address: [{
						title: '全部',
						value: '43,56',
						active: true
					}, {
						title: '池北区',
						value: '43',
						active: false
					}, {
						title: '池西区',
						value: '56',
						active: false
					}],
					price: [{
						title: '不限',
						value: {
							'人均': ''
						},
						active: false
					}, {
						title: '从高到低',
						value: {
							'人均': 'desc'
						},
						active: false
					}, {
						title: '从低到高',
						value: {
							'人均': 'asc'
						},
						active: false
					}],
				},

				listData: [], //下拉列表

			}
		},
		onReady() {
			this.getBanner();
			// this.$refs['skeleton'].init()
			// setTimeout(() => {
			// 	this.showSkeleton = false
			// }, 1000)
		},
		onLoad(params) {
			uni.setNavigationBarTitle({
				title: params.title
			})
			this.params.categoryIds = params.categoryIds
		},
		methods: {
			getBanner() {
				getListBanner({
					categoryIds: 70,
					isTop: 'desc'
				}).then(res => {
					if (res.data.success) {
						let data = res.data.obj;
						// 图片数据处理
						data.forEach(item => {
							item.atts = getImgSrc(item.atts,0)
						})
						this.banner = data;
					}
				})
			},
			showDialog(key) {
				// 筛选条件数据
				this.filter = key;
				// 计算吸顶容器top,激活筛选状态
				const query = uni.createSelectorQuery().in(this).select('.filterWrapper'); // 这里要加上select
				query.boundingClientRect(e => {
					/* #ifdef H5 */
					e.top = e.top + 44;
					/* #endif */
					this.active = true;
					this.top = e.top + 'px'
				}).exec();

			},
			hideDialog(load, key, val) {
				this.active = false;
				this.top = 0

				// 查询
				if (!load) return
				// 地区回显
				if (this.filter == 'address') {
					this.address = this.filterItem[this.filter][key].title
				}
				//筛选条件候选项激活
				this.filterItem[this.filter].forEach((item, index) => {
					if (index == key) {
						item.active = true
					} else {
						item.active = false
					}
				})

				// 参数对象
				if (this.filter == 'hot') {

				} else if (this.filter == 'address') {
					this.params.categoryIds = val
				} else {
					this.params.orderBy = val
				}

				this.mescroll.resetUpScroll();

			},
			currentTap(id) {
				console.log(id)
				uni.navigateTo({
					url:'/pagesA/detail/detail?id='+id
				})
			}
		}

	}
</script>

<style lang="scss">
	.list_detail {
		width: 100%;

		.ppt_title {
			width: 654rpx;
			text-align: left;
			font-size: 40rpx;
			font-weight: 500;
			margin: 42rpx 0 22rpx 0;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		.ppt_des {
			width: 654rpx;
			text-align: left;
			font-size: $uni-font-size;
			font-weight: 400;
			color: rgba(160, 160, 160, 1)
		}

		.ppt_tip {
			position: absolute;
			bottom: 16rpx;
			right: 20rpx;
			color: #FFF;

			&.iconfont:before {
				margin-right: 10rpx;
			}
		}

		// 筛选条件
		.filterPop {
			width: 100%;
			top: 0;
			z-index: 999;

			.filterWrapper {
				position: relative;
				width: 654rpx;
				margin: 0 auto;
				font-size: $uni-font-size;
			}

			.filter {
				display: flex;
				justify-content: space-around;
				background: rgba(243, 243, 243, 1);
				border-radius: 30rpx;

				.filter_des {
					display: flex;
					padding: 16rpx 0 20rpx 0;
				}

				.iconfont {
					margin-left: 14rpx;
					transform: rotateZ(-90deg);

					&:before {
						font-size: 20rpx;
					}

					transition: all .4s ease;
				}

				.rotate {
					transform: rotateZ(-90deg) rotateY(180deg);
				}
			}

			.filter_detail {
				position: absolute;
				width: 100%;
				background: #FFF;
				border-bottom-left-radius: 30rpx;
				border-bottom-right-radius: 30rpx;
				max-height: 0;
				overflow: hidden;
				transition: all .2s ease;

				.filter_line {
					padding: 16rpx 0 20rpx 0;
					margin: 0 40rpx;
					text-align: left;
					border-bottom: 1px solid #EFEFEF;

					&:last-child {
						border: none;
					}

					&.activeText {
						color: #FD8E23;
					}

					text {
						padding-left: 30rpx;
						font-size: 28rpx;
					}

				}

				&.showDetail {
					max-height: 600rpx;
				}
			}

		}

		// 下拉
		.pull {
			width: 654rpx;
			margin: 40rpx auto 0;
		}


	}
</style>
