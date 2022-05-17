import axios from '@/http';
import router from '@/router';

const state = {
    picked:0 ,
    radioLabels: ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
    questions:[
        {
            question: '',
            type: '',
            answer: 50
        }
    ],
  }

const getters = {};

const actions = {
  async getSurvey({ state, dispatch, commit }) {
    try {
      const res = await axios({
        method: 'GET',
        url: '/surveys/',
        data: state.questions
      });

      if(res.status == 200) {
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
  async submitSurvey({ dispatch }) {
    await dispatch('storage/reset', null, { root: true });
    router.push({ name: 'feedback' });
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
