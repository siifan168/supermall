<!--  -->
<template>
  <div id="detail-bottom-bar">
    <div class="left">
      <span>
        <p class="icon1"></p>
        <p>客服</p>
      </span>
      <span>
        <p class="icon2"></p>
        <p>店铺</p>
      </span>
      <span>
        <p class="icon3"></p>
        <p>收藏</p>
      </span>
    </div>
    <div class="right">
      <span class="yellow" @click='addCart'>加入购物车</span>
      <span class="pink">购买</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailBottomBar',
  methods: {
    addCart() {
      this.$emit('addClick')
    }
  }
}

</script>
<style  scoped>
#detail-bottom-bar {
  height: 49px;
  background-color: #fff;
  position: fixed;
  bottom: -3px;
  left: 0;
  right: 0;
  z-index: 99;
}
.left {
  width: 50%;
  display: flex;
  border-right: 1px solid #ccc;
  text-align: center;
}
.left span {
  display: flex;
  flex-direction: column;
  flex: 1;
  /* padding-left: 10px; */
  font-size: 14px;
}
.icon1,
.icon2,
.icon3 {
  margin: 0 auto;
  width: 29px;
  height: 29px;
  background: url('~assets/img/detail/detail_bottom.png') no-repeat;
  background-size: 29px;
}
.icon1 {
  background-position: 0 -68px;
}
.icon2 {
  background-position: 0 -130px;
}
.icon3 {
  background-position: 0 0;
}
.right {
  display: flex;
  width: 50%;
  height: 100%;
  text-align: center;
  font-size: 16px;
  line-height: 49px;
}
.yellow {
  flex: 1;
  background-color: yellow;
  color: #000;
}
.pink {
  flex: 1;
  background-color: pink;
  color: #fff;
}
</style>