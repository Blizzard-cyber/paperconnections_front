<template>
 <div class="card">
  <a-row class="grid-demo" justify="center" v-for="(item,index) in items" :key="index">
   <a-col :span="6" v-for="(item,index) in items" :key="index">
    <a-card  class="card-box"  hoverable>
      <template #actions>
        <span class="icon-hover"> <IconThumbUp /> </span>
        <span class="icon-hover"> <IconStar /> </span>
        <span class="icon-hover"> <IconMore /> </span>
      </template>
      <template #cover>
        <div
          :style="{
            height: '204px',
            overflow: 'hidden',
          }"
        >
          <img
            :style="{ width: '100%', transform: 'translateY(-20px)' }"
            alt="dessert"
            src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
          />
        </div>
      </template>
      <a-card-meta >
        <template #title>
          {{item.title}}
        </template>
        <template #description>
          {{item.description}}
        </template>
      </a-card-meta>
    </a-card>
   </a-col>
  </a-row>
 </div>
</template>
  
  <script>
  import {
    IconThumbUp,
    IconMore,
    IconStar
  } from '@arco-design/web-vue/es/icon';
  
export default {
    components: { IconThumbUp, IconMore, IconStar },

    data() {
        return {
            items: [
                { title: 'Tarik Hadzic,2007', description: 'Calculating Valid Domains for BDD-Based Interactive Configuration' },
                {title:}
               
            ]
        }
    }
}
</script>
  <style scoped>
  .icon-hover {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    transition: all 0.1s;
  }
  .icon-hover:hover {
    background-color: rgb(var(--gray-2));
  }
  .card-box {
  width: 300px;
  margin-left: 24px;
  transition-property: all;
}
.card-box:hover {
  transform: translateY(-4px);
}
.grid-demo {

  margin-top: 20px;
  margin-bottom: 20px;
}
 </style>
  