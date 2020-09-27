<template>
  <div class="card card-food">
    <img :src="'assets/images/' + food.img" class="card-img-top" />
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{food.name}}</h5>
      <p class="card-text">
        Price :
        <strong>IDR {{food.price}}</strong>
      </p>
      <p class="card-text">
        Status :
        <strong
          :class="food.is_ready == true ? 'text-success' : 'text-danger'"
        >{{food.is_ready == true ? 'Ready' : 'Sold Out'}}</strong>
      </p>
      <router-link
        class="btn btn-cart btn-lg btn-block mt-auto"
        :to="'/foods/' + food.id"
        :class="food.is_ready == true ? 'btn-success' : 'btn-danger disabled'"
      >{{food.is_ready == true ? 'Add to Cart' : 'Sold Out'}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardFood",
  props: ["food"]
};
</script>

<style>
.card-food {
  height: 400px;
}

.card-food .card-img-top {
  width: 100%;
  height: 200px;
  /* padding: 10px; */
}

.btn-cart {
  width: 100%;
}
</style>