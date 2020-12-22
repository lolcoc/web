<template>
  <!--整页-->
  <el-row>
    <el-col :span="24">
      <div class="all">
        <!--分上中下三块-->
        <el-row>
          <el-col :span="24">
            <div class="login-split-3-div"></div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <div class="login-center-div login-center-div-white"></div>
          </el-col>
          <el-col :span="12">
            <div class="login-center-div login-center-div-area">
              <el-row>
                <el-col :span="24">
                  <div class="login-center-div-title">
                    用户登录
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="2">
                  <div class="login-center-div-user-span"></div>
                </el-col>
                <el-col :span="6">
                  <div class="login-center-div-user-span">用户名：</div>
                </el-col>
                <el-col :span="14">
                  <div class="login-center-div-user-input">
                    <el-input v-model="username" placeholder="请输入内容"></el-input>
                  </div>
                </el-col>
                <el-col :span="2">
                  <div class="login-center-div-user-span"></div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="2">
                  <div class="login-center-div-user-span"></div>
                </el-col>
                <el-col :span="6">
                  <div class="login-center-div-user-span">密码：</div>
                </el-col>
                <el-col :span="14">
                  <div class="login-center-div-user-input">
                    <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
                  </div>
                </el-col>
                <el-col :span="2">
                  <div class="login-center-div-user-span"></div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="14">
                  <div class="login-center-div-button"></div>
                </el-col>
                <el-col :span="1">
                  <div class="login-center-div-button">
                    <el-button type="success">注册</el-button>
                  </div>
                </el-col>
                <el-col :span="2">
                  <div class="login-center-div-button">
                  </div>
                </el-col>
                <el-col :span="1">
                  <div class="login-center-div-button">
                    <el-button type="success" id="login" @click="login()">登录</el-button>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="login-center-div login-center-div-white"></div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="login-split-3-div"></div>
          </el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>
<style>
  * {
    margin: 0;
    padding: 0;
  }

  .all {
    width: 100%;
    height: 100ch;
    background: url("../../assets/background.jpg") no-repeat;
    background-size: 100%;
  }

  .login-split-3-div {
    width: 100%;
    height: 20ch;
  }

  .login-center-div {
    width: 100%;
    height: 400px;
  }

  .login-center-div-white {
    width: 100%;
    height: 400px;
  }

  .login-center-div-area {
    width: 100%;
    height: 400px;
    border-radius: 30px;
  }

  .login-center-div-title {
    width: 100%;
    height: 100px;
    text-align: center;
    line-height: 100px;
    font-size: 30px;
    border-radius: 30px;
  }

  .login-center-div-user-span {
    width: 100px;
    height: 80px;
    float: left;
    margin-left: 80px;
  }

  .login-center-div-user-input {
    width: calc(100% - 90px);
    height: 80px;
    float: left;
  }

  .login-center-div-button {
    width: 100%;
    height: 100px;
  }
</style>
<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      console.log(this.username)
      console.log(this.password)
      this.$http.post(axios.defaults.baseURL + 'login', {
        username: this.username,
        password: this.password
      }, {emulateJSON: true}).then(function (res) {
        console.log(res.data)
        window.location.href = 'index.html'
      }, function (res) {
        console.log(res.status)
      })
    }
  }
}
</script>
