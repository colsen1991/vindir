<template>
  <div>
    <article class="space-below">
      <header class="hero is-image is-sooted space-below" v-lazy:background-image="$createSrc(image.url, 1920, 'max', 0.56)">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="is-size-1 is-size-2-mobile">
              {{title}}
            </h1>
          </div>
        </div>
      </header>

      <section class="hero is-dark">
        <div class="hero-body">
          <div class="container content" v-html="text"></div>
        </div>
      </section>

      <footer class="hero is-dark">
        <div class="hero-body">
          <div class="container">
            <div class="level has-text-centered-mobile">
              <time :datetime="createdAt" class="level-item">
                Publisert: {{new Date(createdAt).toLocaleDateString('nb-NO')}}
              </time>
              <span class="level-item">
                <span>Del på:&nbsp;</span>
                <span>
                  <a class="margin-right-1"
                     :href="`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.vindir.no%2Fblogg%2F${slug}`"
                     rel="nofollow noopener"
                     target="_blank"
                     title="Del på Facebook">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="margin-right-1"
                     :href="`https://twitter.com/home?status=https%3A%2F%2Fwww.vindir.no%2Fblogg%2F${slug}`"
                     rel="nofollow noopener"
                     target="_blank"
                     title="Del på Twitter">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a
                    :href="`https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.vindir.no%2Fblogg%2F${slug}&title=${title}&summary=${excerpt}`"
                    rel="nofollow noopener"
                    target="_blank"
                    title="Del på LinkedIn">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </span>
              </span>
            </div>
            <vue-disqus shortname="vindir" :identifier="slug" :url="`https://www.vindir.no/blogg/${slug}`" />
          </div>
        </div>
      </footer>
    </article>

    <section class="hero is-light is-medium space-below">
      <div class="hero-body">
        <div class="container content has-text-centered">
          <h2 class="is-size-2 is-size-3-mobile">Vil du lære flere tips og triks?</h2>
          <p>
            <nuxt-link to="/blogg" class="button is-large is-info">Les flere innlegg</nuxt-link>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import getData from '../../utils/data'

  export default {
    async asyncData ({ payload, params: { slug }, error }) {
      return getData(payload, `blogg/${slug}.json`, error)
    },
    head () {
      return {
        title: `${this.title} - Blogg - Vindir: Web & IT og sånt`,
        link: [ { hid: 'canonical', rel: 'canonical', href: `https://www.vindir.no/blogg/${this.slug}` } ],
        meta: [
          { hid: 'og:title', property: 'og:title', content: `${this.title} - Blogg - Vindir: Web & IT og sånt` },
          {
            hid: 'og:image',
            property: 'og:image',
            content: `${this.seo.image.url}?auto=compress&fit=max&w=1920`
          },
          {
            hid: 'twitter:image',
            property: 'twitter:image',
            content: `${this.seo.image.url}?auto=compress&fit=max&w=1920`
          },
          {
            hid: 'description',
            name: 'description',
            content: this.excerpt
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: this.excerpt
          }
        ]
      }
    }

  }
</script>
