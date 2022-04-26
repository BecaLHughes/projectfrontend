import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import SignIn from '@/views/SignIn.vue'
import SignUp from '@/views/SignUp.vue'
import Survey from '@/views/Survey.vue'
import Feedback from '@/views/Feedback.vue'
import ForgotPassword from '@/views/ForgotPassword.vue'
import Profile from '@/views/Profile.vue'
import EditProfile from '@/views/EditProfile.vue'

Vue.use(VueRouter)

const routes = [
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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
