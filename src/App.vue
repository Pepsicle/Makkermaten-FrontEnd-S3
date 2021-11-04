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
			labels: ["Jan1", "Jan2", "Jan3", "Jan4", "Jan5", "Jan6", "Jan7", "Jan8", "Jan9", "Jan10", "Jan11", "Jan12", "Jan13", "Jan14", "Jan15", "Jan16", "Jan17", "Jan18", "Jan19", "Jan20", "Jan21", "Jan22", "Jan23", "Jan24", "Jan25", "Jan26", "Jan27", "Jan28", "Jan29", "Jan30", "Jan31"],
			datasets: [
				{
					label: "Productiedata",
					data: [12, 19, 10, 17, 6, 3, 7, 14, 1, 12, 8, 4, 9, 2, 16, 2, 7, 9, 15, 19, 12, 13, 4, 6, 12, 18, 4, 19, 12, 10, 7],
					backgroundColor: "rgba(224, 248, 255, 0.4)",
					borderColor: "#5cddff",
					lineTension: 0,
					pointBackgroundColor: "#5cddff",
				}
			],
		},
		chartdata2: {
			labels: ["Jan1", "Jan2", "Jan3", "Jan4", "Jan5", "Jan6", "Jan7", "Jan8", "Jan9", "Jan10", "Jan11", "Jan12", "Jan13", "Jan14", "Jan15", "Jan16", "Jan17", "Jan18", "Jan19", "Jan20", "Jan21", "Jan22", "Jan23", "Jan24", "Jan25", "Jan26", "Jan27", "Jan28", "Jan29", "Jan30", "Jan31"],
			datasets: [
				{
					label: "Productiedata",
					data: [1, 6, 18, 11, 12, 6, 10, 11, 14, 13, 9, 2, 2, 6, 1, 3, 17, 14, 12, 15, 18, 12, 10, 9, 7, 2, 1, 0, 0, 0, 0],
					backgroundColor: "rgba(224, 248, 255, 0.4)",
					borderColor: "#5cddff",
					lineTension: 0,
					pointBackgroundColor: "#5cddff",
				}
			],
		}
	})
};
</script>