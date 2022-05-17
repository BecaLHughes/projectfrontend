import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import SignIn from '@/views/SignIn.vue'
import SignUp from '@/views/SignUp.vue'
import Survey from '@/views/Survey.vue'
import Feedback from '@/views/Feedback.vue'
import ForgotPassword from '@/views/ForgotPassword.vue'
import Profile from '@/views/Profile.vue'
import Store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    meta: {requiresAuth: true} 
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
    component: Survey,
    meta: {requiresAuth: true} 
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: Feedback,
    meta: {requiresAuth: true} 
  },
  {
    path: '/forgot-password',
    name: 'forgotpassword',
    component: ForgotPassword
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {requiresAuth: true} 
  },
  { path: '/', redirect: '/signin' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  const { token } = await Store.dispatch('storage/initialiseStore');

  const ignore = [
    'signin',
    'signup',
    'forgotpassword'
  ];

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!token && ignore.indexOf(to.name) < 0) {
      Store.dispatch('signUserOut');
    }
  }

  if (to.name == 'signin' && token) {
    return next({ path: '/' });
  }

  next();
});

export default router
