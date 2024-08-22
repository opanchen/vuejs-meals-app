import { createStore, Store } from 'vuex'

import state from './state'
import * as actions from './actions'
import * as mutations from './mutations'
import getters from './getters'
import { InjectionKey } from 'vue'
import { IState } from './types'

export const key: InjectionKey<Store<IState>> = Symbol()

const store = createStore<IState>({
  state,
  actions,
  mutations,
  getters
})

export default store
