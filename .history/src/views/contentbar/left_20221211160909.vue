<template>
  <div class=leftbar>
  <a-space direction="vertical" size="small">
    <a-input-search :style="{width:'250px'}" placeholder="Search..." search-button>
      <template #button-icon>
        <icon-search/>
      </template>
      <template #button-default>
        Search
      </template>
    </a-input-search>
  </a-space>
  <a-list>
    <a-list-item v-for="(item,index) in items" :key="index">
      <a-list-item-meta
        title="Beijing Bytedance Technology Co., Ltd."
        description="1"
      >
       
      </a-list-item-meta>
    </a-list-item>
  </a-list>
  </div>
</template>

<script>
export default {
data{
  return{
    items:[

    ]
  }
}
}
</script>

<style>

</style>