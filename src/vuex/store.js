import Vue from 'vue'
import Vuex from 'vuex'
// import state from './state'
import actions from './actions'
import mutations from './mutatins'
import getters from './getters'
import toke from './modules/toke'
import shop from './modules/shop'
import user from './modules/user'
Vue.use(Vuex)
/* eslint-disable no-new */
export default new Vuex.Store({
 actions,
 mutations,
 getters,
 modules:{
  toke,
  shop,
  user
 }
})