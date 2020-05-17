<template>
  <div id="app">
    <p>user: {{username}}</p>
    <h2>Cart</h2>
    <p>
      <input type="text" placeholder="Name" v-model="itemName">
      <input type="number" placeholder="Qty" v-model="itemQty">
      <button @click="setItem()">Set</button>
    </p>
    <p>Total: {{getTotal}}</p>
    <ul>
      <li v-for="(c,i) of products" :key="i">{{c}}</li>
    </ul>
  </div>
</template>

<script>
import { get, sync, call } from "vuex-pathify";

export default {
  name: "App",
  data() {
    return {
      itemName: "",
      itemQty: 0
    };
  },
  computed: {
    products: sync("cart/products"),
    getTotal: get("cart/getTotal"),
    username: get("user/username"),
    isLogin: get("user/isLogin")
  },
  methods: {
    setItem() {
      this.$store.set("cart/products@" + this.itemName, {
        name: this.itemName,
        qty: this.itemQty
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
