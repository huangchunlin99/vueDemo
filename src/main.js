
import Vue from 'vue'
import App from './App'
import router from './router'
import 'es6-promise/auto'
import store from './store/store.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
