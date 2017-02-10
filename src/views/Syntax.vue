<template>
  <pre><code class="language-markup">{{ formattedCode }}</code></pre>
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
  @import '~prismjs/themes/prism.css';
</style>
