<template>
  <div class="headerPage">
    <div class="header_style">
      <div>
        <span>xxxx欢迎您</span>
      </div>
      <div>
        <router-link to="/" >
          返回首页
        </router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <router-link to="/login">
          登录
        </router-link>
      </div>
    </div>
    <div class="header_img">
      <img src="../../assets/header_left.png">
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderPage',
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
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
    font-weight: bolder;
  }
  .header_img {
    width: 100%;
    height: auto;
    display: inline-block;
    text-align: center;
  }
</style>
