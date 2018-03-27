/**
 * index
 * create by lqy 2018/3/16
 */
import mutations from './mutations';
import actions from './actions';

const state = {
  // 搜索栏
  showSearch: false,
  // 菜单栏
  menuStatus: false,
  // 首页查看更多
  homeShowMore: false,
  // 首页4模块 top距离
  homeCulomnTop: null,
  // 首页查看更多 top距离
  homeShowMoreTop: null,
};

export default {
  state,
  mutations,
  actions,
};
