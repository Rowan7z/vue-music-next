<template>
  <div class="recommend">
    推荐页面
  </div>
</template>

<script>
  import { getRecommend } from '@/service/recommend'

  export default {
    name: 'recommend',
    // 在创建的生命周期中发送请求（通过封装请求的函数 getRecommend）
    async created() {
      const result = await getRecommend()
      console.log(result)
    }
  }
</script>

<style lang="scss" scoped>
</style>
