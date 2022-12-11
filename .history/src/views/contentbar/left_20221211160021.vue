<template>
  <div class=leftbar>
    <el-input
      v-model="input1"
      class="w-50 m-2"
      size="large"
      placeholder="Please Input"
      :prefix-icon="Search"
    />
  </div>
</template>

<script>
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
export default {
components: {
    Search
  },
  setup() {
    const input1 = ref('')
    return {
      input1
    }
  }
}
</script>

<style>

</style>