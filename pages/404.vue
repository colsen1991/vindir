<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container content has-text-centered">
        <h1 class="is-size-1 is-size-2-mobile">
          <page-header-text>404 - Siden finnes ikke</page-header-text>
        </h1>
        <p class="is-size-2 is-size-3-mobile">¯\_(ツ)_/¯</p>
        <p>Usikker på hvordan du havnet her...</p>
        <p>Beklager det!</p>
        <nuxt-link to="/" class="button is-link is-large">Tilbake til forsiden</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    head () {
      return {
        title: '404 - Siden finnes ikke - Vindir: Web & IT og sånt',
        meta: [
          { hid: 'og:title', property: 'og:title', content: `Ukjent feil - Vindir: Web & IT og sånt` },
          { hid: 'canonical', rel: 'canonical', href: 'https://www.vindir.no/404' }
        ]
      }
    }
  }
</script>
