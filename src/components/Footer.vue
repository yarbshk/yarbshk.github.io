<template>
  <footer class="footer">
    <div class="content">
      <small>Copyright © {{ year }} Yuriy Rabeshko.</small>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'yarFooter',
    data () {
      return {
        year: new Date().getFullYear()
      }
    }
  }
</script>
