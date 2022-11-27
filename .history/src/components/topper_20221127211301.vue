<template>
  <el-menu
    :default-active="activeIndex"
    class="nav"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">login</el-menu-item>
    <el-menu-item index="1">register</el-menu-item>
    <el-menu-item index="2">search</el-menu-item>
    <el-menu-item index="3">content</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="4">user</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
      handleSelect(key, keyPath) {
        if(key==0){
            this.$router.push({ path: "/login" });
          }
        elseif (key == 1) {
            this.$router.push({ path: "/register" })
          }
        elseif (key == 2) {
            this.$router.push({ path: "/search" });
          }
        elseif (key == 3) {
            this.$router.push({ path: "/content" });
          }
        elseif (key == 4) {
            this.$router.push({ path: "/user" });
          }
        }
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
