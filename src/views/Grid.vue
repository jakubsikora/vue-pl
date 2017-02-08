<template>
  <div>
    <h2>Grid</h2>

    <div class="sg-example__box">
      <h4>Basic Grid</h4>
      <div class="pl-grid">
        <div class="pl-grid__cell">
          <div class="sg-example__box-item">Fit / Full</div>
        </div>

        <div class="pl-grid__cell">
          <div class="sg-example__box-item">Fit / Full</div>
        </div>
      </div>
    </div>

    <div class="sg-example__box">
      <h4>Basic Grid</h4>
      <Grid>
        <div class="pl-grid__cell">
          <div class="sg-example__box-item">Fit / Full</div>
        </div>

        <div class="pl-grid__cell">
          <div class="sg-example__box-item">Fit / Full</div>
        </div>
      </Grid>
    </div>
  </div>
</template>

<script>
  import Grid from '../components/Grid';

  export default {
    components: {
      Grid,
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

  .sg-example__box-item {
    background-color: $color-light;
    padding: .5rem;
    text-align: center;
    border: 1px solid $color-dark;
  }
</style>
