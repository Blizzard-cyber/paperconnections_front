<template>
     <div id="foot">©2018-2022
      <a class="out_link" href="https://zhangdi.net/" target="_blank">ZHANGDI.</a> All rights reserved.
      <a class="out_link beian" href="http://beian.miit.gov.cn/" target="_blank">蜀ICP备18024871号</a>
<!--      <a href="https://github.com/zzd/Simple-Search-Page" style="font-size: 12px;" target="_blank">-->
<!--        <span class="tag_box">v{{ version }} Vue 测试版</span></a>-->
      <a href="https://github.com/zzd/Simple-Search-Page" style="font-size: 12px;" target="_blank">
        <span class="tag_box">Vue 测试版</span></a>
    </div>
</template>

<script>
export default {
  name: "topper",
  components: {Setting, Bookmarks},
  data() {
    return {
  },
  methods: {
    menu_client() {
      this.is_on = !this.is_on
    },
    menu_close() {
      this.is_on = false
    },
    menu_select(val) {
      this.menu_selected = val
    },
    set_background(data) {
      this.background = data;
    },
  },


</script>
<style lang='less'>
@import "style/main";
</style>