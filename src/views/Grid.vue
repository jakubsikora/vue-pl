<template>
  <div>
    <h2>Grid</h2>

    <div class="sg-example__box">
      <h4>Basic Grid</h4>
      <Grid>
        <GridCell>
          <div class="sg-example__box-item">1/2</div>
        </GridCell>

        <GridCell>
          <div class="sg-example__box-item">1/2</div>
        </GridCell>
      </Grid>

      <Syntax code='<Grid><GridCell><div class="sg-example__box-item">1/2</div></GridCell><GridCell><div class="sg-example__box-item">1/2</div></GridCell></Grid>'></Syntax>

      <Grid>
        <GridCell>
          <div class="sg-example__box-item">1/3</div>
        </GridCell>

        <GridCell>
          <div class="sg-example__box-item">1/3</div>
        </GridCell>

        <GridCell>
          <div class="sg-example__box-item">1/3</div>
        </GridCell>
      </Grid>

      <Grid>
        <GridCell>
          <div class="sg-example__box-item">1/4</div>
        </GridCell>

        <GridCell>
          <div class="sg-example__box-item">1/4</div>
        </GridCell>

        <GridCell>
          <div class="sg-example__box-item">1/4</div>
        </GridCell>

        <GridCell>
          <div class="sg-example__box-item">1/4</div>
        </GridCell>
      </Grid>

      <Grid flex-cells>
        <GridCell>
          <div class="sg-example__box-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
        </GridCell>

        <GridCell>
          <div class="sg-example__box-item">Cras porttitor varius nibh, quis feugiat dui faucibus at. Morbi sollicitudin nulla nec leo bibendum, ut pretium ipsum dictum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Aenean scelerisque urna in consectetur gravida. Curabitur consectetur venenatis elementum. Ut a efficitur leo.</div>
        </GridCell>
      </Grid>
    </div>
  </div>
</template>

<script>
  import Grid from '../components/grid/Grid';
  import GridCell from '../components/grid/GridCell';
  import Syntax from './Syntax';

  export default {
    components: {
      Grid,
      GridCell,
      Syntax,
    },
  };
</script>

<style lang="scss">
  @import '../components/base.scss';

  .sg-example__box-item {
    width: 100%;
    background-color: $color-light;
    padding: .5rem;
    text-align: center;
    border: 1px solid $color-dark;
  }
</style>
