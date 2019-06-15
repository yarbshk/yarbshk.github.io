<template>
  <header class="l-header">
    <nav class="navbar is-vcentered">
      <div class="navbar-brand is-vcentered">
        <yar-lightbulb :indicator="true"></yar-lightbulb>
        <div :class="['navbar-burger', {'is-active': isNavbarActive}]"
             @click="isNavbarActive = !isNavbarActive">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div :class="['navbar-menu', {'is-active': isNavbarActive}]">
        <div class="navbar-end">
          <a href="https://stackoverflow.com/story/yarbshk"
             class="navbar-item"
             title="Developer story"
             target="_blank">
            <span class="icon">
              <i class="fa fa-stack-overflow"></i>
            </span>
            <span class="is-hidden-desktop">Developer story</span>
          </a>
          <a href="https://github.com/yarbshk"
             class="navbar-item"
             title="OpenSource works"
             target="_blank">
            <span class="icon">
              <i class="fa fa-github"></i>
            </span>
            <span class="is-hidden-desktop">OpenSource works</span>
          </a>
          <a href="https://twitter.com/yarbshk"
             class="navbar-item"
             title="Twitter profile"
             target="_blank">
            <span class="icon">
              <i class="fa fa-twitter"></i>
            </span>
            <span class="is-hidden-desktop">Twitter profile</span>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  import Lightbulb from './Lightbulb.vue'

  export default {
    name: 'yarHeader',
    data () {
      return {
        isNavbarActive: false
      }
    },
    components: {
      [Lightbulb.name]: Lightbulb
    }
  }
</script>
