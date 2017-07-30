<template>
  <section :class="['section', themeClass]">
    <div class="container">
      <div class="columns">
        <div class="column">
          <yar-header></yar-header>
        </div>
      </div>
      <div class="columns">
        <div class="column is-half-desktop is-offset-2-desktop">
          <yar-article></yar-article>
        </div>
        <div class="column is-4-desktop is-hidden-touch">
          <yar-switcher :value="indicator" @change="toggleIndicator"></yar-switcher>
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
  import Switcher from './Switcher.vue'

  export default {
    name: 'yarApplication',
    components: {
      [Article.name]: Article,
      [Header.name]: Header,
      [Footer.name]: Footer,
      [Switcher.name]: Switcher
    },
    data () {
      return {
        indicator: true,
        virgin: true
      }
    },
    computed: {
      themeClass () {
        return this.indicator ? 't-light' : 't-dark'
      }
    },
    methods: {
      toggleIndicator (value) {
        this.indicator = value
      }
    }
  }
</script>
