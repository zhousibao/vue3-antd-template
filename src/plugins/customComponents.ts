import { App } from 'vue'
import SvgIcon from '@/components/svg-icon/index.vue'
import Iconfont from '@/components/iconfont'
import RouterTransition from '@/components/router-transition/index.vue'

/**
 * 全局注册自定义组件
 * @param app
 */
export function setupCustomComponents(app: App) {
    app.component(SvgIcon.name, SvgIcon)
    .component(Iconfont.name, Iconfont)
    .component(RouterTransition.name, RouterTransition)
}
