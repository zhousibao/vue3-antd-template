import { ObjectDirective } from 'vue'

export const permission: ObjectDirective  = {
    mounted(el: HTMLButtonElement, binding, vnode) {

        if (binding.value === undefined) return;
        // 

    },
}
