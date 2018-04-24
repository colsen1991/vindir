<template>
  <div>
    <page-header>Blogg</page-header>
    <div class="container">
      <article class="blog-post space-below" v-for="(blogginnlegg, i) in liste" :key="blogginnlegg.id">
        <nuxt-link :to="`/blogg/${blogginnlegg.slug}`">
          <header class="hero is-medium is-image is-sooted" v-lazy:background-image="$createSrc(blogginnlegg.image.url, 1920)">
            <div class="hero-body has-text-light has-text-centered">
              <h2 class="is-size-2 is-size-3-mobile">{{blogginnlegg.title}}</h2>
            </div>
          </header>
        </nuxt-link>
        <section class="hero" :class="`is-${i%2 === 0 ? 'dark' : 'light'}`">
          <div class="hero-body content">
            <p>{{blogginnlegg.excerpt}}</p>
          </div>
        </section>
        <footer class="hero" :class="`is-${i%2 === 0 ? 'dark' : 'light'}`">
          <div class="hero-body is-paddingless-top">
            <div class="level has-text-centered-mobile">
              <time :datetime="blogginnlegg.date" class="level-item">
                Publisert: {{new Date(blogginnlegg.date).toLocaleDateString('nb-NO')}}
              </time>
              <span class="level-item">
                <span>Del på:&nbsp;</span>
                <a class="margin-right-1"
                   :href="`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.vindir.no/blogg/${blogginnlegg.slug}`"
                   rel="nofollow noopener"
                   target="_blank"
                   title="Del på Facebook">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a class="margin-right-1"
                   :href="`https://twitter.com/home?status=https%3A//www.vindir.no/blogg/${blogginnlegg.slug}`"
                   rel="nofollow noopener"
                   target="_blank"
                   title="Del på Twitter">
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  :href="`https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.vindir.no/blogg/${blogginnlegg.slug}&title=${blogginnlegg.title}&summary=${blogginnlegg.excerpt}`"
                  rel="nofollow noopener"
                  target="_blank"
                  title="Del på LinkedIn">
                  <i class="fab fa-linkedin"></i>
                </a>
              </span>
            </div>
          </div>
        </footer>
      </article>
    </div>
    <section class="hero space-below" :class="`is-${liste.length%2 === 0 ? 'dark' : 'light'}`">
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
  import data from '../../static/data/blogg.json'

  export default {
    data () {
      return data
    },
    head () {
      return {
        title: 'Blogg - Vindir: Web & IT og sånt',
        link: [ { hid: 'canonical', rel: 'canonical', href: 'https://www.vindir.no/blogg' } ],
        meta: [
          { hid: 'og:title', property: 'og:title', content: `Blogg - Vindir: Web & IT og sånt` },
          {
            hid: 'og:image',
            property: 'og:image',
            content: 'https://www.datocms-assets.com/4973/1522847131-ux-788002_1920.jpg?auto=compress&fit=max&w=1920'
          },
          {
            hid: 'twitter:image',
            property: 'twitter:image',
            content: 'https://www.datocms-assets.com/4973/1522847131-ux-788002_1920.jpg?auto=compress&fit=max&w=1920'
          },
          {
            hid: 'description',
            name: 'description',
            content: 'En blogg som vil bedre din kompetanse innen web & IT et godt råd om gangen!'
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: 'En blogg som vil bedre din kompetanse innen web & IT et godt råd om gangen!'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .blog-post {
    .hero.is-sooted .hero-body {
      border-bottom: 3px solid #FF7B00;
      transition: background-color .25s ease-in-out;

      &:hover,
      &:active {
        background-color: rgba(0, 0, 0, .7);
      }
    }

    footer .level {
      padding-top: 0;
    }
  }
</style>
