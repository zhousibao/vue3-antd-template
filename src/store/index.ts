import { createStore } from 'vuex'
import { App } from "vue";
import { store as user, State as UserState, UserStore } from '@/store/modules/user';


export type RootState = {
  user: UserState;
};

export type Store = UserStore<Pick<RootState, 'user'>>


const store = createStore<RootState>({
  modules: {
    user,
  },
})

// 定义你自己的'useStore'组合函数
export function useStore(): Store {
  return store as Store
}

// 注册
export function setupStore(app: App) {
  app.use(store)
}

export default store
