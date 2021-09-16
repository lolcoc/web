<template>
  <div class="returnPage">
    <div class="header_style">
      <div>
        <span class="span_style">xxxx欢迎您</span>
      </div>
      <div>
        <router-link to="/Login" class="router_style">
          登录
        </router-link>&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
    <div>
      <img src="../../assets/header_left.png">
    </div>
  </div>
</template>
<script>
export default {
  name: 'ReturnPage',
  data () {
    return {

    }
  },
  methods: {
  }
}
</script>
<style scoped>
  .header_style {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
