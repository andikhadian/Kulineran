<template>
  <div class="detail-food">
    <NavBar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb p-0 bg-transparent">
              <li class="breadcrumb-item">
                <router-link to="/" class="font-weight-normal text-secondary">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/foods" class="font-weight-normal text-secondary">Foods</router-link>
              </li>
              <li
                class="breadcrumb-item active font-weight-bold text-dark"
                aria-current="page"
              >{{food.name}}</li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-md-7">
          <img :src="'../assets/images/' + food.img" class="img-fluid shadow rounded" />
        </div>
        <div class="col-md-5">
          <h2>
            <strong>{{food.name}}</strong>
          </h2>
          <hr />
          <h5>
            Price :
            <strong>IDR {{food.price}}</strong>
          </h5>
          <h5>
            Status :
            <strong
              :class="food.is_ready == true ? 'text-success' : 'text-danger'"
            >{{food.is_ready == true ? 'Ready' : 'Sold Out'}}</strong>
          </h5>
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="qty">Qty</label>
              <input type="number" name="qty" id="qty" class="form-control" v-model="order.qty" />
            </div>
            <div class="form-group">
              <label for="notes">Notes</label>
              <textarea name="notes" id="notes" class="form-control" v-model="order.notes" />
            </div>
            <button
              type="submit"
              class="btn btn-success btn-lg btn-block"
              :class="food.is_ready == false ? 'disabled btn-danger' : ''"
              @click="toOrder"
            >{{food.is_ready == false ? 'Sold Out' : 'Order Now'}}</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "DetailFood",
  components: {
    NavBar
  },
  data() {
    return {
      food: {},
      order: {}
    };
  },
  methods: {
    setFood(data) {
      this.food = data;
    },
    toOrder() {
      if (this.order.qty) {
        this.order.food = this.food;
        axios
          .post("http://localhost:3000/carts", this.order)
          .then(() => {
            this.$router.push({ path: "/cart" });
            this.$toast.success("Success Add to Cart.", {
              type: "success",
              position: "top",
              duration: 3000,
              dismissible: true
            });
          })
          .catch(err => console.log(err));
      } else {
        this.$toast.error("QTY is Required Field.", {
          type: "error",
          position: "top",
          duration: 3000,
          dismissible: true
        });
      }
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/foods/" + this.$route.params.id)
      .then(res => {
        this.setFood(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
</style>