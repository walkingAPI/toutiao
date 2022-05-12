import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.config.productionTip = false

// 自动设置 Rem 基准值（ html 标签字体大小）
import 'amfe-flexible'

Vue.use(Vant);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
