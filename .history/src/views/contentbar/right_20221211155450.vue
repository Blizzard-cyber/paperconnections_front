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
      value: 'The authors' colored pebbles generalize and strengthen the previous results of Lee and Streinu and give a new proof of the Tutte-Nash-Williams characterization of arboricity, and present a new decomposition that certifies sparsity based on the (k, ℓ)-pebble game with colors.',
    }];

    return {
      data,
      size
    }
  },
}
</script>
