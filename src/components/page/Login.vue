<template>
  <div class="Login">
    <div>
      <h2>欢迎登录</h2>
      <router-link to="/register">
        没有账号去注册
      </router-link>
    </div>
    <form>
      账号：<input placeholder="请输入账号" v-model="phone" clearable class="input_style" /><br>
      <span v-if="error.phone" class="err-msg">{{error.phone}}</span>
      密码：<input placeholder="请输入密码" v-model="password" show-password class="input_style" /><br>
      <span v-if="error.password" class="err-msg">{{error.password}}</span>
      <button type="primary" @click="login" class="login_style">登录</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      phone: '',
      password: '',
      error: {
        phone: '',
        password: ''
      }
    }
  },
  methods: {
    login () {

    }
  }
}
</script>

<style>
  .Login{
    width: 100%;
    height: auto;
    text-align: center;
  }
  .input_style{
    width: 300px;
    height: 30px;
    margin: 10px 10px; /* 上下左右间距*/
  }
  .login_style{
    background-color: darkcyan;
    margin-bottom: 45px;
    margin-top: 10px;
  }
</style>
