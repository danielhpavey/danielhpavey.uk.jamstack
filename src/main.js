// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}

import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatPrettyDate', function(value) {
  if (value) {
    return moment(String(value)).format('dddd Do MMMM YYYY')
  }
});
