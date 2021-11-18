<template>
    <a v-for="(machine, index) in machines.data" :key="machine.treeviewid">
        <!-- <HomepageMachine :chartName="this.machines.data[index].name" :chartdata="this.getRandomIntInclusive(1, 2, 0)"/> -->
        <HomepageMachine :chartName="this.machines.data[index].name" :key="this.machines.data.name" class="machines"/>
    </a>
</template>

<script>
import MachineData from '../Service/MachineDataService'
// import MonitoringData from '../Service/MonitoringDataDataServices'
import HomepageMachine from '../components/HomepageMachine.vue'

export default {
	name: "App",
	components: {
        HomepageMachine
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
        chartdata: {
        labels: ["Jan1", "Jan2", "Jan3", "Jan4", "Jan5", "Jan6", "Jan7", "Jan8", "Jan9", "Jan10", "Jan11", "Jan12", "Jan13", "Jan14", "Jan15", "Jan16", "Jan17", "Jan18", "Jan19", "Jan20", "Jan21", "Jan22", "Jan23", "Jan24", "Jan25", "Jan26", "Jan27", "Jan28", "Jan29", "Jan30", "Jan31"],
        datasets: [
            {
            label: "Productiedata",
            data: [12, 19, 10, 17, 6, 3, 7, 14, 1, 12, 8, 4, 9, 2, 16, 2, 7, 9, 15, 19, 12, 13, 4, 6, 12, 18, 4, 19, 12, 10, 7],
            backgroundColor: "rgb(192,205,255)",
            borderColor: "#4157a8",
            lineTension: 0,
            pointBackgroundColor: "#4157a8",
            }
        ],
        },
        chartdata2: {
        labels: ["Jan1", "Jan2", "Jan3", "Jan4", "Jan5", "Jan6", "Jan7", "Jan8", "Jan9", "Jan10", "Jan11", "Jan12", "Jan13", "Jan14", "Jan15", "Jan16", "Jan17", "Jan18", "Jan19", "Jan20", "Jan21", "Jan22", "Jan23", "Jan24", "Jan25", "Jan26", "Jan27", "Jan28", "Jan29", "Jan30", "Jan31"],
        datasets: [
            {
            label: "Productiedata",
            data: [1, 6, 18, 11, 12, 6, 10, 11, 14, 13, 9, 2, 2, 6, 1, 3, 17, 14, 12, 15, 18, 12, 10, 9, 7, 2, 1, 0, 0, 0, 0],
            backgroundColor: "rgb(192,205,255)",
            borderColor: "#4157a8",
            lineTension: 0,
            pointBackgroundColor: "#4157a8",
            }
        ],
        }
    })
};
</script>

<style scoped>
.machines {
    margin-top: 3%;
}
</style>