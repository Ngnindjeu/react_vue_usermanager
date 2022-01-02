<template>
  <div class="row">
    <div class="col-lg-6 my-auto">
    <table class="table" v-if="userList.length">
      <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">First name</th>
        <th scope="col">Last name</th>
        <th scope="col">Description</th>
        <th scope="col">Date</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(user, index) in userList" v-bind:key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.description }}</td>
        <td>{{ user.date }}</td>
        <td class="user-action">
          <EditModal :user="user" v-on:updateUser="update($event, index)" />
          <button class="btn btn-danger delete-button" @click="deleteUser(index)">Löschen</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import EditModal from './EditModal.vue'
import { User } from '@/model/User';

export default Vue.extend({
  name: 'List',
  props: {
    userList: Array
  },
  components: {
    EditModal
  },
  methods: {
    deleteUser: function (index: number) {
      this.userList.splice(index, 1);
      this.$emit('delete', true);
    },
    update: function (updateData: User, index: number) {
      this.userList[index].firstName = updateData.firstName;
      this.userList[index].lastName = updateData.lastName;
      this.userList[index].description = updateData.description;
      this.$emit('update', true);

    }
  }
})
</script>

<style scoped>
.user-action {
  display: flex;
  flex-flow: row;
  justify-content: space-around;
}
.delete-button {
  margin-left: 0.5em;
}
</style>
