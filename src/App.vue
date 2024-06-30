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
  background-color: #f1eea1de;
  background-image: url(./assets/backgroundv2.png);
  background-size: contain;
  background-repeat: repeat;
}

#app {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 500;
  text-align: center;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.page-container {
  max-width: 30%;
  border-radius: 10px;
  min-width: 380px;
  min-height: 509px;
  background-color: #F1EFA1;
  border: 2px solid #EA94C5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
