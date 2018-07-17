<template>
  <div class="login-container">
    <el-form ref="login-form" :model="loginForm" :rules="loginRules">
      <el-form-item prop="name">
        <el-input type="text" suffix-icon="el-icon-date" v-model="loginForm.name" auto-complete="off" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="text" v-model="loginForm.password" auto-complete="off" placeholder="mima"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return{
      loginForm: {
        name: '',
        password: ''
      },
      loginRules: {

      }
    }
  }
}
</script>

<style>
  .login-container{
    background: url()
  }
</style>
