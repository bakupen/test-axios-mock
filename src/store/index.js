import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

// モジュールのインポート
import getList from '@/store/getList.js'
import getDetail from '@/store/getDetail.js'

// mock start

const mock = new MockAdapter(axios)

// getList
mock.onGet('/users').reply(200, {
  userlist: [
    {
      id: 1,
      name: 'ほげ森ほげ太郎',
      age: 24
    },
    {
      id: 2,
      name: 'ほげ田ほげ美',
      age: 31
    },
    {
      id: 3,
      name: 'ほげほげ大王',
      age: 14
    }
  ]
})

// getDetail
mock.onGet('/users/1').reply(200, {
  userdetail: [
    {
      id: 1,
      name: 'ほげ森ほげ太郎',
      age: 24
    }
  ]
})

mock.onGet('/users/2').reply(200, {
  userdetail: [
    {
      id: 2,
      name: 'ほげ田ほげ美',
      age: 31
    }
  ]
})

mock.onGet('/users/3').reply(200, {
  userdetail: [
    {
      id: 3,
      name: 'ほげほげ大王',
      age: 14
    }
  ]
})
// mock end

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    getList,
    getDetail
  },
  plugins: [createPersistedState({storage: window.sessionStorage})]
})
