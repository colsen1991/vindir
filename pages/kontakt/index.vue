<template>
  <div>
    <div class="hero is-page-header space-below">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="is-size-1 is-size-2-mobile">
            <page-header-text>Kontakt</page-header-text>
          </h1>
        </div>
      </div>
    </div>
    <div id="kontakt" class="hero is-medium is-dark  space-below">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <section class="column content has-text-centered">
              <h2 class="is-size-2 is-size-3-mobile">Ta kontakt</h2>
              <adress>
                <p>
                  <span class="icon"><i class="fas fa-map-marker is-hidden-tablet"></i></span>
                  <a href="https://goo.gl/maps/RYExmBRPKxA2" target="_blank" rel="noopener nofollow">
                    Sjøgata 15/17, 8006 Bodø
                  </a>
                </p>
                <p>
                  <span class="icon"><i class="fas fa-envelope is-hidden-tablet"></i></span>
                  <a href="mailto:christer@vindir.com">
                    christer@vindir.no
                  </a>
                </p>
                <p>
                  <span class="icon"><i class="fas fa-phone is-hidden-tablet"></i></span>
                  <a href="tel:+4747895010">
                    47 89 50 10
                  </a>
                </p>
                <p>
                  <span class="icon"><i class="fab fa-facebook-f is-hidden-tablet"></i></span>
                  <a href="https://www.fb.me/vindirweb" rel="noopener nofollow" target="_blank">
                    fb.me/vindirweb
                  </a>
                </p>
              </adress>
            </section>

            <section class="column content has-text-centered">
              <h2 class="is-size-2 is-size-3-mobile">Bli kontaktet</h2>
              <p>Ikke nøl med å ta kontakt for en uforpliktende prat eller et tilbud!</p>
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
                Dette melder deg <b>ikke</b> inn noe nyhetsbrev e.l.
                Mer kontaktinformasjon nederst på siden.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

