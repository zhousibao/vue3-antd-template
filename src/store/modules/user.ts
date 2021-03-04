import { Store as VuexStore, GetterTree, MutationTree, CommitOptions, Module } from 'vuex';

import { RootState } from '@/store';

// state
export type State = {
  userName: string;
};
export const state: State = {
  userName: '超级管理员',
};

// getters
export type Getters = {
  userName(state: State): string;
}
export const getters: GetterTree<State, RootState> & Getters = {
  userName: (state) => state.userName,
};

// mutations
export type Mutations<S = State> = {
  setName(state: S, payload: string): void;
}
export const mutations: MutationTree<State> & Mutations = {
  setName: (state, payload) => {
    state.userName = payload
  },
}

// action


export type UserStore<S = State> = Omit<VuexStore<S>, 'getters' | 'commit'>
    & {
        commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
            key: K,
            payload: P,
            options?: CommitOptions
        ): ReturnType<Mutations[K]>;
    } & {
        getters: {
            [K in keyof Getters]: ReturnType<Getters[K]>
        };
    };

export const store: Module<State, RootState> = {
  state,
  getters, 
  mutations,    
};

