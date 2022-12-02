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
          name: "韦小宝",
          id: "1",
          symbolSize: 30, //节点大小
          symbol: "circle", //节点形状，
        },
        {
          name: "方怡",
          id: "2",
          symbolSize: 30, //节点大小
          symbol: "circle", //节点形状，
        },
        {
          name: "双儿",
          id: "3",
          symbolSize: 30, //节点大小
          symbol: "circle", //节点形状，
        },
        {
          name: "茅十八",
          id: "4",
          symbolSize: 30, //节点大小
          symbol: "circle", //节点形状，
        },
        {
          name: "吴六奇",
          id: "5",
          symbolSize: 30, //节点大小
          symbol: "circle", //节点形状，
        },
      ],
      num: [
        //关系数据
        {
          source: "1", //边的源节点名称的字符串
          target: "2", //边的目标节点名称的字符串
          relation: {
            name: "老婆",
            id: "1",
          },
        },
        {
          source: "1",
          target: "3",
          relation: {
            name: "老婆",
            id: "1",
          },
        },
        {
          source: "1",
          target: "4",
          relation: {
            name: "兄弟",
            id: "1",
          },
        },
        {
          source: "4",
          target: "1",
          relation: {
            name: "兄弟",
            id: "1",
          },
        },
        {
          source: "3",
          target: "5",
          relation: {
            name: "义妹",
            id: "1",
          },
        },
      ],
    };
  },
  mounted() {
    let myEcharts = echarts.init(this.$refs.myChart);

    let options = {
      series: [
        {
          type: "graph", //图标类型为关系图用于展现节点以及节点之间的关系数据
          layout: "force", //图的布局  引导布局
          data: this.list,
          itemStyle: {
            //节点的样式
            color: "#95dcb2",
          },
          label: {
            //图形上的文本标签
            show: true,
            position: "bottom", //位置底部
            distance: 5, //距离图形元素的距离
            fontSize: 18,
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
            //标签
            show: true,
            position: "middle", //标签位置线的中点
            fontSize: 12,
            formatter: (params) => {
              //标签内容格式设置内容
              return params.data.relation.name;
            },
          },
          edgeSymbol: ["circle", "arrow"], //边两边的类型

          autoCurveness: 0.01, //针对节点之间存在多边的情况，自动计算各边曲率
        },
      ],
    };

    myEcharts.setOption(options);
  },
};
</script>

<style>
#myChart {
  width: 500px;
  height: 500px;
  border: 1px solid red;
}
</style>