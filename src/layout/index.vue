<template>
  <a-layout class="layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
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
import  { defineComponent, ref, h, computed } from 'vue'
import { Layout, message } from 'ant-design-vue'
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

    const testMsg = () => {
      message.success(h('span', '啥子'), 2)
    }

    const asiderWidth = computed(() => collapsed.value ? '80px' : '256px')

    return {
      collapsed,
      testMsg,
      asiderWidth,
    }
  },
})

</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  overflow: hidden;
  height: 100vh;

  .ant-layout {
    overflow: hidden;
  }

  .layout-content {
    flex: none;
  }
}
</style>
