<template>
  <div v-if="loaded" class="col-md-12 card bg-light">
    <div class="textalign card-header row">
      <p class="col-md-6">{{ this.machineName }}</p>
      <div class="col-md-6" id="status">
        <p v-if="this.currentStatus" style="color:green; font-weight: bold">On</p>
        <p v-else style="color: red; font-weight: bolder">Off</p>
      </div>
      <HomepageMachineModal v-if="loaded" :chartName="this.machineName" :key="this.machineName"/>
    </div>
  </div>
</template>

<script>
// import MachineComponents from '../Service/ComponentDataService'
import HomepageMachineModal from './HomepageMachineModal.vue'
import UptimeData from '../Service/UptimeDataService'

export default {
  components: {
    HomepageMachineModal,
  },
  data: () => ({
    loaded: false,
    currentStatus: false,
  }),

  props: {
    machineName: {
      type: String,
      default: "null"
    },
  },
  methods: {
    async statusCheck(){ //moet nog async worden
      this.getTimeStamp()
      this.currentStatus = await UptimeData.GetUptimeMachine(this.machineName, this.timestamp);
      this.loaded = true
    },
    getTimeStamp() {
      var date = new Date()
      date = "2020-09-30T" + date.toLocaleTimeString()
      this.timestamp = date
    }
  },
  async mounted() {
    this.statusCheck()
    // this.loaded = true
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
  border: 0;
  padding: 0;
}

.linechartcontainer {
  padding: 1%;
}

.list-group {
  padding-left: 1rem;
}

.row {
    --bs-gutter-x: 0;
}

</style>