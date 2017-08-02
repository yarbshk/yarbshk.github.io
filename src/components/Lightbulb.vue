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
      getPointCoordinates ([x0, y0], deg, radius) {
        const rad = deg * Math.PI / 180
        return [
          x0 + Math.cos(rad) * radius,
          y0 + Math.sin(rad) * radius
        ]
      },
      getRandomInt (min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
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
        const lampbulb = SVG.get('#lampbulb')
        lampbulb
          .select('path')
          .attr({ fill: palette.white })
        // Set beams animation
        const angles = [15, 330, 305, 270, 235, 210, 165]
        lampbulb.select('[id^="beam"]').each((index, members) => {
          const beam = members[index]
          const point = [beam.cx(), beam.cy()]
          const duration = this.getRandomInt(400, 600)
          const [x, y] = this.getPointCoordinates(point, angles[index], 30)
          beam.animate(duration, '<>').center(x, y).loop(true, true)
        })
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
