import Mock from 'mockjs'
import LoginAPI from './login'

//登录相关
Mock.mock(/\/login\/login/, 'post', LoginAPI.loginByUsername)
Mock.mock(/\/login\/logout/, 'post', LoginAPI.logout)
Mock.mock(/\/user\/info\.*/, 'get', LoginAPI.getUserInfo)

export default Mock