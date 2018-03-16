<template>
  <div id="layout">
    <topbar></topbar>
    <div class="wrapper-scroll" style="height: 100%">
      <div>
        <router-view></router-view>
      </div>
    </div>
    <div class="chat iconfont icon-chat"></div>
    <div class="toTop iconfont icon-top"></div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import { Group, Cell } from 'vux';
import topbar from './../../components/topbar';

export default {
  mounted() {
    const wrapper = document.querySelector('.wrapper-scroll');
    /* eslint-disable no-new */
    new BScroll(wrapper, {
      click: true,
    });
  },
  components: {
    topbar,
    Group,
    Cell,
  },
  methods: {
    change(lang) {
      switch (lang) {
        case 'ch':
          this.$i18n.locale = 'zh-CN';
          break;
        case 'en':
          this.$i18n.locale = 'en-US';
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style scoped>
  #layout {
    width: 100%;
    height: 100%;
    padding-top: 0.52rem;
  }

  .chat {
    display: block;
    position: fixed;
    left: 0.13rem;
    bottom: 0.13rem;
    width: 0.28rem;
    height: 0.28rem;
    background: #9b9b9b;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    line-height: 0.28rem;
    font-size: 0.24rem;
  }

  .toTop {
    display: block;
    position: fixed;
    right: 0.13rem;
    bottom: 0.13rem;
    width: 0.28rem;
    height: 0.28rem;
    background: #9b9b9b;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    line-height: 0.28rem;
    font-size: 0.24rem;
  }
</style>
