<template>
  <div class="sg-layout__sidebar">
    <nav class="sg-nav">
      <div class="sg-nav__title">
        <img src="../assets/logo.png">
        <h3>Vue Pattern Library</h3>
      </div>

      <ul class="sg-nav__list">
        <li class="sg-nav__list-item">
          <router-link :to="{ name: 'foundations' }" class="sg-nav__link">Foundations</router-link>
          <ul class="sg-nav__list">
            <li v-for="item in foundations" class="sg-nav__list-item">
              <router-link :to="{ name: item.name }" class="sg-nav__link">{{ item.label }}</router-link>
            </li>
          </ul>
        </li>
        <li class="sg-nav__list-item">
          <router-link :to="{ name: 'components' }" class="sg-nav__link">Components</router-link>
          <ul class="sg-nav__list">
            <li v-for="item in components" class="sg-nav__list-item">
              <router-link :to="{ name: item.name }" class="sg-nav__link">{{ item.label }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    props: ['foundations', 'components'],
  };
</script>

<style lang="scss">
  // @import '../assets/css/styleguide';

  // .sg-layout__sidebar {
  //   width: $sidebar-size;
  // }

  // @media (max-width: $medium-size) {
  //   .sg-layout__sidebar {
  //     transition: transform .2s;
  //     transform: translateX(-100%);
  //     position: absolute;
  //   }
  // }

  // .sg-nav {
  //   display: flex;
  //   flex-direction: column;
  //   margin: 0;
  //   padding: 0;
  // }


  // .sg-nav__title {
  //   display: flex;
  //   align-items: center;
  //   height: 4rem;

  //   > img {
  //     margin: 0 0.625rem;
  //     width: 3rem;
  //   }
  // }

  // .sg-nav__list {
  //   display: flex;
  //   flex-direction: column;
  //   margin: 0;
  //   padding: 0;
  // }

  // .sg-nav__list-item {
  //   display: flex;
  //   flex-direction: column;
  //   list-style: none;

  //   .sg-nav__list {
  //     .sg-nav__list-item {
  //       padding-left: 2.25rem;
  //     }

  //     .sg-nav__list-item--active {
  //       background: rgba(255, 255, 255, .05);
  //     }

  //     .sg-nav__link {
  //       font-size: 0.75rem;
  //       padding: 0.5625rem;
  //       margin: 0;
  //       color: $color-white;
  //       box-shadow: none;
  //       font-weight: 700;
  //     }
  //   }
  // }

  // .sg-nav__link {
  //   padding: 0.8125rem 0.9375rem 0.75rem 0.9375rem;
  //   font-weight: 500;
  //   margin-bottom: 0.5rem;
  //   box-shadow: rgba(0,0,0,.25) 0 1px 0, inset rgba(255,255,255,.16) 0 1px 0;
  // }
</style>

