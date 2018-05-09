<template>
  <header class="navbar is-light is-fixed-top">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <figure class="image is-48x48">
            <img alt="Vindirs logo; En vind som blåser mot høyre i 3 forskjellige farger - orange, blå og lilla"
                 title="Vindir"
                 src="https://www.datocms-assets.com/4973/1521131817-icon.png?auto=compress&crop=fit&w=200">
          </figure>
          <span class="has-text-script is-italic is-size-3">VINDIR</span>
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
            BLOGG
          </nuxt-link>

          <nuxt-link to="/kontakt" class="navbar-item">
            KONTAKT
          </nuxt-link>

          <nuxt-link to="/nyhetsbrev" class="navbar-item">
            NYHETSBREV
          </nuxt-link>

          <nuxt-link to="/referanser" class="navbar-item">
            REFERANSER
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
