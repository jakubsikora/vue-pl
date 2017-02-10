import Vue from 'vue';
import Router from 'vue-router';

import Components from '../views/Components';
import Foundations from '../views/Foundations';

import componentsRoutes from './components';
import foundationsRoutes from './foundations';

Vue.use(Router);

const router = new Router({
  base: '/vue-pl/',
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'index',
    },
    {
      path: '/components',
      name: 'components',
      component: Components,
      children: componentsRoutes,
    },
    {
      path: '/foundations',
      name: 'foundations',
      component: Foundations,
      children: foundationsRoutes,
    },
  ],
});

export default router;
