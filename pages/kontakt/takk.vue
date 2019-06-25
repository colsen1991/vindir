<template>
  <div>
    <page-header>Takk</page-header>
    <section class="hero is-medium is-dark space-below">
      <div class="hero-body">
        <div class="container content has-text-centered">
          <div class="is-image-text margin-bottom-1">
            <p>Tusen takk for at du tok kontakt! Jeg svarer deg så snart jeg kan!</p>
          </div>
          <nuxt-link to="/" class="button is-large is-link">Tilbake til forsiden</nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    head () {
      return {
        title: 'Takk - Kontakt - Vindir: Web & IT og sånt',
        meta: [
          { hid: 'og:title', property: 'og:title', content: `Takk - Kontakt - Vindir: Web & IT og sånt` },
          { hid: 'canonical', rel: 'canonical', href: 'https://www.vindir.no/kontakt/takk' }
        ]
      }
    }
  }
</script>
