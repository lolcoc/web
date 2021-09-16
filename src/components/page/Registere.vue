<template>
  <div class="Register">
    <div style="position: absolute;z-index: -3">
      <img src="../../assets/reg_bg_min.jpg">
    </div>
    <div class="from_style">
      <form>
        <h1>用户注册</h1>
        <div class="div_style">
          <label class="label_style">手 机 号：</label>
          <input placeholder="请输入手机号" v-model="customer.phone" clearable class="input_style" @blur="phoneNo"/><br>
        </div>
        <div class="div_style">
          <label class="label_style">密    码：</label>
          <input placeholder="请输入密码" v-model="customer.password" class="input_style" type="password"/><br>
        </div>
        <div class="div_style">
          <label class="label_style">确认密码：</label>
          <input placeholder="请再次输入密码" v-model="customer.cpassword" type="password" class="input_style" /><br>
        </div>
        <div class="div_style">
          <label class="label_style">姓    名：</label>
          <input placeholder="请填写您的真实姓名" v-model="customer.name" class="input_style" /><br>
        </div>
        <div class="div_style">
          <label class="label_style">身份证号：</label>
          <input placeholder="请输入身份证号" v-model="customer.idNo" class="input_style" /><br>
        </div>
        <div class="div_style">
          <label class="label_style">性    别：</label>
          <input type="radio" name="sex" value="1" v-model="customer.sex" class="gender"><label>男</label>
          <input type="radio" name="sex" value="0" v-model="customer.sex" class="gender"><label>女</label><br/>
        </div>
        <div class="div_style">
          <label class="label_style">出生日期：</label>
          <input placeholder="请填写出生年月日" v-model="customer.birthdayYear" class="input_style" /><br>
        </div>
        <div class="div_style">
          <label class="label_style">家庭住址：</label>
          <input placeholder="请输入家庭住址" v-model="customer.address"  class="input_style" /><br>
        </div>
        <div class="div_style">
          <label class="label_style">邀 请 码：</label>
          <input placeholder="请输如邀请码（如没有可以不填）" v-model="customer.invitationCode" class="input_style" /><br>
        </div>
        <button type="primary" @click="login" class="login_style">注  册</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'register',
  data () {
    return {
      customer: {
        phone: '',
        password: '',
        name: '',
        idNo: '',
        sex: '',
        birthdayYear: '',
        address: '',
        invitationCode: ''
      },
      errorPhone: false
    }
  },
  methods: {
    login () {
      let formData = new FormData()
      for (var key in this.customer) {
        formData.append(key, this.customer[key])
      }
      axios.post('http://localhost:8001/customer/register', formData, {
      }).then(response => {
        var result = response.data
        alert(result.resultCode)
      }).catch(error => {
        console.log(error)
      })
    },
    phoneNo () {
      let reg = /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/
      if (!reg.test(this.customer.phone)) {
        // 边框变色
        // this.setAttribute('border', 'red 1px solid')
        // 改变文字
        this.getSVGDocument().setAttribute('placeholder', '请输入正确的手机号')
      }
    }
  }
}
</script>

<style scoped>
  .Register{
    text-align: center;
    margin-top: 20px;
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
  .login_style{
    margin-bottom: 45px;
    margin-top: 10px;
  }
  .from_style{
    margin-left: 70%;
    margin-top: 5%;
    background-color: aliceblue;
    width: 460px;
    height: 600px;
    position: absolute;
    z-index: 5;
  }
</style>
