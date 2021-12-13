<template>
    <br /><br />
    <p>UptimeGraph</p>

    
    <div v-if="loaded" style="width: 100%; display: flex; flex-direction: row">
        <div v-for="change in testdata" :key="change.timestamp" v-bind:style="change.percentage">
            <div v-if="change.machineOn">
              <div class="bg-success p-3 percentagewidth">On</div>
              <div class="hide"> {{ this.GetTimeFromTimestamp(change.timestamp) }} </div>
            </div>
            <div  v-if="!change.machineOn">
              <div class="bg-danger p-3 percentagewidth">Off</div>
              <div class="hide"> {{ this.GetTimeFromTimestamp(change.timestamp) }} </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "UptimeGraph",
  data: () => ({
    loaded: false,
    testdata: [
      {

        //Test timestamp 1
        machineOn: true,
        timestamp: "2020-09-30T00:00:00",
        percentage: "",
      },
      {
        //Test timestamp 2
        machineOn: false,
        timestamp: "2020-09-30T13:00:00",
        percentage: "",
      },
      {
        //Test timestamp 3
        machineOn: true,
        timestamp: "2020-09-30T16:00:00",
        percentage: "",
      },
      {
        //Test timestamp 4
        machineOn: false,
        timestamp: "2020-09-30T17:00:00",
        percentage: "",
      },
    ],

    winPercentageStyle: "",
    lossPercentageStyle: "width: 5%",
  }),
  methods: {
    getPercentages() {
      var minutesInDay = 1440;
      var endtime;
      var percentage;
      var percentageString;

      for (let index = 0; index < this.testdata.length; index++) {
        var endOfDay = false;
        var starttime = this.testdata[index].timestamp;

        if (index + 1 != this.testdata.length) {
          endtime = this.testdata[index + 1].timestamp;
          endOfDay = false;
        } else {
          endtime = this.testdata[0].timestamp;
          endOfDay = true;
        }

        console.log(index + 1 + " " + this.testdata.length);
        console.log(starttime + "  " + endtime + " " + endOfDay);

        var diff_in_millis = Math.abs(new Date(starttime) - new Date(endtime));
        var diff_in_minutes = diff_in_millis / 60000;

        if (endOfDay) {
          percentage = 100 - (diff_in_minutes / minutesInDay) * 100;

          percentageString = "width: " + percentage.toString() + "%;";
          this.testdata[index].percentage = percentageString;
          console.log(percentageString);
        } else {
          percentage = (diff_in_minutes / minutesInDay) * 100;
          percentageString = "width: " + percentage.toString() + "%;";
          this.testdata[index].percentage = percentageString;
          console.log(percentageString);
        }
      }
    },
    GetTimeFromTimestamp(timestamp) {
      return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

      // var finaldate = new Date(timestamp)
      // finaldate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      // return finaldate
    }
  },
  mounted() {
    this.getPercentages();
    this.loaded = true;
    console.log(this.testdata);
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
</style>