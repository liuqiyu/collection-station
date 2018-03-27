<template>
  <div class="address" :style="{height: height + 'px'}">
    <div class="address-wrap">
      <div class="title">{{$t('m.checkOut')}}</div>
      <div class="total" v-if="showTotalPrice">
        <group>
          <cell class="red-color" :title="$t('m.commodityPrice')" :is-loading="!money" :value="money"></cell>
        </group>
      </div>
      <div class="cart-list" v-if="!showTotalPrice">
        <div class="cart-item" :key="index">
          <div class="cart-img">
            <img src="./images/pro.jpg" alt="">
          </div>
          <div class="cart-desc">
            <div class="label">{{promotionData.name}}</div>
            <div class="price">{{promotionData.number}} X {{promotionData.price}}</div>
            <div class="other">
              <div class="spec">{{promotionData.spec}}</div>
              <div class="num">
                <x-number v-model="promotionData.number" :min="1" width="40px" fillable></x-number>
              </div>
            </div>
          </div>
        </div>
      </div>
      <group :title="$t('m.yourAddress')" title-color="#000">
        <x-input :title="$t('m.Address')" placeholder="" v-model="address"></x-input>
        <x-input :title="$t('m.name')" placeholder="" v-model="username"></x-input>
        <x-input :title="$t('m.postCode')" placeholder="" v-model="zipcode"></x-input>
        <x-input :title="$t('m.phoneNumber')" placeholder="" v-model="phone"></x-input>
        <x-input :title="$t('m.emailAddress')" placeholder="" v-model="email"></x-input>
        <x-textarea :title="$t('m.note')" v-model="content"></x-textarea>
        <x-switch :title="$t('m.cashOnDelivery')" disabled :value="cashOnDelivery"></x-switch>
      </group>
    </div>
    <div class="cart-bottom">
      <div class="cart-btn">
        <span @click="submitOrder">{{$t('m.submitOrder')}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import BScroll from 'better-scroll';
import { XInput, Group, XTextarea, XSwitch, Cell, XNumber, Confirm } from 'vux';
import { getHeight } from './../../utils/height';

export default {
  data() {
    return {
      address: null,
      username: null,
      zipcode: null,
      phone: null,
      email: null,
      content: null,
      cashOnDelivery: true,
      money: '￥123',
      height: 0,
      cartList: [
        {
          label: 'CLASSIC SUFFOLK1',
          number: 1,
          spec: '4MM',
          price: '1999',
        },
      ],
      index: null,
      show: false,
      showTotalPrice: true,
    };
  },
  computed: {
    ...mapState({
      promotionData: state => state.cart.promotionData,
    }),
  },
  mounted() {
    this.GET_PROMOTION_DATA();
    const wrapper = document.querySelector('.address');
    this.scroll = new BScroll(wrapper);
    this.height = getHeight(['.c-topbar']);
    if (this.$route.query.type === 'cart') {
      this.showTotalPrice = true;
    } else if (this.$route.query.type === 'promotion') {
      this.showTotalPrice = false;
    }
  },
  components: {
    XInput,
    Group,
    XTextarea,
    XSwitch,
    Cell,
    XNumber,
    Confirm,
  },
  methods: {
    ...mapMutations([
      'GET_PROMOTION_DATA',
    ]),
    submitOrder() {
      this.$router.push({
        path: '/buySuccess',
      });
    },
    addProducts() {
      this.$router.push({
        path: '/products',
      });
    },
    recovery(item, index) {
      this.index = index;
      this.show = true;
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

  .address-wrap {
    width: 100%;
    padding-bottom: 1rem;
  }

  .title {
    text-align: center;
    padding: 0.25rem 0 0.2rem 0;
    font-size: 0.2rem;
  }

  .cart-bottom {
    position: fixed;
    padding: 0.1rem;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    background: #fff;
    border-top: 1px solid #eee;
  }
  .cart-btn {
    background: #fff;
    /*padding: 0.1rem 0;*/
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

  .cart-list {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
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
</style>
