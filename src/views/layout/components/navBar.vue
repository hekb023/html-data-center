<template>
  <div class="navbar">
  	<div class="logo">
  		<img src="../../../assets/images/login/logo_sidebar.png" alt="" />
  	</div>
  	
    <el-menu class="el-menu" :default-active="$route.path" router>
      <template v-for="(item, index) in navList">
        <template v-if="!item.child">
          <el-menu-item :index="item.path">
            <i :class="item.icon" size="16"></i>
            <span class="sidemenu-text">{{ item.name }}</span>
          </el-menu-item>
        </template>
        <template v-else>
          <el-submenu :index="item.path">
            <template slot="title">
              <i :class="item.icon" size="16"></i>
              <span class="sidemenu-text">{{ item.name }}</span>
            </template>
            <template v-for="(subItem,i) in item.child">
              <el-menu-item :index="subItem.path">
                <i class="sub-addressbook" size="16"></i>
                <span class="sidemenu-text">{{ subItem.name }}</span>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
      </template>
    </el-menu>
  	
  </div>
</template>

<script>
export default {
  name: 'navBar',
  props: [
    'navList'
  ]
}
</script>

<style lang="less">
	.navbar{
		position: fixed;top:0;left:0;bottom:0;width: 232px;background: #001037;
		.logo{
			width:100%;height:64px;line-height:64px;text-align:center;background: #0A46B8;
			img{display:inline-block;width: 107px;vertical-align:middle;}
		}
		.el-menu{
			border: none; background: none;
			.el-menu-item, .el-submenu__title{color: #FFFFFF; opacity: 0.6;}
		}
	}
</style>