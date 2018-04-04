<template>
  <span class="wrapper">
    <span>&lt;&nbsp;</span>
    <span><slot/></span>
    <span>&nbsp;&frasl;&gt;</span>
  </span>
</template>

<script>
  export default {
    name: 'page-header-text'
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    display: inline-flex;
    align-items: center;
  }
</style>
