<template>
  <div class="firefly" v-for="i in firefliesCount" :data-key="i" :key="i" />
  <Home />
</template>

<script>
import Home from './components/Home.vue';
import 'virtual:fonts.css'

export default {
  components: {
    Home
  },
  computed: {
    firefliesCount: () => Math.floor(Math.random() * (50 - 15 + 1) + 15)
  }
}
</script>

<style lang="sass">
$quantity: 50
@use "sass:math"

*
  box-sizing: border-box

html
  background-color: #0a0a0a
  height: 100%

section.section
  overflow: visible

body::-webkit-scrollbar
  display: none

body
  z-index: -5
  position: fixed
  height: 100vh
  width: 100vw
  font-family: "Code New Roman"
  text-align: center
  color: #fff
  overflow: auto
  background: url('./assets/images/background.jpg')
  background-size: cover
  background-position: center

.firefly
  position: fixed
  left: 50%
  top: 50%
  width: 0.4vw
  height: 0.4vw
  margin: -0.2vw 0 0 9.8vw
  animation: ease 200s alternate infinite
  pointer-events: none

  &::before,
  &::after
    content: ''
    position: absolute
    width: 100%
    height: 100%
    border-radius: 50%
    transform-origin: -10vw
  
  &::before
    background: black
    opacity: 0.4
    animation: drift ease alternate infinite
  
  &::after
    background: white
    opacity: 0
    box-shadow: 0 0 0vw 0vw yellow
    animation: drift ease alternate infinite, flash ease infinite

  
// Randomize Fireflies Motion
@for $i from 1 through $quantity
  
  $steps: random(12) + 16
  $rotationSpeed: random(10) + 8s
  
  .firefly:nth-child(#{$i})
    animation-name: move#{$i}

    &::before
      animation-duration: #{$rotationSpeed}

    &::after
      animation-duration: #{$rotationSpeed}, random(6000) + 5000ms
      animation-delay: 0ms, random(8000) + 500ms

  @keyframes move#{$i}
    @for $step from 0 through $steps
      #{$step * (math.div(100, $steps))}%
        transform: translateX(random(100) - 50vw) translateY(random(100) - 50vh) scale(math.div(random(75), 100) + .25)

@keyframes drift
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)

@keyframes flash
  0%, 30%, 100%
    opacity: 0
    box-shadow: 0 0 0vw 0vw yellow
  5%
    opacity: 1
    box-shadow: 0 0 2vw 0.4vw yellow

</style>
