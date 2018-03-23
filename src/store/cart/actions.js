/**
 * actions
 * create by lqy 2018/3/22
 */

import { DELETE_CART_PRO } from './mutation-types';

const deleteCartPro = async ({ commit }, value) => {
  commit(DELETE_CART_PRO, value);
};

export default {
  deleteCartPro,
};
