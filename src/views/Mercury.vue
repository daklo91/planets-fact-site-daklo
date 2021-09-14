<template>
  <main>
    <h1>MERCURY</h1>
    <p>
      Mercury is the smallest planet in the Solar System and the closest to the
      Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all
      the Sun's planets. Mercury is one of four terrestrial planets in the Solar
      System, and is a rocky body like Earth.
    </p>
  </main>
  <button @click="consoleLog()">Test</button>
</template>

<script>
export default {
  methods: {
    consoleLog() {
      console.log(this.$route.params);
    },
  },
};
</script>

<style lang="scss" scoped></style>
