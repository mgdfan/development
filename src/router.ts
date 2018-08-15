import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/megido',
      name: 'megido',
      component: () => import('./views/Megido.vue')
    },
    {
      path: '/owned',
      name: 'owned',
      component: () => import('./views/Owned.vue')
    },
    {
      path: '/orbs',
      name: 'orbs',
      component: () => import('./views/Orbs.vue')
    }
  ]
});
