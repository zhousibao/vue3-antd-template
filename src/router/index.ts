import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { App } from "vue";
import { createRouterGuards } from './routerGuards' // 路由守卫

// 菜单模块路由
import common from "./common";
// 非登录路由
import shared from './shared'
// 错误 404 路由
import { errorRoutes, notFound } from './error'

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Layout',
        redirect: '/home',
        component: () => import(/* webpackChunkName: "layout" */ '@/layout/index.vue'),
        meta: {
            title: '首页',
        },
        children: [
            ...common,
        ],
    },
    ...shared,
    notFound,
    errorRoutes,
]

//
const router = createRouter({
    // process.env.BASE_URL
    history: createWebHistory(''),
    routes,
})

// 
export function setupRouter(app: App) {
    app.use(router)
    // 创建路由守卫
    createRouterGuards(router)
}
export default router
