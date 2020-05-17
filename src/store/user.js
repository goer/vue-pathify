import { make } from "vuex-pathify";

const state = {
  username: "",
  isLogin: false
};

const getters = {
  // make all getters (optional)
  ...make.getters(state)
};

const mutations = make.mutations(state);

const actions = {
  // automatically create only `setItems()` action
  ...make.actions(state)
};

const user = {
  namespaced: true,
  name: "user",
  state,
  getters,
  mutations,
  actions
};

export default user;
