<template>
  <header class="mini-header">
    <flexbox :gutter="0">
      <flexbox-item :span="2/7">
        <div class="top-item top-left">
          <span @click="goBack" class="top-menu go-back iconfont icon-fanhui"></span>
        </div>
      </flexbox-item>
      <flexbox-item :span="3/7">
        <div class="top-item top-center">
          {{title}}
        </div>
      </flexbox-item>
    </flexbox>
  </header>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux';

export default {
  components: {
    Flexbox,
    FlexboxItem,
  },
  props: {
    title: null,
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
  .mini-header {
    background: #fff;
  }

  .top-item {
    height: 0.52rem;
  }

  .top-left {
    line-height: 0.52rem;
    padding-left: 0.12rem;
  }

  .go-back {
    color: #666;
    font-size: 0.14rem;
    font-weight: bold;
  }

  .top-center {
    text-align: center;
    color: #000;
    line-height: 0.52rem;
    font-size: 0.14rem;
  }
</style>
