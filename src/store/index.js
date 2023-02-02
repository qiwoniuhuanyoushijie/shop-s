import Vue from 'vue'
import Vuex from 'vuex'

//导入模块
import home from './home'
import search from './search';
Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    home,
    search
  }
})
