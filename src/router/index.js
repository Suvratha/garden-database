import Vue from 'vue'
import VueRouter from 'vue-router'
import CreatePlantInfo from '../views/CreatePlantInfo.vue'
import GardenList from '../views/GardenList.vue'
import Authentication from '../views/Authentication.vue'
import DetailsView from '../views/DetailsView.vue'
import EditView from '../views/EditView.vue'

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
    path: '/details/:name',
    name: 'DetailView',
    component: DetailsView
  },
  {
    path: '/edit/:name',
    name: 'EditView',
    component: EditView
  },
  {
    path: '/',
    name: 'Login',
    component: Authentication
  },
]

const router = new VueRouter({
  routes
})

export default router
