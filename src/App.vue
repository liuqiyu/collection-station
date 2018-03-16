<template>
  <div id="app">
    <loading v-model="isLoading"></loading>
    <router-view/>
  </div>
</template>

<script>
import { Loading } from 'vux';
import { mapState } from 'vuex';

export default {
  components: {
    Loading,
  },
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading,
    }),
  },
};
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
</style>
