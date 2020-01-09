<template>
	<view class="search_box">
		<view class="iconfont icon-shouyesousuotubiao"></view>
		<input type="text" name="search" placeholder-class="placeholder" placeholder="点击搜索景点、攻略、酒店、美食">
	</view>
</template>

<script>
	export default{
		methods:{
		}
	}
</script>

<style lang="scss">
	.search_box {
		width:654rpx;
		height:75rpx;
		background:rgba(24,110,176,1);
		border-radius:38rpx;
		display:flex;
		align-items:center;
		margin:0 auto;
		.icon-shouyesousuotubiao{
			content:'';
			width:38rpx;
			height:38rpx;
			margin:0 20rpx 0 38rpx;
			color:#FFF;
			font-size:36rpx;
		}
		input{
			width:80%;
			height:100%;
			color:#FFF;
			font-size:$uni-font-size;
		}
		.placeholder{
			color:#FFF;
			text-align: left;
		}
	}
	
</style>
