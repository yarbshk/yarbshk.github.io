<template>
  <div id="logo">
    <object ref="logoSvg"
            data="/assets/logo.svg"
            type="image/svg+xml"
            @load="importSvg">
    </object>
  </div>
</template>

<script>
  import SVG from 'svg.js'

  export default {
    name: 'yarLightbulb',
    props: {
      indicator: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        loading: true,
        colorPalette: {
          white: '#fff',
          black: '#000'
        }
      }
    },
    computed: {
      draw () {
        return SVG('logo').size(150, 150).viewbox(0, 0, 1000, 1000)
      },
      svg () {
        const svgDocument = this.$refs.logoSvg.contentDocument
        return svgDocument.getElementsByTagName('svg')[0]
      }
    },
    watch: {
      loading (loading) {
        if (!loading) {
          this.paintLogo(this.indicator)
          this.$watch('indicator', this.paintLogo)
        }
      }
    },
    methods: {
      importSvg (event) {
        this.draw.svg(this.svg.innerHTML)
        this.loading = false
        this.$emit('load', this.loading, event)
      },
      paintLogo (value) {
        value
          ? this.paintLightLogo()
          : this.paintDarkLogo()
      },
      paintLightLogo () {
        const palette = this.colorPalette
        SVG.get('#background')
          .select('rect')
          .attr({ fill: palette.black })
        SVG.get('#lampbulb')
          .select('path')
          .attr({ fill: palette.white })
      },
      paintDarkLogo () {
        const palette = this.colorPalette
        SVG.get('#background')
          .select('rect')
          .attr({ fill: palette.white })
        SVG.get('#lampbulb')
          .select('#bulb, #patronTop, #patronBottom')
          .attr({ fill: palette.black })
      }
    }
  }
</script>
