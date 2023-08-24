import {createRouter, createWebHistory} from 'vue-router'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/home.vue')
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/dashboard.vue')

      },
      {
        path: '/auth/login',
        name: 'auth',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/login.vue')
      }
    ]
  })
  
  export default router