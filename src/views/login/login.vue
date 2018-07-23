<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-position="top">
    	<el-form-item label="用户名" prop="username">
		    <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="请输入用户名"></el-input>
		  </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="text" v-model="loginForm.password" auto-complete="off" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
		    <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
		    <el-button @click="resetForm('loginForm')">重置</el-button>
		  </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {isvalidUsername} from 'utils/validate'
import {loginByUsername} from 'api/login'
export default {
  data() {
		const validateUsername = (rule, value, callback) => {
       if(value === ''){
      	callback(new Error('请输入用户名'))
      }else if (!isvalidUsername(value)) {
        callback(new Error('请输入有效的用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if(value === ''){
      	callback(new Error('请输入密码'))
      }else if (value.length < 5) {
        callback(new Error('请输入有效的密码'))
      } else {
        callback()
      }
    }
    return{
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
				username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      }
    }
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
          	loginByUsername(this.loginForm).then(res => {
          		this.$router.push({ path: '/layout' })
          	});
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style>
  .login-container{
    background: url()
  }
</style>
