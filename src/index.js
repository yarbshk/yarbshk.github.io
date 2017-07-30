import Vue from 'vue'
import Application from './components/Application.vue'
import 'src/scss/index.scss'

new Vue({
  el: '#v-root',
  components: {
    [Application.name]: Application
  }
})
