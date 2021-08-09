import Vue from 'vue';
import App from './App.vue';
import router from './router'
import store from './store';

//components

import Icon from "./components/Icon/Icon";
import Dog from "./components/Dog/Dog";

Vue.component('Icon', Icon);
Vue.component('Dog', Dog);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
