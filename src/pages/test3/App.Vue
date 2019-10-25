<template>
  <div>
    <list v-model="loading" :finished="finished" @load="onload" class="list">
      <div>
        <div class="item">111111</div>
        <div class="item">111111</div>
        <div class="item">111111</div>
        <div class="item">111111</div>
        <div class="item">111111</div>
        <div class="item">111111</div>
        <div class="item">111111</div>
        <div class="item">111111</div>
        <div class="item">111111</div>
        <div class="item">111111</div>
        <div class="item">111111</div>
        <div class="item">111111</div>
        <div class="item">111111</div>
        <div class="item">111111</div>
        <div class="item">111111</div>
        <div class="item">111111</div>
        <div class="item">111111</div>
        <div class="item">111111</div>
        <div class="item">111111</div>
        <div class="item">111111</div>
      </div>
    </list>
  </div>
</template>

<script>
import List from "./list";
  export default {
    components: {List},
    data() {
      return {
        loading: false,
        finished: false
      }
    },
    methods: {
      onload() {
        setTimeout(() => {
          this.loading = false
          this.finished = true
        }, 2000);
      }
    }
  }
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0
}
.item {
  height: 80px;
  font-size: 30px;
}
.list {
  height: 100vh;
  overflow: scroll;
}
</style>