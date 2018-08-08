<template>
  <div class="products">
    <div class="row">
      <div class="col-md-4 mb-5" v-for="product in products" :key="product.id">
          <div class="card">
              <img class="card-img-top" src="http://via.placeholder.com/350x150" :alt="product.name">
              <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">{{ product.description }}</p>
                <a href="#" class="btn btn-primary">Add To Cart</a>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Products",

  computed: mapGetters({
    products: "products/products"
  }),

  mounted() {
    this.$store.dispatch("products/fetchProducts");
  }
};
</script>