import Mock from 'mockjs'
import loginAPI from './login'
import navList from './navList'

//登录相关
Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo)

//菜单权限
Mock.mock(/\/user\/navList\.*/, 'get', navList)

export default Mock