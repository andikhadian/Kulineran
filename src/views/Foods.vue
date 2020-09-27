<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb p-0 bg-transparent">
              <li class="breadcrumb-item">
                <router-link to="/" class="font-weight-normal text-secondary">Home</router-link>
              </li>
              <li
                class="breadcrumb-item active font-weight-bold text-dark"
                aria-current="page"
              >Foods</li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h2>
            List of
            <strong>Foods</strong>
          </h2>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              name="q"
              id="q"
              class="form-control"
              placeholder="Search all foods here..."
              @keyup="searchFoods"
            />
            <div class="input-group-prepend">
              <span class="input-group-text bg-success text-white" id="basic-addon1">
                <b-icon-search></b-icon-search>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-3 mx-auto mt-5" v-for="food in foods" :key="food.id">
          <CardFood :food="food" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import CardFood from "@/components/CardFood.vue";
import axios from "axios";

export default {
  name: "Foods",
  components: {
    Navbar,
    CardFood
  },
  data() {
    return {
      foods: [],
      search: ""
    };
  },
  methods: {
    setFoods(data) {
      this.foods = data;
    },
    searchFoods() {
      axios
        .get("http://localhost:3000/foods?q=" + this.search)
        .then(res => {
          this.setFoods(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/foods")
      .then(res => {
        this.setFoods(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
.input-group .form-control {
  height: 48px;
}
</style>