<template>
  <div id="app">
		<div class="d-flex">
			<LineChart v-bind:chartdata='this.chartdata'/>
		</div>
	</div>
</template>

<script>
import LineChart from './components/charts/LineChart.vue'
export default {
	name: "App",
	components: {
		LineChart
	},
	data: () => ({
		chartdata: {
			labels: ["Jan1", "Jan2", "Jan3", "Jan4", "Jan5", "Jan6", "Jan7"],
			datasets: [
				{
					label: "This week",
					data: [12, 19, 10, 17, 6, 3, 7],
					backgroundColor: "rgba(224, 248, 255, 0.4)",
					borderColor: "#5cddff",
					lineTension: 0,
					pointBackgroundColor: "#5cddff",
				},
				{
					label: "Last week",
					data: [10, 25, 3, 25, 17, 4, 9],
					backgroundColor: "rgba(241, 225, 197, 0.4)",
					borderColor: "#ffc764",
					lineTension: 0,
					pointBackgroundColor: "#ffc764",
				},
			],
		}
	})
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
