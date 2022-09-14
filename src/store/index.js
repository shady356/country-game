import Vue from 'vue'
import Vuex from 'vuex'
import { getLocale } from '@/store/localeUI'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    localeCode: 'no',
    locale: getLocale('no'),
  },
  mutations: {
    changeLocale(state, localeCode) {
      state.localeCode = localeCode
      state.locale = getLocale(localeCode)
    },
  },
  actions: {
  },
  modules: {
  },
})
