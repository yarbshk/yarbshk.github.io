<template>
  <div :class="['m-switcher', {'is-active': indicator}]">
    <span class="m-switcher-knob" @click="toggleIndicator"></span>
  </div>
</template>

<script>
  export default {
    name: 'yarSwitcher',
    props: {
      value: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        indicator: this.value
      }
    },
    methods: {
      toggleIndicator (event) {
        this.indicator = !this.indicator
        this.$emit('change', this.indicator, event)
      }
    }
  }
</script>
