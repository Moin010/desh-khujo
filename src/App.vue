<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/country-list">County List</router-link> 
      <br>

      <button @click="back">  Go Back </button>
      <button @click="forward">  Go Forward </button>
  
    </div>  
  </div>


  <router-view/>
</template>

<script>


export default {

  name: 'App',
  data () {
    return {
      route : "This is main page"
    }
  },
  methods:{
    back(){
      this.$router.go(-1)
    },
     forward(){
      this.$router.go(1)
    }
  }

}


</script>





<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
