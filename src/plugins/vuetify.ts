/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#27ae60',
          secondary: '#2c3e50',
          background: '#ebedef',
          github: '#2dba4e',
          portfolio: '#16a085',
          publications: '#8e44ad',
          aboutme: '#f39c12',
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#27ae60',
          secondary: '#aec2d3',
          background: '#262b30',
          github: '#2dba4e',
          portfolio: '#16a085',
          publications: '#8e44ad',
          aboutme: '#f39c12',
        },
      },
    },
  },
})
