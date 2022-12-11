<template>
 <div class="card">
  <a-row class="grid-demo" justify="center" v-for="(item,index) in items" :key="index">
   <a-col :span="7" v-for="(item,index) in items" :key="index">
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
            :style="{ width: '100%', transform: 'translateY(-20px)'}"
            alt="dessert"
            :src="item.img"
          />
           <!-- <a-image
              width="200px"
              :src="item.img"
            /> -->
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
                { img:'https://i0.wp.com/www.namecheap.com/blog/wp-content/uploads/2020/03/2020-CRM-April-NL-1.3_04-Blog-01.png?quality=100',title: 'Tarik Hadzic,2007', description: 'Calculating Valid Domains for BDD-Based Interactive Configuration' },
                { img:'https://www.softwaretestinghelp.com/wp-content/qa/uploads/2018/08/1.CONFIGURATION-MANAGEMENT.png',title: 'Loren Trigo,2007',description:'A Framework for the Development of Interactive Configuration Tools'},
                { img:'https://thumbs.dreamstime.com/z/soft-abstract-composition-6122082.jpg',title: 'Sanjiang Li and Mingsheng Ying,2010',description:'Soft constraint abstraction based on semiring homomorphism'},
                { img:'https://tse4-mm.cn.bing.net/th/id/OIP-C.Ce4TdGm1MTsJgCoUxVgyMwAAAA?w=153&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',title: 'Roberto Bagnara,2007',description:'An Improved Tight Closure Algorithm for Integer Octagonal Constraints'},
                { img:'https://tse3-mm.cn.bing.net/th/id/OIP-C.ZsBMer9PdMAE-vQNM6GctAHaFL?w=258&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7',title: 'Animesh Datta,2011', description:'A Constraint-Based Approach to Interactive Configuration of Software Product Lines'},
                { img:'https://tse2-mm.cn.bing.net/th/id/OIP-C.jC1kkJ31tX4mI3ANcS9S6AHaFU?w=225&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',title: 'Kevin Buchin,2011', description:'Minimizing the Maximum Interference is Hard'}


               
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
  margin-bottom: 24px;
  transition-property: all;
}
.card-box:hover {
  transform: translateY(-4px);
}
.grid-demo {

  margin-top: 20px;
  margin-bottom: 20px;
}
.card{
  margin-left: 8%;
  margin-right: 8%;
}
 </style>
  