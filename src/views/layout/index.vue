<template>
  <div id="layout">
    <cmenu></cmenu>
    <topbar></topbar>
    <search
      style="position: absolute; z-index: 999"
        v-if="this.$store.state.main.showSearch"
        @result-click="resultClick"
        @on-change="getResult"
        :results="results"
        v-model="value"
        position="absolute"
        auto-scroll-to-top top="0.52rem"
        @on-focus="onFocus"
        @on-cancel="onCancel"
        @on-submit="onSubmit"
      :placeholder="placeholder"
        ref="search"></search>
    <div class="wrapper-scroll" style="height: 100%">
      <div>
        <router-view></router-view>
      </div>
    </div>
    <div class="view-show-more" v-if="this.$store.state.main.homeShowMore">
      <img src="./showmore.png" alt="">
    </div>
    <div class="chat iconfont icon-chat" ref="chat"></div>
    <div class="toTop iconfont icon-top" ref="toTop" @click="toTop"></div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import BScroll from 'better-scroll';
import { Search } from 'vux';
import topbar from './../../components/topbar';
import cmenu from '../../components/cmenu';

function getResult(val) {
  const rs = [];
  for (let i = 0; i < 2; i += 1) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i,
    });
  }
  return rs;
}

export default {
  mounted() {
    const wrapper = document.querySelector('.wrapper-scroll');
    // 绑定点击事件
    wrapper.addEventListener('click', () => {
      this.SHOWSEARCH(false);
      this.CLOSE_MENU();
    });
    // 创建滚动实例
    this.scroll = new BScroll(wrapper, {
      click: true,
      scrollY: true,
      probeType: 3,
    });
    // 监听滚动事件
    this.scroll.on('scroll', () => {
      this.HOME_SHOW_MORE(false);
      // 下拉动作
      if (Math.abs(this.scroll.y) > Number(wrapper.clientHeight) / 2) {
        this.$refs.chat.classList.add('show');
        this.$refs.toTop.classList.add('show');
      } else {
        this.$refs.chat.classList.remove('show');
        this.$refs.toTop.classList.remove('show');
      }
    });
    this.GET_CART_DATA();
  },
  beforeDestroy() {
    // 解绑点击事件
    const wrapper = document.querySelector('.wrapper-scroll');
    wrapper.removeEventListener('click', () => {
      this.SHOWSEARCH(false);
      this.CLOSE_MENU();
    });
    this.scroll.destroy();
  },
  data() {
    return {
      scroll: null,
      results: [],
      value: '',
    };
  },
  watch: {
    '$route'() {
      this.GET_CART_DATA();
      this.CLOSE_MENU();
      this.SHOWSEARCH(false);
    },
  },
  computed: {
    placeholder() {
      return this.$t('m.search')
    }
  },
  components: {
    topbar,
    Search,
    cmenu,
  },
  methods: {
    ...mapMutations([
      'SHOWSEARCH',
      'GET_CART_DATA',
      'HOME_SHOW_MORE',
      'CLOSE_MENU',
    ]),
    change() {
      switch (this.value1) {
        case 'cn':
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
    setFocus() {
      this.$refs.search.setFocus();
    },
    resultClick() {
      // alert('点击选择');
    },
    getResult(val) {
      // console.log('on-change', val);
      this.results = val ? getResult(this.value) : [];
    },
    onSubmit() {
      this.$refs.search.setBlur();
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit',
      });
    },
    onFocus() {
      // console.log('on focus');
    },
    onCancel() {
      this.SHOWSEARCH(false);
    },
  },
};
</script>

<style scoped>
  #layout {
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 0.52rem;
  }

  .wrapper-scroll {
    position: relative;
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

  .view-show-more {
    position: absolute;
    bottom: 0.05rem;
    left: 50%;
    margin-left: -0.25rem;
    width: 0.5rem;
  }

  .view-show-more > img {
    width: 100%;
    vertical-align: top;
  }
</style>
