<template>
    <div class="row">
      <div class="col-8" id="name">
        <p>{{ this.chartName }}</p>
      </div>
      <div class="col-4" id="status">
        <p v-if="statusCheck(chartdata)" style="color:green; font-weight: bold">AAN</p>
        <p v-else style="color: red; font-weight: bolder">UIT</p>
      </div>
    </div>
    <LineChart :chartName="this.chartName" :chartdata="this.chartdata" />
</template>

<script>
import LineChart from './charts/LineChart.vue'

export default {
    components: {
        LineChart,
    },
    props: {
        chartdata: {
            default: null
        },
        chartName: {
        type: String,
        default: "null"
        },
    },
    methods: {
        statusCheck(data){
          return data.datasets[0].data.at(-1) > 0;
        }
    }
}

</script>
