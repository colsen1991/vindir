<template>
  <footer class="footer">
    <div class="container">
      <address class="columns has-text-centered">
        <div class="column">
          <span class="icon"><i class="fas fa-map-marker"></i></span>
          <br>
          <a href="https://goo.gl/maps/LBW74stotMpFdvQc8" target="_blank" rel="noopener nofollow">
            Tyttebærveien 30, 8026 Bodø
          </a>
        </div>
        <div class="column">
          <span class="icon"><i class="fas fa-envelope"></i></span>
          <br>
          <a href="mailto:christer@vindir.no">
            christer@vindir.no
          </a>
        </div>
        <div class="column">
          <span class="icon"><i class="fas fa-phone"></i></span>
          <br>
          <a href="tel:+4747895010">
            47 89 50 10
          </a>
        </div>
        <div class="column" itemscope itemtype="http://schema.org/Organization">
          <span class="icon"><i class="fab fa-facebook-f"></i></span>
          <br>
          <link itemprop="url" href="https://www.vindir.no">
          <a itemprop="sameAs" href="https://www.facebook.com/vindirweb" rel="noopener nofollow" target="_blank">
            fb.me/vindirweb
          </a>
        </div>
      </address>

      <hr>

      <p class="has-text-centered is-size-6">&copy; 2017 Vindir</p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'site-footer'
  }
</script>

<style lang="scss" scoped>
  .footer {
    background-color: white;
  }
</style>
