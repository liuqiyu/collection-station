<template>
  <div class="silver">
    <div class="title">全部商品</div>
    <div class="pro-list" ref="proList">
      <flexbox :gutter="0" wrap="wrap">
        <flexbox-item :span="1/2" v-for="(item, index) in proList" :key="index">
          <div class="list-item">{{item}}</div>
        </flexbox-item>
      </flexbox>
    </div>
    <footbar></footbar>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux';
import footbar from './../../components/footbar';

export default {
  components: {
    Flexbox,
    FlexboxItem,
    footbar,
  },
  data() {
    return {
      proList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      if (this.proList.length % 2 === 0) {
        this.$refs.proList.classList.add('is-even');
      } else {
        this.$refs.proList.classList.remove('is-even');
      }
    },
  },
};
</script>

<style scoped>
  .title {
    width: 100%;
    height: 0.38rem;
    line-height: 0.38rem;
    text-align: center;
    font-size: 0.16rem;
    margin-bottom: 0.16rem;
    background: #fff;
  }

  .pro-list {
    width: 100%;
    background: #fff;
  }

  .list-item {
    width: 100%;
    height: 2.25rem;
    border-bottom: 1px solid #f2e4d4;
    border-right: 1px solid #f2e4d4;
  }

  .vux-flexbox-item:nth-child(even) .list-item {
    border-right: none;
  }

  .vux-flexbox-item:last-child .list-item {
    border-bottom: none;
  }

  .is-even .vux-flexbox-item:nth-last-child(2) .list-item {
    border-bottom: none;
  }
</style>
