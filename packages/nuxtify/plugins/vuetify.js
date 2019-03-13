import Vue from 'vue'
import colors from 'vuetify/es5/util/colors'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify, {
  theme: {
    primary: '#40526b', // a color that is not in the material colors palette
    accent: '#01d4a7',
    secondary: colors.grey.darken3,
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  },
  options: {
    customProperties: true
  }
})
