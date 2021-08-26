<template>
  <div id="countrylist">
        <h1> Country Name List</h1>   
    <div v-for="country in countries">
      <router-link :to="{ name: 'CountryInfo', params: {id: country.name}}">
         <p> {{country.name}} </p>
      </router-link>  
    </div>
  </div>
</template>




<script>

  export default {
    data(){
     
    },
    created(){
      this.$store.dispatch('getCountry')
    },
    computed:{
      countries() {
        return this.$store.state.countries
      },
    }

  }
</script>
