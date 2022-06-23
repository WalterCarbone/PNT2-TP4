<template>
  <div class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>Trabajo Practico 4 Vue CLI - Router / Formularios</h1>
      <br>
  <Formulario />
     <!-- <Navbar />
      <router-view></router-view>-->

  

    </div> 
  </div>
</template>

<script>
import Formulario from './components/Formulario.vue'

export default {
  name: 'App',
  components: {
   Formulario
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
  margin-top: 60px;
}
</style>
