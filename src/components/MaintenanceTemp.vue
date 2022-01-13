<template>
  <div class="card col-md-4 offset-4">
    <label for="start">Maintenance Date: </label><br />
    <input
      v-model="selectedDateTime"
      type="datetime-local"
      id="start"
      name="Maintenance Time"
    />
    <label for="MaintenanceType">Maintenance Type: </label><br />
    <select v-model="maintenanceType" id="MaintenanceType">
      <option value="Preventive Maintenance">Preventive Maintenance</option>
      <option value="Condition-Based Maintenance">Condition-Based Maintenance</option>
      <option value="Predictive Maintenance">Predictive Maintenance</option>
      <option value="Corrective Maintenance">Corrective Maintenance</option>
      <option value="Predetermined Maintenance">
        Predetermined Maintenance
      </option>
    </select>
    <p>Enter description:</p>
    <textarea
      v-model="description"
      placeholder="Enter maintenance description"
    ></textarea>
    <button type="button" class="btn" @click="PlanMaintenance">
      Confirm maintenance
    </button>
  </div>
</template>

<script>
import MaintenanceDataService from "../Service/MaintenaceDataService";

export default {
  name: "Maintenance",
  components: {},
  data: () => ({
    maintenance:{
        componentName: "",
        maintenanceType: "",
        dayOfMaintenance: new Date(),
        description: ""
    },  
    dayOfMaintenance: new Date(),
    maintenanceType: "",
    description: "",
  }),
  methods: {
    async PlanMaintenance() {
      this.maintenance.componentName = this.loadedComponent[0].split(" -")[1];
      this.maintenance.maintenanceType = this.maintenanceType;
      this.maintenance.selectedDateTime = this.selectedDateTime;
      this.maintenance.description = this.description;
      await MaintenanceDataService.CreateNewMaintenance(this.maintenance);
      this.$root.$emit('update-maintenance')
    },
  },
  props: {
    loadedComponent: {
      default: null,
      type: Object,
    },
  },
};
</script>

<style scoped>
.btn {
  background-color: #4b66c5;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>