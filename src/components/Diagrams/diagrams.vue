<template>
  <div id="chart-box"></div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import { onMounted } from "vue";
onMounted(() => {
  const chartDom = document.getElementById("chart-box");
  if (chartDom) {
    chartDom.style.width = `${window.innerWidth}px`;
    chartDom.style.height = `${window.innerHeight}px`;
  }
  const myChart = echarts.init(chartDom);
  let option: any = {};
  myChart.showLoading();
  const webkitDep:any = {
    nodes: [
      {
        name: "AnalyserNode",
        value: 1,
        category: 4,
        symbolSize: 40,
      },
      {
        name: "AudioNode",
        value: 1,
        symbolSize: 40,
      },
      {
        name: "Uint8Array",
        value: 1,
        symbolSize: 40,
      },
      {
        name: "Float32Array",
        value: 1,
        symbolSize: 40,
      },
      {
        name: "Float32Array",
        value: 1,
        symbolSize: 40,
      },
      {
        name: "Float32Array",
        value: 1,
        symbolSize: 40,
      },
      {
        name: "Float32Array",
        value: 1,
        symbolSize: 40,
      },
      {
        name: "Float32Array",
        value: 1,
        symbolSize: 40,
      },
      {
        name: "Float32Array",
        value: 1,
        symbolSize: 40,
      },
      {
        name: "Float32Array",
        value: 1,
        symbolSize: 40,
      },
      {
        name: "Float32Array",
        value: 1,
        symbolSize: 40,
      },
      {
        name: "Float32Array",
        value: 1,
        symbolSize: 40,
      },
      {
        name: "Float32Array",
        value: 1,
        symbolSize: 40,
      },
      {
        name: "Float32Array",
        value: 1,
        symbolSize: 40,
      },
      {
        name: "Float32Array",
        value: 1,
        symbolSize: 40,
      },
    ],
    links: [
      {
        source: 0,
        target: 1,
      },
      {
        source: 1,
        target: 2,
      },
      {
        source: 2,
        target: 3,
      },
      {
        source: 3,
        target: 2,
      },
      {
        source: 3,
        target: 2,
      },
      {
        source: 3,
        target: 2,
      },
      {
        source: 3,
        target: 2,
      },
      {
        source: 3,
        target: 2,
      },
      {
        source: 3,
        target: 2,
      },
      {
        source: 3,
        target: 2,
      },
      {
        source: 3,
        target: 2,
      },
      {
        source: 3,
        target: 2,
      },
      {
        source: 3,
        target: 2,
      },
      {
        source: 3,
        target: 2,
      },
    ],
    categories: [
      {
        name: "HTMLElement",
        keyword: {},
        base: "HTMLElement",
      },
      {
        name: "WebGL",
        keyword: {},
        base: "WebGLRenderingContext",
      },
      {
        name: "SVG",
        keyword: {},
        base: "SVGElement",
      },
      {
        name: "CSS",
        keyword: {},
        base: "CSSRule",
      },
      {
        name: "Other",
        keyword: {},
      },
    ],
  };
  myChart.hideLoading();
  option = {
    series: [
      {
        type: "graph",
        layout: "force",
        animation: false,
        label: {
          position: "right",
          formatter: "{b}",
        },
        draggable: true,
        data: webkitDep.nodes.map(function (node:any, idx:any) {
          node.id = idx;
          return node;
        }),
        categories: webkitDep.categories,
        force: {
          edgeLength: 100,
          repulsion: 130,
          gravity: 0.1,
        },
        edges: webkitDep.links,
      },
    ],
  };
  option && myChart.setOption(option);
});
</script>

<style scoped lang="scss"></style>
