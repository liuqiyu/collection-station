<template>
  <div>
    <div class="h-view">
      <div class="view-img">
        <img src="./images/mian-bg.jpg" alt="">
      </div>
      <div class="view-culomn" :style="{ top: this.$store.state.main.homeCulomnTop + 'px'}">
        <div class="view-culomn-item item-left">
          <div class="view-culomn-col">
            <span class="v-btn" @click="showProducts('male')">Men's wristwatch</span>
          </div>
          <div class="view-culomn-col">
            <span class="v-btn" @click="showProducts('female')">Women's wristwatch</span>
          </div>
        </div>
        <div class="view-culomn-item item-right">
          <div class="view-culomn-col">
            <span class="v-btn" @click="showProducts('intelligence')">Intelligent style</span>
          </div>
          <div class="view-culomn-col">
            <span class="v-btn" @click="showProducts('recommendation')">New recommendation</span>
          </div>
        </div>
      </div>
      <div class="view-show-more" v-if="this.$store.state.main.homeShowMore">
        <img src="./images/showmore.png" alt="">
      </div>
    </div>
    <div class="h-sale" @click="showPromotion">
      <img src="./images/sale.png" alt="">
    </div>
    <div class="h-show-all" @click="showAll">
      <img src="./images/showall.png" alt="">
    </div>
    <div class="h-swipe">
      <swiper auto dots-position="center" height="2.75rem">
        <swiper-item class="black">
          <flexbox :gutter="0" wrap="wrap">
            <flexbox-item :span="1/3">
              <div class="flex-demo">
                <div class="flex-demo-img">
                  <img src="./images/sample.png" alt="">
                </div>
                <div class="flex-demo-desc">
                  <div class="flex-demo-name">ABCD</div>
                  <div class="flex-demo-describe">Design is b</div>
                  <div class="flex-demo-price">$999</div>
                </div>
              </div>
            </flexbox-item>
            <flexbox-item :span="1/3">
              <div class="flex-demo">
                <div class="flex-demo-img">
                  <img src="./images/sample.png" alt="">
                </div>
                <div class="flex-demo-desc">
                  <div class="flex-demo-name">ABCD</div>
                  <div class="flex-demo-describe">Design is b</div>
                  <div class="flex-demo-price">$999</div>
                </div>
              </div>
            </flexbox-item>
            <flexbox-item :span="1/3">
              <div class="flex-demo">
                <div class="flex-demo-img">
                  <img src="./images/sample.png" alt="">
                </div>
                <div class="flex-demo-desc">
                  <div class="flex-demo-name">ABCD</div>
                  <div class="flex-demo-describe">Design is b</div>
                  <div class="flex-demo-price">$999</div>
                </div>
              </div>
            </flexbox-item>
          </flexbox>
        </swiper-item>
        <swiper-item class="black">
          <flexbox :gutter="0" wrap="wrap">
            <flexbox-item :span="1/3">
              <div class="flex-demo">
                <div class="flex-demo-img">
                  <img src="./images/sample.png" alt="">
                </div>
                <div class="flex-demo-desc">
                  <div class="flex-demo-name">ABCD</div>
                  <div class="flex-demo-describe">Design is b</div>
                  <div class="flex-demo-price">$999</div>
                </div>
              </div>
            </flexbox-item>
            <flexbox-item :span="1/3">
              <div class="flex-demo">
                <div class="flex-demo-img">
                  <img src="./images/sample.png" alt="">
                </div>
                <div class="flex-demo-desc">
                  <div class="flex-demo-name">ABCD</div>
                  <div class="flex-demo-describe">Design is b</div>
                  <div class="flex-demo-price">$999</div>
                </div>
              </div>
            </flexbox-item>
            <flexbox-item :span="1/3">
              <div class="flex-demo">
                <div class="flex-demo-img">
                  <img src="./images/sample.png" alt="">
                </div>
                <div class="flex-demo-desc">
                  <div class="flex-demo-name">ABCD</div>
                  <div class="flex-demo-describe">Design is b</div>
                  <div class="flex-demo-price">$999</div>
                </div>
              </div>
            </flexbox-item>
          </flexbox>
        </swiper-item>
        <swiper-item class="black">
          <flexbox :gutter="0" wrap="wrap">
            <flexbox-item :span="1/3">
              <div class="flex-demo">
                <div class="flex-demo-img">
                  <img src="./images/sample.png" alt="">
                </div>
                <div class="flex-demo-desc">
                  <div class="flex-demo-name">ABCD</div>
                  <div class="flex-demo-describe">Design is b</div>
                  <div class="flex-demo-price">$999</div>
                </div>
              </div>
            </flexbox-item>
            <flexbox-item :span="1/3">
              <div class="flex-demo">
                <div class="flex-demo-img">
                  <img src="./images/sample.png" alt="">
                </div>
                <div class="flex-demo-desc">
                  <div class="flex-demo-name">ABCD</div>
                  <div class="flex-demo-describe">Design is b</div>
                  <div class="flex-demo-price">$999</div>
                </div>
              </div>
            </flexbox-item>
            <flexbox-item :span="1/3">
              <div class="flex-demo">
                <div class="flex-demo-img">
                  <img src="./images/sample.png" alt="">
                </div>
                <div class="flex-demo-desc">
                  <div class="flex-demo-name">ABCD</div>
                  <div class="flex-demo-describe">Design is b</div>
                  <div class="flex-demo-price">$999</div>
                </div>
              </div>
            </flexbox-item>
          </flexbox>
        </swiper-item>
      </swiper>
    </div>
    <div class="h-preview">
      <img src="./images/preview.jpg" alt="">
    </div>
    <div class="h-grid">
      <header class="g-header">
        <img src="./images/title.png" alt="">
      </header>
      <section>
        <flexbox :gutter="0" wrap="wrap">
          <flexbox-item :span="1/2">
            <div class="gird-item p-left">
              <div class="gird-item-cell clearfix">
                <div class="cell-left">
                  <div class="cell-p">
                    <span class="name">ABCD</span>
                    <span class="price">$999</span>
                  </div>
                  <div class="cell-rate">
                    <rater v-model="data4" :font-size="12" :margin="1" disabled></rater>
                  </div>
                </div>
                <div class="cell-right">
                  <img src="./images/item.png" alt="">
                </div>
              </div>
            </div>
          </flexbox-item>
          <flexbox-item :span="1/2">
            <div class="gird-item p-right">
              <div class="gird-item-cell clearfix">
                <div class="cell-left">
                  <div class="cell-p">
                    <span class="name">ABCD</span>
                    <span class="price">$999</span>
                  </div>
                  <div class="cell-rate">
                    <rater v-model="data4" :font-size="12" :margin="1" disabled></rater>
                  </div>
                </div>
                <div class="cell-right">
                  <img src="./images/item.png" alt="">
                </div>
              </div>
            </div>
          </flexbox-item>
          <flexbox-item :span="1/2">
            <div class="gird-item p-left">
              <div class="gird-item-cell clearfix">
                <div class="cell-left">
                  <div class="cell-p">
                    <span class="name">ABCD</span>
                    <span class="price">$999</span>
                  </div>
                  <div class="cell-rate">
                    <rater v-model="data4" :font-size="12" :margin="1" disabled></rater>
                  </div>
                </div>
                <div class="cell-right">
                  <img src="./images/item.png" alt="">
                </div>
              </div>
            </div>
          </flexbox-item>
          <flexbox-item :span="1/2">
            <div class="gird-item p-right">
              <div class="gird-item-cell clearfix">
                <div class="cell-left">
                  <div class="cell-p">
                    <span class="name">ABCD</span>
                    <span class="price">$999</span>
                  </div>
                  <div class="cell-rate">
                    <rater v-model="data4" :font-size="12" :margin="1" disabled></rater>
                  </div>
                </div>
                <div class="cell-right">
                  <img src="./images/item.png" alt="">
                </div>
              </div>
            </div>
          </flexbox-item>
        </flexbox>
      </section>
    </div>
    <div class="h-section">
      <img src="./images/section.png" alt="">
    </div>
    <footbar></footbar>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { Swiper, SwiperItem, Flexbox, FlexboxItem, Rater } from 'vux';
import footbar from './../../components/footbar';

export default {
  mounted() {
    this.setHomeCulomnTop();
  },
  data() {
    return {
      data4: 4,
    };
  },
  components: {
    Swiper,
    SwiperItem,
    Flexbox,
    FlexboxItem,
    footbar,
    Rater,
  },
  methods: {
    ...mapActions([
      'setHomeCulomnTop',
    ]),
    showProducts(type) {
      this.$router.push({
        path: '/products',
        query: {
          type,
        },
      });
    },
    showPromotion() {
      this.$router.push({
        path: '/promotion',
      });
    },
    showAll() {
      this.$router.push({
        path: '/products',
      });
    },
  },
};
</script>

<style scoped src="./home.css"></style>
