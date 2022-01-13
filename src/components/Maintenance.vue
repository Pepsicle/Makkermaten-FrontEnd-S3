<template>
<br><br>
  <div class="infotable">
  <table class="datatable">
    <thead>
      <tr>
        <th>Name</th>
        <th>Maintenance Type</th>
        <th>Planned Date</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
    <tr v-for="item in res.data" :key="item.componentName">
      <td>{{item.componentName}}</td>
      <td>{{item.maintenanceType}}</td>
      <td>{{item.dayOfMaintenance}}</td>
      <td>{{item.description}}</td>
    </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
import MaintenanceDataService from "../Service/MaintenaceDataService";

export default {
  name: "Maintenance",
  components: {},
  data: () => ({
    res: "",
  }),
  mounted() {
    this.GetMaintenances();
  },
  methods: {
    async GetMaintenances() {
      this.res = await MaintenanceDataService.GetAllMaintenance();
    },
  },
};
</script>

<style scoped>
.dataTable, th , td {
  border-block: solid grey;
  width: 33%;
  column-width: 25%;
}
</style>