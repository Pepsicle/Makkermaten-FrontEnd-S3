<template>
  <div v-if="loaded" style="width: 100%; display: flex; flex-direction: row" class="borderthings">
    <!-- <p>loaded</p> -->
    <div v-for="(change, index) in uptimeData" :key="change.timestamp" v-bind:style="this.widthPercentages[index]">
      <div v-if="change.shotTime >= 0.1" class="tooltip1">
        <div class="bg-success percentagewidth">&#10240;</div>
        <span class="tooltiptext">{{ this.GetTimeFromTimestamp(change.timestamp) }}</span>
        <!-- <div class="hide"> {{ this.GetTimeFromTimestamp(change.timestamp) }} </div> -->
      </div>
      <div v-if="change.shotTime == 0" class="tooltip1">
        <div class="bg-danger percentagewidth">&#10240;</div>
        <span class="tooltiptext">{{ this.GetTimeFromTimestamp(change.timestamp) }}</span>
        <!-- <div class="hide"> {{ this.GetTimeFromTimestamp(change.timestamp) }} </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import UptimeDataService from '../Service/UptimeDataService'

export default {
  name: "UptimeGraph",
  props: {
    machineName: {
      type: String,
      default: '',
    },
    givenTimeStamp: {
      type: String,
      default: '',
    }
  },
  data: () => ({
    currentInt: '0',
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
  computed: {
    styles: function() {
      return this.widthPercentages[this.currentInt]
    }
  },
  methods: {
    logwidth(change) {
      console.log("test" + this.widthPercentages[change])
    },
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

        // console.log(index + 1 + " " + this.uptimeData.length);
        // console.log(starttime + "  " + endtime + " " + endOfDay);

        var diff_in_millis = Math.abs(new Date(starttime) - new Date(endtime));
        var diff_in_minutes = diff_in_millis / 60000;

        if (endOfDay) {
          percentage = 100 - (diff_in_minutes / minutesInDay) * 100;
          if (percentage <= 0.1){
            percentage = 0.1
          }

          percentageString = "width: " + percentage.toString() + "%;";
          this.widthPercentages.push(percentageString)
          // this.testdata[index].percentage = percentageString;
          // console.log(percentageString);
        } else {
          percentage = (diff_in_minutes / minutesInDay) * 100;
          if (percentage <= 0.1){
            percentage = 0.1
          }
          percentageString = "width: " + percentage.toString() + "%;";
          this.widthPercentages.push(percentageString)
          // this.testdata[index].percentage = percentageString;
          // console.log(percentageString);
        }
      }
    },
    getTimeStamp() {
      var date = new Date()
      date = "2020-09-30T" + date.toLocaleTimeString()
      // console.log("current date" + date)
      // date.setDate(date.getDate -1)
      return date
      // console.log(date)
    },
    getCurrentWidth(currentI) {
      console.log("sending width")
      this.currentInt = currentI
      console.log(this.currentInt)
      return this.widthPercentages[currentI]
    },
    GetTimeFromTimestamp(timestamp) {
      return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    },
    async GetUptimeMachine(name, startTime) {
      await UptimeDataService.GetUptimeMachine(name, startTime).then(res => {this.testmethod(res)})
      // console.log(apiResponse)
      
      // this.uptimeData = apiResponse
      // console.log(this.uptimeData)
      this.getPercentages();
      this.loaded = true;
    },
    testmethod(res) {
      this.uptimeData = res
      // this.uptimeData.forEach(shot => {
      //   console.log(shot.shotTime)
      // });
    }
  },
  mounted() {
    this.GetUptimeMachine(this.machineName, this.getTimeStamp())
    // console.log("logging data in mounted" + this.uptimeData)
    // this.loaded = true;
    // console.log(this.testdata);
  },
};
</script>

<style scoped>
.hide {
  display: none;
}

.percentagewidth:hover + .hide {
  display: block;
}

.percentagewidth {
  height: 75px;
}

.tooltip1 {
  position: relative;
}

.tooltip1 .tooltiptext {
  visibility: hidden;
  width: 60px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}

.tooltip1:hover .tooltiptext {
  visibility: visible;
}

.borderthings {
  /* border-radius: 25rem; */
  border-style: solid;
  border-color: #5c5c5c
}
</style>