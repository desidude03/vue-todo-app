<template>
  <nav>
    <router-link v-if="isHomePage" to="/"> Home</router-link>
    <router-link v-if="isHomePage || isTodoPage" to="/todos"> Todo's</router-link>
    <router-link v-if="isHomePage" to="/register"> Register</router-link>
  </nav>
  <router-view/>
</template>

<script>
export default {
  computed: {
    isHomePage() {
      return this.$route.path === '/';
    },
    isTodoPage() {
      return this.$route.path === '/todos';
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
