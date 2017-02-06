<template>
  <div id="app" class="sg-app__container">
    <div class="sg-layout">
      <div class="sg-layout__sidebar">
        <nav class="sg-nav">
          <ul class="sg-nav__list">
            <li><router-link to="/components/grid">Grid</router-link></li>
          </ul>
        </nav>
      </div>

      <div class="sg-layout__content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
  @import 'components/base.scss';

  html {
    height: 100%;
  }

  body,
  .sg-app__container {
    display: flex;
    flex: 1 1 0%;
    flex-wrap: wrap;
    min-height: 100%;
  }

  .sg-layout {
    display: flex;
    flex: 1 1 0%;
  }

  .sg-layout__sidebar {
    width: 15rem;
  }

  .sg-layout__content {
    display: flex;
    flex: 1 1 0%;
    background: $color-white;
  }

  .sg-nav {
    margin: 0;
    padding: 0;
  }

  .sg-nav__list {
    margin: 0;
    padding: 0;
  }

  .sg-nav__list-item {
    list-style: none;
  }

</style>
