import Vue from 'vue';
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);
const state = {
    isLogin:false,
    token:"",
    student:{
        id:"",
        stu_id:"",
        stu_usr:"",
        stu_name:"",
        stu_college:"",
        stu_major:"",
    }
};


const store = new Vuex.Store({
    state: state,
    mutations: {
    },
    getters: {
        token: state => {
            return state.token
        },
        student: state =>{
            return state.student
        }
    },
    plugins: [createPersistedState()]
});

export default store
