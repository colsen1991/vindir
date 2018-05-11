<template>
  <div>
    <page-header>Referanser</page-header>
    <div class="hero">
      <div class="hero-body">
        <section class="container space-below">
          <div class="columns is-multiline is-centered">
            <div class="column is-one-third">
              <reference
                name="Saver1"
                link="https://www.saver1.no"
                image="https://www.datocms-assets.com/4973/1525866584-saver1_edited.jpg"
                logo="https://www.datocms-assets.com/4973/1525864513-1517312572-logo-square.png"
                :madeWith="{logo: 'https://www.datocms-assets.com/4973/1525855072-jamstack-full-logo.svg', name: 'JAMstack'}"/>
            </div>
            <div class="column is-one-third">
              <reference
                name="SKOgfrua"
                image="https://www.datocms-assets.com/4973/1525866251-skogfrua_edited.jpg"
                link="https://www.skogfrua.no"
                logo="https://www.datocms-assets.com/4973/1525864555-icon.png"
                :madeWith="{logo: 'https://www.datocms-assets.com/4973/1525855072-jamstack-full-logo.svg', name: 'JAMstack'}"/>
            </div>
            <div class="column is-one-third">
              <reference
                name="Seil Muligheten"
                image="https://www.datocms-assets.com/4973/1525866810-seilmuligheten_edited.jpg"
                link="https://www.facebook.com/Seilmuligheten/"
                logo="https://www.datocms-assets.com/4973/1525864614-1512555768-icon.png"
                :madeWith="{logo: 'https://www.datocms-assets.com/4973/1525855072-jamstack-full-logo.svg', name: 'JAMstack'}"/>
            </div>
            <div class="column is-one-third">
              <reference
                name="Charlottes Hundepalass"
                image="https://www.datocms-assets.com/4973/1526061006-2018-05-11-19_48_46-clipboard_edited.jpg"
                link="https://www.charlotteshundepalass.no"
                logo="https://www.datocms-assets.com/4973/1526061252-paw.png"
                :madeWith="{logo: 'https://www.datocms-assets.com/4973/1525855079-wix-logo.svg', name: 'Wix'}"/>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head () {
      return {
        title: 'Referanser - Vindir: Web & IT og sånt',
        meta: [
          { hid: 'og:title', property: 'og:title', content: `Referanser - Vindir: Web & IT og sånt` },
          { hid: 'canonical', rel: 'canonical', href: 'https://www.vindir.no/referanser' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .hero-body {
    padding-top: 0;
    padding-bottom: 0;
  }
</style>
