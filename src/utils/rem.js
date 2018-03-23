/**
 * rem
 * create by lqy 2018/3/14
 */
(function(doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if(clientWidth > 600) {
        // docEl.style.fontSize = 180 + 'px';
        docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
      } else {
        docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
      }
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
