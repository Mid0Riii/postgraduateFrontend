import Vue from 'vue'
import App from './App.vue'
import Metro from 'metro4'
import 'metro4/build/css/metro-all.min.css'
import 'metro4/build/js/metro.min'
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import element from "../element";
Vue.config.productionTip = false;
Vue.use(element);

new Vue({
  render: h => h(App),
  mounted: function () {
    Metro.init();
  }
}).$mount('#app');
import axios from 'axios'
Vue.prototype.$axios = axios;
