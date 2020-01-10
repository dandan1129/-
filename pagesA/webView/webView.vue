<template>
	<view>
		<web-view :webview-styles="webviewStyles" :src="url"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 webviewStyles: {
                    progress: {
                        color: '#FF3333'
                    }
                },
				url:''
			}
		},
		onLoad(options){
			console.log(options)
			this.url=options.url
			if(options.title){
				uni.setNavigationBarTitle({
					title:options.title
				})
			}
			
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
