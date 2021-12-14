<template>
    <br><br>
    <p>Maintenance TEMP</p>
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
    </div>
    <div class="card" style="width: 50%; margin: 1%;">
        <p>Maintenance Entered:</p>
        <p>Start Date: {{this.selectedDateTime}}</p>
        <p>Maintenance Type: {{this.maintenanceDescription}}</p>
    </div>
</template>

<script>

export default {
    name: "Maintenance",
    components: {
    },
    data: () => ({
        selectedDateTime: new Date(),
        maintenanceType: '',
    }),
    methods: {
    },
    async mounted() {
    },
}
</script>
