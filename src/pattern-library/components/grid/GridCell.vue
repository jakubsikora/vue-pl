<template>
  <div class="pl-grid__cell"
       :class="{ 'pl-grid__cell--percent': width }"
       :style="{ width: `${width}%`}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      width: {
        type: String,
        default: null,
      },
    },
  };
</script>
