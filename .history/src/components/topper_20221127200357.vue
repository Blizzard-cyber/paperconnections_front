<template>
  <div id="menu" :class="{on:is_on}" @click="menu_client()"><i></i></div>
  <div :class="{closed:!is_on}" class="list">
    <ul id="setting">
      <li :class="{selected:menu_selected==='bookmark'}" @click="menu_select('bookmark')"><a>书签</a></li>
      <li :class="{selected:menu_selected==='setting'}" @click="menu_select('setting')"><a>设置</a></li>
    </ul>
    <ul id="element">
      <span v-if="menu_selected==='bookmark'">
        <Bookmarks></Bookmarks>
      </span>
      <span v-else-if="menu_selected==='setting'">
        <Setting></Setting>
      </span>
    </ul>
  </div>
  <div id="content" ref="content" @click="menu_close()">
    <div id="top-menu-list">
      <ul id="top-menu-ul">
        <li :class="{selected:this.$route.path==='/'}">
          <router-link to="/">首页</router-link>
        </li>
        <li :class="{selected:this.$route.path==='/nav'}">
          <router-link to="/nav">导航</router-link>
        </li>
        <li :class="{selected:this.$route.path==='/software'}">
          <router-link to="/software">软件</router-link>
        </li>
        <li :class="{selected:this.$route.path==='/os'}">
          <router-link to="/os">系统</router-link>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
import packageJson from '../package.json'
// import storage from "@/utils/storage";
// import axios from "axios";
import Bookmarks from "@/components/Bookmarks";
import Setting from "@/components/Setting";

export default {
  name: "Home",
  components: {Setting, Bookmarks},
  data() {
    return {
      version: packageJson.version,
      is_on: false,
      menu_selected: "bookmark",
      background: "",
    }
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
  watch: {
    background() {
      try {
        this.$refs.content.style.background = this.background
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.$refs.content.style.background = this.background
  }
};
</script>

<style lang='less'>
@import "style/main";
</style>