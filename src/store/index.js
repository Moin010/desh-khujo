import { createStore } from 'vuex'
import axios from 'axios'



export default createStore({
  state: {
    population: [],
    location: [],
    currencies: [],
    capital: [],
    codes: [],
    states: [],
    countries: []


  },
  mutations: {
    SET_COUNTRIES (state, desh){ 
      state.countries = desh
    },
    SET_POPULATION (state, people){  
      state.population = people
    },
    SET_LOCATION (state, elaka){ 
      state.location = elaka
    },
    SET_FLAG (state, flag){   
      state.flag = flag
    },
    SET_CURRENCIES (state, money){    
      state.currencies = money
    },
    SET_CAPITAL (state, rajdhani){      
      state.capital = rajdhani
    },
    SET_DIALCODES (state, code){     
      state.codes = code
    },
    SET_STATES (state, rajjo){     /* baki */
      state.states = rajjo
    },
    
  },
  actions: {
    getCountry({ commit }) {
      axios.get('https://countriesnow.space/api/v0.1/countries/currency')
        .then( (data)=> {
          const desh = data.data.data
          commit('SET_COUNTRIES', desh)
        })
    },
    getPopulation({ commit }) {
      axios.get('https://countriesnow.space/api/v0.1/countries/population')
        .then( (data)=> {
          const population = data.data.data
          commit('SET_POPULATION', population)
        })
    },
    getLocation({ commit }) {
      axios.get('https://countriesnow.space/api/v0.1/countries/positions')
        .then( (data)=> {
          const elaka = data.data.data
          commit('SET_LOCATION', elaka)
        })
    },
    getFlag({ commit }) {
      axios.get('https://countriesnow.space/api/v0.1/countries/flag/images')
        .then( (data)=> {
          const flag = data.data.data
          commit('SET_FLAG', flag)
        })
    },
    getCurrencies({ commit }) {
      axios.get('https://countriesnow.space/api/v0.1/countries/currency')
        .then( (data)=> {
          const money = data.data.data
          commit('SET_CURRENCIES', money)
        })
    },
    getCapital({ commit }) {
      axios.get('https://countriesnow.space/api/v0.1/countries/capital')
        .then( (data)=> {
          const rajdhani = data.data.data
          commit('SET_CAPITAL', rajdhani)
        })
    },
    getDialCode({ commit }) {
      axios.get('https://countriesnow.space/api/v0.1/countries/codes')
        .then( (data)=> {
          const code = data.data.data
          commit('SET_DIALCODES', code)
        })
    },
    getPopulation({ commit }) {
      axios.get('https://countriesnow.space/api/v0.1/countries/states')
        .then( (data)=> {
          const rajjo = data.data.data
          commit('SET_STATES', rajjo)
        })
    },
  },
 
  modules: {
  }
})
