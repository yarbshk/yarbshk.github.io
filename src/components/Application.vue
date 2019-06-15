<template>
  <div :class="['section', themeClass]" style="height: 100%; min-height: 100vh;">
    <div class="columns">
      <div class="column is-6-desktop is-offset-3-desktop">
        <yar-header></yar-header>
        <yar-article></yar-article>
        <yar-footer></yar-footer>
      </div>
    </div>
  </div>
</template>

<script>
  import Article from './Article.vue'
  import Footer from './Footer.vue'
  import Header from './Header.vue'

  export default {
    name: 'yarApplication',
    components: {
      [Article.name]: Article,
      [Header.name]: Header,
      [Footer.name]: Footer
    },
    data () {
      return {
        virgin: true
      }
    },
    computed: {
      themeClass () {
        return 't-dark'
      }
    }
  }
</script>
