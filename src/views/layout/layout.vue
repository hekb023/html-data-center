<template>
	<div class="app-wrapper">
		<div class="main-container">
      <tags-view></tags-view>
      <navbar></navbar>
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
		computed: {
//			sidebar() {
//				return this.$store.state.app.sidebar
//			}
		}
	}
</script>

<style>

</style>