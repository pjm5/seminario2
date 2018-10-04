import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueProgressBar from 'vue-progressbar'
import VueLocalStorage from 'vue-localstorage'
import Vuemoment from 'vue-moment'

Vue.config.productionTip = false

Vue.use(VueLocalStorage)

Vue.use(Vuemoment)

Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDQnGYwqSCRHopYLnhAfoFFSADzSnfNXHE'
  }
})

const vueApp = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

console.log(vueApp)
