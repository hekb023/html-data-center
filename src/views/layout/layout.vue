<template>
  <div class="app-wrapper">
    <h2>布局页面</h2>
  </div>
</template>

<script>
import {getNavList} from 'api/login'
export default {
	data() {
		return{
      loginForm: {
        username: '',
        password: ''
      }
    }
	},
	methods: {
	},
	created: function () {
		getNavList("admin").then(res => {
			console.log(res);
		})
	}
}
</script>

<style>
</style>
