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
  console.log(window.innerHeight);
  console.log(h);
  return window.innerHeight - h;
};

export {
  getHeight,
};
