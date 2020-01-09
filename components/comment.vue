<template>
	<view class="comment">

		<view class="commentItem" v-for="(item,index) in commentList" :key="item.id">
			<view class="commentTop">
				<text class="name">{{item.username}}</text>
				<text class="time">{{item.createDate}}</text>
			</view>
			<view class="commentDetail">
				{{item.content}}
			</view>
			{{imgList(item.imgUrl)}}
			<view class="commentImg">
				<view class="imgWrapper" v-for="(items,key) in item.imgUrl.split(',')" :key="key">
					<image :src="items"></image>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		props: {
			commentList: {
				type: Array
			}
		},
		computed:{
			imgList(){
				return (val)=>{
					console.log(val)
					if(!val||val=='undefined')return
					let arr=val.split(',');
					
					if(arr.length){
						arr.forEach(item=>{
							if(item=='undefined'){
								
							}
						})
						console.log(arr)
						return arr
					}
					
		
				}
			}
		},
		watch:{
			commentList:(newVal)=>{
				
			}
		},
		data() {
			return {
			};
		},
	}
</script>

<style lang="scss">
	.comment {
		text-align: left;

		.commentItem {
			margin-bottom: 43rpx;
		}

		.commentTop {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.name {
				font-size: 32rpx;
			}

			.time {
				color: #A0A0A0;
			}
		}

		.commentDetail {
			padding: 20rpx 0;
		}

		.commentImg {
			display: flex;
			flex-wrap: wrap;
			margin-right: -27rpx;
			margin-bottom: -27rpx;

			.imgWrapper {
				width: 200rpx;
				height: 200rpx;
				margin-right: 27rpx;
				margin-bottom: 27rpx;
			}
		}
	}
</style>
