<template>
  <div class="pro-details" :style="{height: height + 'px'}">
    <div class="scroll-box">
      <div class="p-rate">
        <rater v-model="rate" :font-size="20" :margin="0"></rater>
        <span class="score">
          192{{$t('m.grade')}}
        </span>
      </div>
      <div class="swiper">
        <swiper auto dots-position="center" height="1.6rem">
          <swiper-item class="black">
            <flexbox>
              <flexbox-item>
                <div class="flex-demo">
                  <div class="flex-demo-img">
                    <img src="./../brand/images/brand-bg.jpg" alt="">
                  </div>
                </div>
              </flexbox-item>
            </flexbox>
          </swiper-item>
          <swiper-item class="black">
            <flexbox :gutter="11">
              <flexbox-item>
                <div class="flex-demo">
                  <div class="flex-demo-img">
                    <img src="./../brand/images/brand-bg.jpg" alt="">
                  </div>
                </div>
              </flexbox-item>
            </flexbox>
          </swiper-item>
          <swiper-item class="black">
            <flexbox :gutter="11">
              <flexbox-item>
                <div class="flex-demo">
                  <div class="flex-demo-img">
                    <img src="./../brand/images/brand-bg.jpg" alt="">
                  </div>
                </div>
              </flexbox-item>
            </flexbox>
          </swiper-item>
        </swiper>
      </div>
      <div class="p-price">
        <p class="label">卡西欧A123456789</p>
        <p class="num">USD $991</p>
      </div>
      <div class="periphery">
        <swiper dots-position="center" height="2.4rem">
            <swiper-item class="black">
              <flexbox :gutter="0">
                <flexbox-item :span="1/3">
                  <div class="flex-demo">
                    <div class="flex-demo-img">
                      <img src="./images/sample.png" alt="">
                    </div>
                    <div class="flex-demo-desc">
                      <div class="flex-demo-radio">
                        <check-icon :value.sync="demo1"></check-icon>
                      </div>
                    </div>
                  </div>
                </flexbox-item>
                <flexbox-item :span="1/3">
                  <div class="flex-demo">
                    <div class="flex-demo-img">
                      <img src="./images/sample.png" alt="">
                    </div>
                    <div class="flex-demo-desc">
                      <div class="flex-demo-radio">
                        <check-icon :value.sync="demo1"></check-icon>
                      </div>
                    </div>
                  </div>
                </flexbox-item>
                <flexbox-item :span="1/3">
                  <div class="flex-demo">
                    <div class="flex-demo-img">
                      <img src="./images/sample.png" alt="">
                    </div>
                    <div class="flex-demo-desc">
                      <div class="flex-demo-radio">
                        <check-icon :value.sync="demo1"></check-icon>
                      </div>
                    </div>
                  </div>
                </flexbox-item>
              </flexbox>
            </swiper-item>
            <swiper-item class="black">
              <flexbox :gutter="0">
                <flexbox-item :span="1/3">
                  <div class="flex-demo">
                    <div class="flex-demo-img">
                      <img src="./images/sample.png" alt="">
                    </div>
                    <div class="flex-demo-desc">
                      <div class="flex-demo-radio">
                        <check-icon :value.sync="demo1"></check-icon>
                      </div>
                    </div>
                  </div>
                </flexbox-item>
                <flexbox-item :span="1/3">
                  <div class="flex-demo">
                    <div class="flex-demo-img">
                      <img src="./images/sample.png" alt="">
                    </div>
                    <div class="flex-demo-desc">
                      <div class="flex-demo-radio">
                        <check-icon :value.sync="demo1"></check-icon>
                      </div>
                    </div>
                  </div>
                </flexbox-item>
                <flexbox-item :span="1/3">
                  <div class="flex-demo">
                    <div class="flex-demo-img">
                      <img src="./images/sample.png" alt="">
                    </div>
                    <div class="flex-demo-desc">
                      <div class="flex-demo-radio">
                        <check-icon :value.sync="demo1"></check-icon>
                      </div>
                    </div>
                  </div>
                </flexbox-item>
              </flexbox>
            </swiper-item>
          </swiper>
        <div class="p-title">
          <span class="iconfont icon-caidan"></span>卡西欧A1234
        </div>
      </div>
      <div class="details">
        <!--<header>所有细节都在这里</header>-->
        <tab :line-width=2 active-color='#fc378c' v-model="index">
          <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2"
                    @click="demo2 = item" :key="index">{{item}}</tab-item>
        </tab>
        <div class="details-swiper">
          <swiper v-model="index" height="auto" :show-dots="false">
            <swiper-item v-for="(item, index) in list2" :key="index">
              <div class="tab-swiper vux-center">
                <div class="details-content">
                  <div class="cell">
                    <span>细节11</span>
                    <span>细节112</span>
                  </div>
                  <div class="cell">
                    <span>细节11</span>
                    <span>细节112</span>
                  </div>
                  <div class="cell">
                    <span>细节11</span>
                    <span>细节112</span>
                  </div>
                </div>
              </div>
            </swiper-item>
          </swiper>
        </div>
      </div>
      <div class="feedback">
        <header>192个客户反馈</header>
        <div class="feedback-box">
          <div class="item space-between">
            <rater v-model="rate" :font-size="20" :margin="0"></rater>
            <span class="date">2018/12/12</span>
          </div>
          <div class="item">
            <span>WILLIAN P.</span>
            <span style="color: #a9a9a9;">VERIFIED BUYER</span>
          </div>
          <div class="item">
            <span>LOVE THIS WATCH!!!</span>
          </div>
          <div class="item comment">
            <span>coolcoolcoolcoolcoolcoolcoolcoolcoolcoolcoolcoolc
              oolcoolcoolcoolcoolcoolcoolcoolcoolcoolcoolcoolcoolcoolcool</span>
          </div>
          <div class="item">
            <p class="share"><span class="iconfont icon-fenxiang"></span>分享</p>
            <div class="comment-think clearfix">
              <p class="text">你觉得酷吗？</p>
              <p><span class="icon iconfont icon-zan1"></span><span class="num">1</span></p>
              <p><span class="icon iconfont icon-buzan"></span><span class="num">2</span></p>
            </div>
          </div>
          <span class="right-btn iconfont icon-xiangyoujiantou"></span>
        </div>
      </div>
      <div class="may-like">
        <header>你可能喜欢</header>
        <section>
          <div class="pro-list" ref="proList">
            <flexbox :gutter="0" wrap="wrap">
              <flexbox-item :span="1/2" v-for="(item, index) in proList" :key="index">
                <div class="list-item">
                  <div class="img">
                    <img src="./../products/images/products.jpg" alt="">
                  </div>
                  <div class="desc">
                    <p class="name">卡西欧100katina</p>
                    <p class="price">$1999</p>
                  </div>
                </div>
              </flexbox-item>
            </flexbox>
          </div>
        </section>
      </div>
    </div>
    <div class="add-cart" @click="addCart">{{$t('m.addToCart')}}</div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import { Swiper, SwiperItem, Flexbox, FlexboxItem, Rater, Tab, TabItem, CheckIcon } from 'vux';
import { getHeight } from './../../utils/height';

const list = () => ['细节1', '细节2'];

export default {
  components: {
    Swiper,
    SwiperItem,
    Flexbox,
    FlexboxItem,
    Rater,
    Tab,
    TabItem,
    CheckIcon,
  },
  mounted() {
    const wrapper = document.querySelector('.pro-details');
    this.scroll = new BScroll(wrapper);
    this.height = getHeight(['.c-topbar']);
  },
  data() {
    return {
      proList: [1, 2, 3, 4],
      height: 0,
      rate: 4,
      list2: list(),
      demo2: '美食',
      index: 0,
      demo1: false,
    };
  },
  methods: {
    addCart() {
      this.$router.push({
        path: '/cart',
      });
    },
  },
};
</script>

<style scoped src="./index.css"></style>
