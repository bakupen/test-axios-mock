import axios from 'axios'

export const state = {
  list: ''
}

export const mutations = {
  addList(state, payload) {
    state.list = payload
  }
}

export const actions = {
  getList({ commit }) {
    axios.get('/users')
    .then((response) => {
      commit('addList', response.data.userlist)
    })
    .catch((reject) => {
      console.log(`getList: ${reject.message}`)
    })
  }
}

export const getters = {
  list(state) {
    return state.list
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}