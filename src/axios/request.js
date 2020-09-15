import axios from "axios";
import store from '../store'
import router from '../router'

const service = axios.create({
    baseURL: process.env.VUE_APP_HOST,  // api的base_url
    timeout: 5000  // 请求超时时间
});
service.interceptors.request.use(   //请求拦截器
    config => {
        if (store.getters.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = `JWT ${store.getters.token}`;
            // console.log(store.getters.token)
        }
        // console.log(store.getters.token)
        return config;
    },
    err => {
        return Promise.reject(err);
    });

service.interceptors.response.use(  //响应拦截器
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    router.replace({
                        path: '/',
                        // 返回 401 清除token信息并跳转到登录页面
                    })
            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    });

export default service;
