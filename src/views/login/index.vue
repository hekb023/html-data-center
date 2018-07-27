<template>
	<div class="login-container">
		<div class="login-inner">
			<div class="pic">
				<img src="../../assets/images/login/img_login.png" alt="" />
			</div>
			<div class="login-form">
				<h4 class="title">
					<img src="../../assets/images/login/logo_login.png" alt="" />
				</h4>
				<div class="content">
					<el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-position="top">
						<el-form-item label="用户名" prop="username">
							<el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="请输入用户名"></el-input>
						</el-form-item>
						<el-form-item label="密码" prop="password">
							<el-input type="text" v-model="loginForm.password" auto-complete="off" placeholder="请输入密码"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button class="btn-sub" type="primary" @click="submitForm('loginForm')">提交</el-button>
						</el-form-item>
					</el-form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { isvalidUsername } from 'utils/validate'

	export default {
		data() {
			const validateUsername = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入用户名'))
				} else if(!isvalidUsername(value)) {
					callback(new Error('请输入有效的用户名'))
				} else {
					callback()
				}
			}
			const validatePassword = (rule, value, callback) => {
				if(value === '') {
					callback(new Error('请输入密码'))
				} else if(value.length < 5) {
					callback(new Error('请输入有效的密码'))
				} else {
					callback()
				}
			}
			return {
				loginForm: {
					username: '',
					password: ''
				},
				loginRules: {
					username: [{
						trigger: 'blur',
						validator: validateUsername
					}],
					password: [{
						trigger: 'blur',
						validator: validatePassword
					}]
				}
			}
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
							this.getNavList(this.$store.getters.token)
						}).catch((error) => {
							console.log(error)
						})
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			getNavList(token) {
				this.$store.dispatch('GetUserNav', token).then(() => {
					this.$router.push({
						path: '/home'
					})
				}).catch((error) => {
					console.log(error)
				})
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style lang="less">
	.login-container {
		position: relative;
		min-width: 1000px;
		height: 100vh;
		background: linear-gradient(to right, #854CFF, #3E86FF);
		.login-inner{
			height: 100vh;background: url(../../assets/images/login/img_bg_login@1920.png) bottom center no-repeat;background-size: 1920px 422px;
			.pic{
				display:block;position: absolute;right: 60%;top:50%;transform:translateY(-50%);width: 421px;height: 462px;
			}
			.login-form{
				position: absolute;left: 50%;top: 50%;transform: translateY(-50%);
				.title img{display: block;width: 283px;margin-bottom: 30px;}
				.content{
					border-radius:2px;padding:32px 32px 8px;background: #ffffff;
					.el-form-item{margin-bottom: 24px;}
					label{height:12px;line-height:12px;font-size: 12px;margin-bottom:16px;color:rgba(22,32,51,0.40)}
					input{border: none;border-bottom: 1px solid #E0E0E0;padding:0;color: #162033;}
					.btn-sub{width: 100%;height: 48px;border:none;border-radius:24px;margin-top:70px;font-size: 16px;background: linear-gradient(to right, #7FAEFF, #006AFF);}
				}
			}
		}
	}
</style>