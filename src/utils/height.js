/**
 * height
 * create by lqy 2018/3/20
 */

const getHeight = (dom) => {
  let h = 0;
  dom.forEach((value) => {
    try{
      const $el = document.querySelector(value);
      if ($el !== null) {
        h += $el.offsetHeight;
      }
    } catch(e) {
      h += 0;
    }
  });
  return window.innerHeight - h;
};

const getHomeCulomnTop = () => {
  return new Promise((resolve) => {
    setTimeout(()=> {
      const consee = window.innerHeight - document.querySelector('.c-topbar').clientHeight;
      // resolve(consee * (460/615));
      // if (window.innerWidth < 500) {
      //   resolve(4.85 + 'rem');
      // } else {
      //
      // }
      resolve(consee * (460/615) + 'px');
    });
  });
};

export {
  getHeight,
  getHomeCulomnTop,
};
