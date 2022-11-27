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
    <router-view></router-view>
    <!--    <Background @background="set_background"></Background>-->
    <div id="message"></div>
    <div id="foot">©2018-2022
      <a class="out_link" href="https://zhangdi.net/" target="_blank">ZHANGDI.</a> All rights reserved.
      <a class="out_link beian" href="http://beian.miit.gov.cn/" target="_blank">蜀ICP备18024871号</a>
<!--      <a href="https://github.com/zzd/Simple-Search-Page" style="font-size: 12px;" target="_blank">-->
<!--        <span class="tag_box">v{{ version }} Vue 测试版</span></a>-->
      <a href="https://github.com/zzd/Simple-Search-Page" style="font-size: 12px;" target="_blank">
        <span class="tag_box">Vue 测试版</span></a>
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
  data() {
    return
  }
</script>

<style lang='less'>
@import "style/main";
</style>