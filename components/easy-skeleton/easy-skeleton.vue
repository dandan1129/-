<template>
	<view v-show="showSke" class="ske-wrap" :style="{width: sysInfo.width + 'px', height: sysInfo.height + 'px'}" @touchmove.stop.prevent = "stopScroll">
		<view class="block" v-for="(item, index) in rectLists" :key="index + 'rec'" :style="{
				width: item.width + 'px',
				height: item.height + 'px',
				left: item.left + 'px',
				top: item.top + 'px'
			}"></view>
		<view class="block" v-for="(item, index) in circleLists" :key="index + 'cir'" :style="{
				width: item.width + 'px',
				height:item.height + 'px',
				left: item.left + 'px',
				top: item.top + 'px',
				borderRadius:item.width + 'px',
			}"></view>
	</view>
</template>

<script>
	export default {
		name: 'skeleton',
		props: {
			showSke: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				base: 'skeleton',
				sysInfo: {},
				rectLists: [],
				circleLists: []
			};
		},
		methods: {
			init() {
				this.getSystemInfo()
				this.drawFn()
			},
			getSystemInfo() {
				const sysInfo = uni.getSystemInfoSync()
				this.sysInfo = {
					width: sysInfo.windowWidth,
					height: sysInfo.windowHeight
				}
			},
			drawFn() { // 绘制
				this.dynamicFn('rect', res => {
					this.rectLists = res[0]
				})
				this.dynamicFn('radius', res => {
					this.circleLists = res[0]
				})
			},
			dynamicFn(dom, done) {
				uni.createSelectorQuery()
					.selectAll(`.${this.base}-${dom}`)
					.boundingClientRect()
					.exec(res => done(res))
			},
			stopScroll(){
				// 禁止页面滚动
			}
		}
	}
</script>

<style scoped>
	.ske-wrap {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 9999;
		overflow: hidden;
		background-color: #FFFFFF;
	}

	.block {
		background-color: rgb(194, 207, 214);
		position: absolute;
		width: 100%;
		height: 100%;
		animation: blink 1.5s infinite;
	}

	@keyframes blink {
		0% {
			opacity: .6;
		}

		70% {
			opacity: 1;
		}

		100% {
			opacity: .6;
		}
	}
</style>
