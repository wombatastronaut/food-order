import Vue from 'vue'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import 'lodash'
import accounting from 'accounting'
import App from '~/components/App'

import '~/plugins'
import '~/components'

Vue.config.productionTip = false

Vue.filter('formatMoney', accounting.formatMoney)

/* eslint-disable no-new */
new Vue({
  i18n,
  store,
  router,
  ...App
})
