import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import userStore from './modules/user'

Vue.use(Vuex);


const store = () => new Vuex.Store({
  state,
  userStore,
  actions
});

export default store
