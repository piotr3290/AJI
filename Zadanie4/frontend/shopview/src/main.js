import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue";
import router from "./router";
import VueTelInput from 'vue-tel-input'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueTelInput);


new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app');
