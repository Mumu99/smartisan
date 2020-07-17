import ajax from './ajax'
import ajaxSearch from './ajax_search'
import ajaxProduct from './ajax_product'
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
reqProductList({ cid: '719', clid: '1002', page: 2 }).then(a => console.log(a))
