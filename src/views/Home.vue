<template>
  <div class="home">
    <div class="content">
      <avatar />
      <div class="name">MC Myth</div>
      <button-list />
    </div>
    <cloud />
  </div>
</template>

<script>
import Avatar from '@/components/Avatar'
import ButtonList from '@/components/ButtonList'
import Cloud from '@/components/Cloud'
export default {
  name: 'Home',
  components: {
    Avatar,
    Cloud,
    ButtonList
  }
}
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@700&display=swap')
.home
  width: 100%
  min-height: 100vh
  background: linear-gradient(-45deg, #23a6d5, #23d5ab, #36c, #8dcbf3) 0 50%
  animation: gradientBG 20s ease infinite
  animation-delay: 10s
  background-size: 400% 400%
  font-family: 'Nunito Sans', sans-serif
  font-size: 15px
  display: flex
  flex-direction: column
  .content
    flex-grow: 1
    min-height: 400px
    .name
      margin-top: 30px
      font-size: 2.5rem
      color: white
@keyframes gradientBG
  0%
    background-position: 0 50%
  50%
    background-position: 100% 50%
  100%
    background-position: 0 50%

</style>
