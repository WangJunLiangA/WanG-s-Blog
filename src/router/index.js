import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: "/",
    redirect: "/mainPage"
  },
  {
    path: '/mainPage',
    name: 'mainPage',
    component: () => import('@/views/mainPage.vue'),
    children: [{
      path: '',
      redirect: "/home"
    }, {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home.vue'),
    }, {
      path: '/book',
      name: 'book',
      component: () => import('@/views/book.vue'),
    }, {
      path: '/diary',
      name: 'diary',
      component: () => import('@/views/diary.vue'),
    }, {
      path: '/journey',
      name: 'journey',
      component: () => import('@/views/journey.vue'),
    }, {
      path: '/project',
      name: 'project',
      component: () => import('@/views/project.vue'),
    }, {
      path: '/technology',
      name: 'technology',
      component: () => import('@/views/technology.vue'),
    }]
  },{
    name: 'tellMe',
    path: "/tellMe",
    component: () => import('@/views/tellMe.vue'),
  },
  /*{
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
  }*/
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router