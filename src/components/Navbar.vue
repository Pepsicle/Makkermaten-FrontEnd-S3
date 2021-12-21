<template>
  <nav class="fixed-top">
      <ul class="customnavbar">
          <li><img class="q3logo" src="./imgs/Q3logo.png"></li>
          <li><a href="/">Home</a></li>
          <!-- <li><a href="/dashboard">Dashboard</a></li> -->
          <li><a href="/componenthealth">Component Health</a></li>
          <li><a href="/maintenance">Maintenance</a></li>
          <li><a href="/uptimegraph">Uptime Graph</a></li>
      </ul>
  </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #4157A8;
}

li {
  float: left;
  display: inline;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #4b66c5;
  color: white;
}

.q3logo {
    position: relative;
    max-height: 40px;
    margin: 5px;
    vertical-align: middle;
}
</style>