<template>
  <div class="navbar">
  	<div class="logo">
  		<img src="../../../assets/images/login/logo_sidebar.png" alt="" />
  	</div>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
}
</script>

<style lang="less">
	.navbar{
		position: fixed;top:0;left:0;bottom:0;width: 232px;background: #001037;
		.logo{
			width:100%;height:64px;line-height:64px;text-align:center;background: #0A46B8;
			img{display:inline-block;width: 107px;vertical-align:middle;}
		}
	}
</style>