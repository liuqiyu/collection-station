/**
 * mutations
 * create by lqy 2018/3/22
 */

import { GET_PRODUCTS_LIST, GET_PROMOTIONS_LIST } from './mutation-types';

const mutations = {
  [GET_PRODUCTS_LIST](state, value) {
    state.productsList = value;
  },
  [GET_PROMOTIONS_LIST](state, value) {
    state.promotionsList = value;
  },
};

export default mutations;
