import axios from 'axios'
import Cookies from 'js-cookie'
import * as types from '../mutation-types'
import { serialize } from '~/helpers/utils'

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
  },

  [types.UPDATE_PRODUCTS_FILTER] (state, filter) {
    state.filters[filter.field] = filter.value
  }
}

// actions
export const actions = {
  async fetchProducts ({ commit }, payload) {
    let queryString = serialize(Object.assign(state.filters, { page: payload.page }))

    try {
      const { data } = await axios.get(`/api/products?${queryString}`)

      commit(types.FETCH_PRODUCTS_SUCCESS, { products: data })
    } catch (e) {
      commit(types.FETCH_PRODUCTS_FAILURE)
    }
  },

  updateProductsFilter({ commit }, payload) {
    commit(types.UPDATE_PRODUCTS_FILTER, payload)
  }
}
