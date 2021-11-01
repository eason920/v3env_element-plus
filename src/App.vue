<template>
  <div id="nav">
    <router-link to="/button">Button</router-link> |
    <router-link to="/layout">Layout</router-link> |
    <router-link to="/try">Try</router-link>
  </div>
  <router-view/>
</template>

<script></script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
