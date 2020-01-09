/*
	图片格式转化
	@param imgSrc 图片路径
	@param num 图片是否为第一张(0)
	@return Array/String
*/ 

export const getImgSrc = (imgSrc,num) => {
	imgSrc = imgSrc.replace(/\\/g, '/')
	imgSrc = imgSrc.split('#')
	imgSrc.pop()
	if(num==0){
		imgSrc = imgSrc[num]
	}
	return imgSrc
}
