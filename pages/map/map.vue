<template>
	<view id="map">
		<map :longitude="125.314178" :latitude="43.883047"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {
			// 获取当前位置
			uni.getLocation({
				type: 'gcj02',
				success: (res) => {
					
					console.log(111)
					console.log(res)
					
					uni.openLocation({
						latitude:res.latitude,
						longitude:res.longitude,
						success:(result)=>{
							console.log(result)
						}
					})

				},
				fail:(err)=>{
					console.log(333)
					console.log(err)
				}
			})
		},
		methods: {

		}
	}
</script>

<style>
	#map,map {
		width: 100%;
		height: 750rpx;
	}
</style>
