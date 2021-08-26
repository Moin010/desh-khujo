<template>
    <h1> Country details for {{ id }} </h1>

    <div v-for="country in countries">
        <div v-if="country.name === id"> 
            <p> Country Name: {{country.name}}</p>
        </div>

    </div>

    <div v-for="place in location">
        <div v-if="place.name === id"> 
            <p> long: {{place.long}}</p>
            <p> lat: {{place.lat}}</p>
        </div>

    </div>

    <div v-for="money in currencies">
        <div v-if="money.name === id"> 
            <p> oi desher tk: {{money.currency}}</p>
        </div>

    </div>

    






</template>




<script>







export default {
    props:['id'],
    name:"CountryInfo",
    data(){
        
    },
    created(){
      this.$store.dispatch('getCountry')
      this.$store.dispatch('getPopulation')
      this.$store.dispatch('getLocation')
      this.$store.dispatch('getCurrencies')
      this.$store.dispatch('getCapital')

    },

    computed:{
      countries() {
        return this.$store.state.countries
      },
      population() {
        return this.$store.state.population
      },
      location() {
        return this.$store.state.location
      },
      currencies() {
        return this.$store.state.currencies
      },
      capital() {
        return this.$store.state.capital
      }
    }

}
</script>

<style>

</style>