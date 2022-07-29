export default {
  namespaced: true,
  state: {
    colorStr: ''
  },
  mutations: {
    Changecolor(state) {
      state.colorStr = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
       Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`
    }
  },
  actions: {
    change(context) {
      context.commit('Changecolor')
    }
  }
}
