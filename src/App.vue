<template>
  <div class="container">
    <HeaderComponent />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import data from "@/assets/data.json";

export default {
  data() {
    return {
      data: data,
    };
  },
  components: {
    HeaderComponent,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Antonio&family=Spartan&display=swap");

* {
  background-color: $background-color;
  color: $primary-color;
}

.container {
  width: 375px;
  margin: auto;
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
