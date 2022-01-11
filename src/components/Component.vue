<template>
  <div class="components">
    <div v-if="componentName != ''" class="card">
      <h3 class="card-title componentTitle">{{ this.loadedComponent[0] }}</h3>
      <div class="card-body">
        <div v-if="!shotcountloaded">
          Total shot count:
          <div
            class="spinner spinner-border spinner-border-sm"
            role="status"
            aria-hidden="false"
          />
        </div>
        <p v-if="shotcountloaded">
          Total shot count: {{ this.totalShotcountcomponent }}
        </p>
        <h4>Machine history:</h4>
        <h5 v-for="machine in machines" :key="machine.omschrijving">
          Machine: {{ machine.omschrijving }}
        </h5>
        <button type="button" class="btn" @click="showModal">
          Plan Maintenance
        </button>
        <MaintenanceModal v-show="isModalVisible" @close="closeModal">
          <template v-slot:header> New maintenance. </template>

          <template v-slot:body><MaintenanceTemp></MaintenanceTemp></template>

        </MaintenanceModal>
      </div>
    </div>
  </div>
</template>

<script>
import MachineDataService from "../Service/MachineDataService";
import ComponentDataService from "../Service/ComponentDataService";
import MaintenanceTemp from "../components/MaintenanceTemp.vue"
import MaintenanceModal from "../components/MaintenanceModal.vue";

export default {
  name: "component",
  components: {
    MaintenanceTemp,
    MaintenanceModal,
  },
  data: () => ({
    shotcountloaded: false,
    machines: [],
    componentName: "",
    totalShotcountcomponent: "",
    isModalVisible: false,
  }),
  methods: {
    async GetMachinesByComponent() {
      var temp = await MachineDataService.GetMachineHistoryFromComponent(
        this.componentName
      );
      console.log(temp);
      this.machines = temp.data;
    },
    async GetTotalShotcount() {
      this.shotcountloaded = false;
      var temp = await ComponentDataService.GetTotalshotCountFromComponent(
        this.componentName
      );
      console.log(temp.data);
      this.totalShotcountcomponent = temp.data;
      this.shotcountloaded = true;
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
  props: {
    loadedComponent: {
      default: null,
      type: Object,
    },
  },
  watch: {
    loadedComponent: function () {
      this.componentName = this.loadedComponent[0].split(" -")[0];
      console.log(this.componentName);
      this.GetTotalShotcount();
      return this.GetMachinesByComponent(this.componentName);
    },
  },
};
</script>

<style scoped>
.componentTitle {
  padding-left: 1.5%;
}

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