<template>
    <div class="card col-md-4 offset-4">
        <label for="start">Maintenance Date: </label><br>
        <input v-model="selectedDateTime" type="datetime-local" id="start" name="Maintenance Time" >
        <label for="MaintenanceType">Maintenance Type: </label><br>
        <select v-model="maintenanceType" id="MaintenanceType">
            <option value="Preventive Maintenance">Preventive Maintenance</option>
            <option value="Condition-Based Maintenance">Condition-Based Maintenance</option>
            <option value="Predictive Maintenance" >Predictive Maintenance</option>
            <option value="Corrective Maintenance">Corrective Maintenance</option>
            <option value="Predetermined Maintenance">Predetermined Maintenance</option>
        </select>
        <button type="button" class="btn" @click="PlanMaintenance">Confirm maintenance</button>
    </div>
</template>

<script>
import MaintenanceDataService from "../Service/MaintenaceDataService";


export default {
    name: "Maintenance",
    components: {
    },
    data: () => ({
        selectedDateTime: new Date(),
        maintenanceType: '',
    }),
    methods: {
        async PlanMaintenance()
        {
            await MaintenanceDataService.CreateNewMaintenance(this.selectedDateTime , this.maintenanceType)
        }
    },
    async mounted() {
    },
}
</script>