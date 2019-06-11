/* 这是我的发送ajax请求模块 */
import ajax from './ajax'
const BAST='/api'
//获取商家列表
export const reqShops = (latitude,longitude) => ajax(BAST+'/shops',{ latitude,longitude })
//获取地址信息
export const reqLocation = (latitude,longitude) => ajax(BAST+`/position/${latitude},${longitude}`)
//获取banner轮播图内容
export const reqRecommend = () => ajax(BAST+'index_category')

//moke商户信息请求
export const reqGoods = () => ajax('/goods')

export const reqInfo = () => ajax('/info')

export const reqRatings = () => ajax('/ratings')
