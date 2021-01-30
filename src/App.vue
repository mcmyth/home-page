<template>
  <div id="app" v-cloak>
    <router-view v-if="!invalidRoute"/>
    <error404 v-else></error404>
  </div>
</template>
<script>
import Error404 from '@/components/Error404'
export default {
  name: 'App',
  computed: {
    invalidRoute () {
      return !this.$route.matched || this.$route.matched.length === 0
    }
  },
  components: {
    Error404
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
[v-cloak]{
  display: none;
}
body,html{
  margin: 0;
  font-size: 15px;
  color: #535353;
  background-color: #ececec;
  font-family: 'Segoe UI', Helvetica, Arial, sans-serif;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
