<template>
  <div class="c-topbar-wrap">
    <div class="c-topbar"></div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
  .c-topbar-wrap {
    position: relative;
    height: 0.52rem;
  }

  .c-topbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 0.52rem;
    background: #000;
    z-index: 99;
  }
</style>
