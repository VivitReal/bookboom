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
    axiosGetBooks: async ({ commit }, params) => {
        return new Promise(() => {
            window.axios
            .get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${params.keyword}&orderBy=${params.orderBy}&maxResults=${params.maxResults}`)
            .then( response => {
                console.log(response.data.items)
                commit("SET_BOOKS", response.data.items)
            })
        })
    },
};

export default {
    state, getters, mutations, actions
}