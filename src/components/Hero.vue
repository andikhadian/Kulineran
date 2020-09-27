<template>
  <div>
    <!-- Desktop -->
    <div class="d-none d-md-block">
      <div class="row mt-5">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Delicious Food Menu,</strong>
                <br />in Your Gadget.
              </h2>
              <p>Let's order now and get your favorite foods</p>
              <router-link href class="btn btn-success" to="/foods">Order Now</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/hero.png" width="100%" alt />
        </div>
      </div>
    </div>
    <!-- Desktop -->

    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-5">
        <div class="col-md-6 mb-5">
          <img src="../assets/hero.png" width="100%" alt />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Delicious Food Menu,</strong>
                <br />in Your Gadget.
              </h2>
              <p>Let's order now and get your favorite foods</p>
              <a href class="btn btn-success">Order Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile -->
  </div>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style>
</style>