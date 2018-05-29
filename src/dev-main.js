import Vue from 'vue';

window.$ = window.JQuery = require('jquery');
require('jquery-ui-dist/jquery-ui.min.js');
require('jquery-ui-dist/jquery-ui.min.css');

import Vue2DatePicker from './Vue2DatePicker.vue';

Vue.component('vue2-date-picker', Vue2DatePicker);

new Vue({
  el: '#app'
})

export default Vue2DatePicker;