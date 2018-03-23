/**
 * actions
 * create by lqy 2018/3/22
 */
import { getProducts } from './../../utils/data/products';
import { getPromotions } from './../../utils/data/promotion';
import { GET_PRODUCTS_LIST, GET_PROMOTIONS_LIST } from './mutation-types';

const setProductsList = async ({ commit }, value) => {
  const data = await getProducts(value);
  commit(GET_PRODUCTS_LIST, data);
};

const setPromotionsList = async ({ commit }) => {
  const data = await getPromotions();
  commit(GET_PROMOTIONS_LIST, data);
};

export default {
  setProductsList,
  setPromotionsList,
};
