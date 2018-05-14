<template>
  <div>
    <page-header>Kontakt</page-header>
    <div id="kontakt" class="hero is-medium is-dark  space-below">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <section class="column content has-text-centered">
              <h2 class="is-size-2 is-size-3-mobile">Ta kontakt</h2>
              <address>
                <p>
                  <span class="icon is-hidden-tablet"><i class="fas fa-map-marker"></i></span>
                  <br class="is-hidden-tablet">
                  <a href="https://goo.gl/maps/RYExmBRPKxA2" target="_blank" rel="noopener nofollow">
                    Sjøgata 15/17, 8006 Bodø
                  </a>
                </p>
                <p>
                  <span class="icon is-hidden-tablet"><i class="fas fa-envelope"></i></span>
                  <br class="is-hidden-tablet">
                  <a href="mailto:christer@vindir.com">
                    christer@vindir.no
                  </a>
                </p>
                <p>
                  <span class="icon is-hidden-tablet"><i class="fas fa-phone"></i></span>
                  <br class="is-hidden-tablet">
                  <a href="tel:+4747895010">
                    47 89 50 10
                  </a>
                </p>
                <p>
                  <span class="icon is-hidden-tablet"><i class="fab fa-facebook-f"></i></span>
                  <br class="is-hidden-tablet">
                  <a href="https://www.fb.me/vindirweb" rel="noopener nofollow" target="_blank">
                    fb.me/vindirweb
                  </a>
                </p>
              </address>
            </section>

            <section class="column content has-text-centered">
              <h2 class="is-size-2 is-size-3-mobile">Bli kontaktet</h2>
              <p>Legg igjen epost eller telefonnummer så tar jeg kontakt!</p>
              <form method="post" name="contact" action="/kontakt/takk" netlify-honeypot="bortgjemt" netlify>
                <div class="field has-addons has-addons-centered">
                  <div class="control">
                    <input id="cf_details"
                           title="Epost/Telefon"
                           name="Epost/Telefon"
                           class="input is-large"
                           type="text"
                           placeholder="Epost/Telefon"
                           required>
                  </div>
                  <div class="control">
                    <button type="submit" class="button is-primary is-large">Send inn</button>
                  </div>
                </div>

                <input class="is-hidden" name="bortgjemt">
                <input type="hidden" name="form-name" value="contact"/>
              </form>
              <p class="is-size-7">
                Dette melder deg <b>ikke</b> inn noe nyhetsbrev e.l. og er helt uforpliktende!
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head () {
      return {
        title: 'Kontakt - Vindir: Web & IT og sånt',
        meta: [
          { hid: 'og:title', property: 'og:title', content: `Kontakt - Vindir: Web & IT og sånt` },
          { hid: 'canonical', rel: 'canonical', href: 'https://www.vindir.no/kontakt' }
        ]
      }
    }
  }
</script>
