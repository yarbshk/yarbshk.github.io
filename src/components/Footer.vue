<template>
  <footer class="l-footer">
    <div class="content">
      <small>Copyright © 2014-{{ year }} Yurii Rabeshko.</small>
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
