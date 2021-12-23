<template>
  <div class="col-md-10 offset-1 card">
    <div class="textalign card-header row">
      <p class="col-md-2">{{ this.machineName }}</p>
      <div v-if="loaded" class="col-md-3 offset-7" id="status">
        <p v-if="statusCheck(chartdata)" style="color:green; font-weight: bold">On</p>
        <p v-else style="color: red; font-weight: bolder">Off</p>
      </div>
    </div>
    
    <ul class="list-group list-group-flush">
      <HomepageMachineModal :chartName="this.machineName" :key="this.machineName"/>
    </ul>

  </div>
</template>

<script>
// import MachineComponents from '../Service/ComponentDataService'
import HomepageMachineModal from './HomepageMachineModal.vue'

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
    statusCheck(){ //moet nog async worden
      this.currentStatus = true;
    },
    getTimeStamp() {
      var date = new Date()
      date = "2020-09-30T" + date.toLocaleTimeString()
      this.timestamp = date
    }
  },
  async mounted() {
    this.statusCheck()
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