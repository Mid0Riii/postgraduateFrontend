import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter);
//cv以下代码解决路由地址重复的报错问题(一劳永逸)
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};
const routes = [
    {
        path: '/',
        name: 'index',
        components: {
            default: () => import(/* webpackChunkName: "index" */'../components/Homepage.vue')
        },
        children: [
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
    },
    {
        path: '/login',
        name: 'login',
        components: {
            default: () => import(/* webpackChunkName: "login" */'../components/login.vue')
        },
    },
    {
        path: '/mobile',
        name: 'mobile',
        components: {
            default: () => import(/* webpackChunkName: "mobileindex" */ '../components/mobile/MobileRoot.vue')
        },
        children: [
            {
                path: 'index',
                name: 'mindex',
                components: {
                    default: () => import(/* webpackChunkName: "mobile" */ '../components/mobile/MobileIndex.vue')
                }
            },
            {
                path: 'announcement',
                name: 'mannouncement',
                components: {
                    default: () => import(/* webpackChunkName: "mannouncement" */ '../components/mobile/MobileAnnRoot.vue')
                },
                children: [
                    {
                        path: '',
                        name: 'mlist',
                        //TODO 为什么不能懒加载
                        component: require('@/components/mobile/MobileAnnouncement').default
                    },
                    {
                        path: 'anninfo',
                        name: 'manninfo',
                        component: require('@/components/mobile/MobileAnnInfo').default
                    }
                ]
            },
            {
                path: 'info',
                name: 'minfo',
                components: {
                    default: () => import(/* webpackChunkName: "info" */ '../components/mobile/MobileInfo.vue')
                }
            },
            {
                path: 'addressbook',
                name: 'maddressbook',
                components: {
                    default: () => import(/* webpackChunkName: "info" */ '../components/mobile/MobileAddressbook.vue')
                }
            },
            {
                path: 'score',
                name: 'mscore',
                components: {
                    default: () => import(/* webpackChunkName: "info" */ '../components/mobile/MobileScore.vue')
                }
            },
            {
                path:'depart',
                name:'mdepart',
                components:{
                    default:()=>import(/* webpackChunkName: "info" */ '../components/mobile/MobileDeparture.vue')
                }
            }
        ]
    }
];

const router = new VueRouter({
    routes
});

export default router
