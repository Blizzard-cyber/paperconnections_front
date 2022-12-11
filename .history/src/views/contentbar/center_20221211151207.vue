<template>
  <div ref="myChart" id="myChart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      list: [
        {
      "name": "Ileana Streinu and Louis Theran,2008-12-13",
      "id": 1,
      "symbolSize": 50,
      "color": "##006400",
      "tooltip": {
        "show": true,
        "formatter": "Sparsity-certifying Graph Decompositions"
      }
    },
    {
      "name": "Bill Rosgen','2010-06-02",
      "id": 528,
      "symbolSize": 50,
      "color": "##006400",
      "tooltip": {
        "show": true,
        "formatter": "Distinguishing Short Quantum Computations"
      }
    },
    {
      "name": "Camilla Schwind (LIF)','2007-05-23",
      "id": 86,
      "symbolSize": 50,
      "color": "##006400",
      "tooltip": {
        "show": true,
        "formatter": "A first-order Temporal Logic for Actions"
      }
    },
    {
      "name": "<'S. Tosun, N. Mansouri, E. Arvas, M. Kandemir, Yuan Xie','2011-11-09'>",
      "id": 369,
      "symbolSize": 50,
      "color": "##008000",
      "toolTip": {
        "show": true,
        "formatter": "'Reliability-Centric High-Level Synthesis'"
      }
    },
    {
      "name": "<'Xavier Goaoc, Jan Kratochvil, Yoshio Okamoto, Chan-Su Shin, Alexander\n  Wolff','2008-11-06'>",
      "id": 125,
      "symbolSize": 80,
      "color": "##006400",
      "toolTip": {
        "show": true,
        "formatter": "'Moving Vertices to Make Drawings Plane'"
      }
    },
    {
      "name": "<'Xavier Goaoc, Jan Kratochvil, Yoshio Okamoto, Chan-Su Shin, Alexander\n  Wolff','2008-11-06'>",
      "id": 126,
      "symbolSize": 80,
      "color": "##006400",
      "toolTip": {
        "show": true,
        "formatter": "'Moving Vertices to Make Drawings Plane'"
      }
    },
    {
      "name": "<'Fionn Murtagh','2011-06-14'>",
      "id": 241,
      "symbolSize": 80,
      "color": "##006400",
      "toolTip": {
        "show": true,
        "formatter": "'On Ultrametric Algorithmic Information'"
      }
    },
    {
      "name": "<'Patrizio Frosini','2008-03-18'>",
      "id": 550,
      "symbolSize": 80,
      "color": "##006400",
      "toolTip": {
        "show": true,
        "formatter": "'Does intelligence imply contradiction?'"
      }
    },
    {
      "name": "<'Jan Van den Bussche','2007-10-01'>",
      "id": 294,
      "symbolSize": 80,
      "color": "##006400",
      "toolTip": {
        "show": true,
        "formatter": "'Mining for trees in a graph is NP-complete'"
      }
    },
    {
      "name": "<'Prosenjit Bose and Paz Carmi and Mathieu Couture','2008-01-28'>",
      "id": 600,
      "symbolSize": 80,
      "color": "##006400",
      "toolTip": {
        "show": true,
        "formatter": "'Spanners of Additively Weighted Point Sets'"
      }
    },
    {
      "name": "<'Morris Michael and Francois Nicolas and Esko Ukkonen','2010-09-02'>",
      "id": 622,
      "symbolSize": 80,
      "color": "##006400",
      "toolTip": {
        "show": true,
        "formatter": "'On the complexity of finding gapped motifs'"
      }
    },
    {
      "name": "<'Jung-Chun Kao, Radu Marculescu','2011-11-09'>",
      "id": 397,
      "symbolSize": 80,
      "color": "##006400",
      "toolTip": {
        "show": true,
        "formatter": "'Energy-Aware Routing for E-Textile Applications'"
      }
    },
    {
      "name": "<'Piotr Faliszewski, Lane A. Hemaspaandra','2008-01-31'>",
      "id": 612,
      "symbolSize": 80,
      "color": "##006400",
      "toolTip": {
        "show": true,
        "formatter": "'The Complexity of Power-Index Comparison'"
      }
    },
    {
      "name": "<'Shai Gutner','2008-02-20'>",
      "id": 651,
      "symbolSize": 80,
      "color": "##006400",
      "toolTip": {
        "show": true,
        "formatter": "'The complexity of planar graph choosability'"
      }
    },
    {
      "name": "<'Jan Foniok','2007-10-19'>",
      "id": 323,
      "symbolSize": 80,
      "color": "##006400",
      "toolTip": {
        "show": true,
        "formatter": "'P-matrix recognition is co-NP-complete'"
      }
    },
    {
      "name": "<'Sergey Gubin','2007-09-28'>",
      "id": 291,
      "symbolSize": 80,
      "color": "##006400",
      "toolTip": {
        "show": true,
        "formatter": "'Set Matrices and The Path/Cycle Problem'"
      }
    },
    {
      "name": "<'Jonas Dieckelmann','2007-05-23'>",
      "id": 31,
      "symbolSize": 80,
      "color": "##006400",
      "toolTip": {
        "show": true,
        "formatter": "'The Complexity of Simple Stochastic Games'"
      }
    },
    {
      "name": "<'Michael Maio Pires, Tshilidzi Marwala','2007-05-23'>",
      "id": 82,
      "symbolSize": 80,
      "color": "##006400",
      "toolTip": {
        "show": true,
        "formatter": "'Option Pricing Using Bayesian Neural Networks'"
      }
    },
    {
      "name": "<'Erhan Bayraktar, Hao Xing','2008-10-29'>",
      "id": 172,
      "symbolSize": 80,
      "color": "##006400",
      "toolTip": {
        "show": true,
        "formatter": "'Pricing Asian Options for Jump Diffusions'"
      }
    },
    {
      "name": "<'Ketan D. Mulmuley, Milind Sohoni','2014-08-02'>",
      "id": 249,
      "symbolSize": 80,
      "color": "##006400",
      "toolTip": {
        "show": true,
        "formatter": "'Geometric Complexity Theory: Introduction'"
      }
    }
      ],
      num: [
        {
      "source": 1,
      "target": 528,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 1,
      "target": 86,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 1,
      "target": 369,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 1,
      "target": 125,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 1,
      "target": 126,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 1,
      "target": 241,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 1,
      "target": 550,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 1,
      "target": 294,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 1,
      "target": 600,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 1,
      "target": 622,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 1,
      "target": 397,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 1,
      "target": 612,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 1,
      "target": 651,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 528,
      "target": 86,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 528,
      "target": 550,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 528,
      "target": 397,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 528,
      "target": 612,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 528,
      "target": 82,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 528,
      "target": 172,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 528,
      "target": 249,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 86,
      "target": 241,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 86,
      "target": 249,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 125,
      "target": 126,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 125,
      "target": 294,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 125,
      "target": 291,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 125,
      "target": 172,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 126,
      "target": 294,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 126,
      "target": 291,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 126,
      "target": 172,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 241,
      "target": 294,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 241,
      "target": 249,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 550,
      "target": 31,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 550,
      "target": 249,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 294,
      "target": 600,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 294,
      "target": 651,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 294,
      "target": 323,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 294,
      "target": 172,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 600,
      "target": 622,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 622,
      "target": 612,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 622,
      "target": 651,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 622,
      "target": 31,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 622,
      "target": 249,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 397,
      "target": 172,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 612,
      "target": 651,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 612,
      "target": 31,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 612,
      "target": 249,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 651,
      "target": 31,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 651,
      "target": 249,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 31,
      "target": 249,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    },
    {
      "source": 82,
      "target": 172,
      "toolTip": {
        "show": false,
        "formatter": ""
      }
    }
      ],
    };
  },
  
  mounted() {
    // this.getchardata();
    // console.log(this.list);
    // console.log(this.num);
    let myEcharts = echarts.init(this.$refs.myChart);

    let options = {
      tooltip: {//提示框组件，用于配置鼠标滑过或点击图表时的显示框。
        show: true, // 是否显示       
        trigger: 'item', 
        },// 触发类型  'item'图形触发：散点图，饼图等无类目轴的图表中使用； 'axis'坐标轴触发；'none'：什么都不触发。
      series: [
        {
          type: "graph", //图标类型为关系图用于展现节点以及节点之间的关系数据
          layout: "force", //图的布局  力引导布局
          data:this.list,
          label: {
            //图形上的文本标签
            show: true,
            position: "inside", //位置底部
            distance: 5, //距离图形元素的距离
            fontStyle: 'italic', //字体样式
            fontSize: 14,
            align: "center", //文字水平对齐方式
          },
          force: {
            //设置间距
            repulsion: 100, //点之间的距离
            gravity: 0.01, //设置距离中心点位置
            edgeLength: 200, //边的两个节点之间的距离
          },
          links: this.num, //节点间的关系数据

          edgeLabel: {
            show: false, //是否显示边的标签
          },
          edgeSymbol: ["none", "none"], //边两边的类型

         autoCurveness: 0.01, //针对节点之间存在多边的情况，自动计算各边曲率
          
          itemStyle: {  // 给节点加上阴影，显着立体
            shadowColor: '#C0C0C0', 
            shadowOffsetX: 2,
            shadowOffsetY: 2,
            color:(params)=>{
                return params.data.color
            },
         },
         //让节点可以通过鼠标拖拽和移动的设置
         roam: true, //开启鼠标平移及缩放
         draggable: true, //节点是否支持鼠标拖拽。
         edgeSymbolSize: [5, 10],
         cursor: 'pointer', //鼠标悬浮时在图形元素上时鼠标的样式
         labelLayout: {
            moveOverlap: 'shiftX', //标签重叠时，挪动标签防止重叠
            draggable: true //节点标签是否允许鼠标拖拽定位
         },
         emphasis: {
            scale: true, //节点放大效果
            focus: 'adjacency'
         },
         lineStyle: {
            color: '#3d3d3f',
            width: 2,
            curveness: 0 //节点连线的曲率，0-1 越大越弯。
         },
         symbol: 'circle', //节点的形状
        },
        
      ],
    };

    myEcharts.setOption(options);
  },
  methods: {
    getchardata() {
      this.$http.get("/api//buildGraph/1/1")
        .then((res) => {
          this.list = res.data.node;
          this.num = res.data.edge;
          // console.log(this.num);
          // console.log(this.list);
          // this.list = res.data.data;
          
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
#myChart {
  width: 100%;
  height: 600px;
  border: 1px solid red;
}
</style>