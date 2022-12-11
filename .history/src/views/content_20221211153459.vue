<template>
  <div class="nav">
           <el-menu
                :default-active="activeIndex"
                class="nav"
                mode="horizontal"
                :ellipsis="false"
                @select="handleSelect"
            >
                <el-menu-item index="0">
                    <div id="logo"><a href="https://hao.zdsr.cn"><img alt="简洁导航" src="../assets/img/logo.jpg"> </a></div>
                </el-menu-item>
                <div class="flex-grow" />
                <el-menu-item index="1">
                    search_bar
                </el-menu-item>
                <el-menu-item index="2">
                    <div>
                    <el-avatar> user </el-avatar>
                    </div>
                </el-menu-item>
            </el-menu>
    </div>
    <div class="container">
        <div class="leftbar">
            <left></left>
        </div>
        <div class="centerbar">
            <center></center>    
        </div>
        <div class="rightbar">
             <right></right>
        </div>
    </div>
  <my-bottom></my-bottom>
</template>

<script>
import left from '../views/contentbar/left.vue'
import right from '../views/contentbar/right.vue'
import center from '../views/contentbar/center.vue'
export default {
    name: 'content',
    components: {
        left,
         right,
        center
    }
}

</script>

<style>
        .container{
           margin-top: 8%;
           margin-left: 10%;
           margin-right: 10%;
           display: flex;
        }
         .leftbar{
            width: 250px;
            height: 100%;
            border: 1px solid red;
           
        }
        .rightbar{
            width: 250px;
            height: 100%;
            border: 1px solid red;
        }
        .centerbar{
            flex: 1;
            /* margin-right: 320px; */
        }
        
    </style>
