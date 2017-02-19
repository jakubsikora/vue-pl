<template>
  <pre class="sg-syntax"><code class="language-markup">{{ formattedCode }}</code></pre>
</template>

<script>
  import Prism from 'prismjs';
  import { html as beautifyHtml } from 'js-beautify';

  function formatHtml(html) {
    return beautifyHtml(html, {
      indent_size: 2,
      preserve_newlines: false,
      unformatted: [],
    });
  }

  export default {
    props: ['code'],
    computed: {
      formattedCode() {
        return formatHtml(this.code);
      },
    },
    mounted() {
      Prism.highlightAll();
    },
  };
</script>

<style lang="scss">
  @import '../assets/css/styleguide';
  @import '~prismjs/themes/prism.css';

  pre.sg-syntax {
    background-color: $color-white;
    border: 1px solid $color-light-2;
  }
</style>
