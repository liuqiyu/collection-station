/**
 * mutations
 * create by lqy 2018/3/16
 */
import { SHOWSEARCH, MENUSTATUS } from './mutation-types';

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
};

export default mutations;
