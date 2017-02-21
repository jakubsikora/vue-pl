<template>
  <div id="app" class="sg-app__container">
    <div class="sg-layout">
      <Sidebar :components="components" :foundations="foundations"></Sidebar>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar';
  import { components, foundations } from './constants';

  export default {
    name: 'app',
    data() {
      return {
        components,
        foundations,
      };
    },
    components: {
      Sidebar,
    },
  };
</script>

<style>
  @import 'assets/css/styleguide';
</style>
