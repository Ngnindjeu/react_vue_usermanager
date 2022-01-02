<template>
    <form v-on:submit.prevent="sendInfo()">
        <div class="form-group">
            <b><label for="firstName">FirstName</label></b>
            <input type="text" class="form-control" id="firstName" v-model="firstName">
            <b><label for="nameInput">LastName</label></b>
            <input type="text" class="form-control" id="nameInput" v-model="lastName">
            <b><label for="text">Description</label> </b>
            <textarea id="text" name="text" cols="25" rows="4" v-model="description"></textarea>
            <p v-if="!isFormValid" class="valid-message">Bitte geben Sie Vorname und Nachname eine</p>
        </div>
        <button type="submit" class="btn btn-secondary">Submit</button>
    </form>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { User } from '@/model/User';
    export default Vue.extend({
        name: 'AddUser',
        data () {
            return {
                firstName:'',
                lastName:'',
              description:'',
              isFormValid: true
            }
        },
      computed: {
         newUser: function (): User {
           return new User(this.firstName, this.lastName, this.description);
         }
      },
      methods: {
          sendInfo() {
            if(this.firstName === '' || this.lastName === '') {
              this.isFormValid = false;
            } else {
              this.$emit('newUser', this.newUser);
              this.clear()
            }

          },
          clear() {
            this.firstName = '';
            this.lastName = '';
            this.description = '';
            this.isFormValid = true;
          }
      }
    })
</script>

<style scoped>
.valid-message {
  color: darkred;
  margin-top: 0.5em;
}
</style>
