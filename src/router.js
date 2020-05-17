import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import Login from "./Login";
import Home from "./Home";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/home", component: Home },
  { path: "/login", component: Login },
  { path: "*", redirect: "/" }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

export default router;
