import './assets/main.css'
import { ShopifyAppBridge } from '@/plugins/appBridge.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// tailwindcss
import './index.css'
const vuetify = createVuetify({
    components,
    directives,
  })

const app = createApp(App)
app.use(ShopifyAppBridge)
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')
