import '@mdi/font/css/materialdesignicons.css'
import './assets/main.css'
import 'vuetify/styles'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import { createI18n, useI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const i18n = createI18n({
    legacy: false,
    locale: 'id',
    fallbackLocale: 'en'
})

const vuetify = createVuetify({
 components,
 directives,
 ssr: true,
 locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n })
 }
})

app.use(createPinia())
app.use(i18n)
app.use(router)
app.use(vuetify)

app.mount('#app')
