import Vue from 'vue'
import Vuex from 'vuex'
import todolist from '@/store/moudles/todolist'
import color from '@/store/moudles/color'
import createVuexPersisted from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    todolist,
    color
  },
  plugins: [
    createVuexPersisted({
      reducer(state) {
        return {
          todolist: state.todolist,
          color: state.color
        }
      }
    })
  ]
})
