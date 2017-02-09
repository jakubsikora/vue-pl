<template>
  <div class="pl-grid" :class="{ 'pl-grid__gutters': gutters, 'pl-grid__flex-cells': flexCells }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      gutters: {
        type: Boolean,
        default: true,
      },
      flexCells: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style lang="scss">
  @import '../../components/base.scss';

  .pl-grid {
    display: flex;

    .pl-grid__cell {
      flex: 1 1 0%;
    }
  }

  .pl-grid__gutters {
    > .pl-grid__cell {
      padding: 1rem 0 0 1rem;
    }
  }

  .pl-grid__flex-cells {
    > .pl-grid__cell {
      display: flex;
    }
  }
</style>
