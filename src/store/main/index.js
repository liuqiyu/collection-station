/**
 * index
 * create by lqy 2018/3/16
 */
import mutations from './mutations';
import actions from './actions';

const state = {
  showSearch: false,
  menuStatus: false,
  homeShowMore: true,
  homeCulomnTop: 0,
};

export default {
  state,
  mutations,
  actions,
};
