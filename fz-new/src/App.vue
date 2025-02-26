<template>
  <HomePage/>
</template>

<script>
import HomePage from './components/HomePage.vue'
import '@fontsource/inter-tight';

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
#app {
  font-family: 'Inter Variable', 'Inter Placeholder', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
body, html {
  background-color: rgb(31, 5, 31);
  margin: 0; 
  height: 100%; 
}
</style>
