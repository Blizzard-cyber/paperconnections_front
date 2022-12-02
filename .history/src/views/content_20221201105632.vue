<template>
  <my-topper></my-topper>
    <div class="container">
        <div class="leftbar">


        </div>
        <div class="centerbar">


        </div>
        <div class="rightbar">
    
        </div>
    </div>
  <my-bottom></my-bottom>
</template>

<script>
import left from '../views/contentbar/left.vue'
import right from '../views/contentbar/right.vue'
import center from '../views/contentbar/center.vue'


</script>

<style>
        *{
            margin: 0;padding: 0;
        }
        .leftbar, .rightbar{
            width: 200px;
            height: 200px;
            background:  pink;
            float: left;
        }
        .content{
            height: 200px;
            background: rgb(45, 173, 75);
            float: left;
            width: 100%;
        }
        .ineer{
            margin: 0 200px;
            height: 200px;
        }
        .left{
            margin-left: -100%;
        }
        .right{
            margin-left: -200px;
        }
    </style>
