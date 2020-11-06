import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import myPlugins from './plugins/myPlugins';
import VueIziToast from 'vue-izitoast';
import 'izitoast/dist/css/iziToast.css';
import 'izitoast/dist/css/iziToast.min.css';
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);
Vue.use(VueIziToast);
Vue.config.productionTip = false

Vue.use(myPlugins)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
