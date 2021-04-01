<template>
  <a-menu
    v-model:open-keys="openKeys"
    v-model:selected-keys="selectedKeys"
    mode="inline"
    theme="dark"
    :inline-collapsed="collapsed"
    @click="clickMenuItem"
  >
    <template v-for="item in menus" :key="item.name">
      <menu-item :menu-info="item"/>
    </template>
  </a-menu>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, watch, toRefs } from 'vue'
import { useRoute, useRouter } from "vue-router";
import { routes } from "@/router";
import MenuItem from './menu-item.vue'

export default defineComponent({
  components: {
    MenuItem,
  },
  props: {
    collapsed: { // 侧边栏菜单是否收起
      type: Boolean,
    },
  },
  setup(props) {
    // 当前路由
    const route = useRoute()
    const router = useRouter()
    // console.log('route', route)
    // console.log('router', router)

    // 获取当前打开的子菜单
    const getOpenKeys = () => [route.matched[1]?.name]

    const state = reactive({
      openKeys: getOpenKeys(),
      selectedKeys: [route.name],
    })

    const menus = computed(() => routes.find(item => item.name === 'Layout')?.children)

    // 监听菜单收缩状态
    watch(() => props.collapsed, (newVal) => {
      state.openKeys = newVal ? [] : getOpenKeys()
      state.selectedKeys = [route.name]
    })

    // 跟随页面路由变化，切换菜单选中状态
    watch(() => route.fullPath, () => {
      if (route.name === 'login' || props.collapsed) return
      state.openKeys = getOpenKeys()
      state.selectedKeys = [route.name]
    })

    // 点击菜单
    const clickMenuItem = ({ key }) => {
      router.push({ name: key })
    }

    return {
      ...toRefs(state),
      menus,
      clickMenuItem,
    }
  },
})
</script>
<style scoped>

</style>