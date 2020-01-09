<template>
	<view class="shop_detail">
		<Ppt :banner="bannerList" :isFull="true" :swiperHeight="'470rpx'" :imgHeight="'470rpx'"></Ppt>
		<view class="contents">
			<view class="topA">
				<view class="title">长白山温泉皇冠假日酒店</view>
				<view class="iconfont icon-aixin">444</view>
			</view>
			<view class="topB">
				<view class="left">
					<view class="des">
						<text>景区直营 品质服务</text>
						<star class="star" :score="4"></star>
					</view>
					<view class="price">
						<text>¥</text><text>99</text>起
					</view>
				</view>
				<view class="right">
					<view class="iconfont icon-dianhua"></view>
					<text>在线预订</text>
				</view>
			</view>
			<view class="topC">
				<view class="iconfont icon-dingwei">所在位置:吉林省延边州安图县二道白河镇 <text class="go">到这去>></text></view>
				<view class="iconfont icon-shijian">营业时间：周一至周五12:00-20:00 周六，周日10:00-23:00</view>
			</view>
			
			<!-- 店内环境 -->
			<h2 class="detailH2">店内环境</h2>
			<view class="3Dswiper">
				
			</view>
			
			<!-- 评语 -->
			<h2 class="detailH2">品鉴师鉴语</h2>
			<Comment :commentList="commentList"/>
		</view>
	</view>
</template>

<script>
	import Ppt from '@/components/ppt/ppt.vue'
	import star from '@/components/star.vue'
	import Comment from '@/components/comment.vue'
	import {
		getDetail,
		getComment
	} from '@/api/detail.js'
	import {
		getImgSrc
	} from '@/utils/comUtils.js'
	export default {
		components: {
			Ppt,
			star,
			Comment
		},
		data() {
			return {
				id: '', //当前页id
				bannerList: [],
				commentList:[],
			}
		},

		onLoad(params) {
			uni.setNavigationBarTitle({
				title: "美食"
			})
			// this.id = params.id
			this.id = 279
			this.getDetailData();
		},
		methods: {
			getDetailData() {
				this.getDetail();
				this.getComment();
			},
			// 获取详情页数据
			getDetail(){
				getDetail(this.id).then(res => {
					if (res.data.success) {
						res = res.data.obj;
						// 图片处理
						res.atts = getImgSrc(res.atts)
				
						// 生成ppt数据格式
						this.bannerList = res.atts.map(item => {
							return {
								atts: item
							}
						})
				
				
					}
				}).catch(err => console.log(err))
			},
			// 获取评论数据
			getComment(){
				getComment(this.id).then(res=>{
					if(res.data.success){
						res=res.data.obj;
						this.commentList=res;
					}
				}).catch(err => console.log(err))
			}
		}
	}
</script>

<style lang="scss">
	//继承
	%alignCenter {
		display: flex;
		align-items: center;
	}

	.shop_detail {
		width: 100%;
	}

	.contents {
		width: 654rpx;
		margin: 50rpx auto 0;

		.topA {
			@extend %alignCenter; 
			justify-content: space-between;

			.title {
				font-size: 40rpx;
				font-weight: 500;
			}

			.iconfont {
				@extend %alignCenter;
				 font-size:28rpx;
			}

			.iconfont:before {
				font-size: 44rpx;
				margin-right: 18rpx;
			}
		}

		.topB {
			padding-top: 52rpx;
			padding-bottom:62rpx;
			display:flex;
			justify-content: space-between;
			text{
				font-size:28rpx;
				font-weight:400;
			}
			.star{
				margin-left:12rpx;
			}
			.des{
				@extend %alignCenter;
				line-height:36rpx;
			}
			.price{
				padding-top:18rpx;
				text-align:left;
			}
			.price text{
				color:#FD8E23;
				font-style:italic;
				&:last-child{
					font-size:36rpx;
					margin-right:10rpx;
				}
			}
			
			.right{
				height:60rpx;
				text{
					font-size:24rpx;
				}
				.iconfont{
					color:#FD8E23;
					font-size:39rpx;
					margin-bottom:10rpx;
				}
			}
		}

		.topC{
			padding:40rpx 0;
			text-align:left;
			line-height:48rpx;
			border-top:1px solid rgba(229,229,229,1);
			border-bottom:1px solid rgba(229,229,229,1);
			.iconfont:before{
				padding-right:10rpx;
			}
			.go{
				color:#FD8E23;
				margin-left:20rpx;
			}
		}
	}
</style>
