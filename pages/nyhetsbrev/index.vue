<template>
  <div>
    <page-header>Nyhetsbrev</page-header>
    <section id="kontakt" class="hero is-medium is-dark space-below">
      <div class="hero-body">
        <div class="container content has-text-centered">
          <h2 class="is-size-2 is-size-3-mobile">Vil du følge med på siste nytt?</h2>
          <p>Meld deg på nyhetsbrevet!</p>
          <form method="post" name="newsletter" action="/nyhetsbrev/takk" netlify-honeypot="bortgjemt" netlify>
            <div class="field has-addons has-addons-centered">
              <div class="control">
                <input title="Epost"
                       name="Epost"
                       class="input is-large"
                       type="email"
                       placeholder="Epost"
                       required>
              </div>
              <div class="control">
                <button type="submit" class="button is-primary is-large">Send inn</button>
              </div>
            </div>

            <input class="is-hidden" name="bortgjemt">
            <input type="hidden" name="form-name" value="newsletter"/>
          </form>
          <p class="is-size-7">
            Nyhetsbrevet inneholder bare relevante artikler og fagstoff og sendes ut maksimalt en gang i måneden.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    head () {
      return {
        title: 'Nyhetsbrev - Vindir: Web & IT og sånt',
        meta: [
          { hid: 'og:title', property: 'og:title', content: `Nyhetsbrev - Vindir: Web & IT og sånt` },
          { hid: 'canonical', rel: 'canonical', href: 'https://www.vindir.no/nyhetsbrev' }
        ]
      }
    }
  }
</script>
