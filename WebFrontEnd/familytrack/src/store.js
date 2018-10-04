import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    IsAuthenticated: localStorage.getItem('accToken') || false,
    token: null,
    user: {
      userName: null,
      id: null
    }
  },
  mutations: {

  },
  actions: {

  }
})
