import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from 'views/Home.vue'

Vue.use(VueRouter)

//路由懒加载
// function lazyLoad(path, component) {
//   return () => import(/* webpackChunkName: "[request]" */ `${path}/${component}`)
// }

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ 'views/Home.vue')
    // component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: () =>
      import(/* webpackChunkName: "Test" */ 'components/Test.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
