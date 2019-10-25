import axios from 'axios'

export const state = {
  detail: ''
}

export const mutations = {
  addDetail(state, payload) {
    state.detail = payload
  }
}

export const actions = {
  getDetail({ commit }, id) {
    axios.get(`/users/${id}`)
    .then((response) => {
      commit('addDetail', response.data.userdetail)
    })
    .catch((reject) => {
      console.log(`getDetail: ${reject.message}`)
    })
  }
}

export const getters = {
  detail(state) {
    return state.detail
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}