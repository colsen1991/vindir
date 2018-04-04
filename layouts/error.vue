<template><section>
  <div class="hero is-page-header space-below">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h2 class="is-size-1 is-size-2-mobile">
          <page-header-text>Ukjent feil</page-header-text>
        </h2>
      </div>
    </div>
  </div>
  <div class="hero is-dark space-below">
    <div class="hero-body is-dark">
      <div class="container content has-text-centered">
        <p class="is-size-2 is-size-3-mobile">(╯°□°）╯︵ ┻━┻</p>
        <p>Usikker på hvordan dette gikk til...</p>
        <p>Beklager det!</p>
        <nuxt-link to="/" class="button is-link is-large">Tilbake til forsiden</nuxt-link>
      </div>
    </div>
  </div>
</section></template>

<script>
  export default {
    head () {
      return {
        title: 'Ukjent feil - Vindir: Web & IT og sånt',
        meta: [
          { hid: 'og:title', property: 'og:title', content: `Ukjent feil - Vindir: Web & IT og sånt` }
        ]
      }
    }
  }
</script>
