<template>
  <div class="hero has-gradient-link-background space-below">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="is-size-1 is-size-2-mobile">
          <span class="text">
            <span>&lt;&nbsp;</span>
            <span><slot/></span>
            <span>&nbsp;&frasl;&gt;</span>
          </span>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'page-header'
  }
</script>

<style lang="scss" scoped>
  .text {
    display: inline-flex;
    align-items: center;
  }
</style>
