/**
 * index
 * create by lqy 2018/3/22
 */
import mutations from './mutations';
import actions from './actions';

const state = {
  cartData: [],
  promotionData: [],
  // 购物车是否有商品
  isHasCart: false,
};

export default {
  state,
  mutations,
  actions,
};
