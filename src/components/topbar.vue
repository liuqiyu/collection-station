<template>
  <div class="c-topbar" :class="backClass">
    <flexbox :gutter="0">
      <flexbox-item :span="2/7">
        <div class="top-item top-left">
          <span @click.stop="MENUSTATUS" class="top-menu iconfont icon-iconfontcaidan"></span>
          <!--<span class="top-menu go-back iconfont icon-fanhui"></span>-->
        </div>
      </flexbox-item>
      <flexbox-item :span="3/7">
        <div class="top-item top-center">
          <router-link class="title" to="/home">CLOCKWISE</router-link>
        </div>
      </flexbox-item>
      <flexbox-item :span="2/7">
        <div class="top-item top-right">
          <div class="search iconfont icon-sousuo" @click.stop="search"></div>
          <div class="shop-cart iconfont icon-gouwuche" @click="toCart"></div>
        </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { Flexbox, FlexboxItem } from 'vux';

export default {
  props: {
    backClass: null,
  },
  components: {
    Flexbox,
    FlexboxItem,
  },
  methods: {
    ...mapMutations([
      'SHOWSEARCH',
      'MENUSTATUS',
    ]),
    search() {
      if (this.$store.state.main.showSearch) {
        this.SHOWSEARCH(false);
      } else {
        this.SHOWSEARCH(true);
      }
    },
    toCart() {
      this.$router.push({
        path: '/cart',
      });
    },
  },
};
</script>

<style scoped>
  .c-topbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 0.52rem;
    background: #000;
    z-index: 99;
  }

  .c-topbar .top-item {
    height: 0.52rem;
  }

  .top-left {
    line-height: 0.52rem;
    padding-left: 0.15rem;
  }

  .top-menu {
    display: block;
    width: 0.52rem;
    height: 0.52rem;
    font-size: 0.32rem;
    color: #fff;
    line-height: 0.52rem;
  }

  .go-back {
    color: #000;
    font-size: 0.22rem;
    font-weight: bold;
  }

  .top-center {
    text-align: center;
    color: #fff;
    line-height: 0.58rem;
    font-size: 0.18rem;
    font-family: 'main-title';
  }

  .top-center .title {
    color: #fff;
  }

  .top-right {
    text-align: right;
    padding-right: 0.15rem;
  }

  .top-right .search, .top-right .shop-cart {
    line-height: 0.52rem;
    display: inline-block;
    height: 0.52rem;
    width: 0.25rem;
    text-align: center;
    color: #fff;
    font-size: 0.18rem;
  }

  .top-right .shop-cart {
    margin-left: 0.15rem;
  }
</style>
