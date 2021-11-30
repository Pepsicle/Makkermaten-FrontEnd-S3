<template>
  <div class="col-md-10 offset-1 card">
    <div class="textalign card-header">
      <div class="col-8 row nameandmodal" id="name">
        <div class="col-md-2">
          <p>Machine: {{ this.chartName }}</p>
        </div>

        <div class="col-md-3">
          <button v-if="!componentsLoaded" type="button" class="btn btn-primary disabled">
            Components
            <div class="spinner spinner-border spinner-border-sm" role="status" aria-hidden="false">
              <span class="visually-hidden">Loading...</span>
            </div>
          </button>
          <Modal v-if="componentsLoaded" :modalTitle="this.chartName" :modalContent="this.components.data" :modalType="'Components'" />
        </div>

        <div class="col-md-4">
          <button v-if="!componentHistoryLoaded" type="button" class="btn btn-primary disabled">
            Component History
            <div class="spinner spinner-border spinner-border-sm" role="status" aria-hidden="false">
              <span class="visually-hidden">Loading...</span>
            </div>
          </button>
          <Modal v-if="componentHistoryLoaded" :modalTitle="this.chartName" :modalContent="this.componentHistory.data" :modalType="'Component History'" />
        </div>
        
      </div>
      <div v-if="loaded" class="col-4" id="status">
        <p v-if="statusCheck(chartdata)" style="color:green; font-weight: bold">On</p>
        <p v-else style="color: red; font-weight: bolder">Off</p>
      </div>
    </div>
    <div v-if="!loaded">
      <p class="loadingText">Loading Machinedata</p>
      <div class="loadingspinner col-md-12">
        <div class="spinner spinner-grow spinner-border-sm" role="status"/>
      </div>
    </div>
    <div class="linechartcontainer">
      <LineChart v-if="loaded" :chartName="this.chartName" :chartdata="this.returnData()" :key="this.chartName"/>
    </div>
  </div>
</template>

<script>
import LineChart from './charts/LineChart.vue'
import MonitoringData from '../Service/MonitoringDataDataServices'
import MachineComponents from '../Service/ComponentDataService'
import Modal from './Modal.vue'

export default {
  components: {
      LineChart,
      Modal
  },
  data: () => ({
    timestamp: '',
    loaded: false,
    componentsLoaded: false,
    componentHistoryLoaded: false,
    components: [],
    componentHistory: [],
    monitoringdata: {
      data: []
    },
    tempmonitoringdata: {},
    chartdata: {
      labels: [],
      datasets: [
        {
          label: "Shot Time",
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
        return await MonitoringData.GetMonotoringDataPerDay(machineName, this.timestamp)
    },
    async loadComponentHistory() {
      this.componentHistory = await MachineComponents.GetComponentsById(this.chartName)
      this.componentHistoryLoaded = true
    },
    async loadComponents() {
      this.components = await MachineComponents.GetCurrentComponents(this.chartName, this.timestamp)
      this.componentsLoaded = true
    },
    getTimeStamp() {
      var date = new Date()
      this.timestamp = "2020-09-23T" + date.toLocaleTimeString()
      console.log(this.timestamp)
    }
  },
  async mounted() {
    this.getTimeStamp()
    this.loadComponents()
    this.loadComponentHistory()
    this.tempmonitoringdata = await this.GetMonitoringData(this.chartName)
    this.monitoringdata = this.tempmonitoringdata.data
    for (var i in this.monitoringdata){
      this.chartdata.labels.push(new Date(this.monitoringdata[i].timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
      this.chartdata.datasets[0].data.push(this.monitoringdata[i].shotTime)
    }
    this.loaded = true
  },
}

</script>

<style scoped>
.loadingspinner {
  justify-content: center;
  display: flex;
  padding: 1%;
  text-align: center;
}

.loadingText {
  display: flex;
  justify-content: center;
}

.textalign {
  display: flex;
  align-items: center;
  text-align: center;
}

.linechartcontainer {
  padding: 1%;
}

.nameandmodal {
  display: flex;
  align-items: left;
  text-align: left;
}
</style>