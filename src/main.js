
import Vue from 'vue'
import App from './App'
import router from './router'
// import 'D:/Netease-demo/Netease-vue2/netease-vue2/node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'D:/Netease-demo/Netease-vue2/netease-vue2/node_modules/bootstrap/dist/js/bootstrap.min.js';
// import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
