import Vue from 'vue';
import App from './App.vue';
import store from './Vuex';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

Vue.config.productionTip = false;


Vue.directive('focus', {
  inserted: (el) => {
    el.focus();
  }
});

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
