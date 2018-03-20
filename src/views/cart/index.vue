<template>
  <div class="cart" :style="{height: height + 'px'}">
    <div class="cart-list-wrap">
      <div class="cart-list">
        <div class="cart-item" v-for="(item, index) in cartList" :key="index">
          <div class="cart-img">
            <img src="./images/pro.jpg" alt="">
          </div>
          <div class="cart-desc">
            <div class="label">{{item.label}}</div>
            <div class="price">{{item.number}} X {{item.price}}</div>
            <div class="other">
              <div class="spec">{{item.spec}}</div>
              <div class="num">
                <x-number :value="item.number" :min="1" width="40px" fillable></x-number>
              </div>
            </div>
            <span class="delete iconfont icon-shanchudelete30" @click="recovery(item, index)">
            </span>
          </div>
        </div>
      </div>
      <div class="a-pro" :style="bg">
        <span class="btn" @click="addProducts">继续添加商品</span>
      </div>
    </div>
    <div class="cart-bottom">
      <div class="cart-data">
        <div class="data-item">
          <span class="label">数量</span>
          <span class="value">1</span>
        </div>
        <div class="data-item">
          <span class="label">折扣</span>
          <span class="value">-$149</span>
        </div>
        <div class="data-item">
          <span class="label">含税</span>
          <span class="value">$195</span>
        </div>
        <div class="data-item">
          <span class="label">累计</span>
          <span class="value">$1369</span>
        </div>
      </div>
      <div class="cart-btn">
        <span @click="checkout">前往结账</span>
      </div>
    </div>
    <confirm v-model="show"
             title="确认删除？"
             @on-confirm="onConfirm">
    </confirm>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import { XNumber, Group, Confirm } from 'vux';
import { getHeight } from './../../utils/height';

export default {
  components: {
    XNumber,
    Group,
    Confirm,
  },
  data() {
    return {
      show: false,
      cartList: [
        {
          label: 'CLASSIC SUFFOLK1',
          number: 1,
          spec: '4MM',
          price: '1999',
        },
        {
          label: 'CLASSIC SUFFOLK2',
          number: 1,
          spec: '4MM',
          price: '1999',
        },
        {
          label: 'CLASSIC SUFFOLK2',
          number: 1,
          spec: '4MM',
          price: '1999',
        },
        {
          label: 'CLASSIC SUFFOLK2',
          number: 1,
          spec: '4MM',
          price: '1999',
        },
        {
          label: 'CLASSIC SUFFOLK2',
          number: 1,
          spec: '4MM',
          price: '1999',
        },
        {
          label: 'CLASSIC SUFFOLK2',
          number: 1,
          spec: '4MM',
          price: '1999',
        },
      ],
      height: 0,
      index: null,
      bg: {
        backgroundImage: 'url(' + require('./images/bg.png') + ')',
      },
    };
  },
  mounted() {
    const wrapper = document.querySelector('.cart');
    this.scroll = new BScroll(wrapper);
    this.height = getHeight(['.c-topbar']);
  },
  methods: {
    addProducts() {
      this.$router.push({
        path: '/products',
      });
    },
    recovery(item, index) {
      this.index = index;
      this.show = true;
    },
    onConfirm() {
      this.cartList.splice(this.index, 1);
    },
    checkout() {
      this.$router.push({
        path: '/address',
      });
    },
  },
};
</script>

<style scoped>
  .cart {
    height: 100%;
  }

  .cart-list-wrap {
    padding-bottom: 1.6rem;
  }

  .cart-item {
    width: 100%;
    padding: 0.1rem 0.04rem 0.06rem 0.14rem;
    overflow: hidden;
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: flex-start;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-align-items: stretch;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    border-bottom: 1px solid #eee;
  }

  .cart-item:last-child {
    border-bottom: none;
  }

  .cart-img {
    width: 0.55rem;
    -webkit-flex: none;
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
  }

  .cart-img > img {
    width: 100%;
  }

  .cart-desc {
    position: relative;
    width: 100%;
    /*padding-left: 0.4rem;*/
    padding: 0.05rem 0 0.05rem 0.4rem;
  }

  .cart-desc .delete {
    width: 0.18rem;
    height: 0.18rem;
    font-size: 0.2rem;
    color: #888;
    display: block;
    position: absolute;
    right: 0.2rem;
    top: 0;
  }

  .cart-desc .label {
    width: 100%;
    font-size: 0.12rem;
    margin-bottom: 0.1rem;
  }

  .cart-desc .price {
    font-size: 0.12rem;
  }

  .cart-desc .other {
    width: 100%;
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: space-between;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    overflow: hidden;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .cart-desc .other .spec {
    font-size: 0.12rem;
  }

  .a-pro {
    width: 100%;
    overflow: hidden;
    height: 0.58rem;
    padding-top: 0.1rem;
  }

  .a-pro .btn {
    margin: 0 auto;
    display: block;
    width: 1.08rem;
    height: 0.37rem;
    text-align: center;
    line-height: 0.35rem;
    border: 2px solid #000;
  }

  .cart-bottom {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
  }

  .cart-data {
    border-bottom: 1px solid #eee;
    background: rgba(255,255,255,0.9);
  }

  .data-item {
    padding: 0 0.24rem;
    margin-bottom: 0.07rem;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    overflow: hidden;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .cart-btn {
    background: #fff;
    padding: 0.1rem 0;
  }

  .cart-btn span {
    margin: 0 auto;
    display: block;
    background: #000f21;
    color: #9f9650;
    width: 2.65rem;
    height: 0.41rem;
    text-align: center;
    line-height: 0.41rem;
  }
</style>
