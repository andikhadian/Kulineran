import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Foods from '../views/Foods.vue'
import DetailFood from '../views/DetailFood.vue'
import Cart from '../views/Cart.vue'
import OrderSuccess from '../views/OrderSuccess.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/foods',
    name: 'Foods',
    component: Foods
  },
  {
    path: '/foods/:id',
    name: 'Detail Food',
    component: DetailFood
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/order-Success',
    name: 'Order Success',
    component: OrderSuccess
  },
]

const router = new VueRouter({
  routes
})

export default router
