<template>
  <m-header></m-header>
  <tab></tab>

  <!-- 路由匹配到的组件将显示在这里 -->
  <router-view></router-view>
</template>

<script>
import Header from '@/components/header/header'
import Tab from '@/components/tab/tab'

export default {
  components: {
    MHeader: Header,
    Tab
  }
}
</script>
