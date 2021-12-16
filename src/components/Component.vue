<template>
  <div class="components">
    <div class="card">
      <h3 class="card-title componentTitle">{{ this.loadedComponent[0] }}</h3>
      <div class="card-body">
        <h4>Machine history:</h4>
        <h5 v-for="machine in machines" :key="machine.omschrijving">Machine: {{machine.omschrijving}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import MachineDataService from "../Service/MachineDataService";

export default {
  name: "component",
  data: () => ({
    machines: [],
    componentName: "",
  }),
  methods: {
    async GetMachinesByComponent() {
      var temp = await MachineDataService.GetMachineHistoryFromComponent(
        this.componentName
      );
      this.machines = temp.data;
    },
  },
  props: {
    loadedComponent: {
      default: null,
      type: Object,
    },
  },
  watch:{
      loadedComponent : function()
      {
        this.componentName = this.loadedComponent[0].split(" -")[0]
        console.log(this.componentName)
        return this.GetMachinesByComponent(this.componentName)
      }
  },
};
</script>

<style scoped>
.componentTitle {
  padding-left: 1.5%;
}
</style>