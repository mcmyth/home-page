<template>
<div class="drawers">
  <div class="button" @click="show = !show">D</div>
  <div :style="show ? 'left: 0' : 'left: -250px'" class="context">
    <span class="title">Drawer</span>
    <ul>
      <li>item</li>
      <li>item</li>
      <li>item</li>
      <li>item</li>
      <li>item</li>
    </ul>
  </div>
  <div class="mask" :style="show ? 'opacity: 1;' : 'opacity: 0;pointer-events: none;'" @click="show = !show"></div>
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
  background-color: white
  box-sizing: border-box
  font-size: 1rem
  width: 250px
  line-height: 1rem
  z-index: 10
  transition: left .2s ease-in-out
  .title
    color: #4f4f4f
    font-size: 1.4rem
    text-align: left
    margin: 15px 0 25px 25px
    display: block
    position: relative
    &::before
      content: ""
      display: block
      height: 1px
      width: 230px
      background-color: #dfdfdf
      position: absolute
      left: -15px
      bottom: -20px
  ul
    list-style: none
    padding: 0
    display: flex
    flex-direction: column
    color: #333
    li
      height: auto
      transition: background-color .3s ease-in-out
      user-select: none
      cursor: pointer
      &:hover
        background-color: rgba(black, .1)
      padding: 15px 0 15px 25px
      margin: 10px 0
      box-sizing: border-box
      text-align: left
.mask
  position: fixed
  z-index: 1
  width: 100vw
  height: 100vh
  background-color: rgba(black, .3)
  transition: opacity .2s linear
</style>
