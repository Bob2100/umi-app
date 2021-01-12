export default {
  antd: {},
  routes: [
    { path: '/', component: './index' },//路径相对于pages
    {
      path: '/about',
      component: './about',
      wrappers: ['@/wrappers/auth']
    }
    ,
    {
      path: '/users',
      component: './users/_layout',
      routes: [
        { path: '/users/', component: './users/index' },
        { path: '/users/:id', component: './users/[id]' }
      ]
    },
    { path: '/login', component: './login' },
    { component: './notfound' }
  ]
}