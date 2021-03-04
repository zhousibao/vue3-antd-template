import { RouteRecordRaw } from 'vue-router'

/**
 * 不需要授权就可以访问的页面
 */
const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
    },
    {
        path: '/icons',
        name: 'icons',
        component: () => import(/* webpackChunkName: "icons" */ '@/views/icons/index.vue'),
    },
]

export default routes
