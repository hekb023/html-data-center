import { loginByUsername, logout, getUserInfo, getNavList } from 'api/login'
import Cookies from 'js-cookie'

const user = {
	state: {
		navList: '',
		token: '',
		name: '',
		avatar: '',
		roles: '',
	},

	mutations: {
		SET_NAV: (state, data) => {
			state.navList = data
		},
		SET_TOKEN: (state, token) => {
			state.token = token
		},
		SET_NAME: (state, name) => {
			state.name = name
		},
		SET_AVATAR: (state, avatar) => {
			state.avatar = avatar
		},
		SET_ROLES: (state, roles) => {
			state.roles = roles
		}
	},

	actions: {
		// 用户名登录
		LoginByUsername({
			commit
		}, userInfo) {
			const username = userInfo.username.trim()
			return new Promise((resolve, reject) => {
				loginByUsername(username, userInfo.password).then(response => {
					const data = response.data
					commit('SET_TOKEN', data.token)
					Cookies.set('token', data.token)
					resolve()
				}).catch(error => {
					reject(error)
				})
			})
		},

		// 获取用户菜单权限
		GetUserNav({
			commit
		}, token) {
			return new Promise((resolve, reject) => {
				getNavList(token).then(response => {
					const data = response.data
					commit('SET_NAV', data)
					resolve()
				}).catch(error => {
					reject(error)
				})
			})
		},

		// 获取用户信息
		GetUserInfo({
			commit,
			state
		}, token) {
			return new Promise((resolve, reject) => {
				getUserInfo(token).then(response => {
					if(!response.data) { // 由于mockjs 不支持自定义状态码只能这样hack
						reject('error')
					}
					const data = response.data
					commit('SET_ROLES', data.roles)
					commit('SET_NAME', data.name)
					commit('SET_AVATAR', data.avatar)
					resolve(response)
				}).catch(error => {
					reject(error)
				})
			})
		},

		// 登出
		LogOut({
			commit,
			state
		}) {
			return new Promise((resolve, reject) => {
				logout(state.token).then(() => {
					commit('SET_TOKEN', '')
					commit('SET_ROLES', [])
					Cookies.remove('token')
					resolve()
				}).catch(error => {
					reject(error)
				})
			})
		},

		// 动态修改权限
		ChangeRoles({
			commit
		}, role) {
			return new Promise(resolve => {
				commit('SET_TOKEN', role)
				Cookies.set('token', role)
				getUserInfo(role).then(response => {
					const data = response.data
					commit('SET_ROLES', data.roles)
					commit('SET_NAME', data.name)
					commit('SET_AVATAR', data.avatar)
					resolve()
				})
			})
		}
	}
}

export default user