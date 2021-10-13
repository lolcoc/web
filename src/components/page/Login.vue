<template>
  <div class="login">
    <div>
      <h2>欢迎登录</h2>
      <router-link to="/register">
        没有账号去注册
      </router-link>
    </div>
    <form>
      账号：<input placeholder="请输入账号" v-model="phone" clearable class="input_style" /><br>
      密码：<input placeholder="请输入密码" v-model="password" show-password class="input_style"  type="password" autocomplete/><br>
      <button type="primary" @click="login" class="login_style">登录</button>
    </form>
  </div>
</template>

<script>
import api from '../../router/api.js'
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      phone: '',
      password: ''
    }
  },
  methods: {
    login (event) {
      event.preventDefault()
      let formData = new FormData()
      formData.append('phone', this.phone)
      formData.append('password', this.password)
      axios.post(api.http + '/login', formData, {
      }).then(response => {
        var result = response.data
        if (result.resultCode === 'success') {
          this.swal({
            text: '登录成功,欢迎 ' + result.massage + ' !',
            confirmButtonText: '确定',
            showCancelButton: false
          }).then(function () {
            this.$router.push('/')
          }.bind(this))
        } else {
          this.swal({
            text: result.massage,
            confirmButtonText: '确定',
            showCancelButton: false
          })
        }
      })
    }
  }
}
</script>

<style>
  .login{
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
