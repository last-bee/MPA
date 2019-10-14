<template>
  <div @click="_href">
    hello world
  </div>
</template>

<script>
  // import  noticeBar from '../node_modules/vant/packages/notice-bar'
  // console.log(noticeBar)
  export default {
    methods: {
      _href() {
        console.log('--------------')
        location.href = '../test2.html'
      }
    }
  }
</script>

<style scoped>

</style>