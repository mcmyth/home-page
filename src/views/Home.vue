<template>
  <base-layout>
      <avatar />
      <div class="name">MC Myth</div>
      <button-list />
  </base-layout>
</template>

<script>
import Avatar from '@/components/Avatar'
import ButtonList from '@/components/ButtonList'
import BaseLayout from '@/components/BaseLayout'
export default {
  name: 'Home',
  components: {
    Avatar,
    ButtonList,
    BaseLayout
  }
}
</script>

<style lang="sass" scoped>
@import "src/assets/style/global"
.name
  margin-top: 30px
  font-size: 2.5rem
  color: white
</style>
