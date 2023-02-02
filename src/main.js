import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import TypeNav from '@/components/typeNav';
import Pagination from '@/components/pagination'

Vue.component('TypeNav', TypeNav);
Vue.component('Pagination',Pagination)

Vue.config.productionTip = false

new Vue({
  beforeCreate(){
    //配置全局事件总线
    Vue.prototype.$bus=this;
    //通过vue.prototype 原型对象
    Vue.prototype.$http=http;
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
