<template>
  <div class="sg-layout__body">
    <h2>Colors</h2>

    <div class="sg-example__box">
      <h4>Text color: $color-text</h4>

      <div class="sg-example__box-item sg-example__box-item--text">&nbsp;</div>

      <h4>Background color: $color-bg</h4>
      <div class="sg-example__box-item sg-example__box-item--bg">&nbsp;</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        bgColor: '#2A3F54',
      };
    },
  };
</script>
