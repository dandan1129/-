<template>
	<view class="page">
		<view class="wrap">		
			<view class="recommend_list">
				<!-- 卡片 -->
				<view class="card"v-for="(item,index) in living" :key="index" @tap="linkDetail(item.id,item.title)">
					<view class="card_img_wrapper">
						<view class="card_img">
							<lazyImg :imgSrc="item.datas['首屏图片']" />
						</view>
						<view class="living">直播</view>
					</view>
					<view class="card_dec_wrapper">
						<view class="mes">
							<view class="title">{{item.title}}</view>
							<view class="yellow">
								<view class="iconfont icon-bofang" style=" margin-right: 8rpx;"></view>{{item.num}}
							</view>
						</view>
						
					</view>
				</view>
			</view>
			
			<view class="dataShow" v-if="dataShow">暂无数据...</view>
		</view>

	</view>
</template>
<script>
	import lazyImg from '@/components/lazyImg/lazyImg.vue'
	import {
		scene,
		see
	} from "@/api/index"
	export default {
		data() {
			return {
				list: ['https://tool.changbaishan.gov.cn/tongcheng//upload/2c2325c6-1b23-4118-8d1f-38800fd2e1b3.jpg',
					'https://tool.changbaishan.gov.cn/tongcheng//upload/26c7bd95-dab1-4131-871d-99a68c24b710.jpg'
				],
				living: [],
				showWrap: false,
				dataShow: false
			};
		},
		components: {
			lazyImg
		},
		onReady() {
			uni.showLoading({
				title: '加载中',
				mask: true
			})
			var that = this
			scene({
				categoryIds: 63

			}).then(response => {
				let mes = response.data.obj
				let newid = ""
				for (var i in mes) {
					newid += mes[i].id + ',';
					mes[i].datas = JSON.parse(mes[i].datas);
					mes[i].num = 0;
				}
				console.log(newid)
				// 浏览量--h5报错		
				// see({
				// 	newsId: newid
				// }).then(res => {
				// 	res = res.data.obj;
				// 	for (var i in res) {
				// 		mes[i].num = res[i].num;
				// 	}
				// })
				that.living = mes
				console.log(that.living)
				this.showWrap = true
				uni.hideLoading()
				this.dataShow = true
			})

		},
		methods: {
			linkDetail(shopId, title) {
				console.log(shopId, title)
				let url = '';
				if (shopId == 503) { //东北亚植物园
					url = "https://tool.changbaishan.gov.cn/video/video07.html";
				} else if (shopId == 1156) { //天伦广场
					url = "https://tool.changbaishan.gov.cn/video/video02.html";
				} else if (shopId == 1157) { //情人桥
					url = "https://tool.changbaishan.gov.cn/video/video03.html";
				} else if (shopId == 1158) { //东北亚植物园西门
					url = "https://tool.changbaishan.gov.cn/video/video04.html";
				} else if (shopId == 1159) { //雕塑公园
					url = "https://tool.changbaishan.gov.cn/video/video05.html";
				} else if (shopId == 1160) { //雕塑公园
					url = "https://tool.changbaishan.gov.cn/video/video06.html";
				} else if (shopId == 1161) { //雕塑公园
					url = "https://tool.changbaishan.gov.cn/video/video08.html";
				} else if (shopId == 1162) { //松鼠驿站
					url = "https://tool.changbaishan.gov.cn/video/video09.html";
				} else if (shopId == 1163) { //雕塑公园
					url = "https://tool.changbaishan.gov.cn/video/video10.html";
				}
				uni.navigateTo({
					url: "../webView/webView?url=" + url + "&title" + title,
				})
			}

		},

	}
</script>

<style>
	.pages {
		position: relative;
	}

	.title {
		color: #000
	}

	.wrap {
		padding-bottom: 80rpx;
	}



	.mes {
		font-size: 24rpx;
		display: flex;
		justify-content: space-between;
		height: 40rpx;
		align-items: center;
	}

	.mes .title {
		margin-bottom:0;
	}

	.yellow {
		color: #fd8e23;
		display: flex;
		align-items: center;
	}


	.dataShow {
		text-align: center;
		font-size: 28rpx;
		margin-top: 30rpx;
	}

	.imgWrap {
		height: 466rpx;
	}
</style>
