<template>
<div id="error-page">
  <div id="container">
    <div id="main">
      <div class="wrapper">
        <div id="code">404</div>
        <div id="message">Page Not Found</div>
        <div id="url">{{ currentURL }}</div>
        <span class="line"></span>
      </div>
      <div class="wrapper">
        <div id="tips">
          <div id="help">
            <ul>
              <li>该内容可能还没有发布</li>
              <li>该内容可能不存在</li>
            </ul>
          </div>
        </div>
        <button id="back" @click="back">返回上一页</button>
      </div>
    </div>
  </div>
  <div id="footer">
    Copyright © {{ new Date().getFullYear() }} by MC Myth. All rights reserved.
  </div>
</div>
</template>

<script>
export default {
  name: 'Error404',
  data() {
    return {
      currentURL: ''
    }
  },
  methods: {
    back() {
      window.location.href = document.referrer
      this.$router.back()
    }
  },
  created() {
    this.currentURL = window.location.href
  }
}
</script>

<style lang="sass" scoped>
$main-color: white
$main-background-color: #4285F4
#error-page
  margin: 0
  padding: 0
  min-height: 100vh
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  background-color: #F8F9FA
  font-size: 15px
  color: #555
  font-family: "Roboto", "Helvetica", "Arial", sans-serif
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
  background-size: cover

a, a:visited
  color: $main-background-color
  text-decoration: none
  cursor: pointer
  &:hover
    text-decoration: underline

#container
  width: 90%
  flex-grow: 1
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  #main
    margin: 20px 0
    padding: 20px
    box-sizing: border-box
    width: 100%
  #back
    border: none
    cursor: pointer
    border-radius: 5px
    padding: 10px
    margin: 15px 0
    transition: all .3s ease-in-out
    outline: none
    background-color: $main-background-color
    color: white
    float: right

.wrapper
  max-width: 400px
  margin: 0 auto
  padding: 0 20px
  width: 90%
  box-sizing: border-box
  #code
    text-align: center
    font-size: 2.5rem
  #message
    text-align: center
    font-size: 1.2rem
    color: #888888
  #url
    color: #b0b0b0
    text-align: center
    margin-top: 10px
    word-break: break-all
  #tips
    clear: both
  #help ul
    padding: 0
    margin: 0
    text-align: left
    li
      margin: 5px

.line
  display: block
  width: 95%
  height: 1px
  margin: 10px auto
  background-color: #c6c6c6

#footer
  width: 100%
  text-align: center
  padding: 10px 0
</style>
