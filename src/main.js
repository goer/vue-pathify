import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import IdleVue from "idle-vue";

const eventsHub = new Vue();
const options = {
  eventEmitter: eventsHub,
  idleTime: 10000
};

Vue.use(IdleVue, options);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/login"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = store.get("user/isLogin");
  //const loggedIn = false

  console.log("isLogin", loggedIn);
  console.log("authRequired", authRequired);

  if (authRequired && !loggedIn) {
    return next("/login");
  }

  next();
});

new Vue({
  store,
  router,
  data() {
    return {
      messageStr: ""
    };
  },
  onIdle() {
    this.messageStr = "ZZZ";
    console.log("idle logout", router.currentRoute);
    if (router.currentRoute.path !== "/login") router.push("/login");
  },
  onActive() {
    this.messageStr = "Hello";
  },
  render: h => h(App)
}).$mount("#app");
