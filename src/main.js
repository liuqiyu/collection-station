// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import i18n from './common/i18n';
import './utils/rem';
import './assets/css/reset.css';
import './assets/fonts/iconfont.css';

/**
 * 路由切换
 */
router.beforeEach((to, from, next) => {
  store.commit('UPDATELOADINGSTATUS', {
    isLoading: true,
  });
  next();
});
router.afterEach(() => {
  store.commit('UPDATELOADINGSTATUS', {
    isLoading: false,
  });
});


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: { App },
  template: '<App/>',
});
