<template>
  <div id="app">
		<h2>Vue Charts with Chart.js</h2>
		<div class="d-flex">
				<line-chart/>
				<bar-chart/>
		</div>
	</div>
</template>

<script>
import LineChart from './components/charts/LineChart.vue'
import BarChart from './components/charts/BarChart.vue'
export default {
	name: "App",
	components: {
		LineChart,
		BarChart
	},
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
