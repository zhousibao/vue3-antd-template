<template>
  <a-layout class="layout">
    <a-layout-sider 
      v-model:collapsed="collapsed" 
      :trigger="null" 
      collapsible 
      :width="asiderWidth"
    >
      <logo :collapsed="collapsed"/>
      <aside-menu :collapsed="collapsed"/>
    </a-layout-sider>

    <a-layout>
      <page-header v-model:collapsed="collapsed"/>
      <a-layout-content class="layout-content">
        <!-- 路由 -->
        <router-transition/>
        
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import  { defineComponent, ref, computed } from 'vue'
import { Layout } from 'ant-design-vue'
import Logo from './logo/index.vue'
import AsideMenu from './menu/index.vue'
import PageHeader from './header/index.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    PageHeader,
    AsideMenu,
    Logo,
    [Layout.name]: Layout,
    [Layout.Content.name]: Layout.Content,
    [Layout.Sider.name]: Layout.Sider,
  },
  setup() {
    const collapsed = ref<boolean>(false)

    const asiderWidth = computed(() => collapsed.value ? '70px' : '248px')

    return {
      collapsed,
      asiderWidth,
    }
  },
})

</script>

<style lang="scss" scoped>
.layout {
  overflow: hidden;
  height: 100vh;

  .layout-content {
    height: auto;
    overflow: auto;
  }
}
</style>
