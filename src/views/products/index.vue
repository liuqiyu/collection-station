<template>
  <div class="silver">
    <div class="title">{{title}}</div>
    <div class="pro-list" ref="proList" v-if="this.$store.state.products.productsList.length > 0">
      <flexbox :gutter="0" wrap="wrap">
        <flexbox-item :span="1/2" v-for="(item, index) in productsList" :key="index">
          <div class="list-item" @click="showDetails">
            <div class="img">
              <img src="./images/products.jpg" alt="">
              <!--<x-img :src="@/images/products.jpg"-->
                     <!--class="ximg-demo" error-class="ximg-error"-->
                     <!--:offset="-100"></x-img>-->
            </div>
            <div class="desc">
              <p class="name">{{item.name}}</p>
              <p class="price">${{item.price}}</p>
            </div>
            <div class="btn">
              <span @click.stop="addCart(item)">{{$t('m.addToCart')}}</span>
            </div>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <footbar></footbar>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import { Flexbox, FlexboxItem, XImg } from 'vux';
import footbar from './../../components/footbar';

export default {
  components: {
    Flexbox,
    FlexboxItem,
    footbar,
    XImg,
  },
  data() {
    return {
      title: null,
      type: null,
    };
  },
  computed: {
    ...mapState({
      productsList: state => state.products.productsList,
    }),
  },
  watch: {
    '$route'() {
      this.checkType();
      this.setProductsList(this.$route.query.type);
      this.getData();
    },
  },
  mounted() {
    this.checkType();
    this.setProductsList(this.$route.query.type);
    this.getData();
  },
  methods: {
    ...mapMutations([
      'ADD_CART',
    ]),
    ...mapActions([
      'setProductsList',
    ]),
    checkType() {
      if (this.$route.query.type === undefined) {
        this.type = 'all';
      } else {
        this.type = this.$route.query.type;
      }
      switch (this.type) {
        case 'all':
          this.title = this.$t('m.allProducts');
          break;
        case 'intelligence':
          this.title = this.$t('m.smartWatch');
          break;
        case 'male':
          this.title = this.$t('m.menWatch');
          break;
        case 'female':
          this.title = this.$t('m.ladiesWatch');
          break;
        default:
          break;
      }
    },
    getData() {
      setTimeout(() => {
        if (this.productsList.length % 2 === 0) {
          this.$refs.proList.classList.add('is-even');
        } else {
          this.$refs.proList.classList.remove('is-even');
        }
      });
    },
    addCart(item) {
      this.$router.push({
        path: '/cart',
      });
      // 添加至购物车
      this.ADD_CART(item);
    },
    showDetails() {
      this.$router.push({
        path: '/proDetails',
      });
    },
  },
};
</script>

<style scoped>
  .title {
    width: 100%;
    height: 0.38rem;
    line-height: 0.38rem;
    text-align: center;
    font-size: 0.16rem;
    margin-bottom: 0.16rem;
    background: #fff;
  }

  .pro-list {
    width: 100%;
    background: #fff;
  }

  .list-item {
    width: 100%;
    height: 2.25rem;
    border-bottom: 1px solid #f2e4d4;
    border-right: 1px solid #f2e4d4;
    padding-top: 0.1rem;
  }

  .vux-flexbox-item:nth-child(even) .list-item {
    border-right: none;
  }

  .vux-flexbox-item:last-child .list-item {
    border-bottom: none;
  }

  .is-even .vux-flexbox-item:nth-last-child(2) .list-item {
    border-bottom: none;
  }

  .list-item .img {
    width: 1.2rem;
    height: 1.2rem;
    overflow: hidden;
    margin: 0 auto;
  }

  .list-item .img > img {
    width: 100%;
  }

  .list-item .desc {
    text-align: center;
  }

  .list-item .btn {
    margin-top: 0.1rem;
  }

  .list-item .btn span {
    width: 0.82rem;
    height: 0.24rem;
    display: block;
    background: #000;
    text-align: center;
    line-height: 0.24rem;
    color: #fff;
    margin: 0 auto;
  }

  .list-item .desc p {
    margin-top: 0.1rem;
    font-size: 0.12rem;
  }
</style>
