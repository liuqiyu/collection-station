<template>
  <div class="buy-success">
    <miniHeaher :title="title"></miniHeaher>
    <div class="buy-success-box">
      <div class="prompt">
        <span class="icon">
          <img src="./images/buy-success.png" alt="">
        </span>
        <span class="text">{{$t('m.checkoutSuccess')}}!</span>
      </div>
      <div class="price">
        {{$t('m.total')}}：
        <span class="number">$1099</span>
      </div>
      <div class="hint">
        <p>{{$t('m.bravoSuccessfullyOrdered')}}</p>
        <p>{{$t('m.theOrderGoodsAreHeadingToYou')}}</p>
      </div>
      <div class="btn-group">
        <flexbox :gutter="10">
          <flexbox-item>
            <div class="btn customer-server" @click="customerServer">{{$t('m.customerService')}}</div>
          </flexbox-item>
          <flexbox-item>
            <div class="btn show-order" @click="showOrder">{{$t('m.viewOrder')}}</div>
          </flexbox-item>
        </flexbox>
      </div>
      <div class="line"></div>
      <div class="bottom-prompt">
        {{$t('m.warningTips')}}
      </div>
    </div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux';
import miniHeaher from './../../components/miniHeaher';

export default {
  components: {
    miniHeaher,
    Flexbox,
    FlexboxItem,
  },
  computed: {
    title() {
      return this.$t('m.paymentDetails');
    }
  },
  methods: {
    customerServer() {
      // alert('客服服务');
    },
    showOrder() {
      this.$router.push({
        path: '/orderDetails',
      });
    },
  },
};
</script>

<style scoped>
  .buy-success {
    width: 100%;
    text-align: center;
    padding-bottom: 0.5rem;
  }

  .buy-success-box {
    padding: 0 0.1rem;
  }

  .prompt {
    margin-bottom: 0.3rem;
    margin-top: 0.2rem;
  }

  .prompt .icon {
    display: inline-block;
    width: 1.09rem;
    height: 1.18rem;
    color: #000;
    margin-right: 0.15rem;
  }

  .prompt .icon > img {
    width: 100%;
    vertical-align: middle;
  }

  .prompt .text {
    font-size: 0.16rem;
    color: #000;
    font-weight: bold;
  }

  .price {
    margin-bottom: 0.3rem;
    color: #000;
    font-size: 0.12rem;
  }

  .price .number {
    font-size: 0.24rem;
    color: #ff0000;
  }

  .hint {
    color: #999;
    margin-bottom: 0.2rem;
  }

  .hint p {
    margin-bottom: 0.1rem;
  }

  .btn-group {
    width: 100%;
  }

  .btn-group .btn {
    width: 100%;
    height: 0.4rem;
    text-align: center;
    line-height: 0.4rem;
    border: 1px solid #d9d9d9;
    color: #000;
  }

  .show-order {
    border-color: #000 !important;
    background: #000;
    color: #fff !important;
  }

  .line {
    width: 100%;
    height: 1px;
    background: #999;
    margin: 0.3rem 0;
  }

  .bottom-prompt {
    text-align: left;
    color: #333;
  }
</style>
