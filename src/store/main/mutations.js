/**
 * mutations
 * create by lqy 2018/3/16
 */
import { SHOWSEARCH, MENUSTATUS, CLOSE_MENU, HOME_SHOW_MORE, HOME_CULOMN_TOP } from './mutation-types';

const mutations = {
  [SHOWSEARCH](state, value) {
    state.showSearch = value;
  },
  // 菜单栏状态
  [MENUSTATUS](state) {
    const cmenu = document.querySelector('.c-menu');
    if (state.menuStatus) {
      cmenu.classList.remove('open');
      state.menuStatus = false;
    } else {
      cmenu.classList.add('open');
      state.menuStatus = true;
    }
  },
  // 关闭菜单栏
  [CLOSE_MENU](state) {
    const cmenu = document.querySelector('.c-menu');
    state.menuStatus = false;
    cmenu.classList.remove('open');
  },
  [HOME_SHOW_MORE](state, value) {
    state.homeShowMore = value;
  },
  [HOME_CULOMN_TOP](state, value) {
    state.homeCulomnTop = value;
  },
};

export default mutations;
