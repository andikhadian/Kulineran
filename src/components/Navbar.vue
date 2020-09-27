<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <div class="container">
        <b-navbar-brand href="#">
          <router-link class="navbar-brand" to="/">Kulineran</router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">
              <router-link class="nav-link" to="/">Home</router-link>
            </b-nav-item>
            <b-nav-item href="#">
              <router-link class="nav-link" to="/foods">Foods</router-link>
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/cart">
                Cart
                <b-icon-bag></b-icon-bag>
                <span
                  class="badge badge-success ml-2"
                >{{updateCart ? updateCart.length : carts.length}}</span>
              </router-link>
            </li>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Navbar",
  props: ["updateCart"],
  data() {
    return {
      carts: []
    };
  },
  methods: {
    setCount(data) {
      this.carts = data;
    }
  },
  created() {
    axios
      .get("http://localhost:3000/carts")
      .then(res => this.setCount(res.data))
      .catch(err => console.log(err));
  }
};
</script>

<style>
</style>