<template>
  <my-topper></my-topper>
    <div class="container">
        <div class="leftbar">
            <!-- <left></left> -->
        </div>
        <div class="centerbar">
            <div class="ineer">
                <center></center>
            </div>

        </div>
        <div class="rightbar">
             <!-- <right></right> -->
        </div>
    </div>
  <my-bottom></my-bottom>
</template>

<script>
//import left from '../views/contentbar/left.vue'
//import right from '../views/contentbar/right.vue'
import center from '../views/contentbar/center.vue'
export default {
    name: 'content',
    components: {
        // left,
        // right,
        center
    }
}

</script>

<style>
        .container{
           margin-top: 8%;
           margin-left: 10%;
           margin-right: 10%;
        }
         .leftbar{
            width: 300px;
            height: 100%;
            float: left;
        }
        .rightbar{
            width: 300px;
            height: 100%;
            float: right;
            margin-top: -15px;
        }
        
        /*.centerbar{
            height: 200px;
            background: rgb(45, 173, 75);
            float: left;
            width: 100%;
        }
        .ineer{
            margin: 0 200px;
            height: 200px;
        }
        .leftbar{
            margin-left: -100%;
        }
        .rightbar{
            margin-left: -200px;
        } */
    </style>
