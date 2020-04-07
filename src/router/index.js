import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home'),
    redirect: '/welcome',
    children: [
      { path: '/welcome', name: 'welcome', component: () => import('@/views/welcome') },
      { path: '/article-one', name: 'article-one', component: () => import('@/views/article-one') },
      { path: '/article-two', name: 'article-two', component: () => import('@/views/article-two') },
      { path: '/addArticle', name: 'addArticle', component: () => import('@/views/addArticle') }
    ]
  }

]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.path !== '/login') {
//     return next('/login')
//   }
//   next()
// })
export default router
