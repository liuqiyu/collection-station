<template>
  <div id="layout">
    <topbar></topbar>
    <div class="wrapper-scroll" style="height: 100%">
      <div id="aaa">
        <router-view></router-view>
      </div>
    </div>
    <div class="chat iconfont icon-chat" ref="chat"></div>
    <div class="toTop iconfont icon-top" ref="toTop" @click="toTop"></div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import { Group, Cell } from 'vux';
import topbar from './../../components/topbar';


export default {
  mounted() {
    const wrapper = document.querySelector('.wrapper-scroll');
    this.scroll = new BScroll(wrapper, {
      click: true,
      scrollY: true,
      probeType: 3,
    });
    this.scroll.on('scroll', () => {
      // 下拉动作
      if (Math.abs(this.scroll.y) > Number(wrapper.clientHeight)) {
        this.$refs.chat.classList.add('show');
        this.$refs.toTop.classList.add('show');
      } else {
        this.$refs.chat.classList.remove('show');
        this.$refs.toTop.classList.remove('show');
      }
    });
  },
  data() {
    return {
      scroll: null,
    };
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
    toTop() {
      this.scroll.scrollTo(0, 0, 500);
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
    display: none;
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
    display: none;
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
