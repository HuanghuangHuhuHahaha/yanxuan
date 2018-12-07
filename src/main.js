import Vue from 'vue'
import 'lib-flexible/flexible.js'
import App from './App.vue'
import router from './router'
import TopHeader from './components/Home_TopHeader/TopHeader.vue'
import GrayLin from './components/Home_GrayLin/GrayLin.vue'
import goTop from './components/Home_goTop/goTop.vue'
import Classify_Header from './components/Classify_Header/Classify_Header.vue'

import './mock/mockSever'

import store from './store/index'
import 'swiper/dist/css/swiper.min.css'


Vue.component('TopHeader',TopHeader)
Vue.component('GrayLin',GrayLin)
Vue.component('goTop',goTop)
Vue.component('Classify_Header',Classify_Header)
new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store
})
