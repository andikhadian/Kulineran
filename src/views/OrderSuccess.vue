<template>
  <div>
    <NavBar />
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col text-center">
          <img src="../assets/menunggu.png" class="mb-4" width="300" alt />
          <h2>
            <strong>Order Food Success</strong>
          </h2>
          <h4>Your food will be ready soon</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/Navbar";
export default {
  components: {
    NavBar
  }
};
</script>

<style>
</style>