import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter);
//cv以下代码解决路由地址重复的报错问题(一劳永逸)
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};
const routes=[
    {
        path:'/',
        name:'index',
        components:{
            default:()=>import(/* webpackChunkName: "index" */'../components/Homepage.vue')
        },
        children:[
            {
                path: '',
                name: 'cube',
                components: {
                    default: () => import(/* webpackChunkName: "home" */ '../components/PlaceholderCube.vue')
                }
            },
            {
                path: 'announcement',
                name: 'announcement',
                components: {
                    default: () => import(/* webpackChunkName: "announcement" */ '../components/Announcement.vue')
                }
            },
            {
                path: 'info',
                name: 'info',
                components: {
                    default: () => import(/* webpackChunkName: "user" */ '../components/MyInfo.vue')
                }
            },
            {
                path: 'score',
                name: 'score',
                components: {
                    default: () => import(/* webpackChunkName: "Score" */ '../components/Score.vue')
                }
            },
            {
                path: 'scholarship',
                name: 'scholarship',
                components: {
                    default: () => import(/* webpackChunkName: "Scholarship" */ '../components/Scholarship.vue')
                }
            },
            {
                path: 'departure',
                name: 'departure',
                components: {
                    default: () => import(/* webpackChunkName: "Departure" */ '../components/Departure.vue')
                }
            },
            {
                path: 'addressbook',
                name: 'addressbook',
                components: {
                    default: () => import(/* webpackChunkName: "addressbook" */ '../components/AddressBook.vue')
                }
            },
            {
                path: 'poverty',
                name: 'poverty',
                components: {
                    default: () => import(/* webpackChunkName: "poverty" */ '../components/Poverty.vue')
                }
            },
            {
                path: 'pwd',
                name: 'pwd',
                components: {
                    default: () => import(/* webpackChunkName: "pwd" */ '../components/ChangePassword.vue')
                }
            },
        ]
    },{
        path: '/login',
        name:'login',
        components:{
            default:()=>import(/* webpackChunkName: "login" */'../components/login.vue')
        },
    }
];

const router = new VueRouter({
    routes
});

export default router
