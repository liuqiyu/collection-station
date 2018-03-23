/**
 * products
 * create by lqy 2018/3/22
 */
const getProducts = (type) => {
  return new Promise((resolve) => {
    console.log('请求1');
    setTimeout(() => {
      switch (type) {
        case 'male':
          resolve([
            {
              name: '卡西欧男款1',
              price: '1999',
              spec: '4MMM',
              number: 1,
            },
            {
              name: '卡西欧男款2',
              price: '2999',
              spec: '4MMM',
              number: 1,
            },
            {
              name: '卡西欧男款3',
              price: '3999',
              spec: '4MMM',
              number: 1,
            },
            {
              name: '卡西欧男款4',
              price: '1999',
              spec: '4MMM',
              number: 1,
            },
            {
              name: '卡西欧男款5',
              price: '4999',
              spec: '4MMM',
              number: 1,
            },
            {
              name: '卡西欧男款6',
              price: '5999',
              spec: '4MMM',
              number: 1,
            },
          ]);
          break;
        case 'female':
          resolve([
            {
              name: '卡西欧女款1',
              price: '1999',
              spec: '4MMM',
              number: 1,
            },
            {
              name: '卡西欧女款2',
              price: '2999',
              spec: '4MMM',
              number: 1,
            },
            {
              name: '卡西欧女款3',
              price: '3999',
              spec: '4MMM',
              number: 1,
            },
            {
              name: '卡西欧女款4',
              price: '1999',
              spec: '4MMM',
              number: 1,
            },
            {
              name: '卡西欧女款5',
              price: '4999',
              spec: '4MMM',
              number: 1,
            },
            {
              name: '卡西欧女款6',
              price: '5999',
              spec: '4MMM',
              number: 1,
            },
            {
              name: '卡西欧女款6',
              price: '6999',
              spec: '4MMM',
              number: 1,
            },
          ]);
          break;
        case 'intelligence':
          resolve([
              {
                name: '卡西欧智智能系列1',
                price: '1999',
                spec: '4MMM',
              number: 1,
              },
              {
                name: '卡西欧智能系列2',
                price: '2999',
                spec: '4MMM',
              number: 1,
              },
              {
                name: '卡西欧智能系列3',
                price: '3999',
                spec: '4MMM',
              number: 1,
              },
              {
                name: '卡西欧智能系列4',
                price: '1999',
                spec: '4MMM',
              number: 1,
              },
              {
                name: '卡西欧智能系列5',
                price: '4999',
                spec: '4MMM',
              number: 1,
              },
              {
                name: '卡西欧智能系列6',
                price: '5999',
                spec: '4MMM',
              number: 1,
              },
              {
                name: '卡西欧智能系列6',
                price: '6999',
                spec: '4MMM',
              number: 1,
              },
            ]);
          break;
        case undefined:
          resolve([
            {
              name: '卡西欧全部1',
              price: '1999',
              spec: '4MMM',
              number: 1,
            },
            {
              name: '卡西欧全部2',
              price: '2999',
              spec: '4MMM',
              number: 1,
            },
            {
              name: '卡西欧全部3',
              price: '3999',
              spec: '4MMM',
              number: 1,
            },
            {
              name: '卡西欧全部4',
              price: '1999',
              spec: '4MMM',
              number: 1,
            },
            {
              name: '卡西欧全部5',
              price: '4999',
              spec: '4MMM',
              number: 1,
            },
            {
              name: '卡西欧全部6',
              price: '5999',
              spec: '4MMM',
              number: 1,
            },
            {
              name: '卡西欧全部6',
              price: '6999',
              spec: '4MMM',
              number: 1,
            },
          ]);
          break;
        default:
          break;
      }
    });
  });
};

export {
  getProducts,
};
