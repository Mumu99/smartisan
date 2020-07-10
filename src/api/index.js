import ajax from './ajax'
// 首页数据
export const reqHomeList = () => ajax.get(`/new/home?channel_id=1002`)
// 猜你喜欢
export const reqLike = (page, pageSize) =>
  ajax.get(`/waterfall?page=${page}&pageSize=${pageSize}`)
