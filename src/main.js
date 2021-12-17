import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//国际化
import i18n from './language/i18n'

import "./assets/css/normalize.css"
import "./assets/css/index.css"


Vue.config.productionTip = false
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
 