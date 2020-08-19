declare module 'nuxt.config.js' {
  import {BuefyConfig as _BuefyConfig} from 'buefy/types';
  import {NuxtConfig as _NuxtConfig} from '@nuxt/types';

  interface BuefyConfig extends _BuefyConfig {
    css?: boolean,
    materialDesignIcons?: boolean
  }

  interface SitemapConfig {
    routes?: string[] | Function,
    path?: string,
    hostname?: string,
    cacheTime?: number,
    etag?: object | boolean,
    exclude?: string[],
    filter?: Function,
    gzip?: boolean,
    xmlNs?: string,
    xslUrl?: string,
    trailingSlash?: boolean,
    i18n?: object | string,
    defaults?: object
  }

  interface NuxtConfig extends _NuxtConfig {
    buefy: BuefyConfig,
    sitemap?: SitemapConfig
  }
}
