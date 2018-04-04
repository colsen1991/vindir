<template>
  <div>
    <div class="hero is-page-header">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h2 class="is-size-1 is-size-2-mobile">
            < Blogg />
          </h2>
        </div>
      </div>
    </div>
    <div class="spacer"></div>
    <section class="hero is-dark is-medium">
      <div class="hero-body">
        <div class="container content has-text-centered">
          <h3 class="is-size-2 is-size-3-mobile">
            Under utbygging
          </h3>
          <p class="is-size-3 is-size-4-mobile">
            (∩｀-´)⊃━☆ﾟ.*･｡ﾟ
          </p>
        </div>
      </div>
    </section>
    <div class="spacer"></div>
  </div>
</template>

<script>
  export default {
    head () {
      return {
        title: 'Blogg - Vindir: Web & IT og sånt',
        meta: [
          { hid: 'og:title', property: 'og:title', content: `Blogg - Vindir: Web & IT og sånt` },
          { hid: 'canonical', rel: 'canonical', href: 'https://www.vindir.no/blogg' }
        ]
      }
    }
  }
</script>
