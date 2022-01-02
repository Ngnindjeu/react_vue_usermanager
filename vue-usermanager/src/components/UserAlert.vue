<template>
  <div>
    <b-alert
        :show="dismissCountDown"
        dismissible
        variant="warning"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
    >
      <p>A user has been {{message}}</p>
      <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
    </b-alert>
  </div>
</template>
<script>
export default {
  name: "UserAlert",
  props: {
    alert: {}
  },
  created() {
    this.showAlert();
  },
  data() {
    return {
      dismissSecs: 5,
      dismissCountDown: 0,
      message: this.alert.message
    }
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>

<style scoped>

</style>
