import Vue from 'vue'
import Router from 'vue-router'
import Calendar from '@/components/Calendar'
import PrivacyPolicy from '@/components/PrivacyPolicy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Calendar',
      component: Calendar,
      meta: {
        hasNav: true
      }
    },
    {
      path: '/privacy-policy',
      name: 'Privacy Policy',
      component: PrivacyPolicy
    }
  ]
})
