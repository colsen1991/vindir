<template>
  <section>
    <page-header class="container content has-text-centered">
      <h1>Ukjent Feil</h1>
    </page-header>
    <div class="hero">
      <div class="hero-body">
        <div class="container content has-text-centered">
          <p>Usikker på hvordan dette gikk til...</p>
          <p>Beklager det!</p>
          <nuxt-link to="/">Tilbake til forsiden</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    head () {
      return {
        title: 'Ukjent feil',
        meta: [
          { hid: 'og:title', property: 'og:title', content: `Ukjent feil - Vindir: Web & IT og sånt` },
          { hid: 'description', name: 'description', content: 'Vindir er et lite web- og & IT-byrå i Bodø som spesialiserer seg på skreddersydde hjemmesider og webløsninger.' },
          { hid: 'og:description', property: 'og:description', content: 'Vindir er et lite web- og & IT-byrå i Bodø som spesialiserer seg på skreddersydde hjemmesider og webløsninger.' },
          { hid: 'og:image', property: 'og:image', content:  },
          { hid: 'twitter:image', property: 'twitter:image', content: this.bilde.url }
        ]
      }
    }
  }
</script>
