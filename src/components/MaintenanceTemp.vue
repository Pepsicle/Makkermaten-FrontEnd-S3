<template>
    <br><br>
    <p>Maintenance TEMP</p>
    <div class="card col-md-4 offset-4">
        <label for="start">Maintenance Date: </label><br>
        <input v-model="selectedDateTime" type="datetime-local" id="start" name="Maintenance Time" >
    </div>
    <p>{{this.selectedDateTime}}</p>
</template>

<script>

export default {
    name: "Maintenance",
    components: {
    },
    data: () => ({
        selectedDateTime: new Date(),
    }),
    methods: {
    },
    async mounted() {
    },
}
</script>
