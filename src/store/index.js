import { createStore } from 'vuex'
import axios from 'axios'




export default createStore({
  state: {
    population: [],
    location: [],
    flag: [],
    currencies: [],
    capital: [],
    cities: [],
    codes: [],
    states: []


  },
  mutations: {
    SET_COUNTRIES (state, countries){
      state.countries = countries
    }
  },
  actions: {
    getCountry({ commit }) {
      axios.get('https://countriesnow.space/api/v0.1/countries/positions')
        .then( (data)=> {
          console.log(data.data.data);
          // commit('SET_COUNTRIES', data.country),
        })
    }
  },
 
  modules: {
  }
})
