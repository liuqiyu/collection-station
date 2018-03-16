import Vue from 'vue';
import Router from 'vue-router';
// 布局
const Layout = r => require.ensure([], () => r(require('@/views/layout/index')), 'layout');
const Home = r => require.ensure([], () => r(require('@/views/home/index')), 'Home');
const Products = r => require.ensure([], () => r(require('@/views/products/index')), 'Products');
const Promotion = r => require.ensure([], () => r(require('@/views/promotion/index')), 'Promotion');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home,
          redirect: 'home',
        },
        {
          path: 'home',
          name: 'home',
          component: Home,
        },
        {
          path: 'products',
          name: 'products',
          component: Products,
        },
        {
          path: 'promotion',
          name: 'promotion',
          component: Promotion,
        },
      ]
    },
  ],
});
