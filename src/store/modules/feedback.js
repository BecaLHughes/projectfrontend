import axios from '@/http';
import router from '@/router';

function initialState() {
  return {
    score: {
      interval: null,
      value: 0,
    },
    feedback: null
  };
}

const state = initialState();

const getters = {};

const actions = {
  animateScore({ state, commit, dispatch }, score) {
    state.score.interval = setInterval(() => {
      if (state.score.value >= score) {
        return dispatch('clearScoreInterval');
      }
      commit('incrementScore');
    }, 40);
  },
  clearScoreInterval({ state }) {
    clearInterval(state.score.interval);
  },
  async getFeedback({ dispatch, commit }, questions) {
    try {
      const data = questions.map(item => ({
        question: item.order,
        value: item.answer
      }));

      const res = await axios({
        method: 'POST',
        url: '/surveys/1/responses/',
        data: data
      });

      commit('updateState', { prop: 'value', value: res.data.score });
      commit('updateState', { prop: 'feedback', value: res.data.feedback });
      dispatch('animateScore', res.data.score);

      router.push({ name: 'feedback' });
    } catch (error) {

    }
  }
};

const mutations = {
  updateState(state, { prop, value }) {
    state = Object.assign(state, {
      [prop]: value
    });
  },
  incrementScore(state) {
    state.score.value += 1;
  },
  resetScoreState(state) {
    clearInterval(state.score.interval);
    state = Object.assign(state, initialState());
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
