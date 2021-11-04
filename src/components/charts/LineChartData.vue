<script>
export default {
    name: "DataComponent",
    data() {
        return{
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
            },
			newchartdata: {
                labels: ["Jan1", "Jan2", "Jan3", "Jan4", "Jan5", "Jan6", "Jan7"],
				datasets: [
					{
						label: "This week",
						data: [20, 4, 2, 17, 13, 2, 19],
						backgroundColor: "rgba(224, 248, 255, 0.4)",
						borderColor: "#5cddff",
						lineTension: 0,
						pointBackgroundColor: "#5cddff",
					},
					{
						label: "Last week",
						data: [3, 19, 3, 17, 21, 8, 9],
						backgroundColor: "rgba(241, 225, 197, 0.4)",
						borderColor: "#ffc764",
						lineTension: 0,
						pointBackgroundColor: "#ffc764",
					},
				],
            }
        }
    },
    methods: {
        getData() {
			console.log("Sending data...");
			console.log(this.chartdata);
            //this.$emit('ChartDataChange', this.chartdata);
			return (this.chartdata);
        }
    }

}
</script>