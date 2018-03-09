import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import loading from '~/assets/img/loading.svg'

Vue.use(VueLazyload, { loading, error: loading })
