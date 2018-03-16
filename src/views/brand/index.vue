<template>
  <div>
    <div class="slide"></div>
    <div class="descript">
      <div class="title">CLOCKWISE 品牌故事</div>
      <div class="text">
        这个时期的开发基本上是“全栈开发”的模式，稍微好那么一点的地方是从一开始就走了前后端分离的路。虽然前后端分离，但是入口还是丢在了后端 Django 的服务器上，此时Web服务的入口就是一个 Django 的 template 。
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
  .slide {
    width: 100%;
    height: 1.62rem;
    background: pink;
  }

  .descript {
    padding: 0.32rem 0.23rem 0 0.23rem;
  }

  .descript .title {
    font-size: 0.18rem;
    text-align: center;
  }

  .descript .text {
    font-size: 0.13rem;
    letter-spacing: 2px;
    padding-top: 0.28rem;
    padding-bottom: 0.47rem;
    border-bottom: 1px solid #eaeaea;
    line-height: 0.28rem;
  }
</style>
