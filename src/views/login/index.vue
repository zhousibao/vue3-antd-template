<template>
  <div class="login-box">
    <div class="login-logo">
      <svg-icon icon-class="logo" />
      <h1>{{ systemName }}</h1>
    </div>
    <a-form layout="horizontal" :model="form" @submit="handleSubmit" @submit.prevent>
      <a-form-item>
        <a-input v-model:value="form.username" size="large" placeholder="admin">
          <template v-slot:prefix>
            <user-outlined type="user"/>
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-model:value="form.password" size="large" type="password" placeholder="123456" autocomplete="new-password">
          <template v-slot:prefix>
            <lock-outlined type="user"/>
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          size="large"
          :loading="loading"
          block
        >
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { message } from 'ant-design-vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { useRoute, useRouter } from "vue-router";
import { systemName } from '@/utils/config'

export default defineComponent({
  name: "login",
  components: { UserOutlined, LockOutlined },
  setup() {
    const state = reactive({
      loading: false,
      form: {
        username: '',
        password: '',
      },
    })

    const router = useRouter()
    const route = useRoute()

    const handleSubmit = async () => {
      const { username, password } = state.form
      if(username.trim() === '' || password.trim() === ''){
        return message.warning('用户名或密码不能为空！')
      }
      state.loading = true
      console.log('login form', state.form)
      // login
      state.loading = false
      message.success('登录成功！')
      const toPath = decodeURIComponent((route.query?.redirect || '/') as string)
      router.replace(toPath).then(() => {
        if (route.name === 'login') {
          router.replace('/')
        }
      })
    }
    return {
      ...toRefs(state),
      handleSubmit,
      systemName,
    }
  },
})
</script>

<style lang="scss" scoped>
.login-box {
  width: 100vw;
  height: 100vh;
  display: flex;
  padding-top: 240px;
  flex-direction: column;
  align-items: center;
  background: url("~@/assets/loginBackground.svg");
  background-size: 100%;

  .login-logo {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    .svg-icon {
      font-size: 48px;
    }

    img {
      height: 48px;
    }
    h1 {
      margin-left: 10px;
      margin-bottom: 0;
    }
  }

    ::v-deep(.ant-form) {
      width: 400px;

      .ant-col {
        width: 100%;
      }
      .ant-form-item-label {
        padding-right: 6px;
      }
  }
}
</style>
