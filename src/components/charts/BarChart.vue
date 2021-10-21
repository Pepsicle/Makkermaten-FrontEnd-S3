<template>
	<div class="chart">
		<Chart :chartData="chartData" :chartOptions="chartOptions" :chartType="chartType" />
	</div>
  <h1>{{ this.msg }}</h1>
  <button v-on:click="this.datasets = [{
            label: 'asdfasdf',
            data:  [0, 100, 10, 40, 39, 80, 40],
            backgroundColor: '#5cddff',
            hoverBackgroundColor: '#5cddff'
          },
          {
            label: 'asgfasdfasd',
            data:  [20, 10, 12, 33, 22, 4, 0],
            backgroundColor: '#dddddd',
            hoverBackgroundColor: '#dddddd'
          }] ">Save</button>
          <button v-on:click="this.renderChart()">refresh</button>
</template>

<script>
import Chart from "../Chart";
export default {
	components: {
		Chart,
	},
	data() {
		return {
      msg: "test",
			chartType: "bar",
			chartData: {
        labels: ["Jan1", "Jan2", "Jan3", "Jan4", "Jan5", "Jan6", "Jan7"],
        datasets: [
          {
            label: "This week",
            data:  [0, 100, 10, 40, 39, 80, 40],
            backgroundColor: "#5cddff",
            hoverBackgroundColor: " #5cddff"
          },
          {
            label: "Last week",
            data:  [20, 10, 12, 33, 22, 4, 0],
            backgroundColor: "#dddddd",
            hoverBackgroundColor: "#dddddd"
          }
        ]
      },
			chartOptions: {
			tooltips: {
          mode: "label",
          callbacks: {
            label: function(tooltipItem, data) {
              return (
                data.datasets[tooltipItem.datasetIndex].label +
                ": " +
                tooltipItem.xLabel
              );
            },
            
          }
          
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              categoryPercentage: 0.5,
              barPercentage: 0.5,
              gridLines: { display: false },
              fontSize:5
            }
          ],
          yAxes: [
						
            {
								gridLines:{
								color:"#ffffff"
							},
              ticks: {
                stepSize: 1,
                callback: function(value, index, values) {
                  if (value % Math.round(values[0] / 6) == 0) {
                    return value;
                  } else if (value === 0) {
                    return value;
                  }
                }
              },
              stacked: true,
              categoryPercentage: 0,
              barPercentage: 0,
              fontSize:5
            }
          ]
        },
        maintainAspectRatio: false,
        legend:{
          labels:{
            boxWidth:10
          },
          position:'top'
        },
        animation:{
          duration:2000,
          easing:'easeInOutQuart'
        }
			},
			
		};
	},
};
</script>

<style></style>