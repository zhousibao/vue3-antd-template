<template>
  <a-layout-header class="layout-header">
    <div class="left-options">
      <span @click="() => $emit('update:collapsed', !collapsed)" class="menu-fold">
        <component :is="collapsed ? 'menu-unfold-outlined' : 'menu-fold-outlined'" />
    </span>
      <a-breadcrumb>
        <template v-for="routeItem in route.matched" :key="routeItem.name">
          <a-breadcrumb-item>
            <a>{{ routeItem.meta.title }}</a>
            <template v-slot:overlay>
              <a-menu v-if="routeItem.children.length">
                <template v-for="childItem in routeItem.children">
                  <a-menu-item v-if="!childItem.meta.hidden" :key="childItem.name">
                    <router-link :to="{name: childItem.name}">
                      {{ childItem.meta.title }}
                    </router-link>
                  </a-menu-item>
                </template>
              </a-menu>
            </template>
          </a-breadcrumb-item>
        </template>
      </a-breadcrumb>
    </div>
    <div class="right-options">
      
      <!-- 切换全屏 -->
      <component :is="fullscreenIcon" @click="toggleFullScreen" />

      <div>{{ userNname }}</div>
      <a-dropdown>
        <a-avatar src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"/>
        <template v-slot:overlay>
          <a-menu>
            <a-menu-item>
              <a @click.prevent="logout"><poweroff-outlined /> 退出登录</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </a-layout-header>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, createVNode } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { message, Modal } from 'ant-design-vue'
import { useStore } from '@/store'
import {
  // 菜单
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  // 全屏
  FullscreenOutlined,
  FullscreenExitOutlined,
  // loginout
  PoweroffOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons-vue';

export default defineComponent({
  name: "PageHeader",
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined,
    QuestionCircleOutlined,    
    PoweroffOutlined,
  },
  props: {
    collapsed: {
      type: Boolean,
    },
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    
    const state = reactive({
      userNname: store.getters.userName,
      fullscreenIcon: 'FullscreenOutlined',
    })
    

    // 退出登录
    const logout = () => {
      Modal.confirm({
        title: '您确定要退出登录吗？',
        icon: createVNode(QuestionCircleOutlined),
        onOk: () => {
          message.success('成功退出登录')
          router.push('./login')
        },
      })
    }

    // 切换全屏图标
    const toggleFullscreenIcon = () => (state.fullscreenIcon = document.fullscreenElement !== null ? 'FullscreenExitOutlined' : 'FullscreenOutlined')

    // 监听全屏切换事件
    document.addEventListener("fullscreenchange", toggleFullscreenIcon)

    // 全屏切换
    const toggleFullScreen = () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    }

    return {
      ...toRefs(state),
      toggleFullScreen,
      logout,
      route,
    }
  },
})
</script>

<style lang="scss" scoped>
.layout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #fff;
  padding: 0;
  height: $header-height;
  box-shadow: 0 1px 4px rgba(79, 87, 95, 0.28);

  .left-options {
    display: flex;
    align-items: center;

    .menu-fold {
      padding: 0 24px;
      cursor: pointer;
    }
  }

  .right-options {
    display: flex;
    align-items: center;

    > * {
      margin-right: 20px;
      cursor: pointer;
    }
  }
}
</style>
