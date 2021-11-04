<template>
	<div>
		<canvas class ="chartLocation"></canvas>
	</div>
	<div class="chart">
        <!-- <a>LINECHART TEST</a> -->
		<!-- <newLineChart v-if="loaded" :chartdata="chartdata" :options="options"/> -->
		<LineChartData ref="childData" />
		<!-- <Chart v-if="renderComponent" :chartData="chartData" :chartOptions="chartOptions" :chartType="chartType" /> -->
		<!-- <button @click="logData()">Log data</button>
		<button @click="renderGraph()">Render Graph1</button> -->
	</div>
</template>

<script>
import Chart from 'chart.js'
//import NewLineChart from './NewLineChart.vue'
import LineChartData from './LineChartData.vue'

export default {
  name: 'LineChartContainer',
  components: { 
	// NewLineChart,
	LineChartData
	},
  methods: {
	chartConstructor(chartType, chartData, chartOptions) {
		const chartElement = document.getElementsByClassName("chartLocation");
		console.log(chartElement)
		console.log(chartType)
		console.log(chartData)
		console.log(chartOptions)
		const chart = new Chart(chartElement, {
			type: chartType,
			data: chartData,
			options: chartOptions,
		});
		return chart;
	},
	// receiveData(data){
	// 	if (data != null){
	// 		this.chartData = data;
	// 		this.loaded = true;
	// 		this.chartConstructor(this.chartType, this.chartdata, this.chartOptions)
	// 		console.log("Data received!");
	// 		console.log(this.chartData);
	// 	} else {
	// 		console.log("Error receiving data");
	// 	}
	// }
  },
  data: () => ({
    loaded: false,
	chartdata: {
        type: Object,
        default: null
	},
	options: {
        type: Object,
        default: null
	},
	chartType: "line",
  }),
  mounted () {
    this.loaded = false
    try {
		this.chartdata = this.$refs.childData.getData();
		// console.log("THIS")
		// console.log(this.$refs.childData.getData())
		// console.log(datalist)
		//console.log(this.chartdata)
		this.loaded = true
		this.chartConstructor(this.chartType, this.chartdata, this.options)
    } catch (e) {
      //console.error(e)
    }
  }
}
</script>

<style></style>