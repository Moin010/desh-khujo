<template>
  <div>
      <h1>Country List</h1>
  </div>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)



export default {
    name:"CountryList",
    mounted(){

        axios.get('https://countriesnow.space/api/v0.1/countries/capital')
        .then((respo)=>{
            console.log(respo.data.name)
        })
    }
}
</script>

<style>

</style>