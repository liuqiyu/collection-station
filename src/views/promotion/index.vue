<template>
  <div>
    <div class="slide">
      <img src="./images/sale-bg.png" alt="">
    </div>
    <div class="cloker">
      <span class="label">{{$t('m.countdown')}}：</span>
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
      <div class="promo-item" v-for="(item, index) in promotionsData" :key="index">
        <div class="pro-img">
          <img src="./images/sale-pro.jpg" alt="">
        </div>
        <div class="pro-desc">
          <div class="label">{{item.name}}</div>
          <div class="new-price">
            <span>{{item.price}} SAR</span>
            <span class="rate">{{item.rate}}</span>
          </div>
          <div class="old-pricer">{{item.oldPrice}}</div>
          <div class="bottom clearfix">
            <div class="stock">
              <p>{{item.stock}}{{$t('m.surplusStock')}}</p>
              <p class="progress">
                <x-progress :percent="item.percent" :show-cancel="false"></x-progress>
              </p>
            </div>
            <div class="btn" @click="panicBuying(item)">{{$t('m.clickAndBuyItNow')}}</div>
          </div>
        </div>
      </div>
    </div>
    <footbar></footbar>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
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
    };
  },
  computed: {
    ...mapState({
      promotionsData: state => state.products.promotionsList,
    }),
  },
  mounted() {
    setTimeout(() => {
      this.time1 = '2018-08-13 22:54';
    }, 5000);
    this.setPromotionsList();
  },
  methods: {
    ...mapActions([
      'setPromotionsList',
    ]),
    panicBuying(item) {
      this.$router.push({
        path: '/address',
        query: {
          type: 'promotion',
        },
      });
      const promotionData = item;
      sessionStorage.setItem('promotionData', JSON.stringify(promotionData));
    },
  },
};
</script>

<style scoped src="./index.css"></style>
