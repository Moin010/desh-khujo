import { createRouter, createWebHistory } from 'vue-router'

import CountryList from '../views/countryList.vue'
import CountryInfo from '../views/countryInfo.vue'
import NotFoundPage from '../views/404.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: CountryList
  },
  {
    path: '/country-list',
    name: 'Country-List',
    component: CountryList
  },
  
  {
    path: '/about-country/:id',
    name: 'CountryInfo',
    component: CountryInfo,
    props: true
  },
  // 404 page
  {
    path: '/:catchAll(.*)',
    name: '404 page',
    component: NotFoundPage
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
