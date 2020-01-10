<template>
	<!--pages/user/user.wxml-->
	<view class="container">
		<tabHead title="我的"></tabHead>
		<button class="user" bindgetuserinfo="user_center" open-type="getUserInfo">
			<view class="user_login_register">
				<view>{{nickname}}</view>
				<text>登录后查看>></text>
			</view>
			<image :src="imgIcon" mode="aspectFill"></image>
		</button>
		<view class="user_operation">
			<view>
				<view class="iconfont icon-kongxindianzan"></view>我的点赞
			</view>
			<view>
				<view class="iconfont icon-wode-zuji" style="font-size: 40rpx; margin-right: 30rpx;"></view>我的足迹
			</view>
			<view>
				<view class="iconfont icon-wode-dingzhi"></view>我的定制
			</view>
			<view>
				<view class="iconfont icon-wode-tuichudenglu"></view>退出登录
			</view>
		</view>
	</view>

</template>

<script>
	import tabHead from "@/components/tabhead.vue";
	export default {
		components: {
		    tabHead
		},
		data() {
			return {
				nickname: '我的登录',
				imgIcon: 'https://tool.changbaishan.gov.cn/qj/site25/user_logout.png',
				currentTabIndex: 3
			}
		},
		methods: {
			tabClick(index) {
				this.currentTabIndex = index
			}
		}
	}
</script>

<style>
	.container {
		width: 100%;
	}
	.user {
		background: #FFF;
		border: none;
		color: #000;
		line-height: 44rpx;
		padding: 240rpx 104rpx 0;
		margin-bottom: 40rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	button.user::after {
		border: none;
	}

	button view.user_login_register {
		text-align: left;
		font-size: 40rpx;
		font-weight: bold;
	}

	.user_login_register view {
		margin-bottom: 10rpx;
	}

	.user_login_register text {
		font-size: 26rpx;
		color: rgb(147, 153, 169);
		font-weight: 500;
	}

	button image {
		width: 116rpx;
		height: 116rpx;
		border-radius: 50%;
		background: #E5E5EB
	}


	.user_operation {
		margin-top: 30rpx;
	}

	.user_operation>view {
		padding: 30rpx 0 30rpx 30rpx;
		margin: 0 48rpx;
		font-size: 30rpx;
		position: relative;
		border-bottom: 2rpx #f9f9f9 solid;
		display: flex;
		align-items: center;
	}

	.user_operation .iconfont {
		font-size: 30rpx;
		margin-right: 40rpx;
		color: #000;
		font-weight: bold;
	}
	.headerTitle{color:#000!important;}
</style>
