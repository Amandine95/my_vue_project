// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'  // 引入store
import Iview from 'iview'  // 引入iview
import 'iview/dist/styles/iview.css'
axios.defaults.withCredentials = true;  //允许携带cookies

Vue.config.productionTip = false

Vue.prototype.$ajax=axios
Vue.prototype.HOST='/api'
Vue.use(Iview)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,  // 全局注入store,全局可使用this.$store
  components: { App },
  template: '<App/>'
})
