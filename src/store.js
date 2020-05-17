import Vue from "vue";
import Vuex from "vuex";
import pathify from "vuex-pathify";

import cart from "./store/cart.js";
import user from "./store/user.js";


// store definition
const store = {
  // state, members, modules, etc
  modules: {
    cart,
    user
  }
};

// store
Vue.use(Vuex);
export default new Vuex.Store({
  plugins: [pathify.plugin], // activate plugin
  ...store
});
