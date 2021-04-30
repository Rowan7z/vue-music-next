// 负责轮播图相关的请求（封装）
import { get } from './base'

// 通过 getRecommend 这个函数拿到轮播图和推荐歌单的数据
export function getRecommend() {
  console.log('getRecommend')
  // 发送请求到后端接口内部，然后在路由视图中发送这个请求
  return get('/api/getRecommend')
}
