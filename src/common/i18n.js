/**
 * i18n 多国语言切换
 * create by lqy 2018/3/15
 */

import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'zh-CN', // 默认语言
  messages: {
    'zh-CN': require('./lang/zh'),
    'en-US': require('./lang/en'),
  },
});
