<template>
  <div class="container">
    <div class="avatar">
      <img src="https://pro-file.xiaoheiban.cn/nol/91bb1e24-eb8e-4567-b903-7ad853af671b.png" alt="avatar">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Avatar'
}
</script>

<style lang="sass" scoped>
@import "src/assets/style/global"
$avatar-size: 200px
.container
  display: inline-block
  padding: 70px 0 20px 0
  box-sizing: border-box
  margin: 0 20px
.avatar
  width: $avatar-size
  height: $avatar-size
  margin: 0 auto
  border-radius: 50%
  border: white 5px solid
  overflow: hidden
  background-color: white
  animation: at-ripple 1.5s linear infinite
  @include flex-center
  img
    width: 100%
    height: 100%

@keyframes at-ripple
  0%
    box-shadow: 0 4px 10px rgba(#ffffff,0.1), 0 0 0 0 rgba(#ffffff,0), 0 0 0 5px rgba(#ffffff,0), 0 0 0 10px rgba(#ffffff,0)
  50%
    box-shadow: 0 4px 10px rgba(#ffffff,0.1), 0 0 0 0 rgba(#ffffff,0.2), 0 0 0 10px rgba(#ffffff,0.2), 0 0 0 25px rgba(#ffffff,0.2)
  100%
    box-shadow: 0 4px 10px rgba(#ffffff,0.0), 0 0 0 0 rgba(#ffffff,0.0), 0 0 0 18px rgba(#ffffff,0.0), 0 0 0 45px rgba(#ffffff,0.0)
@keyframes jump
  0%
    transform: translateY(0)
  50%
    transform: translateY(10px)
  100%
    transform: translateY(0)
</style>
