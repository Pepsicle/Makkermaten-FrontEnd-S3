<template>
  <button type="button" class="btn btn-primary" @click="modal.show()">Components ({{ this.componentcount }})</button>
  <div class="modal fade" ref="Component" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ modalTitle }} Componenents</h5>
          <button
            type="button"
            class="btn-close"
            @click="modal.hide()"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div v-for="content in modalContent" v-bind:key="content">
            <p>{{ content.omschrijving }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";

export default {
  name: "Modal",
  data: () => ({
    modal: null,
    componentcount: '',
  }),
  props: {
    modalTitle: {
      default: null,
      type: String,
    },
    modalContent: {
      default: null,
      type: Array
    }
  },
  mounted() {
    //Gets the "ref" of the modal so it knows which to activated
    this.modal = new Modal(this.$refs.Component);
    this.componentcount = this.modalContent.length
  },
};
//source: https://dev.to/tefoh/use-bootstrap-5-in-vue-correctly-2k2g
</script>