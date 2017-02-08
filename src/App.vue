<template>
  <div id="app" class="sg-app__container">
    <div class="sg-layout">
      <sidebar></sidebar>

      <div class="sg-layout__content">
        <div class="sg-layout__body">
          <router-view></router-view>
        </div>
      </div>
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
  @import 'components/base.scss';
  @import 'views/styleguide.scss';

  :root {
    font-size: 16px;
  }

  html {
    height: 100%;
  }

  body,
  .sg-app__container {
    display: flex;
    min-height: 100vh;
    flex: 1 1 auto;
  }

  .sg-layout {
    display: flex;
    flex: 1;
  }

  .sg-layout__body {
    width: 60rem;
  }

  .sg-layout__content {
    display: flex;
    justify-content: center;
    background: $color-white;
    color: #73879C;
    flex: 1;
    padding: 0.625rem 1.25rem 0;
  }
</style>
