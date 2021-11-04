<template>
	<div :class="chartType">
		<canvas></canvas>
		<button @click="renderGraph()">Render Graph</button>
	</div>
</template>

<script>
import Chart from "chart.js";
export default {
	props:{
		chartType:String,
		chartData:Object,
		chartOptions:Object
	},
	methods: {
		// updateChart(){
		// 	this.update();
		// },
		chartConstructor(chartType, chartData, chartOptions) {
			const chartElement = document.querySelector(`.${this.chartType} canvas`);
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
		renderGraph(){
			let {chartType,chartData,chartOptions} = this;
			this.chartConstructor(chartType, chartData, chartOptions);
		}
	},
	
	mounted(){
		let {chartType,chartData,chartOptions} = this;
		this.chartConstructor(chartType, chartData, chartOptions);

	}
};
</script>

<style>
canvas{
	height: 250px;
}
</style>