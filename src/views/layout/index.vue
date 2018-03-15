<template>
  <div>
    <topbar></topbar>
    <router-view></router-view>
  </div>
</template>

<script>
import { Group, Cell } from 'vux';
import topbar from './../../components/topbar';

export default {
  components: {
    topbar,
    Group,
    Cell,
  },
  methods: {
    change(lang) {
      switch (lang) {
        case 'ch':
          this.$i18n.locale = 'zh-CN';
          break;
        case 'en':
          this.$i18n.locale = 'en-US';
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style scoped></style>
