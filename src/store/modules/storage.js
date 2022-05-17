
function initialState() {
  return {
    token: null
  };
}

const state = initialState();

const getters = {};

const actions = {
  async initialiseStore({ commit }) {
    const store = localStorage.getItem('storage');

    if (store) {
      commit('storageSet', JSON.parse(store));
      return JSON.parse(store)
    }

    commit('storageSet', initialState());
    return initialState();
  },
  async save({ commit }, { prop, value }) {
    console.log({ prop, value });
    commit('storageUpdate', { prop, value });
  },
  async reset({ commit }) {
    commit('storageReset');
  }
};

const mutations = {
  storageSet(state, store) {
    state = Object.assign(state, store);
  },
  storageUpdate(state, { prop, value }) {

    state = Object.assign(state, { [prop]: value });
    localStorage.setItem('storage', JSON.stringify(state));
  },
  // storageUpdate(state) {

  //   state = Object.assign(state, initialState());
  //   localStorage.setItem('storage', JSON.stringify({}));
  // },
  storageReset(state) {
    state = Object.assign(state, initialState());
    
    localStorage.setItem('storage', JSON.stringify({}));
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
