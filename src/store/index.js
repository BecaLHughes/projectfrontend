import Vue from 'vue';
import Vuex from 'vuex';
import signin from './modules/signin';
import signup from './modules/signup';
import surveys from './modules/surveys';
import storage from './modules/storage';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    signin,
    signup,
    surveys,
    storage
  }
});