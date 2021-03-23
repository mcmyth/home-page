<template>
<div class="drawers">
  <div :style="hideButton ? 'opacity: 0;pointer-events: none;' : ''" class="button" @click="show = !show"><svg version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 573 411.2" overflow="visible" xml:space="preserve"><g><path d="M286.1,85.9c-74.2,0-148.4,0-222.5,0c-4.3,0-8.7,0-13,0C20.2,85.4-0.3,67.8,0,42.5C0.3,17.1,20.6,0.1,51.3,0.1c157-0.1,314.1,0,471.1-0.1c19.1,0,35.3,5.3,45.1,23.1c7.7,14,7.1,28.1-1.2,41.7c-9.8,16-25.2,21.1-43,21.1c-36.8,0-73.6,0-110.5,0C370.6,85.9,328.4,85.9,286.1,85.9z"/><path d="M286.6,162.7c75.8,0,151.6,0,227.4,0c5.4,0,10.9-0.2,16.2,0.2c24.7,1.9,42.8,20.1,42.8,42.7c0,22-17.3,39.9-41.3,42.5c-3.8,0.4-7.6,0.4-11.4,0.4c-155.9,0-311.9,0-467.8,0.1c-21,0-38.8-5.4-48.3-25.9c-13.5-29,7.3-59.2,41.9-59.8c43.3-0.7,86.6-0.2,129.9-0.2C212.9,162.7,249.7,162.7,286.6,162.7z"/><path d="M286.8,325.3c75.8,0,151.6,0,227.4,0c5.4,0,10.9-0.2,16.2,0.2c24.6,2,42.8,20.4,42.5,42.9c-0.2,22.1-17.5,39.8-41.6,42.3c-5.4,0.6-10.8,0.4-16.2,0.4c-152.7,0-305.4,0-458.1,0c-9.2,0-18.4,0.2-27.3-2.9c-17.6-6-30-22.7-29.8-40.4c0.2-17.9,12.7-34.1,30.4-40c7.9-2.6,16-2.6,24.1-2.6C132,325.3,209.4,325.3,286.8,325.3z"/></g></svg></div>
  <div :style="show ? 'left: 0' : 'left: -250px'" class="context">
    <span class="title">Drawer</span>
    <ul>
      <router-link  @click.native="show = false" :to="routers.path"><li>Home</li></router-link>
      <router-link @click.native="show = false"  v-for="(item, index) in routers.children" :key="index" :to="routers.path + item.path"><li>{{ item.meta.title }}</li></router-link>
    </ul>
  </div>
  <div class="mask" :style="show ? 'opacity: 1;' : 'opacity: 0;pointer-events: none;'" @click="show = !show"></div>
</div>
</template>

<script>
export default {
  name: 'drawers',
  props: {
    routers: {},
    hideButton: undefined
  },
  data () {
    return {
      show: false
    }
  },
  created () {
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
    margin: 15px 0 35px 25px
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
    a
      @include default-a
    li
      color: rgba(black, 0.54)
      height: auto
      transition: background-color .3s ease-in-out
      user-select: none
      cursor: pointer
      &:hover
        color: rgba(black, 0.84)
        background-color: rgba(black, .1)
      padding: 15px 0 15px 25px
      margin-bottom: 10px
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
