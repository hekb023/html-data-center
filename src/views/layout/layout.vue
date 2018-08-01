<template>
	<div class="app-wrapper">
		<div class="main-container">
      <tags-view></tags-view>
      <navbar :nav-list="navList"></navbar>
      <app-main></app-main>
    </div>
	</div>
</template>

<script>
	import { TagsView, Navbar, AppMain } from './components'

	export default {
		name: 'layout',
		components: {
			TagsView,
			Navbar,
			AppMain
		},
		data() {
    		return {
    			navList: []
    		}
    	},
		methods: {
			getNavBar(){
				if(this.$store.getters.navList){
					this.navList = this.$store.getters.navList.data
				}else{
					this.$store.dispatch('GetUserNav', 'admin').then((data) => {
						this.navList = this.$store.getters.navList.data
					}).catch((error) => {
						console.log(error)
					})
				}
			}
		},
		mounted(){
		    this.getNavBar();
	    }
	}
</script>

<style>

</style>