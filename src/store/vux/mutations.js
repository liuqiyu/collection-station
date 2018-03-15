/**
 * mutations
 * create by lqy 2018/3/15
 */
import { UPDATELOADINGSTATUS } from './mutation-types';

const mutations = {
  [UPDATELOADINGSTATUS](state, payload) {
    state.isLoading = payload.isLoading;
  },
};

export default mutations;
