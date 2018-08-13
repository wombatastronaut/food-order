import axios from 'axios'
import Cookies from 'js-cookie'
import * as types from '../mutation-types'

// state
export const state = {
  items: []
}

// getters
export const getters = {
  items: state => state.items,
  itemsCount: state => getItemsCount(state.items),
  tax: state => getTax(state.items),
  subTotal: state => getSubTotal(state.items),
  total: state => getSubTotal(state.items) + getTax(state.items) 
}

function getItemsCount (items) {
  return items.reduce((quantity, item) => {
    return quantity + item.quantity
  }, 0)
}

function getTax (items) {
  return getSubTotal(items) * 0.005
}

function getSubTotal (items) {
  return items.reduce((subTotal, item) => {
    return subTotal + item.price * item.quantity
  }, 0)
}

// mutations
export const mutations = {
  [types.ADD_TO_CART] (state, product) {
    let isFound = state.items.find((item) => item.id === product.id)

    if (!isFound) {
      product.quantity = 1
      state.items.push(product)
    } else {
      isFound.quantity++
    }
  },

  [types.REMOVE_FROM_CART] (state, product) {
    const index = state.items.findIndex(item => item.id === product.id)
    state.items.splice(index, 1)
  }
}

// actions
export const actions = {
  addTocart({ commit }, payload) {
    commit(types.ADD_TO_CART, payload)
  },

  removeFromCart({ commit }, payload) {
    commit(types.REMOVE_FROM_CART, payload)
  }
}
