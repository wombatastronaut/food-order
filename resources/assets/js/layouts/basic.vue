<template>
  <div class="basic-layout">
    <navbar/>

    <div class="hero">
      <div class="hero-content d-flex align-items-center align-content-center background-overlay">
        <h1 class="text-center w-100 font-weight-bold">Food Order</h1>
      </div>
    </div>

    <div class="container mt-4">
      <child/>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  name: 'BasicLayout',

  components: {
    Navbar
  }
}
</script>

<style lang="scss">
.basic-layout {
  color: #636b6f;
  height: 100vh;
  font-weight: 100;
  position: relative;

  .links > a {
    color: #636b6f;
    padding: 0 25px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: .1rem;
    text-decoration: none;
    text-transform: uppercase;
  }
}
</style>
