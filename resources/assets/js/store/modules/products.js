import axios from 'axios'
import Cookies from 'js-cookie'
import * as types from '../mutation-types'

// state
export const state = {
  products: [],
  filters: {}
}

// getters
export const getters = {
  products: state => state.products,
  filters: state => state.filters,
}

// mutations
export const mutations = {
  [types.FETCH_PRODUCTS_SUCCESS] (state, { products }) {
    state.products = products
  },

  [types.FETCH_PRODUCTS_FAILURE] (state) {
  }
}

// actions
export const actions = {
  async fetchProducts ({ commit }) {
    try {
      const { data } = await axios.get('/api/products')

      commit(types.FETCH_PRODUCTS_SUCCESS, { products: data })
    } catch (e) {
      commit(types.FETCH_PRODUCTS_FAILURE)
    }
  }
}