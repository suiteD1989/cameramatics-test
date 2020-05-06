import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import vuetify from './plugins/vuetify';

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_MAP_API_KEY,
  }
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
