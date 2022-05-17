import Vue from 'vue';
import Vuex from 'vuex';
import signin from './modules/signin';
import signup from './modules/signup';
import surveys from './modules/surveys';
import feedback from './modules/feedback';
import dashboard from './modules/dashboard';
import storage from './modules/storage';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    signin,
    signup,
    surveys,
    feedback,
    dashboard,
    storage
  }
});