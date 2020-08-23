import Vue from 'vue'
import VueRouter from 'vue-router'
import CreatePlantInfo from '../views/CreatePlantInfo.vue'
import GardenList from '../views/GardenList.vue'

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
  }
]

const router = new VueRouter({
  routes
})

export default router
