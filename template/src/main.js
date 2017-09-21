// @flow
import Vue from 'vue'
// import Vuex from 'vuex'
import R from 'ramda'
import App from './App.vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

function aa (): number {
  const b = 2
  return b
}
aa()
R.add(1, 2)
