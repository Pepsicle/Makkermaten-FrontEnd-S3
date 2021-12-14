<template>
    <br /><br />
    <p>UptimeGraph</p>

    <!-- <p>{{this.uptimeData}}</p> -->
    
    <div v-if="loaded" style="width: 100%; display: flex; flex-direction: row">
        <div v-for="change in uptimeData" :key="change.timestamp" v-bind:style="widthPercentages[change]">
            <div v-if="change.shotTime < 0">
              <div class="bg-success p-3 percentagewidth">On</div>
              <div class="hide"> {{ this.GetTimeFromTimestamp(change.timestamp) }} </div>
            </div>
            <div  v-if="change.shotTime = 0">
              <div class="bg-danger p-3 percentagewidth">Off</div>
              <div class="hide"> {{ this.GetTimeFromTimestamp(change.timestamp) }} </div>
            </div>
        </div>
    </div>
</template>

<script>
import UptimeDataService from '../Service/UptimeDataService'

export default {
  name: "UptimeGraph",
  data: () => ({
    loaded: false,
    widthPercentages: [],
    testdata: [
      {
        machineOn: true,
        timestamp: "2020-09-30T00:00:00",
        percentage: "",
      },
      {
        machineOn: false,
        timestamp: "2020-09-30T13:00:00",
        percentage: "",
      },
      {
        machineOn: true,
        timestamp: "2020-09-30T16:00:00",
        percentage: "",
      },
      {
        machineOn: false,
        timestamp: "2020-09-30T17:00:00",
        percentage: "",
      },
    ],
    uptimeData: '',

    winPercentageStyle: "",
    // lossPercentageStyle: "width: 5%",
  }),
  methods: {
    getPercentages() {
      var minutesInDay = 1440;
      var endtime;
      var percentage;
      var percentageString;

      for (let index = 0; index < this.uptimeData.length; index++) {
        var endOfDay = false;
        var starttime = this.uptimeData[index].timestamp;

        if (index + 1 != this.uptimeData.length) {
          endtime = this.uptimeData[index + 1].timestamp;
          endOfDay = false;
        } else {
          endtime = this.uptimeData[0].timestamp;
          endOfDay = true;
        }

        console.log(index + 1 + " " + this.uptimeData.length);
        console.log(starttime + "  " + endtime + " " + endOfDay);

        var diff_in_millis = Math.abs(new Date(starttime) - new Date(endtime));
        var diff_in_minutes = diff_in_millis / 60000;

        if (endOfDay) {
          percentage = 100 - (diff_in_minutes / minutesInDay) * 100;

          percentageString = "width: " + percentage.toString() + "%;";
          this.widthPercentages.push(percentageString)
          // this.testdata[index].percentage = percentageString;
          // console.log(percentageString);
        } else {
          percentage = (diff_in_minutes / minutesInDay) * 100;
          percentageString = "width: " + percentage.toString() + "%;";
          this.widthPercentages.push(percentageString)
          // this.testdata[index].percentage = percentageString;
          // console.log(percentageString);
        }
      }
    },
    GetTimeFromTimestamp(timestamp) {
      return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    },
    async GetUptimeMachine(name, startTime) {
      var apiResponse = await UptimeDataService.GetUptimeMachine(name, startTime)
      console.log(apiResponse)
      this.uptimeData = apiResponse.data
    }
  },
  mounted() {
    this.GetUptimeMachine("A3", "2020-09-01T00:00:00")
    this.getPercentages();
    this.loaded = true;
    // console.log(this.testdata);
  },
};
</script>

<style scoped>
.hide {
  display: none;
  min-width: 1px;
}

.percentagewidth:hover + .hide {
  display: block;
  min-width: 1px;
}

.percentagewidth {
  padding: 0%;
  min-width: 1px;
}
</style>