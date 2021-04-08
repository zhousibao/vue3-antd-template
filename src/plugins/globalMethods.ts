import { App } from 'vue'

/**
 * 注册全局方法
 * @param app
 */
export function setupGlobalMethods(app: App) {
    console.log('GlobalMethods:app', app)
    // app.config.globalProperties.$message = message // 不推荐使用这种方式
}
