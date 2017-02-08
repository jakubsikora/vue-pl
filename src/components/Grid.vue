<template>
  <div>Grid content</div>
</template>

<script>
  export default {
    data() {
      console.log(this.$slots);
      return {};
    },
  };
</script>

<style lang="scss">
  @import '../components/base.scss';

  .pl-grid {
    display: flex;

    .pl-grid__cell {
      flex: 1 1 auto;
    }
  }
</style>
