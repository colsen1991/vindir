<template>
  <section class="hero is-large">
    <div class="hero-body">
      <div class="container content has-text-centered">
        <header>
          <h1>Ukjent Feil</h1>
        </header>
        <p>Usikker på hvordan dette gikk til...</p>
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
        title: 'Ukjent feil - Vindir: Web & IT og sånt',
        meta: [
          { hid: 'og:title', property: 'og:title', content: `Ukjent feil - Vindir: Web & IT og sånt` }
        ]
      }
    }
  }
</script>
