<template>
<nav>
    <ul class="customnavbar">
        <li><img class="q3logo" src="./imgs/Q3logo.png"></li>
        <li><a href="/">Home</a></li>
        <li><a href="/machinehealth">Machine Health</a></li>
        <li><a href="/componenthealth">Component Health</a></li>
        <li><a href="/maintenance">Maintenance</a></li>
    </ul>
</nav>

  <!-- <div id="navbar">
    <nav class="navbar navbar-dark sticky-top flex-md-nowrap p-0" style="background-color: #0b293b;">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Dashboard</a>
    </nav>
    <div class="row mx-0">
      <nav class="col-md-2 d-none d-md-block sidebar" style="position:static; background-color: rgb(148,165,241);">
        <div class="sidebar-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" href="#" style="  color: #ffffff;">
                Machine Health
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#" style="  color: #ffffff;">
                Component Health
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#" style="  color: #ffffff;">
                Maintenance
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div> -->
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>
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