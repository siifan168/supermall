<!--  -->
<template>
  <div id='shopInfo'>
    <div class="shopLogo">
      <img :src="shops.logo" alt="">
      <span>{{shops.name}}</span>
    </div>
    <div class="shopTitle">
      <div class="titleLeft"> 
        <span>
          <p>{{shops.sells}}</p>
          <p>总销量</p>
        </span>
        <span>
          <p>{{shops.goodssCount}}</p>
          <p>全部宝贝</p>
        </span>
      </div>
      <div class="titleRight">
        <span :key='item.index' 
        v-for="item in shops.score"
        :class="[{isB: item.isBetter},{isN: !item.isBetter}]">
        {{item.name + ' ' + item.score}}
        <span v-if="item.isBetter">高</span>
        <span v-else>低</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  data () {
    return {
    };
  },
  props: {
    shops: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}

</script>
<style scoped>
.shopInfo {
  padding-top: 50px;
}

.shopLogo span{
  font-size: 10px;
}
.shopLogo img {
  width: 50px;
  height: 50px;
  margin: 10px;
  vertical-align: middle;
}
.shopTitle {
  display: flex;
}
.titleLeft {
  display: flex;
}
.titleLeft span p{
  padding-left: 10px;
  font-size: 20px;
  padding-bottom: 5px;
}
.titleLeft span:nth-child(2) {
  padding-right: 50%;
  border-right: 1px solid #ccc;
}
.titleLeft span p:nth-child(2) {
  font-size: 14px;
}
.titleRight {
  display: flex;
  flex-direction: column;
  padding-left: 70px;
  font-size: 14px;
}
.titleRight span {
  padding: 2px;
}
.isB {
  color: pink;
}
.isN {
  color: green;
}
</style>