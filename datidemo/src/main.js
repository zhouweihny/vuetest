// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'//vuex
import zutil from './util/util'
import moment from 'moment'
import http from './util/http'

// 引入全部组件
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);

Vue.config.productionTip = false
Vue.prototype.zutil = zutil;
Vue.prototype.http = http;

// {{ dateTime | time('HH:mm:ss')}}
Vue.filter('time', function (value, formatString) {
  formatString = formatString || 'YYYY-MM-DD HH:mm';
  return moment(value).format(formatString);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
