import axios from '@/http';
import router from '@/router';

const state = {
    picked: 0,
    title: '',
    radioLabels: ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
    questions: [],
    error: null
}

const getters = {};

const actions = {
    async getSurvey({ state, commit }) {
        try {
            const res = await axios({
                method: 'GET',
                url: '/surveys/1/',
                data: state.questions
            });

            if (res.status == 200) {
                commit('updateState', { prop: 'questions', value: res.data.questions });
                commit('updateState', { prop: 'title', value: res.data.title });
            }
        } catch ({ data }) {
            console.log(data)
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
