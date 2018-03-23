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

export {
  getHeight,
};
