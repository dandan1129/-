import http from '@/utils/interface'

// 首页轮播图
export const getBanner = (data) => {
    return http.request({
        url: 'tongcheng/v2/findNews',
        method: 'GET', 
        data,
    })
}

// 列表轮播图
export const getListBanner = (data) => {
    return http.request({
        url: 'tongcheng/v2/findNews',
        method: 'GET', 
        data,
    })
}

// 列表商家信息
export const getListShop = (data) => {
    return http.request({
        url: 'tongcheng/v2/findNews',
        method: 'GET', 
        data,
    })
}

// 星级评分
export const getStar = (ids) => {
    return http.request({
        url: 'comment/getCommentCount?newsIds='+ids,
        method: 'GET', 
    })
}

// 景区实景
export const scene = (data) => {
    return http.request({
        url: 'tongcheng/v2/findNews',
        method: 'GET', 
        data
    })
}
// 浏览量
export const see = (data) => {
    return http.request({
        url: 'weChat/news/getList',
        method: 'GET', 
        data
    })
}

