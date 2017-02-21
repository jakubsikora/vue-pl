<template>
  <div class="pl-grid"
       :class="{
          'pl-grid__gutters': gutters,
          'pl-grid__flex-cells': flexCells,
          'pl-grid__flex-full': flexFull,
          'pl-grid__flex-fit': flexFit
        }">
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
      flexFull: {
        type: Boolean,
        default: false,
      },
      flexFit: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style>
  .pl-grid {
    display: flex;
    flex-wrap: wrap;

    .pl-grid__cell {
      flex: 1 1 0%;
    }

    .pl-grid__cell--percent {
      flex: none;
    }
  }

  .pl-grid__gutters {
    margin: 1rem 0 -1rem -1rem;

    > .pl-grid__cell {
      padding: 0 0 1rem 1rem;
    }
  }

  .pl-grid__flex-cells {
    > .pl-grid__cell {
      display: flex;
    }
  }

  .pl-grid__flex-full {
    > .pl-grid__cell {
      flex: 0 0 100%
    }
  }

  @media (min-width: 48rem) {
    .pl-grid__flex-fit {
      > .pl-grid__cell {
        flex: 1 1 auto;
      }
    }
  }
</style>
