<template>
  <div>
    <div class="slide">江南皮革厂倒闭了</div>
    <div class="cloker">
      <span class="label">倒计时：</span>
      <clocker time="2018-08-08">
        <!--<span class="day">%_D1</span>-->
        <!--<span class="day">%_D2</span>-->
        <!--<span class="day">%_D3</span>天-->
        <span class="day">%_H1</span>
        <span class="day">%_H2</span>：
        <span class="day">%_M1</span>
        <span class="day">%_M2</span>：
        <span class="day">%_S1</span>
        <span class="day">%_S2</span>
      </clocker>
    </div>
    <div class="promo-list">
      <div class="promo-item"></div>
      <div class="promo-item"></div>
      <div class="promo-item"></div>
      <div class="promo-item"></div>
      <div class="promo-item"></div>
    </div>
    <footbar></footbar>
  </div>
</template>

<script>
import { Clocker } from 'vux';
import footbar from './../../components/footbar';

export default {
  components: {
    Clocker,
    footbar,
  },
  created() {
    setTimeout(() => {
      this.time1 = '2018-08-13 22:54';
    }, 5000);
  },
  data() {
    return {
      time1: '2018-07-13 21:54',
    };
  },
};
</script>

<style scoped>
  /**
  大屏
   */
  .slide {
    width: 100%;
    height: 1.7rem;
    background: red;
    line-height: 1.7rem;
    text-align: center;
    color: #fff;
    font-size: 0.12rem;
    animation: fontChange 1s;
    -webkit-animation: fontChange 1s; /* Safari 与 Chrome */
    animation-fill-mode: forwards;
  }

  @keyframes fontChange
  {
    0%   {font-size: 0.12rem;}
    33%  {font-size: 0.18rem;}
    66%  {font-size: 0.24rem;}
    100% {font-size: 0.30rem;}
  }

  @-webkit-keyframes fontChange /* Safari 与 Chrome */
  {
    0%   {font-size: 0.12rem;}
    33%  {font-size: 0.18rem;}
    66%  {font-size: 0.24rem;}
    100% {font-size: 0.30rem;}
  }

  /**
  倒计时
   */
  .cloker {
    width: 100%;
    height: 0.39rem;
    background: #fff;
    padding-top: 0.1rem;
    padding-right: 0.1rem;
    text-align: right;
    font-size: 0.12rem;
  }

  .cloker .label {
    color: #000;
  }

  .day {
    background-color: #000;
    color: #fff;
    text-align: center;
    display: inline-block;
    padding: 0 0.03rem;
    border-radius: 3px;
    font-size: 0.12rem;
  }

  /**
  促销产品列表
   */
  .promo-list {
    width: 100%;
  }

  .promo-item {
    width: 100%;
    height: 1.37rem;
    border-top: 1px solid #eaeaea;
    background: #fff;
  }
</style>
