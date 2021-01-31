<template>
  <div class="button-list">
    <div class="container">
      <ul>
        <li><a rel="noopener" target="_blank" href="https://jq.qq.com/?_wv=1027&k=24hAeviP"><img src="@/assets/icon/qq.svg" alt="加入QQ群" title="加入QQ群"></a></li>
        <li><a rel="noopener" target="_blank" href="https://github.com/mcmyth"><img src="@/assets/icon/github.svg" alt="Codepen个人主页" title="Github个人主页"></a></li>
        <li><a rel="noopener" target="_blank" href="https://codepen.io/MC_Myth"><img src="@/assets/icon/codepen.svg" alt="Codepen个人主页" title="Codepen个人主页"></a></li>
        <li><a rel="noopener" target="_blank" href="https://blog.mc-myth.cn"><span title="博客">Blog</span></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonList'
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
    img
      width: 60%
      height: 60%
</style>
