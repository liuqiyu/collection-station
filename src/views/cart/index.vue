<template>
  <div class="cart">
    <div class="cart-list">
      <div class="cart-item">
        <div class="cart-img">
          <img src="./images/pro.jpg" alt="">
        </div>
        <div class="cart-desc">
          <div class="label">CLASSIC SUFFOLK</div>
          <div class="price">1 X 1999</div>
          <div class="other">
            <div class="spec">4MM</div>
            <div class="num">
              <x-number :value="10" width="40px" fillable></x-number>
            </div>
          </div>
          <span class="delete iconfont icon-huishouzhan"></span>
        </div>
      </div>
      <div class="cart-item">
        <div class="cart-img">
          <img src="./images/pro.jpg" alt="">
        </div>
        <div class="cart-desc">
          <div class="label">CLASSIC SUFFOLK</div>
          <div class="price">1 X 1999</div>
          <div class="other">
            <div class="spec">4MM</div>
            <div class="num">
              <x-number :value="10" width="40px" fillable></x-number>
            </div>
          </div>
          <span class="delete iconfont icon-huishouzhan"></span>
        </div>
      </div>
      <div class="cart-item">
        <div class="cart-img">
          <img src="./images/pro.jpg" alt="">
        </div>
        <div class="cart-desc">
          <div class="label">CLASSIC SUFFOLK</div>
          <div class="price">1 X 1999</div>
          <div class="other">
            <div class="spec">4MM</div>
            <div class="num">
              <x-number :value="10" width="40px" fillable></x-number>
            </div>
          </div>
          <span class="delete iconfont icon-huishouzhan"></span>
        </div>
      </div>
    </div>
    <div class="a-pro">
      <span class="btn">继续添加商品</span>
    </div>
  </div>
</template>

<script>
import { XNumber, Group } from 'vux';

export default {
  components: {
    XNumber,
    Group,
  },
};
</script>

<style scoped>
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
    padding-left: 0.4rem;
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
    font-size: 0.14rem;
    margin-bottom: 0.1rem;
  }

  .cart-desc .price {
    font-size: 0.13rem;
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
    font-size: 0.13rem;
  }

  .a-pro {
    width: 100%;
    overflow: hidden;
    height: 0.58rem;
    padding-top: 0.1rem;
    background: url("./images/bg.png");
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
</style>
