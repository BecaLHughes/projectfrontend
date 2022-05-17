import axios from '@/http';
import router from '@/router';

const state = {
    form: {
        first_name: null,
        last_name: null,
        email: null,
        username: null,
        password: null,
        confirmpassword: null,
        error: null
    }
};

const getters = {};

const actions = {
  async signup({ dispatch }, user) {
    try {
      const res = await axios({
        method: 'POST',
        url: '/users/',
        data: { 
          ...state.form,
          username: state.form.email 
        }
      });

      if(res.status == 200) {
        await dispatch('storage/save', {
          prop: 'token',
          value: res.data.token
        }, { root: true });
        router.push({ path: '/' });
      }
    } catch ({data}) {
      commit('updateState', { prop: 'error', value: data.message });
    }
  }
};

const mutations = {
  updateState(state, { prop, value }) {
    state = {
      ...state,
      [prop]: value
    };
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};
