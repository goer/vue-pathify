import { make } from "vuex-pathify";

const state = {
  products: {},
  delivery: {},
  payment: {},
  total: 0
};

const getters = {
  // make all getters (optional)
  ...make.getters(state),
  getTotal: state => {
    var total = 0;
    for (var p in state.products) {
      total += parseInt(state.products[p].qty);
    }
    return total;
  }
};
const mutations = make.mutations(state);

const actions = {
  // automatically create only `setItems()` action
  ...make.actions(state)
};

const cart = {
  namespaced: true,
  name: "cart",
  state,
  getters,
  mutations,
  actions
};

export default cart;
