<template>
  <div ref="myChart" id="myChart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      list: [
        //创建节点数据
        {
          name: "author+time", //节点名称
          id: "1",   
          symbolSize: 80, //节点大小，
          color: "#006400", //节点颜色
          tooltip: {
            show: true, //鼠标hover是否显示tooltip
            formatter: "papername", //提示框显示内容
          },
        },
        {
          name: "方怡",
          id: "2",
          symbolSize: 50, //节点大小
          color: "#008000", //节点颜色
          tooltip: {
                show: true,
                formatter: "European Position Paper on Rhinosinusitis and Nasal Polyps 2020.", //提示框显示内容
            },
        },
        {
          name: "双儿",
          id: "3",
          symbolSize: 50, //节点大小
          color: "#008000", //节点颜色
            tooltip: {
                    show: true,
                    formatter: "{b}", //提示框显示内容
                },
        },
        {
          name: "茅十八",
          id: "4",
          symbolSize: 50, //节点大小
            tooltip: {
                    show: true,
                    formatter: "{b}", //提示框显示内容
                },
        },
        {
          name: "吴六奇",
          id: "5",
          symbolSize: 50, //节点大小
            tooltip: {
                    show: true,
                    formatter: "{b}", //提示框显示内容
                },
        },
      ],
      num: [
        //关系数据
        {
          source: "1", //边的源节点名称的字符串
          target: "2", //边的目标节点名称的字符串
          tooltip: {
            show: false, //鼠标hover是否显示tooltip
          },
        },
        {
          source: "1",
          target: "3",
            tooltip: {
                show: false, //鼠标hover是否显示tooltip
            },
            
        },
        {
          source: "1",
          target: "4",
            tooltip: {
                show: false, //鼠标hover是否显示tooltip
            },
        },
        {
          source: "4",
          target: "1",
            tooltip: {
                show: false, //鼠标hover是否显示tooltip
            },
        },
        {
          source: "3",
          target: "5",
            tooltip: {
                show: false, //鼠标hover是否显示tooltip
            },
        },
      ],
    };
  },
  mounted() {
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
          data: this.list,
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
            normal: {
              color:(params)=>{
                return params.data.color
              }
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
};
</script>

<style>
#myChart {
  width: 50%;
  height: 600px;
  border: 1px solid red;
}
</style>