<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <figure class="image is-48x48">
            <img alt="Site Logo" v-lazy="'https://www.datocms-assets.com/4973/1521131822-logo.png?w=48&h=48'">
          </figure>
          <h1 class="has-text-script is-italic is-size-3">VINDIR</h1>
          &nbsp;
          <span class="has-text-script is-size-6">- Web & IT og sånt</span>
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'site-header'
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
    }
  }
</style>
