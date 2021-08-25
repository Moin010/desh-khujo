import { createRouter, createWebHistory } from 'vue-router'

import CountryList from '../views/countryList.vue'

const routes = [
  {
    path: '/',
    name: 'Country',
    component: CountryList
  },
  {
    path: '/countrylist',
    name: 'country',
    component: CountryList
  }
  
 ,
  
  /*
  {
    path: '/country/:id',
    name: 'About',
    component: ,
  }*/
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
