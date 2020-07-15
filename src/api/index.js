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
reqSearchId({
  page: 1,
  size: 20,
  keyword: '抖音文创抖音小助手购物纸袋'
}).then(a => console.log(a))
export const reqSearchProduct = ids => ajaxProduct.get(`/spus?ids=${ids}`)
// https://shopapi.smartisan.com/product/spus?ids=1000912,1000915,1000911,1000900,1000914,1000718,1000721,1000724,1000660,1000662,1000674,1000717,1000719,1000720,1000727,1000728,1000729,1000734,1000738,1000711
reqSearchProduct(
  '1000912,1000915,1000911,1000900,1000914,1000718,1000721,1000724,1000660,1000662,1000674,1000717,1000719,1000720,1000727,1000728,1000729,1000734,1000738,1000711'
).then(a => console.log(a))
