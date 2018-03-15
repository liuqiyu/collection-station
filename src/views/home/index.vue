<template>
  <div>
    <div class="h-view">
      <div class="view-culomn">
        <div class="view-culomn-item item-left">
          <div class="view-culomn-col">
            <span class="v-btn" @click="showProducts">Men's wristwatch</span>
          </div>
          <div class="view-culomn-col">
            <span class="v-btn">Men's wristwatch</span>
          </div>
        </div>
        <div class="view-culomn-item item-right">
          <div class="view-culomn-col">
            <span class="v-btn">Men's wristwatch</span>
          </div>
          <div class="view-culomn-col">
            <span class="v-btn">Men's wristwatch</span>
          </div>
        </div>
      </div>
    </div>
    <div class="h-swipe">
      <swiper auto height="1.56rem" dots-position="center">
        <swiper-item class="black">
          <flexbox :gutter="11">
            <flexbox-item><div class="flex-demo">1</div></flexbox-item>
            <flexbox-item><div class="flex-demo">2</div></flexbox-item>
            <flexbox-item><div class="flex-demo">3</div></flexbox-item>
          </flexbox>
        </swiper-item>
        <swiper-item class="black">
          <flexbox :gutter="11">
            <flexbox-item><div class="flex-demo">4</div></flexbox-item>
            <flexbox-item><div class="flex-demo">5</div></flexbox-item>
            <flexbox-item><div class="flex-demo">6</div></flexbox-item>
          </flexbox>
        </swiper-item>
        <swiper-item class="black">
          <flexbox :gutter="11">
            <flexbox-item><div class="flex-demo">7</div></flexbox-item>
            <flexbox-item><div class="flex-demo">8</div></flexbox-item>
            <flexbox-item><div class="flex-demo">9</div></flexbox-item>
          </flexbox>
        </swiper-item>
      </swiper>
    </div>
    <div class="h-preview"></div>
    <div class="h-grid">
      <header class="g-header">FEATURED RECOMMENDATIONS</header>
      <section>
        <flexbox :gutter="0" wrap="wrap">
          <flexbox-item :span="1/2">
            <div class="gird-item p-left">
              <div class="gird-item-cell"></div>
            </div>
          </flexbox-item>
          <flexbox-item :span="1/2">
            <div class="gird-item p-right">
              <div class="gird-item-cell"></div>
            </div>
          </flexbox-item>
          <flexbox-item :span="1/2">
            <div class="gird-item p-left">
              <div class="gird-item-cell"></div>
            </div>
          </flexbox-item>
          <flexbox-item :span="1/2">
            <div class="gird-item p-right">
              <div class="gird-item-cell"></div>
            </div>
          </flexbox-item>
        </flexbox>
      </section>
    </div>
    <div class="h-section">
      <div class="sec-cell"></div>
      <div class="sec-cell"></div>
      <div class="sec-cell"></div>
      <div class="sec-cell"></div>
    </div>
    <footbar></footbar>
  </div>
</template>

<script>
import { Swiper, SwiperItem, Flexbox, FlexboxItem } from 'vux';
import footbar from './../../components/footbar';

export default {
  components: {
    Swiper,
    SwiperItem,
    Flexbox,
    FlexboxItem,
    footbar,
  },
  methods: {
    showProducts() {
      this.$router.push({
        path: '/products',
      });
    },
  },
};
</script>

<style scoped src="./home.css"></style>
