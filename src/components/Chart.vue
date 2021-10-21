<template>
	<div :class="chartType">
		<canvas></canvas>
			<button v-on:click="chart.update()">Refresh</button>
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
	},
	
	mounted(){
		let {chartType,chartData,chartOptions} = this;
		console.log('test')
		this.chartConstructor(chartType, chartData, chartOptions);
		console.log('test2')
	}
};
</script>

<style>
canvas{
	height: 250px;
}
</style>