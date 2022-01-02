<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark mb-5">
      <span class="navbar-brand mb-0 h1">{{ title }}</span>
    </nav>
    <div v-for="i in alerts" v-bind:key="i" class="user-alert">
      <UserAlert :alert="alertManager"></UserAlert>
    </div>
    <div class="container">
      <div class="row">
      <List class="col-md-9" :userList="userList" v-on:delete="showAlert('deleted')" v-on:update="showAlert('updated')"> </List>
      <AddUser class="col-md-3" v-on:newUser="addUser($event)"></AddUser>
    </div>
    </div>
    </div>
</template>

<script lang="ts">
import {User} from './model/User'
import List from './components/List.vue'
import AddUser from './components/AddUser.vue'
import Vue from 'vue';
import UserAlert from "@/components/UserAlert.vue";

export default Vue.extend({
  name: 'App',
  components: {
    UserAlert,
   AddUser,
    List
  },
  data () {
    return {
      title: 'Usermanager',
      userList: [
        new User('Max', 'Muster','Student'),
        new User('Jordan', 'Dringen', 'Dozent')
      ],
      noOfAlerts: 0,
      alerts: [],
      alertManager: {
        alert: false,
        message: ''
      }
    }
  },
  methods: {
    addUser: function (newUser: User) {
      this.userList.push(newUser);
      this.showAlert('added');
    },
    showAlert: function (message: string) {
      this.noOfAlerts++;
      this.alerts.push(this.noOfAlerts);
      this.alertManager.alert = true;
      this.alertManager.message = message;
    }
  }

});
</script>

<style>

</style>
