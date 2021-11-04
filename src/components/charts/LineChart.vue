<template>
  <div :class="chartName" class="pb-5">
    <div class="row">
      <div class="col-8" id="name">
        <p>Machinenaam</p>
      </div>
      <div class="col-4" id="status">
        <p v-if="statusCheck(chartdata)" style="color:green; font-weight: bold">AAN</p>
        <p v-else style="color: red; font-weight: bolder">UIT</p>
      </div>
    </div>
    <canvas></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
  name: 'LineChartContainer',
  methods: {
    initiateChart(chartType, chartData, chartOptions, chartName) {
      const chartElement = document.querySelector(`.${chartName} canvas`);
      const chart = new Chart(chartElement, {
        name: chartName,
        type: chartType,
        data: chartData,
        options: chartOptions,
      });
      return chart;
    },

    statusCheck(data){
      return data.datasets[0].data.at(-1) > 0;
    }
  },
  props: {
    chartdata: {
      default: null
    },
    options: {
      type: Object,
      default: null
    },
    chartName:String
  },
  data: () => ({
    chartType: "line"
  }),
  mounted() {
    this.loaded = false
    try {
      this.loaded = true
      this.initiateChart(this.chartType, this.chartdata, this.options, this.chartName)
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style></style>