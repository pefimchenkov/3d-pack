import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import { BootstrapVue } from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from 'aos'
import BackTop from '@mlqt/vue-back-top'
import YmapPlugin from 'vue-yandex-maps'
import Vuelidate from 'vuelidate'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

require('dotenv').config()

const settings = {
  apiKey: process.env.VUE_YM_KEY,
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
}

Vue.use(BackTop)
Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.use(YmapPlugin, settings)

Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
  },
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
