<template>
  <div class="block">
    <topper></topper>
    <router-view></router-view>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {}
  }
}
</script>

<style lang='less'>
@import "style/main";
</style>