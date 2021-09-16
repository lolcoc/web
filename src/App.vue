<template>
  <div id="app">
    <header>
      <div class="header_style">
        <div>
          <span>xxxx欢迎您</span>
        </div>
        <div>
          <router-link to="/" >
            返回首页
          </router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <router-link to="/Login">
            登录
          </router-link>
        </div>
      </div>
      <div style="align-items: center;display: flex">
        <img src="./assets/header_left.png">
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isShow: true
    }
  },
  methods: {
    toLogin () {
      this.isShow = false
    }
  },
  components: {}
}
</script>

<style>
#app {
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 5px;
}
.header_style {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  font-weight: bolder;
}
</style>
