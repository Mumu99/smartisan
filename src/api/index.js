import ajax from './ajax'
import ajaxSearch from './ajax_search'
import ajaxProduct from './ajax_product'
import ajaxUserText from './ajaxUserText'
// 首页数据
export const reqHomeList = () => ajax.get(`/new/home?channel_id=1002`)
// 猜你喜欢
export const reqLike = (page, pageSize) =>
  ajax.get(`/waterfall?page=${page}&pageSize=${pageSize}`)
// 分类
export const reqClassify = () => ajax.get('/classify')
// search热词
export const reqHotWords = () => ajaxSearch.get('/search/hot-words')
// search模糊搜索
export const reqSuggest = keyWord =>
  ajaxSearch.get(`/search/suggest?keyword=${keyWord}`)
// search获取spu商品的Id
export const reqSearchId = ({ page, size, keyword }) =>
  ajaxSearch.get(`/search/result?page=${page}&size=${size}&keyword=${keyword}`)
// 获取商品信息
export const reqSearchProduct = ids => ajaxProduct.get(`/spus?ids=${ids}`)
// 获取商品的list信息
export const reqProductList = ({ cid, clid, page }) =>
  ajaxSearch.get(
    `/search/goods-list?type=shop&category_id=${cid}&num=20&sort=sort&channel_id=${clid}&page=${page}`
  )
// 获取限时秒杀的数据
// shopapi.smartisan.com/mobile/seckiltime?secklId=0&page=1&pageSize=10
export const reqSeckTime = ({ page, pageSize }) =>
  ajax.get(`/seckiltime?secklId=0&page=${page}&pageSize=${pageSize}`)
export const reqSeckTimeWait = ({ page, pageSize }) =>
  ajax.get(`/seckiltime?secklId=3858&page=${page}&pageSize=${pageSize}`)

// 获取商品详情页的数据
export const reqGetDesic = ids => ajaxProduct.get(`/spus?ids=${ids}`)
export const reqGetDesicBanner = ids =>
  ajaxProduct.get(`/skus?ids=${ids},100063702&with_stock=true&with_spu=true`)
// 用户评价
export const reqGetUserText = ids =>
  ajaxUserText.get(`/open/v1/preview?spu_id=${ids}`)
