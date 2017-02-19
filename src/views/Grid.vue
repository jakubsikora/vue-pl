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

      <Syntax code='<Grid><GridCell><div class="sg-example__box-item">1/3</div></GridCell><GridCell><div class="sg-example__box-item">1/3</div></GridCell><GridCell><div class="sg-example__box-item">1/3</div></GridCell></Grid>'></Syntax>

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

      <Syntax code='<Grid><GridCell><div class="sg-example__box-item">1/4</div></GridCell><GridCell><div class="sg-example__box-item">1/4</div></GridCell><GridCell><div class="sg-example__box-item">1/4</div></GridCell><GridCell><div class="sg-example__box-item">1/4</div></GridCell></Grid>'></Syntax>

      <h4>Equal height columns</h4>

      <Grid flex-cells>
        <GridCell>
          <div class="sg-example__box-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
        </GridCell>

        <GridCell>
          <div class="sg-example__box-item">Cras porttitor varius nibh, quis feugiat dui faucibus at. Morbi sollicitudin nulla nec leo bibendum, ut pretium ipsum dictum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Aenean scelerisque urna in consectetur gravida. Curabitur consectetur venenatis elementum. Ut a efficitur leo.</div>
        </GridCell>
      </Grid>

      <Syntax code='<Grid flex-cells><GridCell><div class="sg-example__box-item">Lorem ipsum ...</div></GridCell><GridCell><div class="sg-example__box-item">Cras porttitor...</div></GridCell></Grid>'></Syntax>

      <h4>Individual Sizing</h4>

      <Grid>
        <GridCell width="50">
          <div class="sg-example__box-item">1/2</div>
        </GridCell>

        <GridCell>
          <div class="sg-example__box-item">auto</div>
        </GridCell>

        <GridCell>
          <div class="sg-example__box-item">auto</div>
        </GridCell>
      </Grid>

      <Syntax code='<Grid><GridCell width="50"><div class="sg-example__box-item">1/2</div></GridCell><GridCell><div class="sg-example__box-item">auto</div></GridCell><GridCell><div class="sg-example__box-item">auto</div></GridCell></Grid>'></Syntax>

      <h4>Responsive</h4>

      <Grid flex-full flex-fit>
        <GridCell>
          <div class="sg-example__box-item">Full / Halves</div>
        </GridCell>

        <GridCell>
          <div class="sg-example__box-item">Full / Halves</div>
        </GridCell>
      </Grid>

      <Syntax code='<Grid flex-full flex-fit><GridCell><div class="sg-example__box-item">Full / Halves</div></GridCell><GridCell><div class="sg-example__box-item">Full / Halves</div></GridCell></Grid>'></Syntax>

      <h4>Alignments TODO</h4>
    </div>
  </div>
</template>

<script>
  import { Grid, GridCell } from '../pattern-library/components/grid';
  import Syntax from '../components/Syntax';

  export default {
    components: {
      Grid,
      GridCell,
      Syntax,
    },
  };
</script>
