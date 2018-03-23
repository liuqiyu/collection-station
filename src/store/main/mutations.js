/**
 * mutations
 * create by lqy 2018/3/16
 */
import { SHOWSEARCH, MENUSTATUS, HOME_SHOW_MORE, HOME_CULOMN_TOP } from './mutation-types';

const mutations = {
  [SHOWSEARCH](state, value) {
    state.showSearch = value;
  },
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
  [HOME_SHOW_MORE](state) {
    state.homeShowMore = false;
  },
  [HOME_CULOMN_TOP](state, value) {
    state.homeCulomnTop = value;
  },
};

export default mutations;
