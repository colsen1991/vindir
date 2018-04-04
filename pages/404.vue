<template>
  <section class="hero is-large">
    <div class="hero-body">
      <div class="container content has-text-centered">
        <h2 class="is-size-1 is-size-2-mobile">404 - Siden finnes ikke</h2>
        <p>Usikker på hvordan dette gikk til...</p>
        <p class="is-size-2 is-size-3-mobile">¯\_(ツ)_/¯</p>
        <p>Beklager det!</p>
        <nuxt-link to="/">Tilbake til forsiden</nuxt-link>
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
