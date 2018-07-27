const Layout = () => import(/* webpackChunkName: 'index' */ 'src/views/layout/layout')

const staticRouter = [{
	path: '/',
	redirect: '/login'
}, {
	path: '/login',
	name: 'login',
	component: resolve => require.ensure([], () => resolve(require('src/views/login/index')), 'login')
}, {
	path: '/home',
	name: 'home',
	component: Layout,
	children: [{
		path: '',
		component: resolve => require.ensure([], () => resolve(require('src/views/home/index')), 'home')
	}]
}]

export default staticRouter