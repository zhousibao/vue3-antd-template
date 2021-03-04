import { createStore } from 'vuex'
import { App } from "vue";
import { store as user, UserStore, State as UserState } from '@/store/modules/user';


export type RootState = {
    user: UserState;
};

export type Store = UserStore<Pick<RootState, 'user'>>


const store = createStore<RootState>({
    modules: {
        user,
    },
})

// 定义你自己的“useStore”组合函数
export function useStore(): Store {
    return store as Store
}

export function setupStore(app: App) {
    app.use(store)
    console.log(store, 'vuex')
}

export default store
