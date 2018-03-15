import Vue from 'vue';
import Router from 'vue-router';
// 布局
const Layout = r => require.ensure([], () => r(require('@/views/layout/index')), 'layout');
const Home = r => require.ensure([], () => r(require('@/views/home/index')), 'Home');
const Products = r => require.ensure([], () => r(require('@/views/products/index')), 'Products');
const Page1 = r => require.ensure([], () => r(require('@/views/page1/index')), 'page1');
const Page2 = r => require.ensure([], () => r(require('@/views/page2/index')), 'page2');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
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
          path: 'page1',
          name: 'page1',
          component: Page1,
        },
        {
          path: 'page2',
          name: 'page2',
          component: Page2,
        },
      ]
    },
  ],
});
