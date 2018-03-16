/**
 * index
 * create by lqy 2018/3/14
 */

import Vue from 'vue';
import Vuex from 'vuex';
import vux from './vux';
import main from './main';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    vux,
    main,
  },
});
