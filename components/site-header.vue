<template>
  <header class="navbar is-light is-fixed-top">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <figure class="image is-48x48">
            <img alt="Vindirs logo; En vind som blåser mot høyre i 3 forskjellige farger - orange, blå og lilla"
                 title="Vindir"
                 v-lazy="'https://www.datocms-assets.com/4973/1521131822-logo.png?auto=compress&w=48&h=48'">
          </figure>
          <h1 class="has-text-script is-italic is-size-3">VINDIR</h1>
          &nbsp;
          <span class="has-text-script is-size-7">- Web & IT og sånt</span>
        </nuxt-link>

        <span class="navbar-burger"
              :class="{'is-active': showNavbarMenu}"
              :title="`${showNavbarMenu ? 'Skjul' : 'Vis'} navigasjonsmeny`"
              role="button"
              tabindex="0"
              @click="toggleNavbarMenu"
              @keydown.enter="toggleNavbarMenu">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>

      <div class="navbar-menu"
           :class="{'is-active': showNavbarMenu}"
           @click="hideNavbarMenu"
           @keypress.enter="hideNavbarMenu">
        <nav class="navbar-end">
          <nuxt-link to="/blogg" class="navbar-item">
            <i class="far fa-newspaper"></i>
            &nbsp;
            <span>BLOGG</span>
          </nuxt-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'site-header',
    data () {
      return {
        showNavbarMenu: false
      }
    },
    methods: {
      toggleNavbarMenu () {
        this.showNavbarMenu = !this.showNavbarMenu
      },
      hideNavbarMenu () {
        this.showNavbarMenu = false
        document.querySelector('.navbar-burger').focus()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .navbar {
    .navbar-brand {
      .navbar-item {
        img {
          max-height: 48px !important;
        }
      }

      .navbar-burger {
        width: 4rem;
        height: 4rem;
      }
    }
  }
</style>
