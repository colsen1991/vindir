<template>
  <div>
    <page-header>Om meg</page-header>
    <div class="hero is-dark space-below">
      <div class="hero-body">
        <section class="container">
          <div class="columns">
            <div class="column content is-flex direction-column justify-centered align-center">
              <p>
                Vindir er et lite foretak som kort fortalt driver med web & IT og sånt. Såpass lite at det består bare av meg, Christer Olsen, som
                også startet det i slutten av 2017. Jeg er utdannet dataingeniør med spesialisering innen webutvikling og -design, og har en stor
                lidenskap for det meste av teknologi!
              </p>

              <p>
                Målet med foretaket er å hjelpe bedrifter med å oppnå mer! Dette gjør jeg ved å levere brukervennlige og moderne webløsninger,
                gjennom en smidig prosess som er fri for byråkrati og unødvendigheter. Bedriftshverdagen på nett kan være vanskelig og
                tidkrevende, men den trenger ikke å være det for deg!
              </p>

              <p>
                Jeg holder til i Flå, men leverer løsninger og tjenester over hele landet (og utlandet). Så ikke nøl med å ta kontakt for en
                uforpliktende prat - vi finner nok raskt ut om jeg er rett person for å levere nettop din hjemmeside! Kontaktinformasjon finner du
                nederst på siden, eventuelt <span><nuxt-link to="/kontakt">her</nuxt-link>.</span>
              </p>

              <p>
                Avslutningsvisvis om du ønsker å lese mer om mine tekniske ferdigheter kan du ta en titt på min komprimerte online-CV
                <a href="https://www.christerolsen.me/" target="_blank" rel="noopener nofollow">her</a>.
              </p>
            </div>
            <div class="column is-flex justify-centered align-center">
              <figure class="image is-round is-max-512x512">
                <img v-lazy="$createSrc('https://www.datocms-assets.com/4973/1526298079-me.jpg', 1024, 'crop', 1)"
                     :data-srcset="$createSrcSet('https://www.datocms-assets.com/4973/1526298079-me.jpg', 'crop', 1)"
                     :sizes="$createSizes()"
                     alt="Christer Olsen - Innehaver av Vindir"
                     title="Christer Olsen">
              </figure>
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
        title: 'Om meg - Vindir: Web & IT og sånt',
        meta: [
          { hid: 'og:title', property: 'og:title', content: `Om meg - Vindir: Web & IT og sånt` },
          { hid: 'canonical', rel: 'canonical', href: 'https://www.vindir.no/om-meg' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
