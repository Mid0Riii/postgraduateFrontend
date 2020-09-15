import Vue from 'vue';
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);
const state = {
    isLogin:false,
    token:"",

};

const store = new Vuex.Store({
    state: state,
    mutations: {
    },
    getters: {
        token: state => {
            return state.token
        }
    },
    plugins: [createPersistedState()]
});

export default store
