<template>
	<view class="voice">
		<!--#ifdef H5 -->
		<view class="voiceBg">
			<image style="width:28rpx; height: 28rpx; margin-right: 10rpx;" src="../../static/voiceBg.png" mode="aspectFill"></image>语音播报中...
		</view>
		<!--#endif-->
		<!--#ifdef MP-WEIXIN -->
		<view class="voiceBg">
			<image style="width:28rpx; height: 28rpx; margin-right: 10rpx;" src="../static/voiceBg.png" mode="aspectFill"></image>语音播报中...
		</view>
		<!--#endif-->
		<view class="language">
			<view v-for="(item, index) in language" :key="index" :class="{ isActive:isChange == index}" @click="changeBtn(index)">{{item}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isChange: 0,
				language: ['中文', 'EN', '한국어']
			};
		},
		methods: {
			changeBtn(index) {
				this.isChange = index;
			}
		}
	}
</script>

<style>
	.voice {
		display: flex;
		margin: 50rpx 30rpx 0;
		justify-content: space-between;
		font-size: 28rpx;
	}

	.voiceBg {
		display: flex;
		align-items: center;
	}

	.voice>view {
		padding: 10rpx 40rpx;
		box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 10px 5px;
		border-radius: 40rpx;
	}

	.language {
		display: flex;
		color: #999
	}

	.language>view {
		margin-right: 16rpx;
	}

	.language>view:nth-child(3) {
		margin-right: 0;
	}

	.isActive {
		color: #000
	}
</style>
