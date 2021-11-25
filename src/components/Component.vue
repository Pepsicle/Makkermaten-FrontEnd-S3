<template>
  <div class="components">
      <div class="card">
        <h4 class="card-title">{{this.loadedComponent[0]}}</h4>
        <div class="card-body">
          <p>
            Dit is een component
          </p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "component",
  data: () => ({

  }),
  props: {
    loadedComponent: {
      default: null,
      type: Object,
    }
  }
}
</script>

<style scoped>

</style>