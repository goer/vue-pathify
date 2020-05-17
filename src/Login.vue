<template>
  <div>
    <h2>Login</h2>
    <p>
      <input type="text" placeholder="username" v-model="username">
    </p>
    <p>
      <input type="password" placeholder="password" v-model="password">
    </p>
    <p>
      <button @click="login()">Login</button>
    </p>
  </div>
</template>
<script>
import { get, sync, call } from "vuex-pathify";
import { constants } from "os";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      console.log("login", this.username, this.password);
      if (this.username && this.password === "123") {
        this.$store.set("user/username", this.username);
        this.$store.set("user/isLogin", true);
        this.$router.push("/");
      }
    }
  }
};
</script>

