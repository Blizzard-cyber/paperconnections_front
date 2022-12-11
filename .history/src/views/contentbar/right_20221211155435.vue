<template>
  <a-descriptions style="margin-top: 20px" :data="data" :size="size" title="Sparsity-certifying Graph Decompositions" :column="1"/>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const size = ref('medium');

    const data = [{
      label: 'Author',
      value: 'Ileana Streinu , Louis Theran',
    }, {
      label: 'date',
      value: '2008-12-13',
    }, {
      label: 'commit',
      value: 'To appear in Graphs and Combinatorics'
    }, {
      label: 'abstract',
      value: '',
    }];

    return {
      data,
      size
    }
  },
}
</script>
