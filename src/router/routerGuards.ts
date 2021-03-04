import NProgress from 'nprogress' // progress bar
import 'nprogress/css/nprogress.css' // 进度条样式

import { Router } from 'vue-router'

NProgress.configure({ showSpinner: false }) // NProgress Configuration


// 全局路由守卫
export function createRouterGuards(router: Router) {
    router.beforeEach((to, from, next) => {
        NProgress.start() // start progress bar
        next()
    })

    router.afterEach((to, from, failure) => {
        NProgress.done() // finish progress bar
    })

    router.onError(error => {
        console.log(error, '路由错误')
    })

}
