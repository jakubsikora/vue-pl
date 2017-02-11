<template>
  <div id="app" class="sg-app__container">
    <div class="sg-layout">
      <Sidebar></Sidebar>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Sidebar from './views/Sidebar';

  export default {
    name: 'app',
    components: {
      Sidebar,
    },
  };
</script>

<style lang="scss">
  @import 'views/styleguide.scss';
</style>
