import Vue from 'vue';
import Router from 'vue-router';

import Hello from '../components/Hello';
import Grid from '../components/grid/Grid';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/components',
      name: 'components',
      component: Grid,
    },
    {
      path: '/components/grid',
      name: 'grid',
      component: Grid,
    },
  ],
});

export default router;
