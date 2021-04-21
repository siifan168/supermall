<!--  -->
<template>
  <div id="detail-base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="newPrice">{{goods.newPrice}}</span>
      <span class="oldPrice">{{goods.oldPrice}}</span>
      <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
      <span class=""></span>
    </div>
    <div class="info-services">
      <span :key="item.index" v-for="item in goods.columns">
        {{item}}{{item.index}}
      </span>
    </div>
    <div class="goods-services">
      <span class="goods-services-item" 
            :key='item.index' 
            v-for="item in goods.services">
            <img :src="item.icon" alt="">{{item.name}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    },
  },
}

</script>
<style  scoped>
  .info-title {
    font-size: 17px;
  }
  .info-price {
    position: relative;
    margin-bottom: 10px;
  }
  .newPrice {
    color: var(--color-high-text);
  }
  .oldPrice {
    color: var(--color-text);
    font-size: 8px;
    text-decoration: line-through;
  }
  .discount {
    background-color: var(--color-high-text);
    color: #fff;
    /* padding: 3px; */
    position: absolute;
    top: 0;
    font-size: 5px;
    border-radius: 10px;
  }
  .info-services {
    display: flex;
    justify-content: space-around;
    padding: 5px;
    border-bottom: 2px solid #eee;
    font-size: 14px;
  }
  .info-services span {
    flex: 1;
    color: var(--color-text);
  }
  .goods-services {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    border-bottom: 2px solid #eee;
  }
  .goods-services img {
    width: 10px;
    height: 10px;
  }
  .goods-services-item {
    font-size: 1px;
    flex: 1;
  }
  #detail-base-info {
    position: relative;
    z-index: 999;
    background-color: #fff;
    /* height: 100vh; */
  }
</style>