import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      emails: []
    }
  },
  mutations: {
    setMails (state, payload) {
      state.emails = payload
    }
  }
})

export default store