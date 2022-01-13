<template>
<div class="MaintenanceSpace">
    <Maintenance @update-maintenance="GetMaintenances"></Maintenance>
</div>
</template>

<script>
import Maintenance from "../components/Maintenance.vue"

export default {
  name: "maintenance",
  components: {
    Maintenance
  },
  data: () => ({
  }),
  methods: {
  },
  props: {
  },
  watch: {
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

.MaintenanceSpace {
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 4%;
}
</style>