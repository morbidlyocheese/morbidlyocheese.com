<template>
  <HomePage class='page-container'/>
  <!-- <ComicNav/> -->
</template>

<script>
import HomePage from './components/HomePage.vue';
// import ComicNav from './components/ComicNav.vue';

export default {
  name: 'App',
  components: {
    HomePage,
    // ComicNav
  }
}
</script> 

<style>

html {
  background-image: url(./assets/background.png);
  background-size: contain;
  background-repeat: repeat;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.page-container {
  max-width: 30%;
  border-radius: 5px;
  min-width: 380px;
  min-height: 509px;
  background-color: #ff96eade;
  border: 2px solid #ffa600;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
