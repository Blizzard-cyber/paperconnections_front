<template>
  <div class=leftbar>
    <a-scrollbar style="height:100%;overflow: auto;">
    <div style="height: 2000px;width: 2000px; background-color: var(--color-primary-light-4);">
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
    </a-list-item>
  </a-list>
    </div>
  </a-scrollbar>
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
      title:'Reliability-Centric High-Level Synthesis',
      author:'S. Tosun,2011'
    },
    {
      title:'Moving Vertices to Make Drawings Plane',
      author:'Xavier Goaoc,2008'
    },
    {
      title:'On Ultrametric Algorithmic Information',
      author:'Fionn Murtagh,2011'
    },
    {
      title:'Does intelligence imply contradiction?',
      author:'Patrizio Frosini,2008'
    },
    {
      title:'Mining for trees in a graph is NP-complete',
      author:'Jan Van den Bussche,2007'
    }
   

    ]
  }
}
}
</script>

<style>

</style>