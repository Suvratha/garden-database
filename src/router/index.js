import Vue from 'vue'
import VueRouter from 'vue-router'
import GardenList from '../views/GardenList.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'GardenList',
    component: GardenList
  }
]

const router = new VueRouter({
  routes
})

export default router
