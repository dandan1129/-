import {
	getListShop,
	getStar
} from "@/api/index.js";
import {
	getImgSrc
} from '@/utils/comUtils.js'
export default {
	data() {
		return {
			mescroll: {},
			// 下拉刷新的常用配置
			downOption: {
				use: true, // 是否启用下拉刷新; 默认true
				auto: true, // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
			},
			// 上拉加载的常用配置
			upOption: {
				use: true, // 是否启用上拉加载; 默认true
				auto: true, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
				page: {
					num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
					size: 10 // 每页数据的数量,默认10
				},
				noMoreSize: 5, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
				empty: {
					tip: '暂无相关数据'
				},
			},
			// 列表数据
			listData: [],
			// 参数对象
			params: {
				categoryIds: '',
				isTop: 'desc',
				json: {},
				orderBy: {}
			}
		}
	},
	onLoad() {
		// 接受参数
		this.params.categoryIds = '43'
	},
	methods: {
		mescrollInit(mescroll) {
			this.mescroll = mescroll;
		},
		/*下拉刷新的回调, 有三种处理方式: */
		downCallback(mescroll) {
			// 第2种: 下拉刷新和上拉加载调同样的接口, 那以上请求可删, 直接用mescroll.resetUpScroll()代替
			mescroll.resetUpScroll(); // 重置列表为第一页 (自动执行 page.num=1, 再触发upCallback方法 )
			// 第3种: 下拉刷新什么也不处理, 可直接调用或者延时一会调用 mescroll.endSuccess() 结束即可
			mescroll.endSuccess()
		},
		/*上拉加载的回调*/
		async upCallback(mescroll) {
			// 首页赋空
			if (mescroll.num == 1) this.listData = [];
			// 加载列表数据
			let {
				curPageData,
				ids,
				totalPage
			} = await this.getList(mescroll);
			// 评分
			curPageData = await this.getScore(ids, curPageData)

			// 渲染数据
			this.listData = this.listData.concat(curPageData)

			this.$nextTick(() => {
				// 所有数据加载完成结束
				mescroll.endByPage(curPageData.length, totalPage);
				// 触发懒加载
				this.listenLazy();
			})
		},
		// 列表数据
		getList(mescroll) {
			return new Promise((resolve, reject) => {
				getListShop({
					pageOffset: mescroll.num,
					pageSize: mescroll.size,
					...this.params
				}).then(res => {
					if (!res.data.success) return
					//当前数据
					let curPageData = res.data.obj;
					let ids = '';
					let totalPage = 6; ////总页数(暂时模拟)
					curPageData.forEach(item => {
						// 图片数据处理
						item.atts = getImgSrc(item.atts,0);
						// ids字符串(星级评价)
						ids += item.id + ','
						item.isShow = false
						item.score = 6
					})

					resolve({
						curPageData,
						ids,
						totalPage
					})

				}).catch(err => {
					reject(err);
				})

			})

		},
		// 星级评价
		getScore(ids, curPageData) {
			return new Promise((resolve, reject) => {
				getStar(ids).then(result => {
					if (result.data.success) {
						result = result.data;
						result.obj.forEach((v, index) => {
							curPageData[index].score = v
						})
						resolve(curPageData)
					}
				}).catch(err => {
					reject(err);
				})

			})
		},

		// 监听懒加载
		listenLazy() {
			this.listData.forEach((item, index) => {
				uni.createIntersectionObserver(this, {
						observeAll: true
					}).relativeToViewport({
						bottom: 10,
					})
					.observe('.lazy-' + index, (res) => {
						if (res.intersectionRatio > 0) {
							item.isShow = true
						}
					})
			})
		},
		// 图片报错处理
		errImg(item, index) {
			this.$set(this.listData[index], 'atts', "../../static/img/test.jpg")
		}
	}
}
