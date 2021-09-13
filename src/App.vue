<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Antonio&family=Spartan&display=swap");

$background-color: #070724;
$primary-color: #fff;
$secondary-color: #838391;
$hover-color: #38384f;

$headline-font-family: "Antonio", sans-serif;
$text-font-family: "Spartan", sans-serif;

* {
  background-color: $background-color;
  color: $primary-color;
}

#app {
  font-family: $headline-font-family;
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
