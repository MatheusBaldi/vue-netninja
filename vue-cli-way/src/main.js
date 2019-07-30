import Vue from 'vue'
import App from './App.vue'
import Ninjas from './components/Ninjas.vue'

// For registering the component globally
// Vue.component('ninjas', Ninjas)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
