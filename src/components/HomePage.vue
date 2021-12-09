<template>
    <div class="topspace">
        <a v-for="(machine, index) in machines.data" :key="index.treeviewid">
            <!-- <HomepageMachine :chartName="this.machines.data[index].name" :chartdata="this.getRandomIntInclusive(1, 2, 0)"/> -->
            <br><HomepageMachine :chartName="this.machines.data[index].name" :key="this.machines.data.name" class="machines"/><br>
        </a>
    </div>
</template>

<script>
import MachineData from '../Service/MachineDataService'
// import MonitoringData from '../Service/MonitoringDataDataServices'
import HomepageMachine from '../components/HomepageMachine.vue'

export default {
	name: "App",
	components: {
        HomepageMachine,
	},
    async mounted() {
        this.machines = await MachineData.GetAllMachines();
    },
    methods: {
        getRandomIntInclusive(min, max, randomnumber) {
            min = Math.ceil(min);
            max = Math.floor(max);
            randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
            if (randomnumber == 1)
            {
            return this.chartdata;
            } else if (randomnumber == 2)
            {
            return this.chartdata2;
            }
        },
        // async GetMonitoringData(machineName){
        //     return await MonitoringData.GetMonotoringDataPerDay(machineName, "2020-09-23T00:00:00")
        // }
    },
    data: () => ({
        machines: [],
    })
};
</script>

<style scoped>
.topspace {
    margin-top: 4%;
}
</style>