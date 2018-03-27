/**
 * mutations
 * create by lqy 2018/3/22
 */
import { GET_CART_DATA,
  GET_PROMOTION_DATA,
  ADD_CART,
  DELETE_CART_PRO } from './mutation-types';

const mutations = {
  // 获取购物车商品
  [GET_CART_DATA](state) {
    if (sessionStorage.getItem('cartData')) {
      state.cartData = JSON.parse(sessionStorage.getItem('cartData'));
      state.isHasCart = true;
    } else {
      state.cartData = [];
      state.isHasCart = false;
    }
  },
  // 获取折扣商品信息
  [GET_PROMOTION_DATA](state) {
    const promotionData = sessionStorage.getItem('promotionData');
    state.promotionData = JSON.parse(promotionData);
  },
  // 添加至购物车
  [ADD_CART](state, value) {
    let cartData = [];
    const arr = [];
    /**
     * 判断购物车是否有商品
     * 如果有，则追加
     * 如果无，则写入
     */
    if (sessionStorage.getItem('cartData')) {
      cartData = JSON.parse(sessionStorage.getItem('cartData'));
      cartData.forEach((val, index) => {
        arr.push(val.name);
        if (val.name === value.name) {
          cartData[index].number += 1;
        }
      });
      if (arr.indexOf(value.name) < 0) {
        cartData.push(value);
      }
      sessionStorage.setItem('cartData', JSON.stringify(cartData));
    } else {
      cartData = [value];
      sessionStorage.setItem('cartData', JSON.stringify(cartData));
    }
  },
  // 删除购物车商品
  [DELETE_CART_PRO](state, value) {
    const cartData = JSON.parse(JSON.stringify(state.cartData));
    cartData.forEach((val, index) => {
      if (value.name === val.name) {
        cartData.splice(index, 1);
      }
    });
    state.cartData = cartData;
  },
};

export default mutations;
