<!-- Can uncomment routerlink items in this file if creating a nav bar -->

<template>
  <!-- <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/greg">Greg</RouterLink>
    </nav>
  </div> -->
  <!-- Renders the right component when router links are triggered-->
  <RouterView/>
</template>

<script>
import { RouterView } from 'vue-router'
// import { RouterLink } from 'vue-router'
import '@fontsource/inter-tight';

export default {
  name: 'App',
  components: {
    // RouterLink,
    RouterView,
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
