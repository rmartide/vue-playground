import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

Vue.config.productionTip = false;

Vue.directive('focus', {
  inserted: (el) => {
    el.focus();
  }
});

new Vue({
  render: h => h(App)
}).$mount('#app')
