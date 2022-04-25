import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/components/Dashboard.vue'
import SignIn from '@/components/SignIn.vue'
import SignUp from '@/components/SignUp.vue'
import Survey from '@/components/Survey.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/survey',
      name: 'survey',
      component: Survey
    },
    { path: '/', redirect: '/signin' }
  ]
})

export default router
