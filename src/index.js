import Vue from 'vue'
import Buefy from 'buefy'

import Application from './components/Application.vue'

import 'src/scss/index.scss'

Vue.use(Buefy, {
  defaultIconPack: 'fa'
})

new Vue({
  el: '#v-root',
  components: {
    [Application.name]: Application
  }
})
