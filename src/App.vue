<template>
  <div id="app" class="sg-app__container">
    <div class="sg-layout">
      <div class="sg-layout__sidebar">
        <nav class="sg-nav">
          <div class="sg-nav__title">
            <img src="./assets/logo.png">
            <h3>Vue Pattern Library</h3>
          </div>

          <ul class="sg-nav__list">
            <li class="sg-nav__list-item">
              <router-link :to="{ name: 'foundations' }" class="sg-nav__link">Foundations</router-link>
              <ul class="sg-nav__list">
                <li class="sg-nav__list-item">
                  <router-link :to="{ name: 'colors' }" class="sg-nav__link">Colors</router-link>
                </li>
              </ul>
            </li>
            <li class="sg-nav__list-item">
              <router-link :to="{ name: 'components' }" class="sg-nav__link">Components</router-link>
              <ul class="sg-nav__list">
                <li class="sg-nav__list-item">
                  <router-link :to="{ name: 'grid' }" class="sg-nav__link">Grid</router-link>
                </li>
              </ul>
            </li>
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

  .sg-layout__sidebar {
    width: 15rem;
  }

  .sg-layout__content {
    background: $color-white;
    flex: 1;
  }

  .sg-nav {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }

  .sg-nav__title {
    display: flex;
    align-items: center;
    height: 4rem;

    > img {
      margin: 0 0.625rem;
      width: 3rem;
    }

    > h3 {
    }
  }

  .sg-nav__list {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }

  .sg-nav__list-item {
    display: flex;
    flex-direction: column;
    list-style: none;

    .sg-nav__list {
      .sg-nav__list-item {
        padding-left: 2.25rem;
      }

      .sg-nav__link {
        font-size: 0.75rem;
        padding: 0.5625rem;
        color: $color-white;
        box-shadow: none;
      }
    }
  }

  .sg-nav__link {
    padding: 0.8125rem 0.9375rem 0.75rem 0.9375rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    box-shadow: rgba(0,0,0,.25) 0 1px 0, inset rgba(255,255,255,.16) 0 1px 0;
  }

</style>
