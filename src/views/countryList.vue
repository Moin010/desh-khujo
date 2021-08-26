<template>
  <div id="countrylist">

    <h1> World domination targets</h1>


    <div v-for="country in countries">

      router-link

      <p> {{country.name}} </p>
    </div>


  </div>
</template>



<script>



export default {
  data(){
    return 
  },
  created(){
    this.$store.dispatch('getCountry')
    },
  computed:{
    countries: function () {
      return this.$store.state.countries
    },

  },

}
</script>

<style>

</style>