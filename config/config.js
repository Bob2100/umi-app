export default {
  routes: [
    { path: '/', component: './index' },//路径相对于pages
    {
      path: '/users',
      component: './users/_layout',
      routes: [
        { path: '/users/', component: './users/index' },
        { path: '/users/:id', component: './users/[id]' }
      ]
    }
  ]
}