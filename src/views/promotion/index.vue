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
      <div class="promo-item">
        <div class="pro-img">
          <img src="./images/sale-pro.jpg" alt="">
        </div>
        <div class="pro-desc">
          <div class="label">男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表</div>
          <div class="new-price">
            <span>89.96 SAR</span>
            <span class="rate">-%43</span>
          </div>
          <div class="old-pricer">157.46</div>
          <div class="bottom clearfix">
            <div class="stock">
              <p>196剩余库存</p>
              <p class="progress"> <x-progress :percent="percent2" :show-cancel="false"></x-progress></p>
            </div>
            <div class="btn">点击抢购</div>
          </div>
        </div>
      </div>
      <div class="promo-item">
        <div class="pro-img">
          <img src="./images/sale-pro.jpg" alt="">
        </div>
        <div class="pro-desc">
          <div class="label">男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表</div>
          <div class="new-price">
            <span>89.96 SAR</span>
            <span class="rate">-%43</span>
          </div>
          <div class="old-pricer">157.46</div>
          <div class="bottom clearfix">
            <div class="stock">
              <p>196剩余库存</p>
              <p class="progress"> <x-progress :percent="percent2" :show-cancel="false"></x-progress></p>
            </div>
            <div class="btn">点击抢购</div>
          </div>
        </div>
      </div>
      <div class="promo-item">
        <div class="pro-img">
          <img src="./images/sale-pro.jpg" alt="">
        </div>
        <div class="pro-desc">
          <div class="label">男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表</div>
          <div class="new-price">
            <span>89.96 SAR</span>
            <span class="rate">-%43</span>
          </div>
          <div class="old-pricer">157.46</div>
          <div class="bottom clearfix">
            <div class="stock">
              <p>196剩余库存</p>
              <p class="progress"> <x-progress :percent="percent2" :show-cancel="false"></x-progress></p>
            </div>
            <div class="btn">点击抢购</div>
          </div>
        </div>
      </div>
      <div class="promo-item">
        <div class="pro-img">
          <img src="./images/sale-pro.jpg" alt="">
        </div>
        <div class="pro-desc">
          <div class="label">男生手表男生手表男生手表男生手表男生手表男生手表男生手表男生手表</div>
          <div class="new-price">
            <span>89.96 SAR</span>
            <span class="rate">-%43</span>
          </div>
          <div class="old-pricer">157.46</div>
          <div class="bottom clearfix">
            <div class="stock">
              <p>196剩余库存</p>
              <p class="progress"> <x-progress :percent="percent2" :show-cancel="false"></x-progress></p>
            </div>
            <div class="btn">点击抢购</div>
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
      percent2: 60,
      time1: '2018-07-13 21:54',
    };
  },
  created() {
    setTimeout(() => {
      this.time1 = '2018-08-13 22:54';
    }, 5000);
  },
};
</script>

<style scoped src="./index.css"></style>
