<template>
  <div class="logo">
    <img src="~@/assets/logo.png" alt="">
    <p v-show="!collapsed" class="title">{{systemName}}</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { systemName } from '@/config'
export default defineComponent({
  props: {
    collapsed: {
      type: Boolean,
    },
  },
  setup() {
    return {
      systemName,
    }
  },
})
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  margin: 0 15px;
  height: $header-height;
  line-height: $header-height;
  overflow: hidden;
  white-space: nowrap;

  img {
    height: 40px;
    margin-right: 8px;
  }

  .title {
    color: white;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 0;
  }
}
</style>
