/**
 * mutations
 * create by lqy 2018/3/16
 */
import { SHOWSEARCH } from './mutation-types';

const mutations = {
  [SHOWSEARCH](state, value) {
    state.showSearch = value;
  },
};

export default mutations;
