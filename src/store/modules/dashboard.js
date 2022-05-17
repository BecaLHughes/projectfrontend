import axios from '@/http';
import router from '@/router';

const state = {
  history: []
};

const getters = {
  graphLabels: (state) => {
    return state.history.map(item => formatDate(item.submitted));
  },
  graphData: (state) => {
    return state.history.map(item => item.score);
  },
  formattedHistory: (state) => {
    return state.history.map(item => ({
      ...item,
      submitted: formatDate(item.submitted)
    }))
  }
};

const actions = {
  async getScoreHistory({ commit }) {
    try {
  
      const res = await axios({
        method: 'GET',
        url: '/surveys/1/responses/',
      });

      commit('updateState', { prop: 'history', value: res.data });

    } catch (error) {

    }
  }
};

const mutations = {
  updateState(state, { prop, value }) {
    state = Object.assign(state, {
      [prop]: value
    });
  }
};

function formatDate(date) {
  const dateObject = new Date(date);
  const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dayNumber = dateObject.getDate();
  const day = nth(dayNumber);
  const month = monthLabels[dateObject.getMonth()];
  const year = dateObject.getFullYear();

  return `${day} ${month} ${year}`;
}

function nth(d) {
  if (d > 3 && d < 21) return `${d}th`;
  switch (d % 10) {
    case 1:  return `${d}st`;
    case 2:  return `${d}nd`;
    case 3:  return `${d}rd`;
    default: return `${d}th`;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
};
