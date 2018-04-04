<template>
  <div>
    <div class="hero is-page-header space-below">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h2 class="is-size-1 is-size-2-mobile">
            <page-header-text>Blogg</page-header-text>
          </h2>
        </div>
      </div>
    </div>
    <div class="container space-below">
      <article class="blog-post">
        <nuxt-link to="/404">
          <header class="hero is-medium is-image"
                  v-lazy:background-image="'https://www.datocms-assets.com/4973/1522847172-seo-896175_1920.png?auto=compress'">
            <div class="hero-body has-text-light has-text-centered">
              <h3 class="is-size-2 is-size-3-mobile">10 enkle grep for bedre SEO</h3>
            </div>
          </header>
        </nuxt-link>
        <section class="hero is-light">
          <div class="hero-body content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit metus ligula, non tincidunt urna interdum quis. Cras vel metus
              dolor. Nunc eleifend egestas ex, eu suscipit mi accumsan a. In ac eros vitae nibh bibendum tristique dapibus non posuere.
            </p>
          </div>
        </section>
        <footer>
          <div class="level is-mobile background-light">
            <time datetime="2018-04-04" class="level-left is-size-6 is-size-7-mobile">04.04.2018</time>
            <span class="level-right tag is-info">SEO</span>
          </div>
        </footer>
      </article>
    </div>
    <div class="container space-below">
      <article class="blog-post">
        <nuxt-link to="/404">
          <header class="hero is-medium is-image"
                  v-lazy:background-image="'https://www.datocms-assets.com/4973/1521797326-business-2717066.jpg?auto=compress'">
            <div class="hero-body has-text-light has-text-centered">
              <h3 class="is-size-2 is-size-3-mobile">5 tips for bedre UX</h3>
            </div>
          </header>
        </nuxt-link>
        <section class="hero is-light">
          <div class="hero-body content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit metus ligula, non tincidunt urna interdum quis. Cras vel metus
              dolor. Nunc eleifend egestas ex, eu suscipit mi accumsan a. In ac eros vitae nibh bibendum tristique dapibus non posuere.
            </p>
          </div>
        </section>
        <footer>
          <div class="level is-mobile background-light">
            <time datetime="2018-03-27" class="level-left is-size-6 is-size-7-mobile">27.03.2018</time>
            <span class="level-right tag is-info">UX</span>
          </div>
        </footer>
      </article>
    </div>
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

<style lang="scss" scoped>
  .blog-post {
    header div {
      background-color: rgba(0, 0, 0, .5);
      border-bottom: 3px solid #FF7B00;
      transition: background-color .25s ease-in-out;

      &:hover,
      &:active {
        background-color: rgba(0, 0, 0, .7);
      }
    }

    footer .level {
      padding: 0 1.5rem 1.5rem 1.5rem;
    }
  }
</style>
