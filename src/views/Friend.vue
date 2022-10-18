<template>
  <div class="friend">
    <div class="title" role="navigation">
      <router-link rel="noopener" to="/" title="返回主页" class="back">
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-arrow-left fa-w-14"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" class=""></path></svg>
      </router-link>
      <span>Friends</span>
    </div>
    <div class="notice">
      <b>Notice:</b><br/>网站图标获取自domain.xxx/favicon.ico,如需变更此列表可通过以下方式:<br/>
      <a href="https://github.com/mcmyth/home-page/blob/main/src/config.js">[在Github上提交PR]</a>
      <a href="tencent://message/?uin=1440126177&Site=&Menu=yes">[通过QQ联系我]</a>
      <a href="mailto:personnpc@gamil.com">[发送邮件]</a>
    </div>
    <div class="list-container">
      <ul class="list">
        <li :class="isActive === index ? 'card active' : 'card'" v-for="(item,index) in friendLink" :key="index">
          <div class="name" @click="activeCard(index)">{{ item.name }}</div>
          <div class="content">
            <div class="link" v-for="(link,index) in item.link" :key="index" >
              <a target="_blank" :href="link"><img onerror="this.src = '/assets/icon/web.svg'" :src="link + '/favicon.ico'" alt="" class="favicon">{{ link }}</a>
            </div>
            <div class="description" v-if="item.description">{{ item.description }}</div>
          </div>
        </li>
      </ul>
      <div :class="isActive !== null ? 'bg active' : 'bg'" @click="activeCard(null)"></div>
    </div>
    <div class="footer"><a target="_blank" href="http://beian.miit.gov.cn">{{ beian }}</a></div>
  </div>
</template>

<script>
import config from '@/config'
export default {
  name: 'Friend',
  data() {
    return {
      beian: config.beian,
      friendLink: config.friendLink,
      isActive: null
    }
  },
  methods: {
    activeCard (index) {
      this.isActive = index === this.isActive ? null : index
    }
  }
}
</script>

<style lang="sass" scoped>
@import "src/assets/style/global"
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@700&display=swap')
$main-color: #128ff2
$bg-color: white
$vice-color: #59687f
$edge-spacing: 20px
$page-width: 80vw
.friend
  display: flex
  flex-direction: column
  min-height: 100vh
  .notice
    margin: $edge-spacing auto
    padding: $edge-spacing 0
    width: 100%
    max-width: $page-width
    border-bottom: 1px solid lighten($vice-color, 40%)
    line-height: 1.6rem
    a
      @include default-a
      color: #128ff2 !important
      display: inline-block
      margin: 0 5px
      &:hover
        text-decoration: underline
.title
  @include title
  .back svg
    @include title-button-left
.list-container
  flex-grow: 1
  .list
    width: 100%
    justify-content: center
    align-items: flex-start
    text-align: left
    display: flex
    flex-wrap: wrap
    max-width: $page-width
    margin: 0 auto
    padding: 0
  .bg
    pointer-events: none
    display: block
    position: fixed
    background-color: black
    opacity: 0
    width: 100vw
    height: 100vh
    z-index: 0
    left: 0
    top: 0
    transition: opacity .3s ease-in-out
    &.active
      pointer-events: unset
      opacity: 30%
  .card
    $border-color: #ebeff2
    $card-width: 350px
    background-color: $bg-color
    border-radius: 8px
    min-width: 300px
    word-break: break-all
    position: relative
    @keyframes jump
      0%
        opacity: 0
      50%
        opacity: 0
      100%
        opacity: 1
        position: fixed
    @media screen and (max-width: $card-width + 100px)
      min-width: auto
      width: 100%
    color: $vice-color
    @include base-shadow
    margin: 15px
    overflow: hidden
    .description
      padding: 10px
      text-align: center
      background-color: darken($bg-color, 3%)
      border-radius: 8px
    .name
      font-size: 1.2rem
      text-align: center
      padding: 15px 30px
      @include a
    .content
      //display: none
      max-height: 0
      transition: all .2s ease-in-out
      @keyframes jump2
        0%
          display: none
        100%
          display: block
    &.active
      z-index: 3
      .name
        border-bottom: 1px solid $border-color
      .content
        transition: max-height .3s linear
        //display: block
        max-height: 300px
        padding: 10px
    .link
      @include scale-button($border-color)
      .favicon
        width: 20px
        height: 20px
        vertical-align: middle
        margin-right: 5px
        background-color: $bg-color
      a
        padding: 15px 20px
        display: block
        @include a
.footer
  font-size: 0.9rem
  height: 50px
  line-height: 50px
  background-color: #fff
  border-top: 1px solid #e2e2e2
  font-weight: bold
  font-family: 'Nunito Sans', sans-serif
  a
    @include default-a
</style>
