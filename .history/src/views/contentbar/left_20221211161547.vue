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
        title={{item.title}}
        description={{item.author}}
      >
      <template #title>
        {{item.title}}
      </template>
      <template #description>
        {{item.author}}
      </template>
      </a-list-item-meta>
      <a-divider />
    </a-list-item>
  </a-list>
  </div>
</template>

<script>
export default {
data(){
  return{
    items:[
    {
      title:'Sparsity-certifying Graph Decompositions',
      author:'Ileana Streinu,2008'
    },
    {
      title:'Distinguishing Short Quantum Computations',
      author:'Bill Rosgen,2010'
    },
    {
      title:'A first-order Temporal Logic for Actions',
      author:'Camilla Schwind (LIF),2007'
    },
    {
      title:'A first-order Temporal Logic for Actions',
      author:'Camilla Schwind (LIF),2007'
    },
    {
      title:'A first-order Temporal Logic for Actions',
      author:'Camilla Schwind (LIF),2007'
    },
    {
      title:'A first-order Temporal Logic for Actions',
      author:'Camilla Schwind (LIF),2007'
    },
    {
      title:'A first-order Temporal Logic for Actions',
      author:'Camilla Schwind (LIF),2007'
    },
    {
      title:'A first-order Temporal Logic for Actions',
      author:'Camilla Schwind (LIF),2007'
    },
    {
      title:'A first-order Temporal Logic for Actions',
      author:'Camilla Schwind (LIF),2007'
    },
    {
      title:'A first-order Temporal Logic for Actions',
      author:'Camilla Schwind (LIF),2007'
    },
    {
      title:'A first-order Temporal Logic for Actions',
      author:'Camilla Schwind (LIF),2007'
    },
    {
      title:'A first-order Temporal Logic for Actions',
      author:'Camilla Schwind (LIF),2007'
    },
    {
      title:'A first-order Temporal Logic for Actions',
      author:'Camilla Schwind (LIF),2007'
    },

    ]
  }
}
}
</script>

<style>

</style>