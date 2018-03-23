/**
 * actions
 * create by lqy 2018/3/23
 */

import { HOME_CULOMN_TOP } from './mutation-types';
import { getHomeCulomnTop } from './../../utils/height';

const setHomeCulomnTop = async ({ commit }) => {
  const top = await getHomeCulomnTop();
  commit(HOME_CULOMN_TOP, top);
};

export default {
  setHomeCulomnTop,
};
