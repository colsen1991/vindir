<template>
  <section class="card">
    <a :href="link" target="_blank" rel="noopener nofollow">
      <div class="card-image">
        <figure class="image is-4by3">
          <img v-lazy="$createSrc(image, {width: 1000, heightRatio: 0.75})"
               :data-srcset="$createSrcSet(image, {heightRatio: 0.75})"
               :sizes="$createSizes()"
               :alt="`${name} sin framside`"
               :title="`${name} sin framside`">
        </figure>
      </div>
      <div class="card-content has-text-dark">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img v-lazy="$createSrc(logo, {width: 200, fit: 'max', heightRatio: 1})"
                   :alt="`${name} sin logo`"
                   :title="`${name} sin logo`">
            </figure>
          </div>
          <div class="media-content">
            <h2 class="title is-4 is-marginless">{{name}}</h2>
            <img :src="madeWith.logo" class="made-with" :alt="`${madeWith.name} sin logo`" :title="`Laget med ${madeWith.name}`">
          </div>
        </div>
        <div class="content is-uppercase">
          <p class="has-gradient-link-background has-text-light has-text-centered">{{delivered}}</p>
        </div>
      </div>
    </a>
  </section>
</template>

<script>
  export default {
    name: 'reference',
    props: {
      name: {
        default: ''
      },
      image: {
        default: ''
      },
      link: {
        default: ''
      },
      logo: {
        default: ''
      },
      madeWith: {
        default () {
          return {
            logo: '',
            name: ''
          }
        }
      },
      delivered: {
        default: 'Design & Utvikling'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    background-color: #EBEBEB;
    height: 100%;
    transition: box-shadow .1s ease-in-out, background-color .25s ease-in-out;

    &:hover {
      box-shadow: 0 3px 4px rgba(10, 10, 10, 0.1), 0 0 0 2px rgba(10, 10, 10, 0.1);
      background-color: #F5F5F5 !important;

      .card-image {
        border-bottom: 3px solid #FF7B00;
      }
    }

    a {
      height: 100%;
      display: flex;
      flex-direction: column;

      .card-image {
        border-bottom: 3px solid white;
        transition: border-bottom-color .25s ease-in-out;
      }

      .card-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .made-with {
          height: .75rem;
          margin-top: .25rem;
          display: block;
        }

        .media-content {
          h2 {
            color: #222725 !important;
          }
        }
      }
    }
  }
</style>
