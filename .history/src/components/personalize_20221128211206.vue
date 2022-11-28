<template>
 <div class="card">
  <a-row class="grid-demo" justify="end">
   <a-col :span="8" v-for="(item,index) in items" :key="index">
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
      <a-card-meta title="Card Title" description="This is the description">
        <template #avatar>
          <div
            :style="{ display: 'flex', alignItems: 'center', color: '#1D2129' }"
          >
            <a-avatar :size="24" :style="{ marginRight: '8px' }">
              A
            </a-avatar>
            <a-typography-text>Username</a-typography-text>
          </div>
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
                { title: '个人信息', message: '查询个人信息详情' },
                { title: '课程情况', message: '查询学生个人选课情况，学分和成绩情况' },
                { title: '课程表', message: '查询学生课程表' },
                { title: '我的成绩', message: '查询学生在校期间成绩详情' },
                { title: '考试安排', message: '查询学期考试课程安排' },
                { title: '毕业设计', message: '查询学生毕业设计情况' },
                { title: '学费缴纳信息', message: '查询学生缴费、欠费情况' },
                { title: '缴费报考信息', message: '查询学生学费、报考费信息' },
                { title: '实验室开放时间', message: '查询实验室开放时间' },
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
  width: 360px;
  margin-left: 24px;
  transition-property: all;
}
.card-box:hover {
  transform: translateY(-4px);
}
.grid-demo {
  background-color: var(--color-fill-2);
  margin-bottom: 40px;
}
.grid-demo:last-child {
  margin-bottom: 0px;
}
.grid-demo .arco-col {
  height: 48px;
  line-height: 48px;
  color: var(--color-white);
  text-align: center;
}
.grid-demo .arco-col:nth-child(2n) {
  background-color: rgba(var(--arcoblue-6), 0.9);
}
.grid-demo .arco-col:nth-child(2n + 1) {
  background-color: var(--color-primary-light-4);
}
 </style>
  