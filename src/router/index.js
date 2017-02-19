import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home';
import NotFound from '../views/NotFound';

import Components from '../views/Components';
import Foundations from '../views/Foundations';

import { components, foundations } from '../constants';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home,
    },
    {
      path: '/components',
      name: 'components',
      component: Components,
      children: components,
    },
    {
      path: '/foundations',
      name: 'foundations',
      component: Foundations,
      children: foundations,
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
});

export default router;
