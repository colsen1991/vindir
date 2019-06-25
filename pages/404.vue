<template>
  <div>
    <page-header>404 - Siden finnes ikke</page-header>
    <section class="hero is-medium is-dark space-below">
      <div class="hero-body">
        <div class="container content has-text-centered">
          <p>Usikker på hvordan du havnet her...</p>
          <p>Beklager det!</p>
          <nuxt-link to="/" class="button is-link is-large">Tilbake til forsiden</nuxt-link>
        </div>
      </div>
    </section>
  </div>
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
