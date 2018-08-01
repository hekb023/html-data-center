const getters = {
  navList: state => state.user.navList,
  token: state => state.user.token,
  status: state => state.user.status,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
}
export default getters