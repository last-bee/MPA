<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div
        style="height: 40px"
        v-for="item in list"
        :key="item"
        :title="item"
      >
      {{ item }}
      </div>
    </van-list>
  </div>
</template>

<script>
  // import  noticeBar from '../node_modules/vant/packages/notice-bar'
  // console.log(noticeBar)
  import { List } from 'vant';
  import 'vant/lib/list/style';
  // console.log(List)
  export default {
    data() {
      return {
        list: [],
        loading: false,
        finished: false
      }
    },
    components: {
      [List.name]: List
    },
    methods: {
      onLoad() {
        console.log('--------')
        setTimeout(() => {
        for (let i = 0; i < 30; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 100) {
          this.finished = true;
        }
      }, 500);
      }
    }
  }
</script>

<style lang="scss">
div {
  color: red;
}
</style>