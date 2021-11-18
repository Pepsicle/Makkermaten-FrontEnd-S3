<template>
  <button type="button" class="btn btn-primary" @click="modal.show()">
    Proto modal
  </button>
  <div class="modal fade" ref="Component" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ modaltitle }}</h5>
          <button
            type="button"
            class="btn-close"
            @click="modal.hide()"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div v-for="content in modalcontent" v-bind:key="content">
            <p>{{ content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Modal } from "bootstrap";
export default {
  name: "App",
  data: () => ({
    modal: null,
    modaltitle: "Title",
    modalcontent: ["Schroefdraad", "Draaiknop"],
  }),
  mounted() {
    //Gets the "ref" of the modal so it knows which to activated
    this.modal = new Modal(this.$refs.Component);
  },
};
//source: https://dev.to/tefoh/use-bootstrap-5-in-vue-correctly-2k2g
</script>