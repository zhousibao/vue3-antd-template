
import { RouteRecordRaw } from 'vue-router'
const Home = () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue')

const routeName = 'home'
const routes: Array<RouteRecordRaw> = [{
    path: '/home',
    name: routeName,
    component: Home,
    meta: {
        title: '首页',
        icon: 'icon-shouye',
    },
}]

export default routes
