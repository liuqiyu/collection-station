<template>
  <div class="c-menu" @click="click">
    <div class="menu-wp">
      <div class="top">
        <span @click="MENUSTATUS" class="iconfont icon-shanchudelete30"></span>
      </div>
      <section>
        <header>SHOP</header>
        <div class="shop-list">
          <div @click="link('/home')" class="shop-cell">
            <span class="label">首页</span>
            <span class="iconfont icon-jiahao"></span>
          </div>
          <div @click="link('/products')" class="shop-cell">
            <span class="label">全部商品</span>
            <span class="iconfont icon-jiahao"></span>
          </div>
          <div @click="link('/products', 'intelligence')" class="shop-cell">
            <span class="label">智能系列</span>
            <span class="iconfont icon-jiahao"></span>
          </div>
          <div @click="link('/products', 'male')" class="shop-cell">
            <span class="label">男款</span>
            <span class="iconfont icon-jiahao"></span>
          </div>
          <div @click="link('/products', 'female')" class="shop-cell">
            <span class="label">女款</span>
            <span class="iconfont icon-jiahao"></span>
          </div>
          <div @click="link('/promotion')" class="shop-cell">
            <span class="label">打折促销</span>
            <span class="iconfont icon-jiahao"></span>
          </div>
          <div @click="link('/cart')" class="shop-cell">
            <span class="label">订单详情</span>
            <span class="iconfont icon-jiahao"></span>
          </div>
        </div>
      </section>
      <section>
        <header>BRAND</header>
        <div class="shop-list">
          <div @click="link('/brand')" class="shop-cell">
            <span class="label">品牌简介</span>
            <span class="iconfont icon-jiahao"></span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import BScroll from 'better-scroll';

export default {
  mounted() {
    const wrapper = document.querySelector('.c-menu');
    this.scroll = new BScroll(wrapper, {
      click: true,
    });
  },
  methods: {
    ...mapMutations([
      'MENUSTATUS',
    ]),
    click(e) {
      // 阻止默认事件
      e.preventDefault();
      e.stopPropagation();
    },
    link(path, type) {
      this.MENUSTATUS();
      if (type) {
        this.$router.push({
          path,
          query: {
            type,
          },
        });
      } else {
        this.$router.push({
          path,
        });
      }
    },
  },
};
</script>

<style scoped>
  .c-menu {
    display: block;
    width: 3rem;
    height: 100%;
    background: rgba(255,255,255, 0.95);
    position: fixed;
    top: 0;
    left: -3rem;
    z-index: 88;
    padding: 0.52rem 0.08rem 0 0.08rem;
  }

  .c-menu.open {
    animation: leftAnimation 0.5s;
    -webkit-animation: leftAnimation 0.5s;
    animation-fill-mode: forwards;
  }

  @keyframes leftAnimation
  {
    from {left: -3rem;}
    to {left: 0;}
  }

  @-webkit-keyframes leftAnimation /* Safari 与 Chrome */
  {
    from {left: -3rem;}
    to {left: 0;}
  }

  .menu-wp {
    overflow-y: auto;
    padding-bottom: 0.8rem;
  }

  .top {
    height: 0.38rem;
    position: relative;
  }

  .top span {
    position: absolute;
    width: 0.18rem;
    height: 0.18rem;
    display: block;
    right: 0.05rem;
    top: 0.08rem;
    font-size: 0.2rem;
    color: #888;
  }

  header {
    height: 0.38rem;
    text-align: center;
    line-height: 0.38rem;
    color: #000;
    font-weight: bold;
    background: rgba(0,0,0,.5);
  }

  section {
    margin-bottom: 0.1rem;
  }

  .shop-list {
    width: 100%;
  }

  .shop-cell {
    height: 0.34rem;
    padding: 0 0.1rem 0 0.2rem;
    border-bottom: 1px solid #b6b6b6;
    line-height: 0.34rem;
    display: -webkit-flex;
    display: -webkit-box;
    display: flex;
    -webkit-justify-content: space-between;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .shop-cell:last-child {
    border-bottom: none;
  }

  .shop-cell span {
    display: flex;
    font-size: 0.12rem;
    color: #333;
  }

  .shop-cell span.label {
    font-size: 0.12rem;
  }
</style>
