import axios from 'axios'
import Cookies from 'js-cookie'
import * as types from '../mutation-types'

// state
export const state = {
  cart: []
}

// getters
export const getters = {
  cart: state => state.cart
}

// mutations
export const mutations = {
  [types.ADD_TO_CART] (state, product) {
    let isFound = state.cart.find((cartItem) => cartItem.id === product.id)

    if (!isFound) {
      product.quantity = 1
      state.cart.push(product)
    } else {
      isFound.quantity++
    }
  },

  [types.REMOVE_FROM_CART] (state, product) {
    const index = state.cart.findIndex(cartItem => cartItem.id === product.id)
    state.cart.splice(index, 1)
  }
}

// actions
export const actions = {
  addTocart({ commit }, payload) {
    commit(types.ADD_TO_CART, payload)
  }
}
