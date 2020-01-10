<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	// 字体图标
	@import './static/css/iconfont.css';
	// 文本解析组件的样式
	@import url("/components/gaoyia-parse/parse.css");
	// 全局样式
	@import './static/css/app.scss';
	
	
</style>
