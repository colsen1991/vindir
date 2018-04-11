<template>
  <section class="hero is-large">
    <div class="hero-body">
      <div class="container content has-text-centered">
        <div class="is-image-text margin-bottom-1">
          <h1>Takk ツ</h1>
          <p>Tusen takk for at du meldte deg på nyhetsbrevet!</p>
        </div>
        <nuxt-link to="/" class="button is-large is-primary">Tilbake til forsiden</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    head () {
      return {
        title: 'Takk - Kontakt - Vindir: Web & IT og sånt',
        meta: [
          { hid: 'og:title', property: 'og:title', content: `Takk - Kontakt - Vindir: Web & IT og sånt` },
          { hid: 'canonical', rel: 'canonical', href: 'https://www.vindir.no/takk/kontakt' }
        ]
      }
    }
  }
</script>
