import request from 'utils/request'

export function loginByUsername(userInfo) {
  const data = {
    username:userInfo.username,
    password:userInfo.password
  }
  return request({
    url: '/login/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function getNavList(token) {
	return request({
    url: '/user/navList',
    method: 'get',
    params: { token }
  })
}
