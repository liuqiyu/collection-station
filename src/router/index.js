import Vue from 'vue';
import Router from 'vue-router';
// 布局
const Layout = r => require.ensure([], () => r(require('@/views/layout/index')), 'layout');
const Home = r => require.ensure([], () => r(require('@/views/home/index')), 'Home');
const Products = r => require.ensure([], () => r(require('@/views/products/index')), 'Products');
const Promotion = r => require.ensure([], () => r(require('@/views/promotion/index')), 'Promotion');
const Brand = r => require.ensure([], () => r(require('@/views/brand/index')), 'Brand');
const BuySuccess = r => require.ensure([], () => r(require('@/views/buySuccess/index')), 'BuySuccess');
const OrderDetails = r => require.ensure([], () => r(require('@/views/orderDetails/index')), 'OrderDetails');
const Cart = r => require.ensure([], () => r(require('@/views/cart/index')), 'Cart');
const Details = r => require.ensure([], () => r(require('@/views/details/index')), 'Details');

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
        {
          path: 'brand',
          name: 'brand',
          component: Brand,
        },
        {
          path: 'buySuccess',
          name: 'buySuccess',
          component: BuySuccess,
        },
        {
          path: 'cart',
          name: 'cart',
          component: Cart,
        },
        {
          path: 'details',
          name: 'details',
          component: Details,
        },
      ]
    },
  ],
});
