import Vue from 'vue'
import Router from 'vue-router'
import store from 'store'
import Cookies from 'js-cookie'
import staticRouter from './staticRouters'

Vue.use(Router)

const router = new Router({
	mode: 'hash',
	routes: staticRouter
})

// 免登录白名单页面
const whiteList = [
	'/login',
]

// 路由跳转前验证
router.beforeEach((to, from, next) => {
	// 判断用户是否处于登录状态
	if(store.getters.token || Cookies.get('token')) {
		// 如果当前处于登录状态，并且跳转地址为login，则自动跳回系统首页
		// 这种情况出现在手动修改地址栏地址时
		if(to.path === '/login') {
			next({
				path: "/home",
				replace: true
			})
		} else if(to.path.indexOf("/error") >= 0) {
			next()
		} else {
			if(store.getters.name) {
				next()
			} else {
				store.dispatch('GetUserInfo', store.getters.token || Cookies.get('token')).then(() => {
					next()
				}).catch((error) => {
					console.log(error)
				})
			}
		}
	} else {
		// 如果是免登陆的页面则直接进入，否则跳转到登录页面
		if(whiteList.indexOf(to.path) >= 0) {
			console.log('该页面无需登录即可访问')
			next()
		} else {
			console.warn('当前未处于登录状态，请登录')
			next({
				path: "/login",
				replace: true
			})
			// 如果store中有token，同时Cookie中没有登录状态
			if(store.getters.token || Cookies.get('token')) {
				Message({
					message: '登录超时，请重新登录'
				})
			}
		}
	}
})

export default router