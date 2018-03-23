/**
 * promotion
 * create by lqy 2018/3/22
 */
const getPromotions = () => {
  return new Promise((resolve) => {
    resolve(
      [
        {
          name: '打折卡西欧1',
          label: '卡西欧全部打折商品1',
          price: '1999',
          oldPrice: '2999',
          stock: '256',
          percent: 60,
          rate: '-43%',
          spec: '4MMM',
          number: 1,
        },
        {
          name: '打折卡西欧2',
          label: '卡西欧全部打折商品2',
          price: '1999',
          oldPrice: '2999',
          stock: '256',
          percent: 60,
          rate: '-43%',
          type: '4MMM',
          number: 1,
        },
      ]
    );
  });
};

export {
  getPromotions,
};
