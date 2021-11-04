<template>
  <div id="app">
		<h2>Vue Charts with Chart.js</h2>
		<div class="d-flex">
			<LineChart/>
			<!-- <new-line-chart/> -->
			<!-- <bar-chart/> -->
			<TestComponent msg="rjiabhuir"/>
		</div>
	</div>
</template>

<script>
import LineChart from './components/charts/LineChart.vue'
import TestComponent from './components/TestComponent.vue'
// import newLineChart from './components/charts/NewLineChart.vue'
// import BarChart from './components/charts/BarChart.vue'
export default {
	name: "App",
	components: {
		LineChart,
		TestComponent
		// newLineChart,
		// BarChart
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
