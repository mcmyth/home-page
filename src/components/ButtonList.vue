<template>
  <div class="button-list">
    <div class="container">
      <ul>
        <li v-for="(value, index) in list" :key="index">
          <a rel="noopener" target="_blank" :href="value.link">
            <img v-if="value.img" :src="value.img" :alt="value.title" :title="value.title">
            <span :title="value.title" v-else>{{ value.text }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonList',
  data() {
    return {
      list: [
        {
          img: '/assets/icon/qq.svg',
          title: 'QQ群',
          link: 'https://jq.qq.com/?_wv=1027&k=24hAeviP'
        },
        {
          img: '/assets/icon/github.svg',
          title: 'Github',
          link: 'https://github.com/mcmyth'
        },
        {
          img: '/assets/icon/codepen.svg',
          title: 'Codepen',
          link: 'https://codepen.io/MC_Myth'
        },
        {
          title: '博客',
          text: 'Blog',
          link: 'https://blog.mc-myth.cn'
        }
      ]
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
    @include flex-center
    box-shadow: 0 0 0 0 rgba(white,0)
    transition: box-shadow .15s linear
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
