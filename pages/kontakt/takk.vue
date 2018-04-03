<template>
  <section class="hero is-large">
    <div class="hero-body">
      <div class="container content has-text-centered">
        <div class="is-image-text margin-bottom-1">
          <header>
            <h1>Takk ツ</h1>
          </header>
          <p>Tusen takk for at du tok kontakt! Jeg svarer deg så snart jeg kan!</p>
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
