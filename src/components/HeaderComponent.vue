<template>
  <header>
    <span class="logo">THE PLANETS</span>
    <MenuSVG />
  </header>
</template>

<script>
import MenuSVG from "@/assets/MenuSVG.vue";

export default {
  components: {
    MenuSVG,
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
}

.logo {
  font-size: 28px;
  letter-spacing: -1.05px;
}
</style>
