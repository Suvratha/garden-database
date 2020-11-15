import Vue from 'vue'
import VueRouter from 'vue-router'
import CreatePlantInfo from '../views/CreatePlantInfo.vue'
import GardenList from '../views/GardenList.vue'
import Authentication from '../views/Authentication.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/list',
    name: 'GardenList',
    component: GardenList
  },
  {
    path: '/create',
    name: 'CreatePlantInfo',
    component: CreatePlantInfo
  },
  {
    path: '/',
    name: 'Login',
    component: Authentication
  }
]

const router = new VueRouter({
  routes
})

export default router
