// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/iconfont_css/iconfont.css';
import './assets/iconfont_css/iconfont.js';
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/index.css'
import Moment from 'moment'

Vue.filter('dateformat', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return Moment(new Date(dataStr)).format(pattern)
  })


Vue.filter('dateformatEasy', function(dataStr, pattern = 'YYYY-MM-DD') {
  return Moment(new Date(dataStr)).format(pattern)
})

Vue.use(VueAxios, axios)
Vue.use(Vant);
Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:8080/ordering1_0/';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
