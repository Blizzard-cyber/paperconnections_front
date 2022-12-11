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
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>