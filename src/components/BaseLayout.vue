<template>
  <div class="base">
    <div class="content">
      <slot />
    </div>
    <cloud />
  </div>
</template>

<script>
import Cloud from '@/components/Cloud'
export default {
  name: 'BaseLayout',
  components: {
    Cloud
  }
}
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@700&display=swap')
.base
  width: 100%
  min-height: 100vh
  font-family: 'Nunito Sans', sans-serif
  font-size: 15px
  display: flex
  flex-direction: column
  // dynamic background
  background: linear-gradient(-45deg, #23a6d5, #23d5ab, #36c, #8dcbf3) 0 50%
  animation: gradientBG 20s ease infinite
  animation-delay: 10s
  background-size: 400% 400%
  .content
    flex-grow: 1

@keyframes gradientBG
  0%
    background-position: 0 50%
  50%
    background-position: 100% 50%
  100%
    background-position: 0 50%

</style>
