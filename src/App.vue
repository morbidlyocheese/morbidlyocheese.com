<template>
  <img alt="moc logo" src="./assets/logo_cowbert.png" width="200" >
  <HelloWorld msg="morbidlyocheese.com"/>
  <HomePage/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    HomePage
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
