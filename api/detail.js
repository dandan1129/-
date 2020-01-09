import http from '@/utils/interface'

//	商家详情页详情数据
export const getDetail = (id) => {
    return http.request({
        url: 'tongcheng/v2/findNewsDetail?id='+id,
        method: 'GET', 
    })
}
// 评论
export const getComment = (id) => {
    return http.request({
        url: 'comment/getCountCommentList?newsId='+id,
        method: 'GET', 
    })
}




