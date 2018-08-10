<template>
  <div class="basic-layout">
    <navbar/>

    <div class="hero">

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

  .hero {
    background: url('/images/banner.jpg') no-repeat center center;
    height: 100vh;
    color:#FDFDFD;
    background-size: cover;
    padding:0;
  }

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
