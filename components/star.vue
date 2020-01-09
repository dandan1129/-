<template>
	<view class="star_wrapper">
		<view class="noscore">
			<view class="iconfont icon-xingxing"></view>
			<view class="iconfont icon-xingxing"></view>
			<view class="iconfont icon-xingxing"></view>
			<view class="iconfont icon-xingxing"></view>
			<view class="iconfont icon-xingxing"></view>
		</view>
		<view class="score" :style="{width:scoreWidth+'px'}">
			<view class="iconfont icon-xingxing"></view>
			<view class="iconfont icon-xingxing"></view>
			<view class="iconfont icon-xingxing"></view>
			<view class="iconfont icon-xingxing"></view>
			<view class="iconfont icon-xingxing"></view>
		</view>

	</view>
</template>

<script>
	export default {
		props: {
			score: {
				type: Number
			}
		},
		data() {
			return {
				scoreWidth: 0,
				fullScore: 5, //满分
			}
		},
		created() {
			// #ifdef MP-WEIXIN
			// 获取星级总长度
			const query = uni.createSelectorQuery().in(this).select('.noscore'); // 这里要加上select
			query.boundingClientRect(data => {
				this.scoreWidth = Number(this.score * data.width) / this.fullScore
			}).exec();
			// #endif
			// #ifdef H5
			// 获取星级总长度
			this.$nextTick(() => {
				uni.createSelectorQuery().select('.noscore').fields({
					size: true,
					scrollOffset: true
				}, (data) => {
					this.scoreWidth = Number(this.score * data.width) / this.fullScore
				}).exec();
			})
			// #endif
		}
	}
</script>

<style lang="scss">
	.star_wrapper {
		position: relative;
		height: 30rpx;

		.score,
		.noscore {
			position: absolute;
			display: flex;
			justify-content: space-between;
			color: #FD8E23;
			overflow: hidden;
		}

		.noscore {
			color: #EFEFEF;
		}

		.iconfont {
			margin-right: 4rpx;

			&:last-child {
				margin: 0;
			}
		}

		.iconfont:before {
			width: 22rpx;
		}
	}
</style>
