import confirm from './confirm/index.js'
import alert from './alert/index.js'
import Toast from './toast.js';

const install = function(Vue) {
  //注册全局组件
  Vue.component(alert.name, alert)
  Vue.component(confirm.name, confirm)

  Vue.use(Toast);
  //添加全局API
  Vue.prototype.$alert = alert
  Vue.prototype.$confirm = confirm
}
export default install
