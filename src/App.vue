<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/megido">Megido</router-link> |
      <router-link to="/owned">Owned</router-link> |
      <router-link to="/orbs">Orbs</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
html {
  overflow: auto;
}

body {
  margin: 0;
  background: black;
}

.el-table td {
  padding: 5px 0px !important;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url(./assets/bg.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fixed;
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
