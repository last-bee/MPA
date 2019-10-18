<template>
  <div>
    <list v-model="loading" @load="onload">
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
      }
    },
    methods: {
      onload() {
        console.log('-------loading-------')
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
</style>