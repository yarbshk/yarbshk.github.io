<template>
  <div class="m-switcher">
    <input type="checkbox" v-model="indicator" @change="$emit('change', indicator)">
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
    }
  }
</script>
