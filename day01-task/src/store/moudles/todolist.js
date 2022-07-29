export default {
  namespaced: true,
  state: {
    data: [
      {
        name: '吃饭',
        done: false,
        id: 1
      },
      {
        name: '睡觉',
        done: false,
        id: 2
      },
      {
        name: '打豆豆',
        done: false,
        id: 3
      }
    ]
  },
  mutations: {
    addtodo(state, task) {
      const id = state.data[state.data.length - 1] ? state.data[state.data.length - 1].id + 1 : 1
      state.data.push({
        name: task,
        done: false,
        id
      })
    },
    deletetodo(state, id) {
      const index = state.data.findIndex(ele => ele.id === id)
      state.data.splice(index, 1)
    }
  },
  actions: {
    addtodoList(context, task) {
      context.commit('addtodo', task)
    },
    deletetodoList(context, id) {
      context.commit('deletetodo', id)
    }
  }
}
