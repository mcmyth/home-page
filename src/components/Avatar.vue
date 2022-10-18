<template>
  <div class="container">
    <div class="avatar">
      <img src="https://m.360buyimg.com/babel/jfs/t1/204336/3/27161/10110/63441fdeEc5f47db7/6159bd68227093c7.png" alt="avatar">
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
$ripple-color: white
$border-color: white
.container
  display: inline-block
  padding: 70px 0 20px 0
  box-sizing: border-box
  margin: 0 40px
.avatar
  max-width: $avatar-size
  max-height: $avatar-size
  margin: 0 auto
  border-radius: 50%
  overflow: hidden
  border: $border-color 5px solid
  background-color: $border-color
  animation: at-ripple 1.5s linear infinite
  @include flex-center
  img
    width: 100%
    height: 100%

@keyframes at-ripple
  0%
    box-shadow: 0 4px 10px rgba($ripple-color,0.1), 0 0 0 0 rgba($ripple-color,0), 0 0 0 5px rgba($ripple-color,0), 0 0 0 10px rgba($ripple-color,0)
  50%
    box-shadow: 0 4px 10px rgba($ripple-color,0.1), 0 0 0 0 rgba($ripple-color,0.2), 0 0 0 10px rgba($ripple-color,0.2), 0 0 0 25px rgba($ripple-color,0.2)
  100%
    box-shadow: 0 4px 10px rgba($ripple-color,0.0), 0 0 0 0 rgba($ripple-color,0.0), 0 0 0 18px rgba($ripple-color,0.0), 0 0 0 45px rgba($ripple-color,0.0)
@keyframes jump
  0%
    transform: translateY(0)
  50%
    transform: translateY(10px)
  100%
    transform: translateY(0)
</style>
