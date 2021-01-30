import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 暂时不需要用到Vuex
// import store from './store'
Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
