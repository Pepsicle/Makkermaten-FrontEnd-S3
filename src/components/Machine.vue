<template>
  <div class="components">
    <h1>Send data to component</h1>
    <ul id="array rendering">
        <li v-for="data in items" v-bind:key="data.message">
            <MachineComponent v-bind:componentdata="data" />
        </li>
    </ul>
  </div>
</template>

<script>
//import { computed } from '@vue/reactivity'
import MachineComponent from './Component.vue'
export default {
  name: 'HelloWorld',
  components:{
      MachineComponent,
  },
  data(){
      return {
          items:[{data:[{message: 'hello'},{ count: 3}]},{data:[{message: 'goodbey'},{ count: 3}]}]
      }
  }
}
</script>