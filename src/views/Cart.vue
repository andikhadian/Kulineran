<template>
  <div class="cart">
    <NavBar :updateCart="carts" />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb p-0 bg-transparent">
              <li class="breadcrumb-item">
                <router-link to="/" class="font-weight-normal text-secondary">Home</router-link>
              </li>
              <li class="breadcrumb-item active font-weight-bold text-dark" aria-current="page">Cart</li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h2>Cart</h2>
          <div class="table-responsive mt-4">
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Image</th>
                  <th>Food</th>
                  <th>Notes</th>
                  <th>Qty</th>
                  <th class="text-right">Price (IDR)</th>
                  <th class="text-right">Sub Price (IDR)</th>
                  <th class="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in carts" :key="item.id">
                  <td class="align-middle">
                    <strong>{{index+1}}</strong>
                  </td>
                  <td class="align-middle">
                    <img
                      :src="'../assets/images/' + item.food.img"
                      class="my-3 rounded img-thumbnail"
                      width="150px"
                    />
                  </td>
                  <td class="align-middle">
                    <strong>{{item.food.name}}</strong>
                  </td>
                  <td class="align-middle">
                    <strong>{{item.notes ? item.notes : "-"}}</strong>
                  </td>
                  <td class="align-middle">
                    <strong>{{item.qty}}</strong>
                  </td>
                  <td class="align-middle text-right">
                    <strong>{{item.food.price}}</strong>
                  </td>
                  <td class="align-middle text-right text-success">
                    <strong>{{item.food.price * item.qty}}</strong>
                  </td>
                  <td class="align-middle text-center text-danger">
                    <b-icon-trash @click="removeCart(item.id)"></b-icon-trash>
                  </td>
                </tr>
                <tr>
                  <td colspan="6" class="text-right text-success">
                    <h5>
                      <strong>Grand Total (IDR) :</strong>
                    </h5>
                  </td>
                  <td class="text-right text-success">
                    <h5>
                      <strong>{{grandTotal}}</strong>
                    </h5>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="row justify-content-end mt-5">
        <div class="col-md-4">
          <form v-on:submit.prevent>
            <div class="form-group">
              <label for="customer">Customer</label>
              <input
                type="text"
                name="customer"
                id="customer"
                v-model="order.customer"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="table">Table</label>
              <input
                type="number"
                name="table"
                id="table"
                v-model="order.table"
                class="form-control"
              />
            </div>
            <button type="submit" class="btn btn-success btn-block" @click="checkout">Checkout Now</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "@/components/Navbar.vue";
export default {
  name: "Cart",
  components: {
    NavBar
  },
  data() {
    return {
      carts: [],
      order: {}
    };
  },
  methods: {
    setCart(data) {
      this.carts = data;
    },
    removeCart(id) {
      axios
        .delete("http://localhost:3000/carts/" + id)
        .then(() => {
          this.$toast.success("Success Remove Food.", {
            type: "success",
            position: "top",
            duration: 3000,
            dismissible: true
          });
        })
        .catch(err => {
          console.log(err);
        });

      axios
        .get("http://localhost:3000/carts/")
        .then(res => {
          this.setCart(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    checkout() {
      if (this.order.customer && this.order.table) {
        this.order.cart = this.carts;
        axios
          .post("http://localhost:3000/orders/", this.order)
          .then(() => {
            this.carts.map(function(item) {
              return axios
                .delete("http://localhost:3000/carts/" + item.id)
                .catch(err => {
                  console.log(err);
                });
            });

            this.$router.push({ path: "/order-success" });
            this.$toast.success("Order Success to Checkout", {
              type: "success",
              position: "top",
              duration: 3000,
              dismissible: true
            });
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.$toast.error("Customer Name and Table is Required Field.", {
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
      .get("http://localhost:3000/carts/")
      .then(res => {
        this.setCart(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  computed: {
    grandTotal() {
      return this.carts.reduce(function(items, data) {
        return items + data.food.price * data.qty;
      }, 0);
    }
  }
};
</script>

<style>
</style>