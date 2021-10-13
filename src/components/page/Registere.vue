<template>
  <div class="register">
    <div>
      <img src="../../assets/reg_bg_min.jpg" class="bg_image">
    </div>
    <div class="from_style">
      <form>
        <h1>用户注册</h1>
        <div class="div_style">
          <label class="label_style">手 机 号：</label>
          <input placeholder="请输入手机号" v-model="customer.phone" clearable class="input_style" @blur="verifyPhone"/><br>
        </div>
        <div class="div_style">
          <label class="label_style">验 证 码：</label>
          <input placeholder="请输入验证码" v-model="customer.verifyCode" style="height: 30px; width: 42%; margin: 10px 10px" @blur="verifyVerifyCode"/>
          <button v-show="show" style="height: 30px; width: auto;" @click="getVerifyCode">获取验证码</button>
          <button v-show="!show" class="count" style="height: 30px; width: auto; size: 20px">{{count}} s重新获取</button>
        </div>
        <div class="div_style">
          <label class="label_style">密    码：</label>
          <input placeholder="请输入密码" v-model="customer.password" class="input_style" type="password" @blur="verifyPassword" autocomplete/><br>
        </div>
        <div class="div_style">
          <label class="label_style">确认密码：</label>
          <input placeholder="请再次输入密码" v-model="customer.confirmPassword" type="password" class="input_style"  @blur="verifyConfirmPassword" autocomplete/><br>
        </div>
        <div class="div_style">
          <label class="label_style">姓    名：</label>
          <input placeholder="请填写您的真实姓名" v-model="customer.name" class="input_style" @blur="verifyName"/><br>
        </div>
        <div class="div_style">
          <label class="label_style">身份证号：</label>
          <input placeholder="请输入身份证号" v-model="customer.idNo" class="input_style" @blur="verifyIdNo"/><br>
        </div>
        <div class="div_style">
          <label class="label_style">性 别：</label>
          <input type="radio" name="sex" value="1" v-model="customer.sex"><label>男</label>
          <input type="radio" name="sex" value="0" v-model="customer.sex"><label>女</label><br/>
        </div>
        <div class="div_style">
          <label class="label_style">出生日期：</label>
          <input type="date" placeholder="请填写出生年月日" v-model="customer.birthday" class="input_style" /><br>
        </div>
        <div class="div_style">
          <label class="label_style">家庭住址：</label>
          <input placeholder="请输入家庭住址" v-model="customer.address"  class="input_style" /><br>
        </div>
        <div class="div_style">
          <label class="label_style">邀 请 码：</label>
          <input placeholder="请输入邀请码（如没有可以不填）" v-model="customer.invitationCode" class="input_style" /><br>
        </div>
        <button type="primary" @click="register" class="button_style">注  册</button>
      </form>
    </div>
  </div>
</template>

<script>
import api from '../../router/api.js'
import axios from 'axios'
export default {
  name: 'register',
  data () {
    return {
      show: true,
      count: '',
      timer: null,
      customer: {
        phone: '',
        verifyCode: '',
        password: '',
        confirmPassword: '',
        name: '',
        idNo: '',
        sex: '',
        birthday: '',
        address: '',
        invitationCode: ''
      }
    }
  },
  methods: {
    register (event) {
      event.preventDefault()
      let flag = true
      let formData = new FormData()
      for (var key in this.customer) {
        if (key !== 'invitationCode' && this.customer[key] === '') {
          this.swal({
            text: '请完善注册信息',
            confirmButtonText: '确定',
            showCancelButton: false
          })
          flag = false
        }
        formData.append(key, this.customer[key])
      }
      if (flag) {
        axios.post(api.http + '/register', formData, {
        }).then(response => {
          var result = response.data
          if (result.resultCode === 'success') {
            this.swal({
              text: result.massage,
              confirmButtonText: '去登陆',
              showCancelButton: false
            }).then(function () {
              this.$router.push('/login')
            }.bind(this))
          } else {
            this.swal({
              text: result.massage,
              confirmButtonText: '确定',
              showCancelButton: false
            })
          }
        }).catch(error => {
          console.log(error)
        })
      }
    },
    getVerifyCode (event) {
      event.preventDefault()
      let queryData = new FormData()
      queryData.append('phone', this.customer.phone)
      if (this.customer.phone === '') {
        this.swal({
          text: '请填写手机号',
          confirmButtonText: '确定',
          showCancelButton: false
        })
        return
      }
      const TIME_COUNT = 60
      if (!this.timer) {
        this.count = TIME_COUNT
        this.show = false
        this.timer = setInterval(() => {
          if (this.count > 1 && this.count <= TIME_COUNT) {
            this.count--
          } else {
            this.show = true
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
      }
      axios.post(api.http + '/getVerifyCode', queryData, {
      }).then(response => {
        var result = response.data
        this.swal({
          text: result.massage,
          confirmButtonText: '确定',
          showCancelButton: false
        })
        event.preventDefault()
      }).catch(error => {
        console.log(error)
      })
    },
    verifyPhone () {
      let reg = /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[0,1,2,6,7,8,9])\d{8}$/
      if (!reg.test(this.customer.phone)) {
        this.swal({
          text: '请输入正确的手机号',
          confirmButtonText: '确定',
          showCancelButton: false
        })
      }
    },
    verifyVerifyCode () {
      if (this.customer.verifyCode === '') {
        this.swal({
          text: '验证码不能为空',
          confirmButtonText: '确定',
          showCancelButton: false
        })
      }
    },
    verifyPassword () {
      let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/
      if (!reg.test(this.customer.password)) {
        this.swal({
          text: '密码必须包含大小写字母和数字长度为8-16位',
          confirmButtonText: '确定',
          showCancelButton: false
        })
      }
    },
    verifyConfirmPassword () {
      if (!(this.customer.password === this.customer.confirmPassword)) {
        this.swal({
          text: '两次输入密码不一致',
          confirmButtonText: '确定',
          showCancelButton: false
        })
      }
    },
    verifyName () {
      let reg = /^([\u4e00-\u9fa5]).{1,}$/
      if (!reg.test(this.customer.name)) {
        this.swal({
          text: '姓名输入有误',
          confirmButtonText: '确定',
          showCancelButton: false
        })
      }
    },
    verifyIdNo () {
      let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
      if (!reg.test(this.customer.idNo)) {
        this.swal({
          text: '身份证输入有误',
          confirmButtonText: '确定',
          showCancelButton: false
        })
      }
    }
  }
}
</script>

<style scoped>
  .register{
    width: 100%;
    height: 100%;
  }
  .label_style{
    display: inline-block;
    justify-content: space-between;
    width: 80px;
    text-align: right;
  }
  .div_style{
    width: 500px;
    padding: auto;
    margin-left: auto;
    margin-right: auto;
  }
  .input_style{
    width: 300px;
    height: 30px;
    margin: 10px 10px; /* 上下左右间距*/
  }
  .button_style{
    margin-bottom: 45px;
    margin-top: 10px;
  }
  .from_style{
    margin-left: 70%;
    margin-top: 10%;
    background-color: aliceblue;
    width: 480px;
    height: 650px;
    position: absolute;
    z-index: 5;
    text-align: center;
  }
  .bg_image{
    display: inline-block;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -3;
  }
</style>
