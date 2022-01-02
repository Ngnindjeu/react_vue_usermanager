<template>
  <div>
    <b-button id="show-btn" @click="initModal">Bearbeiten</b-button>
    <b-modal ref="my-modal" hide-footer title="User bearbeiten">
      <div class="d-block text-center">
        <form >
          <div class="form-group">
            <input class="form-control" :value="id" disabled>
          </div>

          <div class="form-group">
            <input class="form-control" v-model="firstName" >
          </div>
          <div class="form-group">
            <input  class="form-control" v-model="lastName" >
          </div>
          <div class="form-group">
            <textarea class="form-control"  rows="3"  v-model="description" ></textarea>
          </div>
          <div>
          </div>
        </form>
      </div>
      <b-button class="mt-3 btn btn-secondary"  block @click="save">Save</b-button>
      <b-button class="mt-3 btn btn-danger"  block @click="hideModal">Abbrechen</b-button>
    </b-modal>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {User} from "@/model/User";

export default Vue.extend({
  name: "EditModal",
  props: {
    user: User
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      description: '',
      id: 0
    }
  },
  computed: {
    userData: function () {
      return {
        firstName: this.firstName,
        lastName: this.lastName,
        description:this.description,
        id: this.id
      }
    }
  },
  methods: {
    initModal: function () {
      this.firstName = this.user.firstName;
      this.lastName = this.user.lastName;
      this.description = this.user.description;
      this.id = this.user.id;
      this.showModal();
    },
    showModal: function () {
      this.$refs['my-modal'].show();
    },
    save: function () {
      console.log("save save");
      console.log(this.userData);
      this.$emit('updateUser', this.userData);
      this.hideModal();
    },
    hideModal() {
      this.$refs['my-modal'].hide();
    },

  }
})
</script>

<style scoped>

</style>
