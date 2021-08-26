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
    states: [],
    countries: []


  },
  mutations: {
    SET_COUNTRIES (state, desh){
      state.countries = desh
    }
  },
  actions: {
    getCountry({ commit }) {
      axios.get('https://countriesnow.space/api/v0.1/countries/currency')
        .then( (data)=> {
          const desh = data.data.data;
          commit('SET_COUNTRIES', desh)
        })
    }
  },
 
  modules: {
  }
})
