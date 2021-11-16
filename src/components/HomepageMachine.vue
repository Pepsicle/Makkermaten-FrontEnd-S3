<template>
    <div class="row">
      <div class="col-8" id="name">
        <p>{{ this.chartName }}</p>
      </div>
      <div class="col-4" id="status">
        <p v-if="statusCheck(chartdata)" style="color:green; font-weight: bold">AAN</p>
        <p v-else style="color: red; font-weight: bolder">UIT</p>
      </div>
    </div>
    <LineChart v-if="loaded" :chartName="this.chartName" :chartdata="this.returnData()" :key="this.chartName"/>
</template>

<script>
import LineChart from './charts/LineChart.vue'
import MonitoringData from '../Service/MonitoringDataDataServices'

export default {
  components: {
      LineChart,
  },
  data: () => ({
    loaded: false,
    monitoringdata: {
      data: []
    },
    tempmonitoringdata: {},
    chartdata: {
      labels: [],
      datasets: [
        {
          label: "Productiedata",
          data: [],
          backgroundColor: "rgb(192,205,255)",
          borderColor: "#4157a8",
          lineTension: 0,
          pointBackgroundColor: "#4157a8",
        }
      ],
    },
  }),

  props: {
    // monitoringdata: {
    //   type: Promise,
    //   default: null
    // },
    chartName: {
      type: String,
      default: "null"
    },
  },
  methods: {
    statusCheck(data){
      return data.datasets[0].data.at(-1) > 0;
    },
    returnData(){
      return this.chartdata
    },
    async GetMonitoringData(machineName){
        return await MonitoringData.GetMonotoringDataPerDay(machineName, "2020-09-23T00:00:00")
    }
  },
  async mounted() {
    this.tempmonitoringdata = await this.GetMonitoringData(this.chartName)
    this.monitoringdata = this.tempmonitoringdata.data
    console.log(this.monitoringdata)
    for (var i in this.monitoringdata){
      // console.log(this.monitoringdata[i].timestamp)
      this.chartdata.labels.push(this.monitoringdata[i].timestamp)
      this.chartdata.datasets[0].data.push(this.monitoringdata[i].shotTime)
    }
    // this.monitoringdata.foreach((tick ,i) => {
    //   this.chartdata.labels.push(tick[i].timestamp)
    //   this.chartdata.datasets[0].data.push(tick[i].shotTime)
    // })

    // this.monitoringdata.data = await this.GetMonitoringData(this.chartName)
    // console.log(this.monitoringdata.data)
    // for (var i in this.monitoringdata.data){
    //   this.tempmonitoringdata = this.monitoringdata
    //     // console.log(this.monitoringdata.data[i].timestamp)
    //     console.log(this.tempmonitoringdata.data.timestamp)
    //     this.chartdata.labels.push(this.monitoringdata.data[i].timestamp)
    //     this.chartdata.datasets[0].data.push(this.monitoringdata.data[i].shotTime)
    // }
    this.loaded = true
  },
}

</script>
