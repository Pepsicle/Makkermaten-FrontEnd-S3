<template>
	<div>
		<canvas class ="chartLocation"></canvas>
	</div>
</template>

<script>
import Chart from 'chart.js'

export default {
  name: 'LineChartContainer',
  methods: {
	chartConstructor(chartType, chartData, chartOptions) {
		const chartElement = document.getElementsByClassName("chartLocation");
		const chart = new Chart(chartElement, {
			type: chartType,
			data: chartData,
			options: chartOptions,
		});
		return chart;
	}
  },
  props: {
	chartdata: {
        default: null
	},
	options: {
        type: Object,
        default: null
	}
  },
  mounted () {
    this.loaded = false
    try {
		this.loaded = true
		this.chartConstructor("line", this.chartdata, this.options)
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style></style>