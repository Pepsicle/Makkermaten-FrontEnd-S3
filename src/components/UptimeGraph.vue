<template>
    <br><br>
    <p>UptimeGraph</p>

    <div class="progress" style="height: 100px; margin: 20px;">
        <div v-for="change in testdata" :key="change.timestamp">
            <div v-bind:style="lossPercentageStyle" class="progress-bar bg-danger"/>
        </div>
    </div>
    <div v-if="loaded" style="width: 50%;">
        <div v-for="change in testdata" :key="change.timestamp" class="row" style="display: flex; flex-direction: row;">
            <div v-if="change.machineOn">
                <div v-bind:style="change.percentage" class="bg-success p-3">On</div>
            </div>
            <div v-if="!change.machineOn">
                <div v-bind:style="change.percentage" class="bg-danger p-3">Off</div>
            </div>
        </div>
        <div class="bg-secondary">100%</div>

        <div class="row">
            <div class="bg-success" style="width: 60%">On</div>
            <div class="bg-danger" style="width: 40%">Off</div>
        </div>
    </div>

</template>

<script>
export default {
    name: "UptimeGraph",
    data:() => ({
        loaded: false,
        testdata: [
            {
                machineOn: true,
                timestamp: "2020-09-30T00:00:00",
                percentage: ''
            },
            {
                machineOn: false,
                timestamp: "2020-09-30T13:00:00",
                percentage: ''
            },
            {
                machineOn: true,
                timestamp: "2020-09-30T16:00:00",
                percentage: ''
            },
            {
                machineOn: false,
                timestamp: "2020-09-30T17:00:00",
                percentage: ''
            },
        ],

        winPercentageStyle: '',
        lossPercentageStyle: 'width: 5%',
    }),
    methods: {
        getPercentages() {
            var minutesInDay = 1440;
            var endtime
            var percentage
            var percentageString

            for (let index = 0; index < this.testdata.length; index++) {
                var endOfDay = false
                var starttime = this.testdata[index].timestamp

                if (index + 1 != this.testdata.length) {
                    endtime = this.testdata[index + 1].timestamp
                    endOfDay = false
                } else {
                    endtime = this.testdata[0].timestamp
                    endOfDay = true
                }

                console.log(index + 1 + " " + this.testdata.length)
                console.log(starttime + "  " + endtime + " " + endOfDay)

                var diff_in_millis = Math.abs(new Date(starttime) - new Date(endtime))
                var diff_in_minutes = diff_in_millis/60000
                
                if (endOfDay) {
                    percentage = 100 - (diff_in_minutes / minutesInDay * 100)

                    percentageString = "width: " + percentage.toString() + "%;"
                    this.testdata[index].percentage = percentageString
                    console.log(percentageString)
                } else {
                    percentage = diff_in_minutes / minutesInDay * 100
                    percentageString = "width: " + percentage.toString() + "%;"
                    this.testdata[index].percentage = percentageString
                    console.log(percentageString)
                }
            }
        }
    },
    mounted() {
        this.getPercentages()
        this.loaded = true
        console.log(this.testdata)
    }
}
</script>

<style scoped>

</style>