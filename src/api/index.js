import ajax from './ajax'
// 首页数据
export const reqHomeList = () => ajax.get(`/new/home?channel_id=1002`)
// 猜你喜欢
export const reqLike = (page, pageSize) =>
  ajax.get(`/waterfall?page=${page}&pageSize=${pageSize}`)
// 分类
export const reqClassify = () => ajax.get('/classify')
reqClassify().then(a => console.log(a))
