<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Hero />
      <div class="row mt-5">
        <div class="col-md-6">
          <h3>
            Our
            <strong>Best Foods</strong>
          </h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 mt-5" v-for="food in foods" :key="food.id">
          <CardFood :food="food" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardFood from "@/components/CardFood.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    CardFood
  },
  data() {
    return {
      foods: []
    };
  },
  methods: {
    setFoods(data) {
      this.foods = data;
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-foods")
      .then(res => {
        this.setFoods(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
