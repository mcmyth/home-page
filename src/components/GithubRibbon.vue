<template>
  <div class="github-ribbon">
    <a class="base white right" href="https://github.com/mcmyth/home-page" title="On GitHub" target="_blank">On GitHub</a>
  </div>
</template>

<script>
export default {
  name: 'GithubRibbon'
}
</script>

<style lang="sass" scoped>
$color-white: #ffffff
$color-white-text: #000000
$ribbon-padding: 5px
$ribbon-width: 600px

// Base
.github-ribbon
  position: absolute
  width: 100vw
  height: 200px
  overflow: hidden
  right: 0
  .base
    width: $ribbon-width
    text-align: center
    font-weight: bold
    padding: $ribbon-padding
    text-decoration: none
    position: absolute
    z-index: 1000

    // Borders
    &:after
      content: ""
      position: relative
      display: block
      top: $ribbon-padding - 2
      left: 0
      width: $ribbon-width
      border: 1px dashed rgba(255, 255, 255, 0.4)

    &:before
      content: ""
      position: relative
      display: block
      bottom: $ribbon-padding - 2
      left: 0
      width: $ribbon-width
      border: 1px dashed rgba(255, 255, 255, 0.4)

    &.white:after
      border: 1px dashed rgba(0, 0, 0, 0.4)

    &.white:before
      border: 1px dashed rgba(0, 0, 0, 0.4)

    // Place
    &.right
      $ribbon-top: 15px
      top: $ribbon-top
      right: $ribbon-top - $ribbon-width / 2 + 10px
      transform: rotate(45deg) translateY(100%)

    &.left
      $ribbon-top: 15px
      top: $ribbon-top
      left: $ribbon-top - $ribbon-width / 2 + 10px
      transform: rotate(-45deg) translateY(100%)

    // Colors
    &.white
      background-color: $color-white
      color: $color-white-text

</style>
