// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VCalendar from 'v-calendar'
import 'v-calendar/lib/v-calendar.min.css'
import vueFb from './plugins/fb-sdk.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faGlobe, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'

library.add(faCheck, faFacebookSquare, faGlobe, faMobileAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VCalendar)
Vue.use(vueFb, {
  appId: '2209799002607600',
  autoLogAppEvents: true,
  xfbml: true,
  version: 'v3.2'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App/>'
})
