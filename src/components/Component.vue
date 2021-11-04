<template>
  <div class="components">
      <div>
        <h4>{{componentdata}}</h4>
      </div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components:{

  },
  data()
  {
    return {
      componentName:[],
    }
  },
  props:{
    componentdata:[]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #000000;
}
</style>