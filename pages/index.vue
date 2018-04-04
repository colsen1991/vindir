<template>
  <div>
    <section id="banner"
             class="hero is-image is-fullheight"
             v-lazy:background-image="'https://www.datocms-assets.com/4973/1521797326-business-2717066.jpg?auto=compress&fit=max&w=1920'">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-image-text content is-medium has-text-centered-mobile">
              <h2 class="is-size-1 is-size-2-mobile">Hjemmesider & webløsninger</h2>
              <p class="is-size-3 is-size-4-mobile">
                Skreddersydd til dine behov, både teknisk og visuelt, og levert av en prosess som er 100% fri for mannskit!
              </p>
            </div>
            <div class="column is-flex justify-centered align-center">
              <div class="buttons is-centered">
                <a href="#tjenester" class="button is-large is-info">Les mer</a>
                <a href="#kontakt" class="button is-large is-primary">Ta kontakt</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="spacer"></div>
    <section id="tjenester" class="hero is-medium is-dark">
      <div class="hero-body">
        <div class="container has-text-centered content">
          <h2 class="is-size-2 is-size-3-mobile">Tjenester</h2>
          <div class="columns">
            <div class="column">
              <div class="icon">
                <i class="fas fa-cubes"></i>
              </div>
              <h3>Totalleverandør</h3>
              <div>
                <p>Jeg leverer hjemmesider og nettløsninger fra A til Å; fra planlegging, domenekjøp, design, utvikling, installasjon og drift!</p>
              </div>
            </div>
            <div class="column">
              <div class="icon">
                <i class="fas fa-briefcase"></i>
              </div>
              <h3>Konsulent</h3>
              <div>
                <p>Jeg har flere års erfaring og er utdannet dataingeniør og IKT-servicemedarbeider, og byr gjerne på min kunnskap.</p>
              </div>
            </div>
            <div class="column">
              <div class="icon">
                <i class="fas fa-book"></i>
              </div>
              <h3>Kurs</h3>
              <div>
                <p>Trenger du eller din bedrift et kompetanseløft? Jeg kommer gjerne innom og holder et kurs for dere!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="spacer"></div>
    <section id="kontakt" class="hero is-medium is-light">
      <div class="hero-body">
        <div class="container">
          <div class="content has-text-centered">
            <h2 class="is-size-2 is-size-3-mobile">Kontakt</h2>
            <p>Ikke nøl med å ta kontakt for en uforpliktende prat eller et tilbud!</p>
          </div>
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
        title: 'Vindir: Web & IT og sånt',
        meta: [
          { hid: 'og:title', property: 'og:title', content: `Vindir: Web & IT og sånt` },
          { hid: 'canonical', rel: 'canonical', href: 'https://www.vindir.no' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .buttons {
    .button {
      min-width: 160px;
    }
  }

  #tjenester {
    .icon {
      width: 8rem;
      height: 8rem;

      * {
        width: 8rem;
        height: 8rem;
      }
    }

    h3 {
      margin-top: 0;
    }
  }

  #takk {
    display: none;
    position: fixed;
    top: calc(50vh - 130px);
    left: calc(50vw - 130px);
    z-index: 100;
    width: 260px;
    height: 260px;
    background-color: #EBEBEB;
    padding: 1rem;

    &:target {
      display: block;
    }

    .button {
      width: 160px;
    }

    .background {
      bottom: 0;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      background-color: rgba(10, 10, 10, 0.86);
    }
  }
</style>
