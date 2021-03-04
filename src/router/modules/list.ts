
import { RouteRecordRaw } from 'vue-router'
const List = () => import(/* webpackChunkName: "home" */ '@/views/list/index.vue')

const routeName = 'list'
const routes: Array<RouteRecordRaw> = [{
    path: '/list',
    name: routeName,
    component: List,
    meta: {
        title: '列表',
        icon: 'icon-yingyongzhongxin',
    },
}]

export default routes
