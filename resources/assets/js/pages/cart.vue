<template>
  <div>
    <table class="table table-borderless">
      <thead>
        <tr>
          <th></th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>
            <img :src="item.image" style="width: 80px; heught: auto;">
          </td>
          <td>{{ item.name }}</td>
          <td>{{ item.price | formatMoney }}</td>
          <td>{{ item.quantity }}</td>
          <td>
            <button class="btn btn-danger btn-sm" @click="removeFromCart(item)">
              <fa icon="trash-alt" />
            </button>
          </td>
        </tr>
        <tr>
          <td class="text-right font-weight-bold" colspan="4">Subtotal</td>
          <td>{{ subTotal | formatMoney }}</td>
        </tr>
        <tr>
          <td class="text-right font-weight-bold" colspan="4">Tax</td>
          <td>{{ tax | formatMoney }}</td>
        </tr>
        <tr>
          <td class="text-right font-weight-bold" colspan="4">Total</td>
          <td>{{ total | formatMoney }}</td>
        </tr>
        <tr>
          <td colspan="4">
            <button class="btn btn-success">Continue</button>
          </td>
          <td>
            <button class="btn btn-primary">Checkout</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'basic',

  computed: mapGetters({
    items: 'cart/items',
    subTotal: 'cart/subTotal',
    tax: 'cart/tax',
    total: 'cart/total',
  }),

  methods: {
    removeFromCart (product) {
      this.$store.dispatch('cart/removeFromCart', product)
    }
  }
}
</script>

<style scoped>
</style>