<template>
  <div class="order-details silver">
    <miniHeaher :title="title"></miniHeaher>
    <div class="address-details">
      <div class="details-item">
        <label>{{$t('m.recipient')}}</label>
        <div class="desc">
          <span>张思</span>
          <span>13652525252</span>
        </div>
      </div>
      <div class="details-item">
        <label>{{$t('m.deliveryAddress')}}</label>
        <div class="desc">
          <span>深圳南山</span>
        </div>
      </div>
      <div class="details-item">
        <label>{{$t('m.note')}}</label>
        <div class="desc">
          <span>快点</span>
        </div>
      </div>
    </div>
    <div class="baby-details">
      <header>{{$t('m.orderDetails')}}</header>
      <section>
        <div class="baby-item"
             v-for="(item, index) in cartList" v-if="index === 1" :key="index">
          <div class="left">
            <div class="logo">
              <img src="./images/products.jpg" alt="">
            </div>
          </div>
          <div class="row">
            <section class="cell">
              <span class="label">{{item.label}}</span>
              <span class="number">{{item.number}}</span>
            </section>
            <section class="cell">
              <span class="spec">{{item.spec}}</span>
              <span class="price">{{item.price}}</span>
            </section>
          </div>
        </div>
        <div class="baby-item"
             v-for="(item, index) in cartList" v-if="index > 1" v-show="showAll" :key="index">
          <div class="left">
            <div class="logo">
              <img src="./images/products.jpg" alt="">
            </div>
          </div>
          <div class="row">
            <section class="cell">
              <span class="label">{{item.label}}</span>
              <span class="number">{{item.number}}</span>
            </section>
            <section class="cell">
              <span class="spec">{{item.spec}}</span>
              <span class="price">{{item.price}}</span>
            </section>
          </div>
        </div>
      </section>
      <div class="baby-btn-wrap" v-if="cartList.length > 1">
        <div class="baby-btn" v-if="!showAll" @click="showList">
          <span class="icon iconfont icon-xiangxiajiantou"></span>
          <span>{{$t('m.learnMore')}}</span>
        </div>
        <div class="baby-btn" v-else @click="showList">
          <span class="icon iconfont icon-xiangshang_jiantou"></span>
          <span>关闭</span>
        </div>
      </div>
    </div>
    <div class="baby-number">
      <p>{{$t('m.orderNumber')}}：<span>01010102001200</span></p>
      <p>{{$t('m.orderTime')}}：<span class="date">2016/01/03</span><span class="time">16:01:01</span></p>
    </div>
    <div class="baby-price">
      <div class="price-item">
        <label>{{$t('m.commodityPrice')}}</label>
        <span>$199999</span>
      </div>
      <div class="price-item">
        <label>{{$t('m.shippingFee')}}</label>
        <span>$0</span>
      </div>
      <div class="price-item">
        <label></label>
        <span class="total-price">$199999</span>
      </div>
    </div>
    <div class="footer clearfix">
      <div class="foot-item">7天进行测试</div>
      <div class="foot-item">获取现金收据</div>
    </div>
  </div>
</template>

<script>
import miniHeaher from './../../components/miniHeaher';

export default {
  components: {
    miniHeaher,
  },
  data() {
    return {
      showAll: false,
      cartList: [
        {
          label: 'casio限量版手表casio限量版手表casio限量版手表casio限量版手表',
          number: '1',
          spec: '颜色表带',
          price: '$1234',
        },
        {
          label: 'casio限量版手表casio限量版手表casio限量版手表casio限量版手表',
          number: '1',
          spec: '颜色表带',
          price: '$1234',
        },
        {
          label: 'casio限量版手表casio限量版手表casio限量版手表casio限量版手表',
          number: '1',
          spec: '颜色表带',
          price: '$1234',
        },
        {
          label: 'casio限量版手表casio限量版手表casio限量版手表casio限量版手表',
          number: '1',
          spec: '颜色表带',
          price: '$1234',
        },
      ],
    };
  },
  computed: {
    title() {
      return this.$t('m.viewDetails')
    }
  },
  methods: {
    showList() {
      if (this.showAll) {
        this.showAll = false;
      } else {
        this.showAll = true;
      }
    },
  },
};
</script>

<style scoped>
  .address-details {
    background: #fff;
    padding-left: 0.21rem;
    padding-right: 0.05rem;
    font-size: 0.12rem;
    padding-bottom: 0.2rem;
  }

  .details-item {
    margin-bottom: 0.06rem;
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
  }

  .details-item label {
    position: relative;
    -webkit-flex: none;
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 0.7rem;
    text-align: left;
  }

  .details-item .desc {
    padding-left: 0.05rem;
  }

  .baby-details {
    margin-top: 0.11rem;
    background: #fff;
    padding-bottom: 0.12rem;
  }

  .baby-details header {
    padding: 0.08rem 0 0.08rem 0.2rem;
    font-size: 0.14rem;
  }

  .baby-details > section {
    width: 100%;
    padding-bottom: 0.1rem;
  }

  .baby-item {
    width: 100%;
    padding: 0.08rem 0.08rem 0.08rem 0.1rem;
    border-top: 1px solid #efefef;
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
  }

  .baby-item .left {
    position: relative;
    -webkit-flex: none;
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
  }

  .baby-item .left .logo {
    width: 0.82rem;
    height: 0.82rem;
    border: 1px solid #eee;
    overflow: hidden;
  }

  .baby-item .left .logo > img {
    width: 100%;
    vertical-align: top;
  }

  .baby-item .row {
    width: 100%;
    margin-left: 0.15rem;
  }

  .baby-item .row .cell {
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: space-between;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    overflow: hidden;
    margin-bottom: 0.1rem;
  }

  .baby-item .row .cell .number {
    width: 1rem;
    display: block;
    text-align: right;
    font-weight: bold;
  }

  .baby-item .row .cell .spec {
    color: #666;
  }

  .baby-item .row .cell .price {
    font-size: 0.12rem;
    font-weight: bold;
  }

  .baby-btn-wrap {
    text-align: center;
  }

  .baby-btn {
    display: inline-block;
    padding: 0 0.1rem;
    height: 0.26rem;
    background: #000;
    margin: 0 auto;
    color: #fff;
    text-align: center;
    line-height: 0.26rem;
  }

  .baby-btn span {
    vertical-align: top;
  }

  .baby-btn .icon {
    font-size: 0.12rem;
  }

  .baby-number {
    margin-top: 0.11rem;
    background: #fff;
    padding: 0.1rem 0 0.06rem 0.16rem;
    color: #4d4d4d;
    font-size: 0.12rem;
  }

  .baby-number p {
    margin-bottom: 0.04rem;
  }

  .baby-number p .date {
    margin-right: 0.1rem;
  }

  .baby-price {
    width: 100%;
    padding: 0.1rem 0.05rem 0.4rem 0.16rem;
    background: #fff;
    margin-top: 0.11rem;
    border-bottom: 1px solid #efefef;
  }

  .baby-price .price-item {
    color: #4d4d4d;
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
    margin-bottom: 0.06rem;
  }

  .total-price {
    font-size: 0.16rem;
    color: red;
  }

  .footer {
    width: 100%;
    padding-bottom: 1rem;
    background: #fff;
  }

  .foot-item {
    width: 50%;
    float: left;
    text-align: center;
    padding-top: 0.08rem;
    color: #999;
  }
</style>
