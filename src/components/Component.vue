<template>
  <div class="components">
    <div class="card">
      <h4 class="card-title">{{ this.loadedComponent[0] }}</h4>
      <div class="card-body">
        <p v-for="machine in machines" :key="machine.omschrijving">Machinenaam : {{machine.omschrijving}}</p>
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
</style>