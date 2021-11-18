<template>
  <div id="app">
    <Navbar />
    <router-view />

    <Modal/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Modal from './components/Modal.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Modal
  }
}
</script>

<style>
</style>