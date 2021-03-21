<template>
<div class="drawers">
  <div class="button" @click="show = !show">M</div>
  <div v-show="show" class="context">
    <ul>
      <li>item</li>
      <li>item</li>
      <li>item</li>
      <li>item</li>
      <li>item</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'drawers',
  data () {
    return {
      show: false
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="sass">
@import "src/assets/style/global"
.drawers
  .button
    float: left
    width: 50px
    height: 50px
    background-color: red
    @include title-button-left

.context
  position: absolute
  left: 0
  top: 0
  height: 100vh
  background-color: red
  box-sizing: border-box
  font-size: 1rem
  min-width: 200px
  max-width: 100vw
  line-height: 1rem
  ul
    list-style: none
    padding: 0
    display: flex
    flex-direction: column
    li
      height: auto
      background-color: green
      padding: 10px
      margin: 10px 0
      box-sizing: border-box
</style>
