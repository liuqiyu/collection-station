<template>
  <div>
    <div class="slide">
      <img src="./images/sale-bg.png" alt="">
    </div>
    <div class="cloker">
      <span class="label">倒计时：</span>
      <clocker time="2018-08-08">
        <!--<span class="day">%_D1</span>-->
        <!--<span class="day">%_D2</span>-->
        <!--<span class="day">%_D3</span>天-->
        <span class="day">%_H1</span>
        <span class="day">%_H2</span>:
        <span class="day">%_M1</span>
        <span class="day">%_M2</span>:
        <span class="day">%_S1</span>
        <span class="day">%_S2</span>
      </clocker>
    </div>
    <div class="promo-list">
      <div class="promo-item" v-for="(item, index) in salesList" :key="index">
        <div class="pro-img">
          <img src="./images/sale-pro.jpg" alt="">
        </div>
        <div class="pro-desc">
          <div class="label">{{item.label}}</div>
          <div class="new-price">
            <span>{{item.price}} SAR</span>
            <span class="rate">{{item.rate}}</span>
          </div>
          <div class="old-pricer">{{item.oldPrice}}</div>
          <div class="bottom clearfix">
            <div class="stock">
              <p>{{item.stock}}剩余库存</p>
              <p class="progress">
                <x-progress :percent="item.percent" :show-cancel="false"></x-progress>
              </p>
            </div>
            <div class="btn" @click="panicBuying(item)">点击抢购</div>
          </div>
        </div>
      </div>
    </div>
    <footbar></footbar>
  </div>
</template>

<script>
import { Clocker, XProgress } from 'vux';
import footbar from './../../components/footbar';

export default {
  components: {
    Clocker,
    XProgress,
    footbar,
  },
  data() {
    return {
      time1: '2018-07-13 21:54',
      salesList: [
        {
          label: '男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表',
          price: '89.98',
          rate: '-43%',
          oldPrice: '157.46',
          stock: '256',
          percent: 60,
        },
        {
          label: '男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表',
          price: '89.98',
          rate: '-43%',
          oldPrice: '157.46',
          stock: '256',
          percent: 60,
        },
        {
          label: '男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表',
          price: '89.98',
          rate: '-43%',
          oldPrice: '157.46',
          stock: '256',
          percent: 60,
        },
        {
          label: '男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表',
          price: '89.98',
          rate: '-43%',
          oldPrice: '157.46',
          stock: '256',
          percent: 60,
        },
        {
          label: '男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表',
          price: '89.98',
          rate: '-43%',
          oldPrice: '157.46',
          stock: '256',
          percent: 60,
        },
      ],
    };
  },
  created() {
    setTimeout(() => {
      this.time1 = '2018-08-13 22:54';
    }, 5000);
  },
  methods: {
    panicBuying() {
      this.$router.push({
        path: '/address',
      });
    },
  },
};
</script>

<style scoped src="./index.css"></style>
