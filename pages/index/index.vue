<template>
	<view class="switchWrapper">
			<Home v-if="path=='home'"/>
			<our v-if="path=='our'"/>
			<travelAssistant v-if="path=='travelAssistant'"/>
			<view class="bottomNav">
				<view :class="item.active?'active':''" v-for="(item,index) in navList" :key="index" @click="routerTap(item)">
					<view :class="'iconfont navIcon '+item.icon"></view>
					<text class="NavTitle">{{item.title}}</text>
				</view>
			</view>
	</view>
	
	
</template>

<script>
	// vueX
	import Home from '@/pages/home/index.vue'
	import our from '@/pages/our/our.vue'
	import travelAssistant from '@/pages/travelAssistant/travelAssistant.vue'
	export default {
		components:{
			Home,
			our,
			travelAssistant
		},
		data() {
			return {
				path:'home',
				navList: [{
					title: '主页',
					path: 'home',
					icon: 'icon-dibu-zhuye',
					active: true
				}, {
					title: '商城',
					path: 'shop',
					icon: 'icon-dibu-shangcheng',
					active: false
				}, {
					title: '助手',
					path: 'travelAssistant',
					icon: 'icon-dibu-zhushou',
					active: false
				}, {
					title: '我的',
					path: 'our',
					icon: 'icon-dibu-wode',
					active: false
				}, ]
			}
		},
		methods: {
			routerTap(item) {
				// 激活切换
				this.navList.forEach(v => {
					if (v == item) {
						v.active = true;
					} else {
						v.active = false;
					}
				})
				// 跳转
				this.path=item.path
			}
		}
	}
</script>

<style lang="scss">
	.switchWrapper{
		width:100%;
	}
	.bottomNav {
		width: 100%;
		position: fixed;
		bottom: 0;
		z-index: 1000;
		display: flex;
		justify-content: space-around;
		padding: 14rpx 0;
		border: 1px solid rgba(229, 229, 229, 1);
		background:#FFF;
		color: #868686; //未激活颜色
		
		.navIcon {
			margin-bottom: 6rpx;

			&:before {
				font-size: 39rpx;
			}
		}

		// 已激活颜色
		.active .NavTitle {
			color: #000;
		}

		.active .navIcon:before {
			color: #000;
		}

	}
</style>

