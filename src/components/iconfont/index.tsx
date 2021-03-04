import { defineComponent, PropType, unref, computed } from 'vue'
import { createFromIconfontCN } from '@ant-design/icons-vue';
import { isString } from "@/utils/is";

let MyIconFont = createFromIconfontCN({
    scriptUrl: '',
})

export default defineComponent({
    name: 'icon-font',
    props: {
        type: {
            type: String as PropType<string>,
            default: '',
        },
        color: {
            type: String as PropType<string>,
            default: 'unset',
        },
        size: {
            type: [Number, String] as PropType<number | string>,
            default: 14,
        },
        scriptUrl: { // 阿里图库字体图标路径
            type: String as PropType<string>,
            default: '',
        },
    },
    setup(props, { attrs }) {

        // 如果外部传进来字体图标路径，则覆盖默认的
        if (props.scriptUrl) {
            MyIconFont = createFromIconfontCN({
                scriptUrl: props.scriptUrl,
            })
        }

        const wrapStyleRef = computed(() => {
            const { color, size } = props

            const fs = isString(size) ? parseFloat(size) : size

            return {
                color,
                fontSize: `${fs}px`,
            }
        })


        return () => (
            <MyIconFont type={props.type || ''} {...attrs} style={unref(wrapStyleRef)}/>
        )
    },
})
