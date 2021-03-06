import axios from '@/http';
import router from '@/router';

const state = {
  username: '',
  password: '',
  error: null
};

const getters = {};

const actions = {
  async signUserIn({ state, dispatch, commit }) {
    try {
      const res = await axios({
        method: 'POST',
        url: '/users/login/',
        data: state
      });

      if(res.status == 200) {
        console.log(res);
        await dispatch('storage/save', {
          prop: 'token',
          value: res.data.token
        }, { root: true });
        router.push({ path: '/' });
      }
    } catch ({ data }) {
      console.log(data)
      commit('updateState', { prop: 'error', value: data.message });
    }
  },
  async signUserOut({ dispatch }) {
    await dispatch('storage/reset', null, { root: true });
    router.push({ name: 'signin' });

    setTimeout(() => {
      location.reload();
    }, 500)
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
