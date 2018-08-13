<template>
  <nav id="main-nav" class="navbar navbar-expand-lg fixed-top">
    <div class="container">
      <router-link :to="{ name: 'welcome' }" class="navbar-brand">
        {{ appName }}
      </router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false">
        <span class="navbar-toggler-icon"/>
      </button>

      <div id="navbarToggler" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{ name: 'welcome' }" class="nav-link" active-class="active">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link">About</a>
          </li>
            <li class="nav-item">
            <a href="" class="nav-link">Contact</a>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <!-- Authenticated -->
          <li class="nav-item" v-if="user">
            <router-link :to="{ name: 'cart' }" class="nav-link position-relative" active-class="active">
              <fa icon="shopping-cart" style="font-size: 1rem;" />
              <span class="badge badge-count" v-if="cartItemsCount > 0">{{ cartItemsCount }}</span>
            </router-link>
          </li>

          <li class="nav-item dropdown" v-if="user">
            <a class="nav-link dropdown-toggle"
               href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img :src="user.photo_url" class="rounded-circle profile-photo mr-1">
              {{ user.name }}
            </a>
            <div class="dropdown-menu">
              <router-link :to="{ name: 'settings.profile' }" class="dropdown-item pl-3">
                <fa icon="cog" fixed-width/>
                {{ $t('settings') }}
              </router-link>

              <div class="dropdown-divider"/>
              <a href="#" class="dropdown-item pl-3" @click.prevent="logout">
                <fa icon="sign-out-alt" fixed-width/>
                {{ $t('logout') }}
              </a>
            </div>
          </li>
          <!-- Guest -->
          <template v-if="!user">
            <li class="nav-item">
              <router-link :to="{ name: 'login' }" class="nav-link" active-class="active">
                {{ $t('login') }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'register' }" class="nav-link" active-class="active">
                {{ $t('register') }}
              </router-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import LocaleDropdown from './LocaleDropdown'

export default {
  components: {
    LocaleDropdown
  },

  data: () => ({
    appName: window.config.appName
  }),

  computed: mapGetters({
    user: 'auth/user',
    cartItemsCount: 'cart/itemsCount'
  }),

  methods: {
    async logout () {
      // Log out the user.
      await this.$store.dispatch('auth/logout')

      // Redirect to login.
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped>
.badge-count {
  position: absolute;
  top: 0;
  right: -5px;
}

.profile-photo {
  width: 2rem;
  height: 2rem;
  margin: -.375rem 0;
}

#main-nav {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  box-shadow: none
}
.navbar-brand {
  color: #ffffff;
}

.navbar-nav .nav-link {
  color: #ffffff;
  font-weight: 500;
}
</style>
