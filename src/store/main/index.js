/**
 * index
 * create by lqy 2018/3/16
 */
import mutations from './mutations';
import actions from './actions';

const state = {
  showSearch: false,
  menuStatus: false,
  homeShowMore: false,
  homeCulomnTop: null,
  homeShowMoreTop: null,
};

export default {
  state,
  mutations,
  actions,
};
