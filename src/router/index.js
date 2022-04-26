import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/components/Dashboard.vue'
import SignIn from '@/components/SignIn.vue'
import SignUp from '@/components/SignUp.vue'
import Survey from '@/components/Survey.vue'
import Feedback from '@/components/Feedback.vue'
import ForgotPassword from '@/components/ForgotPassword.vue'
import Profile from '@/components/Profile.vue'
import EditProfile from '@/components/EditProfile.vue'

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
    {
      path: '/feedback',
      name: 'feedback',
      component: Feedback
    },
    {
      path: '/forgotpassword',
      name: 'forgotpassword',
      component: ForgotPassword
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/editprofile',
      name: 'editprofile',
      component: EditProfile
    },
    { path: '/', redirect: '/signin' }
  ]
})

export default router
