import axios from '@/http';
import router from '@/router';

const state = {
  first_name: null,
  last_name: null,
  email: null,
  password: null,
  error: null
};

const getters = {};

const actions = {
  async getProfileDetails({ commit }, user) {
    try {
      const res = await axios({
        method: 'GET',
        url: '/users/profile/?',
      });
      
      if (res.status == 200) {
        commit('updateState', { prop: 'first_name', value: res.data.first_name });
        commit('updateState', { prop: 'last_name', value: res.data.last_name });
        commit('updateState', { prop: 'email', value: res.data.email });
        commit('updateState', { prop: 'password', value: null });
        
      }
    } catch ({data}) {
      commit('updateState', { prop: 'error', value: data.message });
    }
  },

  async updateProfileDetails({ commit }, user) {
    try {
      const res = await axios({
        method: 'PUT',
        url: '/users/profile/',
        data: user
      });

      return res.status == 200;
    } catch ({data}) {
      commit('updateState', { prop: 'error', value: data.message });
      return false;
    }
  },

  async deleteProfile({ dispatch }, user) {
    try {
      const res = await axios({
        method: 'DELETE',
        url: '/users/profile/',
      });
      if (res.status == 204) {
          dispatch('signUserOut');
      }
    } catch ({data}) {
      commit('updateState', { prop: 'error', value: data.message });
      
    }
  }
};

const mutations = {
  updateState(state, { prop, value }) {
    state = Object.assign(state, {
        [prop]: value
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};