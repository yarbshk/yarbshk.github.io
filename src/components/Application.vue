<template>
  <section :class="['section', themeClass]">
    <div class="container">
      <div class="columns">
        <div class="column">
          <yar-header></yar-header>
        </div>
      </div>
      <div class="columns">
        <div class="column is-half is-offset-2-desktop">
          <yar-article></yar-article>
        </div>
      </div>
      <div class="columns">
        <div class="column is-offset-2-desktop">
          <yar-footer></yar-footer>
        </div>
      </div>
    </div>
  </section>
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
        indicator: true,
        virgin: true
      }
    },
    computed: {
      themeClass () {
        return this.indicator ? 'light-theme' : 'dark-theme'
      }
    }
  }
</script>
