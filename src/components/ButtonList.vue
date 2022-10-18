<template>
  <div class="button-list" role="navigation">
    <div class="container">
      <ul>
        <li v-for="(value, index) in buttonList" :key="index">
          <a rel="noopener" :target="value._blank === false ? '' : '_blank'" :href="value.link">
            <img v-if="value.img" :src="value.img" :alt="value.title" :title="value.title">
            <span :title="value.title" v-else>{{ value.text }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import config from '@/config'
export default {
  name: 'ButtonList',
  data() {
    return {
      buttonList: config.buttonList
    }
  }
}
</script>

<style lang="sass" scoped>
@import "src/assets/style/global"
.button-list
  display: block
  min-width: 100%
  margin-top: 30px
.container
  max-width: 800px
  margin: 0 auto
  ul
    padding: 0
    margin: 0
    @include flex-center
    list-style: none
    flex-wrap: wrap
  li
    $box-size: 60px
    background-color: white
    border-radius: 50%
    height: $box-size
    width: $box-size
    line-height: $box-size
    margin: 10px 20px
    font-weight: bold
    @include flex-center
    box-shadow: 0 0 0 0 rgba(white,0)
    transition: box-shadow .15s linear, transform 0.1s ease 0s
    &:active
      transform: scale(0.9)
    &:hover, &:active
      box-shadow: 0 0 0 10px rgba(white,.3)
    a
      @include flex-center
      text-decoration: none
      width: 100%
      height: 100%
      -webkit-tap-highlight-color: rgba(255,0,0,0)
      @include default-a
    span
      width: 80%
      word-break: break-all
      line-height: 1rem
    img
      width: 60%
      height: 60%
</style>
