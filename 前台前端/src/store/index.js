import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    model: 'light',//当前模式：light/dark
  },
  mutations: {
    changeModel(state) {
      state.model = (state.model=='light'?'dark':'light')
    }
  },
  actions: {},
  modules: {}
})