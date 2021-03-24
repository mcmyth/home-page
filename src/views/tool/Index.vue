<template>
<div class="tool">
  <div class="container">
    <div class="title">
      <router-link  v-if="isHome" to="/"><div class="back">
        <svg version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 591.3 540.6" overflow="visible" xml:space="preserve"><g><path d="M489.4,237.9c0,2.5,0,4.3,0,6.1c0,69.5,0,139,0.1,208.5c0,19.2,0.4,38.3,0.5,57.5c0,3.2-0.2,6.3-0.6,9.5c-1.5,11.1-10.6,19.8-21.8,20.7c-4.1,0.3-8.3,0.5-12.5,0.5c-107.2,0-214.4,0-321.6,0c-4,0-8-0.2-12-0.5c-13.1-1-22.8-11-23.3-24.2c-0.1-2.3,0-4.7,0-7c0-87.8,0-175.6,0-263.5c0-2.1,1.1-5.1-0.9-6c-2.1-0.9-3.5,2-5,3.4c-16.5,15.2-33,30.5-49.6,45.8c-6.8,6.3-14.8,8.8-24,6.5c-8.9-2.2-15.4-7.4-17.8-16.4c-2.4-8.9,0.3-16.7,7.2-23c18-16.6,35.9-33.2,53.9-49.9c64.8-60,129.5-119.9,194.3-179.9c6.5-6,12.9-12.1,19.5-18c11.9-10.7,25.9-10.7,37.7,0.2c37.3,34.5,74.5,69.1,111.8,103.6c51.4,47.7,102.8,95.3,154.2,143c1,0.9,2,1.8,2.9,2.7c10.2,9.6,11.8,21.4,4.3,31.2c-7.9,10.3-22.5,13-33.6,6c-2.1-1.3-4-3-5.8-4.7c-16.8-15.5-33.5-31-50.3-46.4C494.9,241.7,493.1,239.4,489.4,237.9z"/></g></svg>
      </div></router-link>
      <drawers :hideButton="isHome" :routers="getRouters"/>
      <span>{{ title }}</span>
    </div>
    <div class="tool-list" v-if="isHome">
      <ul>
        <router-link v-for="(item, index) in getRouters.children" :key="index" :to="getRouters.path + item.path"><li>{{ item.meta.title }}</li></router-link>
      </ul>
    </div>
    <div class="view">
      <router-view/>
    </div>
  </div>
</div>
</template>

<script>
import drawers from '@/components/drawers'
import tool from '@/router/modules/tool'
export default {
  name: 'tool',
  data () {
    return {
      title: ''
    }
  },
  computed: {
    isHome () {
      return this.getRouters.path === this.$route.path || this.getRouters.path === this.$route.path + '/'
    },
    getRouters () {
      const routers = []
      tool(routers)
      return routers[0]
    }
  },
  created () {
    this.title = document.title
  },
  components: {
    drawers
  },
  watch: {
    $route: {
      handler: function(val, oldVal) {
        this.title = document.title
      },
      deep: true
    }
  }
}
</script>

<style scoped lang="sass">
@import "src/assets/style/global"
$main-color: #128ff2
.title
  @include title
  .back
    float: left
    width: 50px
    height: 50px
    background-color: red
    @include title-button-left
.view
  padding: 20px
  margin-top: 20px
.tool-list
  margin-top: 20px
  ul
    margin: 0 auto
    padding: 10px
    box-sizing: border-box
    display: flex
    align-items: center
    flex-direction: column
    list-style: none
    a
      border-radius: 8px
      @include default-a
      box-sizing: border-box
      padding: 25px 15px
      width: 100%
      max-width: 250px
      margin: 10px 0
      background-color: white
      @include base-shadow
      transition: color .3s, box-shadow .3s
      &:hover
        color: $main-color !important
</style>
