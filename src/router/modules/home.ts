
import { RouteRecordRaw } from 'vue-router'

const routeName = 'home'
const routes: Array<RouteRecordRaw> = [{
    path: '/home',
    name: routeName,
    component: () => import(/* webpackChunkName: "dashboard-welcome" */ '@/views/home/index.vue'),
    meta: {
        title: '首页',
        icon: 'icon-shouye',
    },
}]

export default routes
