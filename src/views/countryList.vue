<template>
  <div id="countrylist">
    <h1> Heading</h1>

    <button v-for="country in countries" >
      {{country.name}}
    </button>
    
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
    }
  },

}
</script>

<style>

</style>