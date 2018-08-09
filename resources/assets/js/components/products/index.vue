<template>
  <div class="products">
    <div class="row">
      <div class="col-md-4 offset-md-8">
        <div class="form-group text-right">
          <label for="category-filter">Category:</label>
          <select name="category-filter" class="form-control d-inline-block w-auto" v-model="selectedCategory">
            <option value="">All</option>
            <option :value="category.id" v-for="category in categories" :key="category.id">
              {{ category.name }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 mb-5" v-for="product in products.data" :key="product.id">
          <div class="card">
              <img class="card-img-top" src="http://via.placeholder.com/350x150" :alt="product.name">
              <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">{{ product.description }}</p>
                <a href="#" class="btn btn-primary" @click="addToCart(product)">Add To Cart</a>
              </div>
          </div>
      </div>
    </div>
    <div class="row mt-20" v-if="products.data && products.data.length > 0">
      <div class="col-md-12">
        <pagination :data="products" @pagination-change-page="fetchProducts"></pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Pagination from 'laravel-vue-pagination'
import axios from 'axios'

export default {
  name: 'Products',

  components: {
    Pagination
  },

  data: () => ({
    categories: [],
    selectedCategory: ''
  }),

  computed: mapGetters({
    products: 'products/products'
  }),

  watch: {
    selectedCategory(val) {
      this.$store.dispatch('products/updateProductsFilter', { field: 'category', value: val })
      this.$store.dispatch('products/fetchProducts', { page: 1 })
    }
  },

  mounted () {
    this.fetchCategories()
    this.fetchProducts()
  },

  methods: {
    addToCart (product) {
      this.$store.dispatch('cart/addTocart', product)
    },

    fetchProducts (page = 1) {
      this.$store.dispatch('products/fetchProducts', { page: page })
    },

    async fetchCategories () {
      const { data } = await axios.get('/api/categories')
      this.categories = data
    }
  }
};
</script>
