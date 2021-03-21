<template>
<div class="tool">
  <div class="container">
    <div class="title"><drawers/><span>在线工具</span></div>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
import drawers from '@/components/drawers'
export default {
  name: 'tool',
  components: {
    drawers
  }
}
</script>

<style scoped lang="sass">
@import "src/assets/style/global"
.title
  @include title
</style>
