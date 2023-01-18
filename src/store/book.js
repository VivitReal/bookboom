import api from '../api'

const state = {
    items: [],
};

const getters = {

};

const mutations = {
    SET_BOOKS(state, payload) {
        state.items = payload
    }
};

const actions = {
    axiosGetBooks: async ({commit}, params) => {
        const response = await api.getBooks(params)
        commit("SET_BOOKS", response.data.items)
    },
};

export default {
    state, getters, mutations, actions
}