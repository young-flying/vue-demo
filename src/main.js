// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引用API文件
import api from './api/index.js'
// 将API方法绑定到全局
Vue.prototype.$api = api

// 引用验证文件
import utils from './utils/index.js'
// 将工具方法绑定到全局
Vue.prototype.$utils = utils


// 引用工具文件
import Validator from './components/va.js'


Validator.install(Vue)

Vue.config.productionTip = false

import dialog from './components/index';
Vue.use(dialog)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App ,Validator}
})
